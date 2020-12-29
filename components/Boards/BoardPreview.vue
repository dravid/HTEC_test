<template>
  <nuxt-link
    :to="{ name: 'lists', params: { boardId: { id } } }"
    class="post-preview"
    v-if="id === '58616c32a3e615b5afbbd93e'"
  >
    <article :style="{ 'background-color': bcgColor }">
      <div class="post-content">
        <h1>{{ board.name }} {{ board.id }} {{ bcgColor }}</h1>
      </div>
    </article>
  </nuxt-link>
  <div class="post-preview" v-else>
    <article :style="{ 'background-color': bcgColor }">
      <div class="post-content">
        <h1>{{ board.name }} {{ board.id }} {{ bcgColor }}</h1>
      </div>
    </article>
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

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
