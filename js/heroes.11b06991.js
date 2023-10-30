"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[4892],{6412:function(t,e,r){r.d(e,{Z:function(){return y}});var i=r(6252),o=r(3577);const a={style:{display:"inline-block",width:"361px",position:"relative"},class:"panel-wrapper noselect"},l={style:{position:"absolute",top:"0",left:"0"},class:"panel full-h full-w"},s=["data-src"],n=["data-src"],c=["data-src"],u=["src"],d={class:"text-black-stroke",style:{position:"absolute",color:"white",left:"23%",top:"20%"}};function f(t,e,r,f,h,g){const p=(0,i.Q2)("lazyloader");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",l,[(0,i.wy)((0,i._)("img",{"data-src":g.img,class:"hero-img"},null,8,s),[[p]]),(0,i.wy)((0,i._)("img",{style:{position:"absolute",left:"13%",top:"20%",height:"23%"},"data-src":g.roleIcon},null,8,n),[[p]]),(0,i.wy)((0,i._)("img",{style:{position:"absolute",left:"10%",bottom:"25%",height:"25%"},"data-src":g.attributeIcon},null,8,c),[[p]]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.heroData.rarity,(t=>((0,i.wg)(),(0,i.iD)("img",{style:(0,o.j5)(["position: absolute; bottom: 25%; height: 25%",{left:15+5*t+"%"}]),key:t,src:g.starIcon},null,12,u)))),128)),(0,i._)("div",d,(0,o.zw)(g.heroData.name),1)])])}var h=r(8753),g={props:{data:{type:Object,required:!1}},computed:{heroData(){return this.data||{}},img(){return h.cK+"/face/"+this.heroData.id+"_l.png"},starIcon(){return h.cK+"/img/cm_icon_star.png"},roleIcon(){return this.$store.getters.getRoleIcon(this.heroData.role)},attributeIcon(){return this.$store.getters.getAttributeIcon(this.heroData.attribute)}}},p=r(3744);const m=(0,p.Z)(g,[["render",f]]);var y=m},2116:function(t,e,r){r.d(e,{Z:function(){return c}});var i=r(6252);const o={class:"page-title-box flex flex-col justify-center"};function a(t,e){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.WI)(t.$slots,"default")])}var l=r(3744);const s={},n=(0,l.Z)(s,[["render",a]]);var c=n},458:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var i=r(6252),o=r(3577);const a=(0,i._)("h2",null,"Heroes",-1),l={class:"flex flex-wrap justify-center",style:{"min-height":"100vh","place-content":"flex-start"}};function s(t,e,r,s,n,c){const u=(0,i.up)("PageTitle"),d=(0,i.up)("FilterBlock"),f=(0,i.up)("HeroPanel"),h=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[a])),_:1}),(0,i.Wm)(d,{modelValue:n.filters,"onUpdate:modelValue":e[0]||(e[0]=t=>n.filters=t),class:"pad-5"},null,8,["modelValue"]),(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.sortedList,(t=>((0,i.wg)(),(0,i.j4)(h,{key:t._id,to:"/hero/"+t._id,class:"route-restore pointer col-2 col-lg-4 col-xl-5 col-xxl-6",style:(0,o.j5)({display:c.filtredList[t._id]?"inline-block":"none"})},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{hero:t._id,data:t,style:{width:"100%"}},null,8,["hero","data"])])),_:2},1032,["to","style"])))),128))])])}var n=r(8753),c=r(2784),u=r(2116),d=r(987),f=r(6412),h={name:"HeroesIndex",components:{PageTitle:u.Z,HeroPanel:f.Z,FilterBlock:d.Z},inject:["setMeta"],data(){return{cdn:n.cK,filters:{name:"",role:[],attribute:[],rarity:[],zodiac:[],tags:[],buff:[],debuff:[],common:[],devotion:[],self_devotion:[]},list:{}}},mounted(){this.setMeta({title:"Heroes | CeciliaBot",description:"Character list"})},watch:{},methods:{},computed:{sortedList(){var t=t=>["fire","ice","wind","light","dark"].indexOf(t),e=t=>["warrior","knight","assassin","ranger","mage","manauser"].indexOf(t);const r=Array.isArray(this.list)?this.list.slice():Object.values(this.list);return r.sort(((t,e)=>t.name<e.name?-1:0)).sort(((r,i)=>r.rarity!==i.rarity?r.rarity>i.rarity?-1:1:t(r.attribute)!==t(i.attribute)?t(r.attribute)<t(i.attribute)?-1:1:e(r.role)<e(i.role)?-1:1))},filtredList(){var t={},e=this.filters,r=/[^a-z0-9]/g,i=/[^a-z0-9,]/g,o=e.name.toLowerCase().replace(r,"");for(var a in this.list){var l=this.list[a];t[l._id]=(-1!==l.name.toLowerCase().replace(r,"").indexOf(o)||l.nicknames&&-1!==l.nicknames.join(",").toLowerCase().replace(i,"").indexOf(o))&&["role","attribute","rarity","zodiac"].every((t=>!e[t].length||e[t].includes(l[t])))&&(!e.tags.length||e.tags.every((t=>l.tags.includes(t))))&&["common","buff","debuff"].every((t=>!e[t].length||e[t].every((e=>l[t]&&l[t].includes(e)))))&&["devotion","self_devotion"].every((t=>!e[t].length||e[t].includes(l[t].type)))}return t}},created(){(0,c.Z)(n.hi+"/getList?list=hero&fields=id,_id,name,rarity,role,attribute,zodiac,devotion,self_devotion,tags,buff,debuff,common").then((t=>{this.list=JSON.parse(t),console.log(this.list)})).catch((t=>{console.error(t)}))}},g=r(3744);const p=(0,g.Z)(h,[["render",s]]);var m=p}}]);