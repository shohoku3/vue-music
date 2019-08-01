<template>
  <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" border stripe>
    <el-table-column prop="music-name" label="歌名" width="180"></el-table-column>
    <el-table-column prop="music-author" label="歌手" width="180"></el-table-column>
    <el-table-column prop="music-time" label="時長"></el-table-column>
  </el-table>
</template>
<script>
export default{
  
}
</script>
<style></style>
