<template>
  <div class="audio">
    <audio :src="this.musicurl" autoplay="autoplay"></audio>
    <div class="controls">
      <span class="play-time"></span>
      <el-button type="text" icon="el-icon-back" circle class="play-button"></el-button>
      <el-button type="text" :icon="this.button_icon" circle class="play-button" @click="play()"></el-button>
      <el-button type="text" icon="el-icon-right" circle class="play-button"></el-button>
      <span class="audio-time"></span>
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
      percentage: 50,
      button_icon: 'el-icon-video-play',
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
        this.button_icon = 'el-icon-video-pause'
        var audio = document.getElementsByTagName('audio')[0]
        audio.addEventListener("loadedmetadata", function() {
          document.getElementsByClassName('audio-time')[0].innerText = '0' + String(this.duration / 60).slice(0, 1) + ':' + String(this.duration / 60).slice(2, 4)
        })
        audio.addEventListener('timeupdate', function() {
          var audio = document.getElementsByTagName('audio')[0]
          var value = Math.round((Math.floor(audio.currentTime) / Math.floor(audio.duration)) * 100, 0);
          document.getElementsByClassName('play-time')[0].innerText = parseInt(audio.currentTime) % 60
        }, false)
      });
    },
    play() {
      var audio = document.getElementsByTagName('audio')[0]
      if (audio.paused) {
        audio.play();
        this.button_icon = 'el-icon-video-pause'
      } else {
        audio.pause();
        this.button_icon = 'el-icon-video-play'
      }
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
    width: 30%;

    .play-button {
      font-size: 40px;
    }
  }

  .progress {
    float: left;
    width: 60%;
    position: relative;
    top: 15px;
  }
}

</style>
