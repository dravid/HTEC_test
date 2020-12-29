<template>
  <draggable tag="div" group="list" class="list-wrapper">
    <article>
      <div class="list-content">
        <Title :title="listData.name" :listId="listData.id" />
        <draggable
          tag="ul"
          :for="listData.cards"
          v-bind="dragOptions"
          class="cards-list"
        >
          <Card
            v-for="card in listData.cards"
            :list="listData"
            :boardId="listData.boardId"
            :key="card.id"
            :card="card"
          />
        </draggable>
        <InputContainer
          :listId="listData.id"
          :boardId="listData.boardId"
          type="add-card"
          btnTitle="Add Card"
          placeholder="Enter a title for this card..."
        />
      </div>
    </article>
  </draggable>
</template>

<script>
import Card from '@/components/Lists/Card';
import Title from '@/components/Lists/Title';
import InputContainer from '@/components/Input/InputContainer';
import draggable from 'vuedraggable';

export default {
  components: {
    Card,
    Title,
    InputContainer,
    draggable,
  },
  name: 'List',
  props: {
    id: {
      type: String,
      required: true,
    },
    listData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'card',
        ghostClass: 'ghost',
      };
    },
  },
};
</script>

<style scoped>
.list-content {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  cursor: pointer;
  max-width: 25rem;
  padding: 1rem;
  transition: opacity 0.3s;
}

.cards-list {
  list-style-type: none;
  padding: 0;
  margin: 1.5rem 0;
}

.ghost {
  color: rgba(255, 255, 255, 0.8);
  background: rgba(50, 50, 50, 0.2);
}
</style>
