<template>
  <div class="relative">
    <button @click="modalOpen = true">モーダル</button>
    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          <p>モーダルウィンドウ</p>
          <button @click="modalOpen = false">とじる</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modalOpen: false
      }
    }
  }
</script>

<style>
  .modal{
    width: 50%;
    height: 50%;
    background: beige;
  }
</style>