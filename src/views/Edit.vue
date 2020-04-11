<template>
  <section class="edit-page">
    <div class="edit-page__todo">
      <div class="edit-page__todo__title">
        <input type="text" name="title" id="title" :value="active_todo.title" @blur="saveTitle" />
      </div>
      <section class="todo__items-block">
        <div class="edit-page__todo__new-item">
          <input type="text" name="new_item" id="new_item" placeholder="New task" v-model="new_description" />
          <button @click="addNewItem">Add</button>
        </div>
        <ul class="edit-page__todo__items-list">
          <ItemEditor
            class="list-item"
            v-for="item in active_todo.items"
            :key="item.id"
            :id="item.id"
          />
        </ul>
      </section>
    </div>
    <div class="edit-page__controls">
      <div class="controls__main">
        <button class="controls__btn" @click="setConfirmation('discard')">Back</button>
        <button class="controls__btn remove" @click="setConfirmation('remove')">Remove</button>
        <button class="controls__btn save" @click="updateTodo">Save</button>
      </div>
      <div class="controls__additional">
        <button class="controls__btn"  @click="undo">Undo</button>
        <button class="controls__btn"  @click="redo">Redo</button>
      </div>
    </div>
    <section class="edit-page__modal" v-show="modal_is_opened">
      <span>Are you sure?</span>
      <button @click="discardCommand">No</button>
      <button @click="acceptCommand">Yes</button>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Edit",
  props: {
    id: String
  },
  data() {
    return {
      new_description: "",
      command: null,
      modal_is_opened: false,

      history: [], // saving states
      revision: 0, // current position
      is_moving: false, // undo/redo status - true = one of them was called, false = native update
    };
  },
  components: {
    ItemEditor: () => import("../components/Edit/ItemEditor")
  },
  computed: {
    ...mapGetters(["all_todos", "active_todo"])
  },
  created() {
    this.setActive(+this.id);
  },
  watch: {
    active_todo: {
      handler(val) {
        if(!this.is_moving) {
          const refined_val = JSON.parse(JSON.stringify(val));
          this.$set(this, 'history', this.history.slice(0, this.revision));
          this.history.push(refined_val);
          this.$set(this, 'revision', this.revision + 1);
        }
        this.$set(this, 'is_moving', false);
      },
      deep: true
    }
  },
  methods: {
    ...mapActions([
      "setActive",
      "changeTodo",
      "removeTodo",
      "updateActive",
      "clearActive"
    ]),
    addNewItem() {
      if (this.new_description.length > 0) {
        const current_id = Math.max(
          ...this.active_todo.items.map(item => item.id)
        );
        this.active_todo.items = [
          ...this.active_todo.items,
          {
            id: current_id > 0 ? current_id + 1 : 1,
            checked: false,
            description: this.new_description
          }
        ];
        this.$set(this, "new_description", "");
      }
    },
    goToMain() {
      this.$router.push("/");
    },
    updateTodo() {
      this.changeTodo();
      this.goToMain();
    },
    setConfirmation(command) {
      this.$set(this, "modal_is_opened", true);
      this.$set(this, "command", command);
    },
    discardCommand() {
      this.$set(this, "command", "");
      this.$set(this, "modal_is_opened", false);
    },
    acceptCommand() {
      switch (this.command) {
        case "remove":
          this.removeTodo(this.active_todo.id);
          break;
        case "discard":
          this.clearActive();
          break;
      }
      this.goToMain();
    },
    saveTitle(e) {
      this.$set(this.active_todo, 'title', e.target.value);
    },
    updater() {
      const updater = {...this.history[this.revision - 1]};
      this.updateActive(updater);
    },
    undo() {
      if (this.revision > 1) {
        this.$set(this, 'revision', this.revision - 1);
        this.$set(this, 'is_moving', true);
        this.updater();
      }
    },
    redo() {
      if (this.revision < this.history.length) {
        this.$set(this, 'revision', this.revision + 1);
        this.$set(this, 'is_moving', true);
        this.updater();
      }
    }
  }
};
</script>
<style>
  .edit-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .edit-page__todo {
    min-width: 250px;
    min-height: 250px;

    margin: 5%;

    background: #000074;
    color: white;
    border-radius: 5px;

    display: flex;
    flex-direction: column;

    overflow: hidden;
    position: relative;
  }

  .edit-page__todo__title {
    background: white;
    padding: 8% 10%;
    color: black;

    text-transform: capitalize;
  }

  .edit-page__todo__title input {
    width: 100%;
    padding: 2%;
    border-bottom: 1px solid black;
    color: black;

    text-transform: capitalize;
  }

  .todo__items-block {
    padding: 5%;
  }

  .edit-page__todo__new-item {
    display: flex;
  }

  .edit-page__controls {
    position: fixed;
    bottom: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .controls__main, .controls__additional {
    width: 100%;
    display: flex;

    justify-content:center;

    background: #2469ff;
  }

  .controls__btn {
    width: 50%;
    color: white;
    padding: 10px;
  }
  .controls__btn.remove {
    background: rgb(205, 0, 0);
  }
  .controls__btn.remove:hover {
    background: rgb(166, 0, 0);
  }

  .controls__btn.save {
    background: rgb(0, 202, 0);
  }
  .controls__btn.save:hover {
    background: rgb(0, 149, 0);
  }
</style>