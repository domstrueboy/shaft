<template>
  <aside class="aside">
    <section class="topics">
      <h3 class="topics__title">Разделы</h3>
      <ul class="topics__list">
        <li class="topics__item">
          <a href="#" class="topics__item__link">Построение по типам механических передач</a>
        </li>
        <li class="topics__item">
          <a href="#" class="topics__item__link">Стандарты по тематике "Валы и механические передачи"</a>
        </li>
        <li class="topics__item">
          <a href="#" class="topics__item__link">Видео по системе "Валы и механические передачи"</a>
        </li>
        <li class="topics__item">
          <a href="#" class="topics__item__link">Статьи "Разное"</a>
        </li>
        <li class="topics__item">
          <a href="#" class="topics__item__link">Техническая библиотека</a>
        </li>
        <li class="topics__item">
          <a href="#" class="topics__item__link">Вопрос-Ответ</a>
        </li>
      </ul>
    </section>
    <section class="news">
      <h3 class="news__title">Новости</h3>
      <ul class="news__list">
        <li class="news__item">
          <a href="#" class="news__item__link">1</a>
        </li>
        <li class="news__item">
          <a href="#" class="news__item__link">2</a>
        </li>
        <li class="news__item">
          <a href="#" class="news__item__link">3</a>
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
    msg: String
  },
    data () {
        return {
            mainMenu: []
        }
    },
    methods: {
        fetchData: function () {
            let self = this
            // const myRequest = new Request('http://maketir.ru/dev/wp-json/wp/v2/categories')
            const myRequest = new Request('http://localhost/wp-json/wp/v2/categories', {mode: 'no-cors'})

            function sorting (a, b) { // Сортировка по номеру, уазанному в description категории
                if (a.description > b.description) {
                    return 1
                }
                if (a.description < b.description) {
                    return -1
                }
                return 0
            }

            fetch(myRequest)
                .then((response) => { return response.json() })
                .then((data) => {
                    const mainMenuID = data.find(el => el.slug === 'main-menu').id
                    self.mainMenu = data
                        .filter(el => el.parent === mainMenuID)
                        .sort(sorting)

                    for (let item of self.mainMenu) {
                        item.submenu = data
                            .filter(el => el.parent === item.id)
                            .sort(sorting)
                    }
                    console.log(data);
                })
                .catch(error => { console.log(error) })
        }
    },

    mounted () {
        this.fetchData();
    }
}
</script>

<style scoped>
.topics__list, .news__list {
  padding-bottom: 1.25rem;
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

.topics__item__link, .news__item__link {
  display: block;
  color: black;
  text-decoration: none;
}

.topics__item__link:hover, .news__item__link:hover {
  transform: scale(1.01);
  transition: 0.05s;
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
