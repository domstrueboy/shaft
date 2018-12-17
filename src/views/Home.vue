<template>
    <div class="home">
        <div class="page" v-html="content.body"></div>
        <GalleryComponent/>
    </div>
</template>

<script>
import GalleryComponent from '@/components/GalleryComponent.vue';

export default {
    name: 'Home',

    components: {
        GalleryComponent
    },

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
    padding: calc(4*var(--main-padding));
    padding-right: 0;
}
</style>
