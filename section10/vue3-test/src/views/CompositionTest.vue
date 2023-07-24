<template>
  <div>
    CompositionTest
  </div>
  <div>{{ nameRef }}</div>
  <div>{{ book }}</div>
  <div>{{ titleRef }}</div>
  <button @click="btnClick">click---</button>
  <div>{{ totalPrice }}</div>
  <div>watch<input type="text" v-model="search"></div>
  <div>watchEffect<input type="text" v-model="searchEffect"></div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect, onMounted } from 'vue'

export default {
  setup() {
    console.log('setUp');
    console.log(this);

    // ref
    const nameRef = ref('nameRef');
    console.log(nameRef.value);

    // reactive
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

    // computed
    const totalPrice = computed(() => {
      return item.price * 100;
    })

    // watch
    const search = ref('searchのvalue')
    watch(search, (newVal, preVal) => {
      console.log(`watch: ${search.value}`);
      console.log(`newVal: ${newVal}`);
      console.log(`preVal: ${preVal}`);
    })

    // watchEffect
    const searchEffect = ref('')
    watchEffect(() => {
      console.log(`watchEffect=> ${searchEffect.value}`)
    })

    //setup内のmounted
    onMounted(() => {
      console.log('onMounted');
    })

    return {
      nameRef,
      book,
      ...toRefs(booktoRef),
      btnClick,
      item,
      totalPrice,
      search,
      searchEffect
    }
  },
  created() {
    console.log('created');
    console.log(this);
  },
  // setup外のmounted
  mounted() {
    console.log('mounted');
  }
}
</script>

<style>
</style>