<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  background: #dcfeff;
}

* {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  list-style: none;
  margin: 0;
  padding: 0;
}

.danger {
  background: #ff3232;
}

.danger:hover {
  background: #e93232;
}

.good {
  background: #3bd664;
}

.good:hover {
  background: #1ebc48;
}

.modal {
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.flex {
  align-items: center;
  display: flex;
  justify-content: center;
}

.modal_container {
  background-color: #fefefe;
  flex-direction: column;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
}

.modal_panel {
  width: 100%;
}

.modal_panel button {
  color: #000;
  width: 50%;
}

button {
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;
}

button,
input {
  background: none;
  border: none;
  outline: none;
}

html,
body,
#app {
  height: 100%;
}

@media screen and (min-width: 1024px) {
  .modal_container {
    width: 25%;
  }
}
</style>
