<template>
  <div v-html="content.body" class="contacts page"></div>
</template>

<script>
export default {
    name: 'Contacts',

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

            fetch(`${self.addr}pages?slug=contacts`)
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
.contacts {
    width: 100%;
    padding: calc(4*var(--main-padding));
    padding-right: 0;
}
</style>
