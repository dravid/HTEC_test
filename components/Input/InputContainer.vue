<template>
  <div :class="`input-container ${type}`">
    <div v-if="type === 'edit-card' && modalTitle !== ''">
      <b-form-textarea
        id="textarea-small"
        size="sm"
        :placeholder="titleM"
        v-model="titleM"
        no-resize
        class="title-input"
        @blur="handleCrud"
        max-rows="6"
      ></b-form-textarea>
    </div>

    <div v-else>
      <div v-if="!openInput">
        <div v-if="type !== 'edit-card'">
          <button
            @click="openInput = true"
            :class="`switch-input-button ${type}`"
          >
            {{
              type === 'add-card' ? '+ Add another card' : '+ Add another list'
            }}
          </button>
        </div>
        <div v-else @click="openInput = true" class="card-description">
          <pre> {{ description }} </pre>
        </div>
      </div>
      <div :class="`card-input ${type}`" v-else>
        <b-form-textarea
          id="textarea-no-resize"
          :placeholder="placeholder ? placeholder : description"
          v-model="title"
          no-resize
          max-rows="12"
        ></b-form-textarea>
        <div class="handle-input">
          <button @click="handleCrud">
            {{ btnTitle }}
          </button>
          <button @click="handleOpenInput">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputContainer',
  props: {
    listId: {
      type: String,
      required: false,
      default: '',
    },
    boardId: {
      type: String,
      required: false,
      default: '',
    },
    cardId: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: false,
      default: '',
    },
    btnTitle: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    modalTitle: {
      type: String,
      required: false,
      default: '',
    },
    listPosition: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      openInput: false,
      title: this.description ? this.description : '',
      titleM: this.modalTitle ? this.modalTitle : '',
    };
  },
  methods: {
    handleOpenInput() {
      this.openInput = !this.openInput;
    },
    handleCrud() {
      let updateCardInfo = {};
      let validInput = false;
      switch (this.type) {
        case 'add-card':
          updateCardInfo = {
            name: this.title,
            listId: this.listId,
            pos: 'bottom',
            desc: 'title',
          };
          if (this.title !== '') {
            this.$store.dispatch('addCard', updateCardInfo);
            this.handleOpenInput();
          }
          break;
        case 'edit-card':
          const updateFields = {};

          updateCardInfo = {
            listId: this.listId,
            cardId: this.cardId,
          };

          if (this.titleM && this.titleM !== this.modalTitle) {
            updateCardInfo = {
              ...updateCardInfo,
              update: {
                name: this.titleM,
              },
            };
            validInput = true;
          } else if (this.title && this.title !== '') {
            updateCardInfo = {
              ...updateCardInfo,
              update: {
                desc: this.title,
              },
            };
            validInput = true;
          }

          if (validInput) {
            this.$store.dispatch('editCard', updateCardInfo);
            this.handleOpenInput();
            return;
          }
          
          this.titleM = this.modalTitle;
          alert('Empty Title Input or Title not edited.');
          break;
        case 'add-list':
          const updateListInfo = {
            boardId: this.boardId,
            update: {
              name: this.title,
              pos: 'bottom',
            },
          };
          if (this.title !== '') {
            this.$store.dispatch('addList', updateListInfo);
            this.handleOpenInput();
          }
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.input-container {
  width: 100%;
}

.input-container.add-list {
  width: 30rem;
}

.card-input {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.switch-input-button {
  font-size: 1.4rem;
  background-color: transparent;
  border: none;
  color: #5e6c84;
  border-radius: 3px;
  padding: 4px 8px;
  width: 100%;
  text-align: left;
}

.switch-input-button:hover {
  background-color: rgba(9, 30, 66, 0.08);
  color: #172b4d;
}

.switch-input-button.add-list {
  color: #fff;
  padding: 1rem 1.5rem;
  background-color: #52cada;
  width: 30rem;
}

.switch-input-button.add-list:hover {
  background-color: #64dbeb;
}

.handle-input {
  margin-top: .5rem;
  width: 100%;
  display: flex;
  align-items: center;
}

.handle-input button {
  border: none;
  transition: all .2s;
}

.handle-input button:first-child {
  background-color: #3e994c;
  color: #fff;
  font-size: 1.4rem;
  padding: .8rem 1.2rem;
  border-radius: 3px;
  margin-right: 1.5rem;
}

.handle-input button:first-child:hover {
  background-color: #4bbd5d;
  color: #f5f5f5;
}

.handle-input button:last-child {
  color: #6b778c;
  font-size: 2rem;
  background-color: transparent;
}

.handle-input button:last-child:hover {
  color: #42526e;
}
</style>
