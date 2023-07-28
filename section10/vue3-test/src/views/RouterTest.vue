<template>
  <div>
    RouterTest
  </div>
  <button @click="goHome">goHome</button>
  <button @click="checkRoutePath">checkRoutePath</button>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    const goHome = () => {
      router.push('/');
    }

    const checkRoutePath = () => {
      console.log(route.path);
    }

    return { goHome, checkRoutePath }
  }
}
</script>

<style>

</style>