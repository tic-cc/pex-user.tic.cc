(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-config"],{"212b":function(o,a,r){"use strict";r.d(a,"b",(function(){return e})),r.d(a,"c",(function(){return c})),r.d(a,"a",(function(){return t}));var t={partWindow:r("00ad").default,partHeader:r("5f8e").default,partFooter:r("d61c").default},e=function(){var o=this,a=o.$createElement,r=o._self._c||a;return r("part-window",[r("v-uni-view",{staticClass:"window-layout",style:{padding:o.wo.envar.onPC?"80px 0 0":"0"},attrs:{id:"window-layout"}},[r("part-header"),o._t("default"),r("part-footer")],2)],1)},c=[]},"26df":function(o,a,r){var t=r("8cb0");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[o.i,t,""]]),t.locals&&(o.exports=t.locals);var e=r("4f06").default;e("89bc84ce",t,!0,{sourceMap:!1,shadowMode:!1})},"4a99":function(o,a,r){"use strict";r.r(a);var t=r("8307"),e=r.n(t);for(var c in t)"default"!==c&&function(o){r.d(a,o,(function(){return t[o]}))}(c);a["default"]=e.a},6803:function(o,a,r){"use strict";var t=r("26df"),e=r.n(t);e.a},"6ab6":function(o,a,r){"use strict";r.r(a);var t=r("212b"),e=r("4a99");for(var c in e)"default"!==c&&function(o){r.d(a,o,(function(){return e[o]}))}(c);r("6803");var l,d=r("f0c5"),n=Object(d["a"])(e["default"],t["b"],t["c"],!1,null,"06a86a91",null,!1,t["a"],l);a["default"]=n.exports},"6db8":function(o,a,r){"use strict";r.r(a);var t=r("9f21"),e=r.n(t);for(var c in t)"default"!==c&&function(o){r.d(a,o,(function(){return t[o]}))}(c);a["default"]=e.a},8307:function(o,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{}},computed:{},mounted:function(){},methods:{}};a.default=t},8473:function(o,a,r){"use strict";r.d(a,"b",(function(){return e})),r.d(a,"c",(function(){return c})),r.d(a,"a",(function(){return t}));var t={partWindowLayout:r("6ab6").default,partNavilink:r("9eb4").default,uniCard:r("fc4f").default,uniList:r("6e08").default,uniListItem:r("7338").default,uniIcons:r("a4a1").default},e=function(){var o=this,a=o.$createElement,r=o._self._c||a;return r("part-window-layout",[r("v-uni-view",{staticClass:"window-page-750"},[r("part-navilink",{attrs:{linkList:[{target:"ume",name:"个人设置"}]}}),r("uni-card",{staticStyle:{margin:"40px 0",flex:"none"}},[r("uni-list",{attrs:{border:!1}},[r("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":{type:"",size:"22"},title:o.wo.ll({zhCN:"界面语种",enUS:"Language"})},scopedSlots:o._u([{key:"footer",fn:function(){return[r("v-uni-picker",{staticClass:"sMenuItemValue",attrs:{value:o.wo.ss.i18n.langIndex,range:Object.values(o.wo.ss.i18n.langSet)},on:{change:function(a){arguments[0]=a=o.$handleEvent(a),o.wo.tt.pick_lang.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"wo-text-color-blue-dark",staticStyle:{display:"flex","align-items":"center"}},[r("v-uni-text",{staticStyle:{margin:"0 15px"}},[o._v(o._s(Object.values(o.wo.ss.i18n.langSet)[o.wo.ss.i18n.langIndex]))]),r("uni-icons",{staticStyle:{color:"unset"},attrs:{type:"bottom"}})],1)],1)]},proxy:!0}])}),r("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":{type:"",size:"22"},title:o.wo.ll({zhCN:"计价币种",enUS:"Currency"})},scopedSlots:o._u([{key:"footer",fn:function(){return[r("v-uni-picker",{staticClass:"sMenuItemValue",attrs:{value:o.coinIndex,range:o.coinSet,"range-key":"symbol"},on:{change:function(a){arguments[0]=a=o.$handleEvent(a),o.to_change_coin.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"wo-text-color-blue-dark",staticStyle:{display:"flex","align-items":"center"}},[r("v-uni-text",{staticStyle:{margin:"0 15px"}},[o._v(o._s(o.coinSet[o.coinIndex].symbol))]),r("uni-icons",{staticStyle:{color:"unset"},attrs:{type:"bottom"}})],1)],1)]},proxy:!0}])})],1)],1)],1)],1)},c=[]},"8cb0":function(o,a,r){var t=r("24fb");a=t(!1),a.push([o.i,"@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/********* 自定义主题 **********/\n/* 导入 uview 的主题 */\n/**\n * 区分设备的 Media Query 模板\n */\n/**\n * 基于 uview 和 uniapp 的通用主题\n */\n/**\n * 直观命名的色彩，取代语义命名。\n */\n/**  \n* 覆盖掉 uview 定义的语义命名色彩。\n*/\n/**  \n* 覆盖掉 uni.scss 定义的内置组件的语义命名色彩。\n*/\n/**\n * 可进一步覆盖扩展组件 uni-ui 的语义命名色彩。\n * 参考 https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html\n * @import '@/uni_modules/uni-scss/variables.scss';\n */\n/**\n* 程序化定义色彩直接变量 $color-***，以及 color, background-color, border-color 的原子类\n*/.wo-bg-color-blue[data-v-06a86a91]{background-color:#00f}.wo-text-color-blue[data-v-06a86a91]{color:#00f}.wo-border-color-blue[data-v-06a86a91]{border-color:#00f}.wo-bg-color-blue-default[data-v-06a86a91]{background-color:#2979ff}.wo-text-color-blue-default[data-v-06a86a91]{color:#2979ff}.wo-border-color-blue-default[data-v-06a86a91]{border-color:#2979ff}.wo-bg-color-blue-dark[data-v-06a86a91]{background-color:#2b85e4}.wo-text-color-blue-dark[data-v-06a86a91]{color:#2b85e4}.wo-border-color-blue-dark[data-v-06a86a91]{border-color:#2b85e4}.wo-bg-color-blue-matt[data-v-06a86a91]{background-color:#a0cfff}.wo-text-color-blue-matt[data-v-06a86a91]{color:#a0cfff}.wo-border-color-blue-matt[data-v-06a86a91]{border-color:#a0cfff}.wo-bg-color-blue-light[data-v-06a86a91]{background-color:#ecf5ff}.wo-text-color-blue-light[data-v-06a86a91]{color:#ecf5ff}.wo-border-color-blue-light[data-v-06a86a91]{border-color:#ecf5ff}.wo-bg-color-green[data-v-06a86a91]{background-color:green}.wo-text-color-green[data-v-06a86a91]{color:green}.wo-border-color-green[data-v-06a86a91]{border-color:green}.wo-bg-color-green-default[data-v-06a86a91]{background-color:#19be6b}.wo-text-color-green-default[data-v-06a86a91]{color:#19be6b}.wo-border-color-green-default[data-v-06a86a91]{border-color:#19be6b}.wo-bg-color-green-dark[data-v-06a86a91]{background-color:#18b566}.wo-text-color-green-dark[data-v-06a86a91]{color:#18b566}.wo-border-color-green-dark[data-v-06a86a91]{border-color:#18b566}.wo-bg-color-green-matt[data-v-06a86a91]{background-color:#71d5a1}.wo-text-color-green-matt[data-v-06a86a91]{color:#71d5a1}.wo-border-color-green-matt[data-v-06a86a91]{border-color:#71d5a1}.wo-bg-color-green-light[data-v-06a86a91]{background-color:#dbf1e1}.wo-text-color-green-light[data-v-06a86a91]{color:#dbf1e1}.wo-border-color-green-light[data-v-06a86a91]{border-color:#dbf1e1}.wo-bg-color-yellow[data-v-06a86a91]{background-color:#ff0}.wo-text-color-yellow[data-v-06a86a91]{color:#ff0}.wo-border-color-yellow[data-v-06a86a91]{border-color:#ff0}.wo-bg-color-yellow-default[data-v-06a86a91]{background-color:#f29100}.wo-text-color-yellow-default[data-v-06a86a91]{color:#f29100}.wo-border-color-yellow-default[data-v-06a86a91]{border-color:#f29100}.wo-bg-color-yellow-dark[data-v-06a86a91]{background-color:#f29100}.wo-text-color-yellow-dark[data-v-06a86a91]{color:#f29100}.wo-border-color-yellow-dark[data-v-06a86a91]{border-color:#f29100}.wo-bg-color-yellow-matt[data-v-06a86a91]{background-color:#fcbd71}.wo-text-color-yellow-matt[data-v-06a86a91]{color:#fcbd71}.wo-border-color-yellow-matt[data-v-06a86a91]{border-color:#fcbd71}.wo-bg-color-yellow-light[data-v-06a86a91]{background-color:#fdf6ec}.wo-text-color-yellow-light[data-v-06a86a91]{color:#fdf6ec}.wo-border-color-yellow-light[data-v-06a86a91]{border-color:#fdf6ec}.wo-bg-color-red[data-v-06a86a91]{background-color:red}.wo-text-color-red[data-v-06a86a91]{color:red}.wo-border-color-red[data-v-06a86a91]{border-color:red}.wo-bg-color-red-default[data-v-06a86a91]{background-color:#fa3534}.wo-text-color-red-default[data-v-06a86a91]{color:#fa3534}.wo-border-color-red-default[data-v-06a86a91]{border-color:#fa3534}.wo-bg-color-red-dark[data-v-06a86a91]{background-color:#dd6161}.wo-text-color-red-dark[data-v-06a86a91]{color:#dd6161}.wo-border-color-red-dark[data-v-06a86a91]{border-color:#dd6161}.wo-bg-color-red-matt[data-v-06a86a91]{background-color:#fab6b6}.wo-text-color-red-matt[data-v-06a86a91]{color:#fab6b6}.wo-border-color-red-matt[data-v-06a86a91]{border-color:#fab6b6}.wo-bg-color-red-light[data-v-06a86a91]{background-color:#fef0f0}.wo-text-color-red-light[data-v-06a86a91]{color:#fef0f0}.wo-border-color-red-light[data-v-06a86a91]{border-color:#fef0f0}.wo-bg-color-black[data-v-06a86a91]{background-color:#000}.wo-text-color-black[data-v-06a86a91]{color:#000}.wo-border-color-black[data-v-06a86a91]{border-color:#000}.wo-bg-color-grey[data-v-06a86a91]{background-color:grey}.wo-text-color-grey[data-v-06a86a91]{color:grey}.wo-border-color-grey[data-v-06a86a91]{border-color:grey}.wo-bg-color-grey-dark[data-v-06a86a91]{background-color:#a9a9a9}.wo-text-color-grey-dark[data-v-06a86a91]{color:#a9a9a9}.wo-border-color-grey-dark[data-v-06a86a91]{border-color:#a9a9a9}.wo-bg-color-grey-light[data-v-06a86a91]{background-color:#d3d3d3}.wo-text-color-grey-light[data-v-06a86a91]{color:#d3d3d3}.wo-border-color-grey-light[data-v-06a86a91]{border-color:#d3d3d3}.wo-bg-color-grey-3[data-v-06a86a91]{background-color:#303133}.wo-text-color-grey-3[data-v-06a86a91]{color:#303133}.wo-border-color-grey-3[data-v-06a86a91]{border-color:#303133}.wo-bg-color-grey-6[data-v-06a86a91]{background-color:#606266}.wo-text-color-grey-6[data-v-06a86a91]{color:#606266}.wo-border-color-grey-6[data-v-06a86a91]{border-color:#606266}.wo-bg-color-grey-8[data-v-06a86a91]{background-color:#82848a}.wo-text-color-grey-8[data-v-06a86a91]{color:#82848a}.wo-border-color-grey-8[data-v-06a86a91]{border-color:#82848a}.wo-bg-color-grey-9[data-v-06a86a91]{background-color:#909399}.wo-text-color-grey-9[data-v-06a86a91]{color:#909399}.wo-border-color-grey-9[data-v-06a86a91]{border-color:#909399}.wo-bg-color-grey-c[data-v-06a86a91]{background-color:#c8c9cc}.wo-text-color-grey-c[data-v-06a86a91]{color:#c8c9cc}.wo-border-color-grey-c[data-v-06a86a91]{border-color:#c8c9cc}.wo-bg-color-grey-d[data-v-06a86a91]{background-color:#dcdfe6}.wo-text-color-grey-d[data-v-06a86a91]{color:#dcdfe6}.wo-border-color-grey-d[data-v-06a86a91]{border-color:#dcdfe6}.wo-bg-color-grey-e[data-v-06a86a91]{background-color:#e4e7ed}.wo-text-color-grey-e[data-v-06a86a91]{color:#e4e7ed}.wo-border-color-grey-e[data-v-06a86a91]{border-color:#e4e7ed}.wo-bg-color-grey-f[data-v-06a86a91]{background-color:#f3f4f6}.wo-text-color-grey-f[data-v-06a86a91]{color:#f3f4f6}.wo-border-color-grey-f[data-v-06a86a91]{border-color:#f3f4f6}.wo-bg-color-white[data-v-06a86a91]{background-color:#fff}.wo-text-color-white[data-v-06a86a91]{color:#fff}.wo-border-color-white[data-v-06a86a91]{border-color:#fff}.wo-bg-color-transparent[data-v-06a86a91]{background-color:initial}.wo-text-color-transparent[data-v-06a86a91]{color:transparent}.wo-border-color-transparent[data-v-06a86a91]{border-color:transparent}.wo-bg-color-mask-black-15[data-v-06a86a91]{background-color:rgba(0,0,0,.15)}.wo-text-color-mask-black-15[data-v-06a86a91]{color:rgba(0,0,0,.15)}.wo-border-color-mask-black-15[data-v-06a86a91]{border-color:rgba(0,0,0,.15)}.wo-bg-color-mask-black-30[data-v-06a86a91]{background-color:rgba(0,0,0,.3)}.wo-text-color-mask-black-30[data-v-06a86a91]{color:rgba(0,0,0,.3)}.wo-border-color-mask-black-30[data-v-06a86a91]{border-color:rgba(0,0,0,.3)}.wo-bg-color-mask-black-50[data-v-06a86a91]{background-color:rgba(0,0,0,.5)}.wo-text-color-mask-black-50[data-v-06a86a91]{color:rgba(0,0,0,.5)}.wo-border-color-mask-black-50[data-v-06a86a91]{border-color:rgba(0,0,0,.5)}.wo-bg-color-main[data-v-06a86a91]{background-color:#2979ff}.wo-text-color-main[data-v-06a86a91]{color:#2979ff}.wo-border-color-main[data-v-06a86a91]{border-color:#2979ff}.wo-bg-color-minor[data-v-06a86a91]{background-color:#f90}.wo-text-color-minor[data-v-06a86a91]{color:#f90}.wo-border-color-minor[data-v-06a86a91]{border-color:#f90}.wo-bg-color-action[data-v-06a86a91]{background-color:#a0cfff}.wo-text-color-action[data-v-06a86a91]{color:#a0cfff}.wo-border-color-action[data-v-06a86a91]{border-color:#a0cfff}.wo-bg-color-bg[data-v-06a86a91]{background-color:#f3f4f6}.wo-text-color-bg[data-v-06a86a91]{color:#f3f4f6}.wo-border-color-bg[data-v-06a86a91]{border-color:#f3f4f6}.wo-bg-color-border[data-v-06a86a91]{background-color:#e4e7ed}.wo-text-color-border[data-v-06a86a91]{color:#e4e7ed}.wo-border-color-border[data-v-06a86a91]{border-color:#e4e7ed}.wo-bg-color-fg[data-v-06a86a91]{background-color:#fff}.wo-text-color-fg[data-v-06a86a91]{color:#fff}.wo-border-color-fg[data-v-06a86a91]{border-color:#fff}.window-layout[data-v-06a86a91]{min-height:100%;display:flex;flex-flow:column nowrap;box-sizing:border-box}",""]),o.exports=a},"900c":function(o,a,r){"use strict";r.r(a);var t=r("de59"),e=r.n(t);for(var c in t)"default"!==c&&function(o){r.d(a,o,(function(){return t[o]}))}(c);a["default"]=e.a},"9eb4":function(o,a,r){"use strict";r.r(a);var t=r("d66c"),e=r("6db8");for(var c in e)"default"!==c&&function(o){r.d(a,o,(function(){return e[o]}))}(c);var l,d=r("f0c5"),n=Object(d["a"])(e["default"],t["b"],t["c"],!1,null,"f34bd176",null,!1,t["a"],l);a["default"]=n.exports},"9f21":function(o,a,r){"use strict";r("caad"),r("d81d"),r("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={props:{linkList:{type:Array,default:[]}},data:function(){return{}},computed:{},mounted:function(){},methods:{jump_to:function(o){var a=o.target,r=o.type;r=r||wo.pagesJson.tabBar.list.map((function(o){return o.pagePath.substr(6)})).includes(a)?"switchTab":"navigateTo",uni[r]({url:a})}}};a.default=t},d303:function(o,a,r){"use strict";r.r(a);var t=r("8473"),e=r("900c");for(var c in e)"default"!==c&&function(o){r.d(a,o,(function(){return e[o]}))}(c);var l,d=r("f0c5"),n=Object(d["a"])(e["default"],t["b"],t["c"],!1,null,"9866993e",null,!1,t["a"],l);a["default"]=n.exports},d66c:function(o,a,r){"use strict";var t;r.d(a,"b",(function(){return e})),r.d(a,"c",(function(){return c})),r.d(a,"a",(function(){return t}));var e=function(){var o=this,a=o.$createElement,r=o._self._c||a;return o.wo.envar.onPC?r("v-uni-view",{staticStyle:{display:"flex","flex-flow":"row wrap",margin:"40px 0 0 0"},attrs:{id:"面包屑导航"}},[o._l(o.linkList,(function(a,t){return r("v-uni-view",{key:t},[r("v-uni-text",{staticStyle:{margin:"0 10px"}},[o._v("/")]),r("v-uni-text",{staticClass:"wo-text-color-blue-matt",staticStyle:{"font-style":"italic",cursor:"pointer"},on:{click:function(r){arguments[0]=r=o.$handleEvent(r),o.jump_to(a)}}},[o._v(o._s(o.wo.ll(a.name)))])],1)})),r("v-uni-view",[r("v-uni-text",{staticStyle:{margin:"0 10px"}},[o._v("/")]),r("v-uni-text",{staticStyle:{"font-style":"italic"}},[o._v(o._s(o.wo.ll(o.wo.thisPage().i18nPageTitle)))])],1)],2):o._e()},c=[]},de59:function(o,a,r){"use strict";r("dca8"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{i18nPageTitle:Object.freeze({zhCN:"我的偏好",enUS:"My Settings"}),coinSet:[{symbol:wo.envar.KEYNAME,name:{zhCN:"存证币",enUS:"PEXToken"}},{symbol:"BTC",name:{zhCN:"比特币",enUS:"BTC"}},{symbol:"ETH",name:{zhCN:"以太币",enUS:"ETH"}}],coinIndex:0}},computed:{},onShow:function(){wo.tt.relaunch_unknown_user()},methods:{to_change_coin:function(o){this.coinIndex=o.target.value}}};a.default=t}}]);