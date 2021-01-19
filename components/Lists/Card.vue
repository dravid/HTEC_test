<template>
  <li class="card-item" @click="$bvModal.show(card.id)">
    {{ card.name }}
    <CardModal :card="card" :list="list" @delete-card="deleteCard" />
  </li>
</template>

<script>
import CardModal from '../UI/CardModal';

export default {
  name: 'Card',
  components: {
    CardModal,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
    list: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteCard() {
      if (confirm('Do you really want to delete?')) {
        const deleteCardInfo = {
          listId: this.list.id,
          cardId: this.card.id,
        };
        this.$store.dispatch('deleteCard', deleteCardInfo);
        this.$bvModal.hide(this.card.id);
      } else {
        this.$bvModal.hide(this.card.id);
      }
    },
  //   updateCard(title) {
  //     if (title !== this.card.name) {
  //       alert(title);
  //     } else {
  //       alert('mosha');
  //     }
  //   }
  },
};
</script>

<style scoped>
.card-item {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  background-color: #fff;
  border-radius: 4px;
  color: #172b4d;
  transition: all .2s;
}

.card-item:hover {
  background-color: #ebecf0;
  opacity: .8;
}

.card-item:not(:last-of-type) {
  margin-bottom: 1rem;
}
</style>
