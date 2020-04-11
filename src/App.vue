<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;

  list-style: none;
}

button, input {
  border: none;
  background: none;
  outline: none;
}

button {
  cursor: pointer;
}

#app {
  min-width: 100vw;
  min-height: 100vh;

  background: #dcfeff;
}
</style>
