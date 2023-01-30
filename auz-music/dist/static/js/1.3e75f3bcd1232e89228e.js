webpackJsonp([1],{546:function(t,e,i){i(587);var a=i(8)(i(564),i(599),"data-v-f13a94f2",null);t.exports=a.exports},550:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(54),n=i.n(a),s=i(63),A=i.n(s),o=i(186),l=i.n(o),r=i(187),c=i.n(r),f=i(122),d=i(81),p=i(45),g=i.i(f.a)("transform"),u=i.i(f.a)("backdrop-filter");e.default={mixins:[d.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:n()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},random:function(){this.randomPlay({list:this.songs})}},i.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTransalteY,t),i=1,a=0,n=0,s=Math.abs(t/this.imageHeight);t>0?(i=1+s,a=10):n=Math.min(20,20*s),this.$refs.layer.style[g]="translate3d(0,"+e+"px,0)",this.$refs.filter.style[u]="blur("+n+"px)",t<this.minTransalteY?(a=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[g]="scale("+i+")",this.$refs.bgImage.style.zIndex=a}},components:{Scroll:A.a,Loading:l.a,SongList:c.a}}},551:function(t,e,i){e=t.exports=i(540)(!0),e.push([t.i,".music-list[data-v-1e6af4fe]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-1e6af4fe]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-1e6af4fe]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-1e6af4fe]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-1e6af4fe]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-1e6af4fe]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-1e6af4fe]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-1e6af4fe]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-1e6af4fe]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-1e6af4fe]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-1e6af4fe]{position:relative;height:100%;background:#222}.music-list .list[data-v-1e6af4fe]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-1e6af4fe]{padding:20px 30px}.music-list .list .loading-container[data-v-1e6af4fe]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["E:/vue代码/vue-music-master/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-1e6af4fe] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-1e6af4fe] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-1e6af4fe] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-1e6af4fe] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-1e6af4fe] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-1e6af4fe] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-1e6af4fe] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-1e6af4fe] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-1e6af4fe] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-1e6af4fe] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-1e6af4fe] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-1e6af4fe] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-1e6af4fe] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-1e6af4fe] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},552:function(t,e,i){var a=i(551);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(541)("70990e50",a,!0)},553:function(t,e,i){i(552);var a=i(8)(i(550),i(554),"data-v-1e6af4fe",null);t.exports=a.exports},554:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music-list"},[i("div",{staticClass:"back",on:{click:t.back}},[i("i",{staticClass:"icon-back"})]),t._v(" "),i("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),i("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[i("div",{staticClass:"play-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[i("i",{staticClass:"icon-play"}),t._v(" "),i("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),i("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),i("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),i("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[i("div",{staticClass:"song-list-wrapper"},[i("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[i("loading")],1)])],1)},staticRenderFns:[]}},557:function(t,e,i){"use strict";function a(){var t=A()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return i.i(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function n(t){var e=A()({},l.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return i.i(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,l.c)}e.b=a,e.a=n;var s=i(82),A=i.n(s),o=i(185),l=i(62)},564:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(54),n=i.n(a),s=i(553),A=i.n(s),o=i(557),l=i(62),r=i(123),c=i(45);e.default={computed:n()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},i.i(c.a)(["singer"])),data:function(){return{songs:[]}},created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;if(!this.singer.id)return void this.$router.push("/singer");i.i(o.a)(this.singer.id).then(function(e){e.code===l.a&&(t.songs=t._normalizeSongs(e.data.list))})},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){var a=t.musicData;a.songid&&a.albummid&&e.push(i.i(r.b)(a))}),e}},components:{MusicList:A.a}}},577:function(t,e,i){e=t.exports=i(540)(!0),e.push([t.i,".slide-enter-active[data-v-f13a94f2],.slide-leave-active[data-v-f13a94f2]{transition:all .3s}.slide-enter[data-v-f13a94f2],.slide-leave-to[data-v-f13a94f2]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["E:/vue代码/vue-music-master/src/components/singer-detail/singer-detail.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"singer-detail.vue",sourcesContent:["\n.slide-enter-active[data-v-f13a94f2],\n.slide-leave-active[data-v-f13a94f2] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-f13a94f2],\n.slide-leave-to[data-v-f13a94f2] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},587:function(t,e,i){var a=i(577);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(541)("eac31400",a,!0)},599:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.3e75f3bcd1232e89228e.js.map