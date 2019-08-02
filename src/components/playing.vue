<template>
  <el-table :data="tableData" style="width: 80%" border stripe size="mini">
    <el-table-column prop="name" label="歌名" width="250"></el-table-column>
    <el-table-column prop="artists" label="歌手" width="200"></el-table-column>
    <el-table-column prop="albumname" label="专辑" width="250"></el-table-column>
    <el-table-column prop="type" label="类型" width="180"></el-table-column>
    <el-table-column prop="time" label="時長"></el-table-column>
    <el-table-column label="操作" width="120">
      <template slot-scope="scope">
        <el-button type="text" icon="el-icon-video-play" circle @click="playmusic(scope.row.id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { personalizednewsong } from '../api/index'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    personalizednewsong({}).then(res => {
      let { status, data } = res;
      if (status == 200) {
        for (let item of res.data.result) {
          let song = {}
          song.id=item.song.id
          song.name = item.song.name
          song.type = item.song.album.type
          song.albumname = item.song.album.name
          let artists = []
          for (let i = 0; i < item.song.artists.length; i++) {
            artists.push(item.song.artists[i].name)
          }
          song.time = String(item.song.duration / 60000).slice(0, 4) + ' min'
          song.artists = String(artists)
          this.tableData.push(song)
        }
      } else {

      }
    })
  },
  methods:{
  	playmusic(id)
  	{
  		console.log(id)
  	}
  }
}

</script>
<style scoped>
.el-table {
  color: #333;
  font-size: 14px;
}

</style>
