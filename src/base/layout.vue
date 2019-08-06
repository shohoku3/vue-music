<template>
  <el-container>
    <el-header>
      <Header></Header>
      <Nav></Nav>
    </el-header>
    <el-container>
      <el-main>
        <router-view />
      </el-main>
      <el-aside width="400px">
        <Player></Player>
      </el-aside>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import Header from "../components/header";
import Nav from "../components/nav"
import Player from "../base/player"
export default {
  components: {
    Header,
    Nav,
    Player
  }
};

</script>
<style scoped>
.el-header {
  background-color: transparent;
  text-align: center;
  height: 100px;
}

.el-aside {
  float: right;
}

.el-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  line-height: 0px;
  background-color: transparent;
}

.el-main {
  padding: 3% 5%;
  background-color: transparent;
}

</style>
