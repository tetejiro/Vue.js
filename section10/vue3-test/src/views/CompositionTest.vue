<template>
  <div>
    CompositionTest
  </div>
  <div>{{ nameRef }}</div>
  <div>{{ book }}</div>
  <div>{{ titleRef }}</div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

export default {
  setup() {
    console.log('setUp');
    console.log(this);
    const nameRef = ref('nameRef');
    const book = reactive({
      title: 'title',
      author: 'author'
    });
    const booktoRef = reactive({
      titleRef: 'titleRef',
      authorRef: 'authorRef'
    });

    console.log(nameRef.value);

    return {
      nameRef,
      book,
      ...toRefs(booktoRef)
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