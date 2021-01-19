<template>
  <div group="list" class="list-wrapper">
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
  </div>
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
  background: #ebecf0;
  border-radius: 4px;
  cursor: pointer;
  width: 30rem;
  margin: 0 1rem 1rem 0;
  padding: 1.5rem 1rem;
  transition: opacity 0.3s;
}

.list-wrapper {
  display: block;
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
