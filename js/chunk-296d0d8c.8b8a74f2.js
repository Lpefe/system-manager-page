(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-296d0d8c","chunk-54d2584a","chunk-3c26585a","chunk-8e64a42a","chunk-3297d32d"],{1629:function(e,a,l){"use strict";l("ac1a")},"30d1":function(e,a,l){},"4d8a":function(e,a,l){},"4e70":function(e,a,l){"use strict";l("73e0")},"51b4":function(e,a,l){"use strict";l("30d1")},6135:function(e,a,l){"use strict";l.r(a);var t,o=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"contractorFile"},[l("commonSelect",{attrs:{columnList:e.columnList,formData:e.formData,onSubmit:e.onSubmit,onAdd:e.onAdd}}),l("div",{staticClass:"commonTableBox"},[l("commonTable",{attrs:{tableData:e.tableData,dblClick:e.init,listMethods:e.init,columnList:e.tableColumnList,tableConfig:e.tableConfig}})],1),l("screenDialog",{attrs:{dialogSet:e.dialogSet,dialogBtn:e.dialogBtn,closeDialog:e.closeDialog}},[l("template",{slot:"dialog-components"},[l("contractorAdd",{attrs:{data:e.detailData}})],1)],2),l("screenDialog",{attrs:{dialogSet:e.dialogSetDetail,dialogBtn:e.dialogBtnDetail,closeDialog:e.closeDialogDetail}},[l("template",{slot:"dialog-components"},[l("contractorDetail",{attrs:{data:e.detailData}})],1)],2)],1)},r=[],n=l("ade3"),i=l("b9b8"),m=l("b837"),c=l("f4ae"),s=l("f02a"),d=l("6442"),p={name:"承包商档案",components:{screenDialog:i["default"],commonSelect:c["default"],commonTable:m["default"],contractorDetail:s["default"],contractorAdd:d["default"]},created:function(){},mounted:function(){},data:function(){var e=this;return{detailData:{},dialogSet:{title:"新增",isShow:!1,width:"45%",modal:!0,fullscreen:!1,footer:!0,append:!1,top:"2vh"},dialogSetDetail:{title:"详情",isShow:!1,width:"85%",modal:!0,fullscreen:!1,footer:!0,append:!1,top:"2vh"},dialogBtn:[{name:"确定",type:"primary",handleClick:function(){e.saveSystem("1")}},{name:"取消",type:"info",handleClick:function(){e.dialogSet.isShow=!1}}],dialogBtnDetail:[{name:"确定",type:"primary",handleClick:function(){e.saveSystem("1")}},{name:"取消",type:"info",handleClick:function(){e.dialogSetDetail.isShow=!1}}],tableConfig:{headerClassName:"",stripe:!0,tableHeight:"calc(100% - 40px)",paginationShow:!0,tableRefName:"",limit:50,pageNo:1,total:3},tableData:[{name:123,value:1},{name:123,value:1},{name:123,value:1}],tableColumnList:[{label:"序号",prop:"",isButton:!1,width:80,minWidth:"80",htmlRender:!0,componentRender:!1,formatter:function(e,a){return 1}},{label:"名称",prop:"",isButton:!1,minWidth:"80",htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"类型",prop:"",isButton:!1,minWidth:"80",htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"营业执照编号",prop:"",isButton:!1,minWidth:"80",htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"法人代表",prop:"",isButton:!1,minWidth:"80",htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"联系电话",prop:"",isButton:!1,minWidth:"80",htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"部门",prop:"",isButton:!1,minWidth:"80",htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"标志",prop:"",isButton:!1,minWidth:"80",htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"考评分",prop:"",isButton:!1,minWidth:"80",htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"操作",prop:"",htmlRender:!1,isButton:!0,componentRender:!1,width:"120",minWidth:"120",btnGroup:[{icon:"el-icon-s-order",name:"详情",onClick:function(a){e.linkDetais(a)}},{name:"修改",icon:"el-icon-s-tools",onClick:function(a){e.dialogSet.title="修改",e.showDialog(a)}},{name:"审核",icon:"el-icon-s-check",onClick:function(a){e.dialogSet.title="审核",e.showDialog(a)}},{name:"删除",icon:"el-icon-delete-solid",onClick:function(a){e.remove(a)}}],formatter:function(){}}],formData:{name:"",type:"",numid:"",department:"",mark:""},columnList:[{label:"名称",placeholder:"默认显示",type:"input",prop:"name"},{label:"类型",placeholder:"默认显示",type:"select",prop:"type",option:[{label:"劳务外派",value:"劳务外派"},{label:"供应商",value:"供应商"},{label:"承运商",value:"承运商"},{label:"作业承包商",value:"作业承包商"},{label:"服务承包商",value:"服务承包商"}]},{label:"营业执照编号",placeholder:"默认显示",type:"input",prop:"numid"},{label:"部门",placeholder:"默认显示",type:"input",prop:"department"},{label:"标志",placeholder:"默认显示",type:"select",prop:"mark",option:[{label:"准承包商",value:"准承包商"},{label:"正式承包商",value:"正式承包商"},{label:"黑名单",value:"黑名单"}]}]}},methods:(t={closeDialog:function(){},closeDialogDetail:function(){},init:function(){},onAdd:function(){this.dialogSet.title="添加",this.showDialog()},showDialog:function(e){this.dialogSet.isShow=!0},onSubmit:function(e){},linkDetais:function(e){this.dialogSetDetail.isShow=!0}},Object(n["a"])(t,"showDialog",(function(e){this.dialogSet.isShow=!0})),Object(n["a"])(t,"remove",(function(e){this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){}))})),t)},u=p,b=(l("850c"),l("2877")),f=Object(b["a"])(u,o,r,!1,null,null,null);a["default"]=f.exports},6442:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"contractorAdd"},[l("el-form",{ref:"form",attrs:{"label-width":"170px",model:e.dialogFormData,rules:e.ruleForm}},[l("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[l("el-form-item",{attrs:{label:"编号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入编号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"名称",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"类型",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入类型"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"营业执照编号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入营业执照编号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"安全生产许可证编号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入安全生产许可证编号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"注册地址",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入注册地址"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"法人代表",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入法人代表"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"联系电话",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"部门",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入部门"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"标志",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入标志"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"考评分",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入考评分"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1)],1),l("el-tab-pane",{attrs:{label:"资质文件",name:"second"}},[l("el-form-item",{attrs:{label:"资质审查表",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入资质审查表"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"资格确认书",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入资格确认书"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"营业执照",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入营业执照"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"安全生产许可证",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入安全生产许可证"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1)],1),l("el-tab-pane",{attrs:{label:"协议方案",name:"third"}},[l("el-form-item",{attrs:{label:"安全协议",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入安全协议"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"施工方案",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入施工方案"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"应急预案",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入应急预案"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1)],1),l("el-tab-pane",{attrs:{label:"人员信息",name:"fourth"}},[l("el-form-item",{attrs:{label:"类别(管理人员施工人员)",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入类别(管理人员施工人员)"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"姓名",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"性别",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入性别"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"年龄",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"身份证号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入身份证号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"学历",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入学历"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"专业",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入专业"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"职称",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入职称"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"专业年限",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入专业年限"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"职务或工种",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入职务或工种"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"任命文件",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入任命文件"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"特种作业人员证书编号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入特种作业人员证书编号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"项目名称",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入项目名称"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"调入项目日期",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入调入项目日期"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"人脸信息（门禁对接）",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入人脸信息（门禁对接）"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"出入证号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入出入证号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1)],1),l("el-tab-pane",{attrs:{label:"机具车辆信息",name:"five"}},[l("el-form-item",{attrs:{label:"类别(特种机具,车辆)",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入类别(特种机具,车辆)"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"名称",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"型号规格",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入型号规格"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"使用许可证编号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入使用许可证编号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"复审日期",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入复审日期"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"操作人",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入操作人"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"操作人证件号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入操作人证件号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"车牌号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入车牌号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"出入证号",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入出入证号"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1),l("el-form-item",{attrs:{label:"交强险",prop:"labelName"}},[l("el-input",{attrs:{placeholder:"请输入交强险"},model:{value:e.dialogFormData.labelName,callback:function(a){e.$set(e.dialogFormData,"labelName",a)},expression:"dialogFormData.labelName"}})],1)],1)],1)],1)],1)},o=[],r=l("2678"),n={data:function(){return{activeName:"first",ruleForm:{institutionalName:[{validator:r["f"],trigger:"blur"}],institutionalLocal:[{validator:r["f"],trigger:"blur"}]},dialogFormData:{laberName:""}}},methods:{handleClick:function(e,a){}}},i=n,m=(l("fe51"),l("2877")),c=Object(m["a"])(i,t,o,!1,null,"a3c07584",null);a["default"]=c.exports},"73e0":function(e,a,l){},"850c":function(e,a,l){"use strict";l("fd0e")},"9ea6":function(e,a,l){},ac1a:function(e,a,l){},ade3:function(e,a,l){"use strict";function t(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}l.d(a,"a",(function(){return t}))},b9b8:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-dialog",{class:{commonFullScreenDialog:e.dialogSet.fullscreen,commonNoTitle:!e.dialogSet.title},attrs:{title:e.dialogSet.title,visible:e.dialogSet.isShow,width:e.dialogSet.width,modal:e.dialogSet.modal,"close-on-click-modal":e.dialogSet.modalClick||!1,fullscreen:e.dialogSet.fullscreen,"destroy-on-close":!0,"before-close":e.handleClose,"append-to-body":e.dialogSet.appendBody,"modal-append-to-body":e.dialogSet.modalAppendBody,top:e.dialogSet.top},on:{"update:visible":function(a){return e.$set(e.dialogSet,"isShow",a)},close:e.closeDialog,open:e.openDialog}},[e._t("dialog-components"),e.dialogSet.footer?l("div",{attrs:{slot:"footer"},slot:"footer"},[e._l(e.dialogBtn,(function(a,t){return l("el-button",{key:t,attrs:{disabled:a.disabled||!1,type:a.type,icon:a.icon,round:a.round},on:{click:a.handleClick}},[e._v(" "+e._s(a.name)+" ")])})),e._t("dialogBtn")],2):e._e()],2)},o=[],r={name:"screen-dialog",props:{dialogSet:Object,dialogBtn:Array,closeDialog:{type:Function,default:function(){}},openDialog:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClose:function(e){this.dialogSet.beforeClose?this.dialogSet.beforeClose():e()}}},n=r,i=(l("1629"),l("fa9b"),l("2877")),m=Object(i["a"])(n,t,o,!1,null,"81e8fe72",null);a["default"]=m.exports},f02a:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"contractorDetail"},[l("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"详细信息",name:"first"}},[l("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(a){e.activeNames=a},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:8}},[l("div",[e._v(" 编号:"),l("span",[e._v("编号")]),l("br"),e._v(" 名称:"),l("span",[e._v("名称")]),l("br"),e._v(" 类型:"),l("span",[e._v("类型")]),l("br"),e._v(" 营业执照编号:"),l("span",[e._v("营业执照编号")]),l("br")])]),l("el-col",{attrs:{span:8}},[l("div",[e._v(" 法人代表:"),l("span",[e._v("法人代表")]),l("br"),e._v(" 联系电话:"),l("span",[e._v("联系电话")]),l("br"),e._v(" 部门:"),l("span",[e._v("部门")]),l("br"),e._v(" 标志:"),l("span",[e._v("标志")]),l("br")])]),l("el-col",{attrs:{span:8}},[l("div",[e._v(" 安全生产许可证编号:"),l("span",[e._v("安全生产许可证编号")]),l("br"),e._v(" 注册地址:"),l("span",[e._v("注册地址")]),l("br"),e._v(" 考评分:"),l("span",[e._v("考评分")]),l("br")])])],1)],1),l("el-collapse-item",{attrs:{title:"资质文件",name:"2"}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:12}},[l("div",[e._v(" 资质审查表:"),l("span",[e._v("资质审查表")]),l("br"),e._v(" 资格确认书:"),l("span",[e._v("资格确认书")]),l("br")])]),l("el-col",{attrs:{span:12}},[l("div",[e._v(" 营业执照:"),l("span",[e._v("营业执照")]),l("br"),e._v(" 安全生产许可证:"),l("span",[e._v("安全生产许可证")]),l("br")])])],1)],1),l("el-collapse-item",{attrs:{title:"协议方案",name:"3"}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:12}},[l("div",[e._v(" 安全协议:"),l("span",[e._v("安全协议")]),l("br"),e._v(" 施工方案:"),l("span",[e._v("施工方案")]),l("br")])]),l("el-col",{attrs:{span:12}},[l("div",[e._v(" 应急预案:"),l("span",[e._v("应急预案")]),l("br")])])],1)],1)],1)],1),l("el-tab-pane",{attrs:{label:"人员信息",name:"second"}},[l("div",{staticClass:"commonTableBox",staticStyle:{height:"50vh"}},[l("commonTable",{attrs:{tableData:e.tableData,columnList:e.tableColumnList,tableConfig:e.tableConfig}})],1)]),l("el-tab-pane",{attrs:{label:"机具车辆信息",name:"third"}},[l("div",{staticClass:"commonTableBox",staticStyle:{height:"50vh"}},[l("commonTable",{attrs:{tableData:e.tableDataCar,columnList:e.tableColumnListCar,tableConfig:e.tableConfigCar}})],1)])],1)],1)},o=[],r=l("b837"),n={name:"contractor-detail",components:{commonTable:r["default"]},props:{data:{type:Object,default:{}}},data:function(){return{activeName:"first",activeNames:["1","2","3","4","5"],tableConfig:{headerClassName:"",stripe:!0,tableHeight:"calc(100% - 40px)",paginationShow:!0,tableRefName:"",limit:50,pageNo:1,total:3},tableData:[{name:123,value:1},{name:123,value:1},{name:123,value:1}],tableConfigCar:{headerClassName:"",stripe:!0,tableHeight:"calc(100% - 40px)",paginationShow:!0,tableRefName:"",limit:50,pageNo:1,total:3},tableDataCar:[{name:123,value:1},{name:123,value:1},{name:123,value:1}],tableColumnList:[{label:"序号",prop:"",isButton:!1,width:80,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 1}},{label:"姓名",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"类别",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"性别",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"年龄",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"身份证号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"学历",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"专业",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"职称",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"专业年限",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"职务或工种",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"任命文件",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"特种作业人员证书编号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"项目名称",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"调入项目日期",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"人脸信息（门禁对接）",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"出入证号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}}],tableColumnListCar:[{label:"序号",prop:"",isButton:!1,width:80,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 1}},{label:"类别",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"名称",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"型号规格",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"使用许可证编号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"复审日期",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"操作人",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"操作人证件号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"车牌号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"出入证号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}},{label:"交强险",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,a){return 2}}]}},methods:{handleChange:function(e){}}},i=n,m=(l("4e70"),l("2877")),c=Object(m["a"])(i,t,o,!1,null,"6c335e32",null);a["default"]=c.exports},f4ae:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"commonSelect"},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formData}},[e._l(e.columnList,(function(a,t){return l("el-form-item",{key:t,attrs:{label:a.label}},["input"==a.type?l("el-input",{attrs:{placeholder:a.placeholder},model:{value:e.formData[a.prop],callback:function(l){e.$set(e.formData,a.prop,l)},expression:"formData[col.prop]"}}):e._e(),"select"==a.type?l("el-select",{attrs:{placeholder:a.placeholder},model:{value:e.formData[a.prop],callback:function(l){e.$set(e.formData,a.prop,l)},expression:"formData[col.prop]"}},e._l(a.option,(function(e,a){return l("el-option",{key:a,attrs:{label:e.label,value:e.value}})})),1):e._e()],1)})),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.clickSubmit}},[e._v("查询")])],1),e.showAdd?l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.clickAdd}},[e._v("新增")])],1):e._e()],2)],1)},o=[],r={name:"common-select",props:{showAdd:{type:Boolean,default:!0},columnList:Array,formData:{type:Object,default:{}},onSubmit:{type:Function,default:function(){}},onAdd:{type:Function,default:function(){}}},data:function(){return{}},methods:{clickSubmit:function(){this.onSubmit(this.formData)},clickAdd:function(){this.onAdd()}}},n=r,i=(l("51b4"),l("2877")),m=Object(i["a"])(n,t,o,!1,null,"0d985d11",null);a["default"]=m.exports},fa9b:function(e,a,l){"use strict";l("9ea6")},fd0e:function(e,a,l){},fe51:function(e,a,l){"use strict";l("4d8a")}}]);