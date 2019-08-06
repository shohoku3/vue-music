<template>
  <el-row>
    <el-col>
      <div class="playlist-item" v-for="musiclist in musiclists" :key="musiclist.id" @click="togetPlaylistDetail(musiclist.id)">
        <el-image class="playlist-cover" :src="musiclist.coverImgUrl"></el-image>
        <br>
        <span class="playlist-demonstration">{{musiclist.name}}</span>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { getMusicList } from '../api/index'
export default {
  data() {
    return {
      musiclists: [],
      coverimgurl: '',
    }
  },
  created() {
    getMusicList({}).then(res => {
      this.musiclists = res.data.playlists
    })
  },
  methods: {
    togetPlaylistDetail(id) {
      this.$router.push({
        path: '/musiclist/detail',
        name: 'musiclistdetail',
        query: {
          id: id
        }
      })
    }
  },
}

</script>
<style>
.playlist-item {
  width: 200px;
  height: 200px;
  float: left;
  margin: 15px;
}

.playlist-cover {
  width: 150px;
  height: 150px;
  margin-bottom: 8px;
}

.playlist-demonstration {
  line-height: 20px;
  cursor: pointer;
}

.playlist-demonstration:hover {
  color: #fff;
}

</style>
