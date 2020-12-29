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
  padding: 1rem;
  border: 1px solid #cecece;
}

.card-item:not(:last-of-type) {
  margin-bottom: 0.5rem;
}
</style>
