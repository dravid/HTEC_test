<template>
  <nuxt-link
    :to="'/'+id"
    class="post-preview"
    v-if="
      id === '58616c32a3e615b5afbbd93e' 
      || 
      id === '5fec67bbb8f05811b2144255'
    "
  >
    <div :style="{ 'background-color': bcgColor }">
      <div class="post-content">
        <h1>{{ board.name }}</h1>
      </div>
    </div>
  </nuxt-link>
  <div class="post-preview forbidden" @click="forbiddenMessage" v-else>
    <div :style="{ 'background-color': bcgColor }">
      <div class="post-content">
        <h1>{{ board.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardPreview',
  props: {
    id: {
      type: String,
      required: true,
    },
    board: {
      type: Object,
      required: true,
    },
    bcgColor: {
      type: String,
      required: true,
    },
  },
  methods: {
    forbiddenMessage() {
      alert('Not for testing purposes. Access denied.');
    },
  },
};
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  cursor: pointer;
  transition: opacity 0.3s;
}

.post-preview.forbidden>article:hover {
  background-color: rgba(230, 0, 0, .6) !important;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 40rem;
    margin: 1rem;
  }
}

.post-content {
  padding: 2rem;
  text-align: center;
  min-height: 15rem;
  display: flex;
  align-items: flex-start;
  text-align: left;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
