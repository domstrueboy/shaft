<template>
  <div class="gallery closed">
      Hello
  </div>
</template>

<script>
export default {
    name: 'GalleryComponent'
}
</script>

<style lang="scss">
.gallery {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: red;
    opacity: .5;
}

.closed {
    visibility: hidden;
}
</style>
