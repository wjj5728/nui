<template>
  <div id="app">
    <home></home>
  </div>
</template>
<script>
import home from "./layout/home";
export default {
  name: "app",
  components: {
    home
  }
};
</script>

<style lang="scss">
/*  reset */

*,
::after,
::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}
html,
body {
  height: 100%;
  width: 100%;
  &::-webkit-scrollbar {
    width: 7px !important;
    height: 7px !important;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b6b6b6 !important;
  }
  &::-webkit-scrollbar-track {
    background: #fff !important;
  }
}

div::-webkit-scrollbar {
  width: 5px !important;
  height: 5px !important;
  border-radius: 10px;
  transition: 0.15s ease-out;
  display: none;
}
div::-webkit-scrollbar-thumb {
  background: #eee !important;
}
div::-webkit-scrollbar-track {
  background: #fff !important;
}
div:hover {
  &::-webkit-scrollbar {
    display: block;
  }
}

a:link,
a:visited,
a:hover {
  color: #66cccc;
}
#app {
  font-family: 微软雅黑;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
