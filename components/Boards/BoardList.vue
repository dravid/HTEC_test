<template>
  <section class="posts-list">
        <BoardPreview
        v-for="board in boards"
        :key="board.id"
        :board="board"
        :id="board.id"
        :bcgColor="board.prefs.backgroundColor ? board.prefs.backgroundColor : '#c3c3c3'" />
    </section>
</template>

<script>
import BoardPreview from '@/components/Boards/BoardPreview';

export default {
  components: {
    BoardPreview
  },
  props: {
    boards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
</style>
