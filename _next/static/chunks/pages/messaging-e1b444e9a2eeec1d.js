(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{57976:function(e,s,a){"use strict";var t=a(91941);s.Z=void 0;var r=t(a(64938)),n=a(85893),o=(0,r.default)((0,n.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");s.Z=o},26307:function(e,s,a){"use strict";var t=a(91941);s.Z=void 0;var r=t(a(64938)),n=a(85893),o=(0,r.default)((0,n.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");s.Z=o},44731:function(e,s,a){"use strict";a.d(s,{Z:function(){return _}});var t=a(1048),r=a(32793),n=a(67294),o=a(86010),i=a(94780),l=a(67074),c=a(78884),d=a(58175),u=a(85893),m=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=a(34867);function g(e){return(0,h.Z)("MuiAvatar",e)}(0,a(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:a}=e;return[s.root,s[a.variant],a.colorDefault&&s.colorDefault]}})((({theme:e,ownerState:s})=>(0,r.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===s.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===s.variant&&{borderRadius:0},s.colorDefault&&(0,r.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),x=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,s)=>s.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=(0,l.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,s)=>s.fallback})({width:"75%",height:"75%"});var _=n.forwardRef((function(e,s){const a=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:l,children:d,className:m,component:h="div",imgProps:_,sizes:j,src:b,srcSet:y,variant:Z="circular"}=a,S=(0,t.Z)(a,p);let M=null;const N=function({crossOrigin:e,referrerPolicy:s,src:a,srcSet:t}){const[r,o]=n.useState(!1);return n.useEffect((()=>{if(!a&&!t)return;o(!1);let r=!0;const n=new Image;return n.onload=()=>{r&&o("loaded")},n.onerror=()=>{r&&o("error")},n.crossOrigin=e,n.referrerPolicy=s,n.src=a,t&&(n.srcset=t),()=>{r=!1}}),[e,s,a,t]),r}((0,r.Z)({},_,{src:b,srcSet:y})),C=b||y,R=C&&"error"!==N,A=(0,r.Z)({},a,{colorDefault:!R,component:h,variant:Z}),w=(e=>{const{classes:s,variant:a,colorDefault:t}=e,r={root:["root",a,t&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,i.Z)(r,g,s)})(A);return M=R?(0,u.jsx)(x,(0,r.Z)({alt:l,src:b,srcSet:y,sizes:j,ownerState:A,className:w.img},_)):null!=d?d:C&&l?l[0]:(0,u.jsx)(v,{className:w.fallback}),(0,u.jsx)(f,(0,r.Z)({as:h,ownerState:A,className:(0,o.default)(w.root,m),ref:s},S,{children:M}))}))},87054:function(e,s,a){"use strict";a.d(s,{Z:function(){return _}});var t=a(1048),r=a(32793),n=a(67294),o=a(86010),i=a(94780),l=a(41796),c=a(19828),d=a(36622),u=a(78884),m=a(67074),h=a(34867);function g(e){return(0,h.Z)("MuiToggleButton",e)}var p=(0,a(1588).Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),f=a(85893);const x=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],v=(0,m.ZP)(c.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:a}=e;return[s.root,s[`size${(0,d.Z)(a.size)}`]]}})((({theme:e,ownerState:s})=>{let a,t="standard"===s.color?e.palette.text.primary:e.palette[s.color].main;return e.vars&&(t="standard"===s.color?e.vars.palette.text.primary:e.vars.palette[s.color].main,a="standard"===s.color?e.vars.palette.text.primaryChannel:e.vars.palette[s.color].mainChannel),(0,r.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},s.fullWidth&&{width:"100%"},{[`&.${p.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${p.selected}`]:{color:t,backgroundColor:e.vars?`rgba(${a} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(t,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${a} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(t,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${a} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(t,e.palette.action.selectedOpacity)}}}},"small"===s.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===s.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}));var _=n.forwardRef((function(e,s){const a=(0,u.Z)({props:e,name:"MuiToggleButton"}),{children:n,className:l,color:c="standard",disabled:m=!1,disableFocusRipple:h=!1,fullWidth:p=!1,onChange:_,onClick:j,selected:b,size:y="medium",value:Z}=a,S=(0,t.Z)(a,x),M=(0,r.Z)({},a,{color:c,disabled:m,disableFocusRipple:h,fullWidth:p,size:y}),N=(e=>{const{classes:s,fullWidth:a,selected:t,disabled:r,size:n,color:o}=e,l={root:["root",t&&"selected",r&&"disabled",a&&"fullWidth",`size${(0,d.Z)(n)}`,o]};return(0,i.Z)(l,g,s)})(M);return(0,f.jsx)(v,(0,r.Z)({className:(0,o.default)(N.root,l),disabled:m,focusRipple:!h,ref:s,onClick:e=>{j&&(j(e,Z),e.defaultPrevented)||_&&_(e,Z)},onChange:_,value:Z,ownerState:M,"aria-pressed":b},S,{children:n}))}))},85390:function(e,s,a){"use strict";a.d(s,{Z:function(){return v}});var t=a(1048),r=a(32793),n=a(67294),o=(a(76607),a(86010)),i=a(94780),l=a(67074),c=a(78884),d=a(36622);function u(e,s){return void 0!==s&&void 0!==e&&(Array.isArray(s)?s.indexOf(e)>=0:e===s)}var m=a(34867);function h(e){return(0,m.Z)("MuiToggleButtonGroup",e)}var g=(0,a(1588).Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),p=a(85893);const f=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],x=(0,l.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:a}=e;return[{[`& .${g.grouped}`]:s.grouped},{[`& .${g.grouped}`]:s[`grouped${(0,d.Z)(a.orientation)}`]},s.root,"vertical"===a.orientation&&s.vertical,a.fullWidth&&s.fullWidth]}})((({ownerState:e,theme:s})=>(0,r.Z)({display:"inline-flex",borderRadius:(s.vars||s).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${g.grouped}`]:(0,r.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderTop:0,marginTop:0}})})));var v=n.forwardRef((function(e,s){const a=(0,c.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:l,className:m,color:g="standard",disabled:v=!1,exclusive:_=!1,fullWidth:j=!1,onChange:b,orientation:y="horizontal",size:Z="medium",value:S}=a,M=(0,t.Z)(a,f),N=(0,r.Z)({},a,{disabled:v,fullWidth:j,orientation:y,size:Z}),C=(e=>{const{classes:s,orientation:a,fullWidth:t,disabled:r}=e,n={root:["root","vertical"===a&&"vertical",t&&"fullWidth"],grouped:["grouped",`grouped${(0,d.Z)(a)}`,r&&"disabled"]};return(0,i.Z)(n,h,s)})(N),R=(e,s)=>{if(!b)return;const a=S&&S.indexOf(s);let t;S&&a>=0?(t=S.slice(),t.splice(a,1)):t=S?S.concat(s):[s],b(e,t)},A=(e,s)=>{b&&b(e,S===s?null:s)};return(0,p.jsx)(x,(0,r.Z)({role:"group",className:(0,o.default)(C.root,m),ref:s,ownerState:N},M,{children:n.Children.map(l,(e=>n.isValidElement(e)?n.cloneElement(e,{className:(0,o.default)(C.grouped,e.props.className),onChange:_?A:R,selected:void 0===e.props.selected?u(e.props.value,S):e.props.selected,size:e.props.size||Z,fullWidth:j,color:e.props.color||g,disabled:e.props.disabled||v}):null))}))}))},63023:function(e,s){"use strict";var a,t=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen");function x(e){if("object"===typeof e&&null!==e){var s=e.$$typeof;switch(s){case t:switch(e=e.type){case n:case i:case o:case m:case h:return e;default:switch(e=e&&e.$$typeof){case d:case c:case u:case p:case g:case l:return e;default:return s}}case r:return s}}}a=Symbol.for("react.module.reference")},76607:function(e,s,a){"use strict";a(63023)},4996:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/messaging",function(){return a(25011)}])},49880:function(e,s){"use strict";s.Z={src:"/LeadersCV/_next/static/media/small_logo.e47977f0.png",height:1874,width:1236,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAoklEQVR42mP4udWUAYh9/m6T+f97m4YnAwj83w/GWv93Mlz+v5vBACxoPf+uOMO8l/EM8180MMz6rAIWFFnw2IJhyn19hokPIoXmP3rKMO9xKEPsxqcgXLnoyqsYhlmPnJnnP37PwND5ILTz2Iv/5z5+SGJgOMAmtODxXwaGeY9SVBY93sNQeo8dyF7KOP/xFQaGuY9AeAlQ4D9Q4B7DvEeqABf2TQS1WHH5AAAAAElFTkSuQmCC"}},65654:function(e,s,a){"use strict";a.d(s,{Z:function(){return R}});var t=a(85893),r=a(11163),n=a(67294),o=a(85854),i=a.n(o),l=a(94229),c=a(65817),d=a(1671),u=a(2684),m=a(15398),h=a(76638),g=a(59320),p=a(4085),f=a(11811),x=a.n(f),v=a(28333),_=a(75084),j=a(80562),b=a(41483),y=a(13540),Z=a(41664),S=a.n(Z),M=a(25675),N=a.n(M),C=a(49880);function R(e){var s=e.isCompany,a=(0,r.useRouter)(),o=a.asPath.split("/"),f=(0,n.useState)(a.query.term),Z=f[0],M=f[1],R=function(e){"Enter"===e.key&&A()};(0,n.useEffect)((function(){return document.addEventListener("keydown",R),function(){document.removeEventListener("keydown",R)}}));var A=function(){a.push({pathname:"/search",query:{term:Z}})};return(0,t.jsxs)("nav",{className:x().bar,children:[(0,t.jsxs)("section",{className:x().leftSide,children:[(0,t.jsx)("div",{style:{paddingLeft:"10px",paddingTop:"10px",paddingBottom:"10px"},children:(0,t.jsx)(S(),{href:"/",children:(0,t.jsx)(N(),{src:"/"+C.Z.src,width:"25px",height:"35px",alt:"logo",priority:!0,style:{cursor:"pointer",paddingLeft:"10px"}})})}),(0,t.jsx)("input",{defaultValue:e.term,className:x().textField,spellCheck:"false",placeholder:"Search for anything...",onChange:function(e){return M(e.target.value)}}),(0,t.jsx)("button",{className:x().searchButton,onClick:function(){return A()},children:"Search"})]}),(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:i().allRightButtons,children:[(0,t.jsxs)(_.Z,{variant:"text",className:i().rightButton,children:[(0,t.jsx)(h.Z,{className:i().buttonIcons}),(0,t.jsx)("span",{children:"Home"})]}),s?(0,t.jsx)(S(),{href:"/company/"+o[2]+"/employees",children:(0,t.jsxs)(_.Z,{variant:"text",className:i().rightButton,children:[(0,t.jsx)(u.Z,{className:i().buttonIcons}),(0,t.jsx)("span",{children:"Employees"})]})}):(0,t.jsxs)(_.Z,{variant:"text",className:i().rightButton,children:[(0,t.jsx)(d.Z,{className:i().buttonIcons}),(0,t.jsx)("span",{children:"Companies"})]}),s?(0,t.jsx)(S(),{href:"/company/"+o[2]+"/job-posts",children:(0,t.jsxs)(_.Z,{variant:"text",className:i().rightButton,children:[(0,t.jsx)(v.Z,{className:i().buttonIcons}),(0,t.jsx)("span",{children:"Job Posts"})]})}):(0,t.jsxs)(_.Z,{variant:"text",className:i().rightButton,children:[(0,t.jsx)(u.Z,{className:i().buttonIcons}),(0,t.jsx)("span",{children:"Projects"})]}),(0,t.jsx)(S(),{href:"user"==o[1]?"/user/"+o[2]:"/company/"+o[2],children:(0,t.jsxs)(_.Z,{variant:"text",className:i().rightButton,children:[s?(0,t.jsx)(d.Z,{className:i().buttonIcons}):(0,t.jsx)(m.Z,{className:i().buttonIcons}),(0,t.jsx)("span",{children:"Profile"})]})}),(0,t.jsxs)(_.Z,{variant:"text",className:i().rightButton,onClick:function(){var e=a.asPath.split("/");a.push({pathname:"/user/"+e[2]+"/statistics"})},children:[(0,t.jsx)(p.Z,{className:i().buttonIcons}),(0,t.jsx)("span",{children:"Statistics"})]}),(0,t.jsxs)(_.Z,{variant:"text",className:i().rightButton,onClick:function(){var e=a.asPath.split("/");a.push({pathname:"/user/"+e[2]+"/settings"})},children:[(0,t.jsx)(l.Z,{className:i().buttonIcons}),(0,t.jsx)("span",{children:"Settings"})]}),(0,t.jsx)(S(),{href:"/messaging",children:(0,t.jsx)(j.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,t.jsx)(b.Z,{badgeContent:2,color:"primary",children:(0,t.jsx)(g.Z,{style:{fontSize:"25px"}})})})}),(0,t.jsx)(S(),{href:"/notifications",children:(0,t.jsx)(j.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,t.jsx)(b.Z,{badgeContent:4,color:"primary",children:(0,t.jsx)(c.Z,{style:{fontSize:"25px"}})})})}),(0,t.jsx)(j.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,t.jsx)(y.Z,{style:{fontSize:"25px"}})})]})})]})}},25011:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return M}});var t=a(85893),r=a(44731),n=a(80562),o=a(9008),i=a.n(o),l=a(67294),c=a(65654),d=a(48975),u=a.n(d);function m(e){var s=e.name,a=e.lastMessage,n=e.lastMessageDate;e.hasUnreadMessages;return(0,t.jsxs)("div",{className:u().chatRoomContainer,children:[(0,t.jsx)(r.Z,{sx:{width:"56px",height:"56px"}}),(0,t.jsxs)("div",{className:u().nameAndLastMessage,children:[(0,t.jsx)("span",{children:s}),(0,t.jsx)("span",{children:a})]}),(0,t.jsx)("span",{children:n})]})}var h=a(26307),g=a(57976),p=a(54386),f=a.n(p),x=a(81823),v=a.n(x);function _(e){var s=e.message,a=e.time,r=e.isSender;return(0,t.jsxs)("div",{className:v().messageContainer,children:[(0,t.jsx)("div",{className:r?v().senderMessage:v().receiverMessage,children:s}),(0,t.jsx)("div",{className:r?v().senderTime:v().receiverTime,children:a})]})}var j=a(52228),b=a.n(j),y=a(87054),Z=a(85390);function S(){var e=(0,l.useState)(!1),s=e[0],a=e[1];return(0,t.jsxs)("div",{className:b().settingsContainer,children:[(0,t.jsx)("div",{className:b().title,children:"Settings"}),(0,t.jsxs)("div",{className:b().settingsTile,children:[(0,t.jsx)("span",{children:"Hide on Read"}),(0,t.jsxs)(Z.Z,{value:s,exclusive:!0,onChange:function(e,s){null!==s&&a(s)},sx:{height:"35px"},"aria-label":"Hide on read",children:[(0,t.jsx)(y.Z,{value:!0,"aria-label":"Yes",children:"Yes"}),(0,t.jsx)(y.Z,{value:!1,"aria-label":"No",children:"No"})]})]})]})}function M(){return(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)(i(),{children:(0,t.jsx)("title",{children:"Messaging"})}),(0,t.jsx)(c.Z,{}),(0,t.jsx)("section",{className:f().messagingSection,children:(0,t.jsxs)("div",{className:f().chatContainer,children:[(0,t.jsxs)("div",{className:f().chatRooms,children:[(0,t.jsx)(m,{name:"Mohammed Khalil",hasUnreadMessages:!0,lastMessageDate:"46s",lastMessage:"this is the last message between usdsdsdsd dasdsdsds "}),(0,t.jsx)(m,{name:"Hatim Mohammed",hasUnreadMessages:!0,lastMessageDate:"46s",lastMessage:"ds"}),(0,t.jsx)(m,{name:"Abdullah",hasUnreadMessages:!0,lastMessageDate:"46s",lastMessage:"ds"}),(0,t.jsx)(m,{name:"saas",hasUnreadMessages:!0,lastMessageDate:"46s",lastMessage:"ds"}),(0,t.jsx)(m,{name:"saas",hasUnreadMessages:!0,lastMessageDate:"46s",lastMessage:"ds"}),(0,t.jsx)(m,{name:"saas",hasUnreadMessages:!0,lastMessageDate:"46s",lastMessage:"ds"}),(0,t.jsx)(m,{name:"saas",hasUnreadMessages:!0,lastMessageDate:"46s",lastMessage:"ds"}),(0,t.jsx)(m,{name:"saas",hasUnreadMessages:!0,lastMessageDate:"46s",lastMessage:"ds"}),(0,t.jsx)(m,{name:"saas",hasUnreadMessages:!0,lastMessageDate:"46s",lastMessage:"ds"})]}),(0,t.jsxs)("div",{className:f().chat,children:[(0,t.jsxs)("div",{className:f().selectedChatProfile,children:[(0,t.jsx)(r.Z,{}),(0,t.jsx)("div",{className:f().selectedChatName,children:"Mohammed"}),(0,t.jsx)(n.Z,{"aria-label":"more",sx:{marginLeft:"auto"},children:(0,t.jsx)(g.Z,{color:"primary"})})]}),(0,t.jsxs)("div",{className:f().chatMessages,children:[(0,t.jsx)(_,{message:"helllo this is a long message",time:"22 Jul",isSender:!0}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"Just now",isSender:!0}),(0,t.jsx)(_,{message:"asasasa",time:"1 min",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1}),(0,t.jsx)(_,{message:"asasasa",time:"22 Jul",isSender:!1})]}),(0,t.jsxs)("div",{className:f().inputFieldAndSend,children:[(0,t.jsx)("input",{placeholder:"Type your message here",spellCheck:!1,className:f().messageTextField}),(0,t.jsx)(n.Z,{"aria-label":"send",children:(0,t.jsx)(h.Z,{color:"primary"})})]})]}),(0,t.jsx)(S,{})]})})]})}},11811:function(e){e.exports={bar:"shared_styles_bar__m2_4l",rightSide:"shared_styles_rightSide__7hjOk",leftSide:"shared_styles_leftSide__TeE3U",textField:"shared_styles_textField__QvjoS",searchButton:"shared_styles_searchButton__U7voq"}},85854:function(e){e.exports={rightButton:"user_or_company_header_rightButton__IYaKQ",allRightButtons:"user_or_company_header_allRightButtons___c3WY",buttonIcons:"user_or_company_header_buttonIcons__rYoHj",iconButtons:"user_or_company_header_iconButtons__VV9zH"}},81823:function(e){e.exports={senderMessage:"chat_message_senderMessage__yMRfK",receiverMessage:"chat_message_receiverMessage__lG1sz",messageContainer:"chat_message_messageContainer__3YIhZ",senderTime:"chat_message_senderTime__G_OUI",receiverTime:"chat_message_receiverTime__IOftC"}},48975:function(e){e.exports={chatRoomContainer:"chat_room_chatRoomContainer__YEHFO",nameAndLastMessage:"chat_room_nameAndLastMessage__TZg_b"}},52228:function(e){e.exports={settingsContainer:"messaging_settings_settingsContainer__eAyQR",title:"messaging_settings_title__R8R9R",settingsTile:"messaging_settings_settingsTile__tUV3I"}},54386:function(e){e.exports={messagingSection:"messaging_messagingSection__aC0Ba",chat:"messaging_chat__sclHO",chatRooms:"messaging_chatRooms__bqDPZ",chatContainer:"messaging_chatContainer__od6uD",selectedChatProfile:"messaging_selectedChatProfile__tJaWY",selectedChatName:"messaging_selectedChatName__i9ZMf",chatMessages:"messaging_chatMessages__gnhdH",inputFieldAndSend:"messaging_inputFieldAndSend__b7TxR",messageTextField:"messaging_messageTextField__msAMd"}}},function(e){e.O(0,[425,180,774,888,179],(function(){return s=4996,e(e.s=s);var s}));var s=e.O();_N_E=s}]);