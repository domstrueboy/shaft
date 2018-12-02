<template>
    <div class="home">
        <h1>{{ content.title }}</h1>
        <div v-html="content.body"></div>
    </div>
</template>

<script>
export default {
    name: 'Home',

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

            fetch(`${self.addr}pages?slug=home`)
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
.home {
    width: 100%;
    padding: calc(2*var(--main-padding));
}
</style>
