(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57f50206"],{"371d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Nombre de familia"}},[a("el-input",{staticStyle:{width:"75%"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"Rut"}},[a("el-input",{staticStyle:{width:"75%"},model:{value:e.form.rut,callback:function(t){e.$set(e.form,"rut",t)},expression:"form.rut"}})],1),a("el-form-item",{attrs:{label:"Zona de estadia"}},[a("el-select",{attrs:{placeholder:"Seleccione su zona de acampado"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"Castaños",value:"Castaños"}}),a("el-option",{attrs:{label:"Manzanos",value:"Manzanos"}}),a("el-option",{attrs:{label:"Pampa",value:"Pampa"}}),a("el-option",{attrs:{label:"Rosales",value:"Rosales"}})],1)],1),a("el-form-item",{attrs:{label:"Fecha de estadia"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"desde"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}}),a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"hasta"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}})],1),a("el-form-item",{attrs:{label:"Telefono de contacto"}},[a("el-col",{attrs:{span:11}},[a("el-input",{staticStyle:{width:"100%"},model:{value:e.form.telefono,callback:function(t){e.$set(e.form,"telefono",t)},expression:"form.telefono"}})],1)],1),a("el-form-item",{attrs:{label:"Correo de contacto"}},[a("el-col",{attrs:{span:11}},[a("el-input",{model:{value:e.form.correo,callback:function(t){e.$set(e.form,"correo",t)},expression:"form.correo"}})],1)],1),a("el-form-item",{attrs:{label:"Forma de pago"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"Efectivo",name:"type"}}),a("el-checkbox",{attrs:{label:"Credito",name:"type"}}),a("el-checkbox",{attrs:{label:"Debito",name:"type"}}),a("el-checkbox",{attrs:{label:"F-pay",name:"type"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Crear Reserva")]),a("el-button",{on:{click:e.onCancel}},[e._v("Cancelar")])],1)],1)],1)},l=[],r=a("bc3a"),s=a.n(r),n={data:function(){return{form:{name:"",rut:"",region:"",date1:"",date2:"",telefono:"",correo:"",type:[]}}},methods:{onSubmit:function(){console.log(this.form.date1),s.a.post("https://siloscastanos-default-rtdb.firebaseio.com/reservas.json",this.form),this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})}}},c=n,i=(a("7a11"),a("2877")),m=Object(i["a"])(c,o,l,!1,null,"c00b3712",null);t["default"]=m.exports},"7a11":function(e,t,a){"use strict";a("d977")},d977:function(e,t,a){}}]);