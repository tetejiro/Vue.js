<template>
  <div>
    PropsEmitTest
  </div>
  <div>{{ setupBook }}</div>
  <div>{{ dataBooks }}</div>
  <ul>
    <li v-for="setupBoo in setupBook" :key="setupBoo.index">
      {{ setupBoo.title }}
    </li>
  </ul>

  <button @click="emitTest">PropsEmitTest-button</button>
</template>

<script>
export default {
  props: {
    setupBook: Array,
    dataBooks: Array
  },
  setup(props, context) {
    console.log(props.setupBook[0].title);
    console.log(props.dataBooks[0].title);

    const emitTest = () => {
      context.emit('custom-event', 'aaaaa');
    }

    return {
      emitTest
    }
  }
}
</script>

<style>

</style>