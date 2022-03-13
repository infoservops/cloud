define(["./chunks/vendor-62f8e512","./chunks/index-4425091f"],(function(e,t){"use strict";var i=new class{providers;constructor(){this.providers=[]}addProvider(e){this.providers.push(e)}get availableProviders(){return this.providers.filter((e=>e.available))}};const r={name:"SearchBar",filters:{truncate:e.truncate},data:()=>({term:"",optionsVisible:!1,activeProvider:void 0,providerStore:i}),computed:{availableProviders(){return this.providerStore.availableProviders},searchLabel(){return this.$gettext("Enter search term")}},watch:{$route(){this.activeProvider&&!this.activeProvider.available&&(this.activeProvider=void 0)}},mounted(){const t=this.$el.getElementsByTagName("input")[0],i=e.get(this,"$route.query.term");t&&i&&(this.term=i,t.value=i)},asyncComputed:{searchResults:{get(){return this.optionsVisible&&this.activeProvider&&this.activeProvider.previewSearch&&this.activeProvider.previewSearch.available?this.activeProvider.previewSearch.search(this.term):[]},watch:["term","activeProvider","optionsVisible"]}},created(){window.addEventListener("keyup",this.onEvent),window.addEventListener("focusin",this.onEvent),window.addEventListener("click",this.onEvent)},beforeDestroy(){window.removeEventListener("keyup",this.onEvent),window.removeEventListener("focusin",this.onEvent),window.removeEventListener("click",this.onEvent)},methods:{updateTerm(e){this.term=e,this.activeProvider.updateTerm(e)},resetProvider(){this.optionsVisible=!1,this.availableProviders.forEach((e=>e.reset()))},activateProvider(e){this.optionsVisible=!1,this.activeProvider=e,e.activate(this.term)},onEvent(e){this.activeProvider||(this.activeProvider=this.availableProviders[0]);const t=this.optionsVisible,i=this.$el.contains(e.target),r=e.target.classList.contains("oc-search-clear"),s=38===e.keyCode,a=40===e.keyCode,n=13===e.keyCode,o=27===e.keyCode,d=this.availableProviders.indexOf(this.activeProvider);if(e.stopPropagation(),this.optionsVisible=!r&&!o&&i,!this.optionsVisible)return;if(n)return void this.activateProvider(this.activeProvider);let c;if((s||a)&&this.availableProviders.length>0&&t){const e=a?d<this.availableProviders.length-1:d>0,t=a?0:this.availableProviders.length-1,i=a?d+1:d-1;c=e?i:t}isNaN(c)||c===d||(this.activeProvider=this.availableProviders[c])}}};var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.availableProviders.length?i("div",{class:{"options-visible":e.optionsVisible&&e.term},attrs:{id:"files-global-search"}},[i("oc-search-bar",{ref:"search",attrs:{id:"files-global-search-bar",label:e.searchLabel,"type-ahead":!0,placeholder:e.searchLabel,"button-hidden":!0},on:{input:e.updateTerm,clear:e.resetProvider}}),e._v(" "),e.optionsVisible&&e.term?i("div",{ref:"options",attrs:{id:"files-global-search-options"}},[i("ul",{staticClass:"uk-list uk-list-divider"},[e._l(e.availableProviders,(function(t){return i("li",{key:t.id,staticClass:"provider",class:{selected:!!e.activeProvider&&t.id===e.activeProvider.id},on:{click:function(i){return e.activateProvider(t)}}},[i("oc-icon",{attrs:{name:"search","accessible-label":"Search"}}),e._v(" "),i("span",{staticClass:"term"},[e._v(e._s(e._f("truncate")(e.term)))]),e._v(" "),t.label?i("button",{staticClass:"label"},[e._v(e._s(t.label))]):e._e()],1)})),e._v(" "),e.$asyncComputed.searchResults.updating?i("li",{staticClass:"loading spinner"},[i("oc-spinner",{attrs:{size:"small","aria-hidden":!0,"aria-label":""}})],1):e._e(),e._v(" "),e.$asyncComputed.searchResults.updating?e._e():e._l(e.searchResults,(function(t,r){return i("li",{key:t.id,staticClass:"preview",class:{first:0===r},on:{click:function(i){return e.activeProvider.previewSearch.activate(t)}}},[i(e.activeProvider.previewSearch.component,{tag:"component",attrs:{provider:e.activeProvider,"search-result":t}})],1)}))],2)]):e._e()],1):i("div")};s._withStripped=!0;const a=e.normalizeComponent({render:s,staticRenderFns:[]},undefined,r,undefined,false,undefined,!1,void 0,void 0,void 0);const n={name:"Search"};var o=function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"uk-flex uk-height-1-1",attrs:{id:"search"}},[t("router-view",{attrs:{id:"search-view"}})],1)};o._withStripped=!0;const d=e.normalizeComponent({render:o,staticRenderFns:[]},undefined,n,undefined,false,undefined,!1,void 0,void 0,void 0);var c={state:{options:{hideSearchBar:!1}},getters:{options:e=>e.options}},v=e.merge({namespaced:!0},c);const l={data(){const{provider:e}=this.$route.query,{listSearch:t}=i.availableProviders.find((t=>t.id===e));return{listSearch:t}},asyncComputed:{searchResults:{get(){return this.listSearch.search(this.$route.query.term)},watch:["$route.query.term","$route.query.provider"]}}};var h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-width-1-1"},[e.$asyncComputed.searchResults.updating?i("div",{staticClass:"uk-flex uk-flex-middle uk-flex-center uk-height-1-1 uk-width-1-1"},[i("oc-spinner",{attrs:{size:"large","aria-hidden":!0,"aria-label":""}})],1):[i(e.listSearch.component,{tag:"component",attrs:{"search-results":e.searchResults}})]],2)};h._withStripped=!0;const u=e.normalizeComponent({render:h,staticRenderFns:[]},undefined,l,undefined,false,undefined,!1,void 0,void 0,void 0);var p={cs:{},de:{"Enter search term":"Suchbegriff eingeben"},es:{"Enter search term":"Introduzca termino de búsqueda"},fr:{"Enter search term":"Saisissez le terme à rechercher"},gl:{},it:{}};return t.bus.subscribe("app.search.register.provider",(e=>{i.addProvider(e)})),{appInfo:{name:"Search",id:"search",icon:"folder"},store:v,routes:[{name:"search",path:"/",components:{app:d},children:[{name:"provider-list",path:"list/:page?",component:u}]}],translations:p,mounted({portal:e}){e.open("runtime","header",1,[a])}}}));
