<script setup>
  import { ref } from 'vue';

  const count = ref(0);

  const increment = () => {
    count.value++;
  }

  const decrement = () => {
    count.value--;
  }

  const props = defineProps({
    title: String
  })

  const emitTest = defineEmits(['custom-event'])
</script>

<template>
  <div>{{ props.title }}</div>
  <button @click="emitTest('custom-event', 'ScriptSetupTest→App')">emitTest</button>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<style>

</style>