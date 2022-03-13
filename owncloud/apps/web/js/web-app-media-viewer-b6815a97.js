define(["./chunks/vendor-62f8e512","./chunks/resources-e9c94644","./chunks/dav-ddb55b6f"],(function(e,i,t){"use strict";var a={cs:{},de:{"%{ displayIndex } of %{ availableMediaFiles }":"%{ displayIndex } von %{ availableMediaFiles }","Close mediaviewer app":"Vorschau-App schließen","Download currently viewed file":"Aktuell betrachtete Datei herunterladen","Failed to load media file":"Fehler beim Laden der Mediendatei","Loading media file":"Lade Mediendatei","Media file %{ displayIndex } of %{ availableMediaFiles }":"Mediendatei %{ displayIndex } von %{ availableMediaFiles }","Mediaviewer app":"Vorschau-App","Mediaviewer for %{currentMediumName}":"Medienvorschau für %{currentMediumName}",msg:"Nachricht","Show next media file in folder":"Nächste Mediendatei im Order anzeigen","Show previous media file in folder":"Vorherige Mediendatei im Order anzeigen"},es:{msg:"msg"},fr:{"Close mediaviewer app":"Fermer l'application mediaviewer",msg:"msg"},gl:{msg:"msx"},it:{}};const s={name:"Mediaviewer",mixins:[{computed:{...e.mapGetters("Files",["publicLinkPassword"]),...e.mapGetters(["configuration"]),$_loader_publicContext(){return"files-public-list"===this.$route.params.contextRouteName},$_loader_folderLoading(){return this.$_internal_loader_folderLoading}},data:()=>({$_internal_loader_folderLoading:!0}),methods:{...e.mapMutations("Files",["CLEAR_CURRENT_FILES_LIST","LOAD_FILES","SET_CURRENT_FOLDER"]),async $_loader_loadItems(e){if(""===this.$store.getters.activeFile.path){this.$_internal_loader_folderLoading=!0,this.CLEAR_CURRENT_FILES_LIST();try{const a=e.substring(0,e.lastIndexOf("/")),s=this.$_loader_publicContext?this.$client.publicFiles.list(a,this.publicLinkPassword,t.DavProperties.PublicLink):this.$client.files.list(a,1,t.DavProperties.Default);let n=await s;n=n.map(i.buildResource),this.LOAD_FILES({currentFolder:n[0],files:n.slice(1)})}catch(e){this.SET_CURRENT_FOLDER(null),console.error(e)}this.$_internal_loader_folderLoading=!1}},$_loader_getDavFilePath(i,t=null){const a=t?e.queryString.stringify(t):"";if(!this.$_loader_publicContext){const e=["..","dav","files",this.$store.getters.user.id,i.path.replace(/^\//,"")].join("/");return[this.$client.files.getFileUrl(e),a].filter(Boolean).join("?")}if(!i.downloadURL){const e=["..","dav","public-files",i.path].join("/");return[this.$client.files.getFileUrl(e),a].filter(Boolean).join("?")}const[s,n]=i.downloadURL.split("?");return[s,[a,encodeURIComponent(n)].filter(Boolean).join("&")].filter(Boolean).join("?")},$_loader_navigateToContextRoute(i,t){this.$router.push({name:i,params:{item:e.dirname(t)||"/"},query:{scrollTo:e.basename(t)}})}}}],data:()=>({loading:!0,failed:!1,activeIndex:null,direction:"rtl",medium:{},media:[]}),computed:{...e.mapGetters("Files",["activeFiles"]),...e.mapGetters(["getToken","capabilities"]),pageTitle(){const e=this.$gettext("Mediaviewer for %{currentMediumName}");return this.$gettextInterpolate(e,{currentMediumName:this.medium.name})},ariaHiddenFileCount(){const e=this.$gettext("%{ displayIndex } of %{ availableMediaFiles }");return this.$gettextInterpolate(e,{displayIndex:this.activeIndex+1,availableMediaFiles:this.mediaFiles.length})},screenreaderFileCount(){const e=this.$gettext("Media file %{ displayIndex } of %{ availableMediaFiles }");return this.$gettextInterpolate(e,{displayIndex:this.activeIndex+1,availableMediaFiles:this.mediaFiles.length})},mediaFiles(){return this.activeFiles.filter((e=>e.extension.toLowerCase().match(/(png|jpg|jpeg|gif|mp4|webm|ogg)/)))},activeMediaFile(){return this.mediaFiles[this.activeIndex]},activeMediaFileCached(){const e=this.media.find((e=>e.id===this.activeMediaFile.id));return void 0!==e&&e},activeClass(){const e=["right","left"];return"ltr"===this.direction&&e.reverse(),{enter:`uk-animation-slide-${e[0]}-small`,leave:`uk-animation-slide-${e[1]} uk-animation-reverse`}},thumbDimensions(){switch(!0){case window.innerWidth<=1024:return 1024;case window.innerWidth<=1280:return 1280;case window.innerWidth<=1920:return 1920;case window.innerWidth<=2160:return 2160;default:return 3840}},thumbUrl(){const e={x:this.thumbDimensions,y:this.thumbDimensions,c:this.activeMediaFile.etag.substr(1,this.activeMediaFile.etag.length-2),scalingup:0,preview:1,a:1};return this.$_loader_getDavFilePath(this.activeMediaFile,e)},rawMediaUrl(){return this.$_loader_getDavFilePath(this.activeMediaFile)},videoExtensions:()=>["mp4","webm","ogg"],isActiveMediaFileTypeVideo(){return this.videoExtensions.includes(this.activeMediaFile.extension.toLowerCase())},isActiveMediaFileTypeImage(){return!this.isActiveMediaFileTypeVideo},isUrlSigningEnabled(){return this.capabilities.core&&this.capabilities.core["support-url-signing"]}},watch:{activeIndex(e,i){e!==i&&this.loadMedium()}},async mounted(){window.addEventListener("popstate",this.handleLocalHistoryEvent);const e=`/${this.$route.params.filePath.split("/").filter(Boolean).join("/")}`;await this.$_loader_loadItems(e),this.setCurrentFile(e),this.$refs.mediaviewer.focus()},beforeDestroy(){window.removeEventListener("popstate",this.handleLocalHistoryEvent),this.media.forEach((e=>{window.URL.revokeObjectURL(e.url)}))},methods:{setCurrentFile(e){for(let i=0;i<this.mediaFiles.length;i++)if(this.mediaFiles[i].path===e){this.activeIndex=i;break}},handleLocalHistoryEvent(){const e=this.$router.resolve(document.location);this.setCurrentFile(e.route.params.filePath)},updateLocalHistory(){this.$route.params.filePath=this.activeMediaFile.path,history.pushState({},document.title,this.$router.resolve(this.$route).href)},loadMedium(){if(this.loading=!0,this.activeMediaFileCached)return void setTimeout((()=>{this.medium=this.activeMediaFileCached,this.loading=!1}),50);const e=this.isActiveMediaFileTypeImage?this.thumbUrl:this.rawMediaUrl;let i;i=!this.isActiveMediaFileTypeImage&&this.isUrlSigningEnabled&&this.$route.meta.auth?this.$client.signUrl(e,86400):this.mediaSource(e,"url",null),i.then((e=>{this.media.push({id:this.activeMediaFile.id,name:this.activeMediaFile.name,url:e,ext:this.activeMediaFile.extension,isVideo:this.isActiveMediaFileTypeVideo,isImage:this.isActiveMediaFileTypeImage}),this.medium=this.activeMediaFileCached,this.loading=!1,this.failed=!1})).catch((e=>{this.loading=!1,this.failed=!0,console.error(e)}))},downloadMedium(){if(!this.loading)return this.downloadFile(this.mediaFiles[this.activeIndex],this.$_loader_publicContext)},next(){this.loading||(this.failed=!1,this.direction="rtl",this.activeIndex+1>=this.mediaFiles.length?this.activeIndex=0:(this.activeIndex++,this.updateLocalHistory()))},prev(){this.loading||(this.failed=!1,this.direction="ltr",0!==this.activeIndex?(this.activeIndex--,this.updateLocalHistory()):this.activeIndex=this.mediaFiles.length-1)},closeApp(){this.$_loader_navigateToContextRoute(this.$route.params.contextRouteName,this.$route.params.filePath)}}};var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("main",{ref:"mediaviewer",attrs:{id:"mediaviewer",tabindex:"-1"},on:{keydown:[function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"left",37,i.key,["Left","ArrowLeft"])||"button"in i&&0!==i.button?null:e.prev.apply(null,arguments)},function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"right",39,i.key,["Right","ArrowRight"])||"button"in i&&2!==i.button?null:e.next.apply(null,arguments)},function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"])?null:e.closeApp.apply(null,arguments)}]}},[t("h1",{staticClass:"oc-invisible-sr",domProps:{textContent:e._s(e.pageTitle)}}),e._v(" "),t("transition",{attrs:{name:"custom-classes-transition","enter-active-class":e.activeClass.enter,"leave-active-class":e.activeClass.leave}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.activeMediaFileCached,expression:"!loading && activeMediaFileCached"}],staticClass:"\n        uk-width-1-1 uk-flex uk-flex-center uk-flex-middle\n        oc-p-s\n        uk-box-shadow-medium\n        media-viewer-player\n      "},[e.medium.isVideo?t("video",{key:"media-video-"+e.medium.id,attrs:{controls:"",preload:""}},[t("source",{attrs:{src:e.medium.url,type:"video/"+e.medium.ext}})]):t("img",{key:"media-image-"+e.medium.id,attrs:{src:e.medium.url,alt:e.medium.name,"data-id":e.medium.id}})])]),e._v(" "),e.loading?t("div",{staticClass:"uk-position-center"},[t("oc-spinner",{attrs:{"aria-label":e.$gettext("Loading media file"),size:"xlarge"}})],1):e._e(),e._v(" "),e.failed?t("oc-icon",{staticClass:"uk-position-center uk-z-index",attrs:{name:"review",variation:"danger",size:"xlarge","accessible-label":e.$gettext("Failed to load media file")}}):e._e(),e._v(" "),t("div",{staticClass:"uk-position-medium uk-position-bottom-center media-viewer-details"},[t("p",{staticClass:"oc-text-lead uk-text-center oc-text-truncate oc-p-s media-viewer-file-name",attrs:{"aria-hidden":"true"}},[e._v("\n      "+e._s(e.medium.name)+"\n    ")]),e._v(" "),t("div",{staticClass:"\n        oc-background-brand oc-p-s\n        uk-width-large uk-flex uk-flex-middle uk-flex-center uk-flex-around\n        media-viewer-controls-action-bar\n      "},[t("oc-button",{staticClass:"media-viewer-controls-previous",attrs:{appearance:"raw",variation:"inverse","aria-label":e.$gettext("Show previous media file in folder")},on:{click:e.prev}},[t("oc-icon",{attrs:{size:"large",name:"chevron_left"}})],1),e._v(" "),e.$_loader_folderLoading?e._e():t("p",{staticClass:"oc-m-rm oc-light"},[t("span",{attrs:{"aria-hidden":"true"},domProps:{textContent:e._s(e.ariaHiddenFileCount)}}),e._v(" "),t("span",{staticClass:"oc-invisible-sr",domProps:{textContent:e._s(e.screenreaderFileCount)}})]),e._v(" "),t("oc-button",{staticClass:"media-viewer-controls-next",attrs:{appearance:"raw",variation:"inverse","aria-label":e.$gettext("Show next media file in folder")},on:{click:e.next}},[t("oc-icon",{attrs:{size:"large",name:"chevron_right"}})],1),e._v(" "),t("oc-button",{staticClass:"media-viewer-controls-download",attrs:{appearance:"raw",variation:"inverse","aria-label":e.$gettext("Download currently viewed file")},on:{click:e.downloadMedium}},[t("oc-icon",{attrs:{size:"large",name:"file_download"}})],1),e._v(" "),t("oc-button",{staticClass:"media-viewer-controls-close",attrs:{appearance:"raw",variation:"inverse","aria-label":e.$gettext("Close mediaviewer app")},on:{click:e.closeApp}},[t("oc-icon",{attrs:{size:"large",name:"close"}})],1)],1)])],1)};n._withStripped=!0;const r=[{path:"/:contextRouteName/:filePath*",components:{app:e.normalizeComponent({render:n,staticRenderFns:[]},undefined,s,"data-v-53354666",false,undefined,!1,void 0,void 0,void 0)},name:"media",meta:{auth:!1,title:"Mediaviewer app",patchCleanPath:!0}}],l={canBeDefault:!0,routeName:"mediaviewer-media",routes:["files-personal","files-favorites","files-shared-with-others","files-shared-with-me","files-public-list"]};return{appInfo:{name:"Mediaviewer",id:"mediaviewer",icon:"image",extensions:[{extension:"png",...l},{extension:"jpg",...l},{extension:"jpeg",...l},{extension:"gif",...l},{extension:"mp4",...l},{extension:"webm",...l},{extension:"ogg",...l}]},routes:r,translations:a}}));