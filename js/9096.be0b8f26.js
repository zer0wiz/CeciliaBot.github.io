"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[9096],{6163:function(t,e,i){function a(t,e){var i=null;return function(){clearTimeout(i);var a=arguments,n=this;i=setTimeout((function(){t.apply(n,a)}),e)}}function n(t,e){var i=!1;return function(){i||(t.apply(this,arguments),i=!0,setTimeout((function(){i=!1}),e))}}function r(t=!1){let e=window.location.href.split("?")[0],i=e.split("#"),a=t&&"#"===t.href.charAt(0)?2:1;while(i.length>a)i.pop();return i.join("#")}i.d(e,{Ds:function(){return a},P2:function(){return n},fA:function(){return r}})},2764:function(t,e,i){i.d(e,{Fd:function(){return s},AX:function(){return o},B3:function(){return r}});var a=i(8753);function n(t={},e="",i=null){var a=e.replace(/\]/g,"").replace(/\[/,".").split(".");function n(t,e){return e?t[e]?n(t[e],a.shift()):null:t}return n(t,a.shift())||i}function r(t,e){let i=a.cK+"/skill/";return t.icon?i+=t.icon:i+="sk_"+e+"_"+t.skill,i+=".png",i}function o(t,e=0){const i=Math.max(e-1,0);return n(t,"skills."+i,{})}function s(t){return a.cK+"/buff/"+(t.src||t._id)+".png"}},6415:function(t,e,i){i.d(e,{Z:function(){return f}});var a=i(6252),n=i(3577);const r={style:{"border-bottom":"2px solid #614828"}},o=["onClick"],s={class:"noselect"};function l(t,e,i,l,c,d){return(0,a.wg)(),(0,a.iD)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.tabs,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id,class:(0,n.C_)(["tab",{active:i.tab===t.id,disabled:t.disabled}]),onClick:e=>d.click(t)},[(0,a._)("span",s,(0,n.zw)(t.name||t.title||t),1)],10,o)))),128))])}var c={name:"E7Tabs",emits:["change"],props:{tabs:{type:Array,default:function(){return[]}},tab:{default:""}},methods:{click(t){t.disabled||this.$emit("change",t)}}},d=i(3744);const u=(0,d.Z)(c,[["render",l]]);var f=u},7740:function(t,e,i){i.d(e,{Z:function(){return b}});var a=i(6252),n=i(3577);const r={style:{display:"inline-block",width:"361px",position:"relative"},class:"panel-wrapper noselect"},o={style:{position:"absolute",top:"0",left:"0"},class:"panel full-h full-w"},s=["data-src"],l={style:{position:"absolute",height:"24%",left:"13%",top:"15%"}},c=["data-src"],d={class:"text-black-stroke",style:{color:"white","vertical-align":"middle",height:"100%"}},u={style:{position:"absolute",left:"10%",bottom:"20%",height:"1.4em"}},f=["data-src"],p=["data-src"],h=["src"];function m(t,e,i,m,g,y){const w=(0,a.Q2)("lazyloader");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",o,[(0,a.wy)((0,a._)("img",{"data-src":y.img,class:"hero-img",alt:""},null,8,s),[[w]]),(0,a._)("div",l,[(0,a.wy)((0,a._)("img",{style:{"vertical-align":"middle",width:"1.3em","padding-right":"5px"},"data-src":y.roleIcon,alt:""},null,8,c),[[w]]),(0,a._)("span",d,(0,n.zw)(y.heroData.name),1)]),(0,a._)("div",u,[(0,a.wy)((0,a._)("img",{style:{height:"100%","vertical-align":"middle"},"data-src":y.attributeIcon,alt:""},null,8,f),[[w]]),(0,a.wy)((0,a._)("img",{class:(0,n.C_)("zodiac-panel-icon "+i.data.zodiac),style:{"margin-right":"8%"},"data-src":y.zodiacIcon,alt:""},null,10,p),[[w]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.heroData.rarity,(t=>((0,a.wg)(),(0,a.iD)("img",{style:{"vertical-align":"middle","margin-left":"-5%",height:"80%"},key:t,alt:"",src:y.starIcon},null,8,h)))),128))])])])}var g=i(8753),y={props:{data:{type:Object,default:()=>({})}},computed:{heroData(){return this.data||{}},img(){return g.cK+"/face/"+this.heroData.id+"_l.png"},starIcon(){return g.cK+"/img/cm_icon_star.png"},roleIcon(){return this.$store.getters.getRoleIcon(this.heroData.role)},attributeIcon(){return g.cK+"/img/cm_icon_prom"+this.data.attribute+".png"},zodiacIcon(){return g.cK+"/img/cm_icon_zodiac_"+this.data.zodiac+".png"}}},w=i(3744);const v=(0,w.Z)(y,[["render",m]]);var b=v},416:function(t,e,i){i.d(e,{Z:function(){return c}});var a=i(6252);function n(t,e,i,n,r,o){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.WI)(t.$slots,"default")])}var r=i(6163),o={mounted(){this.screenResize(),window.addEventListener("resize",this.debounceScreenResize)},beforeUnmount(){window.removeEventListener("resize",this.debounceScreenResize)},methods:{screenResize(){const t=this.$el||document.body,e=window.innerWidth,i=t.getBoundingClientRect().width;let a=2;2e3<e?a=6:1400<e?a=5:992<e&&(a=4);var n=i/a,r=Math.floor(.065*n);this.$el.style.fontSize=r+"px"},debounceScreenResize:(0,r.Ds)((function(){this.screenResize()}),400)}},s=i(3744);const l=(0,s.Z)(o,[["render",n]]);var c=l},5123:function(t,e,i){i.d(e,{Z:function(){return f}});var a=i(6252),n=i(3577);const r=(0,a._)("div",{class:"card-foil"},null,-1),o=(0,a._)("div",{class:"card-glare"},null,-1);function s(t,e,i,s,l,c){return(0,a.wg)(),(0,a.iD)("div",{class:"tilt-3d relative",onMousemove:e[0]||(e[0]=(...t)=>c.tilt&&c.tilt(...t)),onMouseleave:e[1]||(e[1]=(...t)=>c.restore&&c.restore(...t))},[(0,a._)("div",{class:"card-3d relative",style:(0,n.j5)({borderRadius:i.borderRadius})},[(0,a.WI)(t.$slots,"default"),r,o],4)],32)}var l=i(8753);var c={props:{borderRadius:{type:String,default:"0px"},forceReduction:{type:Number,default:7}},data(){return{cdn:l.cK}},mounted(){this.restore()},methods:{tilt(t){const e=this.$el,i=this.$el.firstChild,a=(t.offsetY-e.offsetHeight/2)/this.forceReduction,n=-(t.offsetX-e.offsetWidth/2)/this.forceReduction,r=t.offsetX/e.offsetWidth,o=t.offsetY/e.offsetHeight,s=Math.abs(r-.5),l=Math.abs(o-.5),c=Math.sqrt(s*s+l*l),d=100*r,u=100*o;i.style.transform="rotateX("+a+"deg) rotateY("+n+"deg)",i.style.setProperty("--pointer-x",d+"%"),i.style.setProperty("--pointer-y",u+"%"),i.style.setProperty("--background-x",d/8+"%"),i.style.setProperty("--background-y",u+"%"),i.style.setProperty("--card-opacity",.8*c),i.style.setProperty("--pointer-from-center",1.5*c)},restore(t){const e=this.$el.firstChild;e.style.transform="rotateX(0) rotateY(0)",e.style.setProperty("--pointer-x","50%"),e.style.setProperty("--pointer-y","50%"),e.style.setProperty("--background-x",0),e.style.setProperty("--background-y",0),e.style.setProperty("--card-opacity",0),e.style.setProperty("--pointer-from-center",0)}}},d=i(3744);const u=(0,d.Z)(c,[["render",s]]);var f=u},3355:function(t,e,i){i.d(e,{Z:function(){return k}});var a=i(6252),n=i(3577);const r={class:"artifact-su-wrapper relative pointer text-black-stroke noselect overflow-hidden hide-scrollbar"},o=["data-src"],s=["data-src"],l=["data-src"],c={style:{position:"absolute",top:"2%",right:"2%",width:"7.5%","font-size":"1px","pointer-events":"none"}},d=["data-src"],u=["data-src"],f={class:"text-center artifact-su-name"},p={key:2,style:{position:"absolute",left:"7%",bottom:"0","font-size":"0.07em","pointer-events":"none"}},h=["data-src"],m={key:3,style:{position:"absolute",right:"7%",bottom:"0","font-size":"0.07em","pointer-events":"none"}},g=["data-src"];function y(t,e,i,y,w,v){const b=(0,a.Q2)("lazyloader");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.wy)((0,a._)("img",{"data-src":v.artifactImgSu,class:"artifact-image-su",alt:""},null,8,o),[[b]]),i.showDecorations?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.wy)((0,a._)("img",{"data-src":w.cdn+"/item_arti/arti_frame_deco_1.png",style:{position:"absolute",left:"0",top:"0",width:"45%","pointer-events":"none"},alt:""},null,8,s),[[b]]),(0,a.wy)((0,a._)("img",{"data-src":v.artifactImgIcon,style:{position:"absolute",left:"0",top:"0",height:"16%","pointer-events":"none"},alt:""},null,8,l),[[b]])],64)):(0,a.kq)("",!0),(0,a._)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.artifact.rarity||1,(t=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("img",{key:"arti-rarity-"+t,alt:"","data-src":w.cdn+"/img/cm_icon_star.png",style:{width:"100%"}},null,8,d)),[[b]]))),128))]),i.showName?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.wy)((0,a._)("img",{"data-src":w.cdn+"/item_arti/arti_frame_deco_2.png",style:{position:"absolute",left:"0",bottom:"0",width:"100%","pointer-events":"none"},alt:""},null,8,u),[[b]]),(0,a._)("div",f,(0,n.zw)(i.artifact.name),1)],64)):(0,a.kq)("",!0),i.atk?((0,a.wg)(),(0,a.iD)("div",p,[(0,a.wy)((0,a._)("img",{class:"inline-icon-image","data-src":w.cdn+"/img/cm_icon_stat_att.png",alt:"",style:{"vertical-align":"middle","padding-bottom":"0.15em","font-size":"1.2em"}},null,8,h),[[b]]),(0,a.Uk)(" "+(0,n.zw)(i.atk),1)])):(0,a.kq)("",!0),i.hp?((0,a.wg)(),(0,a.iD)("div",m,[(0,a.wy)((0,a._)("img",{class:"inline-icon-image","data-src":w.cdn+"/img/cm_icon_stat_max_hp.png",alt:"",style:{"vertical-align":"middle","padding-bottom":"0.15em","font-size":"1.2em"}},null,8,g),[[b]]),(0,a.Uk)(" "+(0,n.zw)(i.hp),1)])):(0,a.kq)("",!0)])}var w=i(8753),v={props:{artifact:{type:Object,default:()=>({})},atk:{type:Number,default:0},hp:{type:Number,default:0},showName:{type:Boolean,default:!0},showDecorations:{type:Boolean,default:!1}},data(){return{cdn:w.cK}},computed:{artifactImgIcon(){return this.artifact?this.artifact.id?w.cK+"/item_arti/icon_"+this.artifact.id+".png":w.cK+"/tmp/item_arti/icon_"+(this.artifact._id||this.artifact.name)+".png":""},artifactImgSu(){return this.artifact?this.artifact.id?w.cK+"/item_arti/"+this.artifact.id+"_fu.png":w.cK+"/tmp/item_arti/"+(this.artifact._id||this.artifact.name)+"_fu.png":""}}},b=i(3744);const _=(0,b.Z)(v,[["render",y]]);var k=_},9367:function(t,e,i){i.d(e,{Z:function(){return c}});var a=i(6252);const n={class:"overflow-hidden"};function r(t,e,i,r,o,s){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.WI)(t.$slots,"default")])}var o={props:{targetWidth:{type:Number,default:300}},mounted(){this.calcWidth(),window.addEventListener("resize",this.calcWidth)},beforeUnmount(){window.removeEventListener("resize",this.calcWidth)},watch:{targetWidth(){this.calcWidth()}},methods:{calcWidth(){const t=this.$el;let e=t.getBoundingClientRect();e.width||(e=t.parentNode.getBoundingClientRect());var i=e.width-50,a=this.targetWidth,n=i/a;a=n<.7?i/Math.floor(n):i/Math.ceil(n),t.style.fontSize=Math.floor(a)+"px"}}},s=i(3744);const l=(0,s.Z)(o,[["render",r]]);var c=l},591:function(t,e,i){i.d(e,{Z:function(){return f}});var a=i(6252),n=i(3577);const r={class:"page-path-title"},o=(0,a._)("span",null," / ",-1);function s(t,e,i,s,l,c){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.path,(t=>((0,a.wg)(),(0,a.iD)("span",{key:t[1]},[(0,a.Wm)(d,{to:t[1],class:"router-restore"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t[0]),1)])),_:2},1032,["to"]),o])))),128)),(0,a.WI)(t.$slots,"default")])}const l={database:"Database",hero:"Heroes",artifacts:"Artifacts","hero-stats-table":"Hero Stats Table","voice-actors":"Voice Actors",buffs:"Buffs",common:"Common",debuffs:"Debuffs","official-info":"Official Links"};var c={props:{location:{type:String,default:""}},data(){return{path:[]}},created(){var t="",e=window.location.href.toLowerCase().split("#")[1].replace(/\?.*/,"").split("/").filter(((t,e)=>""!==t||0===e));e.splice(-1,1),this.path=e.map(((i,a)=>{var n=l[i];return n||(0===a?n="Home":a===e.length-1&&(n=this.current)),t+=i+"/",[n,t]}))}},d=i(3744);const u=(0,d.Z)(c,[["render",s]]);var f=u},222:function(t,e,i){i.d(e,{Z:function(){return c}});var a=i(6252);const n={class:"page-title-box flex flex-col"};function r(t,e){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.WI)(t.$slots,"default")])}var o=i(3744);const s={},l=(0,o.Z)(s,[["render",r]]);var c=l},9096:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var a=i(6252),n=i(3577),r=i(9963);const o=["src"],s={style:{"font-size":"14px",margin:"0 auto",width:"90%","max-width":"600px",background:"#2196f3a3",color:"white",padding:"10px","border-radius":"8px"}},l={class:"text-center",style:{"font-size":"14px",margin:"0 auto",width:"90%","max-width":"600px",padding:"10px","border-radius":"8px"}};function c(t,e,i,c,d,u){const f=(0,a.up)("PagePath"),p=(0,a.up)("H2"),h=(0,a.up)("PageTitle"),m=(0,a.up)("Tabs"),g=(0,a.up)("HeroPanel"),y=(0,a.up)("router-link"),w=(0,a.up)("HeroPanelResponsive"),v=(0,a.up)("FullArtifact"),b=(0,a.up)("MouseParallax"),_=(0,a.up)("ListArtifactImages");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(f)]),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a._)("img",{src:u.icon,class:"inline-icon-image",style:{width:"1em",height:"1em"}},null,8,o),(0,a.Uk)(" "+(0,n.zw)(d.info.name),1)])),_:1}),(0,a._)("div",s,[(0,a._)("span",null,(0,n.zw)(d.info.description),1)]),(0,a._)("div",l,[(0,a._)("span",null,(0,n.zw)(d.info.additional_description),1)])])),_:1}),(0,a.Wm)(m,{tab:d.tab,tabs:[{id:"hero",name:"Heroes"},{id:"artifact",name:"Artifacts"}],onChange:e[0]||(e[0]=t=>d.tab=t.id)},null,8,["tab"]),(0,a.wy)((0,a.Wm)(w,{class:"flex flex-wrap"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.info.hero,(t=>((0,a.wg)(),(0,a.j4)(y,{class:"route-restore pointer col-2 col-lg-4 col-xl-5 col-xxl-6",key:t._id,to:"/hero/"+t._id,style:{display:"inline-block"}},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{data:t,style:{width:"100%"}},null,8,["data"])])),_:2},1032,["to"])))),128))])),_:1},512),[[r.F8,"hero"===d.tab]]),(0,a.wy)((0,a.Wm)(_,{class:"flex flex-wrap justify-center"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.info.artifact,(t=>((0,a.wg)(),(0,a.j4)(y,{key:t._id,to:"/artifacts/"+t._id,class:"route-restore pointer",style:{"vertical-align":"top"}},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{class:"pad-5","border-radius":"0.08em"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{artifact:t},null,8,["artifact"])])),_:2},1024)])),_:2},1032,["to"])))),128))])),_:1},512),[[r.F8,"artifact"===d.tab]])])}var d=i(591),u=i(6415),f=i(7740),p=i(416),h=i(222),m=i(9367),g=i(5123),y=i(3355),w=i(2764),v={components:{HeroPanel:f.Z,HeroPanelResponsive:p.Z,PageTitle:h.Z,PagePath:d.Z,Tabs:u.Z,ListArtifactImages:m.Z,MouseParallax:g.Z,FullArtifact:y.Z},data(){return{tab:"hero",info:{name:"Loading, please wait..."}}},created(){this.$gameData.buff.get(this.$route.params.id).then((t=>{this.info=t}))},computed:{icon(){return(0,w.Fd)(this.info)}}},b=i(3744);const _=(0,b.Z)(v,[["render",c]]);var k=_}}]);