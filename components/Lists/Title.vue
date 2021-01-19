<template>
  <div class="list-title" v-if="!isOpen">
    <h3 @click="isOpen = !isOpen">{{ changeTitle }}</h3>
    <TitleDropdown :listId="listId" />
  </div>
  <div class="list-input" v-else>
    <b-form-input
      id="textarea-no-resize"
      @blur="onBlur"
      :placeholder="changeTitle"
      v-model="inputTitle"
      rows="1"
      max-rows="3"
      no-resize
    ></b-form-input>
    <TitleDropdown :listId="listId" />
  </div>
</template>

<script>
import TitleDropdown from '../UI/TitleDropdown';
export default {
  name: 'Title',
  components: {
    TitleDropdown,
  },
  props: {
    listId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      changeTitle: this.title,
      inputTitle: this.title,
    };
  },
  methods: {
    onBlur() {
      if (this.inputTitle && this.inputTitle !== this.title) {
        this.changeTitle = this.inputTitle;
        const updateInfo = {
          listId: this.listId,
          update: { name: this.inputTitle },
        };
        this.$store.dispatch('editList', updateInfo);
      } else if (this.inputTitle === this.changeTitle) {
        this.isOpen = false;
      } else {
        alert('Empty title');
      }
      this.isOpen = false;
    },
  },
};
</script>

<style>
.list-title,
.list-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-title h3 {
  font-size: 1.7rem;
  margin-right: 1rem;
  font-weight: 600;
}
</style>
