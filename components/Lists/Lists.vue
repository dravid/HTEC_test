<template>
  <draggable tag="section" group="list" class="list-container">
    <SingleList v-for="list in lists" :key="list.id" :listData="list" />
  </draggable>
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
  flex-wrap: wrap;
  padding-bottom: 2rem;
}
</style>
