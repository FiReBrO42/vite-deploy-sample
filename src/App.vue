<script >
import { RouterLink, RouterView } from "vue-router";
/* import axios from 'axios' */
//環境變數 解構出來
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: true,
      fullPage: true,
    };
  },
  components: {
    RouterLink,
    RouterView,
  },
  mounted() {
    //Vueloading 語法
    /*       this.isLoading = true; */
    // simulate AJAX
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    //Vueaxios語法
    /*     axios.get('https://randomuser.me/api/')
    .then((res)=>{
      console.log('axios',res); */
    this.$http
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products`)
      .then((res) => {
        console.log("Vueaxios_API", res);
      });
  },
};
</script>

<template>
  <header>
    <VueLoading v-model:active="isLoading"></VueLoading>
    <button type="button" class="btn btn-primary">Primary</button>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/apple">蘋果頁面</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
