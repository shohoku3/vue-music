<template>
  <el-row>
    <el-col class="playlistdetail">
      <el-image :src="this.coverImgUrl" class="playlistCover"></el-image>
      <h2>{{this.playlistTitle}}</h2>
      <span><label class="label">创建者：</label>{{this.creator}}</span>
      <span><label class="label">播放量：</label>{{this.playCount}}</span>
      <span><label class="label">标签：</label>{{this.tags.join(' , ')}}</span>
      <span><label class="label">订阅者</label>({{this.subscribers}})</span>
      <span><label class="label" style="overflow:hidden;">描述：</label>{{this.description}}</span>
    </el-col>
    <el-col>
      <el-table :data="tableData" style="width: 100%;background:transparent;" size="small">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="name" label="歌名"></el-table-column>
        <el-table-column prop="artists" label="歌手"></el-table-column>
        <el-table-column prop="time" label="时长" width="100" sortable></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-video-play" circle @click="playmusic(scope.row.id,scope.row.blurPicUrl,scope.row.name,scope.row.artists,scope.row.albumname)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
import Middle from '../../util/middle.js'
import { getPlaylistDetail } from '../api/index'
export default {
  data() {
    return {
      tableData: [],
      creator: '',
      coverImgUrl: '',
      playlistTitle: '',
      description: '',
      playCount: '',
      subscribers: '',
      tags: [],
    }
  },
  mounted() {
    let params = {
      id: this.$route.query.id,
    }
    getPlaylistDetail(params).then(res => {
      let { status, data } = res
      if (status == 200) {
        this.coverImgUrl = data.playlist.coverImgUrl
        this.creator = data.playlist.creator.nickname
        this.playlistTitle = data.playlist.name
        this.description = data.playlist.description
        this.playCount = data.playlist.playCount
        this.tags = data.playlist.tags
        this.subscribers = data.playlist.subscribers.length
        for (let item of data.playlist.tracks) {
          let music = {}
          music.id = item.id
          music.name = item.name
          music.blurPicUrl = item.al.picUrl
          let ars=[]
          for(let a of item.ar)
          {
            ars.push(a.name)
            music.artists=ars.join(" , ")
          }
          this.tableData.push(music)
        }
      } else {
        alert('获取歌单详情失败，请联系开发者')
      }
    })
  },
  methods: {
    playmusic(id, blurPicUrl, name) {
      let musicdetail = {}
      musicdetail.id = id;
      musicdetail.blurPicUrl = blurPicUrl,
        musicdetail.name = name,
        Middle.$emit('playmusic', musicdetail);
    }
  }
}

</script>
<style scoped>
.el-table {
  color: #333;
  font-size: 14px;
}

.el-table>>>th,
.el-table>>>tr {
  background: transparent;
  color: #fff;
}

.el-button.is-circle {
  font-size: 20px;
}

.playlistdetail {
  padding: 20px;
  text-align: left;
}

.playlistdetail h2 {
  line-height: 10px;
}

.playlistdetail .label {
  color: #fff;
}

.playlistdetail span {
  display: block;
  margin: 5px;
}

.playlistCover {
  width: 180px;
  height: 180px;
  float: left;
  margin: 20px;
}

</style>
