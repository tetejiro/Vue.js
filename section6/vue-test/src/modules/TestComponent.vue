<template>
  <div class="red-b">
    <div class="border__blud">SCSS</div>
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