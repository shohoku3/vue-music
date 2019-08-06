<template>
  <el-row class="nav-row">
    <el-button plain @click="newlist()">热门音乐</el-button>
    <el-button plain @click="search()">搜索</el-button>
    <el-button plain @click="musiclist()">歌单</el-button>
  </el-row>
</template>
<script>
export default {
	methods:{
		newlist(){
			this.$router.push('/newlist')
		},
		search(){
			this.$router.push('/search')
		},
		musiclist(){
			this.$router.push('/musiclist')
		}
	}
}

</script>
<style lang="less">
.nav-row {
  text-align: left;
  padding-left: 4%;
  .el-button.el-button--default.is-plain
  {
  	background:transparent;
  	color:#fff
  }
}

</style>
