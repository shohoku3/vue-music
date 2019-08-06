<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};

</script>
<style>
body {
  padding: 0;
  margin: 0;
  z-index: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  color:hsla(0,0%,100%,.6);
}

.el-table--enable-row-hover .el-table__body tr:hover>td {
  background: rgba(255, 255, 255, 0.2);
}

</style>
