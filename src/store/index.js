import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo_list: JSON.parse(localStorage.getItem('todo_list')) || [],    // [{id, title, items}], where items = [{id, checked, description}]
    todo_active: {},                                                   // Active todo `For edit page`
    id: localStorage.getItem('last_id') || 1,                          // Current ID

    done_mutations: [],   // [{mutation, payload}] for done operations [ undo ]
    undone_mutations: [], // [{mutation, payload}] for undone operations [ redo ]
    new_mutation: true    // Indicator of new mutation | false - same timeline mutation / true - new timeline
  },
  getters: {
    all_todos(state) {
      return state.todo_list;
    },
    active_todo(state) {
      return state.todo_active;
    },
    specific_todo(state) {
      return id => { return {...state.todo_list.find(item => item.id === id)}};
    },
    current_id(state) {
      return state.id;
    }
  },
  mutations: {
    ADD_TODO(state) {
      state.todo_list.push({
        id: ++state.id,
        title: '',
        items: []
      });
    },
    REMOVE_TODO(state, index) {
      state.todo_list.splice(index, 1);
    },
    CHANGE_TODO(state, {index, new_todo}) {
      state.todo_list.splice(index, 1, new_todo);
    },
    SET_ACTIVE_TODO(state, todo) {
      state.todo_active = todo ;
    },
    SAVE_STATE(state) {
      localStorage.setItem('todo_list', state.todo_list);
      localStorage.setItem('last_id', state.id);
    }
  },
  actions: {
    addTodo({commit, getters, dispatch}) {
      commit('ADD_TODO');
      dispatch('setActive', getters.current_id);
      commit('SAVE_STATE');
    },
    removeTodo({commit, getters}, id) {
      commit('REMOVE_TODO', getters.all_todos.indexOf(getters.specific_todo(id)));
      commit('SAVE_STATE');
    },
    changeTodo({ commit, getters }, new_todo) {
      commit('CHANGE_TODO', {index: getters.all_todos.indexOf(getters.specific_todo(new_todo.id)), new_todo});
      commit('SAVE_STATE');
    },
    setActive({commit, getters}, id) {
      commit('SET_ACTIVE_TODO', getters.specific_todo(id));
    },
    goBack({commit}) {
      commit('SET_ACTIVE_TODO', {});
    }
  }
})
