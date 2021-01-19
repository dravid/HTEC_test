<template>
  <div class="home-page">
    <section class="intro">
      <h1>Trello Boards</h1>
    </section>
    <BoardList :boards="loadedBoards" />
  </div>
</template>

<script>
import BoardList from "../components/Boards/BoardList";
export default {
  components: {
    BoardList
  },
  computed: {
    loadedBoards() {
      return this.$store.getters.loadedBoards;
    }
  }
};
</script>

