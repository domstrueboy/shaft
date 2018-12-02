<template>
  <header class="header">
    <nav class="topmenu">
      <ul class="topmenu__list">
        <li class="topmenu__item">
          <router-link to="/" class="topmenu__item__link">Главная</router-link>
        </li>

        <li class="topmenu__item">
          <router-link to="/contacts" class="topmenu__item__link">Контакты</router-link>
        </li>

        <li class="topmenu__item">
          <router-link to="/services" class="topmenu__item__link">Услуги</router-link>
        </li>
      </ul>
    </nav>
    <section class="title">
      <img src="@/assets/logo.png" alt="" class="title__logo">
      <h1 class="title__text">Валы и механические передачи <span class="title__3D">3D</span></h1>
    </section>
    <section class="search">
      <form action="submit" class="search__form">
        <input type="text" class="search__input" placeholder="поиск по сайту">
        <button class="search__button">найти</button>
      </form>
    </section>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.topmenu {
  width: 100vw;
  border-bottom: 1.5rem solid lightgray;
  padding-right: var(--main-padding);
}

.topmenu__list {
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  max-width: var(--main-width);
}

.topmenu__item__link {
  display: block;
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: black;
  font-weight: bold;
  padding: .5rem 1rem;
}

.topmenu__item__link:hover {
  transform: scale(1.05);
  transition: 0.1s;
}

.router-link-exact-active {
  transform: scale(1.05);
  transition: 0.1s;
  color: orange;
}

.title {
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: var(--main-padding);
  background: linear-gradient(#72855A, #B2B89C);
}

.title__text {
  width: 100%;
  font-family: var(--title-font);
  font-size: 4.5vw;
  font-weight: normal;
  white-space: nowrap;
  padding-left: calc(3*var(--main-padding));
}

@media (min-width: 1280px) {
  .title__text {
    font-size: 3.6rem;
  }
}

.title__3D {
  font-weight: bold;
}

.search {
  display: flex;
  flex-direction: row-reverse;
  padding: var(--main-padding);
  max-width: var(--main-width);
}

.search__form {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: var(--main-padding);
}

.search__input {
  font-family: var(--title-font);
  height: 1.5rem;
  line-height: 1.5rem;
  padding-left: .5rem;
  border: 1px solid black;
  margin-right: var(--main-padding);
}

.search__button {
  height: 2rem;
  line-height: 1.9rem;
  padding-left: .5rem;
  padding-right: .5rem;
  border: 1px solid black;
  background: white;
  font-size: 1.1rem;
}

.search__button:hover {
  cursor: pointer;
  transform: scale(1.01);
  transition: 0.05s;
}
</style>
