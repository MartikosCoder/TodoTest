<template>
  <li class="list-item">
    <input type="checkbox" :checked="item.checked" @click="toggleCheck" />
    <span contenteditable @blur="changeDescription">{{ item.description }}</span>
    <button @click="removeItem">Remove</button>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ItemEditor",
  props: {
    id: Number
  },
  computed: {
    ...mapGetters(["active_todo"]),
    item() {
      return this.active_todo.items.find(item => item.id === this.id);
    }
  },
  methods: {
    changeDescription(e) {
      this.$set(this.item, "description", e.target.innerText);
    },
    toggleCheck() {
      this.$set(this.item, "checked", !this.item.checked);
    },
    removeItem() {
      this.active_todo.items.splice(
        this.active_todo.items.indexOf(this.item),
        1
      );
    }
  }
};
</script>
