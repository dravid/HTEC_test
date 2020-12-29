export const state = () => ({
  loadedBoards: [],
  loadedLists: [],
  token: null,
});

export const mutations = {
  setPosts(state, posts) {
    state.loadedBoards = posts;
  },
  addPost(state, post) {
    state.loadedBoards.push(post);
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedBoards.findIndex(
      (post) => post.id === editedPost.id
    );
    state.loadedBoards[postIndex] = editedPost;
  },
  setToken(state, token) {
    state.token = token;
  },
  getLists(state, lists) {
    state.loadedLists = lists;
  },
  addList(state, list) {
    const lists = state.loadedLists;
    lists.filter((list) => lists.boardId === list.idBoard);

    lists.push(list);
  },
  addCard(state, card) {
    const listIndex = state.loadedLists.findIndex(
      (list) => list.id === card.idList
    );

    state.loadedLists[listIndex].cards.push(card);
  },
  editCard(state, card) {
    const loadList = state.loadedLists;

    const listIndex = loadList.findIndex((list) => list.id === card.listId);
    const cardIndex = loadList[listIndex].cards.findIndex(
      (c) => c.id === card.cardId
    );

    for (const key in card.update) {
      loadList[listIndex].cards[cardIndex][key] = card.update[key];
    }
  },
  deleteCard(state, cardInfo) {
    const listIndex = state.loadedLists.findIndex(
      (list) => list.id === cardInfo.listId
    );
    const cardRemoved = state.loadedLists[listIndex].cards.findIndex((card) => {
      return card.id === cardInfo.cardId;
    });

    state.loadedLists[listIndex].cards.splice(cardRemoved, 1);
  },
};

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios
      .$get(
        `/members/me/boards?key=${process.env.trelloAPIKey}&token=${process.env.trelloToken}`
      )
      .then((data) => {
        const postsArray = [];
        for (const key in data) {
          postsArray.push({ ...data[key] });
        }
        vuexContext.commit('setPosts', postsArray);
      })
      .catch((e) => context.error(e));
  },
  addPost(vuexContext, post) {
    const createdPost = {
      ...post,
      updatedDate: new Date(),
    };
    return this.$axios
      .$post('/posts.json?auth=' + vuexContext.state.token, createdPost)
      .then((data) => {
        vuexContext.commit('addPost', { ...createdPost, id: data.name });
      })
      .catch((e) => console.log(e));
  },

  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts); // Mutations setPosts
  },
  getLists(vuexContext, boardId) {
    boardId = boardId ? boardId : vuexContext.getters.loadedBoards[0].id;

    return this.$axios
      .$get(
        `/boards/${boardId}/lists?cards=all&key=${process.env.trelloAPIKey}&token=${process.env.trelloToken}`
      )
      .then((data) => {
        const listsArray = [];
        for (const key in data) {
          listsArray.push({ ...data[key], boardId: boardId });
        }
        vuexContext.commit('getLists', listsArray);
      })
      .catch((e) => console.log(e));
  },
  addList(vuexContext, listInfo) {
    return this.$axios
      .$post(
        `/boards/${listInfo.boardId}/lists?&key=${process.env.trelloAPIKey}&token=${process.env.trelloToken}`,
        listInfo.update
      )
      .then((data) => {
        vuexContext.commit('addList', data);
      })
      .catch((e) => console.log(e));
  },
  addCard(vuexContext, cardInfo) {
    return this.$axios
      .$post(
        `/lists/${cardInfo.listId}/cards?name=${cardInfo.name}&key=${process.env.trelloAPIKey}&token=${process.env.trelloToken}`
      )
      .then((data) => {
        vuexContext.commit('addCard', data);
      })
      .catch((e) => console.log(e));
  },
  editCard(vuexContext, cardInfo) {
    return this.$axios
      .$put(
        `/cards/${cardInfo.cardId}?&key=${process.env.trelloAPIKey}&token=${process.env.trelloToken}`,
        cardInfo.update
      )
      .then((res) => {
        console.log(res);
        vuexContext.commit('editCard', cardInfo);
      })
      .catch((e) => console.log(e));
  },
  deleteCard(vuexContext, cardInfo) {
    return this.$axios
      .$delete(
        `/cards/${cardInfo.cardId}?&key=${process.env.trelloAPIKey}&token=${process.env.trelloToken}`
      )
      .then((data) => {
        console.log(data);
        vuexContext.commit('deleteCard', cardInfo);
      })
      .catch((e) => console.log(e));
  },
};

export const getters = {
  loadedBoards(state) {
    return state.loadedBoards;
  },
  loadedLists(state) {
    return state.loadedLists;
  },
};
