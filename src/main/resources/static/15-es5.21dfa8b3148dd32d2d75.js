!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0NIx":function(e,r,o){"use strict";o.r(r),o.d(r,"UsuarioPageModule",(function(){return F}));var a=o("ofXK"),i=o("3Pt+"),c=o("TEn/"),s=o("tyNb"),u=o("mrSG"),b=o("AytR"),l=o("fXoL"),h=o("tk/3"),f=o("lGQG");function p(t,e){if(1&t){var n=l.Lb();l.Kb(0,"ion-item",3),l.Sb("click",(function(){l.ac(n);var t=e.index;return l.Ub().mostrarOpciones(t)})),l.Kb(1,"ion-label"),l.ec(2," RFC "),l.Kb(3,"p"),l.ec(4),l.Jb(),l.Jb(),l.Kb(5,"ion-label"),l.ec(6," Agente "),l.Kb(7,"p"),l.ec(8),l.Jb(),l.Jb(),l.Kb(9,"ion-label"),l.ec(10," Factura "),l.Kb(11,"p"),l.ec(12),l.Jb(),l.Jb(),l.Kb(13,"ion-label"),l.ec(14," pedimento "),l.Kb(15,"p"),l.ec(16),l.Jb(),l.Jb(),l.Kb(17,"ion-label"),l.ec(18," Fecha "),l.Kb(19,"p"),l.ec(20),l.Jb(),l.Jb(),l.Jb()}if(2&t){var r=e.$implicit;l.xb(4),l.gc(" ",r.rfc," "),l.xb(4),l.gc(" ",r.agente," "),l.xb(4),l.gc(" ",r.factura," "),l.xb(4),l.gc(" ",r.pedimento," "),l.xb(4),l.gc(" ",r.fecha," ")}}var d,m=((d=function(){function e(n,r,o,a){t(this,e),this.http=n,this.auth=r,this.actionSheetController=o,this.toastCtrl=a}return n(e,[{key:"ngOnInit",value:function(){this.pagoPeticion()}},{key:"pagoPeticion",value:function(){var t=this;this.http.get("".concat(b.a.apiUrl,"/pagos/agente?agente=").concat(this.auth.usuario.rfc)).subscribe((function(e){e.data.length>0?t.pagos=e.data:t.mostrarToast("No se encontro ninguna","danger"),console.log("Resp de las peticion",e)}),(function(t){console.log("Error al buscar pagos",t)}))}},{key:"mostrarOpciones",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actionSheetController.create({header:"Que deseas hacer con el pago con RFC : "+this.pagos[t].rfc+", Agente: "+this.pagos[t].agente,cssClass:"my-custom-class",buttons:[{text:"Abrir archivo XML",icon:"code-working",handler:function(){r.abrirArchivo(t,"xml")}},{text:"Abrir archivo PDF",icon:"document",handler:function(){r.abrirArchivo(t,"pdf")}},{text:"Canelar",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"abrirArchivo",value:function(t,e){var n=document.createElement("a");n.href="".concat(b.a.apiFile,"/file/").concat(this.pagos[t].factura,".").concat(e),n.setAttribute("target","_blank"),n.click(),n.remove()}},{key:"mostrarToast",value:function(t,e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastCtrl.create({message:t,color:e,duration:3e3});case 2:return r=n.sent,n.next=5,r.present();case 5:case"end":return n.stop()}}),n,this)})))}}]),e}()).\u0275fac=function(t){return new(t||d)(l.Hb(h.a),l.Hb(f.a),l.Hb(c.a),l.Hb(c.Q))},d.\u0275cmp=l.Bb({type:d,selectors:[["app-buscar-pagos"]],decls:7,vars:1,consts:[["color","dark",1,"ion-text-center"],[3,"items"],[3,"click",4,"virtualItem"],[3,"click"]],template:function(t,e){1&t&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar",0),l.Kb(2,"ion-title"),l.ec(3,"Pagos"),l.Jb(),l.Jb(),l.Jb(),l.Kb(4,"ion-content"),l.Kb(5,"ion-virtual-scroll",1),l.dc(6,p,21,5,"ion-item",2),l.Jb(),l.Jb()),2&t&&(l.xb(5),l.Xb("items",e.pagos))},directives:[c.o,c.H,c.G,c.k,c.I,c.R,c.r,c.s],styles:["ion-item[_ngcontent-%COMP%]{--background:#a3a3a3}"]}),d);function g(t,e){if(1&t){var n=l.Lb();l.Kb(0,"ion-item",3),l.Sb("click",(function(){l.ac(n);var t=e.index;return l.Ub().mostrarOpciones(t)})),l.Kb(1,"ion-label"),l.ec(2," RFC "),l.Kb(3,"p"),l.ec(4),l.Jb(),l.Jb(),l.Kb(5,"ion-label"),l.ec(6," Agente "),l.Kb(7,"p"),l.ec(8),l.Jb(),l.Jb(),l.Kb(9,"ion-label"),l.ec(10," Factura "),l.Kb(11,"p"),l.ec(12),l.Jb(),l.Jb(),l.Kb(13,"ion-label"),l.ec(14," pedimento "),l.Kb(15,"p"),l.ec(16),l.Jb(),l.Jb(),l.Kb(17,"ion-label"),l.ec(18," Fecha "),l.Kb(19,"p"),l.ec(20),l.Jb(),l.Jb(),l.Jb()}if(2&t){var r=e.$implicit;l.xb(4),l.gc(" ",r.rfc," "),l.xb(4),l.gc(" ",r.agente," "),l.xb(4),l.gc(" ",r.factura," "),l.xb(4),l.gc(" ",r.pedimento," "),l.xb(4),l.gc(" ",r.fecha," ")}}var v,k=((v=function(){function e(n,r,o,a){t(this,e),this.http=n,this.toastCtrl=r,this.auth=o,this.actionSheetController=a,this.facturas=void 0}return n(e,[{key:"ngOnInit",value:function(){this.peticionFactura("facturas/agente?agente="+this.auth.usuario.rfc)}},{key:"trackByFn",value:function(t,e){return t}},{key:"mostrarOpciones",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actionSheetController.create({header:"Que deseas hacer con el pago con RFC : "+this.facturas[t].rfc+", Agente: "+this.facturas[t].agente,cssClass:"my-custom-class",buttons:[{text:"Abrir archivo XML",icon:"code-working",handler:function(){r.abrirArchivo(t,"xml")}},{text:"Abrir archivo PDF",icon:"document",handler:function(){r.abrirArchivo(t,"pdf")}},{text:"Canelar",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"abrirArchivo",value:function(t,e){var n=document.createElement("a");n.href="".concat(b.a.apiFile,"/file/").concat(this.facturas[t].factura,".").concat(e),n.setAttribute("target","_blank"),n.click(),n.remove()}},{key:"peticionFactura",value:function(t){var e=this;this.http.get("".concat(b.a.apiUrl,"/").concat(t)).subscribe((function(t){console.log("Resp de buscar factura",t),t.data.length>0?(e.facturas=t.data,e.mostrarToast("Se encontraron","success")):e.mostrarToast("No se encotraron","danger")}),(function(t){console.log("Error al buscar la factura",t)}))}},{key:"mostrarToast",value:function(t,e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastCtrl.create({message:t,color:e,duration:3e3});case 2:return r=n.sent,n.next=5,r.present();case 5:case"end":return n.stop()}}),n,this)})))}}]),e}()).\u0275fac=function(t){return new(t||v)(l.Hb(h.a),l.Hb(c.Q),l.Hb(f.a),l.Hb(c.a))},v.\u0275cmp=l.Bb({type:v,selectors:[["app-buscar-facturas"]],decls:7,vars:2,consts:[["color","dark",1,"ion-text-center"],[3,"items","trackBy"],[3,"click",4,"virtualItem"],[3,"click"]],template:function(t,e){1&t&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar",0),l.Kb(2,"ion-title"),l.ec(3,"Mis facturas"),l.Jb(),l.Jb(),l.Jb(),l.Kb(4,"ion-content"),l.Kb(5,"ion-virtual-scroll",1),l.dc(6,g,21,5,"ion-item",2),l.Jb(),l.Jb()),2&t&&(l.xb(5),l.Xb("items",e.facturas)("trackBy",e.trackByFn))},directives:[c.o,c.H,c.G,c.k,c.I,c.R,c.r,c.s],styles:["ion-item[_ngcontent-%COMP%]{--background:#a3a3a3;--background-activated:#07f}"]}),v);function J(t,e){if(1&t&&(l.Kb(0,"ion-item",10),l.Kb(1,"ion-label"),l.ec(2),l.Jb(),l.Ib(3,"ion-icon",11),l.Jb()),2&t){var n=e.$implicit,r=l.Ub();l.zb("active-item",r.selectedPath.startsWith(n.url)),l.Xb("routerLink",n.url),l.xb(2),l.gc(" ",n.titulo," "),l.xb(1),l.Xb("name",n.icon)}}var K,x,y,w=[{path:"",component:(K=function(){function e(n,r){t(this,e),this.auth=n,this.router=r,this.selectedPath="",this.usuarioPages=[{titulo:"Mis facturas",icon:"newspaper",url:"/usuario/facturas"},{titulo:"Mis pagos",icon:"cash",url:"/usuario/pagos"}]}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.router.events.subscribe((function(e){e&&e.url&&(t.selectedPath=e.url)}))}}]),e}(),K.\u0275fac=function(t){return new(t||K)(l.Hb(f.a),l.Hb(s.f))},K.\u0275cmp=l.Bb({type:K,selectors:[["app-usuario"]],decls:19,vars:3,consts:[["contentId","menu-admins"],["menuId","menu-admins","contentId","menu-admins","side","start","type","overlay"],["color","secondary",1,"ion-text-center"],[1,"ion-text-center"],["auto-hide","false"],["routerDirection","forward","class","menuContent",3,"routerLink","active-item",4,"ngFor","ngForOf"],[2,"text-align","center"],["color","danger","mode","ios","fill","solid","shape","round",3,"click"],["name","log-out"],["id","menu-admins"],["routerDirection","forward",1,"menuContent",3,"routerLink"],["mode","ios",3,"name"]],template:function(t,e){1&t&&(l.Kb(0,"ion-split-pane",0),l.Kb(1,"ion-menu",1),l.Kb(2,"ion-header"),l.Kb(3,"ion-toolbar",2),l.Kb(4,"ion-title"),l.ec(5,"Modulo de usuarios"),l.Jb(),l.Kb(6,"ion-card"),l.Kb(7,"ion-card-header"),l.Kb(8,"ion-card-title"),l.ec(9),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(10,"ion-content",3),l.Kb(11,"ion-list"),l.Kb(12,"ion-menu-toggle",4),l.dc(13,J,4,5,"ion-item",5),l.Jb(),l.Kb(14,"ion-item",6),l.Kb(15,"ion-button",7),l.Sb("click",(function(){return e.auth.cerrarSesion()})),l.ec(16," Cerrar sesion "),l.Ib(17,"ion-icon",8),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Ib(18,"ion-router-outlet",9),l.Jb()),2&t&&(l.xb(9),l.hc("",null==e.auth||null==e.auth.usuario?null:e.auth.usuario.nombre," ",null==e.auth||null==e.auth.usuario?null:e.auth.usuario.apellidos,""),l.xb(4),l.Xb("ngForOf",e.usuarioPages))},directives:[c.B,c.u,c.o,c.H,c.G,c.f,c.h,c.i,c.k,c.t,c.v,a.h,c.r,c.d,c.p,c.w,c.N,s.g,c.s],styles:[".active-item[_ngcontent-%COMP%]{border-left:8px solid var(--ion-color-primary)}"]}),K),children:[{path:"",redirectTo:"facturas",pathMatch:"full"},{path:"facturas",component:k},{path:"pagos",component:m}]}],C=((y=function e(){t(this,e)}).\u0275mod=l.Fb({type:y}),y.\u0275inj=l.Eb({factory:function(t){return new(t||y)},imports:[[s.h.forChild(w)],s.h]}),y),F=((x=function e(){t(this,e)}).\u0275mod=l.Fb({type:x}),x.\u0275inj=l.Eb({factory:function(t){return new(t||x)},imports:[[a.b,i.e,c.J,C,h.b]]}),x)}}])}();