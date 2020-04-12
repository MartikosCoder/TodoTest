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
    <div class="todo-list__item__controls">
      <button class="todo-list__item__btn edit" @click="editTodo">Edit</button>
      <button class="todo-list__item__btn danger" @click="confirmRemove(todo.id)">Remove</button>
    </div>
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
      this.$emit("modalRequired", this.todo.id);
    }
  }
};
</script>

<style>
.list__item:nth-child(n + 7) {
  display: none;
}

.todo-list__item {
  background: #000074;
  border-radius: 5px;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 5%;
  min-height: 250px;
  min-width: 250px;
  overflow: hidden;
  position: relative;
}

.todo-list__item__btn {
  padding: 5px;
  width: 50%;
}

.todo-list__item__btn.edit {
  background: #bababa;
}

.todo-list__item__btn.edit:hover {
  background: #9f9f9f;
}

.todo-list__item__controls {
  bottom: 0;
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
}

.todo-list__item__list {
  padding: 10%;
}

.todo-list__item__list .list__item {
  list-style-type: disc;
  margin-left: 10%;
}

.todo-list__item__list .list__item.solved {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: line-through;
}

.todo-list__item__title {
  background: #fff;
  color: #000;
  padding: 10%;
  text-transform: capitalize;
}

@media screen and (min-width: 1024px) {
  .todo-list__item {
    min-height: 400px;
    min-width: 400px;
  }

  .todo-list__item__btn {
    padding: 15px;
  }
}
</style>