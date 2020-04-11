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
      <button class="todo-list__item__btn remove" @click="confirmRemove(todo.id)">Remove</button>
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
        this.$emit('modalRequired', this.todo.id);
    }
  }
};
</script>

<style>
  .todo-list__item {
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

  .todo-list__item__title {
    padding: 10%;
    background: white;
    color: black;

    text-transform: capitalize;
  }
  
  .todo-list__item__list {
    padding: 10%;
  }

  .todo-list__item__list .list__item {
    list-style-type: disc;
    margin-left: 10%;
  }
  .todo-list__item__list .list__item.solved {
    text-decoration: line-through;
    color: rgba(255, 255, 255, 0.75);
  }

  .todo-list__item__controls {
    display: flex;
    flex-direction: row;

    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .todo-list__item__btn {
    width: 50%;
    border: none;
    background: none;
    padding: 5px;

    transition: background .3s;
  }

  .todo-list__item__btn.edit {
    background: rgb(186, 186, 186);
  }
  .todo-list__item__btn.edit:hover {
    background: rgb(159, 159, 159);
  }

  .todo-list__item__btn.remove {
    background: rgb(205, 0, 0);
    color: white;
  }
  .todo-list__item__btn.remove:hover {
    background: rgb(166, 0, 0);
  }

  .list__item:nth-child(n + 7) {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    .todo-list__item {
      min-width: 400px;
      min-height: 400px;
    }

    .todo-list__item__btn {
      padding: 15px;
    }
  }
</style>