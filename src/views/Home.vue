<template>
  <section class="home-page">
    <ul class="home-page__todo-list">
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
    <div class="home-page__empty-msg"> <!-- show only if todo_list empty -->
      Nothing here. Add new TODO!
    </div>
    <button class="home-page__add-btn">
      Add
    </button>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>
