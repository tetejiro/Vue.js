<template>
  <div>
    TestComponent
    {{ testData }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      testData: 'テストデータ'
    }
  }
}
</script>

<style>

</style>