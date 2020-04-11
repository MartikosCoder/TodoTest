<template>
  <section class="home-page">
    <ul class="home-page__todo-list" v-if="all_todos.length > 0">
      <TodoCard v-for="todo in all_todos" :key="todo.id" :todo="todo" />
    </ul>
    <div class="home-page__empty-msg" v-else>Nothing here. Add new TODO!</div>
    <button class="home-page__add-btn" @click="createNewTodo">Add</button>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["all_todos", 'active_todo'])
  },
  components: {
    TodoCard: () => import("../components/Home/TodoCard")
  },
  methods: {
    ...mapActions(["addTodo"]),
    createNewTodo() {
      this.addTodo();
      this.$router.push(`/edit/${this.active_todo.id}`);
    }
  }
};
</script>
