"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[4892],{314:function(t,e,r){r.d(e,{Z:function(){return m}});var i=r(6252),o=r(3577);const a={style:{display:"inline-block",width:"361px",position:"relative"},class:"panel-wrapper noselect"},l={style:{position:"absolute",top:"0",left:"0"},class:"panel full-h full-w"},s=["data-src"],n=["data-src"],c=["data-src"],u={class:"text-black-stroke",style:{position:"absolute",color:"white",left:"23%",top:"20%"}};function d(t,e,r,d,h,f){const p=(0,i.Q2)("lazyloader");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",l,[(0,i.wy)((0,i._)("img",{"data-src":f.img,class:"hero-img"},null,8,s),[[p]]),(0,i.wy)((0,i._)("img",{style:{position:"absolute",left:"13%",top:"20%",height:"23%"},"data-src":f.roleIcon},null,8,n),[[p]]),(0,i.wy)((0,i._)("img",{style:{position:"absolute",left:"10%",bottom:"25%",height:"25%"},"data-src":f.attributeIcon},null,8,c),[[p]]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.heroData.rarity,(t=>((0,i.wg)(),(0,i.iD)("img",{style:(0,o.j5)(["position: absolute; bottom: 25%; height: 25%",{left:15+5*t+"%"}]),key:t,src:"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/cm_icon_star.png"},null,4)))),128)),(0,i._)("div",u,(0,o.zw)(f.heroData.name),1)])])}var h=r(8753),f={props:{data:{type:Object,required:!1}},computed:{heroData(){return this.data||{}},img(){return h.cK+"/face/"+this.heroData.id+"_l.png"},starIcon(){return h.cK+"img/cm_icon_star.png"},roleIcon(){return this.$store.getters.getRoleIcon(this.heroData.role)},attributeIcon(){return this.$store.getters.getAttributeIcon(this.heroData.attribute)}}},p=r(3744);const g=(0,p.Z)(f,[["render",d]]);var m=g},3726:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var i=r(6252),o=r(3577);const a=(0,i._)("h2",null,"Heroes",-1),l={class:"flex flex-wrap justify-center",style:{"min-height":"100vh","place-content":"flex-start"}};function s(t,e,r,s,n,c){const u=(0,i.up)("PageTitle"),d=(0,i.up)("FilterBlock"),h=(0,i.up)("HeroPanel"),f=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[a])),_:1}),(0,i.Wm)(d,{modelValue:n.filters,"onUpdate:modelValue":e[0]||(e[0]=t=>n.filters=t)},null,8,["modelValue"]),(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.sortedList,(t=>((0,i.wg)(),(0,i.j4)(f,{key:t._id,to:"/hero/"+t._id,class:"route-restore pointer col-2 col-lg-3 col-xl-4 col-xxl-6",style:(0,o.j5)({display:c.filtredList[t._id]?"inline-block":"none"})},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{hero:t._id,data:t,style:{width:"100%"}},null,8,["hero","data"])])),_:2},1032,["to","style"])))),128))])])}var n=r(8753),c=r(2784),u=r(2116),d=r(5450),h=r(314),f={name:"HeroesIndex",components:{PageTitle:u.Z,HeroPanel:h.Z,FilterBlock:d.Z},inject:["setMeta"],data(){return{cdn:n.cK,filters:{name:"",role:[],attribute:[],rarity:[],zodiac:[],tags:[],buffs:[],debuffs:[],common:[],devotion:[],self_devotion:[]},list:{}}},mounted(){this.setMeta({title:"Heroes | CeciliaBot",description:"Character list"})},watch:{},methods:{},computed:{sortedList(){var t=t=>["fire","ice","wind","light","dark"].indexOf(t),e=t=>["warrior","knight","assassin","ranger","mage","manauser"].indexOf(t);return Object.values(this.list).sort(((t,e)=>t.name<e.name?-1:0)).sort(((r,i)=>r.rarity!==i.rarity?r.rarity>i.rarity?-1:1:t(r.attribute)!==t(i.attribute)?t(r.attribute)<t(i.attribute)?-1:1:e(r.role)<e(i.role)?-1:1))},filtredList(){var t={},e=this.filters;for(var r in this.list){var i=this.list[r];t[r]=-1!==i.name.toLowerCase().indexOf(e.name.toLowerCase())&&["role","attribute","rarity","zodiac"].every((t=>!e[t].length||e[t].includes(i[t])))&&(!e.tags.length||e.tags.every((t=>i.tags.includes(t))))&&["common","buffs","debuffs"].every((t=>!e[t].length||e[t].every((e=>i[t]&&i[t].includes(e)))))&&["devotion","self_devotion"].every((t=>!e[t].length||e[t].includes(i[t].type)))}return t}},created(){(0,c.Z)(n.hi+"/hero").then((t=>{this.list=JSON.parse(t)})).catch((t=>{console.error(t)}))}},p=r(3744);const g=(0,p.Z)(f,[["render",s]]);var m=g}}]);