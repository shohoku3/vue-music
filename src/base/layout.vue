<template>
  <el-container>
    <el-header style="height:120px;">
      <Header></Header>
      <Nav></Nav>
    </el-header>
    <el-container>
      <el-main>
        <router-view />
      </el-main>
      <el-aside>
        <Player></Player>
      </el-aside>
    </el-container>
    <el-footer style="height:100px;">
      <Controls></Controls>
    </el-footer>
  </el-container>
</template>
<script>
import Header from "../components/header";
import Nav from "../components/nav";
import Player from "../base/player";
import Controls from "../base/controls"
export default {
  components: {
    Header,
    Nav,
    Player,
    Controls
  }
};

</script>
<style scoped>
.el-container
{
  width:100%;
  height:100%;
  position:absolute;
  overflow: hidden;
}
.el-container.is-vertical {
  background: rgb(26, 26, 26,0.5);
  z-index: 998;
}

.el-header {
  background-color: transparent;
  text-align: center;
  position: fixed;
  width: 100%;
  background-color: transparent;
  z-index: 1000;

}

.el-main {
  margin:7% 18% 6% 5%;
  background-color: transparent;
  z-index: 999;
}

.el-aside {
  position: fixed;
  right: 0;
  padding: 8% 2% 0px 0px;
  z-index: 999;
}

.el-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  z-index: 1000;
}

</style>
