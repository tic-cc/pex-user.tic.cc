(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-resource"],{"0292":function(o,r,a){"use strict";a("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding:function(){return"string"===typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title:function(o){uni.report&&""!==o&&uni.report("title",o)}},methods:{onClick:function(){this.$emit("click")}}};r.default=e},"0e0d":function(o,r,a){"use strict";var e=a("620d"),t=a.n(e);t.a},"1f23":function(o,r,a){"use strict";a.r(r);var e=a("d43bf"),t=a("af81");for(var c in t)["default"].indexOf(c)<0&&function(o){a.d(r,o,(function(){return t[o]}))}(c);a("0e0d");var l=a("f0c5"),d=Object(l["a"])(t["default"],e["b"],e["c"],!1,null,"06a86a91",null,!1,e["a"],void 0);r["default"]=d.exports},"38a6":function(o,r,a){"use strict";a("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default={data:function(){return{}},computed:{},mounted:function(){},methods:{}}},"3e44":function(o,r,a){"use strict";a("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,a("caad"),a("2532"),a("d81d");var e={props:{linkList:{type:Array,default:[]}},data:function(){return{}},computed:{},mounted:function(){},methods:{jump_to:function(o){var r=o.target,a=o.type;a=a||wo.pagesJson.tabBar.list.map((function(o){return o.pagePath.substr(6)})).includes(r)?"switchTab":"navigateTo",uni[a]({url:r})}}};r.default=e},"41aeb":function(o,r,a){var e=a("24fb");r=e(!1),r.push([o.i,"@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/********* 自定义主题 **********/\n/* 导入 uview 的主题 */\n/**\n * 区分设备的 Media Query 模板\n */\n/**\n * 基于 uview 和 uniapp 的通用主题\n */\n/**\n * 直观命名的色彩，取代语义命名。\n */\n/**  \n* 覆盖掉 uview 定义的语义命名色彩。\n*/\n/**  \n* 覆盖掉 uni.scss 定义的内置组件的语义命名色彩。\n*/\n/**\n * 可进一步覆盖扩展组件 uni-ui 的语义命名色彩。\n * 参考 https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html\n * @import '@/uni_modules/uni-scss/variables.scss';\n */\n/**\n* 程序化定义色彩直接变量 $color-***，以及 color, background-color, border-color 的原子类\n*/.wo-bg-color-blue[data-v-52a816e0]{background-color:#00f}.wo-text-color-blue[data-v-52a816e0]{color:#00f}.wo-border-color-blue[data-v-52a816e0]{border-color:#00f}.wo-bg-color-blue-default[data-v-52a816e0]{background-color:#2979ff}.wo-text-color-blue-default[data-v-52a816e0]{color:#2979ff}.wo-border-color-blue-default[data-v-52a816e0]{border-color:#2979ff}.wo-bg-color-blue-dark[data-v-52a816e0]{background-color:#2b85e4}.wo-text-color-blue-dark[data-v-52a816e0]{color:#2b85e4}.wo-border-color-blue-dark[data-v-52a816e0]{border-color:#2b85e4}.wo-bg-color-blue-matt[data-v-52a816e0]{background-color:#a0cfff}.wo-text-color-blue-matt[data-v-52a816e0]{color:#a0cfff}.wo-border-color-blue-matt[data-v-52a816e0]{border-color:#a0cfff}.wo-bg-color-blue-light[data-v-52a816e0]{background-color:#ecf5ff}.wo-text-color-blue-light[data-v-52a816e0]{color:#ecf5ff}.wo-border-color-blue-light[data-v-52a816e0]{border-color:#ecf5ff}.wo-bg-color-green[data-v-52a816e0]{background-color:green}.wo-text-color-green[data-v-52a816e0]{color:green}.wo-border-color-green[data-v-52a816e0]{border-color:green}.wo-bg-color-green-default[data-v-52a816e0]{background-color:#19be6b}.wo-text-color-green-default[data-v-52a816e0]{color:#19be6b}.wo-border-color-green-default[data-v-52a816e0]{border-color:#19be6b}.wo-bg-color-green-dark[data-v-52a816e0]{background-color:#18b566}.wo-text-color-green-dark[data-v-52a816e0]{color:#18b566}.wo-border-color-green-dark[data-v-52a816e0]{border-color:#18b566}.wo-bg-color-green-matt[data-v-52a816e0]{background-color:#71d5a1}.wo-text-color-green-matt[data-v-52a816e0]{color:#71d5a1}.wo-border-color-green-matt[data-v-52a816e0]{border-color:#71d5a1}.wo-bg-color-green-light[data-v-52a816e0]{background-color:#dbf1e1}.wo-text-color-green-light[data-v-52a816e0]{color:#dbf1e1}.wo-border-color-green-light[data-v-52a816e0]{border-color:#dbf1e1}.wo-bg-color-yellow[data-v-52a816e0]{background-color:#ff0}.wo-text-color-yellow[data-v-52a816e0]{color:#ff0}.wo-border-color-yellow[data-v-52a816e0]{border-color:#ff0}.wo-bg-color-yellow-default[data-v-52a816e0]{background-color:#f29100}.wo-text-color-yellow-default[data-v-52a816e0]{color:#f29100}.wo-border-color-yellow-default[data-v-52a816e0]{border-color:#f29100}.wo-bg-color-yellow-dark[data-v-52a816e0]{background-color:#f29100}.wo-text-color-yellow-dark[data-v-52a816e0]{color:#f29100}.wo-border-color-yellow-dark[data-v-52a816e0]{border-color:#f29100}.wo-bg-color-yellow-matt[data-v-52a816e0]{background-color:#fcbd71}.wo-text-color-yellow-matt[data-v-52a816e0]{color:#fcbd71}.wo-border-color-yellow-matt[data-v-52a816e0]{border-color:#fcbd71}.wo-bg-color-yellow-light[data-v-52a816e0]{background-color:#fdf6ec}.wo-text-color-yellow-light[data-v-52a816e0]{color:#fdf6ec}.wo-border-color-yellow-light[data-v-52a816e0]{border-color:#fdf6ec}.wo-bg-color-red[data-v-52a816e0]{background-color:red}.wo-text-color-red[data-v-52a816e0]{color:red}.wo-border-color-red[data-v-52a816e0]{border-color:red}.wo-bg-color-red-default[data-v-52a816e0]{background-color:#fa3534}.wo-text-color-red-default[data-v-52a816e0]{color:#fa3534}.wo-border-color-red-default[data-v-52a816e0]{border-color:#fa3534}.wo-bg-color-red-dark[data-v-52a816e0]{background-color:#dd6161}.wo-text-color-red-dark[data-v-52a816e0]{color:#dd6161}.wo-border-color-red-dark[data-v-52a816e0]{border-color:#dd6161}.wo-bg-color-red-matt[data-v-52a816e0]{background-color:#fab6b6}.wo-text-color-red-matt[data-v-52a816e0]{color:#fab6b6}.wo-border-color-red-matt[data-v-52a816e0]{border-color:#fab6b6}.wo-bg-color-red-light[data-v-52a816e0]{background-color:#fef0f0}.wo-text-color-red-light[data-v-52a816e0]{color:#fef0f0}.wo-border-color-red-light[data-v-52a816e0]{border-color:#fef0f0}.wo-bg-color-black[data-v-52a816e0]{background-color:#000}.wo-text-color-black[data-v-52a816e0]{color:#000}.wo-border-color-black[data-v-52a816e0]{border-color:#000}.wo-bg-color-grey[data-v-52a816e0]{background-color:grey}.wo-text-color-grey[data-v-52a816e0]{color:grey}.wo-border-color-grey[data-v-52a816e0]{border-color:grey}.wo-bg-color-grey-dark[data-v-52a816e0]{background-color:#a9a9a9}.wo-text-color-grey-dark[data-v-52a816e0]{color:#a9a9a9}.wo-border-color-grey-dark[data-v-52a816e0]{border-color:#a9a9a9}.wo-bg-color-grey-light[data-v-52a816e0]{background-color:#d3d3d3}.wo-text-color-grey-light[data-v-52a816e0]{color:#d3d3d3}.wo-border-color-grey-light[data-v-52a816e0]{border-color:#d3d3d3}.wo-bg-color-grey-3[data-v-52a816e0]{background-color:#303133}.wo-text-color-grey-3[data-v-52a816e0]{color:#303133}.wo-border-color-grey-3[data-v-52a816e0]{border-color:#303133}.wo-bg-color-grey-6[data-v-52a816e0]{background-color:#606266}.wo-text-color-grey-6[data-v-52a816e0]{color:#606266}.wo-border-color-grey-6[data-v-52a816e0]{border-color:#606266}.wo-bg-color-grey-8[data-v-52a816e0]{background-color:#82848a}.wo-text-color-grey-8[data-v-52a816e0]{color:#82848a}.wo-border-color-grey-8[data-v-52a816e0]{border-color:#82848a}.wo-bg-color-grey-9[data-v-52a816e0]{background-color:#909399}.wo-text-color-grey-9[data-v-52a816e0]{color:#909399}.wo-border-color-grey-9[data-v-52a816e0]{border-color:#909399}.wo-bg-color-grey-c[data-v-52a816e0]{background-color:#c8c9cc}.wo-text-color-grey-c[data-v-52a816e0]{color:#c8c9cc}.wo-border-color-grey-c[data-v-52a816e0]{border-color:#c8c9cc}.wo-bg-color-grey-d[data-v-52a816e0]{background-color:#dcdfe6}.wo-text-color-grey-d[data-v-52a816e0]{color:#dcdfe6}.wo-border-color-grey-d[data-v-52a816e0]{border-color:#dcdfe6}.wo-bg-color-grey-e[data-v-52a816e0]{background-color:#e4e7ed}.wo-text-color-grey-e[data-v-52a816e0]{color:#e4e7ed}.wo-border-color-grey-e[data-v-52a816e0]{border-color:#e4e7ed}.wo-bg-color-grey-f[data-v-52a816e0]{background-color:#f3f4f6}.wo-text-color-grey-f[data-v-52a816e0]{color:#f3f4f6}.wo-border-color-grey-f[data-v-52a816e0]{border-color:#f3f4f6}.wo-bg-color-white[data-v-52a816e0]{background-color:#fff}.wo-text-color-white[data-v-52a816e0]{color:#fff}.wo-border-color-white[data-v-52a816e0]{border-color:#fff}.wo-bg-color-transparent[data-v-52a816e0]{background-color:initial}.wo-text-color-transparent[data-v-52a816e0]{color:transparent}.wo-border-color-transparent[data-v-52a816e0]{border-color:transparent}.wo-bg-color-mask-black-15[data-v-52a816e0]{background-color:rgba(0,0,0,.15)}.wo-text-color-mask-black-15[data-v-52a816e0]{color:rgba(0,0,0,.15)}.wo-border-color-mask-black-15[data-v-52a816e0]{border-color:rgba(0,0,0,.15)}.wo-bg-color-mask-black-30[data-v-52a816e0]{background-color:rgba(0,0,0,.3)}.wo-text-color-mask-black-30[data-v-52a816e0]{color:rgba(0,0,0,.3)}.wo-border-color-mask-black-30[data-v-52a816e0]{border-color:rgba(0,0,0,.3)}.wo-bg-color-mask-black-50[data-v-52a816e0]{background-color:rgba(0,0,0,.5)}.wo-text-color-mask-black-50[data-v-52a816e0]{color:rgba(0,0,0,.5)}.wo-border-color-mask-black-50[data-v-52a816e0]{border-color:rgba(0,0,0,.5)}.wo-bg-color-main[data-v-52a816e0]{background-color:#2979ff}.wo-text-color-main[data-v-52a816e0]{color:#2979ff}.wo-border-color-main[data-v-52a816e0]{border-color:#2979ff}.wo-bg-color-minor[data-v-52a816e0]{background-color:#f90}.wo-text-color-minor[data-v-52a816e0]{color:#f90}.wo-border-color-minor[data-v-52a816e0]{border-color:#f90}.wo-bg-color-action[data-v-52a816e0]{background-color:#a0cfff}.wo-text-color-action[data-v-52a816e0]{color:#a0cfff}.wo-border-color-action[data-v-52a816e0]{border-color:#a0cfff}.wo-bg-color-bg[data-v-52a816e0]{background-color:#f3f4f6}.wo-text-color-bg[data-v-52a816e0]{color:#f3f4f6}.wo-border-color-bg[data-v-52a816e0]{border-color:#f3f4f6}.wo-bg-color-border[data-v-52a816e0]{background-color:#e4e7ed}.wo-text-color-border[data-v-52a816e0]{color:#e4e7ed}.wo-border-color-border[data-v-52a816e0]{border-color:#e4e7ed}.wo-bg-color-fg[data-v-52a816e0]{background-color:#fff}.wo-text-color-fg[data-v-52a816e0]{color:#fff}.wo-border-color-fg[data-v-52a816e0]{border-color:#fff}.uni-section[data-v-52a816e0]{background-color:#fff}.uni-section .uni-section-header[data-v-52a816e0]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section .uni-section-header__decoration[data-v-52a816e0]{margin-right:6px;background-color:#2979ff}.uni-section .uni-section-header__decoration.line[data-v-52a816e0]{width:4px;height:12px;border-radius:10px}.uni-section .uni-section-header__decoration.circle[data-v-52a816e0]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px}.uni-section .uni-section-header__decoration.square[data-v-52a816e0]{width:8px;height:8px}.uni-section .uni-section-header__content[data-v-52a816e0]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section .uni-section-header__content .distraction[data-v-52a816e0]{flex-direction:row;align-items:center}.uni-section .uni-section-header__content-sub[data-v-52a816e0]{margin-top:2px}.uni-section .uni-section-header__slot-right[data-v-52a816e0]{font-size:14px}.uni-section .uni-section-content[data-v-52a816e0]{font-size:14px}",""]),o.exports=r},5303:function(o,r,a){var e=a("24fb");r=e(!1),r.push([o.i,"@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/********* 自定义主题 **********/\n/* 导入 uview 的主题 */\n/**\n * 区分设备的 Media Query 模板\n */\n/**\n * 基于 uview 和 uniapp 的通用主题\n */\n/**\n * 直观命名的色彩，取代语义命名。\n */\n/**  \n* 覆盖掉 uview 定义的语义命名色彩。\n*/\n/**  \n* 覆盖掉 uni.scss 定义的内置组件的语义命名色彩。\n*/\n/**\n * 可进一步覆盖扩展组件 uni-ui 的语义命名色彩。\n * 参考 https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html\n * @import '@/uni_modules/uni-scss/variables.scss';\n */\n/**\n* 程序化定义色彩直接变量 $color-***，以及 color, background-color, border-color 的原子类\n*/.wo-bg-color-blue[data-v-3430fb12]{background-color:#00f}.wo-text-color-blue[data-v-3430fb12]{color:#00f}.wo-border-color-blue[data-v-3430fb12]{border-color:#00f}.wo-bg-color-blue-default[data-v-3430fb12]{background-color:#2979ff}.wo-text-color-blue-default[data-v-3430fb12]{color:#2979ff}.wo-border-color-blue-default[data-v-3430fb12]{border-color:#2979ff}.wo-bg-color-blue-dark[data-v-3430fb12]{background-color:#2b85e4}.wo-text-color-blue-dark[data-v-3430fb12]{color:#2b85e4}.wo-border-color-blue-dark[data-v-3430fb12]{border-color:#2b85e4}.wo-bg-color-blue-matt[data-v-3430fb12]{background-color:#a0cfff}.wo-text-color-blue-matt[data-v-3430fb12]{color:#a0cfff}.wo-border-color-blue-matt[data-v-3430fb12]{border-color:#a0cfff}.wo-bg-color-blue-light[data-v-3430fb12]{background-color:#ecf5ff}.wo-text-color-blue-light[data-v-3430fb12]{color:#ecf5ff}.wo-border-color-blue-light[data-v-3430fb12]{border-color:#ecf5ff}.wo-bg-color-green[data-v-3430fb12]{background-color:green}.wo-text-color-green[data-v-3430fb12]{color:green}.wo-border-color-green[data-v-3430fb12]{border-color:green}.wo-bg-color-green-default[data-v-3430fb12]{background-color:#19be6b}.wo-text-color-green-default[data-v-3430fb12]{color:#19be6b}.wo-border-color-green-default[data-v-3430fb12]{border-color:#19be6b}.wo-bg-color-green-dark[data-v-3430fb12]{background-color:#18b566}.wo-text-color-green-dark[data-v-3430fb12]{color:#18b566}.wo-border-color-green-dark[data-v-3430fb12]{border-color:#18b566}.wo-bg-color-green-matt[data-v-3430fb12]{background-color:#71d5a1}.wo-text-color-green-matt[data-v-3430fb12]{color:#71d5a1}.wo-border-color-green-matt[data-v-3430fb12]{border-color:#71d5a1}.wo-bg-color-green-light[data-v-3430fb12]{background-color:#dbf1e1}.wo-text-color-green-light[data-v-3430fb12]{color:#dbf1e1}.wo-border-color-green-light[data-v-3430fb12]{border-color:#dbf1e1}.wo-bg-color-yellow[data-v-3430fb12]{background-color:#ff0}.wo-text-color-yellow[data-v-3430fb12]{color:#ff0}.wo-border-color-yellow[data-v-3430fb12]{border-color:#ff0}.wo-bg-color-yellow-default[data-v-3430fb12]{background-color:#f29100}.wo-text-color-yellow-default[data-v-3430fb12]{color:#f29100}.wo-border-color-yellow-default[data-v-3430fb12]{border-color:#f29100}.wo-bg-color-yellow-dark[data-v-3430fb12]{background-color:#f29100}.wo-text-color-yellow-dark[data-v-3430fb12]{color:#f29100}.wo-border-color-yellow-dark[data-v-3430fb12]{border-color:#f29100}.wo-bg-color-yellow-matt[data-v-3430fb12]{background-color:#fcbd71}.wo-text-color-yellow-matt[data-v-3430fb12]{color:#fcbd71}.wo-border-color-yellow-matt[data-v-3430fb12]{border-color:#fcbd71}.wo-bg-color-yellow-light[data-v-3430fb12]{background-color:#fdf6ec}.wo-text-color-yellow-light[data-v-3430fb12]{color:#fdf6ec}.wo-border-color-yellow-light[data-v-3430fb12]{border-color:#fdf6ec}.wo-bg-color-red[data-v-3430fb12]{background-color:red}.wo-text-color-red[data-v-3430fb12]{color:red}.wo-border-color-red[data-v-3430fb12]{border-color:red}.wo-bg-color-red-default[data-v-3430fb12]{background-color:#fa3534}.wo-text-color-red-default[data-v-3430fb12]{color:#fa3534}.wo-border-color-red-default[data-v-3430fb12]{border-color:#fa3534}.wo-bg-color-red-dark[data-v-3430fb12]{background-color:#dd6161}.wo-text-color-red-dark[data-v-3430fb12]{color:#dd6161}.wo-border-color-red-dark[data-v-3430fb12]{border-color:#dd6161}.wo-bg-color-red-matt[data-v-3430fb12]{background-color:#fab6b6}.wo-text-color-red-matt[data-v-3430fb12]{color:#fab6b6}.wo-border-color-red-matt[data-v-3430fb12]{border-color:#fab6b6}.wo-bg-color-red-light[data-v-3430fb12]{background-color:#fef0f0}.wo-text-color-red-light[data-v-3430fb12]{color:#fef0f0}.wo-border-color-red-light[data-v-3430fb12]{border-color:#fef0f0}.wo-bg-color-black[data-v-3430fb12]{background-color:#000}.wo-text-color-black[data-v-3430fb12]{color:#000}.wo-border-color-black[data-v-3430fb12]{border-color:#000}.wo-bg-color-grey[data-v-3430fb12]{background-color:grey}.wo-text-color-grey[data-v-3430fb12]{color:grey}.wo-border-color-grey[data-v-3430fb12]{border-color:grey}.wo-bg-color-grey-dark[data-v-3430fb12]{background-color:#a9a9a9}.wo-text-color-grey-dark[data-v-3430fb12]{color:#a9a9a9}.wo-border-color-grey-dark[data-v-3430fb12]{border-color:#a9a9a9}.wo-bg-color-grey-light[data-v-3430fb12]{background-color:#d3d3d3}.wo-text-color-grey-light[data-v-3430fb12]{color:#d3d3d3}.wo-border-color-grey-light[data-v-3430fb12]{border-color:#d3d3d3}.wo-bg-color-grey-3[data-v-3430fb12]{background-color:#303133}.wo-text-color-grey-3[data-v-3430fb12]{color:#303133}.wo-border-color-grey-3[data-v-3430fb12]{border-color:#303133}.wo-bg-color-grey-6[data-v-3430fb12]{background-color:#606266}.wo-text-color-grey-6[data-v-3430fb12]{color:#606266}.wo-border-color-grey-6[data-v-3430fb12]{border-color:#606266}.wo-bg-color-grey-8[data-v-3430fb12]{background-color:#82848a}.wo-text-color-grey-8[data-v-3430fb12]{color:#82848a}.wo-border-color-grey-8[data-v-3430fb12]{border-color:#82848a}.wo-bg-color-grey-9[data-v-3430fb12]{background-color:#909399}.wo-text-color-grey-9[data-v-3430fb12]{color:#909399}.wo-border-color-grey-9[data-v-3430fb12]{border-color:#909399}.wo-bg-color-grey-c[data-v-3430fb12]{background-color:#c8c9cc}.wo-text-color-grey-c[data-v-3430fb12]{color:#c8c9cc}.wo-border-color-grey-c[data-v-3430fb12]{border-color:#c8c9cc}.wo-bg-color-grey-d[data-v-3430fb12]{background-color:#dcdfe6}.wo-text-color-grey-d[data-v-3430fb12]{color:#dcdfe6}.wo-border-color-grey-d[data-v-3430fb12]{border-color:#dcdfe6}.wo-bg-color-grey-e[data-v-3430fb12]{background-color:#e4e7ed}.wo-text-color-grey-e[data-v-3430fb12]{color:#e4e7ed}.wo-border-color-grey-e[data-v-3430fb12]{border-color:#e4e7ed}.wo-bg-color-grey-f[data-v-3430fb12]{background-color:#f3f4f6}.wo-text-color-grey-f[data-v-3430fb12]{color:#f3f4f6}.wo-border-color-grey-f[data-v-3430fb12]{border-color:#f3f4f6}.wo-bg-color-white[data-v-3430fb12]{background-color:#fff}.wo-text-color-white[data-v-3430fb12]{color:#fff}.wo-border-color-white[data-v-3430fb12]{border-color:#fff}.wo-bg-color-transparent[data-v-3430fb12]{background-color:initial}.wo-text-color-transparent[data-v-3430fb12]{color:transparent}.wo-border-color-transparent[data-v-3430fb12]{border-color:transparent}.wo-bg-color-mask-black-15[data-v-3430fb12]{background-color:rgba(0,0,0,.15)}.wo-text-color-mask-black-15[data-v-3430fb12]{color:rgba(0,0,0,.15)}.wo-border-color-mask-black-15[data-v-3430fb12]{border-color:rgba(0,0,0,.15)}.wo-bg-color-mask-black-30[data-v-3430fb12]{background-color:rgba(0,0,0,.3)}.wo-text-color-mask-black-30[data-v-3430fb12]{color:rgba(0,0,0,.3)}.wo-border-color-mask-black-30[data-v-3430fb12]{border-color:rgba(0,0,0,.3)}.wo-bg-color-mask-black-50[data-v-3430fb12]{background-color:rgba(0,0,0,.5)}.wo-text-color-mask-black-50[data-v-3430fb12]{color:rgba(0,0,0,.5)}.wo-border-color-mask-black-50[data-v-3430fb12]{border-color:rgba(0,0,0,.5)}.wo-bg-color-main[data-v-3430fb12]{background-color:#2979ff}.wo-text-color-main[data-v-3430fb12]{color:#2979ff}.wo-border-color-main[data-v-3430fb12]{border-color:#2979ff}.wo-bg-color-minor[data-v-3430fb12]{background-color:#f90}.wo-text-color-minor[data-v-3430fb12]{color:#f90}.wo-border-color-minor[data-v-3430fb12]{border-color:#f90}.wo-bg-color-action[data-v-3430fb12]{background-color:#a0cfff}.wo-text-color-action[data-v-3430fb12]{color:#a0cfff}.wo-border-color-action[data-v-3430fb12]{border-color:#a0cfff}.wo-bg-color-bg[data-v-3430fb12]{background-color:#f3f4f6}.wo-text-color-bg[data-v-3430fb12]{color:#f3f4f6}.wo-border-color-bg[data-v-3430fb12]{border-color:#f3f4f6}.wo-bg-color-border[data-v-3430fb12]{background-color:#e4e7ed}.wo-text-color-border[data-v-3430fb12]{color:#e4e7ed}.wo-border-color-border[data-v-3430fb12]{border-color:#e4e7ed}.wo-bg-color-fg[data-v-3430fb12]{background-color:#fff}.wo-text-color-fg[data-v-3430fb12]{color:#fff}.wo-border-color-fg[data-v-3430fb12]{border-color:#fff}a[data-v-3430fb12]{text-decoration:none}a[data-v-3430fb12]:link{color:#000}a[data-v-3430fb12]:hover{color:#a0cfff}.my-resource-item[data-v-3430fb12]{margin:0 20px 20px 20px}.my-resource-icon[data-v-3430fb12]{cursor:pointer;border-radius:100%;width:44px;height:44px;margin:0 5px;line-height:44px}",""]),o.exports=r},"620d":function(o,r,a){var e=a("7881");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);var t=a("4f06").default;t("4ab47934",e,!0,{sourceMap:!1,shadowMode:!1})},"63d2":function(o,r,a){"use strict";a.r(r);var e=a("c345"),t=a("a6c2");for(var c in t)["default"].indexOf(c)<0&&function(o){a.d(r,o,(function(){return t[o]}))}(c);var l=a("f0c5"),d=Object(l["a"])(t["default"],e["b"],e["c"],!1,null,"f34bd176",null,!1,e["a"],void 0);r["default"]=d.exports},7881:function(o,r,a){var e=a("24fb");r=e(!1),r.push([o.i,"@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/********* 自定义主题 **********/\n/* 导入 uview 的主题 */\n/**\n * 区分设备的 Media Query 模板\n */\n/**\n * 基于 uview 和 uniapp 的通用主题\n */\n/**\n * 直观命名的色彩，取代语义命名。\n */\n/**  \n* 覆盖掉 uview 定义的语义命名色彩。\n*/\n/**  \n* 覆盖掉 uni.scss 定义的内置组件的语义命名色彩。\n*/\n/**\n * 可进一步覆盖扩展组件 uni-ui 的语义命名色彩。\n * 参考 https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html\n * @import '@/uni_modules/uni-scss/variables.scss';\n */\n/**\n* 程序化定义色彩直接变量 $color-***，以及 color, background-color, border-color 的原子类\n*/.wo-bg-color-blue[data-v-06a86a91]{background-color:#00f}.wo-text-color-blue[data-v-06a86a91]{color:#00f}.wo-border-color-blue[data-v-06a86a91]{border-color:#00f}.wo-bg-color-blue-default[data-v-06a86a91]{background-color:#2979ff}.wo-text-color-blue-default[data-v-06a86a91]{color:#2979ff}.wo-border-color-blue-default[data-v-06a86a91]{border-color:#2979ff}.wo-bg-color-blue-dark[data-v-06a86a91]{background-color:#2b85e4}.wo-text-color-blue-dark[data-v-06a86a91]{color:#2b85e4}.wo-border-color-blue-dark[data-v-06a86a91]{border-color:#2b85e4}.wo-bg-color-blue-matt[data-v-06a86a91]{background-color:#a0cfff}.wo-text-color-blue-matt[data-v-06a86a91]{color:#a0cfff}.wo-border-color-blue-matt[data-v-06a86a91]{border-color:#a0cfff}.wo-bg-color-blue-light[data-v-06a86a91]{background-color:#ecf5ff}.wo-text-color-blue-light[data-v-06a86a91]{color:#ecf5ff}.wo-border-color-blue-light[data-v-06a86a91]{border-color:#ecf5ff}.wo-bg-color-green[data-v-06a86a91]{background-color:green}.wo-text-color-green[data-v-06a86a91]{color:green}.wo-border-color-green[data-v-06a86a91]{border-color:green}.wo-bg-color-green-default[data-v-06a86a91]{background-color:#19be6b}.wo-text-color-green-default[data-v-06a86a91]{color:#19be6b}.wo-border-color-green-default[data-v-06a86a91]{border-color:#19be6b}.wo-bg-color-green-dark[data-v-06a86a91]{background-color:#18b566}.wo-text-color-green-dark[data-v-06a86a91]{color:#18b566}.wo-border-color-green-dark[data-v-06a86a91]{border-color:#18b566}.wo-bg-color-green-matt[data-v-06a86a91]{background-color:#71d5a1}.wo-text-color-green-matt[data-v-06a86a91]{color:#71d5a1}.wo-border-color-green-matt[data-v-06a86a91]{border-color:#71d5a1}.wo-bg-color-green-light[data-v-06a86a91]{background-color:#dbf1e1}.wo-text-color-green-light[data-v-06a86a91]{color:#dbf1e1}.wo-border-color-green-light[data-v-06a86a91]{border-color:#dbf1e1}.wo-bg-color-yellow[data-v-06a86a91]{background-color:#ff0}.wo-text-color-yellow[data-v-06a86a91]{color:#ff0}.wo-border-color-yellow[data-v-06a86a91]{border-color:#ff0}.wo-bg-color-yellow-default[data-v-06a86a91]{background-color:#f29100}.wo-text-color-yellow-default[data-v-06a86a91]{color:#f29100}.wo-border-color-yellow-default[data-v-06a86a91]{border-color:#f29100}.wo-bg-color-yellow-dark[data-v-06a86a91]{background-color:#f29100}.wo-text-color-yellow-dark[data-v-06a86a91]{color:#f29100}.wo-border-color-yellow-dark[data-v-06a86a91]{border-color:#f29100}.wo-bg-color-yellow-matt[data-v-06a86a91]{background-color:#fcbd71}.wo-text-color-yellow-matt[data-v-06a86a91]{color:#fcbd71}.wo-border-color-yellow-matt[data-v-06a86a91]{border-color:#fcbd71}.wo-bg-color-yellow-light[data-v-06a86a91]{background-color:#fdf6ec}.wo-text-color-yellow-light[data-v-06a86a91]{color:#fdf6ec}.wo-border-color-yellow-light[data-v-06a86a91]{border-color:#fdf6ec}.wo-bg-color-red[data-v-06a86a91]{background-color:red}.wo-text-color-red[data-v-06a86a91]{color:red}.wo-border-color-red[data-v-06a86a91]{border-color:red}.wo-bg-color-red-default[data-v-06a86a91]{background-color:#fa3534}.wo-text-color-red-default[data-v-06a86a91]{color:#fa3534}.wo-border-color-red-default[data-v-06a86a91]{border-color:#fa3534}.wo-bg-color-red-dark[data-v-06a86a91]{background-color:#dd6161}.wo-text-color-red-dark[data-v-06a86a91]{color:#dd6161}.wo-border-color-red-dark[data-v-06a86a91]{border-color:#dd6161}.wo-bg-color-red-matt[data-v-06a86a91]{background-color:#fab6b6}.wo-text-color-red-matt[data-v-06a86a91]{color:#fab6b6}.wo-border-color-red-matt[data-v-06a86a91]{border-color:#fab6b6}.wo-bg-color-red-light[data-v-06a86a91]{background-color:#fef0f0}.wo-text-color-red-light[data-v-06a86a91]{color:#fef0f0}.wo-border-color-red-light[data-v-06a86a91]{border-color:#fef0f0}.wo-bg-color-black[data-v-06a86a91]{background-color:#000}.wo-text-color-black[data-v-06a86a91]{color:#000}.wo-border-color-black[data-v-06a86a91]{border-color:#000}.wo-bg-color-grey[data-v-06a86a91]{background-color:grey}.wo-text-color-grey[data-v-06a86a91]{color:grey}.wo-border-color-grey[data-v-06a86a91]{border-color:grey}.wo-bg-color-grey-dark[data-v-06a86a91]{background-color:#a9a9a9}.wo-text-color-grey-dark[data-v-06a86a91]{color:#a9a9a9}.wo-border-color-grey-dark[data-v-06a86a91]{border-color:#a9a9a9}.wo-bg-color-grey-light[data-v-06a86a91]{background-color:#d3d3d3}.wo-text-color-grey-light[data-v-06a86a91]{color:#d3d3d3}.wo-border-color-grey-light[data-v-06a86a91]{border-color:#d3d3d3}.wo-bg-color-grey-3[data-v-06a86a91]{background-color:#303133}.wo-text-color-grey-3[data-v-06a86a91]{color:#303133}.wo-border-color-grey-3[data-v-06a86a91]{border-color:#303133}.wo-bg-color-grey-6[data-v-06a86a91]{background-color:#606266}.wo-text-color-grey-6[data-v-06a86a91]{color:#606266}.wo-border-color-grey-6[data-v-06a86a91]{border-color:#606266}.wo-bg-color-grey-8[data-v-06a86a91]{background-color:#82848a}.wo-text-color-grey-8[data-v-06a86a91]{color:#82848a}.wo-border-color-grey-8[data-v-06a86a91]{border-color:#82848a}.wo-bg-color-grey-9[data-v-06a86a91]{background-color:#909399}.wo-text-color-grey-9[data-v-06a86a91]{color:#909399}.wo-border-color-grey-9[data-v-06a86a91]{border-color:#909399}.wo-bg-color-grey-c[data-v-06a86a91]{background-color:#c8c9cc}.wo-text-color-grey-c[data-v-06a86a91]{color:#c8c9cc}.wo-border-color-grey-c[data-v-06a86a91]{border-color:#c8c9cc}.wo-bg-color-grey-d[data-v-06a86a91]{background-color:#dcdfe6}.wo-text-color-grey-d[data-v-06a86a91]{color:#dcdfe6}.wo-border-color-grey-d[data-v-06a86a91]{border-color:#dcdfe6}.wo-bg-color-grey-e[data-v-06a86a91]{background-color:#e4e7ed}.wo-text-color-grey-e[data-v-06a86a91]{color:#e4e7ed}.wo-border-color-grey-e[data-v-06a86a91]{border-color:#e4e7ed}.wo-bg-color-grey-f[data-v-06a86a91]{background-color:#f3f4f6}.wo-text-color-grey-f[data-v-06a86a91]{color:#f3f4f6}.wo-border-color-grey-f[data-v-06a86a91]{border-color:#f3f4f6}.wo-bg-color-white[data-v-06a86a91]{background-color:#fff}.wo-text-color-white[data-v-06a86a91]{color:#fff}.wo-border-color-white[data-v-06a86a91]{border-color:#fff}.wo-bg-color-transparent[data-v-06a86a91]{background-color:initial}.wo-text-color-transparent[data-v-06a86a91]{color:transparent}.wo-border-color-transparent[data-v-06a86a91]{border-color:transparent}.wo-bg-color-mask-black-15[data-v-06a86a91]{background-color:rgba(0,0,0,.15)}.wo-text-color-mask-black-15[data-v-06a86a91]{color:rgba(0,0,0,.15)}.wo-border-color-mask-black-15[data-v-06a86a91]{border-color:rgba(0,0,0,.15)}.wo-bg-color-mask-black-30[data-v-06a86a91]{background-color:rgba(0,0,0,.3)}.wo-text-color-mask-black-30[data-v-06a86a91]{color:rgba(0,0,0,.3)}.wo-border-color-mask-black-30[data-v-06a86a91]{border-color:rgba(0,0,0,.3)}.wo-bg-color-mask-black-50[data-v-06a86a91]{background-color:rgba(0,0,0,.5)}.wo-text-color-mask-black-50[data-v-06a86a91]{color:rgba(0,0,0,.5)}.wo-border-color-mask-black-50[data-v-06a86a91]{border-color:rgba(0,0,0,.5)}.wo-bg-color-main[data-v-06a86a91]{background-color:#2979ff}.wo-text-color-main[data-v-06a86a91]{color:#2979ff}.wo-border-color-main[data-v-06a86a91]{border-color:#2979ff}.wo-bg-color-minor[data-v-06a86a91]{background-color:#f90}.wo-text-color-minor[data-v-06a86a91]{color:#f90}.wo-border-color-minor[data-v-06a86a91]{border-color:#f90}.wo-bg-color-action[data-v-06a86a91]{background-color:#a0cfff}.wo-text-color-action[data-v-06a86a91]{color:#a0cfff}.wo-border-color-action[data-v-06a86a91]{border-color:#a0cfff}.wo-bg-color-bg[data-v-06a86a91]{background-color:#f3f4f6}.wo-text-color-bg[data-v-06a86a91]{color:#f3f4f6}.wo-border-color-bg[data-v-06a86a91]{border-color:#f3f4f6}.wo-bg-color-border[data-v-06a86a91]{background-color:#e4e7ed}.wo-text-color-border[data-v-06a86a91]{color:#e4e7ed}.wo-border-color-border[data-v-06a86a91]{border-color:#e4e7ed}.wo-bg-color-fg[data-v-06a86a91]{background-color:#fff}.wo-text-color-fg[data-v-06a86a91]{color:#fff}.wo-border-color-fg[data-v-06a86a91]{border-color:#fff}.window-layout[data-v-06a86a91]{min-height:100%;display:flex;flex-flow:column nowrap;box-sizing:border-box}",""]),o.exports=r},"7a32":function(o,r,a){"use strict";a.r(r);var e=a("a099e"),t=a("ac70");for(var c in t)["default"].indexOf(c)<0&&function(o){a.d(r,o,(function(){return t[o]}))}(c);a("ab2c");var l=a("f0c5"),d=Object(l["a"])(t["default"],e["b"],e["c"],!1,null,"52a816e0",null,!1,e["a"],void 0);r["default"]=d.exports},8965:function(o,r,a){var e=a("5303");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);var t=a("4f06").default;t("36901010",e,!0,{sourceMap:!1,shadowMode:!1})},a099e:function(o,r,a){"use strict";a.d(r,"b",(function(){return e})),a.d(r,"c",(function(){return t})),a.d(r,"a",(function(){}));var e=function(){var o=this,r=o.$createElement,a=o._self._c||r;return a("v-uni-view",{staticClass:"uni-section"},[a("v-uni-view",{staticClass:"uni-section-header",on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.onClick.apply(void 0,arguments)}}},[o.type?a("v-uni-view",{staticClass:"uni-section-header__decoration",class:o.type}):o._t("decoration"),a("v-uni-view",{staticClass:"uni-section-header__content"},[a("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!o.subTitle},style:{"font-size":o.titleFontSize,color:o.titleColor}},[o._v(o._s(o.title))]),o.subTitle?a("v-uni-text",{staticClass:"uni-section-header__content-sub",style:{"font-size":o.subTitleFontSize,color:o.subTitleColor}},[o._v(o._s(o.subTitle))]):o._e()],1),a("v-uni-view",{staticClass:"uni-section-header__slot-right"},[o._t("right")],2)],2),a("v-uni-view",{staticClass:"uni-section-content",style:{padding:o._padding}},[o._t("default")],2)],1)},t=[]},a6c2:function(o,r,a){"use strict";a.r(r);var e=a("3e44"),t=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(o){a.d(r,o,(function(){return e[o]}))}(c);r["default"]=t.a},aa27:function(o,r,a){"use strict";a.d(r,"b",(function(){return t})),a.d(r,"c",(function(){return c})),a.d(r,"a",(function(){return e}));var e={partWindowLayout:a("1f23").default,partNavilink:a("63d2").default,uniSection:a("7a32").default,uniIcons:a("e539").default},t=function(){var o=this,r=o.$createElement,a=o._self._c||r;return a("part-window-layout",[a("v-uni-view",{staticClass:"window-page-750"},[a("part-navilink",{attrs:{linkList:[{target:"ume",name:o.wo.ll({zhCN:"我的个人中心",enUS:"My Personal Center"})}]}}),a("v-uni-view",{staticClass:"wo-flex column",staticStyle:{"font-size":"x-small",margin:"40px 0px"},attrs:{id:"更多资源"}},[a("uni-section",{staticStyle:{"background-color":"white",margin:"5px"},attrs:{type:"line",title:o.wo.ll({zhCN:"访问链接",enUS:"Visit Links"})}}),a("v-uni-view",{staticClass:"wo-flex row wrap start",staticStyle:{"margin-left":"20px"}},[a("v-uni-view",{staticClass:"wo-flex column align-center my-resource-item",on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.show_resource("blog")}}},[a("uni-icons",{staticClass:"my-resource-icon",attrs:{type:"home-filled",color:"unset",size:"30"}}),o._v(o._s(o.wo.ll(o.wo.ss.resourceInfo.blog.i18nTitle)))],1),a("v-uni-view",{staticClass:"wo-flex column align-center my-resource-item",on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.show_resource("chain")}}},[a("uni-icons",{staticClass:"my-resource-icon",attrs:{type:"map-filled",color:"unset",size:"30"}}),o._v(o._s(o.wo.ll(o.wo.ss.resourceInfo.chain.i18nTitle)))],1)],1),a("uni-section",{staticStyle:{"background-color":"white",margin:"5px"},attrs:{type:"line",title:o.wo.ll({zhCN:"下载应用",enUS:"Download Apps"})}}),a("v-uni-view",{staticClass:"wo-flex row wrap start",staticStyle:{"margin-left":"20px"}},[a("v-uni-view",{staticClass:"wo-flex column align-center my-resource-item",on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.show_resource("webapp")}}},[a("uni-icons",{staticClass:"my-resource-icon",attrs:{"custom-prefix":"icont-platform",type:"icont-platform-web-fill",color:"unset",size:"30"}}),o._v(o._s(o.wo.ll(o.wo.ss.resourceInfo.webapp.i18nTitle)))],1),a("v-uni-view",{staticClass:"wo-flex column align-center my-resource-item",on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.show_resource("ios")}}},[a("uni-icons",{staticClass:"my-resource-icon",attrs:{"custom-prefix":"icont-platform",type:"icont-platform-ios-fill",color:"unset",size:"30"}}),o._v(o._s(o.wo.ll(o.wo.ss.resourceInfo.ios.i18nTitle)))],1),a("v-uni-view",{staticClass:"wo-flex column align-center my-resource-item",on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.show_resource("android")}}},[a("uni-icons",{staticClass:"my-resource-icon",attrs:{"custom-prefix":"icont-platform",type:"icont-platform-android-fill",color:"unset",size:"30"}}),o._v(o._s(o.wo.ll(o.wo.ss.resourceInfo.android.i18nTitle)))],1)],1),a("uni-section",{staticStyle:{"background-color":"white",margin:"5px"},attrs:{type:"line",title:o.wo.ll({zhCN:"加入社群",enUS:"Join Community"})}}),a("v-uni-view",{staticClass:"wo-flex row wrap start",staticStyle:{"margin-left":"20px"}},[a("v-uni-view",{staticClass:"wo-flex column align-center my-resource-item",on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.show_resource("weixin")}}},[a("uni-icons",{staticClass:"my-resource-icon",attrs:{"custom-prefix":"icont-platform",type:"icont-platform-weixin-fill",color:"unset",size:"30"}}),o._v(o._s(o.wo.ll(o.wo.ss.resourceInfo.weixin.i18nTitle)))],1),a("v-uni-view",{staticClass:"wo-flex column align-center my-resource-item",on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.show_resource("telegram")}}},[a("uni-icons",{staticClass:"my-resource-icon",attrs:{"custom-prefix":"icont-platform",type:"icont-platform-telegram-fill",color:"unset",size:"30"}}),o._v(o._s(o.wo.ll(o.wo.ss.resourceInfo.telegram.i18nTitle)))],1)],1),a("uni-section",{staticStyle:{"background-color":"white",margin:"5px"},attrs:{type:"line",title:o.wo.ll({zhCN:"联系我们",enUS:"Contact us!"})}}),a("v-uni-view",{staticClass:"wo-flex column",staticStyle:{"margin-left":"20px","font-size":"medium"},attrs:{id:"联系方式"}},[a("v-uni-view",{staticClass:"wo-flex row align-center",staticStyle:{margin:"10px 20px"}},[a("uni-icons",{staticStyle:{"margin-right":"6px"},attrs:{type:"phone-filled",color:"unset"}}),a("a",{attrs:{href:"tel:+8617751517327"}},[o._v("+86 177 5151 7327")])],1),a("v-uni-view",{staticClass:"wo-flex row align-center",staticStyle:{margin:"10px 20px"}},[a("uni-icons",{staticStyle:{"margin-right":"6px"},attrs:{type:"email-filled",color:"unset"}}),a("a",{attrs:{href:"mailto:pex@tic.cc"}},[o._v("pex@tic.cc")])],1)],1)],1)],1)],1)},c=[]},ab22:function(o,r,a){var e=a("41aeb");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);var t=a("4f06").default;t("0b8c7b26",e,!0,{sourceMap:!1,shadowMode:!1})},ab2c:function(o,r,a){"use strict";var e=a("ab22"),t=a.n(e);t.a},ac70:function(o,r,a){"use strict";a.r(r);var e=a("0292"),t=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(o){a.d(r,o,(function(){return e[o]}))}(c);r["default"]=t.a},af81:function(o,r,a){"use strict";a.r(r);var e=a("38a6"),t=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(o){a.d(r,o,(function(){return e[o]}))}(c);r["default"]=t.a},b519:function(o,r,a){"use strict";a("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,a("dca8");var e={data:function(){return{i18nPageTitle:Object.freeze({zhCN:"关于"+wo.ll(wo.envar.callname),enUS:"About "+wo.ll(wo.envar.callname)})}},computed:{},onShow:function(){},methods:{show_resource:function(o){wo.ss.resourceNow=o,uni.navigateTo({url:"user-resource-detail"})}}};r.default=e},c345:function(o,r,a){"use strict";a.d(r,"b",(function(){return e})),a.d(r,"c",(function(){return t})),a.d(r,"a",(function(){}));var e=function(){var o=this,r=o.$createElement,a=o._self._c||r;return o.wo.envar.onPC?a("v-uni-view",{staticStyle:{display:"flex","flex-flow":"row wrap",margin:"40px 0 0 0"},attrs:{id:"面包屑导航"}},[o._l(o.linkList,(function(r,e){return a("v-uni-view",{key:e},[a("v-uni-text",{staticStyle:{margin:"0 10px"}},[o._v("/")]),a("v-uni-text",{staticClass:"wo-text-color-blue-matt",staticStyle:{"font-style":"italic",cursor:"pointer"},on:{click:function(a){arguments[0]=a=o.$handleEvent(a),o.jump_to(r)}}},[o._v(o._s(o.wo.ll(r.name)))])],1)})),a("v-uni-view",[a("v-uni-text",{staticStyle:{margin:"0 10px"}},[o._v("/")]),a("v-uni-text",{staticStyle:{"font-style":"italic"}},[o._v(o._s(o.wo.ll(o.wo.thisPage().i18nPageTitle)))])],1)],2):o._e()},t=[]},d43bf:function(o,r,a){"use strict";a.d(r,"b",(function(){return t})),a.d(r,"c",(function(){return c})),a.d(r,"a",(function(){return e}));var e={partWindow:a("2008").default,partHeader:a("de8f").default,partFooter:a("4235").default},t=function(){var o=this.$createElement,r=this._self._c||o;return r("part-window",[r("v-uni-view",{staticClass:"window-layout",style:{padding:this.wo.envar.onPC?"80px 0 0":"0"},attrs:{id:"window-layout"}},[r("part-header"),this._t("default"),r("part-footer")],2)],1)},c=[]},e660:function(o,r,a){"use strict";a.r(r);var e=a("aa27"),t=a("f70b");for(var c in t)["default"].indexOf(c)<0&&function(o){a.d(r,o,(function(){return t[o]}))}(c);a("e7ea");var l=a("f0c5"),d=Object(l["a"])(t["default"],e["b"],e["c"],!1,null,"3430fb12",null,!1,e["a"],void 0);r["default"]=d.exports},e7ea:function(o,r,a){"use strict";var e=a("8965"),t=a.n(e);t.a},f70b:function(o,r,a){"use strict";a.r(r);var e=a("b519"),t=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(o){a.d(r,o,(function(){return e[o]}))}(c);r["default"]=t.a}}]);