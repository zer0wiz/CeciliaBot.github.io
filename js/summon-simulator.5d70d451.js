"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[5582],{1718:function(t,e,i){i.d(e,{Z:function(){return d}});var n=i(6252),r=i(3577);const a={class:"e7-button items-center overflow-hidden pointer relative"},s={key:0,class:"currency-icon noselect",style:{width:"0.5em","pointer-events":"none"}},o=["src"],l={key:1,class:"currency noselect relative pointer",style:{"pointer-events":"none"}},c={class:"e7button-text noselect flex-fill"},h=(0,n._)("span",{class:"light"},null,-1);function m(t,e,i,m,u,g){return(0,n.wg)(),(0,n.iD)("button",a,[i.icon||g.slots.icon?((0,n.wg)(),(0,n.iD)("div",s,[(0,n.WI)(t.$slots,"icon",{},(()=>[(0,n._)("img",{src:i.icon,alt:"icon"},null,8,o)]))])):(0,n.kq)("",!0),i.currency?((0,n.wg)(),(0,n.iD)("div",l,(0,r.zw)(i.currency||"0"),1)):(0,n.kq)("",!0),(0,n._)("div",c,[(0,n.WI)(t.$slots,"default")]),h])}var u={name:"E7Button",props:{currency:{default:""},icon:{type:String,default:""}},computed:{slots(){return(0,n.Rr)()}}},g=i(3744);const p=(0,g.Z)(u,[["render",m]]);var d=p},5506:function(t,e,i){i.r(e),i.d(e,{default:function(){return Wt}});var n=i(6252),r=i(3577);const a={key:0,class:"gacha-screen flex full-h"},s={class:"flex-fill border-5 overflow-auto hide-scrollbar relative",style:{color:"white"}},o={class:"gacha-banner-select glass-container-2 pad-5 overflow-auto hide-scrollbar"},l=["onClick"],c=["src"],h=["src"];function m(t,e,i,m,u,g){const p=(0,n.up)("BannerMainPage"),d=(0,n.up)("SummonResultsPage"),y=(0,n.Q2)("ripple-effect");return u.bootCompleted?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",s,[u.banner?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[u.currentPull?u.currentPull?((0,n.wg)(),(0,n.j4)(d,{key:1,list:u.currentPull.list,banner:u.banner,"highest-value":u.currentPull.best,onSummon:g.pull,onBack:e[0]||(e[0]=t=>u.currentPull=null)},null,8,["list","banner","highest-value","onSummon"])):(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(p,{key:0,banner:u.banner,"main-hero":u.banner.heroes[0],onSummon:g.pull,onChangePity:g.changePity,onResetHistory:g.resetBannerHistory},null,8,["banner","main-hero","onSummon","onChangePity","onResetHistory"]))],64)):(0,n.kq)("",!0)]),(0,n._)("div",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.ongoingBanners,((t,e)=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("button",{key:"banner-sel-"+e,onClick:e=>g.setActiveBanner(t),class:"gacha-banner",style:(0,r.j5)({boxShadow:t===this.banner?"0 0 2px 2px #f39370":""})},[(0,n._)("img",{src:t.icon,style:{width:"100%","vertical-align":"middle"}},null,8,c),t.deco?((0,n.wg)(),(0,n.iD)("img",{key:0,src:t.deco,style:{width:"60%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,8,h)):(0,n.kq)("",!0)],12,l)),[[y]]))),128))])])):(0,n.kq)("",!0)}i(7658);const u={key:0,style:{position:"absolute",top:"15%",left:"50%","font-size":"3rem",color:"white",transform:"translateX(-50%)"}},g={class:"relative"},p={style:{position:"absolute",top:"22%",left:"50%","font-size":"0.5em",color:"white",transform:"translateX(-50%)"}},d=["src"],y=["src"],_=["src"],b={style:{position:"absolute",top:"33%",left:"50%","font-size":"1.3em",color:"white",transform:"translateX(-50%)","white-space":"nowrap"}},f={style:{position:"absolute",left:"50%",bottom:"20%",transform:"translateX(-50%)","white-space":"nowrap"}},w=["src"],v={key:0,style:{position:"absolute",bottom:"0",left:"50%",transform:"translateX(-50%)","font-size":"0.7em","white-space":"nowrap"}},k=["src"],x={style:{position:"absolute",left:"50%",bottom:"-1.1em",transform:"translateX(-50%)","white-space":"nowrap"}},D=["src"],H={key:1},z={style:{position:"absolute",width:"100%",top:"60%",transform:"translateY(-50%)","text-align":"center"}},B={style:{height:"10rem","max-height":"10vh",display:"inline-block",position:"relative"}},P=["src","onClick"],I={key:2},S=["src"],A={key:3,class:"noselect noevents",style:{position:"absolute",left:"50%",top:"30%",height:"30%",transform:"translate(-50%, -50%)"}},C=["src"],M=["innerHTML"],$={style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)"}},R={key:0,class:"text-center"},E=(0,n._)("br",null,null,-1),O=(0,n._)("img",{src:""},null,-1),q={style:{"white-space":"nowrap"}},j=(0,n._)("br",null,null,-1),T=(0,n._)("br",null,null,-1),N={style:{position:"absolute",bottom:"10px",right:"10px"}},Y=["src"],U={class:"e7-dark-button"},G=["src"],F={key:5,class:"e7-dark-box",style:{position:"absolute",right:"10px",bottom:"60px"}},K={class:"flex-fill"};function L(t,e,i,a,s,o){const l=(0,n.up)("StarsBG"),c=(0,n.up)("GrandSummmonEffect"),h=(0,n.up)("E7Button"),m=(0,n.up)("GachaInventory"),L=(0,n.Q2)("tooltip");return(0,n.wg)(),(0,n.iD)("div",{style:(0,r.j5)(["height: 100%; width: 100%;",{background:"url("+i.banner.img+")"},"background-size: cover; background-repeat: no-repeat;"])},[i.mainHero&&["rate_up","limited"].includes(i.banner.type)?((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",g,[(0,n._)("span",p,[(0,n._)("img",{src:o.cdn+"img/cm_icon_role_"+i.mainHero.role+".png",class:"inline-icon-image",style:{"font-size":"1.5em",margin:"-0.4rem -0.5rem 0 0.5rem"}},null,8,d),(0,n.Uk)(" "+(0,r.zw)(t.$t("strings."+i.mainHero.role))+" ",1),(0,n._)("img",{src:o.cdn+"img/cm_icon_pro"+i.mainHero.attribute+".png",class:"inline-icon-image",style:{"font-size":"1.5em",margin:"-0.4rem -0.5rem 0 0.5rem"}},null,8,y),(0,n.Uk)(" "+(0,r.zw)(t.$t("strings."+i.mainHero.attribute)),1)]),(0,n._)("img",{src:o.cdn+"img/gacha_title_bg.png",class:"noselect",style:{height:"7.5em","pointer-events":"none"}},null,8,_),(0,n._)("span",b,(0,r.zw)(t.$store.getters.getHeroName(i.mainHero)),1),(0,n._)("span",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.mainHero.rarity||1,(t=>((0,n.wg)(),(0,n.iD)("img",{src:o.cdn+"img/cm_icon_star_big.png",key:"rarity"+t,style:{"margin-right":"-0.3em",height:"1em"}},null,8,w)))),128))]),i.banner.artifacts.length?((0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("img",{src:o.cdn+"item_arti/icon_"+i.banner.artifacts[0].id+".png",class:"inline-icon-image",style:{"font-size":"1.5em"}},null,8,k),(0,n._)("span",null,(0,r.zw)(t.$store.getters.getArtifactName(i.banner.artifacts[0])),1),(0,n._)("span",x,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.mainHero.rarity||1,(t=>((0,n.wg)(),(0,n.iD)("img",{src:o.cdn+"img/cm_icon_star_big.png",key:"rarity"+t,style:{"margin-right":"-0.3em",height:"1em"}},null,8,D)))),128))])])):(0,n.kq)("",!0)])])):"mystic"==i.banner.type?((0,n.wg)(),(0,n.iD)("div",H,[(0,n.Wm)(l,{speed:3,"initial-speed":5}),(0,n._)("div",z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.mysticCharacter,(e=>((0,n.wg)(),(0,n.iD)("div",{key:"mystic-pity-hero-"+e.id,style:{margin:"0 20px","z-index":"0",display:"inline-block"}},[(0,n._)("div",B,[i.banner.activePity.type=="ml_"+e.rarity?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(4,(t=>(0,n._)("div",{class:"circle",key:"pity-effect-circle"+t,style:(0,r.j5)({animationDelay:-(t-1)+"s",height:"100%",width:"100%"})},null,4))),64)):(0,n.kq)("",!0),(0,n._)("img",{src:o.cdn+"face/"+e.id+"_s.png",class:"pointer noselect",style:{height:"100%"},onClick:i=>t.$emit("changePity",e)},null,8,P)]),(0,n._)("div",null,(0,r.zw)(t.$store.getters.getHeroName(e)),1),(0,n._)("div",null,(0,r.zw)(t.$t("strings.pity"))+": "+(0,r.zw)(i.banner.pity[e.rarity+""].current),1)])))),128))])])):"moonlight"===i.banner.type?((0,n.wg)(),(0,n.iD)("div",I,[(0,n.Wm)(c),(0,n._)("img",{src:o.cdn+"banner/en/gacha_info_moonlight.png",class:"noselect noevents",style:{position:"absolute",transform:"translateX(-50%)",left:"50%",top:"50%","max-height":"15%"}},null,8,S)])):(0,n.kq)("",!0),i.banner.deco&&"limited"!==i.banner.type?((0,n.wg)(),(0,n.iD)("div",A,[(0,n._)("img",{src:i.banner.deco,style:{height:"100%"}},null,8,C)])):(0,n.kq)("",!0),i.banner.activePity?((0,n.wg)(),(0,n.iD)("div",{key:4,class:"e7-chat-box",style:{position:"absolute",left:"15px",top:"5%"},innerHTML:t.$t("strings.summons_until_guaranteed",[`<span style='color: var(--font-color-confirm)'>${i.banner.activePity.current}</span>`])},null,8,M)):(0,n.kq)("",!0),(0,n._)("div",$,[i.banner.eventPeriod?((0,n.wg)(),(0,n.iD)("div",R,[(0,n.Uk)(" Event Period "),E,O,(0,n.Uk)(" "+(0,r.zw)(i.banner.eventPeriod),1)])):(0,n.kq)("",!0),(0,n._)("div",q,[(0,n.Wm)(h,{currency:i.banner.cost,icon:i.banner.currencyIcon,onClick:e[0]||(e[0]=e=>t.$emit("summon",1))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(t.$t("strings.summon")),1),j,(0,n.Uk)("x1 ")])),_:1},8,["currency","icon"]),(0,n.Wm)(h,{currency:10*i.banner.cost,icon:i.banner.currencyIcon,onClick:e[1]||(e[1]=e=>t.$emit("summon",10))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(t.$t("strings.summon")),1),T,(0,n.Uk)("x10 ")])),_:1},8,["currency","icon"])])]),(0,n._)("div",N,[(0,n.wy)(((0,n.wg)(),(0,n.iD)("button",{class:"e7-dark-button",onClick:e[2]||(e[2]=t=>s.showGachaResults=!0)},[(0,n._)("img",{src:o.cdn+"img/icon_quick_tmp_inven.png",style:{height:"100%"}},null,8,Y)])),[[L,"Inventory"]]),(0,n.wy)(((0,n.wg)(),(0,n.iD)("button",U,[(0,n._)("img",{src:o.cdn+"img/icon_menu_recallpercent.png",style:{height:"100%"},onClick:e[3]||(e[3]=t=>s.showRates=!s.showRates)},null,8,G)])),[[L,"Rates"]])]),s.showRates?((0,n.wg)(),(0,n.iD)("div",F,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.rates,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:"rates-group-"+e},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t,((t,i)=>((0,n.wg)(),(0,n.iD)("div",{key:"rate-"+e+"-"+i,style:{width:"300px"},class:"flex"},[(0,n._)("span",K,(0,r.zw)(t[1])+"★ "+(0,r.zw)(t[0]),1),(0,n._)("span",null,(0,r.zw)(t[2])+"%",1)])))),128))])))),128))])):(0,n.kq)("",!0),s.showGachaResults?((0,n.wg)(),(0,n.j4)(m,{key:6,history:i.banner.history,onClose:e[4]||(e[4]=t=>s.showGachaResults=!1),onResetHistory:e[5]||(e[5]=e=>t.$emit("resetHistory"))},null,8,["history"])):(0,n.kq)("",!0)],4)}var Z=i(1718);const W={class:"e7-dark-box flex flex-col",style:{position:"absolute",left:"50%",top:"50%",height:"500px",width:"800px","max-width":"90%","max-height":"90%",transform:"translate(-50%, -50%)"}},X={style:{"border-bottom":"solid 2px #776048","padding-bottom":"10px"}},J={style:{float:"right"}},Q={style:{"padding-top":"10px"},class:"overflow-auto overflow-auto hide-scrollbar"},V={key:0},tt=(0,n._)("br",null,null,-1);function et(t,e,i,a,s,o){const l=(0,n.Q2)("ripple-effect");return(0,n.wg)(),(0,n.iD)("div",{style:{position:"absolute",left:"0",top:"0",height:"100%",width:"100%"},onClick:e[4]||(e[4]=e=>e.target===e.currentTarget?t.$emit("close"):null)},[(0,n._)("div",W,[(0,n._)("div",X,[(0,n.wy)(((0,n.wg)(),(0,n.iD)("button",{class:"material-button basic warn",onClick:e[0]||(e[0]=e=>t.$emit("resetHistory"))},[(0,n.Uk)("Reset History")])),[[l]]),(0,n._)("div",J,[(0,n._)("button",{class:(0,r.C_)(["material-button","stats"===s.viewingBox?"flat":"basic"]),onClick:e[1]||(e[1]=t=>s.viewingBox="stats")},"Stats",2),(0,n._)("button",{class:(0,r.C_)(["material-button","hero"===s.viewingBox?"flat":"basic"]),onClick:e[2]||(e[2]=t=>s.viewingBox="hero")},"Hero Box",2),(0,n._)("button",{class:(0,r.C_)(["material-button","artifact"===s.viewingBox?"flat":"basic"]),onClick:e[3]||(e[3]=t=>s.viewingBox="artifact")},"Artifact Box",2)])]),(0,n._)("div",Q,["stats"===s.viewingBox?((0,n.wg)(),(0,n.iD)("div",V,[(0,n._)("div",null," Summons: "+(0,r.zw)(i.history.pull),1),(0,n._)("div",null," Pity: "+(0,r.zw)(i.history.pity)+" times ",1),(0,n._)("div",null," Got rate up item before pity: "+(0,r.zw)(i.history.beforePity)+" times ",1),tt,((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)([["hero_5_count","5★ Hero"],["hero_4_count","4★ Hero"],["hero_3_count","3★ Hero"],["artifact_5_count","5★ Artifact"],["artifact_4_count","4★ Artifact"],["artifact_3_count","3★ Artifact"]],(t=>(0,n._)("div",{key:t[0]},(0,r.zw)(t[1])+" x "+(0,r.zw)(i.history[t[0]]),1))),64))])):"hero"===s.viewingBox?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(o.sortedHeroBox,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.item._id},(0,r.zw)(e.item.rarity)+"★ "+(0,r.zw)(t.$store.getters.getHeroName(e.item))+" x"+(0,r.zw)(e.count),1)))),128)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:2},(0,n.Ko)(o.sortedArtifactBox,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.item._id},(0,r.zw)(e.item.rarity)+"★ "+(0,r.zw)(t.$store.getters.getArtifactName(e.item))+" x"+(0,r.zw)(e.count),1)))),128))])])])}var it={emits:["resetHistory"],props:{history:{type:Object,default:()=>({})}},data(){return{viewingBox:"stats"}},computed:{sortedHeroBox(){return Object.values(this.history.hero).sort(((t,e)=>t.item.rarity>e.item.rarity?-1:t.item.rarity<e.item.rarity?1:t.count>e.count?-1:0))},sortedArtifactBox(){return Object.values(this.history.artifact).sort(((t,e)=>t.item.rarity>e.item.rarity?-1:t.item.rarity<e.item.rarity?1:t.count>e.count?-1:0))}}},nt=i(3744);const rt=(0,nt.Z)(it,[["render",et]]);var at=rt;const st={class:"noevents",style:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%"}},ot=["id"];function lt(t,e,i,r,a,s){return(0,n.wg)(),(0,n.iD)("div",st,[(0,n._)("canvas",{id:a.canvasId,style:{position:"absolute",top:"0"}},null,8,ot)])}var ct=i(8753);function ht(t){return new Promise(((e,i)=>{var n=new Image(t);n.setAttribute("SameSite","Lax"),n.onload=function(){e(n)},n.onerror=function(){i()},n.src=t}))}var mt={props:{speed:{type:Number,default:4},number:{type:Number,default:100},initialSpeed:{type:Number,default:5},extinction:{type:Number,default:4}},data(){return{canvasId:"stars-bg-canvas-"+Date.now(),img:null,updateStars:null,starsElements:null}},mounted:async function(){ht(ct.cK+"img/blessing_sparkle.png").then((t=>{this.img=t,this.mounter()}))},methods:{mounter(){const t=document.getElementById(this.canvasId),e=t.getContext("2d"),i=this;let n,r,a={speed:this.speed,number:this.number,extinction:this.extinction},s=this.initialSpeed;function o(){s<=1?s=1:(s-=.05,window.requestAnimationFrame(o))}function l(){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.z=Math.random()*t.width,this.rad=t.width/this.z,this.randomize=function(){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.z=1.3*t.width},this.move=function(){this.rad=t.width/this.z,this.z-=a.speed*s,this.z<=0&&this.randomize()},this.show=function(){let t,i,r;t=(this.x-n.c[0])*this.rad,t+=n.c[0],i=(this.y-n.c[1])*this.rad,i+=n.c[1],r=2*a.extinction/(2*this.rad)-1,e.beginPath(),e.fillStyle="rgba(255, 255, 255, "+r+")",e.arc(t,i,this.rad,0,2*Math.PI),e.fill()}}function c(){r=[];var e=i.$el.getBoundingClientRect();n={w:e.width,h:e.height,c:[.5*e.width,.5*e.height]},t.width=n.w,t.height=n.h;for(let t=0;t<a.number;t++)r[t]=new l}function h(){e.clearRect(0,0,t.width,t.height),r.forEach((function(t){t.show(),t.move()})),window.requestAnimationFrame(h)}window.setTimeout((()=>{window.requestAnimationFrame(o)}),2e3),c(),h(),window.addEventListener("resize",c),this.updateStars=h,this.starsElements=r}},beforeUnmount(){window.cancelAnimationFrame(this.updateStars),window.removeEventListener("resize",this.updateStars),this.starsElements=null,this.img=null}};const ut=(0,nt.Z)(mt,[["render",lt]]);var gt=ut;const pt=["id"];function dt(t,e,i,a,s,o){return(0,n.wg)(),(0,n.iD)("div",{class:"noevents",style:(0,r.j5)(["position: absolute; top: 0; left: 0; height: 100%; width: 100%; margin: 0;",o.styles])},[(0,n._)("canvas",{id:s.canvasId,style:{position:"absolute",top:"0"}},null,8,pt)],4)}var yt={props:{speed:{type:Number,default:4},number:{type:Number,default:100},position:{type:String,default:"bottom"}},data(){return{canvasId:"pity-bg-canvas-"+Date.now()+"-"+Math.round(100*Math.random()),updateStars:null,starsElements:null}},computed:{styles(){var t="#ab006f",e={background:"linear-gradient("+([["90deg",t,"transparent","transparent"],["180deg",t,"transparent","transparent"],["270deg",t,"transparent","transparent"],["360deg",t,"transparent","transparent"]][["left","top","right","bottom"].indexOf(this.position)]||[]).join(", ")+")"};return e}},mounted:async function(){this.mounter()},methods:{mounter(){const t=document.getElementById(this.canvasId),e=t.getContext("2d"),i=this;let n,r,a={speed:this.speed,number:this.number,extinction:this.extinction};function s(){this.randomize=function(){"left"===this.position?(this.x=-Math.random()*n.c[0]-300,this.y=Math.random()*n.h):"right"===this.position?(this.x=Math.random()*n.c[0]+n.w+300,this.y=Math.random()*n.h):"top"===this.position?(this.y=-Math.random()*n.c[1]-300,this.x=Math.random()*n.w):(this.y=Math.random()*n.c[1]+n.h+300,this.x=Math.random()*n.w),this.z=1.3*t.width,this.selfSpeed=Math.max(.7,10*Math.random()),this.rad=t.width/this.z},this.move=function(){this.show()},this.show=function(){let t,i=.3*a.speed*this.selfSpeed;["left","right"].includes(this.position)?("left"===this.position?this.x=this.x+i:this.x=this.x-i,t=this.x/n.c[0]):"top"===this.position?this.y-=i:(this.y-=i,this.y<n.c[1]&&this.randomize(),t=this.y/n.c[1]),e.beginPath(),e.fillStyle="rgba(255, 255, 255, "+t+")",e.arc(this.x,this.y-300,this.rad,0,2*Math.PI),e.fill()}}function o(){r=[];var e=i.$el.getBoundingClientRect();n={w:e.width,h:e.height,c:[.5*e.width,.5*e.height],extinctionPoint:["left","right"].includes(i.position)?.5*e.width:.5*e.height},t.width=n.w,t.height=n.h-1;for(let t=0;t<a.number;t++)r[t]=new s,r[t].randomize()}function l(){e.clearRect(0,0,t.width,t.height),r.forEach((function(t){t.move()})),window.requestAnimationFrame(l)}o(),l(),window.addEventListener("resize",o),this.updateStars=l,this.starsElements=r,window.stars=this.starsElements}},beforeUnmount(){window.cancelAnimationFrame(this.updateStars),window.removeEventListener("resize",this.updateStars),this.starsElements=null,this.img=null}};const _t=(0,nt.Z)(yt,[["render",dt]]);var bt=_t,ft={emits:["summon","changePity","resetHistory"],inject:["cdn"],props:["banner","mainHero"],components:{E7Button:Z.Z,GachaInventory:at,StarsBG:gt,GrandSummmonEffect:bt},data(){return{showRates:!1,showGachaResults:!1}},watch:{banner(){this.showRates=!1,this.showGachaResults=!1}},computed:{mysticCharacter(){return this.banner.rates.filter((t=>"ml_5"===t.type||"ml_4"===t.type)).map((t=>t.pool[0]))},rates(){var t=[[],[]];for(var e in this.banner.rates){var i=this.banner.rates[e],n=Math.round(1e5*i.rate)/1e3,r=i.type.charAt(i.type.length-1);if(-1!=i.type.indexOf("artifact"))t[1].push([1===i.pool.length?i.pool[0].name:"Artifact",r,n]);else{var a=-1===i.type.indexOf("rgb")?"Moonlight Hero":"Hero";t[0].push([1===i.pool.length?i.pool[0].name:a,r,n])}}return t}}};const wt=(0,nt.Z)(ft,[["render",L]]);var vt=wt;const kt=["src"],xt=["src"],Dt=["src"],Ht=["src"],zt=["src"],Bt=["src"],Pt=["src"],It=["src"],St={style:{height:"1em"}},At=["src"],Ct=["src"],Mt={style:{height:"1em","margin-top":"0.2em"}},$t=["src"],Rt={style:{height:"1em"}},Et={key:0},Ot={style:{position:"absolute",bottom:"10px",right:"10px"}},qt=["innerHTML"],jt=(0,n._)("br",null,null,-1),Tt=(0,n._)("br",null,null,-1);function Nt(t,e,i,a,s,o){const l=(0,n.up)("E7Button");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("img",{src:o.rarityBorders[0],class:"noselect noevents",style:{"z-index":"-1",position:"absolute",top:"0",left:"0",width:"75%"}},null,8,kt),(0,n._)("img",{src:o.rarityBorders[1],class:"noselect noevents",style:{"z-index":"-1",position:"absolute",bottom:"0",right:"0",width:"75%"}},null,8,xt),((0,n.wg)(),(0,n.iD)("div",{key:s.refreshId,class:"overflow-auto hide-scrollbar text-center",style:{position:"absolute",left:"50%",top:"50%",width:"95%",transform:"translate(-50%, -50%)","max-height":"70%",padding:"50px"}},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.list,((e,i)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:"gacha-item-index-"+i},[(0,n._)("div",{style:(0,r.j5)(["height: 84px; width: 248.5px; position: relative; display: inline-block; margin: 1rem 0.5rem;",{animationDelay:-Math.round(5*Math.random())+"s"}]),class:(0,r.C_)({"sparkle-pull":e.item.rarity>3})},["hero"===e.itemType?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[e.item?((0,n.wg)(),(0,n.iD)("img",{key:0,src:o.cdn+"img/gacha_10bg_"+e.item.attribute+".png",class:"noselect noevents",style:{position:"absolute",left:"3%",top:"9%",height:"82%",width:"94%"}},null,8,Dt)):(0,n.kq)("",!0),e.item?((0,n.wg)(),(0,n.iD)("img",{key:1,src:o.cdn+"face/"+e.item.id+"_l.png",class:"noselect noevents",style:{position:"absolute",top:"9%",right:"2%",height:"81%"}},null,8,Ht)):(0,n.kq)("",!0),e.item?((0,n.wg)(),(0,n.iD)("img",{key:2,src:o.cdn+"img/gacha_10frame_"+e.item.attribute+".png",class:"noselect noevents",style:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%"}},null,8,zt)):(0,n.kq)("",!0)],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n._)("img",{src:o.cdn+"item_arti/"+e.item.id+"_l.jpg",class:"noselect noevents",style:{position:"absolute",height:"82%",right:"5%",top:"8%"}},null,8,Bt),(0,n._)("img",{src:o.cdn+"item_arti/arti_frame_small.png",class:"noselect noevents",style:{height:"100%",position:"absolute",right:"0"}},null,8,Pt),(0,n._)("img",{src:o.cdn+"item_arti/icon_"+e.item.id+".png",class:"noselect noevents",style:{position:"absolute",height:"100%",left:"1%",top:"0"}},null,8,It)],64)),e.item?((0,n.wg)(),(0,n.iD)("div",{key:2,style:(0,r.j5)(["position: absolute;top: 15%; font-size: 1.5rem; text-align: left;",{left:"hero"===e.itemType?"5%":"32%"}])},[(0,n._)("div",St,[e.item.role&&"common"!=e.item.role?((0,n.wg)(),(0,n.iD)("img",{key:0,src:o.cdn+"img/cm_icon_role_"+e.item.role+".png",class:"inline-icon-image noselect noevents"},null,8,At)):(0,n.kq)("",!0),e.item.attribute?((0,n.wg)(),(0,n.iD)("img",{key:1,src:o.cdn+"img/cm_icon_pro"+e.item.attribute+".png",class:"inline-icon-image noselect noevents"},null,8,Ct)):(0,n.kq)("",!0)]),(0,n._)("div",Mt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.item.rarity||1,(t=>((0,n.wg)(),(0,n.iD)("img",{src:o.cdn+"img/cm_icon_star.png",key:"rarity"+t,class:"noselect noevents",style:{"margin-right":"-0.3em",height:"100%"}},null,8,$t)))),128))]),(0,n._)("div",Rt,(0,r.zw)("hero"===e.itemType?t.$store.getters.getHeroName(e.item):t.$store.getters.getArtifactName(e.item)),1)],4)):(0,n.kq)("",!0)],6),[1,4,7].includes(i)?((0,n.wg)(),(0,n.iD)("br",Et)):(0,n.kq)("",!0)],64)))),128))])),(0,n._)("div",Ot,[i.banner.activePity?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"e7-chat-box",innerHTML:t.$t("strings.summons_until_guaranteed",[`<span style='color: var(--font-color-confirm)'>${i.banner.activePity.current}</span>`])},null,8,qt)):(0,n.kq)("",!0),(0,n.Wm)(l,{currency:i.banner.cost,icon:i.banner.currencyIcon,onClick:e[0]||(e[0]=e=>t.$emit("summon",1))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(t.$t("strings.summon")),1),jt,(0,n.Uk)("x1 ")])),_:1},8,["currency","icon"]),(0,n.Wm)(l,{currency:10*i.banner.cost,icon:i.banner.currencyIcon,onClick:e[1]||(e[1]=e=>t.$emit("summon",10))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(t.$t("strings.summon")),1),Tt,(0,n.Uk)("x10 ")])),_:1},8,["currency","icon"])]),(0,n.Wm)(l,{class:"brown",style:{position:"absolute",left:"10px",bottom:"10px"},onClick:e[2]||(e[2]=e=>t.$emit("back"))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(t.$t("strings.back")),1)])),_:1})])}var Yt={emits:["back","summon"],inject:["cdn"],components:{E7Button:Z.Z},props:{banner:{type:Object,default:()=>({})},list:{type:Array,default:()=>[]},highestValue:{type:Array,default:()=>[5,"ml"]},disableAnimation:{type:Boolean,default:!1}},data(){return{showAnimation:!0,ANIMATION:null,refreshId:0}},computed:{rarityBorders(){var t;return t=this.highestValue[0]<=3?["img/gacha_get_bg1.png","img/gacha_get_bg2.png"]:"ml"===this.highestValue[1]?["img/gacha_get_bg1_2.png","img/gacha_get_bg2_2.png"]:["img/gacha_get_bg1_1.png","img/gacha_get_bg2_1.png"],t.map((t=>this.cdn+t))}},watch:{list:{immediate:!0,handler(){this.refreshId=Date.now(),this.toggleAnimation()}}},created(){},methods:{toggleAnimation(){return new Promise((t=>{if(this.disableAnimation)return this.showAnimation=!1,t();this.showAnimation=!0,setTimeout((()=>{this.showAnimation=!1,t()}),1400)}))}}};const Ut=(0,nt.Z)(Yt,[["render",Nt]]);var Gt=Ut,Ft=i(2784),Kt={covenant:{type:"covenant",currency:"Covenant Bookmarks",currencyIcon:"token_ticket_rare",cost:5,rates:[{type:"rgb_5",rate:.0125},{type:"rgb_4",rate:.045},{type:"rgb_3",rate:.41},{type:"ml_5",rate:.0015},{type:"ml_4",rate:.005},{type:"ml_3",rate:.0435},{type:"artifact_5",rate:.0175},{type:"artifact_4",rate:.065},{type:"artifact_3",rate:.4}]},rate_up:{type:"rate_up",currency:"Covenant Bookmarks",currencyIcon:"token_ticket_rare",cost:5,pity:{5:{target:120,type:"rgb_5",current:120}},rates:[{type:"rgb_5",rate:.01},{type:"rgb_4",rate:.045},{type:"rgb_3",rate:.4125},{type:"artifact_5",rate:.0175},{type:"artifact_4",rate:.065},{type:"artifact_3",rate:.45}]},limited:{type:"limited",currency:"Covenant Bookmarks",currencyIcon:"token_ticket_rare",cost:5,pity:{5:{target:120,type:"rgb_5",current:120}},rates:[{type:"rgb_5",rate:.01},{type:"rgb_4",rate:.045},{type:"rgb_3",rate:.4125},{type:"artifact_5",rate:.0175},{type:"artifact_4",rate:.065},{type:"artifact_3",rate:.45}]},moonlight:{type:"moonlight",currency:"Galaxy Bookmarks",currencyIcon:"token_ticket_moon",cost:5,pity:{"4-5":{target:20,type:()=>Math.random()<=.15?"ml_5":"ml_4",current:20}},rates:[{type:"ml_5",rate:.025},{type:"ml_4",rate:.275},{type:"ml_3",rate:.7}]},mystic:{type:"mystic",currency:"Mystic Medals",currencyIcon:"token_ticket_special",cost:50,pity:{5:{target:200,type:"ml_5",current:200},4:{target:120,type:"ml_4",current:120}},rates:[{type:"rgb_5",rate:.00625},{type:"rgb_4",rate:.036},{type:"rgb_3",rate:.41},{type:"ml_5",rate:.00625},{type:"ml_4",rate:.009},{type:"artifact_5",rate:.0175},{type:"artifact_4",rate:.0650001},{type:"artifact_3",rate:.45}]},"ticket-4-5":{type:"ticket-4-5",currency:"Ticket",currencyIcon:"sp_herobox_3",cost:1,rates:[{type:"rgb_5",rate:.15},{type:"rgb_4",rate:.85}]}},Lt={name:"SummonSimulatorIndex",inject:["api","cdn"],components:{BannerMainPage:vt,SummonResultsPage:Gt},data(){return{bootCompleted:!1,ongoingBanners:[],arti:{},heroes:{},pool:{ml_5:[],ml_4:[],ml_3:[],rgb_5:[],rgb_4:[],rgb_3:[],artifact_5:[],artifact_4:[],artifact_3:[]},currentPull:null,banner:{}}},computed:{mainHero(){return this.banner.heroes&&this.banner.heroes.length?this.banner.heroes[0]:null}},created(){Promise.all([this.$store.dispatch("GET_HERO_DB").catch((()=>({}))),this.$store.dispatch("GET_ARTIFACT_DB").catch((()=>({}))),this.getOngoingBanners()]).then((t=>{this.heroes=t[0],this.arti=t[1],this.pool=this.createPool();var e=t[2].map((t=>this.createBanner({type:t.type.replace("covenant","rate_up"),limited:"limited"===t.type,timeLimit:t.dt,heroes:(t.c||[]).map((t=>this.getHero(t.id))),artifacts:(t.a||[]).map((t=>this.getArtifact(t.id)))}))).filter((t=>t));e.push(...["covenant","moonlight","ticket-4-5"].map((t=>this.createBanner({type:t,heroes:[],artifacts:[]})))),this.ongoingBanners=e,this.banner=this.ongoingBanners[0],this.bootCompleted=!0}))},methods:{getRandom:function(t){return t[Math.floor(Math.random()*t.length)]},getHero(t){return this.heroes[t]||{_id:t,id:t,rarity:1,name:t,role:"warrior",attribute:"fire",tags:[]}},getArtifact(t){return this.arti[t]||{_id:t,id:t,rarity:1,name:t,role:"warrior",tags:[]}},setActiveBanner(t){this.currentPull=null,this.banner=t},dateFormat(t){return t.toISOString().replace(/T/g," ").replace(/-/g,"/").replace(/:\d\d\.\d\d\dZ/g,"")},createPool(){var t,e=this.heroes,i=this.arti,n=this.pool;for(var r in console.log(e),e)e[r].tags||(e[r].tags=[]),e[r].tags.includes(0)&&!e[r].tags.some((t=>[1,2].includes(t)))&&(t=(["light","dark"].includes(e[r].attribute)?"ml_":"rgb_")+(e[r].rarity||0),n[t]||(n[t]=[]),n[t].push(e[r]));for(var a in i)i[a].tags||(i[a].tags=[]),i[a].tags.includes(0)&&!i[a].tags.some((t=>[1,2].includes(t)))&&(t="artifact_"+(i[a].rarity||0),n[t]||(n[t]=[]),n[t].push(i[a]));return n},getOngoingBanners(){var t=Date.now();return new Promise(((e,i)=>{Promise.all([(0,Ft.Z)("./data/timeline/covenant.json"),(0,Ft.Z)("./data/timeline/mystic.json")]).then((i=>{var n=JSON.parse(i[0]),r=JSON.parse(i[1]),a=[];[["rate_up",n],["mystic",r]].forEach((e=>{var i=e[1];i.forEach((e=>{var i=new Date(e.dt[1]||e.dt[0]||null),n=new Date(e.dt[0]);i.getTime()>t&&n.getTime()<t&&a.push(e)}))})),e(a)})).catch((t=>{i(t)}))}))},changePity(t){this.banner.pity[t.rarity]&&(this.banner.activePity=this.banner.pity[t.rarity])},lookForRateOf(t,e){for(var i in t)if(t[i].type==e)return t[i].pool},createHistoryObject(){return{pity:0,beforePity:0,pull:0,hero_5_count:0,hero_4_count:0,hero_3_count:0,artifact_5_count:0,artifact_4_count:0,artifact_3_count:0,hero:{},artifact:{}}},resetBannerHistory(){if(this.banner.history=this.createHistoryObject(),this.banner.pity)for(var t in this.banner.pity)this.banner.pity[t].current=this.banner.pity[t].target+0},createBanner(t){if(t){var e=Kt[t.type];if(e&&(!["rate_up","limited"].includes(t.type)||t.heroes.length)){var i=JSON.parse(JSON.stringify(e));i.history={pulls:0,list:[]},i.type=t.type,i.name="Banner "+t.type+" "+t.heroes.map((t=>t.name)),i.heroes=t.heroes||[],i.artifacts=t.artifacts||[],i.currencyIcon=this.cdn+"item/"+i.currencyIcon+".png",i.history=this.createHistoryObject();var n={rate_up:t=>{var e,i,n,r=!t.heroes||!t.heroes.length,a=!!(r||t.heroes.length>1),s=t.limited;return a?(e="banner/gacha_cg_230420_banner",i=r?"img/en/gacha_banner_title_limited_groupcustom":s?"img/en/gacha_banner_title_limited_group":"img/en/gacha_banner_title_group"):(e="banner/gacha_"+t.heroes[0].id+"_01_banner",n="banner/gacha_"+t.heroes[0].id+"_01_bg",s&&(i="img/en/gacha_title_flag")),{icon:e?this.cdn+e+".png":null,img:n?this.cdn+n+".png":null,deco:i?this.cdn+i+".png":null}},covenant:{icon:this.cdn+"banner/banner_gacha_story.png",deco:this.cdn+"banner/en/pk_gacha_rare_bi.png"},moonlight:{icon:this.cdn+"banner/banner_gacha_special.png",deco:this.cdn+"banner/en/pk_gacha_moonlight_bi.png",img:this.cdn+"banner/gacha_bg_special.png"},mystic:{icon:this.cdn+"banner/banner_gacha_special.png",deco:this.cdn+"banner/en/pk_gacha_special_bi.png",img:this.cdn+"banner/gacha_bg_special.png"},"ticket-4-5":{icon:this.cdn+"banner/we_7days_new_banner.png",deco:this.cdn+"item/sp_herobox_3.png"}};n.limited=n.rate_up;var r,a=n[i.type];for(r in a&&Object.assign(i,a instanceof Function?a(t):a),t.timeLimit&&(i.eventPeriod=this.dateFormat(new Date(t.timeLimit[0]))+" - "+this.dateFormat(new Date(t.timeLimit[1]))),i.rates)i.rates[r].pool=(this.pool[i.rates[r].type]||[]).slice();if(i.pity)for(var s in i.pity){i.activePity=i.pity[s];break}switch(t.type){case"mystic":for(r in i.activePity=i.pity["5"],i.rates)"ml_5"==i.rates[r].type&&(i.rates[r].pool=t.heroes.filter((t=>5===t.rarity)).slice(0,1)),"ml_4"==i.rates[r].type&&(i.rates[r].pool=t.heroes.filter((t=>4===t.rarity)).slice(0,1));break;case"rate_up":case"limited":for(r=0;r<i.rates.length;r++)if("rgb_5"==i.rates[r].type&&(i.rates[r].pool=t.heroes.slice()),"artifact_5"==i.rates[r].type&&t.artifacts&&t.artifacts.length){var o=.0105;for(var l in t.artifacts){var c=i.rates[r].pool.indexOf(t.artifacts[l]);-1!=c&&i.rates[r].pool.splice(c,1)}i.rates[r].rate-=o,i.rates.splice(r-1,0,{type:"rate_up_artifact_5",rate:o,pool:t.artifacts.slice()}),r++}break}for(var h in i.rates){var m=i.rates[h];m.pool.length||m.pool.push({_id:m.type,id:m.type,name:m.type,rarity:1,attribute:"fire"})}return i}}},addItemToBannerHistory(t,e){var i=this.banner.history,n=i[e]||{};"string"==typeof t&&(t={id:t,_id:t,name:t}),n[t._id]||(n[t._id]={count:0,item:t}),n[t._id].count++,"hero"===e?i["hero_"+t.rarity+"_count"]++:i["artifact_"+t.rarity+"_count"]++},pull(t=1){for(var e=[],i=[0,"rgb"],n=this.banner,r=n.history,a=n.rates||[],s=n.activePity,o=0;o<t;o++){var l,c,h=Math.random(),m=0;if(r.pull++,s&&(s.current--,-1===s.current)){r.pity++;var u="moonlight"===n.type?Math.random()<=.15?"ml_5":"ml_4":s.type,g=this.lookForRateOf(a,u);if(s.current=s.target+0,g){l=this.getRandom(g),c=-1!=u.indexOf("artifact")?"artifact":"hero";var p=-1!=u.indexOf("ml_"),d=Number(u.charAt(u.length-1));l||(l={id:"none",_id:"none",name:"none",rarity:d}),this.addItemToBannerHistory(l,c),d>=i[0]&&p?i=[d,"ml"]:d>i[0]&&(i=[d,c]),e.push({type:u,itemType:-1!=u.indexOf("artifact")?"artifact":"hero",item:l});continue}}for(var y=0;y<a.length;y++)if(m+=a[y].rate,h<=m){l=this.getRandom(a[y].pool),c=-1!=a[y].type.indexOf("artifact")?"artifact":"hero";p=-1!=a[y].type.indexOf("ml_"),d=Number(a[y].type.charAt(a[y].type.length-1));l||(l={id:"none",_id:"none",name:"none",rarity:1,role:"warrior"}),this.addItemToBannerHistory(l,c),d>=i[0]&&p?i=[d,"ml"]:d>i[0]&&(i=[d,c]),e.push({type:a[y].type,itemType:c,item:l}),s&&s.type===a[y].type&&(s.current=s.target+0,r.beforePity++);break}}this.currentPull={best:i,list:e},console.log(this.currentPull)}}};const Zt=(0,nt.Z)(Lt,[["render",m]]);var Wt=Zt}}]);