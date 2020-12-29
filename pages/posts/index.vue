<template>
  <div class="posts-page">
    <BoardList :posts="loadedBoards"/>
  </div>
</template>

<script>

export default {
  computed: {
    loadedBoards() {
      return this.$store.getters.loadedBoards;
    }
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
