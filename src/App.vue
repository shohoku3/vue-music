<template>
  <div id="app">
    <router-view />
    <el-image :src="this.blurPicUrl" class="background-cover"></el-image>
  </div>
</template>
<script>
import Middle from '../util/middle.js'
export default {
  name: "App",
  data() {
    return {
      blurPicUrl: '',
    }
  },
  mounted() {
    Middle.$on('playmusic', this.getData);
  },
  methods: {
    getData(val) {
      this.blurPicUrl = val.blurPicUrl
    }
  }
};

</script>
<style>
html,
body {
  padding: 0;
  margin: 0;
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
  color: hsla(0, 0%, 100%, .6);
  font-weight: 500;
}

.background-cover {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  filter: blur(10px)
}

.el-table--enable-row-hover .el-table__body tr:hover>td {
  background: rgba(255, 255, 255, 0.2);
}

</style>
