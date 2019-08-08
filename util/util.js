const playermusic = {
  initAudio(that) {
  	const audio = document.getElementsByTagName('audio')[0]
  	//音频缓存事件
  	audio.onprogress=()=>{

  	}
  	//播放音乐
  	audio.onplay=()=>{
  		let timer
  		
  	}
  	//获取当前播放时间
  	audio.ontimeupdate=()=>{
  		that.currentTime=audio.currentTime
  	}
  	//音乐播放完毕
  	audio.onended=()=>{
  		that.next()
  	}
  	//播放错误
  	audio.onerror=()=>{
  		alert('当前音乐不可播放，已经自动切换下一首')
  		that.next()
  	}
  }
}
