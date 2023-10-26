"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[3505],{5317:function(e,t,a){a.d(t,{u:function(){return s}});a(7658);function l(e){return Math.abs(e)<1?Math.round(1e3*e*100)/100+"%":e}function s(e="",t=[]){if(e=e.replace("\\n","\n").replace(/--(.*?)--/g,'<span style="color: var(--font-color-warn);">$1</span>').replace(/\*\*(.*?)\*\*/g,'<span style="color: var(--font-color-accent);">$1</span>').replace(/\+\+(.*?)\+\+/g,'<span style="color: var(--font-color-primary);">$1</span>'),t.length){const a=e?.split(/\{\{\s*variable\s*\}\}/);if(a.length<2);else{const s=a.reduce(((e,s,i)=>(e.push(s),i<a.length-1&&!Array.isArray(t[i])&&e.push("<span class='skill-variable'>"+l(t[i])+"</span>"),e)),[]);e=s.join("")}}return e}},9426:function(e,t,a){function l(e){switch(e){case"max_hp":case"max_hp_rate":return"Health";case"def":case"def_rate":return"Defense";case"att":case"att_rate":return"Attack";case"speed":return"Speed";case"cri":return"Critical Hit Chance";case"cri_dmg":return"Critical Hit Damage";case"res":return"Effect Resistance";case"acc":return"Effectiveness";case"coop":return"Dual Attack Chance"}}a.d(t,{Z:function(){return l}})},2116:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(6252);const s={class:"page-title-box flex flex-col justify-center"};function i(e,t){return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.WI)(e.$slots,"default")])}var r=a(3744);const o={},n=(0,r.Z)(o,[["render",i]]);var c=n},6139:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(6252),s=a(3577);function i(e,t,a,i,r,o){return(0,l.wg)(),(0,l.iD)("div",{class:"title-labels noselect",style:(0,s.j5)({"--tag-color":a.color})},[(0,l.WI)(e.$slots,"default")],4)}var r={props:{color:{type:String,default:""}}},o=a(3744);const n=(0,o.Z)(r,[["render",i]]);var c=n},3505:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ga}});var l=a(6252),s=a(3577);const i={key:0},r={class:"page-path-title"},o={style:{height:"140px",width:"140px",display:"inline-block","margin-right":"20px"}},n=["data-src"],c={style:{display:"inline-block","font-weight":"600","vertical-align":"top"}},d={key:0,style:{"font-size":"0.7em"}},g={style:{"font-size":"0.7em","font-weight":"200"}},u={class:"e7-chat-bubble"},_={class:"flex",style:{gap:"10px"}},m={key:0},p={style:{position:"relative"}},h={key:1,style:{position:"relative"}},k=(0,l._)("div",null,[(0,l.Uk)(" For hero builds check the "),(0,l._)("a",{href:"https://discord.gg/XazJJzg6xH"},"Hero Journal Discord Server"),(0,l.Uk)("! ")],-1),v={key:2},y={key:3};function f(e,t,a,f,w,D){const x=(0,l.up)("router-link"),S=(0,l.up)("Tag"),z=(0,l.up)("PageTitle"),b=(0,l.up)("SectionTitle"),q=(0,l.up)("Profile"),U=(0,l.up)("Imprint"),I=(0,l.up)("HeroStats"),H=(0,l.up)("Skills"),K=(0,l.up)("Exclusive"),Z=(0,l.up)("Awakenings"),W=(0,l.up)("SpecialtyTree"),T=(0,l.up)("Skins"),M=(0,l.Q2)("lazyloader");return w.heroData?((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(z,null,{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(x,{to:"/hero",class:"router-restore",style:{opacity:"0.6"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Heroes")])),_:1}),(0,l.Uk)(" / "+(0,s.zw)(w.heroData.name),1)]),(0,l._)("div",null,[(0,l._)("div",o,[(0,l.wy)((0,l._)("img",{"data-src":D.heroImgSu,style:{height:"100%",width:"100%","object-fit":"cover","object-position":"25%","vertical-align":"middle"}},null,8,n),[[M]])]),(0,l._)("div",c,[(0,l._)("h2",null,(0,s.zw)(D.characterName),1),w.heroData.tags?((0,l.wg)(),(0,l.iD)("div",d,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(D.tags,(e=>((0,l.wg)(),(0,l.j4)(S,{key:"tag-"+e,color:"red"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e),1)])),_:2},1024)))),128))])):(0,l.kq)("",!0),(0,l._)("div",g,(0,s.zw)(w.heroData.description),1)])]),(0,l._)("div",u,[(0,l._)("p",null,(0,s.zw)(w.heroData.get_line),1)])])),_:1}),(0,l._)("section",null,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Profile / Imprint ")])),_:1}),(0,l._)("div",_,[(0,l.Wm)(q,{"hero-data":w.heroData,class:"flex-fill"},null,8,["hero-data"]),(0,l.Wm)(U,{hero:w.hero,"hero-data":D.imprintData,class:"content-box"},null,8,["hero","hero-data"])])]),(0,l._)("section",null,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Stats ")])),_:1}),(0,l.Wm)(I,{"hero-data":w.heroData,imprint:D.imprintData,zodiacTree:D.zodiac_tree},null,8,["hero-data","imprint","zodiacTree"])]),(0,l._)("section",null,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Hero Skills ")])),_:1}),(0,l.Wm)(H,{hero:w.hero,"hero-data":w.heroData},null,8,["hero","hero-data"])]),w.heroData.ex_equip?((0,l.wg)(),(0,l.iD)("section",m,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Exclusive Equipment ")])),_:1}),(0,l.Wm)(K,{exclusive:w.heroData.ex_equip,"hero-data":w.heroData},null,8,["exclusive","hero-data"])])):(0,l.kq)("",!0),(0,l._)("section",p,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Awakenings ")])),_:1}),(0,l.Wm)(Z,{hero:w.hero,awakenings:w.heroData.zodiac_tree,zodiac_tree:D.zodiac_tree,"hero-data":w.heroData},null,8,["hero","awakenings","zodiac_tree","hero-data"])]),w.heroData.specialty_change?((0,l.wg)(),(0,l.iD)("section",h,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Specialty Tree ")])),_:1}),(0,l.Wm)(W,{hero:w.hero,"hero-data":w.heroData},null,8,["hero","hero-data"])])):(0,l.kq)("",!0),(0,l._)("section",null,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Builds ")])),_:1}),k]),w.heroData.skins?((0,l.wg)(),(0,l.iD)("section",v,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Skins ")])),_:1})])):(0,l.kq)("",!0),w.heroData.skin?((0,l.wg)(),(0,l.iD)("section",y,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Skins ")])),_:1}),(0,l.Wm)(T,{skins:w.heroData.skin},null,8,["skins"])])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)}var w=a(2116),D=a(9651),x=a(6139);const S={key:0,style:{display:"inline-block"},class:"hero-profile"},z=(0,l._)("span",{class:"profile-label"},"Name: ",-1),b=(0,l._)("span",{class:"profile-label"},"Nicknames: ",-1),q=(0,l._)("span",{class:"profile-label"},"ID: ",-1),U=(0,l._)("span",{class:"profile-label"},"Rarity: ",-1),I=(0,l._)("span",{class:"profile-label"},"Role: ",-1),H=["src"],K=(0,l._)("span",{class:"profile-label"},"Element: ",-1),Z=["src"],W=(0,l._)("span",{class:"profile-label"},"Zodiac: ",-1),T=["src"],M=(0,l._)("span",{class:"profile-label"},"Gender: ",-1),V={key:0},P=(0,l._)("span",{class:"profile-label"},"Global Release Date: ",-1);function j(e,t,a,i,r,o){return(0,l.wg)(),(0,l.iD)("div",null,[a.heroData?((0,l.wg)(),(0,l.iD)("div",S,[(0,l._)("div",null,[z,(0,l._)("span",null,(0,s.zw)(a.heroData.name),1)]),(0,l._)("div",null,[b,(0,l._)("span",null,(0,s.zw)(o.nicknames),1)]),(0,l._)("div",null,[q,(0,l._)("span",null,(0,s.zw)(a.heroData.id),1)]),(0,l._)("div",null,[U,(0,l._)("span",null,(0,s.zw)(a.heroData.rarity),1)]),(0,l._)("div",null,[I,(0,l._)("span",null,[(0,l._)("img",{src:o.getImage("cm_icon_role_"+a.heroData.role),class:"inline-icon-image"},null,8,H),(0,l.Uk)(" "+(0,s.zw)(e.$t("strings."+a.heroData.role)),1)])]),(0,l._)("div",null,[K,(0,l._)("span",null,[(0,l._)("img",{src:o.getImage("cm_icon_prom"+a.heroData.attribute),class:"inline-icon-image"},null,8,Z),(0,l.Uk)(" "+(0,s.zw)(e.$t("strings."+a.heroData.attribute)),1)])]),(0,l._)("div",null,[W,(0,l._)("span",null,[(0,l._)("img",{src:o.getImage("cm_icon_zodiac_"+a.heroData.zodiac),class:"inline-icon-image"},null,8,T),(0,l.Uk)(" "+(0,s.zw)(e.$t("strings."+a.heroData.zodiac)),1)])]),(0,l._)("div",null,[M,(0,l._)("span",null,(0,s.zw)(2===a.heroData.sex?"Female":a.heroData.sex?"Male":"Unknown"),1)]),a.heroData.release_dt?.global?((0,l.wg)(),(0,l.iD)("div",V,[P,(0,l._)("span",null,(0,s.zw)(e.$d(a.heroData.release_dt.global,"long")),1)])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])}var O=a(8753),Y={name:"HeroProfile",props:{heroData:{type:Object}},computed:{nicknames(){return(this.heroData.nicknames||[]).join(", ")}},methods:{getImage(e){return O.cK+"/img/"+e+".png"}}},A=a(3744);const C=(0,A.Z)(Y,[["render",j]]);var E=C;const $={key:0,class:"flex-fill flex justify-center",style:{"flex-wrap":"wrap"}},L={key:0,class:"col-1 col-lg-2 flex items-center",style:{gap:"30px","margin-top":"10px","justify-content":"center"}},B={class:"text-center"},N=["src"],F=["data-src"],R={style:{float:"right"}},Q={key:1,class:"col-1 col-lg-2 flex items-center",style:{gap:"30px","margin-top":"10px","justify-content":"center"}},J={class:"text-center"},G=["src"],X=["data-src"],ee={style:{float:"right"}},te={key:1};function ae(e,t,a,i,r,o){const n=(0,l.Q2)("lazyloader");return a.heroData?((0,l.wg)(),(0,l.iD)("div",$,[a.heroData.devotion?((0,l.wg)(),(0,l.iD)("div",L,[(0,l._)("div",B,[(0,l._)("img",{src:o.imprintFormationSrc},null,8,N),(0,l._)("div",null,(0,s.zw)(o.translateStats(a.heroData.devotion.type)),1)]),(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.heroData.devotion.grades,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,style:{width:"10rem"}},[(0,l.wy)((0,l._)("img",{"data-src":o.getRankImage(t),style:{height:"1em","vertical-align":"middle"}},null,8,F),[[n]]),(0,l._)("span",R,(0,s.zw)(e<1?Math.round(1e3*e)/10+"%":e),1)])))),128))])])):(0,l.kq)("",!0),a.heroData.self_devotion?((0,l.wg)(),(0,l.iD)("div",Q,[(0,l._)("div",J,[(0,l._)("img",{src:o.imprintConcentrationSrc},null,8,G),(0,l._)("div",null,(0,s.zw)(o.translateStats(a.heroData.self_devotion.type)),1)]),(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.heroData.self_devotion.grades,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,style:{width:"10rem"}},[(0,l.wy)((0,l._)("img",{"data-src":o.getRankImage(t),style:{height:"1em","vertical-align":"middle"}},null,8,X),[[n]]),(0,l._)("span",ee,"+ "+(0,s.zw)(e<1?Math.round(1e3*e)/10+"%":e),1)])))),128))])])):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("span",te,"No data"))}var le=a(9426),se={name:"HeroImprint",components:{},props:{hero:{type:String},heroData:{}},data(){return{imprint:null}},created(){},computed:{imprintFormationSrc(){var e=this.heroData?.devotion?.slots;if(!e)return O.cK+"/img/hero_dedi_p_0.png";var t=e.map(((e,t)=>e?t+1:null)).filter((e=>e)).join("")||"0";return O.cK+"/img/hero_dedi_p_"+t+".png"},imprintConcentrationSrc(){return O.cK+"/img/hero_dedi_type2.png"}},methods:{getRankImage(e){return e?O.cK+"/img/hero_dedi_a_"+e.toLowerCase()+".png":""},translateStats:le.Z}};const ie=(0,A.Z)(se,[["render",ae]]);var re=ie;const oe={key:0,class:"flex",style:{"flex-wrap":"wrap"}},ne={key:1};function ce(e,t,a,s,i,r){const o=(0,l.up)("Skill");return a.heroData.skills?((0,l.wg)(),(0,l.iD)("div",oe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.heroData.skills,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"col-1 col-lg-2 col-xxl-3",style:{"min-height":"100px",padding:"10px"}},[(0,l.Wm)(o,{"skill-data":e,hero:a.heroData},null,8,["skill-data","hero"])])))),128))])):((0,l.wg)(),(0,l.iD)("div",ne," No skill data for this hero "))}var de=a(9963);const ge={class:"skill-box"},ue={key:0},_e={class:"skill-header flex items-center"},me={class:"icon-box relative"},pe=["src"],he={key:0,style:{position:"absolute",right:"0",bottom:"0"}},ke=["src"],ve={class:"header flex-fill"},ye={class:"flex flex-wrap"},fe={key:0,class:"acquire-resource col-2"},we={key:1,class:"consume-resource col-2"},De={key:2,class:"acquire-resource col-2"},xe={key:3,class:"consume-resource col-2"},Se={class:"col-1"},ze={key:0,class:"consume-resource"},be={key:1},qe={key:2,style:{float:"right"}},Ue=["src"],Ie=["innerHTML"],He={key:0},Ke={style:{color:"var(--font-color-primary)","margin-bottom":"-10px"}},Ze=["src"],We=["innerHTML"],Te=(0,l._)("hr",null,null,-1),Me={key:1},Ve={class:"skill-enhance-list flex flex-wrap"},Pe=["onClick"],je={style:{opacity:"0.7","margin-right":"10px"}},Oe={key:0,class:"resource-item-list"},Ye=["data-src"],Ae=["max"];function Ce(e,t,a,i,r,o){const n=(0,l.Q2)("lazyloader"),c=(0,l.Q2)("tooltip");return(0,l.wg)(),(0,l.iD)("div",ge,[a.skillData.can_enhance?((0,l.wg)(),(0,l.iD)("div",ue,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>r.awakenedSkill=e)},null,512),[[de.e8,r.awakenedSkill]])])):(0,l.kq)("",!0),(0,l._)("div",_e,[(0,l._)("div",me,[(0,l._)("img",{src:r.cdn+"/skill/sk_"+a.hero.id+"_"+a.skillData.skill+".png"},null,8,pe),o.skill.soul_description?((0,l.wg)(),(0,l.iD)("div",he,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((o.skill.soul_requirement||10)/10,((e,t)=>((0,l.wg)(),(0,l.iD)("img",{key:"soul"+t,src:r.cdn+"/img/cm_icon_star_s.png",style:{"margin-left":"-10px"}},null,8,ke)))),128))])):(0,l.kq)("",!0)]),(0,l._)("div",ve,[(0,l._)("h3",null,(0,s.zw)(o.skill.name),1),(0,l._)("div",ye,[o.leveledSkillDetails.focus_gain?((0,l.wg)(),(0,l.iD)("div",fe," Acquire "+(0,s.zw)(o.leveledSkillDetails.focus_gain)+" Focus ",1)):(0,l.kq)("",!0),o.leveledSkillDetails.focus_requirement?((0,l.wg)(),(0,l.iD)("div",we," Consume "+(0,s.zw)(o.leveledSkillDetails.focus_requirement)+" Focus ",1)):(0,l.kq)("",!0),o.leveledSkillDetails.fs_gain?((0,l.wg)(),(0,l.iD)("div",De," Acquire "+(0,s.zw)(o.leveledSkillDetails.fs_gain)+" Fighting Spirit ",1)):(0,l.kq)("",!0),o.leveledSkillDetails.fs_requirement?((0,l.wg)(),(0,l.iD)("div",xe," Consume "+(0,s.zw)(o.leveledSkillDetails.fs_requirement)+" Fighting Spirit ",1)):(0,l.kq)("",!0),(0,l._)("div",Se,[o.leveledSkillDetails.soul_gain?((0,l.wg)(),(0,l.iD)("span",ze," Acquire "+(0,s.zw)(o.leveledSkillDetails.soul_gain)+" Soul ",1)):(0,l.kq)("",!0),o.skill.passive?((0,l.wg)(),(0,l.iD)("span",be," Passive ")):(0,l.kq)("",!0),o.leveledSkillDetails.cooldown?((0,l.wg)(),(0,l.iD)("span",qe,[(0,l.Uk)((0,s.zw)(o.leveledSkillDetails.cooldown)+" turns ",1),(0,l._)("img",{src:r.cdn+"/img/cm_icon_etctime_b2.png",class:"inline-icon-image",style:{transform:"scale(1.5)"}},null,8,Ue)])):(0,l.kq)("",!0)])])])]),(0,l._)("div",null,[(0,l._)("div",{class:"skill-description",innerHTML:o.skillDescription},null,8,Ie),o.skill.soul_description?((0,l.wg)(),(0,l.iD)("div",He,[(0,l._)("h3",Ke,[(0,l._)("img",{class:"inline-icon-image",src:r.cdn+"/img/cm_icon_star_s.png"},null,8,Ze),(0,l.Uk)(" Soulburn ("+(0,s.zw)(o.skill.soul_requirement)+" souls)",1)]),(0,l._)("div",{class:"skill-description",style:{color:"var(--font-color-primary)"},innerHTML:o.soulburnDescription},null,8,We)])):(0,l.kq)("",!0)]),Te,o.enhancements?((0,l.wg)(),(0,l.iD)("div",Me,[(0,l._)("ol",Ve,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.enhancements,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{key:"enh_"+t+"_skill",class:(0,s.C_)({"pointer col-1 col-lg-2 enhancement":!0,"has-resource":e&&e.resources&&e.resources.length,"is-enhanced":t<=r.enhLevel-1}),onClick:e=>r.enhLevel=t+1},[(0,l._)("span",je,"+"+(0,s.zw)(t+1),1),(0,l.Uk)((0,s.zw)(e.value>0?"+":"")+(0,s.zw)(o.toPercent(e.value))+" "+(0,s.zw)(e.string)+" ",1),e&&e.costs&&e.costs.length?((0,l.wg)(),(0,l.iD)("div",Oe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.costs,(e=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("span",{key:e._id,style:{"margin-right":"10px"}},[(0,l.wy)((0,l._)("img",{"data-src":e.src,class:"inline-icon-image"},null,8,Ye),[[n]]),(0,l.Uk)(" x"+(0,s.zw)(e.count),1)])),[[c,e.name||""]]))),128))])):(0,l.kq)("",!0)],10,Pe)))),128))])])):(0,l.kq)("",!0),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{type:"range",class:"noselect","onUpdate:modelValue":t[1]||(t[1]=e=>r.enhLevel=e),max:o.enhancements.length,min:"0",step:"1",style:{width:"100%"}},null,8,Ae),[[de.nr,r.enhLevel,void 0,{number:!0}]])])])}var Ee=a(9371),$e=a(8622),Le={5:[null,[[["molagora",3],["catalyst",8],["gold",52e3]]],[[["molagora",1],["catalyst",5],["gold",29e3]],[["molagora",4],["epic_catalyst",2],["gold",8e4]]],[[["molagora",1],["catalyst",3],["gold",19e3]],[["molagora",2],["catalyst",5],["gold",33e3]],[["molagora",4],["epic_catalyst",3],["gold",11e4]]],[[["molagora",1],["gold",4e3]],[["molagora",1],["catalyst",3],["gold",19e3]],[["molagora",3],["catalyst",5],["gold",37e3]],[["molagora",4],["epic_catalyst",2],["gold",8e4]]],[[["molagora",1],["gold",4e3]],[["molagora",1],["gold",4e3]],[["molagora",1],["catalyst",5],["gold",29e3]],[["molagora",3],["catalyst",7],["gold",47e3]],[["molagora",5],["epic_catalyst",2],["gold",8e4]]],[[["molagora",1],["gold",4e3]],[["molagora",1],["gold",4e3]],[["molagora",1],["catalyst",2],["gold",14e3]],[["molagora",2],["catalyst",4],["gold",28e3]],[["molagora",4],["catalyst",5],["gold",45e3]],[["molagora",4],["epic_catalyst",2],["gold",8e4]]],[[["molagora",1],["gold",4e3]],[["molagora",1],["gold",4e3]],[["molagora",1],["gold",4e3]],[["molagora",1],["catalyst",3],["gold",19e3]],[["molagora",3],["catalyst",4],["gold",32e3]],[["molagora",4],["catalyst",7],["gold",55e3]],[["molagora",4],["epic_catalyst",3],["gold",11e4]]]],4:[null,[[["molagora",1],["catalyst",8],["gold",44e3]]],[[["molagora",1],["catalyst",3],["gold",19e3]],[["molagora",2],["epic_catalyst",1],["gold",38e3]]],[[["molagora",1],["catalyst",1],["gold",9e3]],[["molagora",1],["catalyst",3],["gold",19e3]],[["molagora",3],["epic_catalyst",1],["gold",42e3]]],[[["molagora",1],["gold",4e3]],[["molagora",1],["catalyst",1],["gold",9e3]],[["molagora",1],["catalyst",1],["gold",9e3]],[["molagora",4],["epic_catalyst",2],["gold",8e4]]],[[["molagora",1],["gold",4e3]],[["molagora",1],["gold",4e3]],[["molagora",1],["catalyst",1],["gold",9e3]],[["molagora",2],["catalyst",3],["gold",23e3]],[["molagora",4],["epic_catalyst",2],["gold",8e4]]],[[["molagora",1],["gold",4e3]],[["molagora",1],["gold",4e3]],[["molagora",1],["catalyst",1],["gold",9e3]],[["molagora",2],["catalyst",2],["gold",18e3]],[["molagora",2],["catalyst",4],["gold",28e3]],[["molagora",4],["epic_catalyst",2],["gold",8e4]]],[[["molagora",1],["gold",4e3]],[["molagora",1],["gold",4e3]],[["molagora",1],["gold",4e3]],[["molagora",1],["catalyst",1],["gold",9e3]],[["molagora",2],["catalyst",2],["gold",18e3]],[["molagora",3],["catalyst",5],["gold",37e3]],[["molagora",4],["epic_catalyst",2],["gold",8e4]]]],3:[null,[[["stigma",300],["gold",4e3]]],[[["stigma",250],["catalyst",2],["gold",14e3]],[["stigma",650],["catalyst",3],["gold",24e3]]],[[["stigma",200],["catalyst",2],["gold",13e3]],[["stigma",450],["catalyst",3],["gold",21e3]],[["stigma",850],["catalyst",5],["gold",37e3]]],[[["stigma",150],["gold",2e3]],[["stigma",300],["catalyst",2],["gold",14e3]],[["stigma",550],["catalyst",3],["gold",23e3]],[["stigma",1100],["catalyst",4],["gold",35e3]]],[[["stigma",120],["gold",2e3]],[["stigma",270],["gold",4e3]],[["stigma",470],["catalyst",3],["gold",22e3]],[["stigma",740],["catalyst",4],["gold",3e4]],[["stigma",1100],["catalyst",5],["gold",4e4]]],[[["stigma",80],["gold",2e3]],[["stigma",180],["gold",3e3]],[["stigma",320],["catalyst",1],["gold",1e4]],[["stigma",530],["catalyst",2],["gold",18e3]],[["stigma",850],["catalyst",4],["gold",32e3]],[["stigma",1340],["catalyst",6],["gold",48e3]]],[[["stigma",50],["gold",1e3]],[["stigma",120],["gold",2e3]],[["stigma",230],["gold",4e3]],[["stigma",400],["catalyst",3],["gold",21e3]],[["stigma",650],["catalyst",4],["gold",29e3]],[["stigma",1e3],["catalyst",5],["gold",39e3]],[["stigma",1450],["catalyst",6],["gold",5e4]]]]};function Be(e,t){let a=e;return"epic_catalyst"===e?a=t[2]:"catalyst"===e&&(a=t[1]),$e.Z[a]||{id:a,name:a,src:a}}function Ne(e,t,a){var l=e||[],s=Le?.[t]?.[l.length];if(!s)return void console.error("No upgrade tree",l.length,t);const i=(0,Ee.y)(a);return s.map(((t,a)=>Object.assign({},e[a],{costs:t.map((e=>{const t=Be(e[0],i);return{item:t.id,name:t.name,src:t.src,_id:"",count:e[1]}}))})))}var Fe=a(5317),Re={name:"SkillDetails",props:{skillData:{type:Object,default:()=>({})},hero:{type:Object,default:()=>({})}},data(){return{cdn:O.cK,itemImgs:$e.Z,awakenedSkill:this.skillData.can_enhance,enhLevel:0}},computed:{skill(){return this.awakenedSkill&&this.skillData.awakened||this.skillData},enhancements(){return Ne(this.skill.enhancements||[],this.hero.rarity,this.hero.zodiac)||[]},skillDescriptionValues(){return this.skill.values.map((e=>{var t,a=0;for(t=0;t<e.length&&t<this.enhLevel+1;t++)a+=e[t];return a}))},skillDescription(){return(0,Fe.u)(this.skill.description,this.skillDescriptionValues)},soulburnDescription(){return(0,Fe.u)(this.skill.soul_description)},leveledSkillDetails(){let e,t=this.skill.cooldown||0,a=this.skill.soul_gain||0,l=this.skill.fighting_spirit_gain||0,s=this.skill.fighting_spirit_requirement||0,i=this.skill.focus_gain||0,r=this.skill.focus_requirement||0,o=this.skill.enhancements||[];function n(e,t){return e?e+t:e}for(var c=0;c<this.enhLevel&&c<o.length;c++)switch(e=o[c].value,o[c].string){case"enh_sk_cooldown":t=n(t,e);break;case"enh_soul_gain":a=n(a,e);break;case"enh_fighting_spirit_consumed":s=n(s,e);break;case"enh_fighting_spirit_gain":l=n(l,e);break}return{cooldown:t,soul_gain:a,focus_gain:i,focus_requirement:r,fs_gain:l,fs_requirement:s}}},methods:{toPercent(e){return Math.abs(e)<1?Math.round(1e4*e)/100+"%":e}}};const Qe=(0,A.Z)(Re,[["render",Ce]]);var Je=Qe,Ge={name:"HeroSkills",components:{Skill:Je},props:{hero:{type:String},heroData:{type:Object,default:()=>({})}}};const Xe=(0,A.Z)(Ge,[["render",ce]]);var et=Xe;const tt={class:"skill-header"},at={class:"icon-box"},lt=["src"],st=["src"],it={class:"header"},rt={class:"flex",style:{"flex-wrap":"wrap"}};function ot(e,t,a,i,r,o){const n=(0,l.up)("EEOptions");return(0,l.wg)(),(0,l.iD)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.exclusive,((t,i)=>((0,l.wg)(),(0,l.iD)("div",{key:i},[(0,l._)("div",tt,[(0,l._)("div",at,[(0,l._)("img",{src:r.cdn+"/img/_itembg_private.png",style:{position:"absolute","z-index":"-1"}},null,8,lt),(0,l._)("img",{src:r.cdn+"/item/icon_eq_exclusive_"+a.heroData.id+".png"},null,8,st)]),(0,l._)("div",it,[(0,l._)("h3",null,(0,s.zw)(t.name),1),(0,l._)("div",null,(0,s.zw)(e.$t("strings."+t.stat.type))+": "+(0,s.zw)(t.stat.value<=1?100*t.stat.value+" %":t.stat.value)+" - "+(0,s.zw)(t.stat.value<=1?2*t.stat.value*100+" %":2*t.stat.value),1)])]),(0,l._)("div",rt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.skills,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:"skill"+t,class:"col-1 col-lg-3 col-xxl-3",style:{"min-height":"100px",padding:"10px"}},[(0,l.Wm)(n,{skill:e,hero:a.heroData},null,8,["skill","hero"])])))),128))])])))),128))])}const nt={class:"skill-box"},ct={class:"skill-header"},dt={class:"icon-box"},gt=["src"],ut={class:"header"},_t=["innerHTML"];function mt(e,t,a,i,r,o){return(0,l.wg)(),(0,l.iD)("div",nt,[(0,l._)("div",ct,[(0,l._)("div",dt,[(0,l._)("img",{src:e.cdn+"/skill/sk_"+a.hero.id+"_"+o.heroSkill.skill+".png"},null,8,gt)]),(0,l._)("div",ut,[(0,l._)("h3",null,(0,s.zw)(o.heroSkill.name),1),(0,l._)("div",null,"Skill "+(0,s.zw)(a.skill.skill),1)])]),(0,l._)("div",{innerHTML:o.formattedSkill},null,8,_t)])}var pt={props:{skill:{type:Object,default:()=>({})},hero:{type:Object,default:()=>({})}},computed:{heroSkill(){try{return this.hero.skills[this.skill.skill-1]||{}}catch(e){return{}}},formattedSkill(){return(0,Fe.u)(this.skill.description)}}};const ht=(0,A.Z)(pt,[["render",mt]]);var kt=ht,vt={components:{EEOptions:kt},props:{exclusive:{required:!1},heroData:{required:!1}},data(){return{cdn:O.cK}}};const yt=(0,A.Z)(vt,[["render",ot]]);var ft=yt;const wt={class:"flex relative",style:{"flex-wrap":"wrap"}},Dt={key:0,class:"content-box flex-fill"},xt={class:"full-h full-w skill-box relative",style:{margin:"5px"}},St={class:"noselect",style:{position:"absolute",bottom:"5px",right:"5px","pointer-events":"none"}},zt=["data-src"],bt=["data-src"],qt=["data-src"],Ut={class:"text-center"},It=["data-src"],Ht=(0,l._)("br",null,null,-1),Kt=(0,l._)("hr",null,null,-1),Zt={class:"aw-stat-increase"},Wt=["data-src"],Tt={class:"text-center flex-fill",style:{"font-size":"1.2em"}},Mt=["src"];function Vt(e,t,a,i,r,o){const n=(0,l.Q2)("lazyloader"),c=(0,l.Q2)("tooltip");return(0,l.wg)(),(0,l.iD)("div",wt,[r.error?((0,l.wg)(),(0,l.iD)("div",Dt,(0,s.zw)(r.error),1)):(0,l.kq)("",!0),a.zodiac_tree?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.zodiac_tree,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"col-2 col-lg-3 col-xxl-6",style:{padding:"10px"},key:e},[(0,l._)("div",xt,[(0,l._)("div",St,[(0,l.wy)((0,l._)("img",{"data-src":o.getImg("hero_lv"),style:{height:"1.5rem"}},null,8,zt),[[n]]),(0,l.wy)((0,l._)("img",{"data-src":o.getImg("hero_lv_"+(t+1)),style:{height:"1.5rem"}},null,8,bt),[[n]]),(0,l.wy)((0,l._)("img",{"data-src":o.getImg("hero_lv_0"),style:{height:"1.5rem"}},null,8,qt),[[n]])]),(0,l._)("div",Ut,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.costs,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{key:t,style:{display:"inline-block",padding:"0 5px"}},[(0,l.wy)((0,l._)("img",{"data-src":e.src,style:{height:"3rem"}},null,8,It),[[n]]),Ht,(0,l._)("span",null,"x "+(0,s.zw)(e.count),1)])),[[c,e.name||""]]))),128))]),Kt,(0,l._)("div",Zt,[2===t?((0,l.wg)(),(0,l.iD)("div",{key:t},"Skill upgrade")):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.stats,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[(0,l.wy)((0,l._)("img",{"data-src":o.getStatIcon(e.stat),class:"inline-icon-image"},null,8,Wt),[[n]]),(0,l.Uk)(" "+(0,s.zw)(o.translateStats(e.stat))+" +"+(0,s.zw)(o.toPercent(e.value)),1)])))),128))])])])))),128)),(0,l._)("div",Tt,[(0,l.Uk)(" Total: "),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.totalMaterials,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("span",{key:"total"+t,style:{"margin-right":"10px"}},[(0,l._)("img",{src:e.src,class:"inline-icon-image"},null,8,Mt),(0,l.Uk)(" x"+(0,s.zw)(e.count),1)])),[[c,e.name||""]]))),128))])],64)):(0,l.kq)("",!0)])}var Pt={name:"HeroAwakenings",props:{hero:{type:String},heroData:{},zodiac_tree:{type:Array}},data(){return{error:null}},computed:{totalMaterials(){if(!this.zodiac_tree)return[];var e={};return this.zodiac_tree.forEach((t=>{t.costs.forEach((t=>{e[t.name]||(e[t.name]={name:t.name,src:t.src,count:0}),e[t.name].count+=t.count}))})),e}},created(){},methods:{toPercent(e){return e<1?Math.round(1e4*e)/100+"%":e},getImg(e){return O.cK+"img/"+e+".png"},getItemIcon(e){return O.cK+"item/"+e+".png"},getStatIcon(e){var t=e;return-1!=t.indexOf("hp")?t="max_hp":-1!=t.indexOf("att")?t="att":-1!=t.indexOf("def")?t="def":-1!=t.indexOf("spd")?t="speed":-1!=t.indexOf("cri_dmg")?t="cri_dmg":-1!=t.indexOf("cri")?t="cri":-1!=t.indexOf("acc")?t="acc":-1!=t.indexOf("res")?t="res":-1!=t.indexOf("coop")&&(t="coop"),O.cK+"/img/cm_icon_stat_"+t+".png"},translateStats:le.Z}};const jt=(0,A.Z)(Pt,[["render",Vt]]);var Ot=jt;const Yt={key:0,class:"flex",style:{"flex-wrap":"wrap"}},At={key:0,class:"full-h full-w content-box"},Ct=(0,l._)("hr",null,null,-1),Et={class:"upgrades"};function $t(e,t,a,i,r,o){return r.tree?((0,l.wg)(),(0,l.iD)("div",Yt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.tree,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"col-3 col-lg-3 col-xxl-3",style:{padding:"10px"}},[e?((0,l.wg)(),(0,l.iD)("div",At,[(0,l._)("div",null,(0,s.zw)(e.string),1),Ct,(0,l._)("div",Et,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.enhancements,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t}," +"+(0,s.zw)(o.formatNumber(t.value))+" "+(0,s.zw)(e.enhance_string),1)))),128))])])):(0,l.kq)("",!0)])))),128))])):(0,l.kq)("",!0)}function Lt(e){return e<1?Math.round(1e4*e)/100+"%":e}var Bt={methods:{formatNumber:Lt},props:{heroData:{}},data(){return{tree:this.heroData?.specialty_change?.tree}}};const Nt=(0,A.Z)(Bt,[["render",$t]]);var Ft=Nt;const Rt={class:"flex flex-wrap content-box",style:{"flex-wrap":"wrap","max-width":"1200px"}},Qt={class:"col-1 col-lg-2"},Jt=["src"],Gt={class:"stat-value"},Xt=["src"],ea={class:"stat-value"},ta=["src"],aa={class:"stat-value"},la=["src"],sa={class:"stat-value"},ia=["src"],ra={class:"stat-value"},oa=["src"],na={class:"stat-value"},ca=["src"],da={class:"stat-value"},ga=["src"],ua={class:"stat-value"},_a=["src"],ma={class:"stat-value"},pa=(0,l._)("br",null,null,-1),ha=["src"],ka={class:"stat-value"},va=["src"],ya={class:"stat-value"},fa=["src"],wa={class:"stat-value"},Da={class:"col-1 col-lg-2"},xa={class:"text-center"},Sa=["src"],za={style:{margin:"20px 30px"}},ba={style:{color:"orangered",display:"inline-block",width:"60px"}},qa={class:"text-center"},Ua=(0,l._)("br",null,null,-1),Ia=(0,l._)("br",null,null,-1),Ha=(0,l._)("br",null,null,-1),Ka=(0,l._)("br",null,null,-1),Za=(0,l._)("br",null,null,-1);function Wa(e,t,a,i,r,o){const n=(0,l.up)("Checkbox");return(0,l.wg)(),(0,l.iD)("div",Rt,[(0,l._)("div",Qt,[(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("att"),class:"inline-icon-image"},null,8,Jt),(0,l.Uk)((0,s.zw)(e.$t("strings.atk")),1),(0,l._)("span",Gt,(0,s.zw)(o.computedStats.atk),1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("def"),class:"inline-icon-image"},null,8,Xt),(0,l.Uk)((0,s.zw)(e.$t("strings.def")),1),(0,l._)("span",ea,(0,s.zw)(o.computedStats.def),1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("max_hp"),class:"inline-icon-image"},null,8,ta),(0,l.Uk)((0,s.zw)(e.$t("strings.hp")),1),(0,l._)("span",aa,(0,s.zw)(o.computedStats.hp),1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("speed"),class:"inline-icon-image"},null,8,la),(0,l.Uk)((0,s.zw)(e.$t("strings.spd")),1),(0,l._)("span",sa,(0,s.zw)(o.computedStats.spd),1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("cri"),class:"inline-icon-image"},null,8,ia),(0,l.Uk)((0,s.zw)(e.$t("strings.cri")),1),(0,l._)("span",ra,(0,s.zw)(o.formatPerecent(o.computedStats.chc))+"%",1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("cri_dmg"),class:"inline-icon-image"},null,8,oa),(0,l.Uk)((0,s.zw)(e.$t("strings.chd")),1),(0,l._)("span",na,(0,s.zw)(o.formatPerecent(o.computedStats.chd))+"%",1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("acc"),class:"inline-icon-image"},null,8,ca),(0,l.Uk)((0,s.zw)(e.$t("strings.eff")),1),(0,l._)("span",da,(0,s.zw)(o.formatPerecent(o.computedStats.eff))+"%",1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("res"),class:"inline-icon-image"},null,8,ga),(0,l.Uk)((0,s.zw)(e.$t("strings.efr")),1),(0,l._)("span",ua,(0,s.zw)(o.formatPerecent(o.computedStats.efr))+"%",1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("coop"),class:"inline-icon-image"},null,8,_a),(0,l.Uk)((0,s.zw)(e.$t("strings.dac")),1),(0,l._)("span",ma,(0,s.zw)(o.formatPerecent(o.computedStats.dac))+"%",1)]),pa,(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("cri_res"),class:"inline-icon-image"},null,8,ha),(0,l.Uk)("Critical Hit Resistance"),(0,l._)("span",ka,(0,s.zw)(o.formatPerecent(o.computedStats.cri_res))+"%",1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("dodge"),class:"inline-icon-image"},null,8,va),(0,l.Uk)("Evasion"),(0,l._)("span",ya,(0,s.zw)(o.formatPerecent(o.computedStats.dodge))+"%",1)]),(0,l._)("div",null,[(0,l._)("img",{src:o.getStatIcon("hit_chance"),class:"inline-icon-image"},null,8,fa),(0,l.Uk)("Hit Chance"),(0,l._)("span",wa,(0,s.zw)(o.formatPerecent(o.computedStats.hit_chance))+"%",1)])]),(0,l._)("div",Da,[(0,l._)("div",xa,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.starsLevel,((e,t)=>((0,l.wg)(),(0,l.iD)("img",{key:"star-level"+t,src:e},null,8,Sa)))),128))]),(0,l._)("div",za,[(0,l._)("div",ba,"Lv. "+(0,s.zw)(this.lvl),1),(0,l.wy)((0,l._)("input",{class:"full-w",type:"range","onUpdate:modelValue":t[0]||(t[0]=e=>r.lvl=e),min:"1",max:"60",style:{"vertical-align":"middle"}},null,512),[[de.nr,r.lvl,void 0,{number:!0}]])]),(0,l._)("div",qa,[(0,l.Wm)(n,{modelValue:r.awakened,"onUpdate:modelValue":t[1]||(t[1]=e=>r.awakened=e),"true-value":!0},{default:(0,l.w5)((()=>[(0,l.Uk)("Awakened")])),_:1},8,["modelValue"]),a.heroData.specialty_change?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[Ua,(0,l.Wm)(n,{modelValue:r.scTree,"onUpdate:modelValue":t[2]||(t[2]=e=>r.scTree=e)},{default:(0,l.w5)((()=>[(0,l.Uk)("Maxed Specialty Tree")])),_:1},8,["modelValue"])],64)):(0,l.kq)("",!0),Ia,(0,l.Wm)(n,{modelValue:r.selfImprint,"onUpdate:modelValue":t[3]||(t[3]=e=>r.selfImprint=e)},{default:(0,l.w5)((()=>[(0,l.Uk)("Self Imprint (SSS)")])),_:1},8,["modelValue"]),o.hasSkillBoost?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[Ha,(0,l.Wm)(n,{"true-value":!0,modelValue:r.skillBoost,"onUpdate:modelValue":t[4]||(t[4]=e=>r.skillBoost=e)},{default:(0,l.w5)((()=>[(0,l.Uk)("Skill bonus (+15)")])),_:1},8,["modelValue"])],64)):(0,l.kq)("",!0),a.heroData.ex_equip?.length?((0,l.wg)(),(0,l.iD)(l.HY,{key:2},[Ka,(0,l.Wm)(n,{"true-value":!0,modelValue:r.ee_equiped,"onUpdate:modelValue":t[5]||(t[5]=e=>r.ee_equiped=e)},{default:(0,l.w5)((()=>[(0,l.Uk)("EE Equiped (Awakened + Level >= 50)")])),_:1},8,["modelValue"])],64)):(0,l.kq)("",!0),Za,(0,l.Wm)(n,{"true-value":!0,modelValue:r.speedSetBonus,"onUpdate:modelValue":t[6]||(t[6]=e=>r.speedSetBonus=e)},{default:(0,l.w5)((()=>[(0,l.Uk)("Speed Set Bonus")])),_:1},8,["modelValue"])])])])}var Ta=a(4618),Ma=a(1163),Va={name:"HeroStats",components:{Checkbox:Ta.Z},props:{heroData:{},imprint:{type:Object,default:()=>({})},zodiacTree:{type:Array,default:()=>[]}},data(){return{lvl:60,awakened:!0,scTree:!0,selfImprint:!1,skillBoost:!0,ee_equiped:!1,speedSetBonus:!1,reverse:{}}},methods:{reverseStats(e,t,a,l,s){var i=Math.floor(e)||1;return{BRA:Math.round(t/(e/6+1)/(1+.075*(i-1))/.6),INT:Math.round((a/(e/3+1)/(1+.075*(i-1))-50)/1.4),FAI:Math.round((l/(e/8+1)/(1+.075*(i-1))-30)/.3),DES:1.6*(s-60)}},formatPerecent(e){return(100*e).toFixed(1)},getStatIcon(e){return O.cK+"/img/cm_icon_stat_"+e+".png"}},computed:{hasSkillBoost(){return this.heroData.skills.some((e=>e.stats.length))},starsLevel(){const e=Math.max(Math.ceil(this.lvl/10),this.heroData.rarity||1),t=this.awakened?Math.floor(this.lvl/10):0;return new Array(6).fill(O.cK+"img/cm_icon_star_e.png").map(((a,l)=>l<e?l<t?O.cK+"img/cm_icon_star_j.png":O.cK+"img/cm_icon_star.png":a))},computedStats(){return(0,Ma.Z)({rarity:this.heroData?.rarity,level:Number(this.lvl),awakened:!!this.awakened&&this.zodiacTree,specialty_tree:!!this.scTree&&this.heroData?.specialty_change?.tree,imprint:!!this.selfImprint&&this.imprint.self_devotion,skills:!!this.skillBoost&&this.heroData.stats.skills,ex_equip:!!this.ee_equiped&&this.heroData.stats.ex_equip?.[0],speedSet:this.speedSetBonus,stats:this.heroData.stats})}}};const Pa=(0,A.Z)(Va,[["render",Wa]]);var ja=Pa;const Oa=["data-src"];function Ya(e,t,a,i,r,o){const n=(0,l.Q2)("lazyloader");return(0,l.wg)(),(0,l.iD)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.skins,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:e.id},[(0,l.wy)((0,l._)("img",{"data-src":o.getImage(t)},null,8,Oa),[[n]]),(0,l._)("span",null,(0,s.zw)(e.name||"No skin name provided"),1),(0,l._)("span",null,(0,s.zw)(e.description||"No skin description provided"),1)])))),128))])}var Aa={name:"HeroSkins",props:{skins:{required:!1,default:()=>[]}},methods:{getImage(e){return O.cK+"/face/"+this.skins[e].id+"_su.png"}}};const Ca=(0,A.Z)(Aa,[["render",Ya]]);var Ea=Ca,$a=a(2784),La=a(8439),Ba=a(2177),Na={dev:{max_hp_g3_s4:120,att_g3_s4:24,def_g3_s4:12,def_rate_g4_s4:.024,def_rate_g4_s2:.029,def_rate_g5_s4:.036,def_rate_g5_s2:.043,att_rate_g4_s2:.029,att_rate_g4_s4:.024,att_rate_g5_s2:.043,att_rate_g5_s4:.036,cri_g4_s2:.043,cri_g4_s4:.036,cri_g5_s2:.058,cri_g5_s4:.048,speed_g5_s4:4,speed_g4_s4:3,speed_g4_s2:4,speed_g3_s4:2,max_def_rate_g4_s2:.029,max_hp_rate_g4_s4:.024,max_hp_rate_g4_s2:.029,max_hp_rate_g5_s4:.036,max_hp_rate_g5_s2:.043,acc_g4_s2:.043,acc_g4_s4:.036,acc_g5_s2:.058,acc_g5_s4:.048,res_g4_s2:.043,res_g4_s4:.036,res_g5_s2:.058,res_g5_s4:.048,coop_g4_s4:.007,coop_g5_s2:.009,coop_g5_s4:1},self:{max_hp_g3:180,att_g3:36,def_g3:18,res_g3:.045,max_hp_rate_g5:.06,max_hp_rate_g4:.04,def_rate_g4:.04,def_rate_g5:.06,att_rate_g4:.04,att_rate_g5:.06,cri_g3:.028,cri_g4:.042,cri_g5:.056,res_g4:.068,res_g5:.09,acc_g5:.09,acc_g4:.068,acc_g3:.045,coop_g3:.009,coop_g4:.014,coop_g5:.02}};function Fa(e){if(e){var t=["Z","D","C","B","A","S","SS","SSS"];t.splice(0,(e.rarity||5)-2);var a,l={self_devotion:{},devotion:{}},s=e.devotion?.slots?.filter((e=>0!=e)).length;return e.devotion&&(a=Na.dev[e.devotion?.type+"_g"+e.rarity+"_s"+s])&&(e.devotion.grades={})&&t.forEach(((e,t)=>{l.devotion[e]=a+t*(a/2)})),e.self_devotion&&(a=Na.self[e.self_devotion?.type+"_g"+e.rarity])&&(e.self_devotion.grades={})&&t.forEach(((e,t)=>{l.self_devotion[e]=a+t*(a/2)})),console.log(l),l}}var Ra=a(2559),Qa={name:"HeroDetailsIndex",components:{PageTitle:w.Z,SectionTitle:D.Z,Tag:x.Z,Profile:E,Imprint:re,Skills:et,Exclusive:ft,Awakenings:Ot,SpecialtyTree:Ft,HeroStats:ja,Skins:Ea},props:{heroProp:{}},data(){return{hero:this.heroProp||this.$route.params.id,heroData:null}},created(){this.hero instanceof Object?(this.heroData=this.hero,this.hero=this.hero._id):(0,$a.Z)(O.hi+"/getItem?list=hero&id="+this.hero).then((e=>{var t=JSON.parse(e);this.heroData=t,(0,Ba.Z)({title:t.name+" | CeciliaBot",description:t.description,icon:O.cK+"face/"+t.id+"_s.png"})})).catch((e=>{console.error(e)}))},computed:{heroImgSu(){return this.heroData?this.heroData.id?O.cK+"/face/"+this.heroData.id+"_su.png":O.cK+"/tmp/face/"+(this.heroData._id||this.heroData.name)+"_su.png":""},characterName(){return this.heroData.name},tags(){return this.heroData.tags.map((e=>La.pJ[e]||"TAG_"+e))},imprintData(){const e=this.heroData,t=Fa(this.heroData);return{devotion:{type:e.devotion.type,slots:e.devotion.slots,grades:t.devotion},self_devotion:{type:e.self_devotion.type,grades:t.self_devotion}}},zodiac_tree(){try{var e=this.heroData;return(0,Ra.Z)(e.rarity,e.role,e.zodiac,e.attribute)}catch(t){return console.error(t),[]}}}};const Ja=(0,A.Z)(Qa,[["render",f]]);var Ga=Ja}}]);