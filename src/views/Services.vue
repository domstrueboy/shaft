<template>
  <div v-html="content.body" class="services page"></div>
</template>

<script>
export default {
    name: 'Services',

    props: {
        addr: String
    },

    data () {
        return {
            content: {
                title: 'Загрузка...',
                body: 'Загрузка...'
            }
        }
    },

    methods: {
        getPage: function () {

            let self = this;

            fetch(`${self.addr}pages?slug=services`)
                .then((response) => { return response.json() })
                .then((data) => {

                    self.content.title = data[0].title.rendered;
                    self.content.body = data[0].content.rendered;
                })
                .catch(error => { console.log(error) });
        }
    },

    mounted () {
        this.getPage();
    }
}
</script>

<style scoped>
.services {
    width: 100%;
    padding: calc(2*var(--main-padding));
    padding-right: 0;
}
</style>
