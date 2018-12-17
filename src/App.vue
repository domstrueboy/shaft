<template>
  <div id="app">
    <HeaderComponent :addr="addr"/>

    <main class="main">
        <AsideComponent addr="http://shaft.tmweb.ru/wordpress/wp-json/wp/v2/"/>
        <router-view addr="http://shaft.tmweb.ru/wordpress/wp-json/wp/v2/"/>
    </main>

    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import AsideComponent from '@/components/AsideComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    components: {
        HeaderComponent,
        AsideComponent,
        FooterComponent
    },

    data () {
        return {
            addr: 'http://shaft.tmweb.ru/wordpress/wp-json/wp/v2/'
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

:root {
    --one-rem: 16px;
    --main-padding: .5rem;
    --title-font: 'Roboto Slab', serif;
    --main-font: 'Roboto', sans-serif;
    --main-width: 1024px;
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    font-family: var(--main-font);
    font-size: var(--one-rem);
}

.main {
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    max-width: var(--main-width);
}

.pdf {
    width: 100%;
    height: 60vh;
}

.aligncenter {
    text-align: center;
}

.wp-block-gallery {

    display: flex;
    height: 200px;
    margin-top: 15px;
    margin-bottom: 30px;

    .blocks-gallery-item {

        padding-right: 10px;
        list-style-type: none;

        figure {

            position: relative;
            height: 100%;

            img {
                max-width: 100%;
                height: 200px;
            }

            figcaption {
                position: absolute;
                color: white;
                bottom: 0;
                height: 30px;
                line-height: 30px;
                text-align: center;
                width: 100%;
                background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
            }
        }

        &:last-child {
            padding-right: 0;
        }
    }
}

.page {

    width: 100%;

    p, ul {
        padding-bottom: calc(2*var(--main-padding));
        line-height: 1.4;
    }

    li {
        list-style-position: inside;
        padding-bottom: var(--main-padding);
        padding-left: var(--main-padding);
    }
}
</style>
