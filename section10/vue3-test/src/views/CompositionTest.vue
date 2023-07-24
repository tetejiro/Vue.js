<template>
  <div>
    CompositionTest
  </div>
  <div>{{ nameRef }}</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    console.log('setUp');
    console.log(this);
    const nameRef = ref('nameRef');
    console.log(nameRef.value);

    return {
      nameRef
    }
  },
  created() {
    console.log('created');
    console.log(this);
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style>
</style>