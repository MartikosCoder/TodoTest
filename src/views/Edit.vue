<template>
  <section class="edit-page">
    <div class="edit-page__todo">
      <div class="edit-page__todo__title">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title">
      </div>
      <div class="edit-page__todo__new-item">
        <label for="title">New Item: </label>
        <input type="text" name="new_item" id="new_item">
        <button>Add</button>
      </div>
      <ul class="edit-page__todo__items-list">
        <li class="list-item">
          <input type="checkbox" name="check_item" id="check_item_1">
          <input type="text" name="descr_item" id="descr_item_1">
          <button>Remove</button>
        </li>
      </ul>
    </div>
    <div class="edit-page__controls">
      <button>Back</button>
      <button>Remove</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Edit'
}
</script>
