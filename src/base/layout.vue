<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <Main></Main>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import Header from "../components/header";
import Main from '../components/main';
export default {
  components: {
    Header,
    Main
  }
};

</script>
<style lang="less">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  padding: 2% 5%
}

</style>
