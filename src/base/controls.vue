<template>
  <div class="audio">
    <audio :src="this.musicurl" autoplay="autoplay"></audio>
    <div class="controls">
      <span class="nowtime" v-text="now"></span>
      <el-button type="text" icon="el-icon-back" circle class="play-button"></el-button>
      <el-button type="text" :icon="this.button_icon" circle class="play-button" @click="pause()"></el-button>
      <el-button type="text" icon="el-icon-right" circle class="play-button"></el-button>
      <span v-text="totalTime" class="totalTime" ref="totalTime"></span>
    </div>
    <div class="progress">
      <el-slider v-model="percentage" :show-tooltip="false" id="slider"></el-slider>
    </div>
  </div>
</template>
<script>
import { transformTime } from '../../util/util.js'
import Middle from '../../util/middle.js';
import { getMusicURL } from '../api/index'
export default {
  data() {
    return {
      musicurl: '',
      percentage: 0,
      totalTime: '00:00',
      now: '00:00',
      button_icon: 'el-icon-video-play',
    }
  },
  mounted() {
    Middle.$on('playmusic', this.getData)
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
        var nativeAudio = document.querySelector('audio');
        nativeAudio.addEventListener('loadedmetadata', () => {
          this.totalTime = transformTime(nativeAudio.duration)
        })
        nativeAudio.addEventListener('timeupdate', () => {
          this.now = transformTime(nativeAudio.currentTime)
          this.percentage = ((nativeAudio.currentTime / nativeAudio.duration)*100)
        })
        nativeAudio.addEventListener('ended', () => {
          this.percentage = 0;
        }, false)
        var slider = document.getElementById('slider')
        slider.addEventListener('change', function(e) {
          if (!nativeAudio.paused || nativeAudio.currentTime != 0) {
            var rate = e.offsetX / 600
            nativeAudio.currentTime = nativeAudio.duration * rate;
          }
        })
      });
    },
    pause() {
      var nativeAudio = document.querySelector('audio');
      if (nativeAudio.paused) {
        nativeAudio.play();
        this.button_icon = 'el-icon-video-pause'
      } else {
        nativeAudio.pause();
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
    width: 600px;
    position: relative;
    top: 15px;
  }
}

</style>
