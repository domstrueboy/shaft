<template>
    <div class="article">
        <h1 class="article__title">{{ content.title }}</h1>
        <div class="article__body" v-html="content.body"></div>
    </div>
</template>

<script>
    export default {
        name: 'Article',

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
            getData: function (to) {

                let self = this;

                let indexOfSharp;
                let id;

                if (to === undefined) {
                    indexOfSharp = self.$route.params.article.lastIndexOf('$');
                    id = Number(self.$route.params.article.substr(indexOfSharp + 1));
                } else {
                    indexOfSharp = to.path.lastIndexOf('$');
                    id = Number(to.path.substr(indexOfSharp + 1));
                }

                fetch(`${self.addr}posts/${id}`)
                    .then((response) => { return response.json() })
                    .then((data) => {

                        self.content.title = data.title.rendered;
                        self.content.body = data.content.rendered;
                    })
                    .catch(error => { console.log(error) });
            }
        },

        mounted () {
            this.getData();
        },

        beforeRouteUpdate (to, from, next) {
            this.getData(to);
            next();
        }
    }
</script>

<style scoped>
.article {
    width: 100%;
}
</style>
