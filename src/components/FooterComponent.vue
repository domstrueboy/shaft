<template>
  <footer class="footer">
    <address itemprop="author" class="contacts">
      <dl>
        <dt class="contacts__title">Контакты:</dt>
        <dt class="contacts__email-title">E-mail:</dt>
        <dd class="contacts__email-link"><a rel="author" href="mailto:Vgolovanev@mail.ru">Vgolovanev@mail.ru</a></dd>
      </dl>
    </address>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.footer {
  width: 100vw;
  padding: var(--main-padding);
  background: linear-gradient(#B2B89C, #72855A);
  border-bottom: 1.5rem solid lightgray;
}

.contacts__title {
  font-family: var(--title-font);
  font-style: normal;
}

.contacts__email-title, .contacts__email-link {
  font-style: normal;
  display: inline-block;
}

.contacts__email-link a {
  display: block;
  color: black;
  text-decoration: none;
}

.contacts__email-link a:hover {
  font-weight: bold;
  transition: 0.05s;
}
</style>
