(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-_ident-new-register"],{"0013":function(e,t,a){"use strict";a.r(t);var n=a("079a"),s=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=s.a},"079a":function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a("c7eb")),o=n(a("1da1"));a("dca8"),a("99af");var r={data:function(){return{i18nPageTitle:Object.freeze({zhCN:"注册",enUS:"Register"}),isLoading:!1,password:"",passwordAgain:"",badMessageFeedback:"",goodMessageFeedback:"请在 ".concat(wo.tt.formatDate(wo.ss.Ident.verifyExpireAt,"HH:MM:SS")," 之前完成注册"),focusList:{0:!0,1:!1}}},computed:{},onLoad:function(){wo.tt.relaunch_identified_user()},onShow:function(){},methods:{to_register:function(){var e=this;return(0,o.default)((0,s.default)().mark((function t(){return(0,s.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(wo.ss.Ident.verifyExpireAt<Date.now())){t.next=6;break}return e.goodMessageFeedback="",e.badMessageFeedback=wo.ll({zhCN:"您已超时，请返回上一步重新验证",enUS:"Verification expired. Please go back to verify again."}),t.abrupt("return");case 6:e.badMessageFeedback="",e.goodMessageFeedback="请在 ".concat(wo.tt.formatDate(wo.ss.Ident.verifyExpireAt,"HH:MM:SS")," 之前完成注册");case 8:e.$refs.form.validate().then(function(){var t=(0,o.default)((0,s.default)().mark((function t(a){var n,o,r,i,d;return(0,s.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,wo.callBase({apiWho:"User",apiTodo:"register",apiWhat:{phone:wo.ss.Ident.phone,passwordClient:wo.hash_easy(e.password+wo.ss.Ident.usid),lang:wo.ss.i18n.mylang,citizen:wo.ss.i18n.userland}});case 3:if(t.t0=t.sent,t.t0){t.next=6;break}t.t0={};case 6:n=t.t0,o=n._state,r=n.onlineUser,i=n._passtoken,d=n.uni_id_token,e.isLoading=!1,"REGISTER_SUCCESS"===o?(uni.setStorageSync("_passtoken",i),uni.setStorageSync("uni_id_token",d),wo.ss.User.onlineUser=r,uni.showModal({title:wo.ll({zhCN:"欢迎来到"+wo.ll(wo.envar.callname),enUS:"Welcome to "+wo.ll(wo.envar.callname)}),content:wo.ll({zhCN:"您已获赠 ".concat(wo.envarRemote.registerReward," ").concat(wo.envar.KEYNAME," 注册奖励！"),enUS:"You've just got ".concat(wo.envarRemote.registerReward," ").concat(wo.envar.KEYNAME," startup reward!")}),showCancel:!1,confirmText:wo.ll({zhCN:"开始我的旅程",enUS:"Start my journey"}),success:function(e){e.confirm,e.cancel;uni.reLaunch({url:"explore"})}})):"VERIFY_EXPIRED"===o?(e.badMessageFeedback=wo.ll({zhCN:"您已超时，请返回上页重新验证",enUS:"Verification expired. Please go back to verify again."}),e.goodMessageFeedback="",wo.showToast({type:wo.c2t.RED,title:e.badMessageFeedback})):(e.badMessageFeedback=wo.ll({zhCN:"注册服务故障，请稍后再试。",enUS:"System failed to register. Please try again later."}),e.goodMessageFeedback="",wo.showToast({type:wo.c2t.RED,title:e.badMessageFeedback}));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){})),wo.next_focus(1);case 10:case"end":return t.stop()}}),t)})))()}}};t.default=r},1189:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={partWindowLayout:a("1f23").default,uniForms:a("0862").default,uniFormsItem:a("b200").default,uniEasyinput:a("0c37").default,uniIcons:a("e539").default},s=function(){var e=this,t=this,a=t.$createElement,n=t._self._c||a;return n("part-window-layout",[n("v-uni-view",{staticClass:"window-page-750 window-page-ident"},[t.wo.envar.onPC?t._e():n("v-uni-view",{staticClass:"logo-ident"}),n("v-uni-text",{class:{"wo-text-color-red-default":!t.wo.ss.Ident.phone},staticStyle:{margin:"40px 0 40rpx 0","text-align":"center","font-size":"20px","padding-bottom":"22px"}},[t._v(t._s(t.wo.ss.Ident.phone||t.wo.ll({zhCN:"手机号不存在！",enUS:"Phone number is empty!"})))]),n("uni-forms",{ref:"form",attrs:{"label-position":"left","validate-trigger":"submit",rules:{password:{rules:[{required:!0,errorMessage:"请输入密码"},{minLength:6,errorMessage:"密码长度至少为6"},{validateFunction:function(t,a,n,s){return e.password===e.passwordAgain},errorMessage:"两次密码不一致，请重新输入"}]},passwordAgain:{rules:[{required:!0,errorMessage:"请再次输入密码"},{minLength:6,errorMessage:"密码长度至少为6"},{validateFunction:function(t,a,n,s){return e.password===e.passwordAgain},errorMessage:"两次密码不一致，请重新输入"}]}}}},[n("uni-forms-item",{staticStyle:{padding:"40rpx 0"},attrs:{name:"password"}},[n("uni-easyinput",{staticClass:"letter-spacing-12px wo-bg-color-fg",attrs:{disabled:!t.wo.ss.Ident.phone,type:"password",placeholder:t.wo.ll({zhCN:"设置您的密码",enUS:"Enter your password"}),placeholderStyle:"letter-spacing: initial; font-size:20px;",onkeypress:"if(event.keyCode===32) event.returnValue=false",focus:t.focusList[0]},nativeOn:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;arguments[0]=e=t.$handleEvent(e),t.wo.next_focus(0)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("uni-forms-item",{staticStyle:{padding:"40rpx 0"},attrs:{name:"passwordAgain"}},[n("uni-easyinput",{staticClass:"letter-spacing-12px wo-bg-color-fg",attrs:{disabled:!t.wo.ss.Ident.phone,type:"password",placeholder:t.wo.ll({zhCN:"再次输入您的密码",enUS:"Enter your password again"}),placeholderStyle:"letter-spacing: initial; font-size:20px;",onkeypress:"if(event.keyCode===32) event.returnValue=false",focus:t.focusList[1]},nativeOn:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;arguments[0]=e=t.$handleEvent(e),t.to_register.apply(void 0,arguments)}},model:{value:t.passwordAgain,callback:function(e){t.passwordAgain=e},expression:"passwordAgain"}})],1),n("uni-forms-item",{staticStyle:{padding:"40rpx 0"}},[n("v-uni-button",{staticClass:"wo-bg-color-blue-default wo-text-color-grey-f",attrs:{loading:t.isLoading,disabled:!t.wo.ss.Ident.phone||t.isLoading||!t.password||!t.passwordAgain},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.to_register.apply(void 0,arguments)}}},[n("uni-icons",{attrs:{type:"auth",color:"unset",size:"22"}}),t._v(t._s(t.wo.ll({zhCN:"注 册",enUS:"Register"})))],1),n("v-uni-view",{staticClass:"formitem-feedback bad-message at-center",class:{"good-message":t.goodMessageFeedback}},[t._v(t._s(t.badMessageFeedback||t.goodMessageFeedback))])],1)],1)],1)],1)},o=[]},"5ff5":function(e,t,a){"use strict";a.r(t);var n=a("1189"),s=a("0013");for(var o in s)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(o);var r=a("f0c5"),i=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"2690322b",null,!1,n["a"],void 0);t["default"]=i.exports}}]);