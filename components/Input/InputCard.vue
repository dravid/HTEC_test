<template>
  <div class="card-input">
    <textarea :placeholder="type === 'card' ? 'Enter a title for this card' : 'Enter list title'" v-on:blur="handleOpenInput" />
    <div>
      <button @click="handleAddCard">
        {{ type === "card" ? "Add Card" : "Add List" }}
      </button>
      <button @click="handleOpenInput">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputCard",
  props: {
    listId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    handleOpenInput: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      cardTitle: false
    };
  },
  methods: {
    handleAddCard() {
      if(this.cardTitle) {
        alert("Add Card");
      } else {
        alert('Empty Input!');
      }
    }
  }
};
</script>

<style scoped>
.card-input {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
