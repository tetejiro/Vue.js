<template>
  <div>
    CompositionTest
  </div>
  <div>{{ nameRef }}</div>
  <div>{{ book }}</div>
  <div>{{ titleRef }}</div>
  <button @click="btnClick">click---</button>
  <div>{{ totalPrice }}</div>
  <div><input type="text" v-model="search"></div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch } from 'vue'

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

    const btnClick = e => {
      console.log(book.title);
      console.log(e.currentTarget);
    }

    let item = reactive({
      price: 100,
      number: 1
    });

    const totalPrice = computed(() => {
      return item.price * 100;
    })

    console.log(nameRef.value);

    const search = ref('searchのvalue')
    watch(search, (newVal, preVal) => {
      console.log(`watch: ${search.value}`);
      console.log(`newVal: ${newVal}`);
      console.log(`preVal: ${preVal}`);
    })

    return {
      nameRef,
      book,
      ...toRefs(booktoRef),
      btnClick,
      item,
      totalPrice,
      search
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