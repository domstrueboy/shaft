<template>
  <div id="app">
    <HeaderComponent/>

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
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

:root {
    --one-rem: 16px;
    --main-padding: .5rem;
    --title-font: 'Roboto Slab', serif;
    --main-font: 'Roboto', sans-serif;
    --main-width: 1280px;
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
    max-width: var(--main-width);
    /*background: lightblue;*/
}

.pdf {
    width: 100%;
    height: 60vh;
}
</style>
