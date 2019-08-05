<template>
  <el-container>
    <el-header>
      <Header></Header>
      <Nav></Nav>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import Header from "../components/header";
import Nav from "../components/nav"
export default {
  components: {
    Header,
    Nav
  }
};

</script>
<style scoped>
.el-header {
  background-color: transparent;
  text-align: center;
  height:100px;
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
  background-color:transparent;
}

</style>
