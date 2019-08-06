<template>
  <el-row>
    <img :src="this.music.blurPicUrl" class="cover" v-if="this.music.blurPicUrl!=''">
    <img src="../assets/img/default.png" class="cover" v-if="this.music.blurPicUrl==''">
    <img src="../assets/img/album_cover_player.png" class="cover_player">
    <p>歌曲名：{{this.music.name}}</p>
    <p>歌手：{{this.music.artists}}</p>
    <p>专辑：{{this.music.albumname}}</p>
    <audio :src="this.musicurl" autoplay="autoplay" controls="controls"></audio>
  </el-row>
</template>
<script>
import Middle from '../../util/middle.js';
import { getlyric, getMusicURL } from '../api/index'
export default {
  data() {
    return {
      music: '',
      musicurl: ''
    }
  },
  mounted() {
    Middle.$on('playmusic', this.getData);
  },
  methods: {
    getData(val) {
      this.music = val;
      let params = {
        id: val.id
      };
      getMusicURL(params).then(res => {
        this.musicurl = res.data.data[0].url
      })
    },
  }
}

</script>
<style>
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

</style>
