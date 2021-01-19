export const state = () => ({
  loadedBoards: [],
  loadedLists: [],
  token: null,
});

export const mutations = {
  setPosts(state, posts) {
    state.loadedBoards = posts;
  },
  getLists(state, lists) {
    state.loadedLists = lists;
  },
  addList(state, list) {
    list = { ...list, cards: [] };
    const lists = state.loadedLists;
    lists.filter((list) => lists.boardId === list.idBoard);

    lists.push(list);
  },
  editList(state, list) {
    const loadList = state.loadedLists;

    const listIndex = loadList.findIndex((el) => el.id === list.listId);

    for (const key in list.update) {
      loadList[listIndex][key] = list.update[key];
    }
  },
  deleteList(state, listId) {
    const listIndex = state.loadedLists.findIndex((list) => list.id === listId);

    state.loadedLists.splice(listIndex, 1);
  },
  addCard(state, card) {
    const loadList = state.loadedLists;
    const listIndex = loadList.findIndex((list) => list.id === card.idList);

    loadList[listIndex].cards.push(card);
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
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts); // Mutations setPosts
  },
  getLists(vuexContext, boardId) {
    const boardData = this.state.loadedBoards.filter((board) => board.id === boardId);

    return this.$axios
      .$get(
        `/boards/${boardId}/lists?cards=all&key=${process.env.trelloAPIKey}&token=${process.env.trelloToken}`
      )
      .then((data) => {
        const listsArray = [];
        for (const key in data) {
          listsArray.push({ ...data[key], boardTitle: boardData[0].name, boardId });
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
  editList(vuexContext, listInfo) {
    return this.$axios
      .$put(
        `/lists/${listInfo.listId}?&key=${process.env.trelloAPIKey}&token=${process.env.trelloToken}`,
        listInfo.update
      )
      .then((res) => {
        console.log(res);
        vuexContext.commit('editList', listInfo);
      })
      .catch((e) => console.log(e));
  },
  deleteList(vuexContext, listId) {
    return this.$axios
      .$put(
        `/lists/${listId}/closed?value=true&key=${process.env.trelloAPIKey}&token=${process.env.trelloToken}`
      )
      .then((data) => {
        console.log(data);
        vuexContext.commit('deleteList', listId);
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
