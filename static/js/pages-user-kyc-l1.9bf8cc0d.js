(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-kyc-l1"],{"0542":function(o,e,r){"use strict";var a=r("849d"),c=r.n(a);c.a},"2d62":function(o,e,r){var a=r("893b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[o.i,a,""]]),a.locals&&(o.exports=a.locals);var c=r("4f06").default;c("64fbdc36",a,!0,{sourceMap:!1,shadowMode:!1})},"36be":function(o,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){}));var a=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":o.isFull,"uni-card--shadow":o.isShadow,"uni-card--border":o.border},style:{margin:o.isFull?0:o.margin,padding:o.spacing,"box-shadow":o.isShadow?o.shadow:""}},[o._t("cover",[o.cover?r("v-uni-view",{staticClass:"uni-card__cover"},[r("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:o.cover},on:{click:function(e){arguments[0]=e=o.$handleEvent(e),o.onClick("cover")}}})],1):o._e()]),o._t("title",[o.title||o.extra?r("v-uni-view",{staticClass:"uni-card__header"},[r("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=o.$handleEvent(e),o.onClick("title")}}},[o.thumbnail?r("v-uni-view",{staticClass:"uni-card__header-avatar"},[r("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:o.thumbnail,mode:"aspectFit"}})],1):o._e(),r("v-uni-view",{staticClass:"uni-card__header-content"},[r("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[o._v(o._s(o.title))]),o.title&&o.subTitle?r("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[o._v(o._s(o.subTitle))]):o._e()],1)],1),r("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=o.$handleEvent(e),o.onClick("extra")}}},[r("v-uni-text",{staticClass:"uni-card__header-extra-text"},[o._v(o._s(o.extra))])],1)],1):o._e()]),r("v-uni-view",{staticClass:"uni-card__content",style:{padding:o.padding},on:{click:function(e){arguments[0]=e=o.$handleEvent(e),o.onClick("content")}}},[o._t("default")],2),r("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=o.$handleEvent(e),o.onClick("actions")}}},[o._t("actions")],2)],2)},c=[]},"6f6d":function(o,e,r){"use strict";r.r(e);var a=r("36be"),c=r("a517");for(var t in c)["default"].indexOf(t)<0&&function(o){r.d(e,o,(function(){return c[o]}))}(t);r("7098");var d=r("f0c5"),l=Object(d["a"])(c["default"],a["b"],a["c"],!1,null,"18e71090",null,!1,a["a"],void 0);e["default"]=l.exports},7098:function(o,e,r){"use strict";var a=r("2d62"),c=r.n(a);c.a},"7fdc":function(o,e,r){"use strict";r("7a82");var a=r("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=a(r("c7eb")),t=a(r("1da1"));r("dca8"),r("c975"),r("b64b"),r("07ac"),r("14d9"),r("99af");var d={data:function(){return{i18nPageTitle:Object.freeze({zhCN:"初级实名认证",enUS:"Realname Verification L1"}),citizenLandIndex:Object.keys(wo.ss.i18n.landSet).indexOf(wo.ss.User.onlineUser.citizen||wo.ss.i18n.userland),isLoading:!1,idTypeDict:Object.freeze({IDCARD:{zhCN:"身份证",enUS:"ID Card"},PASSPORT:{zhCN:"护照",enUS:"Passport"}}),idTypeIndex:0}},computed:{landList:function(){for(var o=[],e=0,r=Object.values(wo.ss.i18n.landSet);e<r.length;e++){var a=r[e];o.push("".concat(a.name[wo.ss.i18n.mylang]," (").concat(a.iso2,")"))}return o},isFixed:function(){return["SUBMITTED","PASSED"].indexOf(this.$store.state.User.onlineUser.kycStateL1)>=0}},onLoad:function(){},onShow:function(){wo.tt.relaunch_unknown_user()},methods:{pick_land:function(o){this.citizenLandIndex=o.target.value},pick_id_type:function(o){this.idTypeIndex=o.target.value},to_update_kyc1:function(){var o=this;return(0,t.default)((0,c.default)().mark((function e(){var r;return(0,c.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!wo.ss.User.onlineUser.realname||!wo.ss.User.onlineUser.idNumber){e.next=7;break}return o.isLoading=!0,e.next=4,wo.callBase({apiWho:"User",apiTodo:"updateKycL1",apiWhat:{User:{realname:wo.ss.User.onlineUser.realname,citizen:Object.keys(wo.ss.i18n.landSet)[o.citizenLandIndex],idType:Object.keys(o.idTypeDict)[o.idTypeIndex],idNumber:wo.ss.User.onlineUser.idNumber}}});case 4:r=e.sent,o.isLoading=!1,"SUBMITTED"===r._state?wo.ss.User.onlineUser.kycStateL1="SUBMITTED":wo.showToast({type:wo.c2t.RED,title:wo.ll({zhCN:"提交失败，请检查资料是否准确",enUS:""})});case 7:case"end":return e.stop()}}),e)})))()}}};e.default=d},"849d":function(o,e,r){var a=r("9a04");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[o.i,a,""]]),a.locals&&(o.exports=a.locals);var c=r("4f06").default;c("c1d9a278",a,!0,{sourceMap:!1,shadowMode:!1})},"893b":function(o,e,r){var a=r("24fb");e=a(!1),e.push([o.i,"@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/********* 自定义主题 **********/\n/* 导入 uview 的主题 */\n/**\n * 区分设备的 Media Query 模板\n */\n/**\n * 基于 uview 和 uniapp 的通用主题\n */\n/**\n * 直观命名的色彩，取代语义命名。\n */\n/**  \n* 覆盖掉 uview 定义的语义命名色彩。\n*/\n/**  \n* 覆盖掉 uni.scss 定义的内置组件的语义命名色彩。\n*/\n/**\n * 可进一步覆盖扩展组件 uni-ui 的语义命名色彩。\n * 参考 https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html\n * @import '@/uni_modules/uni-scss/variables.scss';\n */\n/**\n* 程序化定义色彩直接变量 $color-***，以及 color, background-color, border-color 的原子类\n*/.wo-bg-color-blue[data-v-18e71090]{background-color:#00f}.wo-text-color-blue[data-v-18e71090]{color:#00f}.wo-border-color-blue[data-v-18e71090]{border-color:#00f}.wo-bg-color-blue-default[data-v-18e71090]{background-color:#2979ff}.wo-text-color-blue-default[data-v-18e71090]{color:#2979ff}.wo-border-color-blue-default[data-v-18e71090]{border-color:#2979ff}.wo-bg-color-blue-dark[data-v-18e71090]{background-color:#2b85e4}.wo-text-color-blue-dark[data-v-18e71090]{color:#2b85e4}.wo-border-color-blue-dark[data-v-18e71090]{border-color:#2b85e4}.wo-bg-color-blue-matt[data-v-18e71090]{background-color:#a0cfff}.wo-text-color-blue-matt[data-v-18e71090]{color:#a0cfff}.wo-border-color-blue-matt[data-v-18e71090]{border-color:#a0cfff}.wo-bg-color-blue-light[data-v-18e71090]{background-color:#ecf5ff}.wo-text-color-blue-light[data-v-18e71090]{color:#ecf5ff}.wo-border-color-blue-light[data-v-18e71090]{border-color:#ecf5ff}.wo-bg-color-green[data-v-18e71090]{background-color:green}.wo-text-color-green[data-v-18e71090]{color:green}.wo-border-color-green[data-v-18e71090]{border-color:green}.wo-bg-color-green-default[data-v-18e71090]{background-color:#19be6b}.wo-text-color-green-default[data-v-18e71090]{color:#19be6b}.wo-border-color-green-default[data-v-18e71090]{border-color:#19be6b}.wo-bg-color-green-dark[data-v-18e71090]{background-color:#18b566}.wo-text-color-green-dark[data-v-18e71090]{color:#18b566}.wo-border-color-green-dark[data-v-18e71090]{border-color:#18b566}.wo-bg-color-green-matt[data-v-18e71090]{background-color:#71d5a1}.wo-text-color-green-matt[data-v-18e71090]{color:#71d5a1}.wo-border-color-green-matt[data-v-18e71090]{border-color:#71d5a1}.wo-bg-color-green-light[data-v-18e71090]{background-color:#dbf1e1}.wo-text-color-green-light[data-v-18e71090]{color:#dbf1e1}.wo-border-color-green-light[data-v-18e71090]{border-color:#dbf1e1}.wo-bg-color-yellow[data-v-18e71090]{background-color:#ff0}.wo-text-color-yellow[data-v-18e71090]{color:#ff0}.wo-border-color-yellow[data-v-18e71090]{border-color:#ff0}.wo-bg-color-yellow-default[data-v-18e71090]{background-color:#f29100}.wo-text-color-yellow-default[data-v-18e71090]{color:#f29100}.wo-border-color-yellow-default[data-v-18e71090]{border-color:#f29100}.wo-bg-color-yellow-dark[data-v-18e71090]{background-color:#f29100}.wo-text-color-yellow-dark[data-v-18e71090]{color:#f29100}.wo-border-color-yellow-dark[data-v-18e71090]{border-color:#f29100}.wo-bg-color-yellow-matt[data-v-18e71090]{background-color:#fcbd71}.wo-text-color-yellow-matt[data-v-18e71090]{color:#fcbd71}.wo-border-color-yellow-matt[data-v-18e71090]{border-color:#fcbd71}.wo-bg-color-yellow-light[data-v-18e71090]{background-color:#fdf6ec}.wo-text-color-yellow-light[data-v-18e71090]{color:#fdf6ec}.wo-border-color-yellow-light[data-v-18e71090]{border-color:#fdf6ec}.wo-bg-color-red[data-v-18e71090]{background-color:red}.wo-text-color-red[data-v-18e71090]{color:red}.wo-border-color-red[data-v-18e71090]{border-color:red}.wo-bg-color-red-default[data-v-18e71090]{background-color:#fa3534}.wo-text-color-red-default[data-v-18e71090]{color:#fa3534}.wo-border-color-red-default[data-v-18e71090]{border-color:#fa3534}.wo-bg-color-red-dark[data-v-18e71090]{background-color:#dd6161}.wo-text-color-red-dark[data-v-18e71090]{color:#dd6161}.wo-border-color-red-dark[data-v-18e71090]{border-color:#dd6161}.wo-bg-color-red-matt[data-v-18e71090]{background-color:#fab6b6}.wo-text-color-red-matt[data-v-18e71090]{color:#fab6b6}.wo-border-color-red-matt[data-v-18e71090]{border-color:#fab6b6}.wo-bg-color-red-light[data-v-18e71090]{background-color:#fef0f0}.wo-text-color-red-light[data-v-18e71090]{color:#fef0f0}.wo-border-color-red-light[data-v-18e71090]{border-color:#fef0f0}.wo-bg-color-black[data-v-18e71090]{background-color:#000}.wo-text-color-black[data-v-18e71090]{color:#000}.wo-border-color-black[data-v-18e71090]{border-color:#000}.wo-bg-color-grey[data-v-18e71090]{background-color:grey}.wo-text-color-grey[data-v-18e71090]{color:grey}.wo-border-color-grey[data-v-18e71090]{border-color:grey}.wo-bg-color-grey-dark[data-v-18e71090]{background-color:#a9a9a9}.wo-text-color-grey-dark[data-v-18e71090]{color:#a9a9a9}.wo-border-color-grey-dark[data-v-18e71090]{border-color:#a9a9a9}.wo-bg-color-grey-light[data-v-18e71090]{background-color:#d3d3d3}.wo-text-color-grey-light[data-v-18e71090]{color:#d3d3d3}.wo-border-color-grey-light[data-v-18e71090]{border-color:#d3d3d3}.wo-bg-color-grey-3[data-v-18e71090]{background-color:#303133}.wo-text-color-grey-3[data-v-18e71090]{color:#303133}.wo-border-color-grey-3[data-v-18e71090]{border-color:#303133}.wo-bg-color-grey-6[data-v-18e71090]{background-color:#606266}.wo-text-color-grey-6[data-v-18e71090]{color:#606266}.wo-border-color-grey-6[data-v-18e71090]{border-color:#606266}.wo-bg-color-grey-8[data-v-18e71090]{background-color:#82848a}.wo-text-color-grey-8[data-v-18e71090]{color:#82848a}.wo-border-color-grey-8[data-v-18e71090]{border-color:#82848a}.wo-bg-color-grey-9[data-v-18e71090]{background-color:#909399}.wo-text-color-grey-9[data-v-18e71090]{color:#909399}.wo-border-color-grey-9[data-v-18e71090]{border-color:#909399}.wo-bg-color-grey-c[data-v-18e71090]{background-color:#c8c9cc}.wo-text-color-grey-c[data-v-18e71090]{color:#c8c9cc}.wo-border-color-grey-c[data-v-18e71090]{border-color:#c8c9cc}.wo-bg-color-grey-d[data-v-18e71090]{background-color:#dcdfe6}.wo-text-color-grey-d[data-v-18e71090]{color:#dcdfe6}.wo-border-color-grey-d[data-v-18e71090]{border-color:#dcdfe6}.wo-bg-color-grey-e[data-v-18e71090]{background-color:#e4e7ed}.wo-text-color-grey-e[data-v-18e71090]{color:#e4e7ed}.wo-border-color-grey-e[data-v-18e71090]{border-color:#e4e7ed}.wo-bg-color-grey-f[data-v-18e71090]{background-color:#f3f4f6}.wo-text-color-grey-f[data-v-18e71090]{color:#f3f4f6}.wo-border-color-grey-f[data-v-18e71090]{border-color:#f3f4f6}.wo-bg-color-white[data-v-18e71090]{background-color:#fff}.wo-text-color-white[data-v-18e71090]{color:#fff}.wo-border-color-white[data-v-18e71090]{border-color:#fff}.wo-bg-color-transparent[data-v-18e71090]{background-color:initial}.wo-text-color-transparent[data-v-18e71090]{color:transparent}.wo-border-color-transparent[data-v-18e71090]{border-color:transparent}.wo-bg-color-mask-black-15[data-v-18e71090]{background-color:rgba(0,0,0,.15)}.wo-text-color-mask-black-15[data-v-18e71090]{color:rgba(0,0,0,.15)}.wo-border-color-mask-black-15[data-v-18e71090]{border-color:rgba(0,0,0,.15)}.wo-bg-color-mask-black-30[data-v-18e71090]{background-color:rgba(0,0,0,.3)}.wo-text-color-mask-black-30[data-v-18e71090]{color:rgba(0,0,0,.3)}.wo-border-color-mask-black-30[data-v-18e71090]{border-color:rgba(0,0,0,.3)}.wo-bg-color-mask-black-50[data-v-18e71090]{background-color:rgba(0,0,0,.5)}.wo-text-color-mask-black-50[data-v-18e71090]{color:rgba(0,0,0,.5)}.wo-border-color-mask-black-50[data-v-18e71090]{border-color:rgba(0,0,0,.5)}.wo-bg-color-main[data-v-18e71090]{background-color:#2979ff}.wo-text-color-main[data-v-18e71090]{color:#2979ff}.wo-border-color-main[data-v-18e71090]{border-color:#2979ff}.wo-bg-color-minor[data-v-18e71090]{background-color:#f90}.wo-text-color-minor[data-v-18e71090]{color:#f90}.wo-border-color-minor[data-v-18e71090]{border-color:#f90}.wo-bg-color-action[data-v-18e71090]{background-color:#a0cfff}.wo-text-color-action[data-v-18e71090]{color:#a0cfff}.wo-border-color-action[data-v-18e71090]{border-color:#a0cfff}.wo-bg-color-bg[data-v-18e71090]{background-color:#f3f4f6}.wo-text-color-bg[data-v-18e71090]{color:#f3f4f6}.wo-border-color-bg[data-v-18e71090]{border-color:#f3f4f6}.wo-bg-color-border[data-v-18e71090]{background-color:#e4e7ed}.wo-text-color-border[data-v-18e71090]{color:#e4e7ed}.wo-border-color-border[data-v-18e71090]{border-color:#e4e7ed}.wo-bg-color-fg[data-v-18e71090]{background-color:#fff}.wo-text-color-fg[data-v-18e71090]{color:#fff}.wo-border-color-fg[data-v-18e71090]{border-color:#fff}.uni-card[data-v-18e71090]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-18e71090]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-18e71090]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-18e71090]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-18e71090]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-18e71090]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-18e71090]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-18e71090]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-18e71090]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-18e71090]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-18e71090]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-18e71090]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-18e71090]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-18e71090]{font-size:12px}.uni-card--border[data-v-18e71090]{border:1px solid #ebeef5}.uni-card--shadow[data-v-18e71090]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-18e71090]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-18e71090]:after{border-radius:0}.uni-ellipsis[data-v-18e71090]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}",""]),o.exports=e},"9a04":function(o,e,r){var a=r("24fb");e=a(!1),e.push([o.i,"@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/********* 自定义主题 **********/\n/* 导入 uview 的主题 */\n/**\n * 区分设备的 Media Query 模板\n */\n/**\n * 基于 uview 和 uniapp 的通用主题\n */\n/**\n * 直观命名的色彩，取代语义命名。\n */\n/**  \n* 覆盖掉 uview 定义的语义命名色彩。\n*/\n/**  \n* 覆盖掉 uni.scss 定义的内置组件的语义命名色彩。\n*/\n/**\n * 可进一步覆盖扩展组件 uni-ui 的语义命名色彩。\n * 参考 https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html\n * @import '@/uni_modules/uni-scss/variables.scss';\n */\n/**\n* 程序化定义色彩直接变量 $color-***，以及 color, background-color, border-color 的原子类\n*/.wo-bg-color-blue[data-v-5aec9b40]{background-color:#00f}.wo-text-color-blue[data-v-5aec9b40]{color:#00f}.wo-border-color-blue[data-v-5aec9b40]{border-color:#00f}.wo-bg-color-blue-default[data-v-5aec9b40]{background-color:#2979ff}.wo-text-color-blue-default[data-v-5aec9b40]{color:#2979ff}.wo-border-color-blue-default[data-v-5aec9b40]{border-color:#2979ff}.wo-bg-color-blue-dark[data-v-5aec9b40]{background-color:#2b85e4}.wo-text-color-blue-dark[data-v-5aec9b40]{color:#2b85e4}.wo-border-color-blue-dark[data-v-5aec9b40]{border-color:#2b85e4}.wo-bg-color-blue-matt[data-v-5aec9b40]{background-color:#a0cfff}.wo-text-color-blue-matt[data-v-5aec9b40]{color:#a0cfff}.wo-border-color-blue-matt[data-v-5aec9b40]{border-color:#a0cfff}.wo-bg-color-blue-light[data-v-5aec9b40]{background-color:#ecf5ff}.wo-text-color-blue-light[data-v-5aec9b40]{color:#ecf5ff}.wo-border-color-blue-light[data-v-5aec9b40]{border-color:#ecf5ff}.wo-bg-color-green[data-v-5aec9b40]{background-color:green}.wo-text-color-green[data-v-5aec9b40]{color:green}.wo-border-color-green[data-v-5aec9b40]{border-color:green}.wo-bg-color-green-default[data-v-5aec9b40]{background-color:#19be6b}.wo-text-color-green-default[data-v-5aec9b40]{color:#19be6b}.wo-border-color-green-default[data-v-5aec9b40]{border-color:#19be6b}.wo-bg-color-green-dark[data-v-5aec9b40]{background-color:#18b566}.wo-text-color-green-dark[data-v-5aec9b40]{color:#18b566}.wo-border-color-green-dark[data-v-5aec9b40]{border-color:#18b566}.wo-bg-color-green-matt[data-v-5aec9b40]{background-color:#71d5a1}.wo-text-color-green-matt[data-v-5aec9b40]{color:#71d5a1}.wo-border-color-green-matt[data-v-5aec9b40]{border-color:#71d5a1}.wo-bg-color-green-light[data-v-5aec9b40]{background-color:#dbf1e1}.wo-text-color-green-light[data-v-5aec9b40]{color:#dbf1e1}.wo-border-color-green-light[data-v-5aec9b40]{border-color:#dbf1e1}.wo-bg-color-yellow[data-v-5aec9b40]{background-color:#ff0}.wo-text-color-yellow[data-v-5aec9b40]{color:#ff0}.wo-border-color-yellow[data-v-5aec9b40]{border-color:#ff0}.wo-bg-color-yellow-default[data-v-5aec9b40]{background-color:#f29100}.wo-text-color-yellow-default[data-v-5aec9b40]{color:#f29100}.wo-border-color-yellow-default[data-v-5aec9b40]{border-color:#f29100}.wo-bg-color-yellow-dark[data-v-5aec9b40]{background-color:#f29100}.wo-text-color-yellow-dark[data-v-5aec9b40]{color:#f29100}.wo-border-color-yellow-dark[data-v-5aec9b40]{border-color:#f29100}.wo-bg-color-yellow-matt[data-v-5aec9b40]{background-color:#fcbd71}.wo-text-color-yellow-matt[data-v-5aec9b40]{color:#fcbd71}.wo-border-color-yellow-matt[data-v-5aec9b40]{border-color:#fcbd71}.wo-bg-color-yellow-light[data-v-5aec9b40]{background-color:#fdf6ec}.wo-text-color-yellow-light[data-v-5aec9b40]{color:#fdf6ec}.wo-border-color-yellow-light[data-v-5aec9b40]{border-color:#fdf6ec}.wo-bg-color-red[data-v-5aec9b40]{background-color:red}.wo-text-color-red[data-v-5aec9b40]{color:red}.wo-border-color-red[data-v-5aec9b40]{border-color:red}.wo-bg-color-red-default[data-v-5aec9b40]{background-color:#fa3534}.wo-text-color-red-default[data-v-5aec9b40]{color:#fa3534}.wo-border-color-red-default[data-v-5aec9b40]{border-color:#fa3534}.wo-bg-color-red-dark[data-v-5aec9b40]{background-color:#dd6161}.wo-text-color-red-dark[data-v-5aec9b40]{color:#dd6161}.wo-border-color-red-dark[data-v-5aec9b40]{border-color:#dd6161}.wo-bg-color-red-matt[data-v-5aec9b40]{background-color:#fab6b6}.wo-text-color-red-matt[data-v-5aec9b40]{color:#fab6b6}.wo-border-color-red-matt[data-v-5aec9b40]{border-color:#fab6b6}.wo-bg-color-red-light[data-v-5aec9b40]{background-color:#fef0f0}.wo-text-color-red-light[data-v-5aec9b40]{color:#fef0f0}.wo-border-color-red-light[data-v-5aec9b40]{border-color:#fef0f0}.wo-bg-color-black[data-v-5aec9b40]{background-color:#000}.wo-text-color-black[data-v-5aec9b40]{color:#000}.wo-border-color-black[data-v-5aec9b40]{border-color:#000}.wo-bg-color-grey[data-v-5aec9b40]{background-color:grey}.wo-text-color-grey[data-v-5aec9b40]{color:grey}.wo-border-color-grey[data-v-5aec9b40]{border-color:grey}.wo-bg-color-grey-dark[data-v-5aec9b40]{background-color:#a9a9a9}.wo-text-color-grey-dark[data-v-5aec9b40]{color:#a9a9a9}.wo-border-color-grey-dark[data-v-5aec9b40]{border-color:#a9a9a9}.wo-bg-color-grey-light[data-v-5aec9b40]{background-color:#d3d3d3}.wo-text-color-grey-light[data-v-5aec9b40]{color:#d3d3d3}.wo-border-color-grey-light[data-v-5aec9b40]{border-color:#d3d3d3}.wo-bg-color-grey-3[data-v-5aec9b40]{background-color:#303133}.wo-text-color-grey-3[data-v-5aec9b40]{color:#303133}.wo-border-color-grey-3[data-v-5aec9b40]{border-color:#303133}.wo-bg-color-grey-6[data-v-5aec9b40]{background-color:#606266}.wo-text-color-grey-6[data-v-5aec9b40]{color:#606266}.wo-border-color-grey-6[data-v-5aec9b40]{border-color:#606266}.wo-bg-color-grey-8[data-v-5aec9b40]{background-color:#82848a}.wo-text-color-grey-8[data-v-5aec9b40]{color:#82848a}.wo-border-color-grey-8[data-v-5aec9b40]{border-color:#82848a}.wo-bg-color-grey-9[data-v-5aec9b40]{background-color:#909399}.wo-text-color-grey-9[data-v-5aec9b40]{color:#909399}.wo-border-color-grey-9[data-v-5aec9b40]{border-color:#909399}.wo-bg-color-grey-c[data-v-5aec9b40]{background-color:#c8c9cc}.wo-text-color-grey-c[data-v-5aec9b40]{color:#c8c9cc}.wo-border-color-grey-c[data-v-5aec9b40]{border-color:#c8c9cc}.wo-bg-color-grey-d[data-v-5aec9b40]{background-color:#dcdfe6}.wo-text-color-grey-d[data-v-5aec9b40]{color:#dcdfe6}.wo-border-color-grey-d[data-v-5aec9b40]{border-color:#dcdfe6}.wo-bg-color-grey-e[data-v-5aec9b40]{background-color:#e4e7ed}.wo-text-color-grey-e[data-v-5aec9b40]{color:#e4e7ed}.wo-border-color-grey-e[data-v-5aec9b40]{border-color:#e4e7ed}.wo-bg-color-grey-f[data-v-5aec9b40]{background-color:#f3f4f6}.wo-text-color-grey-f[data-v-5aec9b40]{color:#f3f4f6}.wo-border-color-grey-f[data-v-5aec9b40]{border-color:#f3f4f6}.wo-bg-color-white[data-v-5aec9b40]{background-color:#fff}.wo-text-color-white[data-v-5aec9b40]{color:#fff}.wo-border-color-white[data-v-5aec9b40]{border-color:#fff}.wo-bg-color-transparent[data-v-5aec9b40]{background-color:initial}.wo-text-color-transparent[data-v-5aec9b40]{color:transparent}.wo-border-color-transparent[data-v-5aec9b40]{border-color:transparent}.wo-bg-color-mask-black-15[data-v-5aec9b40]{background-color:rgba(0,0,0,.15)}.wo-text-color-mask-black-15[data-v-5aec9b40]{color:rgba(0,0,0,.15)}.wo-border-color-mask-black-15[data-v-5aec9b40]{border-color:rgba(0,0,0,.15)}.wo-bg-color-mask-black-30[data-v-5aec9b40]{background-color:rgba(0,0,0,.3)}.wo-text-color-mask-black-30[data-v-5aec9b40]{color:rgba(0,0,0,.3)}.wo-border-color-mask-black-30[data-v-5aec9b40]{border-color:rgba(0,0,0,.3)}.wo-bg-color-mask-black-50[data-v-5aec9b40]{background-color:rgba(0,0,0,.5)}.wo-text-color-mask-black-50[data-v-5aec9b40]{color:rgba(0,0,0,.5)}.wo-border-color-mask-black-50[data-v-5aec9b40]{border-color:rgba(0,0,0,.5)}.wo-bg-color-main[data-v-5aec9b40]{background-color:#2979ff}.wo-text-color-main[data-v-5aec9b40]{color:#2979ff}.wo-border-color-main[data-v-5aec9b40]{border-color:#2979ff}.wo-bg-color-minor[data-v-5aec9b40]{background-color:#f90}.wo-text-color-minor[data-v-5aec9b40]{color:#f90}.wo-border-color-minor[data-v-5aec9b40]{border-color:#f90}.wo-bg-color-action[data-v-5aec9b40]{background-color:#a0cfff}.wo-text-color-action[data-v-5aec9b40]{color:#a0cfff}.wo-border-color-action[data-v-5aec9b40]{border-color:#a0cfff}.wo-bg-color-bg[data-v-5aec9b40]{background-color:#f3f4f6}.wo-text-color-bg[data-v-5aec9b40]{color:#f3f4f6}.wo-border-color-bg[data-v-5aec9b40]{border-color:#f3f4f6}.wo-bg-color-border[data-v-5aec9b40]{background-color:#e4e7ed}.wo-text-color-border[data-v-5aec9b40]{color:#e4e7ed}.wo-border-color-border[data-v-5aec9b40]{border-color:#e4e7ed}.wo-bg-color-fg[data-v-5aec9b40]{background-color:#fff}.wo-text-color-fg[data-v-5aec9b40]{color:#fff}.wo-border-color-fg[data-v-5aec9b40]{border-color:#fff}.sItem[data-v-5aec9b40]{border-bottom:1px solid #e4e7ed;padding:%?15?%;display:flex;justify-content:space-between}.sItem uni-input[data-v-5aec9b40]{height:%?56?%;line-height:%?56?%;width:60%;padding-left:%?15?%;border-left:1px solid #e4e7ed}.sItem uni-input.sDisabled[data-v-5aec9b40]{text-align:right;border-left:transparent}",""]),o.exports=e},"9e45":function(o,e,r){"use strict";r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"0px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(o){this.$emit("click",o)}}};e.default=a},a517:function(o,e,r){"use strict";r.r(e);var a=r("9e45"),c=r.n(a);for(var t in a)["default"].indexOf(t)<0&&function(o){r.d(e,o,(function(){return a[o]}))}(t);e["default"]=c.a},afc0:function(o,e,r){"use strict";r.r(e);var a=r("f840"),c=r("bc02");for(var t in c)["default"].indexOf(t)<0&&function(o){r.d(e,o,(function(){return c[o]}))}(t);r("0542");var d=r("f0c5"),l=Object(d["a"])(c["default"],a["b"],a["c"],!1,null,"5aec9b40",null,!1,a["a"],void 0);e["default"]=l.exports},bc02:function(o,e,r){"use strict";r.r(e);var a=r("7fdc"),c=r.n(a);for(var t in a)["default"].indexOf(t)<0&&function(o){r.d(e,o,(function(){return a[o]}))}(t);e["default"]=c.a},f840:function(o,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return t})),r.d(e,"a",(function(){return a}));var a={partWindowLayout:r("1f23").default,partNavilink:r("63d2").default,uniCard:r("6f6d").default,uniIcons:r("e539").default,uniTag:r("94d8").default},c=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("part-window-layout",[r("v-uni-view",{staticClass:"window-page-750"},[r("part-navilink",{attrs:{linkList:[{target:"ume",name:o.wo.ll({zhCN:"我的个人中心",enUS:"My Personal Center"})}]}}),r("v-uni-view",{staticClass:"wo-flex column",staticStyle:{margin:"40px 0px"}},[r("uni-card",{staticStyle:{margin:"40px 0",flex:"none"}},[r("v-uni-view",{staticClass:"sItem"},[r("v-uni-text",[o._v(o._s(o.wo.ll({zhCN:"姓名",enUS:"Name"})))]),r("v-uni-input",{class:{sDisabled:o.isFixed},attrs:{type:"text",disabled:o.isFixed,placeholder:o.wo.ll({zhCN:"请输入您的姓名",enUS:"Enter your  real name"})},model:{value:o.wo.ss.User.onlineUser.realname,callback:function(e){o.$set(o.wo.ss.User.onlineUser,"realname",e)},expression:"wo.ss.User.onlineUser.realname"}})],1),r("v-uni-view",{staticClass:"sItem"},[r("v-uni-text",[o._v(o._s(o.wo.ll({zhCN:"国籍",enUS:"Nationality"})))]),r("v-uni-picker",{staticClass:"sNationPicker",attrs:{disabled:o.isFixed,value:o.citizenLandIndex,range:o.landList},on:{change:function(e){arguments[0]=e=o.$handleEvent(e),o.pick_land.apply(void 0,arguments)}}},[r("v-uni-view",{staticStyle:{display:"flex"}},[r("v-uni-view",[o._v(o._s(o.landList[o.citizenLandIndex]))]),o.isFixed?o._e():r("uni-icons",{staticStyle:{"margin-left":"30px","font-size":"x-small"},attrs:{type:"bottom"}})],1)],1)],1),r("v-uni-view",{staticClass:"sItem"},[r("v-uni-text",[o._v(o._s(o.wo.ll({zhCN:"证件类型",enUS:"ID Type"})))]),r("v-uni-picker",{staticClass:"sIdTypePicker",attrs:{disabled:o.isFixed,value:o.idTypeIndex,range:Object.values(o.idTypeDict).map((function(e){return o.wo.ll(e)}))},on:{change:function(e){arguments[0]=e=o.$handleEvent(e),o.pick_id_type.apply(void 0,arguments)}}},[r("v-uni-view",{staticStyle:{display:"flex"}},[r("v-uni-view",[o._v(o._s(o.wo.ll(Object.values(o.idTypeDict)[o.idTypeIndex])))]),o.isFixed?o._e():r("uni-icon",{staticStyle:{"margin-left":"30px","font-size":"x-small"},attrs:{type:"bottom"}})],1)],1)],1),r("v-uni-view",{staticClass:"sItem"},[r("v-uni-text",[o._v(o._s(o.wo.ll({zhCN:"证件编号",enUS:"ID Number"})))]),r("v-uni-input",{class:{sDisabled:o.isFixed},attrs:{type:"text",disabled:o.isFixed,placeholder:o.wo.ll({zhCN:"请输入您的证件编号",enUS:"Enter your ID Number"})},model:{value:o.wo.ss.User.onlineUser.idNumber,callback:function(e){o.$set(o.wo.ss.User.onlineUser,"idNumber",e)},expression:"wo.ss.User.onlineUser.idNumber"}})],1),r("v-uni-view",{staticStyle:{margin:"44rpx 32rpx",display:"flex","flex-flow":"column","align-items":"center"}},[r("v-uni-text",[o._v(o._s(o.wo.ll({zhCN:{SUBMITTED:"您已提交初级实名资料，等待审核中。",REJECTED:"您的资料没有通过认证，请检查并重新提交。",PASSED:"您已通过初级认证，请继续进行中级认证。",DEFAULT:"完成初级认证，即可解锁以下功能"},enUS:{SUBMITTED:"您已提交初级实名资料，等待审核中。",REJECTED:"您的资料没有通过认证，请检查并重新提交。",PASSED:"您已通过初级认证，请继续进行中级认证。",DEFAULT:"完成初级认证，即可解锁以下功能"}})[o.wo.ss.User.onlineUser.kycStateL1||"DEFAULT"]))]),o.wo.ss.User.onlineUser.kycStateL1?o._e():r("v-uni-view",{staticStyle:{"margin-top":"10px"}},[r("uni-tag",{attrs:{text:"抽奖",type:o.wo.c2t.GREEN}})],1)],1),r("v-uni-view",[o.isFixed?r("v-uni-button",{attrs:{type:o.wo.c2t.BLUE},on:{click:function(e){arguments[0]=e=o.$handleEvent(e),o.uni.navigateTo({url:"user-kyc-l2"})}}},[o._v(o._s(o.wo.ll({zhCN:"下一步",enUS:"Go to Level 2"})))]):r("v-uni-button",{attrs:{type:o.wo.ss.User.onlineUser.realname&&o.wo.ss.User.onlineUser.idNumber?o.wo.c2t.BLUE:void 0,disabled:!o.wo.ss.User.onlineUser.realname||!o.wo.ss.User.onlineUser.idNumber,loading:o.isLoading},on:{click:function(e){arguments[0]=e=o.$handleEvent(e),o.to_update_kyc1.apply(void 0,arguments)}}},[o._v(o._s(o.wo.ll({zhCN:"提交",enUS:"Submit"})))])],1)],1)],1)],1)],1)},t=[]}}]);