(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{96540:function(e,t,a){"use strict";var r=a(91941);t.Z=void 0;var s=r(a(64938)),n=a(85893),o=(0,s.default)((0,n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=o},41733:function(e,t,a){"use strict";var r=a(91941);t.Z=void 0;var s=r(a(64938)),n=a(85893),o=(0,s.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o},77957:function(e,t,a){"use strict";var r=a(91941);t.Z=void 0;var s=r(a(64938)),n=a(85893),o=(0,s.default)((0,n.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=o},87054:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var r=a(1048),s=a(32793),n=a(67294),o=a(86010),i=a(94780),l=a(41796),c=a(19828),d=a(36622),u=a(78884),p=a(67074),h=a(34867);function A(e){return(0,h.Z)("MuiToggleButton",e)}var f=(0,a(1588).Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),m=a(85893);const g=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],v=(0,p.ZP)(c.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`size${(0,d.Z)(a.size)}`]]}})((({theme:e,ownerState:t})=>{let a,r="standard"===t.color?e.palette.text.primary:e.palette[t.color].main;return e.vars&&(r="standard"===t.color?e.vars.palette.text.primary:e.vars.palette[t.color].main,a="standard"===t.color?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),(0,s.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${f.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.selected}`]:{color:r,backgroundColor:e.vars?`rgba(${a} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(r,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${a} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(r,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${a} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(r,e.palette.action.selectedOpacity)}}}},"small"===t.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===t.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}));var x=n.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiToggleButton"}),{children:n,className:l,color:c="standard",disabled:p=!1,disableFocusRipple:h=!1,fullWidth:f=!1,onChange:x,onClick:b,selected:y,size:_="medium",value:j}=a,Z=(0,r.Z)(a,g),w=(0,s.Z)({},a,{color:c,disabled:p,disableFocusRipple:h,fullWidth:f,size:_}),C=(e=>{const{classes:t,fullWidth:a,selected:r,disabled:s,size:n,color:o}=e,l={root:["root",r&&"selected",s&&"disabled",a&&"fullWidth",`size${(0,d.Z)(n)}`,o]};return(0,i.Z)(l,A,t)})(w);return(0,m.jsx)(v,(0,s.Z)({className:(0,o.default)(C.root,l),disabled:p,focusRipple:!h,ref:t,onClick:e=>{b&&(b(e,j),e.defaultPrevented)||x&&x(e,j)},onChange:x,value:j,ownerState:w,"aria-pressed":y},Z,{children:n}))}))},85390:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var r=a(1048),s=a(32793),n=a(67294),o=(a(76607),a(86010)),i=a(94780),l=a(67074),c=a(78884),d=a(36622);function u(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var p=a(34867);function h(e){return(0,p.Z)("MuiToggleButtonGroup",e)}var A=(0,a(1588).Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),f=a(85893);const m=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],g=(0,l.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{[`& .${A.grouped}`]:t.grouped},{[`& .${A.grouped}`]:t[`grouped${(0,d.Z)(a.orientation)}`]},t.root,"vertical"===a.orientation&&t.vertical,a.fullWidth&&t.fullWidth]}})((({ownerState:e,theme:t})=>(0,s.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${A.grouped}`]:(0,s.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${A.selected} + .${A.grouped}.${A.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${A.selected} + .${A.grouped}.${A.selected}`]:{borderTop:0,marginTop:0}})})));var v=n.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:l,className:p,color:A="standard",disabled:v=!1,exclusive:x=!1,fullWidth:b=!1,onChange:y,orientation:_="horizontal",size:j="medium",value:Z}=a,w=(0,r.Z)(a,m),C=(0,s.Z)({},a,{disabled:v,fullWidth:b,orientation:_,size:j}),B=(e=>{const{classes:t,orientation:a,fullWidth:r,disabled:s}=e,n={root:["root","vertical"===a&&"vertical",r&&"fullWidth"],grouped:["grouped",`grouped${(0,d.Z)(a)}`,s&&"disabled"]};return(0,i.Z)(n,h,t)})(C),S=(e,t)=>{if(!y)return;const a=Z&&Z.indexOf(t);let r;Z&&a>=0?(r=Z.slice(),r.splice(a,1)):r=Z?Z.concat(t):[t],y(e,r)},N=(e,t)=>{y&&y(e,Z===t?null:t)};return(0,f.jsx)(g,(0,s.Z)({role:"group",className:(0,o.default)(B.root,p),ref:t,ownerState:C},w,{children:n.Children.map(l,(e=>n.isValidElement(e)?n.cloneElement(e,{className:(0,o.default)(B.grouped,e.props.className),onChange:x?N:S,selected:void 0===e.props.selected?u(e.props.value,Z):e.props.selected,size:e.props.size||j,fullWidth:b,color:e.props.color||A,disabled:e.props.disabled||v}):null))}))}))},63023:function(e,t){"use strict";var a,r=Symbol.for("react.element"),s=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case i:case o:case p:case h:return e;default:switch(e=e&&e.$$typeof){case d:case c:case u:case f:case A:case l:return e;default:return t}}case s:return t}}}a=Symbol.for("react.module.reference")},76607:function(e,t,a){"use strict";a(63023)},74342:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company/company1/clients",function(){return a(16036)}])},11104:function(e,t){"use strict";t.Z={src:"/LeadersCV/_next/static/media/herfy.8dae6c19.png",height:296,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AbLD5ABnNBsNwYGPogr37kwBBgX99ikvriVhT2Ss/wD2Af8AAADgfY/ADvLjPwECAf8ABAQA//r7AfE0QK4hXU5TAa693jwh7N+ZHMCyJu0nMgMK5eIADt/P/vcXIwDOdIEtAc2qwmMbz8GcBeLbAPwdIgAB+vkABfTvAPUpMQDSRVE3AaLO8TE22MWjCOjjDP4FCBEBAAAC//b03/QlKLAtD/1+Ad7r98Xu/QPcAwAACQMBAC76///g6QQGoA/7/iIM/vvgAdfn9bUEAgIkBAMBJvf6/AAFAgD+/wAB6f7+/xkDAwEAAZfH6Sw9Hgqb9fj7zv/+/Ln9AAQ7FQwFYQD//bH09vi4FMp6KOTqR2UAAAAASUVORK5CYII="}},2897:function(e,t){"use strict";t.Z={src:"/LeadersCV/_next/static/media/kfc.15504404.png",height:1280,width:1270,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AVYAAACqAABQt7i5nzc1MwvTtLXy3F9fxQ9KSW73trfhAVoAACM2iYjMTUc8ECIqKf/h3uMBtSgwABMgHuf+HiE8AZ0AALzwdnRDQEs/+wwJCgXt8vP/1X+F+wPFywYBAAC9AakCBPrI/vwFK5WKACYjJgAPCwcA78nTAAQCBAD26en7AaYBAPv7/wAEwDcaAGaNpgAH//sA2La+ABUNDQDz29v8AaYuLsPr9fY8E3Fm+vwKDwYsMjUA69XR+iYzOQYPDg7EAfLp5Sulm5jEKjI0ENnMyQAjKTAADgUDAPsDBvA5TEw8AYRRVwDur6kqGAASmBUA7jgRVlgAJmFgx8VnZ2lk2NfWDuZp51EzMY0AAAAASUVORK5CYII="}},5031:function(e,t){"use strict";t.Z={src:"/LeadersCV/_next/static/media/kudu.d34ce1c3.png",height:360,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwklEQVR42mOAga+H89K/7Y2rBWEgOxMu8W2TBgtYwb64+u8bVf5/36D4/+ve2Gaw3FoGFob3V+Ywwk3Z6nj/6xa7hzD+33szIXIPN2eDTfl/KdH+/4UMFzD7mTUTWDI4oRusKi1/Uohrxqxg58Qp9THp/f1gSb5CRgb/+F6wyoS8KTnZpdPaE7IndIal9ps3tc8Hi8NBSHJfd2BCzzTf2J6VIUm9vQxqmewoCsJS+kyjMib6haf2+8XlTHIOiu8CmwAAof5OHrt/4+oAAAAASUVORK5CYII="}},49880:function(e,t){"use strict";t.Z={src:"/LeadersCV/_next/static/media/small_logo.e47977f0.png",height:1874,width:1236,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAoklEQVR42mP4udWUAYh9/m6T+f97m4YnAwj83w/GWv93Mlz+v5vBACxoPf+uOMO8l/EM8180MMz6rAIWFFnw2IJhyn19hokPIoXmP3rKMO9xKEPsxqcgXLnoyqsYhlmPnJnnP37PwND5ILTz2Iv/5z5+SGJgOMAmtODxXwaGeY9SVBY93sNQeo8dyF7KOP/xFQaGuY9AeAlQ4D9Q4B7DvEeqABf2TQS1WHH5AAAAAElFTkSuQmCC"}},98225:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(85893),s=a(25675),n=a.n(s),o=a(80562),i=a(3703),l=a.n(i),c=a(41733),d=a(77957);function u(e){var t=e.title,a=e.imageUrl,s=e.areActionsIncluded;return(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsx)(n(),{src:"/"+a.src,alt:"image",height:"100%",width:"100%",objectFit:"cover"}),(0,r.jsx)("span",{className:l().title,children:t}),s&&(0,r.jsxs)("div",{className:l().actionsRow,children:[(0,r.jsx)(o.Z,{"aria-label":"delete",size:"medium",color:"primary",children:(0,r.jsx)(c.Z,{fontSize:"inherit"})}),(0,r.jsx)(o.Z,{"aria-label":"delete",size:"medium",color:"primary",children:(0,r.jsx)(d.Z,{fontSize:"inherit"})})]})]})}},65654:function(e,t,a){"use strict";a.d(t,{Z:function(){return S}});var r=a(85893),s=a(11163),n=a(67294),o=a(85854),i=a.n(o),l=a(94229),c=a(65817),d=a(1671),u=a(2684),p=a(15398),h=a(76638),A=a(59320),f=a(4085),m=a(11811),g=a.n(m),v=a(28333),x=a(75084),b=a(80562),y=a(41483),_=a(13540),j=a(41664),Z=a.n(j),w=a(25675),C=a.n(w),B=a(49880);function S(e){var t=e.isCompany,a=(0,s.useRouter)(),o=a.asPath.split("/"),m=(0,n.useState)(a.query.term),j=m[0],w=m[1],S=function(e){"Enter"===e.key&&N()};(0,n.useEffect)((function(){return document.addEventListener("keydown",S),function(){document.removeEventListener("keydown",S)}}));var N=function(){a.push({pathname:"/search",query:{term:j}})};return(0,r.jsxs)("nav",{className:g().bar,children:[(0,r.jsxs)("section",{className:g().leftSide,children:[(0,r.jsx)("div",{style:{paddingLeft:"10px",paddingTop:"10px",paddingBottom:"10px"},children:(0,r.jsx)(Z(),{href:"/",children:(0,r.jsx)(C(),{src:"/"+B.Z.src,width:"25px",height:"35px",alt:"logo",priority:!0,style:{cursor:"pointer",paddingLeft:"10px"}})})}),(0,r.jsx)("input",{defaultValue:e.term,className:g().textField,spellCheck:"false",placeholder:"Search for anything...",onChange:function(e){return w(e.target.value)}}),(0,r.jsx)("button",{className:g().searchButton,onClick:function(){return N()},children:"Search"})]}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:i().allRightButtons,children:[(0,r.jsxs)(x.Z,{variant:"text",className:i().rightButton,children:[(0,r.jsx)(h.Z,{className:i().buttonIcons}),(0,r.jsx)("span",{children:"Home"})]}),t?(0,r.jsx)(Z(),{href:"/company/"+o[2]+"/employees",children:(0,r.jsxs)(x.Z,{variant:"text",className:i().rightButton,children:[(0,r.jsx)(u.Z,{className:i().buttonIcons}),(0,r.jsx)("span",{children:"Employees"})]})}):(0,r.jsxs)(x.Z,{variant:"text",className:i().rightButton,children:[(0,r.jsx)(d.Z,{className:i().buttonIcons}),(0,r.jsx)("span",{children:"Companies"})]}),t?(0,r.jsx)(Z(),{href:"/company/"+o[2]+"/job-posts",children:(0,r.jsxs)(x.Z,{variant:"text",className:i().rightButton,children:[(0,r.jsx)(v.Z,{className:i().buttonIcons}),(0,r.jsx)("span",{children:"Job Posts"})]})}):(0,r.jsxs)(x.Z,{variant:"text",className:i().rightButton,children:[(0,r.jsx)(u.Z,{className:i().buttonIcons}),(0,r.jsx)("span",{children:"Projects"})]}),(0,r.jsx)(Z(),{href:"user"==o[1]?"/user/"+o[2]:"/company/"+o[2],children:(0,r.jsxs)(x.Z,{variant:"text",className:i().rightButton,children:[t?(0,r.jsx)(d.Z,{className:i().buttonIcons}):(0,r.jsx)(p.Z,{className:i().buttonIcons}),(0,r.jsx)("span",{children:"Profile"})]})}),(0,r.jsxs)(x.Z,{variant:"text",className:i().rightButton,onClick:function(){var e=a.asPath.split("/");a.push({pathname:"/user/"+e[2]+"/statistics"})},children:[(0,r.jsx)(f.Z,{className:i().buttonIcons}),(0,r.jsx)("span",{children:"Statistics"})]}),(0,r.jsxs)(x.Z,{variant:"text",className:i().rightButton,onClick:function(){var e=a.asPath.split("/");a.push({pathname:"/user/"+e[2]+"/settings"})},children:[(0,r.jsx)(l.Z,{className:i().buttonIcons}),(0,r.jsx)("span",{children:"Settings"})]}),(0,r.jsx)(Z(),{href:"/messaging",children:(0,r.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,r.jsx)(y.Z,{badgeContent:2,color:"primary",children:(0,r.jsx)(A.Z,{style:{fontSize:"25px"}})})})}),(0,r.jsx)(Z(),{href:"/notifications",children:(0,r.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,r.jsx)(y.Z,{badgeContent:4,color:"primary",children:(0,r.jsx)(c.Z,{style:{fontSize:"25px"}})})})}),(0,r.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,r.jsx)(_.Z,{style:{fontSize:"25px"}})})]})})]})}},16036:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r,s=a(85893),n=a(9008),o=a.n(n),i=a(67294),l=a(64363),c=a.n(l),d=a(65654),u=a(85390),p=a(87054),h=a(2897),A=a(5031),f=a(11104),m=a(98225),g=a(75084),v=a(96540);function x(){var e=(0,i.useState)(r.all),t=e[0],a=e[1];return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(o(),{children:(0,s.jsx)("title",{children:"Company Clients"})}),(0,s.jsx)(d.Z,{isCompany:!0}),(0,s.jsxs)("section",{className:c().clientsContainer,children:[(0,s.jsxs)("div",{className:c().searchAndAddRow,children:[(0,s.jsx)("input",{placeholder:"Search",className:c().searchField}),(0,s.jsx)(g.Z,{variant:"contained",endIcon:(0,s.jsx)(v.Z,{}),children:"Add A Client"})]}),(0,s.jsx)("div",{className:c().filters,children:(0,s.jsxs)("div",{className:c().filterColumn,children:[(0,s.jsx)("span",{children:"Period"}),(0,s.jsx)(u.Z,{color:"primary",value:t,exclusive:!0,onChange:function(e,t){null!==t&&a(t)},"aria-label":"Platform",children:Object.values(r).map((function(e,t){return(0,s.jsx)(p.Z,{size:"small",value:e,className:c().toggleButtonStyle,children:e},t)}))})]})}),(0,s.jsxs)("div",{className:c().listOfClients,children:[(0,s.jsx)(m.Z,{imageUrl:h.Z,title:"KFC",areActionsIncluded:!0}),(0,s.jsx)(m.Z,{imageUrl:A.Z,title:"Kudu",areActionsIncluded:!0}),(0,s.jsx)(m.Z,{imageUrl:f.Z,title:"Herfy",areActionsIncluded:!0}),(0,s.jsx)(m.Z,{imageUrl:h.Z,title:"KFC",areActionsIncluded:!0}),(0,s.jsx)(m.Z,{imageUrl:A.Z,title:"Kudu",areActionsIncluded:!0}),(0,s.jsx)(m.Z,{imageUrl:f.Z,title:"Herfy",areActionsIncluded:!0})]})]})]})}!function(e){e.all="All",e.last24Hours="Last 24 hours",e.last7Days="Last 7 days",e.lastMonth="Last Month",e.last6Months="Last 6 Months"}(r||(r={}))},3703:function(e){e.exports={container:"single_client_container__JJSrH",title:"single_client_title__fu0uI",actionsRow:"single_client_actionsRow__wzYiN"}},11811:function(e){e.exports={bar:"shared_styles_bar__m2_4l",rightSide:"shared_styles_rightSide__7hjOk",leftSide:"shared_styles_leftSide__TeE3U",textField:"shared_styles_textField__QvjoS",searchButton:"shared_styles_searchButton__U7voq"}},85854:function(e){e.exports={rightButton:"user_or_company_header_rightButton__IYaKQ",allRightButtons:"user_or_company_header_allRightButtons___c3WY",buttonIcons:"user_or_company_header_buttonIcons__rYoHj",iconButtons:"user_or_company_header_iconButtons__VV9zH"}},64363:function(e){e.exports={clientsContainer:"company_clients_clientsContainer__E3Uka",filters:"company_clients_filters__4N8o_",filterColumn:"company_clients_filterColumn__9XCZ4",searchField:"company_clients_searchField__44hVX",toggleButtonStyle:"company_clients_toggleButtonStyle__UAOda",listOfClients:"company_clients_listOfClients__7Jdrd",searchAndAddRow:"company_clients_searchAndAddRow__JXU42"}}},function(e){e.O(0,[425,180,774,888,179],(function(){return t=74342,e(e.s=t);var t}));var t=e.O();_N_E=t}]);