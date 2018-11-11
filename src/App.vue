<template>
  <div id="app">
    <HeaderComponent msg="Welcome to Your Vue.js App"/>

    <main class="main">
        <AsideComponent msg="Welcome to Your Vue.js App"/>
        <router-view class="article"/>
    </main>

    <FooterComponent msg="Welcome to Your Vue.js App"/>
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
    min-height: 100vh;
    font-family: var(--main-font);
    font-size: var(--one-rem);
}

.main {
    flex: 1;
    display: flex;
}

.article {
    padding: calc(2*var(--main-padding));
}
</style>
