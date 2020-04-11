<template>
  <section class="home-page">
    <ul class="home-page__todo-list" v-if="all_todos.length > 0">
      <li class="todo-list__item">
        <h2 class="todo-list__item__title"></h2>
        <ul class="todo-list__item__list">
          <li class="list__item">
            <!-- description checked -> (true = line-through | false = none) -->
          </li>
        </ul>
        <button class="todo-list__item__edit-btn">Edit</button>
        <button class="todo-list__item__remove-btn">Remove</button>
      </li>
    </ul>
    <div class="home-page__empty-msg" v-else>
      Nothing here. Add new TODO!
    </div>
    <button class="home-page__add-btn">
      Add
    </button>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['all_todos'])
  },
  methods: {
    ...mapActions(['addTodo'])
  }
}
</script>
