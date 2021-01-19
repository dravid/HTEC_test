<template>
  <b-dropdown class="dropdown-dots">
    <template #button-content>
      <b-icon icon="three-dots"></b-icon>
    </template>
    <b-dropdown-item href="#" @click="deleteList">Archive List</b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'TitleDropdown',
  props: {
    listId: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteList() {
      if (confirm('Do you really want to Archive?')) {
        this.$store.dispatch('deleteList', this.listId);
      }
    },
  },
};
</script>
