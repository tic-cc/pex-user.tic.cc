(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-kyc-l2"],{"039c":function(o,r,d){o.exports=d.p+"static/img/user-kyc-idcard-cover.ddf82268.svg"},"269a":function(o,r,d){var a=d("aa6c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[o.i,a,""]]),a.locals&&(o.exports=a.locals);var c=d("4f06").default;c("ab59e8ac",a,!0,{sourceMap:!1,shadowMode:!1})},"5e97":function(o,r,d){"use strict";var a=d("269a"),c=d.n(a);c.a},"8d24":function(o,r,d){"use strict";d.d(r,"b",(function(){return c})),d.d(r,"c",(function(){return e})),d.d(r,"a",(function(){return a}));var a={partWindowLayout:d("1f23").default,partNavilink:d("63d2").default,uniTag:d("94d8").default},c=function(){var o=this,r=o.$createElement,d=o._self._c||r;return d("part-window-layout",[d("v-uni-view",{staticClass:"window-page-750"},[d("part-navilink",{attrs:{linkList:[{target:"ume",name:o.wo.ll({zhCN:"我的个人中心",enUS:"My Personal Center"})}]}}),d("v-uni-view",{staticClass:"wo-flex column center",staticStyle:{margin:"40px 0px"}},[d("v-uni-text",{staticClass:"sTitle",staticStyle:{"text-align":"center"}},[o._v(o._s(o.wo.ll({zhCN:"身份证件正面照片",enUS:"ID Card Frontside Photo"})))]),d("v-uni-button",{staticClass:"sIdCard Cover",style:{backgroundImage:o.wo.makeBgUrl(o.wo.ss.User.onlineUser.idCardCover)},attrs:{disabled:o.isFixed},on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.uploadIdCard("Cover")}}}),d("v-uni-text",{staticClass:"sTitle",staticStyle:{"text-align":"center"}},[o._v(o._s(o.wo.ll({zhCN:"身份证件反面照片",enUS:"ID Card Backside Photo"})))]),d("v-uni-button",{staticClass:"sIdCard Back",style:{backgroundImage:o.wo.makeBgUrl(o.wo.ss.User.onlineUser.idCardBack)},attrs:{disabled:o.isFixed},on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.uploadIdCard("Back")}}}),d("v-uni-view",{staticStyle:{margin:"44rpx 32rpx",display:"flex","flex-flow":"column","align-items":"center"}},[d("v-uni-text",[o._v(o._s(o.wo.ll({zhCN:{SUBMITTED:"您已提交中级实名资料，等待审核中。",REJECTED:"您的资料没有通过认证，请检查并重新提交。",PASSED:"您已通过中级认证，请继续进行高级认证。",DEFAULT:"完成中级认证，即可解锁以下功能"},enUS:{SUBMITTED:"您已提交中级实名资料，等待审核中。",REJECTED:"您的资料没有通过认证，请检查并重新提交。",PASSED:"您已通过中级认证，请继续进行高级认证。",DEFAULT:"完成中级认证，即可解锁以下功能"}})[o.wo.ss.User.onlineUser.kycStateL2||"DEFAULT"]))]),o.wo.ss.User.onlineUser.kycStateL2?o._e():d("v-uni-view",{staticStyle:{"margin-top":"10px"}},[d("uni-tag",{staticStyle:{margin:"0 5px"},attrs:{text:"获得邀请新人奖励",type:o.wo.c2t.GREEN}}),d("uni-tag",{staticStyle:{margin:"0 5px"},attrs:{text:"进行点对点交易",type:o.wo.c2t.GREEN}})],1)],1),d("v-uni-view",[o.isFixed?d("v-uni-button",{attrs:{type:o.wo.c2t.BLUE},on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.uni.navigateTo({url:"user-kyc-l3"})}}},[o._v(o._s(o.wo.ll({zhCN:"下一步",enUS:"Next"})))]):d("v-uni-button",{attrs:{disabled:!o.wo.ss.User.onlineUser.idCardCover||!o.wo.ss.User.onlineUser.idCardBack,type:o.wo.ss.User.onlineUser.idCardCover&&o.wo.ss.User.onlineUser.idCardBack?o.wo.c2t.BLUE:void 0,loading:o.isLoading},on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.to_update_kyc2.apply(void 0,arguments)}}},[o._v(o._s(o.wo.ll({zhCN:"提交",enUS:"Submit"})))])],1)],1)],1)],1)},e=[]},a3f4:function(o,r,d){"use strict";d("7a82");var a=d("4ea4").default;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var c=a(d("c7eb")),e=a(d("15fd")),t=a(d("1da1"));d("dca8"),d("c975");var l=["_state","fileUrl"],n={data:function(){return{isLoading:!1,i18nPageTitle:Object.freeze({zhCN:"中级实名认证",enUS:"Realname Verification Level 2"})}},computed:{isFixed:function(){return["SUBMITTED","PASSED"].indexOf(wo.ss.User.onlineUser.kycStateL2)>=0}},onLoad:function(){},onShow:function(){wo.tt.relaunch_unknown_user()},methods:{uploadIdCard:function(o){return(0,t.default)((0,c.default)().mark((function r(){var d,a,t;return(0,c.default)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,wo.pickupFile({baseType:wo.envar.baseTypeFile});case 2:d=r.sent,a=d._state,t=d.fileUrl,(0,e.default)(d,l),"SUCCESS"===a?wo.ss.User.onlineUser["idCard".concat(o)]=t:wo.showToast({type:wo.c2t.RED,title:wo.ll({zhCN:"证件照片上传不成功，请重新上传",enUS:""})});case 7:case"end":return r.stop()}}),r)})))()},to_update_kyc2:function(){var o=this;return(0,t.default)((0,c.default)().mark((function r(){var d;return(0,c.default)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!wo.ss.User.onlineUser.idCardCover||!wo.ss.User.onlineUser.idCardBack){r.next=9;break}return o.isLoading=!0,r.next=4,wo.callBase({apiWho:"User",apiTodo:"updateKycL2",apiWhat:{User:{idCardCover:wo.ss.User.onlineUser.idCardCover,idCardBack:wo.ss.User.onlineUser.idCardBack}}});case 4:d=r.sent,o.isLoading=!1,"SUBMITTED"===d._state?wo.ss.User.onlineUser.kycStateL2="SUBMITTED":wo.showToast({type:wo.c2t.RED,title:wo.ll({zhCN:"申请提交失败，请稍后再试",enUS:""})}),r.next=10;break;case 9:wo.showToast({type:wo.c2t.RED,title:wo.ll({zhCN:"请补充完整正反面两张照片",enUS:""})});case 10:case"end":return r.stop()}}),r)})))()}}};r.default=n},aa6c:function(o,r,d){var a=d("24fb"),c=d("1de5"),e=d("039c"),t=d("f9d9");r=a(!1);var l=c(e),n=c(t);r.push([o.i,"@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/********* 自定义主题 **********/\n/* 导入 uview 的主题 */\n/**\n * 区分设备的 Media Query 模板\n */\n/**\n * 基于 uview 和 uniapp 的通用主题\n */\n/**\n * 直观命名的色彩，取代语义命名。\n */\n/**  \n* 覆盖掉 uview 定义的语义命名色彩。\n*/\n/**  \n* 覆盖掉 uni.scss 定义的内置组件的语义命名色彩。\n*/\n/**\n * 可进一步覆盖扩展组件 uni-ui 的语义命名色彩。\n * 参考 https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html\n * @import '@/uni_modules/uni-scss/variables.scss';\n */\n/**\n* 程序化定义色彩直接变量 $color-***，以及 color, background-color, border-color 的原子类\n*/.wo-bg-color-blue[data-v-d4750cd8]{background-color:#00f}.wo-text-color-blue[data-v-d4750cd8]{color:#00f}.wo-border-color-blue[data-v-d4750cd8]{border-color:#00f}.wo-bg-color-blue-default[data-v-d4750cd8]{background-color:#2979ff}.wo-text-color-blue-default[data-v-d4750cd8]{color:#2979ff}.wo-border-color-blue-default[data-v-d4750cd8]{border-color:#2979ff}.wo-bg-color-blue-dark[data-v-d4750cd8]{background-color:#2b85e4}.wo-text-color-blue-dark[data-v-d4750cd8]{color:#2b85e4}.wo-border-color-blue-dark[data-v-d4750cd8]{border-color:#2b85e4}.wo-bg-color-blue-matt[data-v-d4750cd8]{background-color:#a0cfff}.wo-text-color-blue-matt[data-v-d4750cd8]{color:#a0cfff}.wo-border-color-blue-matt[data-v-d4750cd8]{border-color:#a0cfff}.wo-bg-color-blue-light[data-v-d4750cd8]{background-color:#ecf5ff}.wo-text-color-blue-light[data-v-d4750cd8]{color:#ecf5ff}.wo-border-color-blue-light[data-v-d4750cd8]{border-color:#ecf5ff}.wo-bg-color-green[data-v-d4750cd8]{background-color:green}.wo-text-color-green[data-v-d4750cd8]{color:green}.wo-border-color-green[data-v-d4750cd8]{border-color:green}.wo-bg-color-green-default[data-v-d4750cd8]{background-color:#19be6b}.wo-text-color-green-default[data-v-d4750cd8]{color:#19be6b}.wo-border-color-green-default[data-v-d4750cd8]{border-color:#19be6b}.wo-bg-color-green-dark[data-v-d4750cd8]{background-color:#18b566}.wo-text-color-green-dark[data-v-d4750cd8]{color:#18b566}.wo-border-color-green-dark[data-v-d4750cd8]{border-color:#18b566}.wo-bg-color-green-matt[data-v-d4750cd8]{background-color:#71d5a1}.wo-text-color-green-matt[data-v-d4750cd8]{color:#71d5a1}.wo-border-color-green-matt[data-v-d4750cd8]{border-color:#71d5a1}.wo-bg-color-green-light[data-v-d4750cd8]{background-color:#dbf1e1}.wo-text-color-green-light[data-v-d4750cd8]{color:#dbf1e1}.wo-border-color-green-light[data-v-d4750cd8]{border-color:#dbf1e1}.wo-bg-color-yellow[data-v-d4750cd8]{background-color:#ff0}.wo-text-color-yellow[data-v-d4750cd8]{color:#ff0}.wo-border-color-yellow[data-v-d4750cd8]{border-color:#ff0}.wo-bg-color-yellow-default[data-v-d4750cd8]{background-color:#f29100}.wo-text-color-yellow-default[data-v-d4750cd8]{color:#f29100}.wo-border-color-yellow-default[data-v-d4750cd8]{border-color:#f29100}.wo-bg-color-yellow-dark[data-v-d4750cd8]{background-color:#f29100}.wo-text-color-yellow-dark[data-v-d4750cd8]{color:#f29100}.wo-border-color-yellow-dark[data-v-d4750cd8]{border-color:#f29100}.wo-bg-color-yellow-matt[data-v-d4750cd8]{background-color:#fcbd71}.wo-text-color-yellow-matt[data-v-d4750cd8]{color:#fcbd71}.wo-border-color-yellow-matt[data-v-d4750cd8]{border-color:#fcbd71}.wo-bg-color-yellow-light[data-v-d4750cd8]{background-color:#fdf6ec}.wo-text-color-yellow-light[data-v-d4750cd8]{color:#fdf6ec}.wo-border-color-yellow-light[data-v-d4750cd8]{border-color:#fdf6ec}.wo-bg-color-red[data-v-d4750cd8]{background-color:red}.wo-text-color-red[data-v-d4750cd8]{color:red}.wo-border-color-red[data-v-d4750cd8]{border-color:red}.wo-bg-color-red-default[data-v-d4750cd8]{background-color:#fa3534}.wo-text-color-red-default[data-v-d4750cd8]{color:#fa3534}.wo-border-color-red-default[data-v-d4750cd8]{border-color:#fa3534}.wo-bg-color-red-dark[data-v-d4750cd8]{background-color:#dd6161}.wo-text-color-red-dark[data-v-d4750cd8]{color:#dd6161}.wo-border-color-red-dark[data-v-d4750cd8]{border-color:#dd6161}.wo-bg-color-red-matt[data-v-d4750cd8]{background-color:#fab6b6}.wo-text-color-red-matt[data-v-d4750cd8]{color:#fab6b6}.wo-border-color-red-matt[data-v-d4750cd8]{border-color:#fab6b6}.wo-bg-color-red-light[data-v-d4750cd8]{background-color:#fef0f0}.wo-text-color-red-light[data-v-d4750cd8]{color:#fef0f0}.wo-border-color-red-light[data-v-d4750cd8]{border-color:#fef0f0}.wo-bg-color-black[data-v-d4750cd8]{background-color:#000}.wo-text-color-black[data-v-d4750cd8]{color:#000}.wo-border-color-black[data-v-d4750cd8]{border-color:#000}.wo-bg-color-grey[data-v-d4750cd8]{background-color:grey}.wo-text-color-grey[data-v-d4750cd8]{color:grey}.wo-border-color-grey[data-v-d4750cd8]{border-color:grey}.wo-bg-color-grey-dark[data-v-d4750cd8]{background-color:#a9a9a9}.wo-text-color-grey-dark[data-v-d4750cd8]{color:#a9a9a9}.wo-border-color-grey-dark[data-v-d4750cd8]{border-color:#a9a9a9}.wo-bg-color-grey-light[data-v-d4750cd8]{background-color:#d3d3d3}.wo-text-color-grey-light[data-v-d4750cd8]{color:#d3d3d3}.wo-border-color-grey-light[data-v-d4750cd8]{border-color:#d3d3d3}.wo-bg-color-grey-3[data-v-d4750cd8]{background-color:#303133}.wo-text-color-grey-3[data-v-d4750cd8]{color:#303133}.wo-border-color-grey-3[data-v-d4750cd8]{border-color:#303133}.wo-bg-color-grey-6[data-v-d4750cd8]{background-color:#606266}.wo-text-color-grey-6[data-v-d4750cd8]{color:#606266}.wo-border-color-grey-6[data-v-d4750cd8]{border-color:#606266}.wo-bg-color-grey-8[data-v-d4750cd8]{background-color:#82848a}.wo-text-color-grey-8[data-v-d4750cd8]{color:#82848a}.wo-border-color-grey-8[data-v-d4750cd8]{border-color:#82848a}.wo-bg-color-grey-9[data-v-d4750cd8]{background-color:#909399}.wo-text-color-grey-9[data-v-d4750cd8]{color:#909399}.wo-border-color-grey-9[data-v-d4750cd8]{border-color:#909399}.wo-bg-color-grey-c[data-v-d4750cd8]{background-color:#c8c9cc}.wo-text-color-grey-c[data-v-d4750cd8]{color:#c8c9cc}.wo-border-color-grey-c[data-v-d4750cd8]{border-color:#c8c9cc}.wo-bg-color-grey-d[data-v-d4750cd8]{background-color:#dcdfe6}.wo-text-color-grey-d[data-v-d4750cd8]{color:#dcdfe6}.wo-border-color-grey-d[data-v-d4750cd8]{border-color:#dcdfe6}.wo-bg-color-grey-e[data-v-d4750cd8]{background-color:#e4e7ed}.wo-text-color-grey-e[data-v-d4750cd8]{color:#e4e7ed}.wo-border-color-grey-e[data-v-d4750cd8]{border-color:#e4e7ed}.wo-bg-color-grey-f[data-v-d4750cd8]{background-color:#f3f4f6}.wo-text-color-grey-f[data-v-d4750cd8]{color:#f3f4f6}.wo-border-color-grey-f[data-v-d4750cd8]{border-color:#f3f4f6}.wo-bg-color-white[data-v-d4750cd8]{background-color:#fff}.wo-text-color-white[data-v-d4750cd8]{color:#fff}.wo-border-color-white[data-v-d4750cd8]{border-color:#fff}.wo-bg-color-transparent[data-v-d4750cd8]{background-color:initial}.wo-text-color-transparent[data-v-d4750cd8]{color:transparent}.wo-border-color-transparent[data-v-d4750cd8]{border-color:transparent}.wo-bg-color-mask-black-15[data-v-d4750cd8]{background-color:rgba(0,0,0,.15)}.wo-text-color-mask-black-15[data-v-d4750cd8]{color:rgba(0,0,0,.15)}.wo-border-color-mask-black-15[data-v-d4750cd8]{border-color:rgba(0,0,0,.15)}.wo-bg-color-mask-black-30[data-v-d4750cd8]{background-color:rgba(0,0,0,.3)}.wo-text-color-mask-black-30[data-v-d4750cd8]{color:rgba(0,0,0,.3)}.wo-border-color-mask-black-30[data-v-d4750cd8]{border-color:rgba(0,0,0,.3)}.wo-bg-color-mask-black-50[data-v-d4750cd8]{background-color:rgba(0,0,0,.5)}.wo-text-color-mask-black-50[data-v-d4750cd8]{color:rgba(0,0,0,.5)}.wo-border-color-mask-black-50[data-v-d4750cd8]{border-color:rgba(0,0,0,.5)}.wo-bg-color-main[data-v-d4750cd8]{background-color:#2979ff}.wo-text-color-main[data-v-d4750cd8]{color:#2979ff}.wo-border-color-main[data-v-d4750cd8]{border-color:#2979ff}.wo-bg-color-minor[data-v-d4750cd8]{background-color:#f90}.wo-text-color-minor[data-v-d4750cd8]{color:#f90}.wo-border-color-minor[data-v-d4750cd8]{border-color:#f90}.wo-bg-color-action[data-v-d4750cd8]{background-color:#a0cfff}.wo-text-color-action[data-v-d4750cd8]{color:#a0cfff}.wo-border-color-action[data-v-d4750cd8]{border-color:#a0cfff}.wo-bg-color-bg[data-v-d4750cd8]{background-color:#f3f4f6}.wo-text-color-bg[data-v-d4750cd8]{color:#f3f4f6}.wo-border-color-bg[data-v-d4750cd8]{border-color:#f3f4f6}.wo-bg-color-border[data-v-d4750cd8]{background-color:#e4e7ed}.wo-text-color-border[data-v-d4750cd8]{color:#e4e7ed}.wo-border-color-border[data-v-d4750cd8]{border-color:#e4e7ed}.wo-bg-color-fg[data-v-d4750cd8]{background-color:#fff}.wo-text-color-fg[data-v-d4750cd8]{color:#fff}.wo-border-color-fg[data-v-d4750cd8]{border-color:#fff}.sBodyTitle[data-v-d4750cd8]{margin:%?32?% 0}.sTitle[data-v-d4750cd8]{position:relative;top:%?24?%}.sIdCard[data-v-d4750cd8]{width:%?598?%;height:%?365?%;position:relative;margin:%?32?% auto 0;padding:0;background:#2979ff}.sIdCard[data-v-d4750cd8]:hover{cursor:pointer}.sIdCard.Cover[data-v-d4750cd8]{background:url("+l+") no-repeat 50%/contain}.sIdCard.Back[data-v-d4750cd8]{background:url("+n+") no-repeat 50%/contain}.sFeedback[data-v-d4750cd8]{margin:%?44?% %?32?%}",""]),o.exports=r},c901:function(o,r,d){"use strict";d.r(r);var a=d("8d24"),c=d("fcbb");for(var e in c)["default"].indexOf(e)<0&&function(o){d.d(r,o,(function(){return c[o]}))}(e);d("5e97");var t=d("f0c5"),l=Object(t["a"])(c["default"],a["b"],a["c"],!1,null,"d4750cd8",null,!1,a["a"],void 0);r["default"]=l.exports},f9d9:function(o,r,d){o.exports=d.p+"static/img/user-kyc-idcard-back.d9ba1fb2.svg"},fcbb:function(o,r,d){"use strict";d.r(r);var a=d("a3f4"),c=d.n(a);for(var e in a)["default"].indexOf(e)<0&&function(o){d.d(r,o,(function(){return a[o]}))}(e);r["default"]=c.a}}]);