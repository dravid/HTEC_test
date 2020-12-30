<template>
  <section class="list-container">
    <SingleList
      v-for="list in lists"
      :key="list.id"
      :listData="list"
    />
  </section>
</template>

<script>
import SingleList from '@/components/Lists/SingleList';
import draggable from 'vuedraggable';

export default {
  components: {
    SingleList,
    draggable,
  },
  props: {
    lists: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-container {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
}

.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid red;
}
</style>
