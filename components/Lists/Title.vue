<template>
  <div class="list-title" v-if="!isOpen">
    <h3 @click="isOpen = !isOpen">{{ changeTitle }}</h3>
    <TitleDropdown />
  </div>
  <div class="list-input" v-else>
    <b-form-textarea
      id="textarea-no-resize"
      @blur="onBlur"
      :placeholder="changeTitle"
      v-model="inputTitle"
      no-resize
    ></b-form-textarea>
  </div>
</template>

<script>
import TitleDropdown from '../UI/TitleDropdown'
export default {
  name: 'Title',
  components: {
    TitleDropdown
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
    onBlur(e) {
      this.changeTitle = this.inputTitle;
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.list-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-title h3 {
  font-size: 1.5rem;
  margin-right: 1rem;
  font-weight: 600;
}
</style>
