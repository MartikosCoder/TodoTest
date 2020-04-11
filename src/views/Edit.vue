<template>
  <section class="edit-page">
    <div class="edit-page__todo">
      <div class="edit-page__todo__title">
        <label for="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          v-model="active_todo.title"
        />
      </div>
      <section class="todo__items-block">
        <div class="edit-page__todo__new-item">
          <label for="title">New Item: </label>
          <input
            type="text"
            name="new_item"
            id="new_item"
            v-model="new_description"
          />
          <button @click="addNewItem">Add</button>
        </div>
        <ul class="edit-page__todo__items-list">
          <ItemEditor
            class="list-item"
            v-for="item in active_todo.items"
            :key="item.id"
            :id="item.id"
          />
        </ul>
      </section>
    </div>
    <div class="edit-page__controls">
      <button>Back</button>
      <button>Remove</button>
      <button>Save</button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Edit",
  props: {
    id: String
  },
  data() {
    return {
      new_description: ""
    };
  },
  components: {
    ItemEditor: () => import("../components/Edit/ItemEditor")
  },
  computed: {
    ...mapGetters(["active_todo"])
  },
  created() {
    this.setActive(+this.id);
  },
  methods: {
    ...mapActions(["setActive"]),
    addNewItem() {
      this.active_todo.items.push({
        id: Math.max(...this.active_todo.items.map(item => item.id)) + 1,
        checked: false,
        description: this.new_description
      });
      this.$set(this, "new_description", "");
    }
  }
};
</script>
