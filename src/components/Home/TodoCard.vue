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
    <button class="todo-list__item__remove-btn" @click="confirmRemove(todo.id)">Remove</button>
  </li>
</template>

<script>
export default {
  name: "TodoCard",
  props: {
    todo: Object
  },
  methods: {
    editTodo() {
      this.$router.push(`/edit/${this.todo.id}`);
    },
    confirmRemove() {
        this.$emit('modalRequired', this.todo.id);
    }
  }
};
</script>