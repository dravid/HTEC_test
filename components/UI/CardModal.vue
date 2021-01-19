<template>
  <b-modal :id="card.id" size="lg">
    <template #modal-title>
      <InputContainer
        :modalTitle="card.name"
        type="edit-card"
        :cardId="card.id"
        :listId="list.id"
      />
      <h5>
        in list: <span>{{ list.name }}</span>
      </h5>
    </template>
    <div class="d-block">
      <h3>Description</h3>
      <InputContainer
        :description="card.desc ? card.desc : 'Add Description'"
        btnTitle="Save"
        type="edit-card"
        :cardId="card.id"
        :listId="list.id"
      />
    </div>
    <template #modal-footer>
      <b-button size="lg" variant="danger" @click="$emit('delete-card')">Delete Card</b-button>
      <p>
        Last activity: <span>{{ card.dateLastActivity | date }}</span>
      </p>
    </template>
  </b-modal>
</template>

<script>
import InputContainer from '../Input/InputContainer';
export default {
  name: 'CardModal',
  components: {
    InputContainer,
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
  data() {
    return {
      title: this.card.name ? this.card.name : '',
    };
  },
  methods: {
    updateTitle() {
      this.$emit('handle-crud');
    },
  },
};
</script>
