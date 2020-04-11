<template>
  <li class="todo-list__item">
    <h2 class="todo-list__item__title">{{ todo.title }}</h2>
    <ul class="todo-list__item__list">
      <li
        class="list__item"
        :class="{solved: item.checked}"
        v-for="item in todo.items"
        :key="item.id"
      >{{ item.description }}</li>
    </ul>
    <button class="todo-list__item__edit-btn" @click="editTodo">Edit</button>
    <button class="todo-list__item__remove-btn" @click="removeTodo(todo.id)">Remove</button>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoCard",
  props: {
    todo: Object
  },
  methods: {
    ...mapActions(["removeTodo"]),
    editTodo() {
      this.$router.push(`/edit/${this.todo.id}`);
    }
  }
};
</script>