(function(){"use strict";var e={368:function(e,t,i){i.d(t,{Nz:function(){return a},Qf:function(){return o},ZP:function(){return n}});i(7658);function n(){return r("#")}function a(e){s("#",e)}function o(){return r("?")}function s(e="#",t){var i=t;Array.isArray(i)||(i=[i]);var n=window.location.href.split(e);n[n.length-1]=n[n.length-1].replace(new RegExp("("+i.join("|")+")[^&,]*","g"),""),window.history.replaceState(history.state,"",n.filter((e=>e)).join(e))}function r(e="#"){var t="",i=window.location.href.split(e);t=i[i.length-1]||"";var n={_stringHash:t};return t.split(/,|&/g).forEach((e=>{var t=e.split("=");n[t[0]]=void 0==t[1]||t[1]})),n}function l(e,t,i){var n=window.location.href.split(e);1===n.length&&n.push(""),i&&"#"===e&&n.length<3&&n.push("");var a=n.pop().split(/,|&/g).map((e=>{var t=e.split("=");return[t[0],void 0==t[1]||t[1]]})).filter((e=>e[0]));for(var o in t){for(var s,r=t[o],l=0;l<a.length;l++)if(a[l][0]===o){a[l][1]=r,s=!0;break}s||a.push([o,r])}n.push(a.map((e=>e.join("="))).join("&")),window.history.replaceState(history.state,"",n.filter((e=>e)).join(e))}window.setURLParams=l},2599:function(e,t,i){var n=i(9963),a=i(6252),o=i(3577);const s={class:"container",style:{"font-family":"'Titillium Web', 'Roboto', sans-serif"}},r={class:"flex full-h full-w"},l={id:"main-content-wrapper",class:"flex-fill overflow-auto relative",style:{}},c=(0,a._)("img",{style:{height:"100px"},src:"https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2Fras-run-slow.gif?v=1632241290215"},null,-1),d=(0,a._)("div",{class:"invisible-background"},null,-1),f={class:"mobile-headbar glass-container"},u=(0,a._)("i",{class:"fa fa-bars"},null,-1),m=[u],p=(0,a._)("span",null," CeciliaBot ",-1),h={id:"app_content",class:"full-h full-w main-content"};function g(e,t,i,u,g,b){const v=(0,a.up)("SideMenu"),w=(0,a.up)("router-view"),y=(0,a.Q2)("ripple-effect");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",r,[(0,a.Wm)(v,{ref:"side-menu","current-path":b.currentPage},null,8,["current-path"]),(0,a._)("div",l,[(0,a.wy)((0,a._)("div",{id:"loading",class:"noselect loading-container animatefade absolute full-h full-w",onContextmenu:t[0]||(t[0]=(0,n.iM)((()=>{}),["prevent"]))},[c,(0,a.Wm)(n.uT,{name:"slide-fade",mode:"out-in"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)("div",{key:b.loadingText,style:{"font-size":"32px",color:"white","text-shadow":"0px 0px 3px grey, 0 0 10px black, 0 0 10px black","line-height":"30px","padding-top":"12px","margin-left":"20px"}},(0,o.zw)(b.loadingText),1))])),_:1})],544),[[n.F8,b.loading]]),d,(0,a._)("div",f,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("button",{class:"material-button basic basic",name:"Menu",style:{height:"45px",width:"45px"},onClick:t[1]||(t[1]=(...e)=>b.openSideMenu&&b.openSideMenu(...e))},m)),[[y]]),p]),(0,a._)("div",h,[(0,a.Wm)(w)])])])])}var b=i(8753),v=i(2177);const w={class:"pad-5 side-website-title-block"},y=(0,a._)("i",{class:"fa fa-times",style:{"font-size":"0.9em"}},null,-1),_=[y],k={class:"no-flex-shrink side-icon pad-5 text-center menu-option-icon"},x={"data-src":"/favicons/android-chrome-192x192.png",style:{height:"1.5em","vertical-align":"middle"},alt:"website-icon"},j={class:"hide-collapsed flex-fill pad-5 text-ellipsis side-text text-black-stroke"},C=(0,a._)("div",{class:"separator margin-5 round-s"},null,-1),P={class:"flex-fill hide-scrollbar overflow-auto pad-5"},E={class:"flex flex-col flex-fill"},S=["innerHTML"],T={class:"hide-collapsed no-flex-shrink flex-fill pad-5 text-ellipsis side-text"},O={key:0,class:"beta-label"},A=(0,a._)("div",{class:"hide-collapsed no-flex-shrink pad-5 side-text"},null,-1),M=(0,a._)("div",{class:"separator margin-5 round-s hide-mobile-side"},null,-1),D={class:"pad-5 hide-mobile-side"},B={class:"no-flex-shrink side-icon pad-5 text-center menu-option-icon"},L=(0,a._)("polyline",{fill:"none",id:"Down",points:"17.9 5 10.9 12 17.9 19",stroke:"inherit","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},null,-1),Z=(0,a._)("line",{fill:"none",stroke:"inherit","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",x1:"6.1",x2:"6.1",y1:"5",y2:"19"},null,-1),$=[L,Z],z=(0,a._)("div",{class:"hide-collapsed no-flex-shrink flex-fill pad-5 text-ellipsis side-text"}," Collapse menu ",-1),H=(0,a._)("div",{class:"mobile-menu-background"},null,-1);function I(e,t,i,s,r,l){const c=(0,a.up)("router-link"),d=(0,a.Q2)("lazyloader"),f=(0,a.Q2)("tooltip");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{ref:"main-menu",class:(0,o.C_)(["main-side-menu flex flex-col justify-center noselect overflow-hidden",{collapsed:e.isClosed}]),tabindex:"-1"},[(0,a._)("div",w,[(0,a._)("div",{class:"close-side-menu-button text-center pointer",onClick:t[0]||(t[0]=(...e)=>l.loseFocus&&l.loseFocus(...e))},_),(0,a.Wm)(c,{to:"/",class:"home-button flex normalize-link relative items-center justify-between font-bold",onClick:l.loseFocus},{default:(0,a.w5)((()=>[(0,a._)("div",k,[(0,a.wy)((0,a._)("img",x,null,512),[[d]])]),(0,a._)("div",j,(0,o.zw)(e.$t("strings.app_title")),1)])),_:1},8,["onClick"])]),C,(0,a._)("div",P,[(0,a._)("div",E,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.options,(t=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(c,{key:t,to:t.link,onClick:l.handleOption,class:(0,o.C_)(["side-option flex normalize-link relative items-center justify-between margin-5 round-s pointer",{disabled:t.disabled,"active-path":l.activeMainPath==t}])},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"no-flex-shrink side-icon pad-5 text-center no-events menu-option-icon",innerHTML:t.icon},null,8,S),(0,a._)("div",T,[(0,a._)("span",null,(0,o.zw)(t.name()),1),t.beta?((0,a.wg)(),(0,a.iD)("span",O," BETA ")):(0,a.kq)("",!0)]),A])),_:2},1032,["to","onClick","class"])),[[n.F8,!t.beta||e.isBeta],[f,()=>l.optionTooltip(t),"right"]]))),128))])]),M,(0,a._)("div",D,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{class:"side-option flex relative items-center justify-between margin-5 round-s pointer",onClick:t[1]||(t[1]=(...e)=>l.collapseMenu&&l.collapseMenu(...e))},[(0,a._)("div",B,[((0,a.wg)(),(0,a.iD)("svg",{style:(0,o.j5)(["vertical-align: text-top; transition: transform .2s ease;",{transform:e.isClosed?"scale(-1)":""}]),width:"1.3em",height:"1.3em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},$,4))]),z])),[[f,()=>l.optionTooltip({name:"Expand menu"}),"right"]])])],2),H],64)}var N=i(6468),F=(i(368),{props:{currentPath:{type:String,default:""},pwa:{default:!0}},watch:{},computed:{activeMainPath(){var e,t="/"+this.currentPath;for(e=0;e<this.options.length;e++){let i=this.options[e];if(-1!=i.link.indexOf(t))return this.handleAutoCollapse(i),i}return this.handleAutoCollapse(this.options[0]),this.options[0]}},created(){this.isBeta=!0},data:function(){return{campImage:N,isClosed:!1,isBeta:!1,wasManuallyCollapsed:!1,options:[{icon:'<i class="fas fa-home"></i>',name:()=>"Home",link:"/"},{icon:'<i class="fas fa-info-circle"></i>',name:()=>this.$t("strings.app_official_game_info"),link:"/official-info/"},{icon:'<i class="fa fa-users"></i>',name:()=>"Heroes",link:"/hero/",beta:!0},{icon:'<i class="fa fa-bolt"></i>',name:()=>"Artifacts",link:"/artifacts/",beta:!0},{icon:'<i class="fas fa-database"></i>',name:()=>"Database",link:"/database/",beta:!0},{icon:'<i class="fa fa-history"></i>',name:()=>this.$t("strings.app_timeline"),link:"/timeline/",shrink:!0},{icon:'<i class="fa fa-history"></i>',name:()=>this.$t("strings.app_ultimate_timeline"),link:"/ultimate-timeline/",shrink:!0},{icon:'<svg viewBox="0 0 200 240" style="display: inline-block; vertical-align: top; height: 28px;"><use href="'+i(6468)+'#root" /></svg>',name:()=>this.$t("strings.app_camp_simulator"),link:"/camping-simulator/",shrink:!0},{icon:'<i class="fa fa-star-and-crescent"></i>',name:()=>"Summon Simulator",link:"/summon-simulator/"},{icon:'<i class="fa fa-trophy"></i>',name:()=>this.$t("strings.app_tier_list_maker"),link:"/tierlist-maker/",shrink:!0},{icon:'<i class="fa fa-id-card"></i>',name:()=>this.$t("strings.credits"),link:"/credits/"}]}},methods:{collapseMenu(){this.wasManuallyCollapsed=!this.isClosed,this.isClosed=!this.isClosed},loseFocus(){document.activeElement.blur()},handleAutoCollapse(e){e.shrink?this.isClosed=!0:this.wasManuallyCollapsed||(this.isClosed=!1)},focus(){this.$refs["main-menu"].focus()},handleOption(){this.loseFocus()},optionTooltip(e){return{value:e.name,disabled:!this.isClosed}}}}),W=i(3744);const V=(0,W.Z)(F,[["render",I]]);var R=V,U={provide:{cdn:b.cK,api:b.hi,setMeta:v.Z,mainContainerWrapper:function(){return document.getElementById("main-content-wrapper")}},components:{SideMenu:R},data:function(){return{VERSION:1}},methods:{setLoading:function(e,t){this.$store.commit("loading",[e,t])},openSideMenu(){this.$refs["side-menu"].focus()}},computed:{currentPage(){return this.$route.path.split("/").filter((e=>e))[0]},loading:function(){return this.$store.state.loading[0]},loadingText:function(){return this.$store.state.loading[1]}},created:async function(){console.log("%c!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n! DO NOT USE / COPY THE CECILIABOT API WITHOUT PERMISSION !\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!","font-size: 24px; color: red;"),console.log("%cCeciliaBot","font-size: 30px"),console.log(`%cVersion: ${this.VERSION}`,"color: red"),console.log("Mobile:",this.$store.state.isMobile)}};const q=(0,W.Z)(U,[["render",g]]);var K=q,Q=i(5217),Y=i(2201),J=i(9234);const G=[{path:"/",name:"home",component:()=>i.e(5177).then(i.bind(i,2424)),meta:{name:"Home",description:"A collection of tools for Epic Seven. Hero and Artifact database, Camping Simulator, Timeline, Tier List Maker.",social_img:""}},{path:"/home.beta",title:"Home",name:"home_beta",component:()=>i.e(2128).then(i.bind(i,3147))},{path:"/official-info/",name:"app_official_game_info",component:()=>i.e(8585).then(i.bind(i,9883)),meta:{name:"Official Links",description:"Links to official Epic Seven resources.",social_img:""}},{path:"/hero/:id",title:"Hero Details",name:"details",component:()=>Promise.all([i.e(5117),i.e(6504),i.e(2279)]).then(i.bind(i,6504)),meta:{name:"Hero Details",description:"View details for a specific hero.",social_img:""}},{path:"/hero",name:"hero",component:()=>Promise.all([i.e(5135),i.e(3409),i.e(4892)]).then(i.bind(i,4097)),meta:{name:"Heroes",description:"Database of all the units available in Epic Seven.",social_img:""}},{path:"/hero-stats-sheet",name:"hero-stats",component:()=>Promise.all([i.e(5135),i.e(5117),i.e(3409),i.e(6781)]).then(i.bind(i,4236)),meta:{name:"Hero Stats",description:"Table of character stats.",social_img:""}},{path:"/artifacts/:id",name:"art-details",component:()=>Promise.all([i.e(4458),i.e(7457)]).then(i.bind(i,4458)),meta:{name:"Artifact Details",description:"View details for a specific artifact.",social_img:""}},{path:"/artifacts",name:"artifacts",component:()=>Promise.all([i.e(5135),i.e(3409),i.e(7500),i.e(8017)]).then(i.bind(i,7356)),meta:{name:"Artifacts",description:"Database of all the artifacts available in Epic Seven.",social_img:""}},{path:"/database/voice-actors/:id",name:"voice-actor",component:()=>i.e(5011).then(i.bind(i,5011)),meta:{name:"Voice Actor",description:"Epic Seven voice actor details.",social_img:""}},{path:"/database/voice-actors",title:"Voice Actors",name:"voice-actors",component:()=>i.e(8018).then(i.bind(i,8018)),meta:{name:"Voice Actors",description:"List of voice actors and their roles in Epic Seven.",social_img:""}},{path:"/database/buffs/:id",name:"buff",component:()=>Promise.all([i.e(7500),i.e(5512)]).then(i.bind(i,9096)),meta:{name:"Buff",description:"Buff details.",social_img:""}},{path:"/database/buffs",name:"buffs",component:()=>i.e(5413).then(i.bind(i,5413)),meta:{name:"Buffs",description:"List of positive skill effects in Epic Seven.",social_img:""}},{path:"/database/debuffs/:id",name:"debuff",component:()=>Promise.all([i.e(7500),i.e(1196)]).then(i.bind(i,361)),meta:{name:"Debuffs",description:"Debuff details.",social_img:""}},{path:"/database/debuffs",name:"debuffs",component:()=>i.e(3346).then(i.bind(i,3346)),meta:{name:"Buffs",description:"List of negative skill effects in Epic Seven.",social_img:""}},{path:"/database/google-doc-multiplier-spreadsheet",name:"multi-doc-spreadsheet",component:()=>i.e(2852).then(i.bind(i,2852)),meta:{name:"Multiplier Spreadsheet",description:"Document containing all the skill multipliers.",social_img:""}},{path:"/database",name:"database",component:()=>i.e(8667).then(i.bind(i,8667)),meta:{name:"Database",description:"Databases for Heroes, Artifacts, Buffs, Debuffs and Voice Actors in Epic Seven.",social_img:""}},{path:"/summon-simulator",name:"app_summon_simulator",component:()=>i.e(5582).then(i.bind(i,5506)),meta:{name:"Summon Simulator",description:"Test your luck in the Epic Seven summon simulator!",social_img:""}},{path:"/db-editor",title:"Database Editor",name:"Database Editor",component:()=>Promise.all([i.e(5135),i.e(5117),i.e(6504),i.e(4458),i.e(8571),i.e(1670)]).then(i.bind(i,5503))},{path:"/ultimate-timeline",name:"app_ultimate_timeline",component:()=>Promise.all([i.e(8571),i.e(8485)]).then(i.bind(i,1622)),meta:{name:"Ultimate Timeline",description:"Detailed Timeline of all the Events and Banners in Epic Seven.",social_img:""}},{path:"/timeline",name:"app_timeline",component:()=>i.e(3831).then(i.bind(i,4263)),meta:{name:"Timeline",description:"Mobile friendly Timeline of Banners and Mystic Banners for Epic Seven.",social_img:""}},{path:"/camping-simulator",name:"app_camp_simulator",component:()=>Promise.all([i.e(6434),i.e(8297)]).then(i.bind(i,5432)),meta:{name:"Camping Simulator",description:"Optimize your labyrinth runs with the Camping Simulator and find the best morale for your heroes.",social_img:""}},{path:"/tierlist-maker",name:"app_tier_list_maker",component:()=>Promise.all([i.e(6434),i.e(6659)]).then(i.bind(i,4643)),meta:{name:"Tier List Maker",description:"Build your Tier List with this easy to use Tier List Maker optimized for Epic Seven, for both Heroes and Artifacts always updated.",social_img:""}},{path:"/credits",name:"credits",component:()=>Promise.all([i.e(6434),i.e(6659)]).then(i.bind(i,8828)),meta:{name:"Credits",description:"About CeciliaBot.",social_img:""}},{path:"/:pathMatch(.*)*",name:"app_not_found",component:()=>i.e(2772).then(i.bind(i,7966)),meta:{name:"Page not found",description:"Error 404.",social_img:""}}];var X=G;const ee=(0,Y.p7)({history:(0,Y.r5)(),routes:X});ee.beforeEach(((e,t,i)=>{window.$loadingPageProgress(15),Q.Z.commit("loading",!0),i()})),ee.afterEach(((e,t,i)=>{Q.Z.commit("loading",!1),i||((0,v.Z)({title:e.params.id||e.meta.name,description:e.meta.description}),window.gtag&&(window.gtag("set","page_path",window.location.pathname+"#"+e.path),window.gtag("event","page_view")),window.$loadingPageProgress(100))}));var te=i(5089),ie=i(2229),ne=i(1830),ae=i(2710),oe=i(2784);const se={};function re(e){return Array.isArray(e)?obj=e.reduce(((e,t,i)=>({...e,[i]:t})),{}):e}function le(e,t){return t.json&&(e=JSON.parse(e)),t.objectify&&(e=re(e)),e}function ce(e,t={json:!0,objectify:!1}){return new Promise(((i,n)=>{if(se[e])return i(le(se[e],t));(0,oe.Z)(e).then((n=>{se[e]=n,i(le(n,t))})).catch((e=>{n(e)}))}))}var de={install:function(e){e.config.globalProperties.$gameData={hero:{list:()=>ce(b.hi+"/getList?list=hero"),get:e=>ce(b.hi+"/getItem?list=hero&id="+e)},artifact:{list:()=>ce(b.hi+"/getList?list=artifact"),get:e=>ce(b.hi+"/getItem?list=artifact&id="+e)},buff:{list:()=>ce(b.hi+"/getList?list=buff"),get:e=>ce(b.hi+"/getItem?list=buff&id="+e)},debuff:{list:()=>ce(b.hi+"/getList?list=debuff"),get:e=>ce(b.hi+"/getItem?list=debuff&id="+e)},common:{list:()=>ce(b.hi+"/getList?list=common"),get:e=>ce(b.hi+"/getItem?list=common&id="+e)},voiceActors:{list:()=>ce(b.hi+"/getList?list=va"),get:e=>ce(b.hi+"/getItem?list=va&id="+e)},skin:{list:()=>ce(b.hi+"/getList?list=skin"),get:e=>ce(b.hi+"/getItem?list=skin&id="+e)}}}},fe=i(5845),ue=i(5134),me=i(7482),pe=i(4474),he=i(9165),ge=i(5561),be=document.createElement("div");be.style.cssText="z-index: 999; position: fixed; top: 0; left: 0; opacity: 0; height: .3rem; background: var(--font-color-primary); width: 0; transition: all ease .3s",document.body.appendChild(be);const ve=function(e){be.style.opacity="1",be.style.width=e+"%",e>=100&&setTimeout((()=>{be.style.opacity="0",setTimeout((()=>be.style.width=0),200)}),200)};var we={install(e){e.config.globalProperties.$loadingPageProgress=ve,window.$loadingPageProgress=ve}};window.i18n=J.ZP,(0,n.ri)(K).use(ee).use(J.ZP).use(Q.Z).use(de).use(fe.Z).use(ue.Z).use(me.Z).use(ae.Z).use(pe.Z).use(we).directive("tooltip",te.Z).directive("lazyloader",ie.ZP).directive("ripple-effect",ne.Z).component("HeroIcon",he.Z).component("MobileFloatingMenu",ge.Z).mount("#app")},2177:function(e,t,i){function n(e={}){document.title=e.title?e.title+" | CeciliaBot":"CeciliaBot",document.querySelector('meta[name="description"]').setAttribute("content",e.description)}i.d(t,{Z:function(){return n}})},8753:function(e,t,i){i.d(t,{cK:function(){return a},hi:function(){return n},ot:function(){return o}});const n="https://cecilia-bot-api.vercel.app/api/v1",a="https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/",o=["max_hp_rate","max_hp","att_rate","att","def_rate","def","speed","acc","res","cri","cri_dmg","coop"]},6468:function(e,t,i){e.exports=i.p+"img/campfire.0cdd667a.svg"}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,n,a,o){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],o=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(r=!1,o<s&&(s=o));if(r){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,a,o]}}(),function(){i.F={},i.E=function(e){Object.keys(i.F).map((function(t){i.F[t](e)}))}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};i.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var o=Object.create(null);i.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var r=2&a&&n;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){s[e]=function(){return n[e]}}));return s["default"]=function(){return n},i.d(o,s),o}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+({36:"changelog/views-timeline2---Copia-changelog-en-json",78:"locales/en-strings-json",251:"locales/th-heroes-json",320:"en-json",348:"locales/pt-heroes-json",1534:"locales/ja-artifacts-json",1670:"de2",1909:"PhotogalleryPlugin",2057:"changelog/views-tierlist-maker-changelog-en-json",2128:"hb",2279:"hero",2737:"locales/es-strings-json",2772:"wiki404",3359:"locales/th-artifacts-json",3708:"locales/zh-CN-artifacts-json",3770:"locales/zh-CN-strings-json",3831:"timeline",4378:"locales/pt-strings-json",4787:"locales/ko-artifacts-json",4892:"heroes",5177:"home",5582:"summon-simulator",5719:"locales/zh-CN-heroes-json",5734:"html2canvas.patched",5941:"locales/fr-heroes-json",6091:"locales/ko-heroes-json",6233:"locales/ja-heroes-json",6635:"locales/es-heroes-json",6659:"tier-list-maker",6781:"hero-sheet",6856:"locales/ko-strings-json",6921:"locales/es-artifacts-json",6977:"locales/ja-strings-json",7457:"artifact",7950:"locales/pt-artifacts-json",8017:"artifacts",8028:"locales/zh-TW-artifacts-json",8297:"camping",8485:"timeline2",8516:"locales/th-strings-json",8585:"official-game-info",9393:"changelog/views-timeline2-changelog-en-json",9402:"changelog/views-camping-simulator-changelog-en-json",9483:"changelog/views-timeline-changelog-en-json",9726:"locales/it-strings-json",9813:"locales/zh-TW-strings-json",9913:"locales/zh-TW-heroes-json"}[e]||e)+"."+{36:"aa864b0f",78:"ba15e9b3",251:"d8c250d3",320:"cba44acc",348:"6420da1f",690:"093dc561",807:"d6156a82",1196:"ce7bf6eb",1332:"913f3a59",1534:"b751f992",1670:"d6ab76ff",1909:"590579c5",2057:"4abba9ba",2128:"5dd2e39a",2279:"847d2a1b",2390:"f0879dc3",2737:"d6d603f6",2772:"6dbbad81",2852:"60b0ee37",3346:"823802b8",3359:"eae26c2b",3409:"34a1f40c",3708:"c2fc5d1d",3770:"7bfdaa32",3831:"5170c62c",3948:"2b5159b0",4138:"fd6175d3",4378:"e06d31a8",4386:"3d195c14",4458:"1b11f4e1",4787:"8dc9faec",4892:"d8cd97ae",5011:"97e2227e",5117:"9f557f15",5135:"9d88d3c3",5177:"335034f3",5413:"21096beb",5512:"982444c2",5582:"5d70d451",5714:"bf59c4f5",5719:"b35ef5ff",5734:"400b5283",5941:"da58f175",6091:"9f19e141",6233:"292c771d",6434:"21750e96",6504:"f0813ddd",6635:"7a506a83",6659:"36388d2c",6674:"1806d2c8",6781:"4e5c5ffa",6856:"fde9214b",6921:"172c58e0",6977:"b5830c23",7256:"db9b5b61",7457:"0bde4e04",7500:"1125f9a3",7515:"86a78b9e",7605:"674b52e8",7877:"b2bc0dc8",7937:"2f1cd72a",7950:"dde8fe0f",8017:"540c92ba",8018:"86393ba8",8028:"e7c059ea",8297:"13233f8b",8485:"fdb0ad14",8516:"89f0d1c6",8571:"f51faddc",8585:"874accbe",8667:"650a9d7a",9393:"b07c1980",9402:"d853bb74",9483:"b89cd468",9568:"3a2870cd",9726:"25266616",9813:"c65c5cc8",9913:"b612f4a4"}[e]+".js"}}(),function(){i.miniCssF=function(e){return"css/"+({1670:"de2",1909:"PhotogalleryPlugin",2128:"hb",2279:"hero",3831:"timeline",4892:"heroes",5177:"home",5582:"summon-simulator",6659:"tier-list-maker",6781:"hero-sheet",7457:"artifact",8017:"artifacts",8297:"camping",8485:"timeline2",8585:"official-game-info"}[e]||e)+"."+{690:"459f0784",1196:"df189ae1",1332:"bc286769",1670:"6b2c2066",1909:"2820b156",2128:"d36bea3b",2279:"c169c99e",2390:"5c6dc254",3346:"aa8b6136",3831:"ca49949b",3948:"459f0784",4138:"5c6dc254",4386:"8d59b828",4892:"174a3de5",5011:"aa02e69d",5177:"8c547f74",5413:"aa8b6136",5512:"df189ae1",5582:"8eb25017",5714:"5c6dc254",6659:"9ff10b8d",6781:"1b5a6e07",7256:"459f0784",7457:"2c25d718",7515:"459f0784",7605:"5c6dc254",7877:"5c6dc254",7937:"5c6dc254",8017:"458a87a8",8018:"aa8b6136",8297:"cdb1c5c3",8485:"cc1ba6b2",8585:"f1f21256",8667:"b932e38a",9568:"dccea557"}[e]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="v3:";i.l=function(n,a,o,s){if(e[n])e[n].push(a);else{var r,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var f=c[d];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+o){r=f;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.setAttribute("data-webpack",t+o),r.src=n),e[n]=[a];var u=function(t,i){r.onerror=r.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(i)})),t)return t(i)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.j=4826}(),function(){i.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,i,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var s=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=r,o.parentNode&&o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=s,o.href=t,i?i.parentNode.insertBefore(o,i.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var a=i[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){a=s[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=function(n){return new Promise((function(a,o){var s=i.miniCssF(n),r=i.p+s;if(t(s,r))return a();e(n,r,null,a,o)}))},a={4826:0};i.f.miniCss=function(e,t){var i={690:1,1196:1,1332:1,1670:1,1909:1,2128:1,2279:1,2390:1,3346:1,3831:1,3948:1,4138:1,4386:1,4892:1,5011:1,5177:1,5413:1,5512:1,5582:1,5714:1,6659:1,6781:1,7256:1,7457:1,7515:1,7605:1,7877:1,7937:1,8017:1,8018:1,8297:1,8485:1,8585:1,8667:1,9568:1};a[e]?t.push(a[e]):0!==a[e]&&i[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){i.b=document.baseURI||self.location.href;var e={4826:0};i.f.j=function(t,n){var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else if(/^(2279|4138)$/.test(t))e[t]=0;else{var o=new Promise((function(i,n){a=e[t]=[i,n]}));n.push(a[2]=o);var s=i.p+i.u(t),r=new Error,l=function(n){if(i.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,a[1](r)}};i.l(s,l,"chunk-"+t,t)}},i.F.j=function(t){if((!i.o(e,t)||void 0===e[t])&&!/^(2279|4138)$/.test(t)){e[t]=null;var n=document.createElement("link");i.nc&&n.setAttribute("nonce",i.nc),n.rel="prefetch",n.as="script",n.href=i.p+i.u(t),document.head.appendChild(n)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],r=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(l)var d=l(i)}for(t&&t(n);c<s.length;c++)o=s[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},n=self["webpackChunkv3"]=self["webpackChunkv3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e={2390:[5734],4138:[5734],5714:[5734],6659:[5734],7605:[5734],7877:[5734],7937:[5734]};i.f.prefetch=function(t,n){Promise.all(n).then((function(){var n=e[t];Array.isArray(n)&&n.map(i.E)}))}}();var n=i.O(void 0,[4998,3064],(function(){return i(2599)}));n=i.O(n)})();