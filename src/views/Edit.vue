<template>
  <section class="edit-page">
    <div class="edit-page__todo">
      <div class="edit-page__todo__title">
        <input type="text" name="title" id="title" :value="active_todo.title" @blur="saveTitle" />
      </div>
      <section class="todo__items-block">
        <div class="edit-page__todo__new-item">
          <input
            type="text"
            name="new_item"
            id="new_item"
            placeholder="New task"
            v-model="new_description"
          />
          <button class="good" @click="addNewItem">Add</button>
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
    <div class="edit-page__controls flex">
      <div class="controls__main">
        <button class="controls__btn back" @click="setConfirmation('discard')">Back</button>
        <button class="controls__btn danger" @click="setConfirmation('remove')">Remove</button>
        <button class="controls__btn good" @click="updateTodo">Save</button>
      </div>
      <div class="controls__additional">
        <button class="controls__btn standard" @click="undo">Undo</button>
        <button class="controls__btn standard" @click="redo">Redo</button>
      </div>
    </div>
    <section class="modal" :class="{flex: modal_is_opened}">
      <div class="modal_container flex">
        <span>Are you sure?</span>
        <div class="modal_panel flex">
          <button @click="discardCommand">No</button>
          <button @click="acceptCommand">Yes</button>
        </div>
      </div>
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
      is_moving: false // undo/redo status - true = one of them was called, false = native update
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
        if (!this.is_moving) {
          const refined_val = JSON.parse(JSON.stringify(val));
          this.$set(this, "history", this.history.slice(0, this.revision));
          this.history.push(refined_val);
          this.$set(this, "revision", this.revision + 1);
        }
        this.$set(this, "is_moving", false);
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
      this.$set(this.active_todo, "title", e.target.value);
    },
    updater() {
      const updater = { ...this.history[this.revision - 1] };
      this.updateActive(updater);
    },
    undo() {
      if (this.revision > 1) {
        this.$set(this, "revision", this.revision - 1);
        this.$set(this, "is_moving", true);
        this.updater();
      }
    },
    redo() {
      if (this.revision < this.history.length) {
        this.$set(this, "revision", this.revision + 1);
        this.$set(this, "is_moving", true);
        this.updater();
      }
    }
  }
};
</script>
<style>
.back {
  background: #ff9c5a;
}

.back:hover {
  background: #ff8d42;
}

.controls__btn {
  padding: 10px;
  width: 50%;
}

.controls__main,
.controls__additional {
  display: flex;
  justify-content: center;
  width: 100%;
}

.edit-page {
  align-items: flex-start;
  display: flex;
  height: 100%;
  justify-content: center;
}

.edit-page__controls {
  bottom: 0;
  flex-direction: column;
  position: fixed;
  width: 100%;
}

.edit-page__todo {
  background: #000074;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 5%;
  min-height: 75%;
  min-width: 75%;
  overflow: hidden;
  position: relative;
}

.edit-page__todo__items-list {
  color: #fff;
  padding: 5%;
}

.edit-page__todo__new-item {
  display: flex;
}

.edit-page__todo__new-item .good {
  width: 25%;
}

.edit-page__todo__new-item input {
  background: #def4ff;
  padding: 5%;
  width: 75%;
}

.edit-page__todo__title {
  background: #fff;
  padding: 8% 10%;
  text-transform: capitalize;
}

.edit-page__todo__title input {
  border-bottom: 1px solid #000;
  color: #000;
  padding: 2%;
  text-transform: capitalize;
  width: 100%;
}

.standard {
  background: #2469ff;
}

.standard:hover {
  background: #1d53c9;
}

@media screen and (min-width: 600px) {
  .edit-page__todo__title,
  .edit-page__todo__new-item input,
  .edit-page__todo__items-list {
    padding: 20px;
  }
}
</style>