(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0633":function(t){t.exports=JSON.parse('{"langCodes":["zh-TW"],"code":"zh-TW","name":"漢語","authors":["-"],"flag":""}')},"12d4":function(t,n,e){"use strict";e("d81d"),e("07ac"),e("a4d3"),e("e01a");var i,o,r={name:"snackbar",props:{},data:function(){return{ev:{},id:0}},computed:{mobile:function(){return this.$store.state.isMobile}},mounted:function(){},methods:{pushNotification:function(t){var n=this;this.id++;var e="N"+this.id;t.id=e,this.$set(this.ev,e,t),t.manual||(this.mobile,setTimeout((function(){n.$delete(n.ev,e)}),3e3))}},render:function(t){var n=this;return t("div",{class:"noselect",style:{zIndex:1e3,position:"fixed",top:0,right:0,height:0,"text-align":"center"}},[t("transition-group",{attrs:{name:"bounce"}},Object.values(this.ev).map((function(e){return t("div",{key:"snack"+e.id,staticClass:"snackbar snack-"+e.type,on:{click:function(){return n.$delete(n.ev,e.id)}}},[t("div",{staticClass:"content"},[t("i",{staticClass:"fa",class:{"fa-times-circle":"error"===e.type,"fa-check-circle":"success"===e.type,"fas fa-exclamation-circle":"info"===e.type,icon:!0}}),t("h3",{staticClass:"title"},e.title),t("p",{staticClass:"description",domProps:{innerHTML:e.description}})])])})))])}},s=r,a=(e("7116"),e("2877")),c=Object(a["a"])(s,i,o,!1,null,null,null);n["a"]=c.exports},"1a30":function(t){t.exports=JSON.parse('{"langCodes":["de-*"],"code":"de","name":"Deutsch","authors":["-"],"flag":""}')},"1e20":function(t,n,e){var i={"./ja/artifacts.json":["44c6","ja-artifacts-json"]};function o(t){if(!e.o(i,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[t],o=n[0];return e.e(n[1]).then((function(){return e.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id="1e20",t.exports=o},"25f3":function(t,n,e){"use strict";e("f7bc")},2615:function(t){t.exports=JSON.parse('{"langCodes":["en-*"],"code":"en","name":"English","authors":["Gio"],"flag":""}')},"3daf":function(t,n,e){"use strict";e.r(n);var i=e("2b0e"),o=document.getElementById("simple-tooltip");function r(t){var n=t.currentTarget,e=n.getAttribute("data-tooltip");o.style.display="block",o.style.opacity="0",o.children[1].innerHTML=e,window.requestAnimationFrame((function(){var t,e,i,r=n.getBoundingClientRect(),s=o.getBoundingClientRect(),a=r.left+r.width/2,c=s.width/2,u=o.children[0];window.innerWidth<a+c?(t=Math.min(window.innerWidth-s.width,r.right-s.width),u.style.right=Math.min(s.width/2-30,r.width/2-10)+"px",u.style.left="auto"):0>a-c?(t=Math.max(0,r.left),u.style.left=Math.min(s.width/2-30,r.width/2-10)+"px",u.style.right=""):(t=a-c,u.style.right="",u.style.left=""),0>=r.top-s.height-5?(e=r.bottom+2,i="bottom"):(e=r.top-s.height-5,i="top"),o.setAttribute("x-placement",i),o.style.transform="translate3d("+t+"px,"+e+"px,0)",o.style.opacity="1"}))}function s(){o.style.opacity="0",o.children[1].innerHTML="",o.style.display="none",o.style.transform=""}i["a"].directive("tooltip",{bind:function(t,n){t.setAttribute("data-tooltip",n.value),t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",s)},update:function(t,n){t.setAttribute("data-tooltip",n.value)},unbind:function(t){t.removeEventListener("mouseenter",r),t.removeEventListener("mouseleave",s)}})},4360:function(t,n,e){"use strict";e("b0c0"),e("d3b7"),e("159b");var i=e("2f62"),o=e("2b0e"),r=e("ab3e"),s=(e("fb6a"),e("ac1f"),e("5319"),function(t){return t.dt[0]&&t.c?t.id||(t.type.slice(0,1)+t.dt[0].replace(/-/g,"")+t.c[0].id.charAt(0)+t.c[0].id.slice(-4)).toUpperCase():""}),a=e("9225");o["a"].use(i["a"]);n["a"]=new i["a"].Store({state:{loading:[!0,"CONNECTING..."],mainMenu:!1,isMobile:!1,screenWidth:0,screenHeight:0,currentOpenBanner:null,HeroDB:null,ArtifactDB:null,banners:null,powderShop:null,indexedDB:null,pulls:null},getters:{getHero:function(t){return function(n){return t.HeroDB?t.HeroDB[n]||{id:n,_id:n,name:n,rarity:5,attribute:"fire",role:"knight"}:n}},getHeroName:function(t){return function(n){return t.HeroDB?a["a"].te("heroes."+n)?a["a"].t("heroes."+n):(t.HeroDB[n]||{}).name||n:n}},getHeroIcon:function(t){return function(n){return t.HeroDB?"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/"+(t.HeroDB[n]||{id:n}).id+"_s.png":n}},getArtifact:function(t){return function(n){return t.ArtifactDB[n]||{id:n,_id:n,name:n,rarity:5}}},getArtifactName:function(t){return function(n){return t.ArtifactDB?a["a"].te("artifacts."+n)?a["a"].t("artifacts."+n):(t.ArtifactDB[n]||{}).name||n:n}},getArtifactIcon:function(t,n){return function(t){var e=n.getArtifact(t).id;return"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/item_arti/icon_"+e+".png"}},getArtifactImage:function(t,n){return function(t){var e=n.getArtifact(t).id;return"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/item_arti/"+e+"_fu.png"}},getBannerPulls:function(t){return function(n){return t.pulls[n]||{}}},getRarityIcon:function(){return function(t){switch(t){default:return"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/cm_icon_star.png";case"all":return"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/label-all.png"}}},getRoleIcon:function(){return function(t){var n="https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/class/cm_icon_role_";switch(t){default:return n+t+".png";case"assassin":return n+"thief.png";case"manauser":return n+"soul-weaver.png";case"all":return"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/label-all.png"}}},getAttributeIcon:function(){return function(t){var n="https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/attribute/cm_icon_pro";switch(t){default:return n+t+".png";case"wind":return n+"earth.png";case"dark":return n+"mdark.png";case"all":return"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/label-all.png"}}}},mutations:{loading:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"CONNECTING...";o["a"].set(t.loading,0,n),o["a"].set(t.loading,1,e)},installPWAButton:function(t,n){o["a"].set(t,"installPWAButton",n)},toggleMainMenu:function(t){o["a"].set(t,"mainMenu",!t.mainMenu)},toggleBannerModal:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t.currentOpenBanner=n},updateIsMobile:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.isMobile=n},updateWindowSize:function(t,n){t.screenWidth=n},updateWindowHeight:function(t,n){t.screenHeight=n},updateHeroDB:function(t,n){t.HeroDB=n},updateArtifactDB:function(t,n){t.ArtifactDB=n},updateBanners:function(t,n){t.banners=n},updatePowderShop:function(t,n){t.powderShop=n},updateIndexedPulls:function(t,n){t.indexedDB=n},updateUserPulls:function(t,n){t.pulls=n},addUserPull:function(t,n){t.pulls&&o["a"].set(t.pulls,n.id,n)}},actions:{loading:function(t,n){var e=this;return this.$store.commit("loading",!0,n),new Promise((function(t){setTimeout((function(){t(),e.$nextTick((function(){e.$store.commit("loading",!1)}))}),0)}))},getHeroDB:function(t){return new Promise((function(n,e){if(t.state.HeroDB)return n(t.state.HeroDB);Object(r["a"])("./data/HeroDatabase.json").then((function(e){var i=JSON.parse(e);t.commit("updateHeroDB",i),n(i)})).catch((function(t){e(t)}))}))},getArtifactDB:function(t){return new Promise((function(n,e){if(t.state.ArtifactDB)return n(t.state.ArtifactDB);Object(r["a"])("./data/artifacts.json").then((function(e){var i=JSON.parse(e),o={};for(var r in i)o[i[r]._id]=i[r];t.commit("updateArtifactDB",i),n(o)})).catch((function(t){e(t)}))}))},getBanners:function(t){return new Promise((function(n,e){if(t.state.banners)return n(t.state.banners);Object(r["a"])("./data/timeline-items.json").then((function(e){var i=JSON.parse(e);i.forEach((function(t){"event"!=t.type&&(t.id=s(t))})),t.commit("updateBanners",i),n(i)})).catch((function(t){e(t)}))}))},getPowderShop:function(t){return new Promise((function(n,e){if(t.state.powderShop)return n(t.state.powderShop);Object(r["a"])("./data/powder-shop.json").then((function(e){var i=JSON.parse(e);t.commit("updatePowderShop",i),n(i)})).catch((function(t){e(t)}))}))},loadIndexedDB:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"timeline",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise((function(i,o){if(t.state.indexedDB)return i(t.state.indexedDB);var r=window.indexedDB.open(n,e);r.onerror=function(t){console.log("Error opening db",t),o("Error")},r.onsuccess=function(n){console.log("IDB Loaded"),t.commit("updateIndexedPulls",n.target.result),i(n.target.result)},r.onupgradeneeded=function(t){for(var n=[{name:"pulls",keyPath:"id"},{name:"tierlist",keyPath:"id"},{name:"camping",keyPath:"id"}],e=t.target.result,i=0;i<n.length;i++){var o=n[i];e.objectStoreNames.contains(o.name)||e.createObjectStore(o.name,{keyPath:o.keyPath})}}}))},loadUserDataDB:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"pulls";return new Promise((function(i,o){if(n||(n=t.state.indexedDB),t.state[e])i(t.state[e]);else{var r=n.transaction(e,IDBTransaction.READ_ONLY);r.oncomplete=function(){t.commit("updateUserPulls",a),i(a)};var s=r.objectStore(e),a={};s.openCursor().onsuccess=function(t){var n=t.target.result;n&&(a[n.value.id]=n.value,n.continue())},r.onerror=function(t){console.log(t),o(t)}}}))},savePullData:function(t,n){return new Promise((function(e,i){if(t.state.indexedDB){var o=t.state.indexedDB.transaction(["pulls"],"readwrite"),r=o.objectStore("pulls"),s=r.put(n);s.onerror=function(t){i("Error",t.target.error.name)},s.onsuccess=function(i){t.commit("addUserPull",n),e(i,!0)}}else i("Can't open database")}))},getBannerPulls:function(t,n){return new Promise((function(e,i){t.dispatch("loadIndexedDB").then((function(t){var o=t.transaction(["pulls"],IDBTransaction.READ_ONLY),r=o.objectStore("pulls"),s=r.get(n);s.onerror=function(){i({})},s.onsuccess=function(t){e(t.target.result,!0),console.log(t.target.result)}})).catch((function(){i({})}))}))},loadTierlistDB:function(t){return new Promise((function(n,e){t.dispatch("loadIndexedDB").then((function(t){var i=t.transaction("tierlist",IDBTransaction.READ_ONLY),o={};i.oncomplete=function(){n(o)};var r=i.objectStore("tierlist");r.openCursor().onsuccess=function(t){var n=t.target.result;n&&(o[n.value.id]=n.value,n.continue())},i.onerror=function(t){console.log(t),e(t)}})).catch((function(t){return e(t)}))}))},saveTierlist:function(t,n){return new Promise((function(e,i){t.dispatch("loadIndexedDB").then((function(t){var o=t.transaction(["tierlist"],"readwrite"),r=o.objectStore("tierlist"),s=r.put(n);s.onerror=function(t){i("Error",t.target.error.name)},s.onsuccess=function(t){e(t,!0)}})).catch((function(t){return i(t)}))}))},deleteTierlist:function(t,n){return new Promise((function(e,i){t.dispatch("loadIndexedDB").then((function(t){var o=t.transaction(["tierlist"],"readwrite"),r=o.objectStore("tierlist"),s=r.delete(n);s.onerror=function(t){i("Error",t.target.error.name)},s.onsuccess=function(t){e(t,!0)}})).catch((function(t){return i(t)}))}))}}})},"4b3c":function(t,n,e){},"52a7":function(t){t.exports=JSON.parse('{"langCodes":["th-*","tha-*"],"code":"th","name":"ภาษาไทย","authors":["-"],"flag":""}')},"70ec":function(t,n,e){"use strict";e("4de4"),e("d3b7"),e("b0c0"),e("99af"),e("d81d");var i,o,r=e("9225"),s={name:"lang-selector",props:["type"],data:function(){return{}},computed:{locale:function(){return this.$i18n.locale},availableLangs:function(){return this.$i18n._availableLocales},lang:function(){var t=this;return this.availableLangs.filter((function(n){return n.code===t.locale}))[0]||{}}},methods:{setLoading:function(t,n){this.$store.commit("loading",t,n)},loadLocaleMessages:function(t){var n=this;this.setLoading(!0,"GETTING LANGUAGE PACK..."),Object(r["b"])(t.code).then((function(){n.$route.name&&n.$route.name?document.title="".concat(n.$t("strings.".concat(n.$route.name))," | ").concat(n.$t("strings.app_cecilia_tools")):document.title="".concat(n.$t("strings.app_main_menu")," | ").concat(n.$t("strings.app_cecilia_tools")),n.setLoading(!1,"CONNECTING..."),document.activeElement.blur()}))}},render:function(t){var n=this;return t("div",{staticClass:"select-wrapper noselect",on:{click:function(t){return t.target.focus()}},attrs:{tabindex:0}},[t("div",{staticClass:"selected-lang"},[t("span",{staticClass:"flag-box flag-"+this.lang.code,style:{"margin-right":1===this.type?0:"5px"}}),1!==this.type?t("span",{style:"vertical-align: middle;"},this.lang.name):null,t("div",{staticClass:"select-options glass-container"},this.availableLangs.filter((function(t){return t.code!==n.locale})).map((function(e){return t("div",{staticClass:"option",on:{click:function(){return n.loadLocaleMessages(e)}}},[t("div",{staticClass:"flag-box flag-"+e.code}),t("div",{attrs:{value:e.code,selected:n.lang===e.code}},e.name)])})))])])}},a=s,c=(e("ceab"),e("2877")),u=Object(c["a"])(a,i,o,!1,null,"1eb1ebfa",null);n["a"]=u.exports},7116:function(t,n,e){"use strict";e("8928")},"795b":function(t,n,e){"use strict";e("ac1f"),e("466d");n["a"]={Android:function(){return null!=navigator.userAgent.match(/Android/i)},BlackBerry:function(){return null!=navigator.userAgent.match(/BlackBerry/i)},IOS:function(){return null!=navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return null!=navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return null!=navigator.userAgent.match(/IEMobile/i)},any:function(){return this.Android()||this.BlackBerry()||this.IOS()||this.Opera()||this.Windows()}}},"838c":function(t,n,e){},8928:function(t,n,e){},"89c3":function(t,n,e){var i={"./en/strings.json":["f750","en-strings-json"],"./es/strings.json":["6dc2","es-strings-json"],"./ja/strings.json":["1f1d","ja-strings-json"],"./ko/strings.json":["1198","ko-strings-json"],"./pt/strings.json":["df51","pt-strings-json"],"./th/strings.json":["4f96","th-strings-json"]};function o(t){if(!e.o(i,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[t],o=n[0];return e.e(n[1]).then((function(){return e.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id="89c3",t.exports=o},"8fe8":function(t,n){function e(t){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}))}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="8fe8"},9225:function(t,n,e){"use strict";e.d(n,"b",(function(){return u}));var i=e("3835"),o=(e("d81d"),e("d3b7"),e("ddb0"),e("caad"),e("3ca3"),e("2b0e")),r=e("a925");function s(t){return t.keys().map(t)}o["a"].use(r["a"]);var a=new r["a"]({locale:"en",fallbackLocale:"en",messages:{},silentTranslationWarn:!0});r["a"].prototype._availableLocales=s(e("94c6"));var c=[];function u(t){return c.length>0&&a.locale===t?Promise.resolve(t):c.includes(t)?(a.locale=t,Promise.resolve(t)):Promise.all([e("89c3")("./".concat(t,"/strings.json")).catch((function(){return{}})),e("c8d7")("./".concat(t,"/heroes.json")).catch((function(){return{}})),e("1e20")("./".concat(t,"/artifacts.json")).catch((function(){return{}})),e("8fe8")("./".concat(t,"/camping.json")).catch((function(){return{}}))]).then((function(n){var e=Object(i["a"])(n,4),o=e[0],r=e[1],s=e[2],u=e[3];return a.setLocaleMessage(t,{strings:o.default,heroes:r.default,artifacts:s.default,camping:u.default}),c.push(t),a.locale=t,Promise.resolve(t)})).catch((function(){return Promise.resolve(!1)}))}u(a.fallbackLocale),n["a"]=a},"94c6":function(t,n,e){var i={"./de/info.json":"1a30","./en/info.json":"2615","./es/info.json":"b85d","./ja/info.json":"9d59","./ko/info.json":"a671","./pt/info.json":"ec5f","./th/info.json":"52a7","./zh-TW/info.json":"0633","./zh/info.json":"b5fb"};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=r,t.exports=o,o.id="94c6"},"9d04":function(t,n,e){"use strict";e("d3b7"),e("159b"),e("d81d"),e("b0c0");var i,o,r,s,a,c=250,u={name:"child-context",props:["options","parent","visible","direction"],data:function(){return{focused:-1,left:null,top:null,currDirection:0}},watch:{visible:function(t){1!=t||this.left||this.top||this.positionSubmenu()}},methods:{positionSubmenu:function(){var t,n,e=this.parent.x,i=this.parent.y;1===this.direction?(e-c<0&&e+c<=window.innerWidth?(t=c,this.currDirection=0):e-c>0?(t=-c,this.currDirection=1):t=-c-(e-c),this.currDirection=1):e+2*c>window.innerWidth&&e-c>=0?(t=-c,this.currDirection=1):e+2*c<=window.innerWidth?(t=c,this.currDirection=0):(t=c-(e+2*c-window.innerWidth),this.currDirection=0),n=i+60*this.options.length>window.innerHeight?-60*(this.options.length-1)+4:-8,this.left=t,this.top=n},leftOptionBox:function(t){this.focused===t&&(this.focused=-1)},clickedOption:function(t,n){n.handler&&(this.$emit("clickOption",t,n),this.focused=-1)}},render:function(t){var n=this;return t("div",{staticClass:"contextual-menu glass-container",style:{display:this.visible?"":"none",position:"absolute",top:this.top+"px",left:this.left+"px","background-color":"#212121"}},this.options.map((function(e,i){return t("div",{staticClass:"option-wrapper",style:{color:e.color},on:{click:function(t){return n.clickedOption(t,e)},mouseenter:function(){return n.focused=i},mouseleave:function(){return n.leftOptionBox(i)}}},[t("div",{staticClass:"context-icon "+e.class}),t("div",{staticClass:"context-label"},e.name),e.children?[t("i",{staticClass:"fas fa-angle-right context-more"}),t(h,{props:{options:e.children,visible:n.focused===i,parent:{x:n.parent.x+n.left,y:n.parent.y+n.top+60*i},direction:n.currDirection},on:{clickOption:function(t,e){return n.clickedOption(t,e)}}})]:null])})))}},l=u,d=e("2877"),f=Object(d["a"])(l,i,o,!1,null,null,null),h=f.exports,p={name:"ContextualMenu",data:function(){return{x:0,y:0,show:!1,focused:-1,options:[]}},created:function(){document.body.addEventListener("click",this.clickOff)},beforeDestroy:function(){document.body.removeEventListener("click",this.clickOff)},watch:{},computed:{},methods:{setVisible:function(t){this.show=t},reopen:function(t){var n=this;this.show=!1,this.focused=-1,this.options=[],this.$nextTick((function(){n.show=!0,n.options=t}))},setPosition:function(t){var n=this;this.y=t.clientY,this.x=t.clientX,this.$nextTick((function(){var e={height:60*n.options.length,width:250};n.x+e.width>window.innerWidth&&(n.x=t.clientX-e.width),n.y+e.height>window.innerHeight&&(n.y=t.clientY-e.height)}))},setOptions:function(){},insideClick:function(t,n){if(!n||n.children)return t.stopPropagation();n.handler&&(n.handler(),this.clickOff())},clickOff:function(){this.show=!1,this.focused=-1,this.options.forEach((function(t){delete t.children,delete t.handler}))}},render:function(t){var n=this;return t("div",{staticClass:"contextual-menu glass-container noselect",class:{hidden:!this.show,visible:this.show},style:{left:this.x+"px",top:this.y+"px"},on:{click:this.insideClick}},[this.options.map((function(e,i){return t("div",{staticClass:"option-wrapper",style:{color:e.color},on:{click:function(t){return n.insideClick(t,e)},mouseenter:function(){return n.focused=i}}},[t("div",{staticClass:"context-icon "+e.class}),t("div",{staticClass:"context-label"},e.name),e.children?[t("i",{staticClass:"fas fa-angle-right context-more"}),t(h,{props:{options:e.children,visible:n.focused===i,parent:{x:n.x,y:n.y-8+60*i},direction:0},on:{clickOption:function(t,e){return n.insideClick(t,e)}}})]:null])}))])}},g=p,m=(e("c46c"),Object(d["a"])(g,r,s,!1,null,null,null)),v=m.exports,b={show:function(t,n){t.preventDefault(),t.stopPropagation(),a.reopen(n),a.setPosition(t)},hide:function(){a.show=!1,a.options=[]},install:function(t){var n=t.extend(v),e=new n;e.$mount(),document.body.appendChild(e.$el),a=e,t.prototype.$contextmenu=b}};n["a"]=b},"9d59":function(t){t.exports=JSON.parse('{"langCodes":["ja-*"],"code":"ja","name":"日本語","authors":["-"],"flag":""}')},a671:function(t){t.exports=JSON.parse('{"langCodes":["ko-*"],"code":"ko","name":"한국어","authors":["-"],"flag":""}')},ab3e:function(t,n,e){"use strict";e("d3b7");n["a"]=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",e=arguments.length>2?arguments[2]:void 0;return new Promise((function(i,o){var r=new XMLHttpRequest;r.open(n,t),r.onload=function(){this.status>=200&&this.status<300?i(r.response):o({status:this.status,statusText:r.statusText})},r.onerror=function(){o({status:this.status,statusText:r.statusText})},r.send(e)}))}},b5fb:function(t){t.exports=JSON.parse('{"langCodes":["zh-*"],"code":"zh","name":"汉语","authors":["-"],"flag":""}')},b85d:function(t){t.exports=JSON.parse('{"langCodes":["es-*"],"code":"es","name":"Español","authors":["-"],"flag":""}')},c46c:function(t,n,e){"use strict";e("4b3c")},c8d7:function(t,n,e){var i={"./en/heroes.json":["a585","en-heroes-json"],"./es/heroes.json":["1478","es-heroes-json"],"./ja/heroes.json":["3a93","ja-heroes-json"],"./ko/heroes.json":["c873","ko-heroes-json"],"./pt/heroes.json":["24fd","pt-heroes-json"],"./th/heroes.json":["d334","th-heroes-json"]};function o(t){if(!e.o(i,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[t],o=n[0];return e.e(n[1]).then((function(){return e.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id="c8d7",t.exports=o},ceab:function(t,n,e){"use strict";e("838c")},ec5f:function(t){t.exports=JSON.parse('{"langCodes":["pt-*"],"code":"pt","name":"Portuguese","authors":["-"],"flag":""}')},f7bc:function(t,n,e){},fb0c:function(t,n,e){"use strict";e.r(n);e("d3b7"),e("159b");var i=e("2b0e"),o=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var n=t.target,e=n.getAttribute("data-src");return e&&(n.onload=function(t){t.target.style.opacity="";var n=t.target.previousSibling;n&&"IMG"===n.tagName&&n.getAttribute("data-lazy-fader")&&(n.style.opacity=0),t.target.onload=null},n.setAttribute("src",e),n.removeAttribute("data-src")),void o.unobserve(n)}}))}),{rootMargin:"0px",threshold:0});i["a"].directive("lazyloader",{bind:function(t){o.observe(t)},update:function(t){var n=t.getAttribute("data-src");n&&(t.style.opacity=0,o.observe(t))},unbind:function(t){o.unobserve(t)}})}}]);