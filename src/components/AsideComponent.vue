<template>
    <aside class="aside">
        <section class="topics">
            <h3 class="topics__title">Разделы</h3>
            <ul class="topics__list">
                <li class="topics__item" v-for="topic in topics" :key="topic.id" v-if="topic.posts">
                    <h4 v-if="topic.posts.length > 1" class="topics__item__link">{{topic.name}}</h4>
                    <ul v-if="topic.posts.length > 1" class="topics__list topics__list_submenu">
                        <li class="topics__list__submenu__item" v-for="post in topic.posts" :key="post.id">
                            <router-link class="topics__list__submenu__item__link" :to="'/' + topic.slug + '/' + post.slug + '$' + post.id">
                                {{post.title}}
                            </router-link>
                        </li>
                    </ul>
                    <router-link v-else-if="topic.posts.length === 1" :to="'/' + topic.slug + '/' + topic.posts[0].slug + '$' + topic.posts[0].id" class="topics__item__link">
                        {{topic.posts[0].title}}
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="news">
            <h3 class="news__title">Новости</h3>
            <ul class="news__list">
                <li class="news__item" v-for="news_item in news" :key="news_item.id">
                    <router-link :to="'/' + news_item.slug + '/' + news_item.slug + '$' + news_item.id" class="news__item__link">
                        {{news_item.title.rendered}}
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="advertisement">
            <div class="advertisement__banner">Рекламный блок с баннером</div>
        </section>
    </aside>
</template>

<script>
    export default {
        name: 'AsideComponent',

        props: {
            addr: String
        },

        data () {
            return {
                topics: [],
                news: []
            }
        },

        methods: {
            getTopics: function () {

                let self = this;

                fetch(`${self.addr}categories?parent=6&amp;orderby=description`)
                    .then((response) => { return response.json() })
                    .then((data) => {

                        self.topics = data;

                        self.topics.forEach(topic => {

                            if (topic.count === 0) return;

                            fetch(`${self.addr}posts?categories=${topic.id}`)
                                .then((response) => { return response.json() })
                                .then((data) => {

                                    this.$set(topic, 'posts', []);

                                    data.forEach(post => {
                                        topic.posts.push({
                                            title: post.title.rendered,
                                            slug: post.slug,
                                            id: post.id
                                        });
                                    });
                                });
                        });
                    })
                    .catch(error => { console.log(error) });
            },

            getNews: function () {

                let self = this;

                fetch(`${self.addr}posts?per_page=3`)
                    .then((response) => { return response.json() })
                    .then((data) => {

                        self.news = data;
                    })
                    .catch(error => { console.log(error) });
            }
        },

        mounted () {
            this.getTopics();
            this.getNews();
        }
    }
</script>

<style lang="scss" scoped>
    .topics__list, .news__list {
        padding-bottom: 1.25rem;
    }

    .topics__list_submenu {
        list-style-type: none;
        padding-bottom: 0;
        display: none;
        opacity: 0;
    }

    .topics__title, .news__title {
        font-family: var(--title-font);
        padding-bottom: .75rem;
        padding-left: 1.25rem;
        position: relative;
    }

    .topics__title:after, .news__title:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        height: .75rem;
        width: 100%;
        background: linear-gradient(to right, lightgray, rgba(0, 0, 0, 0));;
    }

    .topics__item, .news__item {
        white-space: nowrap;
        list-style-type: none;
        padding: var(--main-padding);
        font-size: .8rem;
        font-weight: bold;
        position: relative;
        background: linear-gradient(to right, rgba(114, 133, 90, 1), rgba(114, 133, 90, 0));
    }

    .topics__item:after, .news__item:after{
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 1px;
        width: 100%;
        background: linear-gradient(to right, lightgray, rgba(0, 0, 0, 0));;
    }

    .topics__item:hover .topics__list_submenu {
        display: block;
        opacity: 1;
        animation: fadeIn .5s linear;
    }

    @keyframes fadeIn {

        0% {
            display: none;
            opacity: 0;
        }

        1% {
            display: block;
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .topics__item__link, .news__item__link {
        display: block;
        color: black;
        text-decoration: none;
    }

    .topics__item__link:hover, .news__item__link:hover {
        transform: scale(1.01);
        transition: 0.05s;
    }

    .topics__list__submenu__item {
        padding-top: calc(2 * var(--main-padding));
        padding-left: calc(2 * var(--main-padding));

        &:last-child {
            padding-bottom: var(--main-padding);
        }

        &:hover {
            transform: scale(1.01);
            transition: 0.05s;
        }
    }

    .topics__list__submenu__item__link {
        text-decoration: none;
        color: black;
        font-weight: normal;

        &:visited {
            color: black;
            font-weight: normal;
        }
    }

    .advertisement {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }

    .advertisement__banner {
        height: 200px;
        border: 1px solid black;
        text-align: center;
        line-height: 200px;
    }
</style>
