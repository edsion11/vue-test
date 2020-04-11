<template>
  <div class="box">
    <audio controls @ended="audioEnd()" ref="audio">
      <source :src="musicList[item].src" />
    </audio>
    <br />
    <el-button type="primary" round @click="musicPre">上一首</el-button>
    <el-button type="primary" round @click="musicNext">下一首</el-button>c
    <div
      v-bind:class="{'music':!isPlay[item].a,'classColor':isPlay[item].a}"
      @click="playMusic(x=0)"
    >
      <span class="musicName">{{musicName[0].name}}</span>
      <span v-bind:class="{'musicAuthor':!musicList[0].isAction}">作者：{{musicList[0].author}}</span>
      <p style="margin-top:0;margin-bottom:0">
        <span>{{musicList[0].action}}</span>
        <button v-bind:disabled="musicList[0].isAction">购买</button>
      </p>
      <p style="margin-top:0;color:red">价格:￥{{musicList[0].money}}</p>
    </div>
    <div
      v-bind:class="{'music':!isPlay[item].b,'classColor':isPlay[item].b}"
      @click="playMusic(x=1)"
    >
      <span class="musicName">{{musicName[1].name}}</span>
      <span v-bind:class="{'musicAuthor':!musicList[1].isAction}">作者：{{musicList[1].author}}</span>
      <p style="margin-top:0;margin-bottom:0">
        <span>{{musicList[1].action}}</span>
        <button v-bind:disabled="musicList[1].isAction">购买</button>
      </p>
      <p style="margin-top:0;color:red">价格:￥{{musicList[1].money}}</p>
    </div>
    <div
      v-bind:class="{'music':!isPlay[item].c,'classColor':isPlay[item].c}"
      @click="playMusic(x=2)"
    >
      <span class="musicName">{{musicName[2].name}}</span>
      <span v-bind:class="{'musicAuthor':!musicList[2].isAction}">作者：{{musicList[2].author}}</span>
      <p style="margin-top:0;margin-bottom:0">
        <span>{{musicList[2].action}}</span>
        <button v-bind:disabled="musicList[2].isAction">购买</button>
      </p>
      <p style="margin-top:0;color:red">价格:￥{{musicList[2].money}}</p>
    </div>
    <div
      v-bind:class="{'music':!isPlay[item].d,'classColor':isPlay[item].d}"
      @click="playMusic(x=3)"
    >
      <span class="musicName">{{musicName[3].name}}</span>
      <span v-bind:class="{'musicAuthor':!musicList[3].isAction}">作者：{{musicList[3].author}}</span>
      <p style="margin-top:0;margin-bottom:0">
        <span>{{musicList[3].action}}</span>
        <button v-bind:disabled="musicList[3].isAction">购买</button>
      </p>
      <p style="margin-top:0;color:red">价格:￥{{musicList[3].money}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlay: [{ a: true, b: false, c: false, d: false },
      { a: false, b: true, c: false, d: false },
      { a: false, b: false, c: true, d: false },
      { a: false, b: false, c: false, d: true },
      ],
      item: 0,
      musicName: [
        { name: "1——Legends never die" },
        { name: "2——花粥-盗将行.mp3" },
        { name: "3——蔡健雅-红色高跟鞋.mp3" },
        { name: "4——买辣椒也用券-起风了.mp3" }
      ],
      musicList: [
        { id: 1, src: 'http://music.163.com/song/media/outer/url?id=506196018.mp3', isPlay: true, author: '小马哥', action: '在售', money: 40, isAction: Boolean },
        { id: 2, src: 'http://music.163.com/song/media/outer/url?id=574566207.mp3', isPlay: false, author: '花粥', action: '已出售', money: 20, isAction: Boolean },
        { id: 3, src: 'http://music.163.com/song/media/outer/url?id=208902.mp3', isPlay: false, author: '蔡健雅', action: '在售', money: 50, isAction: Boolean },
        { id: 4, src: 'http://music.163.com/song/media/outer/url?id=1330348068.mp3', isPlay: false, author: '买辣椒也用券', action: '已出售', money: 50, isAction: Boolean }
      ]
    }
  },

  methods: {
    audioEnd() {
      this.item++;
      var _this = this
      if (this.item > 3) {
        _this.item = 0
      }
      var audio = this.$refs.audio;
      audio.load();
      audio.play();
    },
    playMusic(s) {
      this.item = s
      var audio = this.$refs.audio;
      audio.load();
      audio.play();
    },
    musicNext() {
      this.item++;
      var _this = this
      if (this.item > 3) {
        _this.item = 0
      }
      var audio = this.$refs.audio;
      audio.load();
      audio.play();
    },
    musicPre() {
      this.item--;
      var _this = this
      if (this.item < 0) {
        _this.item = 3
      }
      var audio = this.$refs.audio;
      audio.load();
      audio.play();
    }
  },
  watch: {
  },
  created() {
    var _this = this
    for (let i = 0; i < this.musicList.length; i++) {
      _this.musicList[i].isAction = (_this.musicList[i].action == '已出售') ? true : false
    }
    console.log(this.musicList)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.music{
  background-color: #f097bf;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 60px;
}
.musicName{
  font-size: 18px;
  font-weight: bold;
}
.classColor{
  background-color: #d475ee;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 60px;
}
.musicAuthor{
  color: bisque;
}
.el-button{
  margin-top: 5px;
}
</style>
