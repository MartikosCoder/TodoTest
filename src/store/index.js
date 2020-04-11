import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todo_list: JSON.parse(localStorage.getItem("todo_list")) || [], // [{id, title, items}], where items = [{id, checked, description}]
    todo_active: {}, // Active todo `For edit page`
  },
  getters: {
    all_todos(state) {
      return state.todo_list;
    },
    active_todo(state) {
      return state.todo_active;
    },
    specific_todo(state) {
      return id => {
        return { ...state.todo_list.find(item => item.id === id) };
      };
    }
  },
  mutations: {
    ADD_TODO(state) {
      const current_id = Math.max(...state.todo_list.map(item => item.id));
      state.todo_list.push({
        id: current_id > 0 ? current_id + 1 : 1,
        title: "",
        items: []
      });
    },
    REMOVE_TODO(state, index) {
      state.todo_list.splice(index, 1);
    },
    CHANGE_TODO(state, { index, new_todo }) {
      state.todo_list.splice(index, 1, new_todo);
    },
    UPDATE_ACTIVE(state, update_state) {
      state.todo_active = update_state;
    },
    SET_ACTIVE_TODO(state, todo) {
      state.todo_active = todo;
    },
    SAVE_STATE(state) {
      localStorage.setItem("todo_list", JSON.stringify(state.todo_list));
    }
  },
  actions: {
    addTodo({ commit, getters, dispatch }) {
      commit("ADD_TODO");
      dispatch("setActive", getters.all_todos[getters.all_todos.length - 1].id);
      commit("SAVE_STATE");
    },
    removeTodo({ commit, getters }, id) {
      commit(
        "REMOVE_TODO",
        getters.all_todos.map(item => item.id).indexOf(id)
      );
      commit("SAVE_STATE");
    },
    changeTodo({ commit, getters }) {
      commit("CHANGE_TODO", {
        index: getters.all_todos.map(item => item.id).indexOf(getters.active_todo.id),
        new_todo: getters.active_todo
      });
      commit("SAVE_STATE");
    },
    updateActive({commit}, current_state) {
      commit("UPDATE_ACTIVE", current_state);
    },
    setActive({ commit, getters }, id) {
      commit("SET_ACTIVE_TODO", getters.specific_todo(id));
    },
    clearActive({ commit }) {
      commit("SET_ACTIVE_TODO", {});
    }
  }
});
