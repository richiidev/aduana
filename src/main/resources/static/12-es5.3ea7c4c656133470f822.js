!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7PqN":function(t,n,a){"use strict";a.r(n),a.d(n,"FacturasTabsPageModule",(function(){return O}));var c=a("ofXK"),i=a("3Pt+"),l=a("TEn/"),u=a("tyNb"),s=a("mrSG"),b=a("AytR"),f=a("fXoL"),d=a("tk/3");function m(e,t){1&e&&(f.Kb(0,"p"),f.ec(1,"El RFC es necesario"),f.Jb())}function p(e,t){if(1&e&&(f.Kb(0,"ion-text",8),f.dc(1,m,2,0,"p",19),f.Kb(2,"p"),f.ec(3," El RFC "),f.Kb(4,"ion-badge",20),f.ec(5,"NO EXISTE"),f.Jb(),f.Jb(),f.Jb()),2&e){var r=f.Ub();f.xb(1),f.Xb("ngIf",(null==r.facturaForm.controls.rfc.errors?null:r.facturaForm.controls.rfc.errors.required)&&r.facturaForm.controls.rfc.dirty)}}function h(e,t){1&e&&(f.Kb(0,"ion-text",21),f.Kb(1,"p"),f.ec(2," El RFC "),f.Kb(3,"ion-badge",22),f.ec(4,"EXISTE"),f.Jb(),f.Jb(),f.Jb())}var g,J=((g=function(){function e(t,n,o){r(this,e),this.modalCtrl=t,this.http=n,this.toastCtrl=o,this.rfc=""}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.cargarFormulario(),this.modalCtrl.getTop().then((function(t){console.log("Los datos recibidos son: ",t.componentProps),e.rfc=t.componentProps.rfc,e.id=t.componentProps.id,e.facturaForm.setValue({agente:t.componentProps.agente,almacen:t.componentProps.almacen,awb:t.componentProps.awb,factura:t.componentProps.factura,hbw:t.componentProps.hbw,pedimento:t.componentProps.pedimento,rfc:t.componentProps.rfc})})).catch((function(e){return console.log("Error al cargar el modal",e)}))}},{key:"cargarFormulario",value:function(){this.facturaForm=new i.c({agente:new i.a(null,i.l.required),almacen:new i.a(null,i.l.required),awb:new i.a(null,i.l.required),factura:new i.a(null,i.l.required),hbw:new i.a(null,i.l.required),pedimento:new i.a(null,i.l.required),rfc:new i.a(null,i.l.required,this.rfcUnico.bind(this))})}},{key:"editarFactura",value:function(){var e=this,t=Object.assign(Object.assign({},this.facturaForm.value),{fecha:(new Date).toISOString(),id:this.id});this.http.put(b.a.apiUrl+"/facturas",t).subscribe((function(t){console.log("Resp de actualizar factura",t),t.success?e.cerrarModal(!0,t.data):e.mostrarToast("Error al crear la factura","danger")}),(function(t){e.mostrarToast("Error al crear la factura","danger"),console.log("Error al crear la factura",t)})),console.log("La factura final sera",t)}},{key:"cerrarModal",value:function(e,t){this.modalCtrl.dismiss({completado:e,nuevo:t})}},{key:"rfcUnico",value:function(e){var t=this;return new Promise((function(e,r){return Object(s.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.get("".concat(b.a.apiUrl,"/usuario/rfc/?rfc=").concat(this.facturaForm.controls.rfc.value)).subscribe((function(t){console.log("Se hizo bien",t),e(1==t.data.length?null:{existe:!0})}),(function(t){console.log("Se hizo MAL",t),e({existe:!0})}));case 2:case"end":return t.stop()}}),t,this)})))}))}},{key:"mostrarToast",value:function(e,t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.toastCtrl.create({message:e,color:t,duration:3e3});case 2:return r.abrupt("return",r.sent.present());case 3:case"end":return r.stop()}}),r,this)})))}}]),e}()).\u0275fac=function(e){return new(e||g)(f.Hb(l.M),f.Hb(d.a),f.Hb(l.Q))},g.\u0275cmp=f.Bb({type:g,selectors:[["app-editar-factura"]],decls:71,vars:5,consts:[[1,"ion-text-center"],["slot","start"],["color","dark",3,"click"],["name","chevron-back-circle"],[3,"formGroup","ngSubmit"],["fixed",""],["size","6"],["position","floating"],["color","danger"],["required","","formControlName","agente","type","text"],["required","","formControlName","almacen","type","text"],["required","","formControlName","awb","type","text"],["required","","formControlName","factura","type","text"],["required","","formControlName","hbw","type","text"],["required","","formControlName","pedimento","type","text"],["required","","formControlName","rfc","type","text"],["color","danger",4,"ngIf"],["color","success",4,"ngIf"],["type","submit","expand","full",3,"disabled"],[4,"ngIf"],["color","danger","mode","ios"],["color","success"],["color","success","mode","ios"]],template:function(e,t){1&e&&(f.Kb(0,"ion-header"),f.Kb(1,"ion-toolbar",0),f.Kb(2,"ion-buttons",1),f.Kb(3,"ion-button",2),f.Sb("click",(function(){return t.cerrarModal(!1)})),f.Ib(4,"ion-icon",3),f.ec(5," Cancelar "),f.Jb(),f.Jb(),f.Kb(6,"ion-title"),f.ec(7),f.Jb(),f.Jb(),f.Jb(),f.Kb(8,"ion-content"),f.Kb(9,"ion-card"),f.Kb(10,"ion-card-header",0),f.Kb(11,"ion-card-title"),f.ec(12,"Ingresa los nuevos datos "),f.Jb(),f.Jb(),f.Kb(13,"ion-card-content"),f.Kb(14,"form",4),f.Sb("ngSubmit",(function(){return t.editarFactura()})),f.Kb(15,"ion-grid",5),f.Kb(16,"ion-row"),f.Kb(17,"ion-col",6),f.Kb(18,"ion-item"),f.Kb(19,"ion-label",7),f.ec(20,"Agente "),f.Kb(21,"ion-text",8),f.ec(22,"*"),f.Jb(),f.Jb(),f.Ib(23,"ion-input",9),f.Jb(),f.Jb(),f.Kb(24,"ion-col",6),f.Kb(25,"ion-item"),f.Kb(26,"ion-label",7),f.ec(27,"Almacen "),f.Kb(28,"ion-text",8),f.ec(29,"*"),f.Jb(),f.Jb(),f.Ib(30,"ion-input",10),f.Jb(),f.Jb(),f.Jb(),f.Kb(31,"ion-row"),f.Kb(32,"ion-col",6),f.Kb(33,"ion-item"),f.Kb(34,"ion-label",7),f.ec(35,"AWB "),f.Kb(36,"ion-text",8),f.ec(37,"*"),f.Jb(),f.Jb(),f.Ib(38,"ion-input",11),f.Jb(),f.Jb(),f.Kb(39,"ion-col",6),f.Kb(40,"ion-item"),f.Kb(41,"ion-label",7),f.ec(42,"Factura "),f.Kb(43,"ion-text",8),f.ec(44,"*"),f.Jb(),f.Jb(),f.Ib(45,"ion-input",12),f.Jb(),f.Jb(),f.Jb(),f.Kb(46,"ion-row"),f.Kb(47,"ion-col",6),f.Kb(48,"ion-item"),f.Kb(49,"ion-label",7),f.ec(50,"HBW "),f.Kb(51,"ion-text",8),f.ec(52,"*"),f.Jb(),f.Jb(),f.Ib(53,"ion-input",13),f.Jb(),f.Jb(),f.Kb(54,"ion-col",6),f.Kb(55,"ion-item"),f.Kb(56,"ion-label",7),f.ec(57,"Pedimento "),f.Kb(58,"ion-text",8),f.ec(59,"*"),f.Jb(),f.Jb(),f.Ib(60,"ion-input",14),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Kb(61,"ion-item"),f.Kb(62,"ion-label",7),f.ec(63,"RFC "),f.Kb(64,"ion-text",8),f.ec(65,"*"),f.Jb(),f.Jb(),f.Ib(66,"ion-input",15),f.dc(67,p,6,1,"ion-text",16),f.dc(68,h,5,0,"ion-text",17),f.Jb(),f.Kb(69,"ion-button",18),f.ec(70," Actualizar factura "),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb()),2&e&&(f.xb(7),f.gc("RFC ",t.rfc,""),f.xb(7),f.Xb("formGroup",t.facturaForm),f.xb(53),f.Xb("ngIf",null==t.facturaForm.controls.rfc.errors?null:t.facturaForm.controls.rfc.errors.existe),f.xb(1),f.Xb("ngIf",t.facturaForm.controls.rfc.valid),f.xb(1),f.Xb("disabled",t.facturaForm.untouched))},directives:[l.o,l.H,l.e,l.d,l.p,l.G,l.k,l.f,l.h,l.i,l.g,i.m,i.i,i.d,l.n,l.x,l.j,l.r,l.s,l.F,l.q,l.P,i.k,i.h,i.b,c.i,l.c],styles:[""]}),g);function K(e,t){if(1&e){var r=f.Lb();f.Kb(0,"ion-item",4),f.Sb("click",(function(){f.ac(r);var e=t.index;return f.Ub().mostrarOpciones(e)})),f.Kb(1,"ion-label"),f.ec(2," RFC "),f.Kb(3,"p"),f.ec(4),f.Jb(),f.Jb(),f.Kb(5,"ion-label"),f.ec(6," Agente "),f.Kb(7,"p"),f.ec(8),f.Jb(),f.Jb(),f.Kb(9,"ion-label"),f.ec(10," Factura "),f.Kb(11,"p"),f.ec(12),f.Jb(),f.Jb(),f.Kb(13,"ion-label"),f.ec(14," pedimento "),f.Kb(15,"p"),f.ec(16),f.Jb(),f.Jb(),f.Kb(17,"ion-label"),f.ec(18," Fecha "),f.Kb(19,"p"),f.ec(20),f.Jb(),f.Jb(),f.Jb()}if(2&e){var n=t.$implicit;f.xb(4),f.gc(" ",null==n?null:n.rfc," "),f.xb(4),f.gc(" ",null==n?null:n.agente," "),f.xb(4),f.gc(" ",null==n?null:n.factura," "),f.xb(4),f.gc(" ",null==n?null:n.pedimento," "),f.xb(4),f.gc(" ",null==n?null:n.fecha," ")}}var v,x=((v=function(){function t(e,n,o,a){r(this,t),this.http=e,this.toastCtrl=n,this.actionSheetController=o,this.modalCtrl=a,this.facturas=void 0}return o(t,[{key:"ngOnInit",value:function(){}},{key:"trackByFn",value:function(e,t){return e}},{key:"editarFactura",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:J,componentProps:this.facturas[e],backdropDismiss:!1});case 2:return r=t.sent,t.next=5,r.present();case 5:return t.next=7,r.onWillDismiss();case 7:(n=t.sent).data.completado&&(this.mostrarToast("Se gurdo correctamente","success"),console.log("ASi vienen los datos ",n.data),this.facturas[e]=n.data.nuevo);case 9:case"end":return t.stop()}}),t,this)})))}},{key:"mostrarOpciones",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetController.create({header:"Que deseas hacer con la factura con RFC : "+this.facturas[e].rfc+", Agente: "+this.facturas[e].agente,cssClass:"my-custom-class",buttons:[{text:"Eliminar",icon:"trash",handler:function(){n.eliminarFactura(e)}},{text:"Editar",icon:"create",handler:function(){n.editarFactura(e)}},{text:"Abrir archivo XML",icon:"code-working",handler:function(){n.abrirArchivo(e,"xml")}},{text:"Abrir archivo PDF",icon:"document",handler:function(){n.abrirArchivo(e,"pdf")}},{text:"Canelar",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:return r=t.sent,t.next=5,r.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"abrirArchivo",value:function(e,t){var r=document.createElement("a");r.href="".concat(b.a.apiFile,"/file/").concat(this.facturas[e].factura,".").concat(t),r.setAttribute("target","_blank"),r.click(),r.remove()}},{key:"eliminarFactura",value:function(t){var r=this;this.http.delete("".concat(b.a.apiUrl,"/facturas/id?id=").concat(this.facturas[t].id)).subscribe((function(n){n.success?(r.actionSheetController.dismiss(),r.mostrarToast("Se elimino correctamente","success"),r.facturas.splice(t,1),r.facturas=e(r.facturas),console.log("Se deberia borrar",r.facturas)):r.mostrarToast("Algo salio mal...","danger")}))}},{key:"buscarFactura",value:function(e){console.log("Valor",e.target.value),this.peticionFactura("prueba"==e.target.value||13==e.target.value.length?"facturas/rfc?rfc="+e.target.value:"facturas/factura?folio="+e.target.value)}},{key:"peticionFactura",value:function(e){var t=this;this.http.get("".concat(b.a.apiUrl,"/").concat(e)).subscribe((function(e){console.log("Resp de buscar factura",e),e.data.length>0?(t.facturas=e.data,t.mostrarToast("Se encontraron","success")):t.mostrarToast("No se encotraron","danger")}),(function(e){console.log("Error al buscar la factura",e)}))}},{key:"mostrarToast",value:function(e,t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.toastCtrl.create({message:e,color:t,duration:3e3});case 2:return n=r.sent,r.next=5,n.present();case 5:case"end":return r.stop()}}),r,this)})))}}]),t}()).\u0275fac=function(e){return new(e||v)(f.Hb(d.a),f.Hb(l.Q),f.Hb(l.a),f.Hb(l.M))},v.\u0275cmp=f.Bb({type:v,selectors:[["app-buscar"]],decls:8,vars:2,consts:[["color","primary",1,"ion-text-center"],["placeholder","Puedes buscar por RFC o FOLIO","inputmode","text","type","text","debounce","1000",3,"ionChange"],[3,"items","trackBy"],[3,"click",4,"virtualItem"],[3,"click"]],template:function(e,t){1&e&&(f.Kb(0,"ion-header"),f.Kb(1,"ion-toolbar",0),f.Kb(2,"ion-title"),f.ec(3,"Buscar factura"),f.Jb(),f.Kb(4,"ion-searchbar",1),f.Sb("ionChange",(function(e){return t.buscarFactura(e)})),f.Jb(),f.Jb(),f.Jb(),f.Kb(5,"ion-content"),f.Kb(6,"ion-virtual-scroll",2),f.dc(7,K,21,5,"ion-item",3),f.Jb(),f.Jb()),2&e&&(f.xb(6),f.Xb("items",t.facturas)("trackBy",t.trackByFn))},directives:[l.o,l.H,l.G,l.y,l.P,l.k,l.I,l.R,l.r,l.s],styles:[""]}),v);function y(e,t){1&e&&(f.Kb(0,"p"),f.ec(1,"El RFC es necesario"),f.Jb())}function w(e,t){if(1&e&&(f.Kb(0,"ion-text",6),f.dc(1,y,2,0,"p",26),f.Kb(2,"p"),f.ec(3," El RFC "),f.Kb(4,"ion-badge",27),f.ec(5,"NO EXISTE"),f.Jb(),f.Jb(),f.Jb()),2&e){var r=f.Ub();f.xb(1),f.Xb("ngIf",(null==r.facturaForm.controls.rfc.errors?null:r.facturaForm.controls.rfc.errors.required)&&r.facturaForm.controls.rfc.dirty)}}function F(e,t){1&e&&(f.Kb(0,"ion-text",28),f.Kb(1,"p"),f.ec(2," El RFC "),f.Kb(3,"ion-badge",29),f.ec(4,"EXISTE"),f.Jb(),f.Jb(),f.Jb())}function k(e,t){if(1&e&&(f.Kb(0,"ion-item",30),f.Kb(1,"ion-label",28),f.ec(2),f.Jb(),f.Jb()),2&e){var r=f.Ub();f.xb(2),f.gc("PDF seleccionado: ",r.pdf.name,"")}}function C(e,t){if(1&e&&(f.Kb(0,"ion-item",30),f.Kb(1,"ion-label",28),f.ec(2),f.Jb(),f.Jb()),2&e){var r=f.Ub();f.xb(2),f.gc("XML seleccionado: ",r.xml.name,"")}}var I,S,q,A,R=((I=function(){function e(t,n,o){r(this,e),this.http=t,this.toastCtrl=n,this.cargando=o}return o(e,[{key:"ngOnInit",value:function(){this.cargarFormulario()}},{key:"subirArchivo",value:function(e,t){var r=t.type.split("/")[1],n=new FormData;return n.append("file",t,e+"."+r),this.http.post(b.a.apiUrl+"/upload",n).toPromise().then((function(e){console.log("Resp para subir archivos",e)})).catch((function(e){return console.log("Error al subir archivos",e)}))}},{key:"seleccionarArchivo",value:function(e){0==(e.target||e.srcElement).value.length?console.log("Cancelo la seleccion"):(console.log("Archivo seleccionado",e.target.files[0]),e.target.files[0].type.endsWith("/pdf")?(this.pdf=e.target.files[0],this.facturaForm.controls.pdf.setValue(!0)):e.target.files[0].type.endsWith("/xml")&&(this.xml=e.target.files[0],this.facturaForm.controls.xml.setValue(!0)))}},{key:"cargarFormulario",value:function(){this.facturaForm=new i.c({agente:new i.a(null,i.l.required),almacen:new i.a(null,i.l.required),awb:new i.a(null,i.l.required),factura:new i.a(null,i.l.required),hbw:new i.a(null,i.l.required),pedimento:new i.a(null,i.l.required),rfc:new i.a(null,[i.l.required,i.l.minLength(4),i.l.maxLength(18)],this.rfcUnico.bind(this)),pdf:new i.a(!1,i.l.requiredTrue),xml:new i.a(!1,i.l.requiredTrue)})}},{key:"crearFactura",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mostrarCargando();case 2:t={agente:this.facturaForm.value.agente,almacen:this.facturaForm.value.almacen,awb:this.facturaForm.value.awb,factura:this.facturaForm.value.factura,hbw:this.facturaForm.value.hbw,pedimento:this.facturaForm.value.pedimento,rfc:this.facturaForm.value.rfc,fecha:(new Date).toISOString()},this.subirArchivo(this.facturaForm.value.factura,this.pdf).then((function(){return r.subirArchivo(r.facturaForm.value.factura,r.xml)})).then((function(){return r.http.post(b.a.apiUrl+"/facturas",t).toPromise()})).then((function(e){console.log("Resp de crear factura",e),e.success?(r.cargando.dismiss(),r.mostrarToast("Se creo correctamente la factura","success"),r.facturaForm.reset({agente:null,almacen:null,awb:null,factura:null,hbw:null,pedimento:null,rfc:null,pdf:!1,xml:!1}),r.pdf=void 0,r.xml=void 0):(r.cargando.dismiss(),r.mostrarToast("Error al crear la factura","danger"))})).catch((function(e){r.cargando.dismiss(),r.mostrarToast("Error al crear la factura","danger"),console.log("Error al subir archivos",e)})),console.log("La factura final sera",t);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"rfcUnico",value:function(e){var t=this;return new Promise((function(e,r){t.http.get("".concat(b.a.apiUrl,"/usuario/rfcValidacion/?rfc=").concat(t.facturaForm.controls.rfc.value)).subscribe((function(t){console.log("Se hizo bien",t),e(1==t.data.length?null:{existe:!0})}),(function(t){console.log("Se hizo MAL",t),e({existe:!0})}))}))}},{key:"mostrarCargando",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.cargando.create({message:"Subiendo archivos y guardando la factura, espere....",backdropDismiss:!1});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"mostrarToast",value:function(e,t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.toastCtrl.create({message:e,color:t,duration:3e3});case 2:return r.abrupt("return",r.sent.present());case 3:case"end":return r.stop()}}),r,this)})))}}]),e}()).\u0275fac=function(e){return new(e||I)(f.Hb(d.a),f.Hb(l.Q),f.Hb(l.L))},I.\u0275cmp=f.Bb({type:I,selectors:[["app-crear"]],decls:96,vars:6,consts:[["color","dark",1,"ion-text-center"],[1,"ion-text-center"],[3,"formGroup"],["fixed",""],["size","6"],["position","floating"],["color","danger"],["required","","formControlName","agente","type","text"],["required","","formControlName","almacen","type","text"],["required","","formControlName","awb","type","text"],["required","","formControlName","factura","type","text"],["required","","formControlName","hbw","type","text"],["required","","formControlName","pedimento","type","text"],["size","12"],["debounce","1000","required","","formControlName","rfc","oninput","this.value = this.value.toUpperCase()","type","text"],["color","danger",4,"ngIf"],["color","success",4,"ngIf"],["name","document-outline",2,"font-size","150px"],["color","dark","expand","block","shape","round",3,"click"],["slot","start","name","add"],["style","text-align: center;",4,"ngIf"],["name","code-working",2,"font-size","150px"],["expand","block","color","dark","shape","round",3,"click"],["expand","full",3,"disabled","click"],["type","file","accept",".pdf,.xml",2,"display","none",3,"change"],["archivos",""],[4,"ngIf"],["color","danger","mode","ios"],["color","success"],["color","success","mode","ios"],[2,"text-align","center"]],template:function(e,t){if(1&e){var r=f.Lb();f.Kb(0,"ion-header"),f.Kb(1,"ion-toolbar",0),f.Kb(2,"ion-title"),f.ec(3," Crear Factura"),f.Jb(),f.Jb(),f.Jb(),f.Kb(4,"ion-content"),f.Kb(5,"ion-card"),f.Kb(6,"ion-card-header",1),f.Kb(7,"ion-card-title"),f.ec(8,"Ingresa los datos necesarios"),f.Jb(),f.Jb(),f.Kb(9,"ion-card-content"),f.Kb(10,"form",2),f.Kb(11,"ion-grid",3),f.Kb(12,"ion-row"),f.Kb(13,"ion-col",4),f.Kb(14,"ion-item"),f.Kb(15,"ion-label",5),f.ec(16,"Agente "),f.Kb(17,"ion-text",6),f.ec(18,"*"),f.Jb(),f.Jb(),f.Ib(19,"ion-input",7),f.Jb(),f.Jb(),f.Kb(20,"ion-col",4),f.Kb(21,"ion-item"),f.Kb(22,"ion-label",5),f.ec(23,"Almacen "),f.Kb(24,"ion-text",6),f.ec(25,"*"),f.Jb(),f.Jb(),f.Ib(26,"ion-input",8),f.Jb(),f.Jb(),f.Jb(),f.Kb(27,"ion-row"),f.Kb(28,"ion-col",4),f.Kb(29,"ion-item"),f.Kb(30,"ion-label",5),f.ec(31,"AWB "),f.Kb(32,"ion-text",6),f.ec(33,"*"),f.Jb(),f.Jb(),f.Ib(34,"ion-input",9),f.Jb(),f.Jb(),f.Kb(35,"ion-col",4),f.Kb(36,"ion-item"),f.Kb(37,"ion-label",5),f.ec(38,"Factura "),f.Kb(39,"ion-text",6),f.ec(40,"*"),f.Jb(),f.Jb(),f.Ib(41,"ion-input",10),f.Jb(),f.Jb(),f.Jb(),f.Kb(42,"ion-row"),f.Kb(43,"ion-col",4),f.Kb(44,"ion-item"),f.Kb(45,"ion-label",5),f.ec(46,"HBW "),f.Kb(47,"ion-text",6),f.ec(48,"*"),f.Jb(),f.Jb(),f.Ib(49,"ion-input",11),f.Jb(),f.Jb(),f.Kb(50,"ion-col",4),f.Kb(51,"ion-item"),f.Kb(52,"ion-label",5),f.ec(53,"Pedimento "),f.Kb(54,"ion-text",6),f.ec(55,"*"),f.Jb(),f.Jb(),f.Ib(56,"ion-input",12),f.Jb(),f.Jb(),f.Jb(),f.Kb(57,"ion-row"),f.Kb(58,"ion-col",13),f.Kb(59,"ion-item"),f.Kb(60,"ion-label",5),f.ec(61,"RFC "),f.Kb(62,"ion-text",6),f.ec(63,"*"),f.Jb(),f.Jb(),f.Ib(64,"ion-input",14),f.dc(65,w,6,1,"ion-text",15),f.dc(66,F,5,0,"ion-text",16),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Kb(67,"ion-card"),f.Kb(68,"ion-grid",3),f.Kb(69,"ion-row"),f.Kb(70,"ion-col",4),f.Kb(71,"ion-card"),f.Kb(72,"ion-card-header",1),f.Kb(73,"ion-card-title"),f.ec(74,"Archivo PDF necesario"),f.Jb(),f.Jb(),f.Kb(75,"ion-card-content",1),f.Ib(76,"ion-icon",17),f.Jb(),f.Kb(77,"ion-button",18),f.Sb("click",(function(){return f.ac(r),f.Zb(95).click()})),f.ec(78," Seleccionar PDF "),f.Ib(79,"ion-icon",19),f.Jb(),f.dc(80,k,3,1,"ion-item",20),f.Jb(),f.Jb(),f.Kb(81,"ion-col",4),f.Kb(82,"ion-card"),f.Kb(83,"ion-card-header",1),f.Kb(84,"ion-card-title"),f.ec(85,"Archivo XML necesario"),f.Jb(),f.Jb(),f.Kb(86,"ion-card-content",1),f.Ib(87,"ion-icon",21),f.Jb(),f.Kb(88,"ion-button",22),f.Sb("click",(function(){return f.ac(r),f.Zb(95).click()})),f.ec(89," Seleccionar XML "),f.Ib(90,"ion-icon",19),f.Jb(),f.dc(91,C,3,1,"ion-item",20),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Kb(92,"ion-button",23),f.Sb("click",(function(){return t.crearFactura()})),f.ec(93," Crear factura "),f.Jb(),f.Jb(),f.Kb(94,"input",24,25),f.Sb("change",(function(e){return t.seleccionarArchivo(e)})),f.Jb(),f.Jb()}2&e&&(f.xb(10),f.Xb("formGroup",t.facturaForm),f.xb(55),f.Xb("ngIf",null==t.facturaForm.controls.rfc.errors?null:t.facturaForm.controls.rfc.errors.existe),f.xb(1),f.Xb("ngIf",t.facturaForm.controls.rfc.valid),f.xb(14),f.Xb("ngIf",null!=t.pdf),f.xb(11),f.Xb("ngIf",null!=t.xml),f.xb(1),f.Xb("disabled",t.facturaForm.invalid))},directives:[l.o,l.H,l.G,l.k,l.f,l.h,l.i,l.g,i.m,i.i,i.d,l.n,l.x,l.j,l.r,l.s,l.F,l.q,l.P,i.k,i.h,i.b,c.i,l.p,l.d,l.c],styles:[""]}),I),E=[{path:"",component:(S=function(){function e(){r(this,e)}return o(e,[{key:"ngOnInit",value:function(){}}]),e}(),S.\u0275fac=function(e){return new(e||S)},S.\u0275cmp=f.Bb({type:S,selectors:[["app-facturas-tabs"]],decls:10,vars:0,consts:[["color","dark","slot","bottom,top"],["tab","crear"],["name","add-circle"],["tab","buscar"],["name","search"]],template:function(e,t){1&e&&(f.Kb(0,"ion-tabs"),f.Kb(1,"ion-tab-bar",0),f.Kb(2,"ion-tab-button",1),f.Ib(3,"ion-icon",2),f.Kb(4,"ion-label"),f.ec(5,"Crear"),f.Jb(),f.Jb(),f.Kb(6,"ion-tab-button",3),f.Ib(7,"ion-icon",4),f.Kb(8,"ion-label"),f.ec(9,"Buscar"),f.Jb(),f.Jb(),f.Jb(),f.Jb())},directives:[l.E,l.C,l.D,l.p,l.s],styles:[""]}),S),children:[{path:"",redirectTo:"crear",pathMatch:"full"},{path:"crear",component:R},{path:"buscar",component:x}]}],P=((A=function e(){r(this,e)}).\u0275mod=f.Fb({type:A}),A.\u0275inj=f.Eb({factory:function(e){return new(e||A)},imports:[[u.h.forChild(E)],u.h]}),A),O=((q=function e(){r(this,e)}).\u0275mod=f.Fb({type:q}),q.\u0275inj=f.Eb({factory:function(e){return new(e||q)},imports:[[c.b,l.J,P,i.e,i.j,d.b]]}),q)}}])}();