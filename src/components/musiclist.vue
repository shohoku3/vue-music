<template>
  <el-row>
    <el-table :data="tableData" style="width: 100%;background:transparent;" size="mini">
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column prop="name" label="歌名"></el-table-column>
      <el-table-column prop="artists" label="歌手" width="170"></el-table-column>
      <el-table-column prop="albumname" label="专辑" width="200"></el-table-column>
      <el-table-column prop="company" label="公司" width="200" sortable></el-table-column>
      <el-table-column prop="type" label="类型" width="180" sortable></el-table-column>
      <el-table-column prop="time" label="时长" width="100" sortable></el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-video-play" circle @click="playmusic(scope.row.id,scope.row.blurPicUrl,scope.row.name,scope.row.artists,scope.row.albumname)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script>
import Middle from '../../util/middle.js'
import { personalizednewsong } from '../api/'
export default {
  data() {
    return {
      tableData: [],
      url: '',
    }
  },
  created() {
    personalizednewsong({}).then(res => {
      let { status, data } = res;
      if (status == 200) {
        for (let item of res.data.result) {
          let song = {}
          song.id = item.song.id
          song.name = item.song.name
          song.type = item.song.album.type
          song.albumname = item.song.album.name
          song.company = item.song.album.company
          song.time = String(item.song.duration / 60000).slice(0, 4) + ' min'
          song.blurPicUrl = item.song.album.blurPicUrl
          let artists = []
          for (let i = 0; i < item.song.artists.length; i++) {
            artists.push(item.song.artists[i].name)
          }
          song.artists = String(artists)
          this.tableData.push(song)
        }
      } else {

      }
    })
  },
  methods: {
    playmusic(id, blurPicUrl, name, artists, albumname) {
      let musicdetail = {}
      musicdetail.id = id;
      musicdetail.blurPicUrl = blurPicUrl,
        musicdetail.name = name,
        musicdetail.artists = artists,
        musicdetail.albumname = albumname,
        Middle.$emit('playmusic', musicdetail);
    }
  }
}

</script>
<style scoped>
.el-table {
  color: #333;
  font-size: 13px;
}
.el-table>>>th,
.el-table>>>tr {
  background: transparent;
  color: #fff;
}

.el-button.is-circle {
  font-size: 20px;
}
</style>
