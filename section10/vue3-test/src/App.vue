<template lang=html>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/children">children</router-link> |
    <router-link to="/teleport">teleport</router-link> |
    <router-link to="/composition">composition</router-link> |
    <router-link to="/propsEmit">propsEmit</router-link>
  </nav>
  <router-view
    :setupBook="setupBook"
    :dataBooks="dataBooks"
    @custom-event="customEvent">
    </router-view>
</template>

<script>
  import { reactive } from 'vue'

  export default {
    setup() {
      const setupBook = reactive([
        {
          title: 'setupTitle',
          author: 'setupauthor'
        },
        {
          title: 'setupTitle2',
          author: 'setupauthor2'
        }
      ]);

      return {
        setupBook
      }
    },
    data() {
      return {
        dataBooks: [
          {
            title: 'bookTitle',
            author: 'bookauthor'
          },
          {
            title: 'bookTitle2',
            author: 'bookauthor2'
          }
        ]
      }
    },
    methods: {
      customEvent(str) {
        console.log(str);
      }
    },
    provide() {
      return {
        userName: '親で設定した値'
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
