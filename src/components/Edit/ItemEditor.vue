<template>
  <li class="list-item">
    <label class="checkbox_container" :for="`c_${id}`">
      <input type="checkbox" :checked="item.checked" @click="toggleCheck" :id="`c_${id}`" />
      <div class="checkbox_controller"></div>
    </label>
    <span contenteditable @blur="changeDescription">{{ item.description }}</span>
    <div class="close" @click="removeItem"></div>
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
      this.active_todo.items = [
        ...this.active_todo.items.filter(item => item.id !== this.item.id)
      ];
    }
  }
};
</script>

<style>
.checkbox_container {
  cursor: pointer;
  display: block;
  height: 20px;
  margin-bottom: 10px;
  padding-left: 30px;
  padding-top: 3px;
  position: relative;
  width: 20px;
}

.checkbox_container .checkbox_controller:after {
  border: solid #fff;
  border-width: 0 2px 2px 0;
  height: 8px;
  left: 8px;
  top: 4px;
  transform: rotate(45deg);
  width: 3px;
}

.checkbox_container input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.checkbox_container input:checked ~ .checkbox_controller {
  background: #2a48c0;
}

.checkbox_container input:checked ~ .checkbox_controller:after {
  display: block;
}

.checkbox_container:hover input ~ .checkbox_controller {
  background: #ccc;
}

.checkbox_controller {
  background: #e6e6e6;
  border: none;
  height: 20px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 20px;
}

.checkbox_controller:after {
  box-sizing: unset;
  content: "";
  display: none;
  position: absolute;
}

.list-item {
  align-items: center;
  display: flex;
  position: relative;
}

.list-item .close {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 25%;
}

.list-item .close:after {
  transform: rotate(-45deg);
}

.list-item .close:before {
  transform: rotate(45deg);
}

.list-item .close:before,
.list-item .close:after {
  background-color: #cd0000;
  content: " ";
  height: 15px;
  position: absolute;
  right: 5px;
  width: 2px;
}
</style>