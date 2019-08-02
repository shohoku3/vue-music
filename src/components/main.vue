<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="热门推荐" name="playing">
      <playing></playing>
    </el-tab-pane>
    <el-tab-pane label="推薦" name="recommend">配置管理</el-tab-pane>
    <el-tab-pane label="搜索" name="search">角色管理</el-tab-pane>
  </el-tabs>
</template>
<script>
import playing from "./playing";
export default {
  components: {
    playing
  },
  data() {
    return {
      activeName: "playing"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};

</script>

