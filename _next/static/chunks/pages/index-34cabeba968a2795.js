(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3619:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var s=r(t(4938)),a=t(5893),i=(0,s.default)((0,a.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");n.Z=i},8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5452)}])},6280:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(5893),s=t(3379),a=t.n(s),i=t(1664),o=t.n(i);var c=function(){return(0,r.jsxs)("nav",{className:a().container,children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("a",{className:a().navbarElements,children:"Home"})}),(0,r.jsx)(o(),{href:"/#About",children:(0,r.jsx)("a",{className:a().navbarElements,children:"About"})}),(0,r.jsx)(o(),{href:"/create-your-cv",children:(0,r.jsx)("a",{className:a().createCV,children:(0,r.jsx)("p",{className:a().cvText,children:"Create your CV"})})}),(0,r.jsx)(o(),{href:"/#Pricing",children:(0,r.jsx)("a",{className:a().navbarElements,children:"Pricing"})}),(0,r.jsx)(o(),{href:"/#FAQ",children:(0,r.jsx)("a",{className:a().navbarElements,children:"FAQ"})})]})},u=t(3321),l=t(8204),d=t(5819),m=t(87),h=t(4369),_=t.n(h),f=t(7294);function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,s,a=[],i=!0,o=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){o=!0,s=c}finally{try{i||null==t.return||t.return()}finally{if(o)throw s}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(){var e=p(f.useState(null),2),n=e[0],t=e[1],s=Boolean(n),a=function(e){t(null),i(e)},i=function(e){};return(0,r.jsxs)("div",{className:_().smallContainer,children:[(0,r.jsx)(u.Z,{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:function(e){t(e.currentTarget)},children:(0,r.jsx)(m.Z,{})}),(0,r.jsxs)(l.Z,{id:"basic-menu",anchorEl:n,open:s,onClose:a,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,r.jsx)(d.Z,{onClick:function(){return a("ar")},children:"\u0639\u0631\u0628\u064a"}),(0,r.jsx)(d.Z,{value:"en",onClick:function(){return a("en")},children:"English"})]}),(0,r.jsx)(o(),{href:"/login",children:(0,r.jsx)("a",{className:_().login,children:"Log in"})}),(0,r.jsx)(o(),{href:"/signup",children:(0,r.jsx)("a",{className:_().signup,children:"Sign up"})})]})}var g=t(2460),v=t.n(g),y=t(5114);function b(){return(0,r.jsxs)("div",{className:v().GuestHeader,children:[(0,r.jsx)("div",{style:{paddingLeft:"10px"},children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)(c,{}),(0,r.jsx)(j,{})]})}},5114:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(1664),a=t.n(s),i=t(5675),o=t.n(i);function c(){return(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)(o(),{src:"/assets/Leaderscv_full_logo.png",width:150,height:37.5,priority:!0,style:{cursor:"pointer",paddingLeft:"10px"}})})}},5452:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Q}});var r=t(5893),s=t(5061),a=t.n(s),i=t(7294),o=t(5312),c=t.n(o),u=t(1163);var l=function(e){var n=(0,u.useRouter)(),t=(0,i.useState)(""),s=t[0],a=t[1],o=function(e){"Enter"===e.key&&l()};(0,i.useEffect)((function(){return document.addEventListener("keydown",o),function(){document.removeEventListener("keydown",o)}}),[o]);var l=function(){n.push({pathname:"/search",query:{term:s}})};return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)("input",{placeholder:"Search for anything...",className:c().searchBar,value:s,onChange:function(e){return a(e.target.value)},type:"text",spellCheck:"false"}),(0,r.jsx)("button",{className:c().searchButton,onClick:function(){return l()},children:"Search"})]})},d=t(2211),m=t.n(d),h=t(3619);function _(e){var n=(0,u.useRouter)();return(0,r.jsxs)("div",{className:m().container,onClick:function(){n.push({pathname:"/search",query:{term:e.children}})},children:[(0,r.jsx)("p",{children:e.children}),(0,r.jsx)(h.Z,{className:m().icon,fontSize:"large"})]})}var f=t(9141),x=t.n(f);function p(){return(0,r.jsxs)("div",{className:x().mainContainer,children:[(0,r.jsx)("h3",{children:"Popular Search Terms"}),(0,r.jsxs)("div",{className:x().termsContainer,children:[(0,r.jsx)(_,{children:"Software Engineering"}),(0,r.jsx)(_,{children:"Artificial Intelligence"}),(0,r.jsx)(_,{children:"Finance"}),(0,r.jsx)(_,{children:"STC"}),(0,r.jsx)(_,{children:"Front End Development"}),(0,r.jsx)(_,{children:"Marketing"})]})]})}var j=t(9853),g=t.n(j),v=t(5479),y=t.n(v);function b(e){return(0,r.jsxs)("div",{className:y().statisticElement,"data-aos":e.animation,"data-aos-duration":"1250","data-aos-offset":"150",children:[(0,r.jsx)("p",{className:y().number,children:e.number}),(0,r.jsxs)("p",{className:y().name,children:[e.name," "]})]})}t(6130);function w(){return(0,r.jsxs)("section",{className:g().mainContainer,children:[(0,r.jsx)(b,{animation:"fade-right",number:5483,name:"Employees in KSA"}),(0,r.jsx)(b,{animation:"fade-up",number:150,name:"Job Applications Posted"}),(0,r.jsx)(b,{animation:"fade-left",number:25,name:"Companies Registered"})]})}var N=t(6079),C=t.n(N);function E(){return(0,r.jsx)("div",{id:"Pricing",className:C().container,children:(0,r.jsx)("h1",{className:C().header,children:"Pricing"})})}var A=t(2450),I=t.n(A),L=t(2280),S=t(8895),Z=t(3508),H=t(5861),q=t(2797);function k(e){return(0,r.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"750",className:I().accordion,children:(0,r.jsxs)(L.Z,{TransitionProps:{unmountOnExit:!0},children:[(0,r.jsx)(S.Z,{expandIcon:(0,r.jsx)(Z.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,r.jsxs)(H.Z,{className:I().question,children:["Q: ",e.question]})}),(0,r.jsx)(q.Z,{children:(0,r.jsxs)(H.Z,{className:I().answer,children:[" A: ",e.answer]})})]})})}function P(){return(0,r.jsxs)("div",{id:"FAQ",className:I().container,children:[(0,r.jsx)("h1",{className:I().header,children:"FAQ"}),(0,r.jsx)(k,{question:"How do we collect stats?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}),(0,r.jsx)(k,{question:"How do we collect stats?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}),(0,r.jsx)(k,{question:"How do we collect stats?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}),(0,r.jsx)(k,{question:"How do we collect stats?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}),(0,r.jsx)(k,{question:"How do we collect stats?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}),(0,r.jsx)(k,{question:"How do we collect stats?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}),(0,r.jsx)(k,{question:"How do we collect stats?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"})]})}var T=t(6601),F=t.n(T);function B(){return(0,r.jsx)("div",{id:"About",className:F().container,children:(0,r.jsx)("h1",{className:F().header,children:"About Us"})})}var D=t(6280),J=t(1664),X=t.n(J);function G(){return(0,r.jsxs)("nav",{children:[(0,r.jsx)(X(),{href:"/",children:"Home"}),(0,r.jsx)(X(),{href:"/#about",children:"About"}),(0,r.jsx)(X(),{href:"/home",children:"Home"}),(0,r.jsx)(X(),{href:"/home",children:"Home"}),(0,r.jsx)(X(),{href:"/home",children:"Home"}),(0,r.jsx)(X(),{href:"/home",children:"Home"})]})}var Q=function(e){return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)(D.Z,{}),(0,r.jsx)(l,{}),(0,r.jsx)(p,{}),(0,r.jsx)(w,{}),(0,r.jsx)(E,{}),(0,r.jsx)(P,{}),(0,r.jsx)(B,{}),(0,r.jsx)(G,{})]})}},2460:function(e){e.exports={GuestHeader:"headers___footers_GuestHeader__Yd_J6",GuestHeaderImage:"headers___footers_GuestHeaderImage__KrDf4",clickable:"headers___footers_clickable__KzMAd"}},6601:function(e){e.exports={container:"about_container__RyzPS",header:"about_header__scIXh"}},2450:function(e){e.exports={container:"faq_container__1J8vs",header:"faq_header__XPf6F",accordion:"faq_accordion__mAxX_",question:"faq_question__TxluK",answer:"faq_answer__JSFsA"}},5061:function(e){e.exports={container:"home_container__AVzy7",mainImage:"home_mainImage__jiUbf"}},6079:function(e){e.exports={container:"pricing_container__SRSTu",header:"pricing_header__cv0ST"}},5312:function(e){e.exports={searchBar:"search_bar_searchBar__6CYvc",searchButton:"search_bar_searchButton__Fyjss",container:"search_bar_container__ZMVL_"}},5479:function(e){e.exports={statisticElement:"statistic_element_statisticElement__Jm1W9",number:"statistic_element_number__76dSZ",name:"statistic_element_name__DMm9G"}},9853:function(e){e.exports={mainContainer:"statistics_mainContainer__ltZGH"}},2211:function(e){e.exports={container:"suggestion_container__Pt9rU",icon:"suggestion_icon__8J_wr",button:"suggestion_button__J7s7m"}},9141:function(e){e.exports={mainContainer:"suggestions_mainContainer__gjqVe",termsContainer:"suggestions_termsContainer__KwP95"}},3379:function(e){e.exports={navbarElements:"home_navbar_navbarElements__XdYme",createCV:"home_navbar_createCV__zhKwN",container:"home_navbar_container__E3lQ9",cvText:"home_navbar_cvText__E6ihg"}},4369:function(e){e.exports={smallContainer:"login_signup_buttons_smallContainer___f7lY",login:"login_signup_buttons_login__XdRX4",signup:"login_signup_buttons_signup__Sk8mR",languageDropDown:"login_signup_buttons_languageDropDown__PJP2Q",dropDown:"login_signup_buttons_dropDown__fCU17",menu:"login_signup_buttons_menu__a0Ee6",languageButtons:"login_signup_buttons_languageButtons__37iJx"}},6130:function(){}},function(e){e.O(0,[664,292,483,531,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);