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
  background:url('http://p2.music.126.net/mXqmc1nD5mu2S4pEvBVHzw==/109951164141857357.jpg');
  background-repeat:no-repeat;
  background-size:cover;
  z-index:0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  color:#fff;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
}

</style>
