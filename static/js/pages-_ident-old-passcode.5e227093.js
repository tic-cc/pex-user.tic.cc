(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-_ident-old-passcode"],{23815:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"flex-box"},[a("v-uni-input",{staticStyle:{position:"absolute",top:"0",left:"-100%",width:"200%",height:"100%","text-align":"left","z-index":"9",opacity:"1"},attrs:{value:e.inputValue,type:"number",focus:e.focus,maxlength:e.maxlength,disabled:e.disabled},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.getVal.apply(void 0,arguments)}}}),e._l(e.ranges,(function(t,n){return[a("v-uni-view",{key:n+"_0",staticClass:"item",class:{active:e.codeIndex===t,middle:"middle"===e.mode,bottom:"bottom"===e.mode,box:"box"===e.mode},staticStyle:{"text-align":"center"},style:{backgroundColor:e.disabled?"lightgrey":"white"}},["middle"!==e.mode?a("v-uni-view",{staticClass:"line"}):e._e(),"middle"===e.mode&&e.codeIndex<=t?a("v-uni-view",{staticClass:"bottom-line"}):e._e(),e.isPwd&&e.codeArr.length>=t?[a("v-uni-text",{staticStyle:{"font-size":"80upx","line-height":"40upx"}},[e._v("*")])]:[e._v(e._s(e.codeArr[n]?e.codeArr[n]:""))]],2)]}))],2)},o=[]},"5d3a":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"@-webkit-keyframes twinkling-data-v-64051f78{0%{opacity:.2}50%{opacity:.5}100%{opacity:.2}}@keyframes twinkling-data-v-64051f78{0%{opacity:.2}50%{opacity:.5}100%{opacity:.2}}.flex-box[data-v-64051f78]{display:flex;justify-content:center;flex-wrap:wrap;position:relative}.flex-box .item[data-v-64051f78]{position:relative;width:%?80?%;height:%?80?%;margin-right:%?18?%;font-size:%?70?%;font-weight:700;color:#333;line-height:%?80?%;background-color:#fff}.flex-box .item[data-v-64051f78]:last-child{margin-right:0}.flex-box .middle[data-v-64051f78]{border:none}.flex-box .box[data-v-64051f78]{box-sizing:border-box;border:%?2?% solid #ccc;border-radius:%?6?%}.flex-box .bottom[data-v-64051f78]{box-sizing:border-box;border-bottom:%?8?% solid #212121}.flex-box .active[data-v-64051f78]{border-color:#00c777}.flex-box .active .line[data-v-64051f78]{display:block}.flex-box .line[data-v-64051f78]{display:none;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?2?%;height:%?40?%;background:#333;-webkit-animation:twinkling-data-v-64051f78 1s infinite ease;animation:twinkling-data-v-64051f78 1s infinite ease}.flex-box .bottom-line[data-v-64051f78]{height:4px;background:#000;width:80%;position:absolute;border-radius:2px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""]),e.exports=t},"61fc":function(e,t,a){"use strict";a.r(t);var n=a("ee07"),s=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=s.a},"69a1":function(e,t,a){"use strict";a.r(t);var n=a("86dc"),s=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=s.a},"6b53":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={partWindowLayout:a("6ab6").default,uniForms:a("b553").default,uniFormsItem:a("80e4").default,uniIcons:a("a4a1").default,mypOne:a("a901").default},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("part-window-layout",[a("v-uni-view",{staticClass:"window-page-750 window-page-ident"},[e.wo.envar.onPC?e._e():a("v-uni-view",{staticClass:"logo-ident"}),a("v-uni-text",{class:{"wo-text-color-red-default":!e.wo.ss.Ident.phone},staticStyle:{margin:"40px 0 40rpx 0","text-align":"center","font-size":"20px","padding-bottom":"22px"}},[e._v(e._s(e.wo.ss.Ident.phone||e.wo.ll({zhCN:"手机号不存在！",enUS:"Phone number is empty"})))]),a("uni-forms",{ref:"form"},[a("uni-forms-item",{staticStyle:{padding:"40rpx 0"}},[a("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-around"},attrs:{comment:"添加这个wrapper, 为了让下方的 formitem-error-message 能够宽度满屏, 否则只能和按钮一样宽."}},[e.wo.envar.uView?a("u-button",{attrs:{size:"default",type:e.wo.c2t.BLUE,loading:e.isSending,909:!0,shape:"circle",disabled:!e.wo.ss.Ident.phone||e.isSending||e.remainingSeconds>0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.to_send_passcode.apply(void 0,arguments)}}},[e._v(e._s(e.remainingSeconds?e.remainingSeconds+" ":e.wo.ll({zhCN:"获取验证码",enUS:"Send passcode"})))]):a("v-uni-button",{staticClass:"wo-bg-color-blue-default wo-text-color-white border-radius-20px",staticStyle:{border:"0",padding:"0 30px","border-radius":"30px"},attrs:{loading:e.isSending,disabled:!e.wo.ss.Ident.phone||e.isSending||e.remainingSeconds>0,plain:!e.wo.ss.Ident.phone||e.isSending||e.remainingSeconds>0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.to_send_passcode.apply(void 0,arguments)}}},[e.remainingSeconds?e._e():a("uni-icons",{staticStyle:{color:"unset"},attrs:{type:"paperplane"}}),e._v(e._s(e.remainingSeconds?e.remainingSeconds+" ":e.wo.ll({zhCN:"获取验证码",enUS:"Send passcode"})))],1)],1),a("v-uni-view",{staticClass:"formitem-feedback bad-message at-center",class:{"good-message":e.goodMessageSendingPasscode}},[e._v(e._s(e.badMessageSendingPasscode||e.goodMessageSendingPasscode))])],1),a("uni-forms-item",{staticStyle:{padding:"40rpx 0"}},[e.wo.envar.uView?a("u-message-input",{attrs:{focus:e.focusOne,mode:"box",maxlength:6,width:"80","font-size":"60"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.passcodeNow=t}.apply(void 0,arguments)},finish:function(t){arguments[0]=t=e.$handleEvent(t),e.to_verify_passcode.apply(void 0,arguments)}},model:{value:e.passcodeNow,callback:function(t){e.passcodeNow=t},expression:"passcodeNow"}}):a("myp-one",{attrs:{mode:"box",maxlength:6,focus:e.focusOne,disabled:!e.wo.ss.Ident.phone||!e.passcodeHash},on:{finish:function(t){arguments[0]=t=e.$handleEvent(t),e.to_verify_passcode.apply(void 0,arguments)}},model:{value:e.passcodeNow,callback:function(t){e.passcodeNow=t},expression:"passcodeNow"}}),a("v-uni-view",{staticClass:"formitem-feedback bad-message at-center"},[e._v(e._s(e.feedbackRemote))])],1)],1)],1)],1)},o=[]},"86dc":function(e,t,a){"use strict";var n=a("4ea4");a("dca8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var s=n(a("1da1")),o={data:function(){return{i18nPageTitle:Object.freeze({zhCN:"验证手机号",enUS:"Verify Phone Number"}),isLoading:!1,isSending:!1,remainingSeconds:0,passcodeNow:"",passcodeHash:"",passcodeExpireAt:0,focusOne:!0,badMessageSendingPasscode:"",goodMessageSendingPasscode:"",feedbackRemote:""}},computed:{},onLoad:function(){wo.tt.relaunch_identified_user()},onShow:function(){},methods:{to_send_passcode:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.passcodeNow="",e.badMessageSendingPasscode="",e.goodMessageSendingPasscode="",e.feedbackRemote="",e.focusOne=!1,wo.ss.Ident.usid){t.next=8;break}return e.badMessageSendingPasscode=wo.ll({zhCN:"未知用户不能发送验证码！",enUS:"Unknown users cannot send passcode!"}),t.abrupt("return");case 8:return e.isSending=!0,t.next=11,wo.callBase({baseType:wo.envar.baseTypeSms,apiWho:"User",apiTodo:"sendPasscode",apiWhat:{phone:wo.ss.Ident.phone,prodev:"production"}});case 11:if(t.t0=t.sent,t.t0){t.next=14;break}t.t0={};case 14:a=t.t0,e.isSending=!1,e.remainingSeconds=wo.envar.waitingSeconds,n=setInterval((function(){e.remainingSeconds>0?e.remainingSeconds--:clearInterval(n)}),1e3),"PASSCODE_SENT"===a._state?(uni.setStorageSync("_passtoken",a._passtoken),e.passcodeHash=a.passcodeHash,e.passcodeExpireAt=a.passcodeExpireAt,e.goodMessageSendingPasscode=wo.ll({zhCN:"验证码已成功发送，请在 ".concat(wo.tt.formatDate(e.passcodeExpireAt,"HH点MM分SS秒")," 前使用。"),enUS:"Passcode is sent and will expire at ".concat(wo.tt.formatDate(e.passcodeExpireAt,"HH:MM:SS"),".")})):"PASSCODE_UNSENT"===a._state?(wo.ccerror("验证码发送失败：",a),e.badMessageSendingPasscode=wo.ll({zhCN:"验证码发送失败，请稍候再试。",enUS:"Passcode failed to send. Please try again later."})):(wo.ccerror("验证码服务故障：",a),e.badMessageSendingPasscode=wo.ll({zhCN:"验证码服务故障，请稍候再试。",enUS:"System failed to send passcode. Please try again later."})),setTimeout((function(){return e.focusOne=!0}),200);case 20:case"end":return t.stop()}}),t)})))()},validate_input:function(){return this.passcodeHash?/^\d{6}$/.test(this.passcodeNow)?Date.now()>this.passcodeExpireAt?(this.feedbackRemote=wo.ll({zhCN:"验证码已过期，请重新输入。",enUS:"Passcode is expired. Please enter again."}),this.passcodeNow="",this.passcodeHash="",this.passcodeExpireAt=0,!1):wo.hash_easy(this.passcodeNow+wo.ss.Ident.phone+wo.ss.Ident.usid)!==this.passcodeHash?(this.feedbackRemote=wo.ll({zhCN:"验证码不匹配，请重新输入。",enUS:"Passcode is mismatched. Please enter again."}),!1):(this.feedbackRemote="",!0):(this.feedbackRemote=wo.ll({zhCN:"验证码格式错误，请重新输入。",enUS:"Passcode is malformed. Please enter again."}),!1):(this.feedbackRemote=wo.ll({zhCN:"请先获取验证码！"}),!1)},to_verify_passcode:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.validate_input()){t.next=7;break}return e.isLoading=!0,t.next=4,wo.callBase({apiWho:"User",apiTodo:"verifyPasscode",apiWhat:{passcode:e.passcodeNow}});case 4:a=t.sent,e.isLoading=!1,"VERIFY_SUCCESS"===a._state?(uni.setStorageSync("_passtoken",a._passtoken),wo.ss.Ident.verifyExpireAt=a.verifyExpireAt,uni.navigateTo({url:"_ident-old-reset"})):"PASSCODE_EXPIRED"===a._state?(e.feedbackRemote=wo.ll({zhCN:"验证码已过期，请重新获取。",enUS:"Passcode is expired. Please fetch a new passcode."}),e.passcodeNow="",e.passcodeHash="",e.passcodeExpireAt=0):(e.feedbackRemote=wo.ll({zhCN:"验证码不匹配，请重新获取。",enUS:"Passcode is mismatched. Please fetch a new passcode."}),e.passcodeNow="",e.passcodeHash="",e.passcodeExpireAt=0);case 7:case"end":return t.stop()}}),t)})))()}}};t.default=o},"9c09":function(e,t,a){var n=a("5d3a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("4f06").default;s("775622d1",n,!0,{sourceMap:!1,shadowMode:!1})},a3b24:function(e,t,a){"use strict";a.r(t);var n=a("6b53"),s=a("69a1");for(var o in s)"default"!==o&&function(e){a.d(t,e,(function(){return s[e]}))}(o);var i,d=a("f0c5"),r=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,"384ee0e4",null,!1,n["a"],i);t["default"]=r.exports},a901:function(e,t,a){"use strict";a.r(t);var n=a("23815"),s=a("61fc");for(var o in s)"default"!==o&&function(e){a.d(t,e,(function(){return s[e]}))}(o);a("d19b");var i,d=a("f0c5"),r=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,"64051f78",null,!1,n["a"],i);t["default"]=r.exports},d19b:function(e,t,a){"use strict";var n=a("9c09"),s=a.n(n);s.a},ee07:function(e,t,a){"use strict";a("a9e3"),a("ac1f"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"mypOneInput",props:{value:{type:String,default:""},maxlength:{type:Number,default:4},disabled:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},isPwd:{type:Boolean,default:!1},mode:{type:String,default:"bottom"}},watch:{maxlength:{immediate:!0,handler:function(e){this.ranges=6===e?[1,2,3,4,5,6]:[1,2,3,4]}},value:{immediate:!0,handler:function(e){e!==this.inputValue&&(this.inputValue=e,this.toMakeAndCheck(e))}}},data:function(){return{inputValue:"",codeIndex:1,codeArr:[],ranges:[1,2,3,4]}},methods:{getVal:function(e){var t=e.detail.value;this.inputValue=t,this.$emit("input",t),this.toMakeAndCheck(t)},toMakeAndCheck:function(e){var t=e.split("");this.codeIndex=t.length+1,this.codeArr=t,this.codeIndex>Number(this.maxlength)&&this.$emit("finish",this.codeArr.join(""))},set:function(e){this.inputValue=e,this.toMakeAndCheck(e)},clear:function(){this.inputValue="",this.codeArr=[],this.codeIndex=1}}};t.default=n}}]);