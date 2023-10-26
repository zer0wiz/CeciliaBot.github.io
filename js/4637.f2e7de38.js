"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[4637],{6290:function(t,a,e){e.d(a,{Z:function(){return h}});var i=e(6252),r=e(3577),l=e(9963);const s={class:"e7-range-input"},o={class:"relative",style:{marginRight:"2.4em"}},n=["min","max","step"],c=(0,i._)("div",{class:"dot"},null,-1),d=[c];function u(t,a,e,c,u,p){return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",o,[(0,i.wy)((0,i._)("input",{class:"noselect",type:"range","onUpdate:modelValue":a[0]||(a[0]=t=>p.localValue=t),min:e.min,max:e.max,step:e.step,style:(0,r.j5)({"--slider-track-color":p.trackColor})},null,12,n),[[l.nr,p.localValue]]),(0,i._)("div",{class:"thumb",style:(0,r.j5)({left:`${p.positionPercentage}%`})},d,4)])])}var p={name:"EpicSevenRange",props:{modelValue:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1}},computed:{localValue:{get(){return this.modelValue},set(t){return this.$emit("update:modelValue",t)}},positionPercentage(){return Math.round((this.localValue-this.min)/(this.max-this.min)*1e5)/1e3},trackColor(){return`linear-gradient(to right, #664c2b ${this.positionPercentage}%, var(--background-modifier-darken-alpha) 0%)`},steps(){let t=(this.max-this.min)/this.step;return t}}},m=e(3744);const g=(0,m.Z)(p,[["render",u]]);var h=g},6412:function(t,a,e){e.d(a,{Z:function(){return _}});var i=e(6252),r=e(3577);const l={style:{display:"inline-block",width:"361px",position:"relative"},class:"panel-wrapper noselect"},s={style:{position:"absolute",top:"0",left:"0"},class:"panel full-h full-w"},o=["data-src"],n=["data-src"],c=["data-src"],d=["src"],u={class:"text-black-stroke",style:{position:"absolute",color:"white",left:"23%",top:"20%"}};function p(t,a,e,p,m,g){const h=(0,i.Q2)("lazyloader");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",s,[(0,i.wy)((0,i._)("img",{"data-src":g.img,class:"hero-img"},null,8,o),[[h]]),(0,i.wy)((0,i._)("img",{style:{position:"absolute",left:"13%",top:"20%",height:"23%"},"data-src":g.roleIcon},null,8,n),[[h]]),(0,i.wy)((0,i._)("img",{style:{position:"absolute",left:"10%",bottom:"25%",height:"25%"},"data-src":g.attributeIcon},null,8,c),[[h]]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.heroData.rarity,(t=>((0,i.wg)(),(0,i.iD)("img",{style:(0,r.j5)(["position: absolute; bottom: 25%; height: 25%",{left:15+5*t+"%"}]),key:t,src:g.starIcon},null,12,d)))),128)),(0,i._)("div",u,(0,r.zw)(g.heroData.name),1)])])}var m=e(8753),g={props:{data:{type:Object,required:!1}},computed:{heroData(){return this.data||{}},img(){return m.cK+"/face/"+this.heroData.id+"_l.png"},starIcon(){return m.cK+"/img/cm_icon_star.png"},roleIcon(){return this.$store.getters.getRoleIcon(this.heroData.role)},attributeIcon(){return this.$store.getters.getAttributeIcon(this.heroData.attribute)}}},h=e(3744);const f=(0,h.Z)(g,[["render",p]]);var _=f},4637:function(t,a,e){e.r(a),e.d(a,{default:function(){return gt}});var i=e(6252),r=e(3577);const l={class:"flex flex-col full-h pad-5"},s={class:"page-path-title"},o={style:{"margin-bottom":"10px"}},n={class:"artifact-name-title"},c=["data-src"],d={key:0},u={class:"flex-fill"},p={class:"border-top",style:{"font-size":"1.8rem",color:"#9a9797"}},m={style:{color:"#ec7001"}},g={class:"text-black-stroke"},h=["data-src"],f={style:{float:"right",color:"#ec7001"}},_=["data-src"],v={style:{float:"right",color:"#ec7001"}},y={key:0,class:"border-top",style:{"font-size":"1.8rem"}},b=(0,i._)("h2",{style:{color:"#ec7001"}},"Related Hero",-1),w={class:"text-center"},D={style:{background:"#000000bb",border:"solid 2px #cea66b",color:"#cea66b",padding:"10px 15px","border-radius":"8px"}},k=(0,i._)("br",null,null,-1),x={style:{display:"flex",height:"100%","justify-content":"center","align-items":"center",padding:"20px"}},z=["data-src"],I=["data-src"],N=["data-src"],H=["data-src"],K={style:{position:"absolute",top:"2%",right:"2%",width:"7.5%","font-size":"1px","pointer-events":"none"}},U=["data-src"],A={class:"text-center",style:{position:"absolute",width:"100%",padding:"0 10px",left:"0",bottom:"10%","font-size":"4vh","pointer-events":"none"}},V={style:{position:"absolute",left:"7%",bottom:"2%","font-size":"3vh","pointer-events":"none"}},$=["data-src"],Z={style:{position:"absolute",right:"7%",bottom:"2%","font-size":"3vh","pointer-events":"none"}},S=["data-src"],j={class:"skill-and-background flex flex-col full-h pad-5"},E={class:"flex-fill overflow-hidden"},P=(0,i._)("h2",{class:"border-bottom"},"Artifact Background",-1),R={class:"arti-skill-box overflow-auto full-h hide-scrollbar",style:{"padding-bottom":"100px",color:"#cea66b"}},Y={key:0,style:{"background-color":"#533f29",padding:"5px 10px","border-radius":"8px",margin:"0 10px"}},W=["data-src"],C={class:"arti-skill-box flex-fill overflow-hidden"},M=(0,i._)("h2",{style:{color:"#cea66b"},class:"border-bottom border-top"},[(0,i._)("i",{class:"fa fa-bolt"}),(0,i.Uk)(" Artifact Skill ")],-1),q={style:{"font-size":"2rem",padding:"0 10px"}},T=["data-src"],J=["data-src"],L=["innerHTML"];function O(t,a,e,O,F,Q){const B=(0,i.up)("router-link"),G=(0,i.up)("Tag"),X=(0,i.up)("HeroPanel"),tt=(0,i.up)("E7Slider"),at=(0,i.up)("E7JournalPartsVue"),et=(0,i.Q2)("lazyloader"),it=(0,i.Q2)("tooltip");return F.artiData?((0,i.wg)(),(0,i.j4)(at,{key:0,class:"flex-fill overflow-hidden"},{left:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i._)("div",s,[(0,i.Wm)(B,{to:"/artifacts",class:"router-restore",style:{opacity:"0.6"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Artifacts")])),_:1}),(0,i.Uk)(" / "+(0,r.zw)(F.artiData.name||F.artiData._id),1)]),(0,i._)("div",o,[(0,i._)("div",{style:(0,r.j5)({color:["inherit","inherit","green","#0061ff","purple","red"][F.artiData.rarity]})},(0,r.zw)([0,"Normal","Good","Rare","Heroic","Epic"][F.artiData.rarity])+" Artifact ",5),(0,i._)("h1",n,[(0,i._)("span",null,(0,r.zw)(F.artiData.name),1)]),(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(F.artiData.rarity||1,(t=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("img",{key:"arti-rarity-"+t,"data-src":F.cdn+"/img/cm_icon_star.png",style:{"margin-right":"-10px"}},null,8,c)),[[et]]))),128))]),Q.tags.length?((0,i.wg)(),(0,i.iD)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Q.tags,(t=>((0,i.wg)(),(0,i.j4)(G,{key:"tag-"+t,color:"red"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(t),1)])),_:2},1024)))),128))])):(0,i.kq)("",!0)]),(0,i._)("div",u,[(0,i._)("div",p,[(0,i._)("h2",m,"Stats Level "+(0,r.zw)(F.level),1),(0,i._)("div",g,[(0,i._)("div",null,[(0,i.wy)((0,i._)("img",{class:"inline-icon-image","data-src":F.cdn+"/img/cm_icon_stat_att.png"},null,8,h),[[et]]),(0,i.Uk)(" Attack "),(0,i._)("span",f,(0,r.zw)(Q.atk),1)]),(0,i._)("div",null,[(0,i.wy)((0,i._)("img",{class:"inline-icon-image","data-src":F.cdn+"/img/cm_icon_stat_max_hp.png"},null,8,_),[[et]]),(0,i.Uk)(" Health "),(0,i._)("span",v,(0,r.zw)(Q.hp),1)])])]),F.artiData.related_hero?((0,i.wg)(),(0,i.iD)("div",y,[b,(0,i._)("div",w,[(0,i.Wm)(B,{to:"/hero/"+F.artiData.related_hero._id,class:"route-restore pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(X,{data:F.artiData.related_hero},null,8,["data"])])),_:1},8,["to"])])])):(0,i.kq)("",!0)]),(0,i._)("div",D,[(0,i._)("div",null,[(0,i.Uk)(" Level: "+(0,r.zw)(F.level)+" ",1),k,(0,i.Uk)(" Skill rank: "+(0,r.zw)(Q.skillRank+1),1)]),(0,i.Wm)(tt,{modelValue:F.level,"onUpdate:modelValue":a[0]||(a[0]=t=>F.level=t),modelModifiers:{number:!0},max:30,min:0,step:3,style:{"font-size":"10px",margin:"5px 0"}},null,8,["modelValue"])])])])),center:(0,i.w5)((()=>[(0,i._)("div",x,[(0,i._)("div",{class:"relative pointer text-black-stroke noselect",style:{color:"white",height:"90%","max-height":"600px"},onClick:a[1]||(a[1]=(...t)=>Q.photogalleryArtifact&&Q.photogalleryArtifact(...t))},[(0,i.wy)((0,i._)("img",{"data-src":Q.artifactImgSu,style:{"vertical-align":"top",height:"100%","pointer-events":"none"}},null,8,z),[[et]]),(0,i.wy)((0,i._)("img",{"data-src":F.cdn+"/item_arti/arti_frame_deco_1.png",style:{position:"absolute",left:"0",top:"0",width:"45%","pointer-events":"none"}},null,8,I),[[et]]),(0,i.wy)((0,i._)("img",{"data-src":F.cdn+"/item_arti/arti_frame_deco_2.png",style:{position:"absolute",left:"0",bottom:"0",width:"100%","pointer-events":"none"}},null,8,N),[[et]]),(0,i.wy)((0,i._)("img",{"data-src":Q.artifactImgIcon,style:{position:"absolute",left:"0",top:"0",height:"16%","pointer-events":"none"}},null,8,H),[[et]]),(0,i._)("div",K,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(F.artiData.rarity||1,(t=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("img",{key:"arti-rarity-"+t,"data-src":F.cdn+"/img/cm_icon_star.png",style:{width:"100%"}},null,8,U)),[[et]]))),128))]),(0,i._)("div",A,(0,r.zw)(F.artiData.name),1),(0,i._)("div",V,[(0,i.wy)((0,i._)("img",{class:"inline-icon-image","data-src":F.cdn+"/img/cm_icon_stat_att.png",style:{"vertical-align":"middle","padding-bottom":"0.15em","font-size":"1.2em"}},null,8,$),[[et]]),(0,i.Uk)(" "+(0,r.zw)(Q.atk),1)]),(0,i._)("div",Z,[(0,i.wy)((0,i._)("img",{class:"inline-icon-image","data-src":F.cdn+"/img/cm_icon_stat_max_hp.png",style:{"vertical-align":"middle","padding-bottom":"0.15em","font-size":"1.2em"}},null,8,S),[[et]]),(0,i.Uk)(" "+(0,r.zw)(Q.hp),1)])])])])),right:(0,i.w5)((()=>[(0,i._)("div",j,[(0,i._)("div",E,[P,(0,i._)("div",R,(0,r.zw)(F.artiData.story||"Missing story"),1)]),["common","",null].includes(F.artiData.role)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",Y,[F.artiData.hero_exclusive?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)(" Exclusive "+(0,r.zw)(F.artiData.related_hero?F.artiData.related_hero.name:"???")+" - "+(0,r.zw)(t.$t("strings."+F.artiData.role)),1)],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.wy)((0,i._)("img",{"data-src":F.cdn+"/img/cm_icon_role_"+F.artiData.role+".png",class:"inline-icon-image",style:{"padding-bottom":"0.1em","font-size":"1.3em"}},null,8,W),[[et]]),(0,i.Uk)(" "+(0,r.zw)(t.$t("strings."+F.artiData.role))+" Exclusive ",1)],64))])),(0,i._)("div",C,[M,(0,i._)("div",q,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(F.artiData.buff,(t=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("img",{key:t,"data-src":F.cdn+"/buff/"+(t.icon||t)+".png",class:"inline-icon-image",style:{"padding-bottom":"0.1em",margin:"0 2px","font-size":"1.3em"}},null,8,T)),[[it,t],[et]]))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(F.artiData.debuff,(t=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("img",{key:t,"data-src":F.cdn+"/buff/"+(t.icon||t)+".png",class:"inline-icon-image",style:{"padding-bottom":"0.1em",margin:"0 2px","font-size":"1.3em"}},null,8,J)),[[it,t],[et]]))),128))]),(0,i._)("div",{class:"arti-skill-box hide-scrollbar",style:{overflow:"auto",height:"calc(100% - 70px)"},innerHTML:Q.rankedDescription},null,8,L)])])])),_:1})):(0,i.kq)("",!0)}var F=e(6139),Q=e(8439);const B={class:"e7-3-parts flex full-h full-w"},G={class:"left flex-fill pad-5 overflow-auto hide-scrollbar"},X={class:"center overflow-auto"},tt={class:"right pad-5 flex-fill glass-container-2 overflow-auto"};function at(t,a,e,r,l,s){return(0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("div",G,[(0,i.WI)(t.$slots,"left",{},void 0,!0)]),(0,i._)("div",X,[(0,i.WI)(t.$slots,"center",{},void 0,!0)]),(0,i._)("div",tt,[(0,i.WI)(t.$slots,"right",{},void 0,!0)])])}var et={},it=e(3744);const rt=(0,it.Z)(et,[["render",at],["__scopeId","data-v-12992607"]]);var lt=rt,st=e(6412),ot=e(2784),nt=e(8753),ct=e(2177),dt=e(5317),ut=e(6290),pt={name:"ArtifactDetailsIndex",components:{Tag:F.Z,E7JournalPartsVue:lt,HeroPanel:st.Z,E7Slider:ut.Z},props:{artiProp:{}},data(){return{artifact:this.artiProp||this.$route.params.id,artiData:null,cdn:nt.cK,level:30}},created(){this.artifact instanceof Object?(this.artiData=this.artifact,this.artifact=this.artifact._id):(0,ot.Z)(nt.hi+"/getItem?list=artifact&id="+this.artifact).then((t=>{var a=JSON.parse(t);this.artiData=a,(0,ct.Z)({title:a.name+" | CeciliaBot",description:a.description,icon:nt.cK+"face/"+a.id+"_s.png"}),console.log(this.artiData)})).catch((()=>{}))},methods:{skillFormatting:dt.u,photogalleryArtifact(){return this.$gallery([{src:this.artifactImgSu,description:this.artiData.name},{src:this.artifactImgIcon,description:this.artiData.name+" - Icon"}])}},computed:{tags(){return this.artiData.tags.map((t=>Q.pJ[t]||"TAG_"+t))},skillRank(){return Math.floor(this.level/3)},atk(){return Number(this.artiData.stats.atk)+~~(this.level/2*.8*Number(this.artiData.stats.atk))},hp(){return Number(this.artiData.stats.hp)+~~(this.level/2*.8*Number(this.artiData.stats.hp))},getNumber(t){return isNaN(t)?"string"==typeof t?(console.error("Error getNumber():",t,"is not a number or string."),null):-1===t.indexOf("%")?Number(t):parseFloat(t)/100:t},rankedDescription(){return(0,dt.u)(this.artiData.description,this.artiData.values.map((t=>{Array.isArray(t)||(t=[t]);var a=((t[1]||2*t[0])-t[0])/10,e=t[0]+a*this.skillRank;if(t[0]<1){e*=1e3;var i=1e3*a%1;e=e.toFixed(i?1:0)+"%"}return e})))},artifactImgIcon(){return this.artiData?this.artiData.id?nt.cK+"/item_arti/icon_"+this.artiData.id+".png":nt.cK+"/tmp/item_arti/icon_"+(this.artiData._id||this.artiData.name)+".png":""},artifactImgSu(){return this.artiData?this.artiData.id?nt.cK+"/item_arti/"+this.artiData.id+"_fu.png":nt.cK+"/tmp/item_arti/"+(this.artiData._id||this.artiData.name)+"_fu.png":""},characterName(){return this.artiData.name}}};const mt=(0,it.Z)(pt,[["render",O]]);var gt=mt}}]);