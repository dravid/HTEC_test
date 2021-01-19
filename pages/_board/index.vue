<template>
  <div class="home-page">
    <section class="intro">
      <h1>
        <span>{{ boardTitle }}</span>
        Lists Page
      </h1>
    </section>
    <section class="content">
      <Lists :lists="loadedData" />
      <InputContainer
        :boardId="boardId || loadedData[0].idBoard"
        type="add-list"
        btnTitle="+ Add another list"
        placeholder="Enter list title..."
      />
    </section>
  </div>
</template>

<script>
import Lists from '@/components/Lists/Lists';

export default {
  components: {
    Lists,
  },
  data() {
    return {
      loadedData: [],
      boardId: this.$route.params.board,
      boardTitle: '',
    };
  },
  async fetch() {
    await this.$store.dispatch('getLists', this.$route.params.board);
    this.loadedData = this.$store.getters.loadedLists;
    this.boardTitle = this.$store.getters.loadedLists[0].boardTitle;
  },
};
</script>
