<template>
  <section class="home-page">
    <ul class="home-page__todo-list flex" v-if="all_todos.length > 0">
      <TodoCard v-for="todo in all_todos" :key="todo.id" :todo="todo" @modalRequired="openModal" />
    </ul>
    <div class="home-page__empty-msg flex" v-else>Nothing here. Add new TODO!</div>
    <button class="home-page__add-btn good" @click="createNewTodo">Add</button>
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
  name: "Home",
  data() {
    return {
      stack_id: null,
      modal_is_opened: false
    };
  },
  computed: {
    ...mapGetters(["all_todos", "active_todo"])
  },
  components: {
    TodoCard: () => import("../components/Home/TodoCard")
  },
  methods: {
    ...mapActions(["addTodo", "removeTodo"]),
    createNewTodo() {
      this.addTodo();
      this.$router.push(`/edit/${this.active_todo.id}`);
    },
    openModal(remove_id) {
      this.$set(this, "stack_id", remove_id);
      this.$set(this, "modal_is_opened", true);
    },
    discardCommand() {
      this.$set(this, "stack_id", null);
      this.$set(this, "modal_is_opened", false);
    },
    acceptCommand() {
      this.removeTodo(this.stack_id);
      this.discardCommand();
    }
  }
};
</script>

<style>
.home-page {
  height: 100%;
}

.home-page__add-btn {
  bottom: 0;
  padding: 20px 5%;
  position: sticky;
  text-transform: uppercase;
  width: 100%;
}

.home-page__empty-msg,
.home-page__todo-list {
  min-height: calc(100% - 58px);
}

.home-page__todo-list {
  flex-direction: row;
  flex-flow: wrap;
}
</style>