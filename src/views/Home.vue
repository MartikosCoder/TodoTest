<template>
  <section class="home-page">
    <ul class="home-page__todo-list" v-if="all_todos.length > 0">
      <TodoCard v-for="todo in all_todos" :key="todo.id" :todo="todo" @modalRequired="openModal" />
    </ul>
    <div class="home-page__empty-msg" v-else>Nothing here. Add new TODO!</div>
    <button class="home-page__add-btn" @click="createNewTodo">Add</button>
    <section class="home-page__modal" v-show="modal_is_opened">
      <span>Are you sure?</span>
      <button @click="discardCommand">No</button>
      <button @click="acceptCommand">Yes</button>
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
    }
  },
  computed: {
    ...mapGetters(["all_todos", 'active_todo'])
  },
  components: {
    TodoCard: () => import("../components/Home/TodoCard")
  },
  methods: {
    ...mapActions(["addTodo", 'removeTodo']),
    createNewTodo() {
      this.addTodo();
      this.$router.push(`/edit/${this.active_todo.id}`);
    },
    openModal(remove_id) {
      this.$set(this, 'stack_id', remove_id);
      this.$set(this, 'modal_is_opened', true);
    },
    discardCommand() {
      this.$set(this, 'stack_id', null);
      this.$set(this, 'modal_is_opened', false);
    },
    acceptCommand() {
      this.removeTodo(this.stack_id);
      this.discardCommand();
    }
  }
};
</script>

<style>
  .home-page__todo-list {
    min-height: 100vh;

    display: flex;
    flex-direction: row;
    flex-flow: wrap;

    justify-content: center;
    align-items: center;
  }

  .home-page__add-btn {
    width: 100%;

    position: sticky;
    bottom: 0;

    padding: 20px 5%;

    background: rgb(0, 202, 0);
    color: white;

    text-transform: uppercase;
  }

  .home-page__add-btn:hover {
    background: rgb(0, 149, 0);
    transition: .3s;
  }
</style>