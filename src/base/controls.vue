<template>
  <div class="audio">
    <audio :src="this.musicurl" autoplay="autoplay"></audio>
    <div class="controls">
      <span class="play-time">00:00</span>
      <el-button type="text" icon="el-icon-video-play" circle class="play-button" @click=""></el-button>
      <span class="audio-time">0</span>
    </div>
    <div class="progress">
      <el-slider v-model="percentage" :show-tooltip="false"></el-slider>
    </div>
  </div>
</template>
<script>
import Middle from '../../util/middle.js';
import { getMusicURL } from '../api/index'
export default {
  data() {
    return {
      musicurl: '',
      percentage: 0,
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
        console.log(res)
        this.musicurl = res.data.data[0].url
      })
    },
  }
}

</script>
<style lang="less">
.audio {
  position: relative;
  width: 80%;
  margin: 0 auto;

  .controls {
    float: left;
    width: 20%;

    .play-button {
      font-size: 60px;
    }
  }

  .progress {
    float: left;
    width: 80%;
  }
}

</style>
