<template>
  <div class="article">
    <h1>{{ content.title }}</h1>
    <div v-html="content.body"></div>
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
            content: {}
        }
    },

    methods: {
        getData: function () {

            let self = this;

            let indexOfSharp = self.$route.params.article.lastIndexOf('$');
            let id = Number(self.$route.params.article.substr(indexOfSharp + 1));

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
        // обрабатываем изменение параметров маршрута...
        // не забываем вызвать next()
        console.log('router');
    }
}
</script>
