<template>
  <el-row>
    <el-col :span="18">
      <el-table :data="tableData" style="width: 100%;background:transparent;" size="small">
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
    </el-col>
    <el-col :span="6">
      <div class="rightbar">
        <img :src="this.blurPicUrl" class="cover" v-if="this.blurPicUrl!=''">
        <img src="../assets/img/default.png" class="cover" v-if="this.blurPicUrl==''">
        <img src="../assets/img/album_cover_player.png" class="cover_player">
        <p>歌曲名：{{this.name}}</p>
        <p>歌手：{{this.artists}}</p>
        <p>专辑：{{this.albumname}}</p>
      </div>
      <audio :src="this.url" autoplay="autoplay" controls="controls"></audio>
    </el-col>
  </el-row>
</template>
<script>
import { personalizednewsong, getlyric, getMusicURL } from '../api/'
export default {
  data() {
    return {
      tableData: [],
      blurPicUrl: '',
      name: '',
      artists: '',
      albumname: '',
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
      this.blurPicUrl = blurPicUrl
      this.name = name,
        this.artists = artists,
        this.albumname = albumname
      let params = {
        id: id
      }
      getMusicURL(params).then(res => {
        console.log(res.data.data[0].url)
        this.url = res.data.data[0].url
      })
      getlyric(params).then(res => {
        let { status, data } = res
        if (status == 200) {
          console.log(data.lrc.lyric)
        }
      })
    }
  }
}

</script>
<style scoped>
.el-table {
  color: #333;
  font-size: 14px;
}

.rightbar {
  position: relative;
}

.cover {
  width: 180px;
  height: 180px;
  z-index: 999;
  position: absolute;
}

.cover_player {
  z-index: 0;
  position: relative;
}

.el-table>>>th,
.el-table>>>tr {
  background: transparent;
  color: #fff;
}

.el-table--enable-row-hover .el-table__body tr:hover>td {
  background: rgba(255, 255, 255, 0.2);
}

.el-button.is-circle {
  font-size: 20px;
}

</style>
