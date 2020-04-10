<template>
  <div>
    <audio controls @ended="audioEnd()" ref="audio">
      <source :src="musicList[item].src" />
    </audio>
    <div class="music">
      <span class="musicName">{{musicName[item].name}}</span>
      <span class="musicAuthor">作者：{{author[item].name}}</span>
    </div>
    <div class="music">
      <span class="musicName">{{musicName[item].name}}</span>
      <span class="musicAuthor">作者：{{author[item].name}}</span>
    </div>
    <div class="music">
      <span class="musicName">{{musicName[item].name}}</span>
      <span class="musicAuthor">作者：{{author[item].name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: 0,
      musicName: [
        { name: "1——Legends never die" },
        { name: "2——Legends never die" },
        { name: "3——Legends never die" }
      ],
      author: [
        { name: "王菲" },
        { name: "王菲" },
        { name: "王菲" }
      ],
      musicList: [
        { id: 1, src: 'http://music.163.com/song/media/outer/url?id=506196018.mp3' },
        { id: 2, src: 'http://music.163.com/song/media/outer/url?id=574566207.mp3' },
        { id: 3, src: 'http://music.163.com/song/media/outer/url?id=208902.mp3' },
      ]
    }
  },
  methods: {
    audioEnd() {
      this.item++;
      var _this = this
      if (this.item > 2) {
        _this.item = 0
      }
      var audio = this.$refs.audio;
      audio.load();
      audio.play();
    }
  },
  watch: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.music{
  background-color: #f097bf;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 20px;
}
.musicName{
  font-size: 18px;
  font-weight: bold;
}
</style>
