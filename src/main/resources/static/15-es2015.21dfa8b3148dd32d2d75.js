(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0NIx":function(t,e,o){"use strict";o.r(e),o.d(e,"UsuarioPageModule",(function(){return K}));var n=o("ofXK"),i=o("3Pt+"),a=o("TEn/"),r=o("tyNb"),c=o("mrSG"),s=o("AytR"),b=o("fXoL"),l=o("tk/3"),u=o("lGQG");function h(t,e){if(1&t){const t=b.Lb();b.Kb(0,"ion-item",3),b.Sb("click",(function(){b.ac(t);const o=e.index;return b.Ub().mostrarOpciones(o)})),b.Kb(1,"ion-label"),b.ec(2," RFC "),b.Kb(3,"p"),b.ec(4),b.Jb(),b.Jb(),b.Kb(5,"ion-label"),b.ec(6," Agente "),b.Kb(7,"p"),b.ec(8),b.Jb(),b.Jb(),b.Kb(9,"ion-label"),b.ec(10," Factura "),b.Kb(11,"p"),b.ec(12),b.Jb(),b.Jb(),b.Kb(13,"ion-label"),b.ec(14," pedimento "),b.Kb(15,"p"),b.ec(16),b.Jb(),b.Jb(),b.Kb(17,"ion-label"),b.ec(18," Fecha "),b.Kb(19,"p"),b.ec(20),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=e.$implicit;b.xb(4),b.gc(" ",t.rfc," "),b.xb(4),b.gc(" ",t.agente," "),b.xb(4),b.gc(" ",t.factura," "),b.xb(4),b.gc(" ",t.pedimento," "),b.xb(4),b.gc(" ",t.fecha," ")}}let d=(()=>{class t{constructor(t,e,o,n){this.http=t,this.auth=e,this.actionSheetController=o,this.toastCtrl=n}ngOnInit(){this.pagoPeticion()}pagoPeticion(){this.http.get(`${s.a.apiUrl}/pagos/agente?agente=${this.auth.usuario.rfc}`).subscribe(t=>{t.data.length>0?this.pagos=t.data:this.mostrarToast("No se encontro ninguna","danger"),console.log("Resp de las peticion",t)},t=>{console.log("Error al buscar pagos",t)})}mostrarOpciones(t){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield this.actionSheetController.create({header:"Que deseas hacer con el pago con RFC : "+this.pagos[t].rfc+", Agente: "+this.pagos[t].agente,cssClass:"my-custom-class",buttons:[{text:"Abrir archivo XML",icon:"code-working",handler:()=>{this.abrirArchivo(t,"xml")}},{text:"Abrir archivo PDF",icon:"document",handler:()=>{this.abrirArchivo(t,"pdf")}},{text:"Canelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield e.present()}))}abrirArchivo(t,e){var o=document.createElement("a");o.href=`${s.a.apiFile}/file/${this.pagos[t].factura}.${e}`,o.setAttribute("target","_blank"),o.click(),o.remove()}mostrarToast(t,e){return Object(c.a)(this,void 0,void 0,(function*(){const o=yield this.toastCtrl.create({message:t,color:e,duration:3e3});yield o.present()}))}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(l.a),b.Hb(u.a),b.Hb(a.a),b.Hb(a.Q))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-buscar-pagos"]],decls:7,vars:1,consts:[["color","dark",1,"ion-text-center"],[3,"items"],[3,"click",4,"virtualItem"],[3,"click"]],template:function(t,e){1&t&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar",0),b.Kb(2,"ion-title"),b.ec(3,"Pagos"),b.Jb(),b.Jb(),b.Jb(),b.Kb(4,"ion-content"),b.Kb(5,"ion-virtual-scroll",1),b.dc(6,h,21,5,"ion-item",2),b.Jb(),b.Jb()),2&t&&(b.xb(5),b.Xb("items",e.pagos))},directives:[a.o,a.H,a.G,a.k,a.I,a.R,a.r,a.s],styles:["ion-item[_ngcontent-%COMP%]{--background:#a3a3a3}"]}),t})();function p(t,e){if(1&t){const t=b.Lb();b.Kb(0,"ion-item",3),b.Sb("click",(function(){b.ac(t);const o=e.index;return b.Ub().mostrarOpciones(o)})),b.Kb(1,"ion-label"),b.ec(2," RFC "),b.Kb(3,"p"),b.ec(4),b.Jb(),b.Jb(),b.Kb(5,"ion-label"),b.ec(6," Agente "),b.Kb(7,"p"),b.ec(8),b.Jb(),b.Jb(),b.Kb(9,"ion-label"),b.ec(10," Factura "),b.Kb(11,"p"),b.ec(12),b.Jb(),b.Jb(),b.Kb(13,"ion-label"),b.ec(14," pedimento "),b.Kb(15,"p"),b.ec(16),b.Jb(),b.Jb(),b.Kb(17,"ion-label"),b.ec(18," Fecha "),b.Kb(19,"p"),b.ec(20),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=e.$implicit;b.xb(4),b.gc(" ",t.rfc," "),b.xb(4),b.gc(" ",t.agente," "),b.xb(4),b.gc(" ",t.factura," "),b.xb(4),b.gc(" ",t.pedimento," "),b.xb(4),b.gc(" ",t.fecha," ")}}let m=(()=>{class t{constructor(t,e,o,n){this.http=t,this.toastCtrl=e,this.auth=o,this.actionSheetController=n,this.facturas=void 0}ngOnInit(){this.peticionFactura("facturas/agente?agente="+this.auth.usuario.rfc)}trackByFn(t,e){return t}mostrarOpciones(t){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield this.actionSheetController.create({header:"Que deseas hacer con el pago con RFC : "+this.facturas[t].rfc+", Agente: "+this.facturas[t].agente,cssClass:"my-custom-class",buttons:[{text:"Abrir archivo XML",icon:"code-working",handler:()=>{this.abrirArchivo(t,"xml")}},{text:"Abrir archivo PDF",icon:"document",handler:()=>{this.abrirArchivo(t,"pdf")}},{text:"Canelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield e.present()}))}abrirArchivo(t,e){const o=document.createElement("a");o.href=`${s.a.apiFile}/file/${this.facturas[t].factura}.${e}`,o.setAttribute("target","_blank"),o.click(),o.remove()}peticionFactura(t){this.http.get(`${s.a.apiUrl}/${t}`).subscribe(t=>{console.log("Resp de buscar factura",t),t.data.length>0?(this.facturas=t.data,this.mostrarToast("Se encontraron","success")):this.mostrarToast("No se encotraron","danger")},t=>{console.log("Error al buscar la factura",t)})}mostrarToast(t,e){return Object(c.a)(this,void 0,void 0,(function*(){const o=yield this.toastCtrl.create({message:t,color:e,duration:3e3});yield o.present()}))}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(l.a),b.Hb(a.Q),b.Hb(u.a),b.Hb(a.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-buscar-facturas"]],decls:7,vars:2,consts:[["color","dark",1,"ion-text-center"],[3,"items","trackBy"],[3,"click",4,"virtualItem"],[3,"click"]],template:function(t,e){1&t&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar",0),b.Kb(2,"ion-title"),b.ec(3,"Mis facturas"),b.Jb(),b.Jb(),b.Jb(),b.Kb(4,"ion-content"),b.Kb(5,"ion-virtual-scroll",1),b.dc(6,p,21,5,"ion-item",2),b.Jb(),b.Jb()),2&t&&(b.xb(5),b.Xb("items",e.facturas)("trackBy",e.trackByFn))},directives:[a.o,a.H,a.G,a.k,a.I,a.R,a.r,a.s],styles:["ion-item[_ngcontent-%COMP%]{--background:#a3a3a3;--background-activated:#07f}"]}),t})();function g(t,e){if(1&t&&(b.Kb(0,"ion-item",10),b.Kb(1,"ion-label"),b.ec(2),b.Jb(),b.Ib(3,"ion-icon",11),b.Jb()),2&t){const t=e.$implicit,o=b.Ub();b.zb("active-item",o.selectedPath.startsWith(t.url)),b.Xb("routerLink",t.url),b.xb(2),b.gc(" ",t.titulo," "),b.xb(1),b.Xb("name",t.icon)}}const f=[{path:"",component:(()=>{class t{constructor(t,e){this.auth=t,this.router=e,this.selectedPath="",this.usuarioPages=[{titulo:"Mis facturas",icon:"newspaper",url:"/usuario/facturas"},{titulo:"Mis pagos",icon:"cash",url:"/usuario/pagos"}]}ngOnInit(){this.router.events.subscribe(t=>{t&&t.url&&(this.selectedPath=t.url)})}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(u.a),b.Hb(r.f))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-usuario"]],decls:19,vars:3,consts:[["contentId","menu-admins"],["menuId","menu-admins","contentId","menu-admins","side","start","type","overlay"],["color","secondary",1,"ion-text-center"],[1,"ion-text-center"],["auto-hide","false"],["routerDirection","forward","class","menuContent",3,"routerLink","active-item",4,"ngFor","ngForOf"],[2,"text-align","center"],["color","danger","mode","ios","fill","solid","shape","round",3,"click"],["name","log-out"],["id","menu-admins"],["routerDirection","forward",1,"menuContent",3,"routerLink"],["mode","ios",3,"name"]],template:function(t,e){1&t&&(b.Kb(0,"ion-split-pane",0),b.Kb(1,"ion-menu",1),b.Kb(2,"ion-header"),b.Kb(3,"ion-toolbar",2),b.Kb(4,"ion-title"),b.ec(5,"Modulo de usuarios"),b.Jb(),b.Kb(6,"ion-card"),b.Kb(7,"ion-card-header"),b.Kb(8,"ion-card-title"),b.ec(9),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Kb(10,"ion-content",3),b.Kb(11,"ion-list"),b.Kb(12,"ion-menu-toggle",4),b.dc(13,g,4,5,"ion-item",5),b.Jb(),b.Kb(14,"ion-item",6),b.Kb(15,"ion-button",7),b.Sb("click",(function(){return e.auth.cerrarSesion()})),b.ec(16," Cerrar sesion "),b.Ib(17,"ion-icon",8),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Ib(18,"ion-router-outlet",9),b.Jb()),2&t&&(b.xb(9),b.hc("",null==e.auth||null==e.auth.usuario?null:e.auth.usuario.nombre," ",null==e.auth||null==e.auth.usuario?null:e.auth.usuario.apellidos,""),b.xb(4),b.Xb("ngForOf",e.usuarioPages))},directives:[a.B,a.u,a.o,a.H,a.G,a.f,a.h,a.i,a.k,a.t,a.v,n.h,a.r,a.d,a.p,a.w,a.N,r.g,a.s],styles:[".active-item[_ngcontent-%COMP%]{border-left:8px solid var(--ion-color-primary)}"]}),t})(),children:[{path:"",redirectTo:"facturas",pathMatch:"full"},{path:"facturas",component:m},{path:"pagos",component:d}]}];let J=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[r.h.forChild(f)],r.h]}),t})(),K=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[n.b,i.e,a.J,J,l.b]]}),t})()}}]);