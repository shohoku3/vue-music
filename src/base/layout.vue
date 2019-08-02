<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import Header from "../components/header";
export default {
  components: {
    Header,
  }
};

</script>
<style lang="less">
.el-header {
  background-color: transparent;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  line-height: 0px;
  background-color: transparent;
}

.el-main {
  padding: 2% 5%;
  background-color:transparent;
}

</style>
