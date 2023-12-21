(function(){"use strict";var e={989:function(e,t,i){var n=i(9963),o=i(6252),s=i(3577);const a={class:"container"},r=(0,o._)("img",{style:{height:"100px"},src:"https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2Fras-run-slow.gif?v=1632241290215"},null,-1);function c(e,t,i,c,l,h){const d=(0,o.up)("MainComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o.Wm)(d,{standalone:!0})]),(0,o.wy)((0,o._)("div",{id:"loading",class:"noselect loading-container animatefade",onContextmenu:t[0]||(t[0]=e=>e.preventDefault())},[r,(0,o.Wm)(n.uT,{name:"slide-fade",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)("div",{key:h.loadingText,style:{"font-size":"32px",color:"white","text-shadow":"0px 0px 3px grey, 0 0 10px black, 0 0 10px black","line-height":"30px","padding-top":"12px","margin-left":"20px"}},(0,s.zw)(h.loadingText),1))])),_:1})],544),[[n.F8,h.loading]])],64)}i(7658);var l=i(2122),h=i(5089),d=i(2229),u={name:"shop-overlay",props:["events","vertical","timelinelength","timelinedates","daysize","direction"],data:function(){return{initialRender:!1,timelineItems:[],isOpen:!1}},created:function(){},computed:{rdte:function(){return[0,1].filter((e=>e!==this.direction))[0]}},methods:{open:function(){this.isOpen=!0},close:function(){this.isOpen=!1},checkRender:function(){},dateDiff:function(e,t){if(!e||!t)return 1;let i=e,n=t;if(i>n){var o=i;i=n,n=o}return(new Date(n).getTime()-new Date(i).getTime())/864e5},getEvents:function(){}},render:function(){return(0,o.h)("section",{},[(0,o.h)("div",{class:"tshop-overlay-label noselect",onClick:()=>this.isOpen?this.close():this.open()},[(0,o.h)("div",{style:"font-size: 20px;line-height: 40px;"+(this.vertical?"height: 100vh;":"width: 100vw")},this.isOpen?[(0,o.h)("i",{class:["fas",this.vertical?"fa-angle-double-right":"fa-angle-double-down"]}),(0,o.h)("span","Hide shop rotations"),(0,o.h)("i",{class:["fas",this.vertical?"fa-angle-double-right":"fa-angle-double-down"]})]:[(0,o.h)("i",{class:["fas",this.vertical?"fa-angle-double-left":"fa-angle-double-up"]}),(0,o.h)("span","View shop rotations"),(0,o.h)("i",{class:["fas",this.vertical?"fa-angle-double-left":"fa-angle-double-up"]})])]),(0,o.h)("div",{class:["glass-container shop-timeline",{open:this.isOpen}],style:{[this.vertical?"height":"width"]:"100%"}},[this.events.map(((e,t)=>(0,o.h)("div",{class:"shop-row"},[e.map((e=>e.dt[1]?(0,o.h)("div",{class:"shop-rotation",style:{[this.vertical?"height":"width"]:this.dateDiff(e.dt[this.direction],e.dt[this.rdte],this.direction)*this.daysize+"px",[this.vertical?"top":"left"]:this.dateDiff(e.dt[this.direction],this.timelinedates[1!==this.direction?this.timelinedates.length-1:0])*this.daysize+"px"}},(e.a||e.c).map((e=>(0,o.wy)((0,o.h)("img",{src:0===t?"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/item_arti/icon_art0000.png":"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/c0000_s.png","data-src":0===t?this.$store.getters.getArtifactIcon(e.id):this.$store.getters.getHeroIcon(e.id),alt:"",crossorigin:"anonymous",SameSite:"Lax"}),[[d.ZP],[h.Z,()=>0===t?this.$store.getters.getArtifactName(e.id):this.$store.getters.getHeroName(e.id)]])))):null))])))])])}},f=i(3744);const g=(0,f.Z)(u,[["__scopeId","data-v-3762c516"]]);var p=g,m=i(5561),v=i(6163),y={name:"ctrlf-component",props:{events:{type:Array,required:!1,default:()=>[]},renderBox:{type:Boolean,required:!1,default:!0},searchFunction:{type:Function,required:!0},toDisplay:{type:Function,required:!0}},data:function(){return{render:!1,localRenderBox:!1,current:0,results:[],hideResultsBox:!1}},watch:{renderBox:{immediate:!0,handler:function(e){this.localRenderBox=e}}},computed:{mobile:function(){return!0}},created:function(){document.addEventListener("keydown",this.openCtrl,!0)},beforeUnmount:function(){document.removeEventListener("keydown",this.openCtrl,!0)},mounted:function(){},methods:{openCtrl:function(e){e.ctrlKey&&"f"===e.key&&(e.preventDefault(),this.render=!0,this.openSearchBar())},openSearchBar:function(){this.render=!0,this.focusInput(),this.selectInputContent()},focus:function(){this.focusInput(),this.selectInputContent()},focusInput:function(){this.$nextTick((()=>{this.$refs["input-search-box"].focus()}))},selectInputContent:function(){this.$nextTick((()=>{this.$refs["input-search-box"].select()}))},searchEvent:(0,v.Ds)((function(e){this.results=this.searchFunction(e.target.value),this.current=0,this.clickEvent(this.results[this.current])}),400),goToSearchEvent:function(e){this.results.length&&(this.current=e,this.current<0&&(this.current=this.results.length-1),this.current>this.results.length-1&&(this.current=0),this.clickEvent(this.results[this.current]))},clickEvent:function(e){this.$emit("event",e)},closeSearchBar:function(){this.render=!1}},render:function(){return(0,o.h)("div",{class:"search-box-pos",style:{display:this.render?"":"none"}},[(0,o.h)("div",{class:"ch-search-box"},[(0,o.h)("input",{ref:"input-search-box",onInput:e=>this.searchEvent(e),onKeydown:e=>{("enter"===e.key||13===e.keyCode)&&this.goToSearchEvent(this.current+1)},autocomplete:"off"}),(0,o.h)("div",{},Math.min(this.current+1,this.results.length)+"/"+this.results.length),(0,o.h)("span",{class:["fas fa-angle-up",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current+1)}),(0,o.h)("span",{class:["fas fa-angle-down",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current-1)}),(0,o.h)("span",{class:"fas fa-bars",onClick:()=>this.localRenderBox=!this.localRenderBox}),(0,o.h)("span",{class:"fas fa-times",onClick:()=>this.closeSearchBar()})]),this.localRenderBox?(0,o.h)("div",{class:["search-results-box",{hidebox:this.hideResultsBox}]},this.results.map(((e,t)=>(0,o.h)("div",{class:["item",{active:t===this.current}],onClick:()=>this.goToSearchEvent(t)},this.toDisplay(e))))):null])}};const b=y;var w=b,S=i(2784);function x(e,t){var i=new Date(new Date(e).toISOString().substr(0,10));t||(t=(new Date).toISOString().substr(0,10));var n=new Date(t);if(i>n){var o=i;i=n,n=o}var s=i.getFullYear(),a=s%4===0&&s%100!==0||s%400===0?29:28,r=[31,a,31,30,31,30,31,31,30,31,30,31],c=n.getFullYear()-s,l=n.getMonth()-i.getMonth();l<0&&(c--,l+=12);var h=n.getDate()-i.getDate();return h<0&&(l>0?l--:(c--,l=11),h+=r[i.getMonth()]),c+"Y "+l+"M "+h+"D"}var k;new Date("2022-09-29").getTime();var T={name:"timeline-main",components:{},props:["standalone"],data:function(){return{VERSION:1.15,events:[],timelineItems:[],vertical:!1,daySize:20,direction:0,today:"",openBanner:!1,openChangelog:!1,covenantShop:[],galaxyShop:[],powderShop:[],balance:[]}},beforeCreate:function(){},created:function(){this.toggleLoading(!0,"downloading"),Promise.all([(0,S.Z)("./data/timeline/covenant.json").catch((()=>"[]")),(0,S.Z)("./data/timeline/mystic.json").catch((()=>"[]")),this.$store.dispatch("GET_HERO_DB"),this.$store.dispatch("GET_ARTIFACT_DB")]).then((e=>{this.events=this.compatibilityModeDates([].concat(JSON.parse(e[0]),JSON.parse(e[1]))),this.today=(new Date).toISOString().substr(0,10),this.$nextTick((()=>{this.toggleLoading(!1)})),Promise.all([(0,S.Z)("./data/timeline/powder-shop.json").catch((()=>"[]")),(0,S.Z)("./data/timeline/galaxy-coin-shop.json").catch((()=>"[]")),(0,S.Z)("./data/timeline/covenant-coin-shop.json").catch((()=>"[]"))]).then((e=>{this.powderShop=this.compatibilityModeDates(JSON.parse(e[0])),this.galaxyShop=this.compatibilityModeDates(JSON.parse(e[1])),this.covenantShop=this.compatibilityModeDates(JSON.parse(e[2]))}))}))},beforeMount:function(){},mounted:function(){k=this.$refs.TIMELINE_CONTAINER,k.addEventListener("wheel",this.horizionatlScroll)},beforeUnmount:function(){k.removeEventListener("wheel",this.horizionatlScroll),k=null},watch:{timelineDates:function(){this.timelineItems=this.buildRenderArray(),this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))},direction:function(){this.loading().then((()=>{this.timelineItems=this.buildRenderArray(),this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))}))},vertical:function(e){this.direction=e?1:0,this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))}},computed:{mobile:function(){return this.$store.state.isMobile},timelineDates:function(){for(var e=[this.today],t=0;t<this.events.length;t++){let n=this.events[t].dt;if(n)for(var i=0;i<n.length;i++)e.includes(n[i])||e.push(n[i])}return e.sort(((e,t)=>e<t?1:e===t?0:-1)),e},timelinePixelLength:function(){return this.dateDiff(this.timelineDates[0],this.timelineDates[this.timelineDates.length-1])}},methods:{compatibilityModeDates(e){var t=e=>e<10?"0"+e:e;return e.forEach((e=>{e.dt=(e.dt||[]).map((e=>{var i=new Date(e);return i.getUTCFullYear()+"-"+t(i.getUTCMonth()+1)+"-"+t(i.getUTCDate())}))})),e},home:function(){this.$store.commit("toggleMainMenu")},toggleLoading:function(e,t){this.$store.commit("loading",e,t)},loading:function(e){return this.toggleLoading(!0,e),new Promise((e=>{setTimeout((()=>{e(),this.$nextTick((()=>{this.$store.commit("loading",!1)}))}),0)}))},getHero:function(e){return this.$store.getters.getHero(e)},getHeroName:function(e){return this.$store.getters.getHeroName(e)},getHeroIcon:function(e){return this.$store.getters.getHeroIcon(e)},getArtifact:function(e){return this.$store.getters.getArtifact(e)},getArtifactName:function(e){return this.$store.getters.getArtifactName(e)||""},getArtifactIcon:function(e){return this.$store.getters.getArtifactIcon(e)},showSearchBar:function(){this.$refs.ctrlf.openSearchBar()},searchFunction:function(e){const t=this.events;if(!t.length||!e)return[];const i=new RegExp("(\\b|-)"+e,"i");var n=[["Banner",this.events],["Powder Shop",this.powderShop],["Galaxy Coin",this.galaxyShop],["Covenant Coin",this.covenantShop]].map((e=>e[1].filter((e=>!(!e.name||!i.test(e.name))||(!(!e.c||!e.c.some((e=>i.test(this.getHeroName(e.id)))))||(!!(e.a&&e.a.length&&e.a.some((e=>i.test(this.getArtifactName(e.id)))))||void 0)))).map((t=>("Banner"===e[0]?(t.handler=()=>this.$refs["shop-timeline"].close(),t.resultName=t.c?t.c.map((e=>this.getHeroName(e.id))).join(", "):e[0]):(t.handler=()=>this.$refs["shop-timeline"].open(),t.resultName=e[0]),t))))).flat().sort(((e,t)=>e.dt[0]<t.dt[0]?1:e.dt[0]===t.dt[0]?0:-1));return n},searchToDisplay:function(e){return e.dt[0]+" - "+e.resultName},goToSearchResult:function(e){if(e){e.handler&&e.handler();var t=this.dateDiff(e.dt[this.direction],this.timelineDates[1!==this.direction?this.timelineDates.length-1:0]),i={top:0,left:0,behavior:"smooth"};this.vertical?i.top=t*this.daySize:i.left=t*this.daySize+100-window.innerWidth/2,k.scrollTo(i)}},goToDate:function(e){this.$refs[e].scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},horizionatlScroll:function(e){const t=k;if(this.vertical)return;const i=e.deltaY<0&&t.scrollLeft>0,n=e.deltaY>0&&t.scrollLeft<t.scrollWidth-t.clientWidth;(i||n)&&(t.scrollLeft+=e.deltaY)},onContextMenu:function(e){this.$contextmenu(e,[{name:"Direction",children:[{class:0===this.direction?"fa fa-check":"",name:"Normal",handler:()=>this.direction=0},{class:1===this.direction?"fa fa-check":"",name:"Reverse",handler:()=>this.direction=1}]},{name:"Orientation",children:[{class:this.vertical?"":"fa fa-check",name:"Horizontal",handler:()=>this.vertical=!1},{class:this.vertical?"fa fa-check":"",name:"Vertical",handler:()=>this.vertical=!0}]},{name:"Change Day Size",children:[15,20,30,40,50].map((e=>({class:this.daySize===e?"fa fa-check":"",name:e,handler:()=>this.setDaySize(e)})))},{class:"fas fa-map-marker-alt",name:this.$t("strings.scroll_to_today"),handler:()=>this.goToDate(this.today)},{class:"fa fa-search",name:this.$t("strings.search"),handler:()=>this.showSearchBar()}])},dateDiff:function(e,t){if(!e||!t)return 1;let i=e,n=t;if(i>n){var o=i;i=n,n=o}return(new Date(n).getTime()-new Date(i).getTime())/864e5},formatDate:function(e,t){if(!e)return"";var i=e.split(/-/g),n=i[2],o=["January","February","March","April","May","June","July","August","September","October","November","December"][Number(i[1])-1],s=i[0];return Number(n)+" "+o.slice(0,3)+" "+s+(t?" - "+t:"")},dayGraphSize:function(e,t){return this.daySize*this.dateDiff(e,t)},setDaySize:function(e){this.loading().then((()=>{this.daySize=e,this.timelineItems=this.buildRenderArray()}))},buildRenderArray:function(){const e=[0,1][this.direction||0],t=[0,1].filter((t=>t!==e))[0],i=(e,t)=>({date:e,size:1===this.direction?this.dayGraphSize(t,e):this.dayGraphSize(e,t),m:[],n:[],e:[]});var n=this.events,o=this.timelineDates.slice().reverse(),s=[];1===this.direction&&(o=o.reverse());for(var a=0;a<o.length;a++){s[a]||(s[a]=i(o[a],o[a+1]));for(var r=0;r<n.length;r++){var c=-1,l=n[r].dt[e]||n[r].dt[t],h="event"===n[r].type?"e":"mystic"===n[r].type?"m":"n";if(o[a]===l){n[r].dt[1]<this.today?n[r].bTooltip='Ended: <span style="color: #ff1919">'+x(n[r].dt[1],this.today)+"</span> ago":n[r].dt[0]>this.today?n[r].bTooltip='Starts: <span style="color: green">'+x(n[r].dt[0],this.today)+"</span>":n[r].bTooltip='Started: <span style="color: green">'+x(n[r].dt[0],this.today)+'</span> ago<br>Ends: <span style="color: #ff1919">'+x(n[r].dt[1],this.today)+"</span>",n[r].duration=this.dateDiff(n[r].dt[0],n[r].dt[1]),n[r].bannerClass="","limited"===n[r].type?n[r].bannerClass="limited":"mystic"===n[r].type?n[r].bannerClass="mystic":n[r].c&&n[r].c[0]&&(n[r].bannerClass=this.getHero(n[r].c[0].id).attribute),n[r].bannerSize=s[a].size-10;for(var d=0;d<s[a][h].length;d++)if(!s[a][h][d]){s[a][h][d]=n[r],c=d;break}-1===c&&(s[a][h].push(n[r]),c=s[a][h].length-1);var u=o.indexOf(n[r].dt[t])||1;for(d=a;d<u;d++)s[d]||(s[d]=i(o[d],o[d+1])),d!=a&&(n[r].bannerSize+=s[d].size),s[d][h][c]=n[r]}}}return s}},render:function(){return(0,o.h)("div",{style:"height: inherit",onContextmenu:this.onContextMenu},[this.openChangelog?(0,o.h)("div",{class:"center-modal",style:"position: absolute; z-index: 10;",onClick:e=>e.target===e.currentTarget?this.openChangelog=!this.openChangelog:null},[(0,o.h)("div",{class:"flat-modal glass-container-2",style:"padding: 10px; color: var(--font-color); overflow: auto;"},[(0,o.h)(l.Z,{path:"/views/timeline/",style:"height: auto;"})])]):null,(0,o.h)(m.Z,{mobile:this.mobile,options:[{title:this.$t("strings.search"),class:"fa fa-search",click:"search"},{title:this.$t("strings.scroll_to_today"),class:"fas fa-map-marker-alt",click:"goToday"},{title:this.$t("strings.vertical_toggle"),class:"fa fa-mobile "+(this.vertical?"fa-rotate-90":""),click:"vertical"},{title:this.$t("strings.changelog"),class:"fa fa-history",click:"changelog"},this.standalone?{}:{title:this.$t("strings.home"),class:"fa fa-home",click:"home"}],onSearch:()=>this.showSearchBar(),onGoToday:()=>this.goToDate(this.today),onHome:()=>this.home(),onVertical:()=>this.loading().then((()=>this.vertical=!this.vertical)),onChangelog:()=>this.openChangelog=!this.openChangelog,onLanguage:this.$localePicker}),(0,o.h)(w,{ref:"ctrlf",key:"ctrlf-timeline",mobile:this.mobile,events:this.events,toDisplay:this.searchToDisplay,searchFunction:this.searchFunction,onEvent:this.goToSearchResult}),(0,o.h)("div",{ref:"TIMELINE_CONTAINER",style:"height: inherit; width: inherit; overflow: auto;"},[(0,o.h)("ul",{class:this.vertical?"vtimeline":"timeline"},[(0,o.h)(p,{ref:"shop-timeline",events:[this.powderShop,this.galaxyShop,this.covenantShop],vertical:this.vertical,timelinedates:this.timelineDates,daysize:this.daySize,timelinelength:this.timelinePixelLength*this.daySize,direction:this.direction}),this.timelineItems.map(((e,t)=>(0,o.h)("li",{ref:e.date,key:e.date,class:{today:this.today===e.date},index:t,"data-date":this.$d(e.date,"short"),id:e.date,style:{[this.vertical?"height":"width"]:e.size+"px"}},[["m","n"].map((t=>(0,o.h)("section",{class:"wrapper-"+t,key:"wrapper-key-"+e.date+t},[e[t].map((t=>t.dt[this.direction||0]===e.date?(0,o.wy)((0,o.h)("div",{ref:t.id+"-"+e.date,key:t.id,class:"banner "+t.bannerClass,tabindex:0,"data-hero":t.c?t.c[0].id:"null",style:{[this.vertical?"height":"width"]:t.bannerSize+"px"}},[t.c?(0,o.h)("div",{class:"icon_container"},t.c.map((e=>(0,o.h)("div",{class:{isnew:e.new}},[(0,o.wy)((0,o.h)("img",{"data-src":this.getHeroIcon(this.getHero(e.id).id),src:"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/c0000_s.png",alt:"",crossorigin:"anonymous",SameSite:"Lax"}),[[d.ZP]])])))):null,t.name?(0,o.h)("span",{class:"banner-description"},t.name):null]),[[h.Z,{value:t.bTooltip}]]):(0,o.h)("div",{class:"banner dummy"})))])))])))])])])},renderError:function(){}};const j=(0,f.Z)(T,[["__scopeId","data-v-e94e0646"]]);var D=j,C=i(5217),$=i(849);function E(){var e,t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=window.innerHeight||document.documentElement.height||document.body.clientHeight;e=t<=600,C.Z&&(C.Z.commit("updateIsMobile",e),C.Z.commit("updateWindowSize",t),C.Z.commit("updateWindowHeight",i))}window.onresize=E;var O={components:{MainComponent:D},data:function(){return{VERSION:"1.0",memed:!1}},methods:{setLoading:function(e,t){this.$store.commit("loading",[e,t])},installPWA:function(){this.PWAButton.prompt(),this.PWAButton.userChoice.then((e=>{"dismissed"==e.outcome?console.log("Permission refused"):this.$set(this.$store.state,"installPWAButton",null)}))}},computed:{loading:function(){return this.$store.state.loading[0]},loadingText:function(){return this.$store.state.loading[1]}},created:async function(){if(console.log("%cCeciliaBot","font-size: 30px"),console.log(`%cVersion: ${this.VERSION}`,"color: red"),this.$store.commit("updateIsMobile",$.Z.any()),E(),console.log("Mobile:",this.$store.state.isMobile),Math.floor(100*Math.random())+1<5)return this.memed=!0;document.addEventListener("keydown",(e=>{"INPUT"!==e.target.tagName&&"TEXTAREA"!==e.target.tagName&&"true"!=e.target.contentEditable&&("Escape"!==e.key&&"m"!==e.key||this.openHome())}))}};const I=(0,f.Z)(O,[["render",c]]);var z=I,N=i(9234),M=i(1830),_=i(2710),Z=i(5845),A=i(5134),B=i(7482),P=i(9165);window.i18n=N.ZP;let R=(0,n.ri)(z);R.config.unwrapInjectedRef=!0,R.use(C.Z).use(N.ZP).use(Z.Z).use(A.Z).use(B.Z).use(_.Z).directive("tooltip",h.Z).directive("lazyloader",d.ZP).directive("ripple-effect",M.Z).component("HeroIcon",P.Z).component("MobileFloatingMenu",m.Z).mount("#app")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,s){if(!n){var a=1/0;for(h=0;h<e.length;h++){n=e[h][0],o=e[h][1],s=e[h][2];for(var r=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(r=!1,s<a&&(a=s));if(r){e.splice(h--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[n,o,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var s=Object.create(null);i.r(s);var a={};e=e||[null,t({}),t([]),t(t)];for(var r=2&o&&n;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){a[e]=function(){return n[e]}}));return a["default"]=function(){return n},i.d(s,a),s}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+{36:"changelog/views-timeline2---Copia-changelog-en-json",78:"locales/en-strings-json",251:"locales/th-heroes-json",348:"locales/pt-heroes-json",1534:"locales/ja-artifacts-json",2057:"changelog/views-tierlist-maker-changelog-en-json",2737:"locales/es-strings-json",3359:"locales/th-artifacts-json",3708:"locales/zh-CN-artifacts-json",3770:"locales/zh-CN-strings-json",4378:"locales/pt-strings-json",4787:"locales/ko-artifacts-json",5719:"locales/zh-CN-heroes-json",5941:"locales/fr-heroes-json",6091:"locales/ko-heroes-json",6233:"locales/ja-heroes-json",6635:"locales/es-heroes-json",6856:"locales/ko-strings-json",6921:"locales/es-artifacts-json",6977:"locales/ja-strings-json",7950:"locales/pt-artifacts-json",8028:"locales/zh-TW-artifacts-json",8516:"locales/th-strings-json",9393:"changelog/views-timeline2-changelog-en-json",9402:"changelog/views-camping-simulator-changelog-en-json",9483:"changelog/views-timeline-changelog-en-json",9726:"locales/it-strings-json",9813:"locales/zh-TW-strings-json",9913:"locales/zh-TW-heroes-json"}[e]+"."+{36:"aa864b0f",78:"ba15e9b3",251:"d8c250d3",348:"6420da1f",1534:"b751f992",2057:"4abba9ba",2737:"d6d603f6",3359:"eae26c2b",3708:"c2fc5d1d",3770:"7bfdaa32",4378:"e06d31a8",4787:"8dc9faec",5719:"b35ef5ff",5941:"da58f175",6091:"9f19e141",6233:"292c771d",6635:"7a506a83",6856:"fde9214b",6921:"172c58e0",6977:"b5830c23",7950:"dde8fe0f",8028:"e7c059ea",8516:"89f0d1c6",9393:"b07c1980",9402:"d853bb74",9483:"b89cd468",9726:"25266616",9813:"c65c5cc8",9913:"b612f4a4"}[e]+".js"}}(),function(){i.miniCssF=function(e){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="v3:";i.l=function(n,o,s,a){if(e[n])e[n].push(o);else{var r,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),h=0;h<l.length;h++){var d=l[h];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.setAttribute("data-webpack",t+s),r.src=n),e[n]=[o];var u=function(t,i){r.onerror=r.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(i)})),t)return t(i)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.j=3741}(),function(){i.p=""}(),function(){var e={3741:0};i.f.j=function(t,n){var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var s=new Promise((function(i,n){o=e[t]=[i,n]}));n.push(o[2]=s);var a=i.p+i.u(t),r=new Error,c=function(n){if(i.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",r.name="ChunkLoadError",r.type=s,r.request=a,o[1](r)}};i.l(a,c,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,a=n[0],r=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(c)var h=c(i)}for(t&&t(n);l<a.length;l++)s=a[l],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(h)},n=self["webpackChunkv3"]=self["webpackChunkv3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[4998,3064],(function(){return i(989)}));n=i.O(n)})();