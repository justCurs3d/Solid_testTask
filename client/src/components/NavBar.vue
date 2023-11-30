<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__logo">
        <router-link to="/">
          <img src="../assets/logo_new.svg" alt="Логотип" class="navigation__logo-image"/>
        </router-link>

      </li>
      <li class="navigation__item">
        <router-link :class="{'navigation__link': true, 'active': isRouteActive('/')}" to="/">Список бумаг</router-link>
      </li>

      <li class="navigation__item">
        <router-link :class="{'navigation__link': true, 'active': isRouteActive('/all_in_date')}" to="/all_in_date">Итоги торгов</router-link>
      </li>
      <li class="navigation__item">
        <router-link :class="{'navigation__link': true, 'active': isRouteActive('/one_in_period')}" to="/one_in_period">Итоги торгов за период</router-link>
      </li>

    </ul>
  </nav>
</template>

<script>


export default {
  name: "NavBar",
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>

<style scoped>
  .navigation {
    z-index: 1;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;

  }

  .navigation__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-left: 20px;
    display: flex;
    align-items: center;
  }

  .navigation__item {
    margin-right: 10px;
    margin-top: 15px
  }

  .navigation__link {
    color: #333;
    text-decoration: none;
    font-family: "lato", arial, sans-serif;
    font-size: 20px;
    line-height: 20px;
    padding: 15px 15px;
    border-radius: 8px;
  }

  .navigation__link:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }

  .right_nav {
    margin-left: 400px;
  }

  .navigation__logo {
    margin-top: 15px;
    margin-right: 15px;
  }

  .navigation__logo-image {
    height: 45px
  }

  .active {
    background-color: #f2dbce;
    color: #291d14;
    border-radius: 8px;
  }

  .active:hover {
    background-color: #ffeec7;

  }
</style>