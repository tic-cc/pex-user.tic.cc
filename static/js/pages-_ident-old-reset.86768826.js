(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-_ident-old-reset"],{"325f":function(e,t,n){"use strict";n.r(t);var s=n("8678"),a=n.n(s);for(var o in s)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(o);t["default"]=a.a},"47df":function(e,t,n){"use strict";n.r(t);var s=n("d472"),a=n("325f");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var r=n("f0c5"),i=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"581f8ab6",null,!1,s["a"],void 0);t["default"]=i.exports},8678:function(e,t,n){"use strict";n("7a82");var s=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("c7eb")),o=s(n("1da1"));n("dca8");var r={data:function(){return{i18nPageTitle:Object.freeze({zhCN:"重设密码",enUS:"Reset Password"}),isLoading:!1,isSending:!1,isSendingDisabled:!1,password:"",passwordAgain:"",badMessageFeedback:"",goodMessageFeedback:"请在 ".concat(wo.tt.formatDate(wo.ss.Ident.verifyExpireAt,"HH:MM:SS")," 之前重设密码"),focusList:{0:!0,1:!1}}},computed:{},onLoad:function(){wo.tt.relaunch_identified_user()},onShow:function(){},methods:{to_reset_password:function(){var e=this;return(0,o.default)((0,a.default)().mark((function t(){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(wo.ss.Ident.verifyExpireAt<Date.now())){t.next=6;break}return e.goodMessageFeedback="",e.badMessageFeedback=wo.ll({zhCN:"您已超时，请返回上页重新验证",enUS:"Verification expired. Please go back to verify again."}),t.abrupt("return");case 6:e.badMessageFeedback="",e.goodMessageFeedback="请在 ".concat(wo.tt.formatDate(wo.ss.Ident.verifyExpireAt,"HH:MM:SS")," 之前重设密码");case 8:e.$refs.form.validate().then(function(){var t=(0,o.default)((0,a.default)().mark((function t(n){var s,o;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,wo.callBase({apiWho:"User",apiTodo:"resetPassword",apiWhat:{phone:wo.ss.Ident.phone,passwordClient:wo.hash_easy(e.password+wo.ss.Ident.usid)}});case 3:if(t.t0=t.sent,t.t0){t.next=6;break}t.t0={};case 6:s=t.t0,o=s._state,e.isLoading=!1,"RESET_SUCCESS"===o?(uni.removeStorageSync("_passtoken"),uni.removeStorageSync("uni_id_token"),uni.showModal({title:wo.ll({zhCN:"您的密码已重置成功",enUS:"your password is reset successfully"}),content:wo.ll({zhCN:"请使用新密码登录！",enUS:"Login with you new password please!"}),showCancel:!1,confirmText:"重新登录",success:function(e){var t=e.confirm;e.cancel;t&&uni.reLaunch({url:"_ident_"})}})):e.badMessageFeedback="VERIFY_EXPIRED"===o?wo.ll({zhCN:"您已超时，请返回上页重新验证",enUS:"Verification expired. Please go back to verify again."}):"RESET_FAILED"===o?wo.ll({zhCN:"重置失败，请稍后再试",enUS:"重置失败，请稍后再试"}):wo.ll({zhCN:"无法识别的后台错误，请稍后再试",enUS:"无法识别的后台错误，请稍后再试"});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){})),wo.next_focus(1);case 10:case"end":return t.stop()}}),t)})))()}}};t.default=r},d472:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s}));var s={partWindowLayout:n("6ab6").default,uniForms:n("b553").default,uniFormsItem:n("80e4").default,uniEasyinput:n("11cc").default,uniIcons:n("a4a1").default},a=function(){var e=this,t=this,n=t.$createElement,s=t._self._c||n;return s("part-window-layout",[s("v-uni-view",{staticClass:"window-page-750 window-page-ident"},[t.wo.envar.onPC?t._e():s("v-uni-view",{staticClass:"logo-ident"}),s("v-uni-text",{class:{"wo-text-color-red-default":!t.wo.ss.Ident.phone},staticStyle:{margin:"40px 0 40rpx 0","text-align":"center","font-size":"20px","padding-bottom":"22px"}},[t._v(t._s(t.wo.ss.Ident.phone||t.wo.ll({zhCN:"手机号不存在！",enUS:"Phone number is empty!"})))]),s("uni-forms",{ref:"form",attrs:{"label-position":"left","validate-trigger":"submit",rules:{password:{rules:[{required:!0,errorMessage:"请输入密码"},{minLength:6,errorMessage:"密码长度至少为6"},{validateFunction:function(t,n,s,a){return e.password===e.passwordAgain},errorMessage:"两次密码不一致，请重新输入"}]},passwordAgain:{rules:[{required:!0,errorMessage:"请再次输入密码"},{minLength:6,errorMessage:"密码长度至少为6"},{validateFunction:function(t,n,s,a){return e.password===e.passwordAgain},errorMessage:"两次密码不一致，请重新输入"}]}}}},[s("uni-forms-item",{staticStyle:{padding:"40rpx 0"},attrs:{name:"password"}},[s("uni-easyinput",{staticClass:"letter-spacing-12px wo-bg-color-fg",attrs:{disabled:!t.wo.ss.Ident.phone,type:"password",placeholder:t.wo.ll({zhCN:"请重设您的密码",enUS:"Reset your password please"}),placeholderStyle:"letter-spacing: initial; font-size:20px;",onkeypress:"if(event.keyCode===32) {\n            event.returnValue=false\n            wo.showToast({type:wo.c2t.RED, title: wo.ll({zhCN:'密码不能含有空格',enUS:'Space is disallowed in password'})})\n          }",focus:t.focusList[0]},nativeOn:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;arguments[0]=e=t.$handleEvent(e),t.wo.next_focus(0)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("uni-forms-item",{staticStyle:{padding:"40rpx 0"},attrs:{name:"passwordAgain"}},[s("uni-easyinput",{staticClass:"letter-spacing-12px wo-bg-color-fg",attrs:{type:"password",placeholder:t.wo.ll({zhCN:"请再次输入您的密码",enUS:"Enter your password again"}),placeholderStyle:"letter-spacing: initial; font-size:20px;",onkeypress:"if(event.keyCode===32) {\n            event.returnValue=false\n            wo.showToast({type:wo.c2t.RED, title: wo.ll({zhCN:'密码不能含有空格',enUS:'Space is disallowed in password'})})\n          }",focus:t.focusList[1]},nativeOn:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;arguments[0]=e=t.$handleEvent(e),t.to_reset_password.apply(void 0,arguments)}},model:{value:t.passwordAgain,callback:function(e){t.passwordAgain=e},expression:"passwordAgain"}})],1),s("uni-forms-item",{staticStyle:{padding:"40rpx 0"}},[s("v-uni-button",{staticClass:"wo-bg-color-blue-default wo-text-color-grey-f",attrs:{loading:t.isLoading,disabled:!t.wo.ss.Ident.phone||t.isLoading||!t.password||!t.passwordAgain},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.to_reset_password.apply(void 0,arguments)}}},[s("uni-icons",{staticStyle:{color:"unset"},attrs:{type:"checkmarkempty",size:"22"}}),t._v(t._s(t.wo.ll({zhCN:"重置密码",enUS:"Reset"})))],1),s("v-uni-view",{staticClass:"formitem-feedback bad-message at-center",class:{"good-message":t.goodMessageFeedback}},[t._v(t._s(t.badMessageFeedback||t.goodMessageFeedback))])],1)],1)],1)],1)},o=[]}}]);