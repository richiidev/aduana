!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{SAfC:function(t,r,a){"use strict";a.r(r),a.d(r,"AdminPageModule",(function(){return O}));var i=a("ofXK"),c=a("TEn/"),s=a("tyNb"),u=a("fXoL"),l=a("lGQG");function b(e,t){if(1&e&&(u.Kb(0,"ion-item",10),u.Kb(1,"ion-label"),u.gc(2),u.Jb(),u.Ib(3,"ion-icon",11),u.Jb()),2&e){var n=t.$implicit,r=u.Ub();u.zb("active-item",r.selectedPath.startsWith(n.url)),u.Zb("routerLink",n.url),u.xb(2),u.ic(" ",n.titulo," "),u.xb(1),u.Zb("name",n.icon)}}var f,d=((f=function(){function e(t,r){n(this,e),this.router=t,this.auth=r,this.selectedPath="",this.adminPages=[{titulo:"Facturas",icon:"newspaper",url:"/admin/buscar"},{titulo:"Usuarios",icon:"people-circle",url:"/admin/usuarios"},{titulo:"Pagos",icon:"cash",url:"/admin/pagos"}]}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.router.events.subscribe((function(t){t&&t.url&&(e.selectedPath=t.url)}))}}]),e}()).\u0275fac=function(e){return new(e||f)(u.Hb(s.f),u.Hb(l.a))},f.\u0275cmp=u.Bb({type:f,selectors:[["app-admin"]],decls:19,vars:3,consts:[["contentId","menu-admins"],["menuId","menu-admins","contentId","menu-admins","side","start","type","overlay"],["color","medium",1,"ion-text-center"],[1,"ion-text-center"],["auto-hide","false"],["routerDirection","forward","class","menuContent",3,"routerLink","active-item",4,"ngFor","ngForOf"],[2,"text-align","center"],["color","danger","mode","ios","fill","solid","shape","round",3,"click"],["name","log-out"],["id","menu-admins"],["routerDirection","forward",1,"menuContent",3,"routerLink"],["mode","ios",3,"name"]],template:function(e,t){1&e&&(u.Kb(0,"ion-split-pane",0),u.Kb(1,"ion-menu",1),u.Kb(2,"ion-header"),u.Kb(3,"ion-toolbar",2),u.Kb(4,"ion-title"),u.gc(5,"Modulo de admins"),u.Jb(),u.Kb(6,"ion-card"),u.Kb(7,"ion-card-header"),u.Kb(8,"ion-card-title"),u.gc(9),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(10,"ion-content",3),u.Kb(11,"ion-list"),u.Kb(12,"ion-menu-toggle",4),u.fc(13,b,4,5,"ion-item",5),u.Jb(),u.Kb(14,"ion-item",6),u.Kb(15,"ion-button",7),u.Sb("click",(function(){return t.auth.cerrarSesion()})),u.gc(16," Cerrar sesion "),u.Ib(17,"ion-icon",8),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Ib(18,"ion-router-outlet",9),u.Jb()),2&e&&(u.xb(9),u.jc("",null==t.auth||null==t.auth.usuario?null:t.auth.usuario.nombre," ",null==t.auth||null==t.auth.usuario?null:t.auth.usuario.apellidos,""),u.xb(4),u.Zb("ngForOf",t.adminPages))},directives:[c.E,c.x,c.r,c.K,c.J,c.h,c.j,c.k,c.n,c.w,c.y,i.i,c.u,c.f,c.s,c.z,c.Q,s.g,c.v],styles:[".active-item[_ngcontent-%COMP%]{border-left:8px solid var(--ion-color-primary)}.fondo[_ngcontent-%COMP%]{--background:url(/assets/imgs/lago.jpg) no-repeat 100% 100%}"]}),f),h=a("mrSG"),p=a("AytR"),m=a("3Pt+"),g=a("tk/3");function v(e,t){1&e&&(u.Kb(0,"p"),u.gc(1,"El RFC es necesario"),u.Jb())}function J(e,t){if(1&e&&(u.Kb(0,"ion-text",8),u.fc(1,v,2,0,"p",19),u.Kb(2,"p"),u.gc(3," El RFC "),u.Kb(4,"ion-badge",20),u.gc(5,"NO EXISTE"),u.Jb(),u.Jb(),u.Jb()),2&e){var n=u.Ub();u.xb(1),u.Zb("ngIf",(null==n.facturaForm.controls.rfc.errors?null:n.facturaForm.controls.rfc.errors.required)&&n.facturaForm.controls.rfc.dirty)}}function K(e,t){1&e&&(u.Kb(0,"ion-text",21),u.Kb(1,"p"),u.gc(2," El RFC "),u.Kb(3,"ion-badge",22),u.gc(4,"EXISTE"),u.Jb(),u.Jb(),u.Jb())}var x,k=((x=function(){function e(t,r,o){n(this,e),this.modalCtrl=t,this.http=r,this.toastCtrl=o,this.rfc=""}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.cargarFormulario(),this.modalCtrl.getTop().then((function(t){console.log("Los datos recibidos son: ",t.componentProps),e.rfc=t.componentProps.rfc,e.id=t.componentProps.id,e.facturaForm.setValue({agente:t.componentProps.agente,almacen:t.componentProps.almacen,awb:t.componentProps.awb,factura:t.componentProps.factura,hbw:t.componentProps.hbw,pedimento:t.componentProps.pedimento,rfc:t.componentProps.rfc})})).catch((function(e){return console.log("Error al cargar el modal",e)}))}},{key:"cargarFormulario",value:function(){this.facturaForm=new m.d({agente:new m.b(null,m.o.required),almacen:new m.b(null,m.o.required),awb:new m.b(null,m.o.required),factura:new m.b(null,m.o.required),hbw:new m.b(null,m.o.required),pedimento:new m.b(null,m.o.required),rfc:new m.b(null,m.o.required,this.rfcUnico.bind(this))})}},{key:"editarFactura",value:function(){var e=this,t=Object.assign(Object.assign({},this.facturaForm.value),{fecha:(new Date).toISOString(),id:this.id});this.http.put(p.a.apiUrl+"/facturas",t).subscribe((function(t){console.log("Resp de actualizar factura",t),t.success?e.cerrarModal(!0,t.data):e.mostrarToast("Error al crear la factura","danger")}),(function(t){e.mostrarToast("Error al crear la factura","danger"),console.log("Error al crear la factura",t)})),console.log("La factura final sera",t)}},{key:"cerrarModal",value:function(e,t){this.modalCtrl.dismiss({completado:e,nuevo:t})}},{key:"rfcUnico",value:function(e){var t=this;return new Promise((function(e,n){return Object(h.b)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.get("".concat(p.a.apiUrl,"/usuario/rfc/?rfc=").concat(this.facturaForm.controls.rfc.value)).subscribe((function(t){console.log("Se hizo bien",t),e(1==t.data.length?null:{existe:!0})}),(function(t){console.log("Se hizo MAL",t),e({existe:!0})}));case 2:case"end":return t.stop()}}),t,this)})))}))}},{key:"mostrarToast",value:function(e,t){return Object(h.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastCtrl.create({message:e,color:t,duration:3e3});case 2:return n.abrupt("return",n.sent.present());case 3:case"end":return n.stop()}}),n,this)})))}}]),e}()).\u0275fac=function(e){return new(e||x)(u.Hb(c.P),u.Hb(g.a),u.Hb(c.T))},x.\u0275cmp=u.Bb({type:x,selectors:[["app-editar-factura"]],decls:71,vars:5,consts:[[1,"ion-text-center"],["slot","start"],["color","dark",3,"click"],["name","chevron-back-circle"],[3,"formGroup","ngSubmit"],["fixed",""],["size","6"],["position","floating"],["color","danger"],["required","","formControlName","agente","type","text"],["required","","formControlName","almacen","type","text"],["required","","formControlName","awb","type","text"],["required","","formControlName","factura","type","text"],["required","","formControlName","hbw","type","text"],["required","","formControlName","pedimento","type","text"],["required","","formControlName","rfc","type","text","oninput","this.value = this.value.toUpperCase()","type","text"],["color","danger",4,"ngIf"],["color","success",4,"ngIf"],["type","submit","expand","full",3,"disabled"],[4,"ngIf"],["color","danger","mode","ios"],["color","success"],["color","success","mode","ios"]],template:function(e,t){1&e&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar",0),u.Kb(2,"ion-buttons",1),u.Kb(3,"ion-button",2),u.Sb("click",(function(){return t.cerrarModal(!1)})),u.Ib(4,"ion-icon",3),u.gc(5," Cancelar "),u.Jb(),u.Jb(),u.Kb(6,"ion-title"),u.gc(7),u.Jb(),u.Jb(),u.Jb(),u.Kb(8,"ion-content"),u.Kb(9,"ion-card"),u.Kb(10,"ion-card-header",0),u.Kb(11,"ion-card-title"),u.gc(12,"Ingresa los nuevos datos "),u.Jb(),u.Jb(),u.Kb(13,"ion-card-content"),u.Kb(14,"form",4),u.Sb("ngSubmit",(function(){return t.editarFactura()})),u.Kb(15,"ion-grid",5),u.Kb(16,"ion-row"),u.Kb(17,"ion-col",6),u.Kb(18,"ion-item"),u.Kb(19,"ion-label",7),u.gc(20,"Agente "),u.Kb(21,"ion-text",8),u.gc(22,"*"),u.Jb(),u.Jb(),u.Ib(23,"ion-input",9),u.Jb(),u.Jb(),u.Kb(24,"ion-col",6),u.Kb(25,"ion-item"),u.Kb(26,"ion-label",7),u.gc(27,"Almacen "),u.Kb(28,"ion-text",8),u.gc(29,"*"),u.Jb(),u.Jb(),u.Ib(30,"ion-input",10),u.Jb(),u.Jb(),u.Jb(),u.Kb(31,"ion-row"),u.Kb(32,"ion-col",6),u.Kb(33,"ion-item"),u.Kb(34,"ion-label",7),u.gc(35,"AWB "),u.Kb(36,"ion-text",8),u.gc(37,"*"),u.Jb(),u.Jb(),u.Ib(38,"ion-input",11),u.Jb(),u.Jb(),u.Kb(39,"ion-col",6),u.Kb(40,"ion-item"),u.Kb(41,"ion-label",7),u.gc(42,"Factura "),u.Kb(43,"ion-text",8),u.gc(44,"*"),u.Jb(),u.Jb(),u.Ib(45,"ion-input",12),u.Jb(),u.Jb(),u.Jb(),u.Kb(46,"ion-row"),u.Kb(47,"ion-col",6),u.Kb(48,"ion-item"),u.Kb(49,"ion-label",7),u.gc(50,"HBW "),u.Kb(51,"ion-text",8),u.gc(52,"*"),u.Jb(),u.Jb(),u.Ib(53,"ion-input",13),u.Jb(),u.Jb(),u.Kb(54,"ion-col",6),u.Kb(55,"ion-item"),u.Kb(56,"ion-label",7),u.gc(57,"Pedimento "),u.Kb(58,"ion-text",8),u.gc(59,"*"),u.Jb(),u.Jb(),u.Ib(60,"ion-input",14),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(61,"ion-item"),u.Kb(62,"ion-label",7),u.gc(63,"RFC "),u.Kb(64,"ion-text",8),u.gc(65,"*"),u.Jb(),u.Jb(),u.Ib(66,"ion-input",15),u.fc(67,J,6,1,"ion-text",16),u.fc(68,K,5,0,"ion-text",17),u.Jb(),u.Kb(69,"ion-button",18),u.gc(70," Actualizar factura "),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb()),2&e&&(u.xb(7),u.ic("RFC ",t.rfc,""),u.xb(7),u.Zb("formGroup",t.facturaForm),u.xb(53),u.Zb("ngIf",null==t.facturaForm.controls.rfc.errors?null:t.facturaForm.controls.rfc.errors.existe),u.xb(1),u.Zb("ngIf",t.facturaForm.controls.rfc.valid),u.xb(1),u.Zb("disabled",t.facturaForm.untouched))},directives:[c.r,c.K,c.g,c.f,c.s,c.J,c.n,c.h,c.j,c.k,c.i,m.p,m.j,m.e,c.q,c.A,c.m,c.u,c.v,c.I,c.t,c.S,m.n,m.i,m.c,i.j,c.e],styles:[""]}),x);function y(e,t){if(1&e&&(u.Kb(0,"p"),u.gc(1),u.Vb(2,"date"),u.Jb()),2&e){var n=u.Ub();u.xb(1),u.hc(u.Wb(2,1,n.fechaInicio))}}function w(e,t){if(1&e&&(u.Kb(0,"p"),u.gc(1),u.Vb(2,"date"),u.Jb()),2&e){var n=u.Ub();u.xb(1),u.hc(u.Wb(2,1,n.fechaFinal))}}function F(e,t){if(1&e){var n=u.Lb();u.Kb(0,"ion-item"),u.Kb(1,"ion-checkbox",18),u.Sb("ngModelChange",(function(e){return u.cc(n),t.$implicit.check=e})),u.Jb(),u.Kb(2,"ion-label"),u.gc(3," RFC "),u.Kb(4,"p"),u.gc(5),u.Jb(),u.Jb(),u.Kb(6,"ion-label"),u.gc(7," Agente "),u.Kb(8,"p"),u.gc(9),u.Jb(),u.Jb(),u.Kb(10,"ion-label"),u.gc(11," Factura "),u.Kb(12,"p"),u.gc(13),u.Jb(),u.Jb(),u.Kb(14,"ion-label"),u.gc(15," Pedimento "),u.Kb(16,"p"),u.gc(17),u.Jb(),u.Jb(),u.Kb(18,"ion-label"),u.gc(19," Fecha "),u.Kb(20,"p"),u.gc(21),u.Jb(),u.Jb(),u.Jb()}if(2&e){var r=t.$implicit;u.xb(1),u.Zb("ngModel",r.check),u.xb(4),u.ic(" ",null==r?null:r.rfc," "),u.xb(4),u.ic(" ",null==r?null:r.agente," "),u.xb(4),u.ic(" ",null==r?null:r.factura," "),u.xb(4),u.ic(" ",null==r?null:r.pedimento," "),u.xb(4),u.ic(" ",null==r?null:r.fecha," ")}}var C,I,S,P=[{path:"",component:d,children:[{path:"",redirectTo:"buscar",pathMatch:"full"},{path:"buscar",component:(C=function(){function t(e,r,o,a,i){n(this,t),this.http=e,this.toastCtrl=r,this.actionSheetController=o,this.modalCtrl=a,this.auth=i,this.facturas=[],this.seleccionados=[],this.pagina=1,this.fechaInicio="",this.fechaFinal=""}return o(t,[{key:"ngOnInit",value:function(){this.cargarPagina()}},{key:"setFechaInicio",value:function(e){console.log("la fecha inicio es",e),this.fechaInicio=e}},{key:"setFechaFinal",value:function(e){console.log("la fecha final es",e),this.fechaFinal=e}},{key:"cargarPagina",value:function(){var e=15*(this.pagina-1);this.facturasPaginada(e,e+15)}},{key:"cambiarDePagina",value:function(e){var t,n;e?(n=15+(t=15*(this.pagina-1)),this.pagina++):(n=15+(t=15*(this.pagina-1)),this.pagina--),this.facturasPaginada(t,n),console.log("paginado",{inicio:t,final:n})}},{key:"facturasPaginada",value:function(e,t){var n=this;return this.http.get("".concat(p.a.apiUrl,"/facturas/paginas?rango1=").concat(e,"&rango2=").concat(t)).subscribe((function(r){console.log("De ".concat(e," a ").concat(t),r),r.success&&(n.facturas=r.data)}),(function(e){return console.log("Error al traer paginadas",e)}))}},{key:"editarFactura",value:function(t){return Object(h.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalCtrl.create({component:k,componentProps:this.facturas[t],backdropDismiss:!1});case 2:return r=n.sent,n.next=5,r.present();case 5:return n.next=7,r.onWillDismiss();case 7:(o=n.sent).data.completado&&(this.mostrarToast("Se gurdo correctamente","success"),console.log("ASi vienen los datos ",o.data),this.facturas[t]=o.data.nuevo,this.facturas=e(this.facturas));case 9:case"end":return n.stop()}}),n,this)})))}},{key:"seleccionar",value:function(){var e=this;this.facturas.forEach((function(t,n){t.check&&e.seleccionados.push({index:n,factura:t.factura})})),1==this.seleccionados.length?this.mostrarOpcionesIndividual(this.seleccionados[0].index):this.mostrarOpcionesMultiple(),console.log("Seleccionados",this.seleccionados)}},{key:"descargarZip",value:function(){var e=this,t=[];this.seleccionados.forEach((function(e){t.push(e.factura+".xml"),t.push(e.factura+".pdf")}));var n=(new Date).toISOString();this.http.post("http://portal-mx.swissport.com:8080/aduana/zip?zipFile="+n,t).toPromise().then((function(t){console.log("Resp de hacer zip archivos",t),t.success&&e.descargar(n)})).catch((function(t){console.log("Error al comprimir archios",t),e.mostrarToast("Error al descargar el zip","danger")}))}},{key:"mostrarOpcionesMultiple",value:function(){return Object(h.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actionSheetController.create({header:"Que deseas hacer con las facturas seleccionadas : ",cssClass:"my-custom-class",buttons:[{text:"Descargar xml y pdf seleccionados",icon:"cloud-download",handler:function(){n.descargarZip()}},{text:"Eliminar",icon:"trash",handler:function(){n.eliminarFacturasSeleccionadas()}},{text:"Canelar",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"mostrarOpcionesIndividual",value:function(e){return Object(h.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetController.create({header:"Que deseas hacer con la factura con RFC : "+this.facturas[e].rfc+", Agente: "+this.facturas[e].agente,cssClass:"my-custom-class",buttons:[{text:"Eliminar",icon:"trash",handler:function(){r.eliminarFactura(e)}},{text:"Editar",icon:"create",handler:function(){r.editarFactura(e)}},{text:"Abrir archivo XML",icon:"code-working",handler:function(){r.abrirArchivo(e,"xml")}},{text:"Abrir archivo PDF",icon:"document",handler:function(){r.abrirArchivo(e,"pdf")}},{text:"Canelar",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:this.seleccionados=[];case 6:case"end":return t.stop()}}),t,this)})))}},{key:"descargar",value:function(e){var t=document.createElement("a");t.href="".concat(p.a.apiFile,"/file/").concat(e,".zip"),t.setAttribute("target","download"),t.click(),t.remove()}},{key:"abrirArchivo",value:function(e,t){var n=document.createElement("a");n.href="".concat(p.a.apiFile,"/file/").concat(this.facturas[e].factura,".").concat(t),n.setAttribute("target","_blank"),n.click(),n.remove()}},{key:"eliminarFacturasSeleccionadas",value:function(){var e,t;return Object(h.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,n.prev=1,o=Object(h.a)(this.seleccionados);case 3:return n.next=5,o.next();case 5:if((r=n.sent).done){n.next=12;break}return a=r.value,console.log("Broooooo"),n.next=10,this.peticionEliminarFactura(a.index);case 10:n.next=3;break;case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),e={error:n.t0};case 17:if(n.prev=17,n.prev=18,n.t1=r&&!r.done&&(t=o.return),!n.t1){n.next=23;break}return n.next=23,t.call(o);case 23:if(n.prev=23,!e){n.next=26;break}throw e.error;case 26:return n.finish(23);case 27:return n.finish(17);case 28:this.seleccionados=[],console.log("Segun termino"),this.facturas=this.facturas.filter((function(e){return!e.check})),this.mostrarToast("Se borraron correctamente","success"),n.next=34;break;case 31:n.prev=31,n.t2=n.catch(0),this.mostrarToast("Ocurrio un error al borrarlos","danger");case 34:case"end":return n.stop()}}),n,this,[[0,31],[1,14,17,28],[18,,23,27]])})))}},{key:"peticionEliminarFactura",value:function(e){var t=this;return console.log("Puta peticion"),this.http.delete("".concat(p.a.apiUrl,"/facturas/id?id=").concat(this.facturas[e].id)).toPromise().then((function(e){console.log("resp al eliminar la factura",e)})).catch((function(e){t.mostrarToast("Algo salio mal...","danger"),console.log("Error al al eliminar la factura",e)}))}},{key:"eliminarFactura",value:function(e){var t=this;return this.http.delete("".concat(p.a.apiUrl,"/facturas/id?id=").concat(this.facturas[e].id)).subscribe((function(e){e.success?(t.actionSheetController.dismiss(),t.mostrarToast("Se elimino correctamente","success"),t.facturas=t.facturas.filter((function(e){return!e.check})),console.log("Las",t.facturas)):t.mostrarToast("Algo salio mal...","danger")}),(function(e){t.mostrarToast("Algo salio mal...","danger"),console.log("Error al al eliminar la factura",e)}))}},{key:"buscarFactura",value:function(e){console.log("Valor",e),this.peticionFactura(12==e.length||13==e.length?"facturas/rfc?rfc="+e:"facturas/factura?folio="+e)}},{key:"peticionFactura",value:function(e){var t=this;this.http.get("".concat(p.a.apiUrl,"/").concat(e)).subscribe((function(e){console.log("Resp de buscar factura",e),e.data.length>0?(t.facturas=e.data,t.mostrarToast("Se encontraron","success")):t.mostrarToast("No se encotraron","danger")}),(function(e){console.log("Error al buscar la factura",e)}))}},{key:"mostrarToast",value:function(e,t){return Object(h.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastCtrl.create({message:e,color:t,duration:3e3});case 2:return r=n.sent,n.next=5,r.present();case 5:case"end":return n.stop()}}),n,this)})))}}]),t}(),C.\u0275fac=function(e){return new(e||C)(u.Hb(g.a),u.Hb(c.T),u.Hb(c.a),u.Hb(c.P),u.Hb(l.a))},C.\u0275cmp=u.Bb({type:C,selectors:[["app-buscar"]],decls:47,vars:6,consts:[["color","primary",1,"ion-text-center"],["display-format","YYYY-MM-DD",2,"display","none",3,"ionChange"],["fechasInicio",""],["fechasFinal",""],["placeholder","Puedes buscar por RFC o FOLIO","inputmode","text","type","text","debounce","1000","oninput","this.value = this.value.toUpperCase()",3,"ionChange"],["size","6"],["expand","block","color","dark",3,"click"],["name","checkbox-outline"],["color","danger","expand","block",3,"click"],[4,"ngIf"],[3,"items"],[4,"virtualItem"],["type","number",2,"width","50%",3,"ngModel","ngModelChange"],["fill","outline",3,"disabled","click"],["mode","ios","fill","clear","shape","round",3,"disabled","click"],["name","chevron-back-circle"],["mode","ios","fill","clear","shape","round",3,"click"],["name","chevron-forward-circle"],[3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e){var n=u.Lb();u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar",0),u.Kb(2,"ion-datetime",1,2),u.Sb("ionChange",(function(e){return t.setFechaInicio(e.target.value)})),u.Jb(),u.Kb(4,"ion-datetime",1,3),u.Sb("ionChange",(function(e){return t.setFechaFinal(e.target.value)})),u.Jb(),u.Kb(6,"ion-title"),u.gc(7,"Buscar factura"),u.Jb(),u.Kb(8,"ion-searchbar",4),u.Sb("ionChange",(function(e){return t.buscarFactura(e.target.value)})),u.Jb(),u.Kb(9,"ion-row"),u.Kb(10,"ion-col",5),u.Kb(11,"ion-button",6),u.Sb("click",(function(){return t.seleccionar()})),u.Ib(12,"ion-icon",7),u.gc(13," Opciones Factura 's' seleccionada 's' "),u.Jb(),u.Jb(),u.Kb(14,"ion-col",5),u.Kb(15,"ion-row"),u.Kb(16,"ion-col",5),u.Kb(17,"ion-button",8),u.Sb("click",(function(){return u.cc(n),u.bc(3).open()})),u.gc(18," Fecha de inicio "),u.Jb(),u.fc(19,y,3,3,"p",9),u.Jb(),u.Kb(20,"ion-col",5),u.Kb(21,"ion-button",8),u.Sb("click",(function(){return u.cc(n),u.bc(5).open()})),u.gc(22," Fecha final "),u.Jb(),u.fc(23,w,3,3,"p",9),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(24,"ion-content"),u.Kb(25,"ion-virtual-scroll",10),u.fc(26,F,22,6,"ion-item",11),u.Jb(),u.Kb(27,"ion-footer"),u.Kb(28,"ion-toolbar"),u.Kb(29,"ion-row"),u.Kb(30,"ion-col",5),u.Kb(31,"ion-item"),u.Kb(32,"ion-label"),u.gc(33,"Pagina:"),u.Jb(),u.Kb(34,"input",12),u.Sb("ngModelChange",(function(e){return t.pagina=e})),u.Jb(),u.Kb(35,"ion-button",13),u.Sb("click",(function(){return t.cargarPagina()})),u.gc(36," Cargar pag "),u.Jb(),u.Jb(),u.Jb(),u.Kb(37,"ion-col",5),u.Kb(38,"ion-row"),u.Kb(39,"ion-col",5),u.Kb(40,"ion-button",14),u.Sb("click",(function(){return t.cambiarDePagina(!1)})),u.gc(41," Retroceder pagina "),u.Ib(42,"ion-icon",15),u.Jb(),u.Jb(),u.Kb(43,"ion-col",5),u.Kb(44,"ion-button",16),u.Sb("click",(function(){return t.cambiarDePagina(!0)})),u.gc(45," Siguiente pagina "),u.Ib(46,"ion-icon",17),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb()}2&e&&(u.xb(19),u.Zb("ngIf",""!=t.fechaInicio),u.xb(4),u.Zb("ngIf",""!=t.fechaFinal),u.xb(2),u.Zb("items",t.facturas),u.xb(9),u.Zb("ngModel",t.pagina),u.xb(1),u.Zb("disabled",t.pagina<1),u.xb(5),u.Zb("disabled",1==t.pagina))},directives:[c.r,c.K,c.o,c.R,c.J,c.B,c.S,c.A,c.m,c.f,c.s,i.j,c.n,c.L,c.U,c.p,c.u,c.v,m.l,m.a,m.i,m.k,c.l,c.c],pipes:[i.d],styles:[""]}),C)},{path:"usuarios",loadChildren:function(){return a.e(13).then(a.bind(null,"IPPq")).then((function(e){return e.UsuariosTabsPageModule}))}},{path:"pagos",loadChildren:function(){return a.e(12).then(a.bind(null,"o+dm")).then((function(e){return e.PagosPageModule}))}}]}],E=((S=function e(){n(this,e)}).\u0275mod=u.Fb({type:S}),S.\u0275inj=u.Eb({factory:function(e){return new(e||S)},imports:[[s.h.forChild(P)],s.h]}),S),O=((I=function e(){n(this,e)}).\u0275mod=u.Fb({type:I}),I.\u0275inj=u.Eb({factory:function(e){return new(e||I)},imports:[[i.b,c.M,E,g.b,m.f]]}),I)}}])}();