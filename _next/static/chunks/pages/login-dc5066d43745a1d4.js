(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(9694)}])},3834:function(n,e,t){"use strict";t.d(e,{Z:function(){return x}});var i=t(5893),r=t(3321),o=t(8204),s=t(5819),a=t(87),l=t(1664),u=t.n(l),c=t(4369),d=t.n(c),_=t(7294);function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var i,r,o=[],s=!0,a=!1;try{for(t=t.call(n);!(s=(i=t.next()).done)&&(o.push(i.value),!e||o.length!==e);s=!0);}catch(l){a=!0,r=l}finally{try{s||null==t.return||t.return()}finally{if(a)throw r}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return f(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(){var n=p(_.useState(null),2),e=n[0],t=n[1],l=Boolean(e),c=function(n){t(null),f(n)},f=function(n){};return(0,i.jsxs)("div",{className:d().smallContainer,children:[(0,i.jsx)(r.Z,{id:"basic-button","aria-controls":l?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":l?"true":void 0,onClick:function(n){t(n.currentTarget)},children:(0,i.jsx)(a.Z,{})}),(0,i.jsxs)(o.Z,{id:"basic-menu",anchorEl:e,open:l,onClose:c,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,i.jsx)(s.Z,{onClick:function(){return c("ar")},children:"\u0639\u0631\u0628\u064a"}),(0,i.jsx)(s.Z,{value:"en",onClick:function(){return c("en")},children:"English"})]}),(0,i.jsx)(u(),{href:"/login",children:(0,i.jsx)("a",{className:d().login,children:"Log in"})}),(0,i.jsx)(u(),{href:"/signup",children:(0,i.jsx)("a",{className:d().signup,children:"Sign up"})})]})}var h=t(2460),m=t.n(h);function x(){return(0,i.jsx)("div",{className:m().GuestHeader,children:(0,i.jsx)(g,{})})}},4530:function(n,e,t){"use strict";var i=t(5893),r=t(3852),o=t.n(r);e.Z=function(n){return(0,i.jsx)("button",{style:{margin:n.margin,width:n.width},className:n.isDisabled?o().disabledButton:o().submitButton,disabled:n.isDisabled,onClick:n.onClick,children:n.text})}},4359:function(n,e,t){"use strict";var i=t(5893),r=t(4320),o=t.n(r);e.Z=function(n){return(0,i.jsxs)("div",{className:o().container,children:[!n.dontShowFieldName&&(0,i.jsx)("p",{className:o().headtext,children:n.fieldName}),(0,i.jsx)("input",{className:o().textfield,type:n.type,placeholder:n.placeholder,spellCheck:"false"})]})}},4157:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var i=t(5893),r=t(990),o=t.n(r);function s(n){var e;return(0,i.jsx)("section",{className:o().section,style:{padding:n.padding,margin:null!==(e=n.margin)&&void 0!==e?e:"100px 0px"},children:n.children})}},9694:function(n,e,t){"use strict";t.r(e);var i=t(5893),r=t(2073),o=t.n(r),s=t(4359),a=t(4530),l=t(3834),u=t(4157),c=t(1664),d=t.n(c);e.default=function(n){return(0,i.jsxs)("div",{className:o().container,children:[(0,i.jsx)(l.Z,{}),(0,i.jsxs)(u.Z,{padding:"10vh 10vw",children:[(0,i.jsx)("h1",{className:o().headline,children:"Log in"}),(0,i.jsxs)("div",{className:o().loginForm,children:[(0,i.jsx)(s.Z,{type:"email",fieldName:"Email",placeholder:"JohnDoe@example.com"}),(0,i.jsx)(s.Z,{type:"password",fieldName:"Password",placeholder:"Password"}),(0,i.jsx)(d(),{href:"/signup",children:(0,i.jsx)("p",{className:o().createAccount,children:"create an account?"})}),(0,i.jsx)(a.Z,{text:"Log in"})]})]})]})}},2460:function(n){n.exports={GuestHeader:"headers___footers_GuestHeader__Yd_J6"}},3852:function(n){n.exports={submitButton:"custom_button_submitButton__wzRVg",disabledButton:"custom_button_disabledButton___w6sG"}},4320:function(n){n.exports={headtext:"custom_text_field_headtext__B7fPI",textfield:"custom_text_field_textfield__03RiC",container:"custom_text_field_container__HdQXZ"}},4369:function(n){n.exports={smallContainer:"login_signup_buttons_smallContainer___f7lY",login:"login_signup_buttons_login__XdRX4",signup:"login_signup_buttons_signup__Sk8mR",languageDropDown:"login_signup_buttons_languageDropDown__PJP2Q",dropDown:"login_signup_buttons_dropDown__fCU17",menu:"login_signup_buttons_menu__a0Ee6",languageButtons:"login_signup_buttons_languageButtons__37iJx"}},990:function(n){n.exports={section:"middle_container_section__nfTyj"}},2073:function(n){n.exports={headline:"login_headline__dc49O",container:"login_container__QqdgX",createAccount:"login_createAccount__xEhSf",loginForm:"login_loginForm__YERAa"}}},function(n){n.O(0,[357,579,528,774,888,179],(function(){return e=3236,n(n.s=e);var e}));var e=n.O();_N_E=e}]);