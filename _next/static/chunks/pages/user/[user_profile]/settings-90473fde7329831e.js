(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{1733:function(e,t,i){"use strict";var s=i(5318);t.Z=void 0;var a=s(i(4938)),n=i(5893),r=(0,a.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=r},4634:function(e,t,i){"use strict";var s=i(5318);t.Z=void 0;var a=s(i(4938)),n=i(5893),r=(0,a.default)((0,n.jsx)("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}),"InsertDriveFile");t.Z=r},2729:function(e,t,i){"use strict";var s=i(5318);t.Z=void 0;var a=s(i(4938)),n=i(5893),r=(0,a.default)((0,n.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Photo");t.Z=r},3023:function(e,t){"use strict";var i,s=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case s:switch(e=e.type){case n:case l:case r:case h:case p:return e;default:switch(e=e&&e.$$typeof){case d:case c:case u:case x:case m:case o:return e;default:return t}}case a:return t}}}i=Symbol.for("react.module.reference")},6607:function(e,t,i){"use strict";i(3023)},5961:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[user_profile]/settings",function(){return i(6501)}])},4709:function(e,t,i){"use strict";i.d(t,{Z:function(){return S}});var s=i(5893),a=i(1163),n=i(7294),r=i(3878),l=i(8317),o=i.n(l),c=i(4229),d=i(5817),u=i(1671),h=i(2684),p=i(5398),m=i(6638),x=i(9320),f=i(4085),v=i(1811),j=i.n(v),_=i(3321),g=i(3946),b=i(1236),y=i(3540);function S(e){var t=(0,a.useRouter)(),i=(0,n.useState)(t.query.term),l=i[0],v=i[1],S=function(e){"Enter"===e.key&&N()};(0,n.useEffect)((function(){return document.addEventListener("keydown",S),function(){document.removeEventListener("keydown",S)}}),[]);var N=function(){t.push({pathname:"/search",query:{term:l}})};return(0,s.jsx)("nav",{className:j().bar,children:(0,s.jsxs)("section",{className:j().leftSide,children:[(0,s.jsx)("div",{style:{paddingLeft:"10px"},children:(0,s.jsx)(r.Z,{width:"175px",height:"45px"})}),(0,s.jsx)("input",{defaultValue:e.term,className:j().textField,spellCheck:"false",placeholder:"Search for anything...",onChange:function(e){return v(e.target.value)}}),(0,s.jsx)("button",{className:j().searchButton,onClick:function(){return N()},children:"Search"}),(0,s.jsxs)("div",{className:o().allRightButtons,children:[(0,s.jsxs)(_.Z,{variant:"text",className:o().rightButton,children:[(0,s.jsx)(m.Z,{className:o().buttonIcons}),(0,s.jsx)("span",{children:"Home"})]}),(0,s.jsxs)(_.Z,{variant:"text",className:o().rightButton,children:[(0,s.jsx)(u.Z,{className:o().buttonIcons}),(0,s.jsx)("span",{children:"Companies"})]}),(0,s.jsxs)(_.Z,{variant:"text",className:o().rightButton,children:[(0,s.jsx)(h.Z,{className:o().buttonIcons}),(0,s.jsx)("span",{children:"Projects"})]}),(0,s.jsxs)(_.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=t.asPath.split("/");t.push({pathname:"/user/"+e[2]})},children:[(0,s.jsx)(p.Z,{className:o().buttonIcons}),(0,s.jsx)("span",{children:"Profile"})]}),(0,s.jsxs)(_.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=t.asPath.split("/");t.push({pathname:"/user/"+e[2]+"/statistics"})},children:[(0,s.jsx)(f.Z,{className:o().buttonIcons}),(0,s.jsx)("span",{children:"Statistics"})]}),(0,s.jsxs)(_.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=t.asPath.split("/");t.push({pathname:"/user/"+e[2]+"/settings"})},children:[(0,s.jsx)(c.Z,{className:o().buttonIcons}),(0,s.jsx)("span",{children:"Settings"})]}),(0,s.jsx)(g.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,s.jsx)(b.Z,{badgeContent:2,color:"primary",children:(0,s.jsx)(x.Z,{style:{fontSize:"25px"}})})}),(0,s.jsx)(g.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,s.jsx)(b.Z,{badgeContent:4,color:"primary",children:(0,s.jsx)(d.Z,{style:{fontSize:"25px"}})})}),(0,s.jsx)(g.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,s.jsx)(y.Z,{style:{fontSize:"25px"}})})]})]})})}},4359:function(e,t,i){"use strict";var s=i(5893),a=i(4320),n=i.n(a);t.Z=function(e){return(0,s.jsxs)("div",{className:n().container,children:[!e.dontShowFieldName&&(0,s.jsx)("p",{className:n().headtext,children:e.fieldName}),(0,s.jsx)("input",{className:n().textfield,type:e.type,placeholder:e.placeholder,spellCheck:"false"})]})}},6501:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ve}});var s=i(5893),a=i(9008),n=i.n(a),r=i(7294),l=i(4709),o=i(8439),c=i.n(o),d=i(3366),u=i(7462),h=i(6010),p=i(4780),m=i(1796),x=i(7739),f=i(8216),v=i(7623),j=i(1496),_=i(4867),g=i(1588);function b(e){return(0,_.Z)("MuiToggleButton",e)}var y=(0,g.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]);const S=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],N=(0,j.ZP)(x.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`size${(0,f.Z)(i.size)}`]]}})((({theme:e,ownerState:t})=>{let i,s="standard"===t.color?e.palette.text.primary:e.palette[t.color].main;return e.vars&&(s="standard"===t.color?e.vars.palette.text.primary:e.vars.palette[t.color].main,i="standard"===t.color?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),(0,u.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,m.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}`]:{color:s,backgroundColor:e.vars?`rgba(${i} / ${e.vars.palette.action.selectedOpacity})`:(0,m.Fq)(s,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${i} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,m.Fq)(s,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${i} / ${e.vars.palette.action.selectedOpacity})`:(0,m.Fq)(s,e.palette.action.selectedOpacity)}}}},"small"===t.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===t.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}));var C=r.forwardRef((function(e,t){const i=(0,v.Z)({props:e,name:"MuiToggleButton"}),{children:a,className:n,color:r="standard",disabled:l=!1,disableFocusRipple:o=!1,fullWidth:c=!1,onChange:m,onClick:x,selected:j,size:_="medium",value:g}=i,y=(0,d.Z)(i,S),C=(0,u.Z)({},i,{color:r,disabled:l,disableFocusRipple:o,fullWidth:c,size:_}),Z=(e=>{const{classes:t,fullWidth:i,selected:s,disabled:a,size:n,color:r}=e,l={root:["root",s&&"selected",a&&"disabled",i&&"fullWidth",`size${(0,f.Z)(n)}`,r]};return(0,p.Z)(l,b,t)})(C);return(0,s.jsx)(N,(0,u.Z)({className:(0,h.Z)(Z.root,n),disabled:l,focusRipple:!o,ref:t,onClick:e=>{x&&(x(e,g),e.defaultPrevented)||m&&m(e,g)},onChange:m,value:g,ownerState:C,"aria-pressed":j},y,{children:a}))}));i(6607);function Z(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}function T(e){return(0,_.Z)("MuiToggleButtonGroup",e)}var w=(0,g.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]);const z=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],R=(0,j.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[{[`& .${w.grouped}`]:t.grouped},{[`& .${w.grouped}`]:t[`grouped${(0,f.Z)(i.orientation)}`]},t.root,"vertical"===i.orientation&&t.vertical,i.fullWidth&&t.fullWidth]}})((({ownerState:e,theme:t})=>(0,u.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${w.grouped}`]:(0,u.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${w.selected} + .${w.grouped}.${w.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${w.selected} + .${w.grouped}.${w.selected}`]:{borderTop:0,marginTop:0}})})));var O=r.forwardRef((function(e,t){const i=(0,v.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:a,className:n,color:l="standard",disabled:o=!1,exclusive:c=!1,fullWidth:m=!1,onChange:x,orientation:j="horizontal",size:_="medium",value:g}=i,b=(0,d.Z)(i,z),y=(0,u.Z)({},i,{disabled:o,fullWidth:m,orientation:j,size:_}),S=(e=>{const{classes:t,orientation:i,fullWidth:s,disabled:a}=e,n={root:["root","vertical"===i&&"vertical",s&&"fullWidth"],grouped:["grouped",`grouped${(0,f.Z)(i)}`,a&&"disabled"]};return(0,p.Z)(n,T,t)})(y),N=(e,t)=>{if(!x)return;const i=g&&g.indexOf(t);let s;g&&i>=0?(s=g.slice(),s.splice(i,1)):s=g?g.concat(t):[t],x(e,s)},C=(e,t)=>{x&&x(e,g===t?null:t)};return(0,s.jsx)(R,(0,u.Z)({role:"group",className:(0,h.Z)(S.root,n),ref:t,ownerState:y},b,{children:r.Children.map(a,(e=>r.isValidElement(e)?r.cloneElement(e,{className:(0,h.Z)(S.grouped,e.props.className),onChange:c?C:N,selected:void 0===e.props.selected?Z(e.props.value,g):e.props.selected,size:e.props.size||_,fullWidth:m,color:e.props.color||l,disabled:e.props.disabled||o}):null))}))})),A=i(5907),B=i.n(A);function E(){var e=(0,r.useState)("Light"),t=e[0],i=e[1];return(0,s.jsx)("section",{className:B().appearanceContainer,children:(0,s.jsxs)("div",{className:B().appearanceTile,children:[(0,s.jsx)("span",{children:"Theme"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){i(t)},"aria-label":"Theme",children:[(0,s.jsx)(C,{value:"Light",children:"Light"}),(0,s.jsx)(C,{value:"Dark",children:"Dark"})]})]})})}var M=i(802),$=i(5084),k=i(4020),F=i(4359),I=i(2411),L=i.n(I);function P(){return(0,s.jsxs)("section",{className:L().socialMediaContainer,children:[(0,s.jsxs)("div",{className:L().socialMediaTile,children:[(0,s.jsx)(M.Z,{fontSize:"large",color:"primary"}),(0,s.jsx)("span",{children:"Facebook"}),(0,s.jsx)(F.Z,{dontShowFieldName:!0,placeholder:"E.g.: www.facebook.com/url"})]}),(0,s.jsxs)("div",{className:L().socialMediaTile,children:[(0,s.jsx)($.Z,{fontSize:"large",color:"primary"}),(0,s.jsx)("span",{children:"Twitter"}),(0,s.jsx)(F.Z,{dontShowFieldName:!0,placeholder:"www.twitter.com/xxxx"})]}),(0,s.jsxs)("div",{className:L().socialMediaTile,children:[(0,s.jsx)(k.Z,{fontSize:"large",color:"primary"}),(0,s.jsx)("span",{children:"Instagram"}),(0,s.jsx)(F.Z,{dontShowFieldName:!0,placeholder:"www.instagram.com/xxxx"})]})]})}var W=i(3116),V=i.n(W);function H(){var e=(0,r.useState)(!1),t=e[0],i=e[1],a=(0,r.useState)(!0),n=a[0],l=a[1],o=(0,r.useState)(!1),c=o[0],d=o[1];return(0,s.jsxs)("section",{className:V().jobAlertsContainer,children:[(0,s.jsxs)("div",{className:V().jobAlertsTile,children:[(0,s.jsx)("span",{children:"Software Engineer - Riyadh , Saudi Arabia - Full Time"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){i(t)},"aria-label":"firstAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]}),(0,s.jsxs)("div",{className:V().jobAlertsTile,children:[(0,s.jsx)("span",{children:"Flutter Developer - Khobar , Saudi Arabia - Remote"})," ",(0,s.jsxs)(O,{size:"small",color:"primary",value:n,exclusive:!0,onChange:function(e,t){l(t)},"aria-label":"secondAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]}),(0,s.jsxs)("div",{className:V().jobAlertsTile,children:[(0,s.jsx)("span",{children:"Front End Developer - Dammam , Saudi Arabia - Part Time"})," ",(0,s.jsxs)(O,{size:"small",color:"primary",value:c,exclusive:!0,onChange:function(e,t){d(t)},"aria-label":"thirdAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]})]})}var D=i(3321),J=i(1251),q=i.n(J);function K(){return(0,s.jsxs)("section",{className:q().securityContainer,children:[(0,s.jsxs)("div",{className:q().securityTile,children:[(0,s.jsx)("span",{children:"Two Factor Authentication"}),(0,s.jsx)(D.Z,{variant:"contained",size:"small",children:"Enable"})]}),(0,s.jsxs)("div",{className:q().securityTile,children:[(0,s.jsx)("span",{children:" Password"}),(0,s.jsx)(D.Z,{variant:"contained",size:"small",children:"Change"})]})]})}var G=i(7146),U=i.n(G);function Q(){var e=(0,r.useState)(!1),t=e[0],i=e[1],a=(0,r.useState)(!0),n=a[0],l=a[1],o=(0,r.useState)(!1),c=o[0],d=o[1],u=function(e,t){d(t)};return(0,s.jsxs)("section",{className:U().visibilityContainer,children:[(0,s.jsxs)("div",{className:U().visibilityTile,children:[(0,s.jsx)("span",{children:"Show Hobbies"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){i(t)},"aria-label":"firstAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]}),(0,s.jsxs)("div",{className:U().visibilityTile,children:[(0,s.jsx)("span",{children:"Show Interests"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:n,exclusive:!0,onChange:function(e,t){l(t)},"aria-label":"secondAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]}),(0,s.jsxs)("div",{className:U().visibilityTile,children:[(0,s.jsx)("span",{children:"Show Skills"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]}),(0,s.jsxs)("div",{className:U().visibilityTile,children:[(0,s.jsx)("span",{children:"Show Certificates"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]}),(0,s.jsxs)("div",{className:U().visibilityTile,children:[(0,s.jsx)("span",{children:"Show Memberships"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]}),(0,s.jsxs)("div",{className:U().visibilityTile,children:[(0,s.jsx)("span",{children:"Hide Read Messages"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]}),(0,s.jsxs)("div",{className:U().visibilityTile,children:[(0,s.jsx)("span",{children:"Hide On Search"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]})]})}var X=i(3857),Y=i.n(X);function ee(){var e=(0,r.useState)(!0),t=e[0],i=e[1];return(0,s.jsx)("section",{className:Y().notificationsContainer,children:(0,s.jsxs)("div",{className:Y().notificationsTile,children:[(0,s.jsx)("span",{children:"Job Application Status Notifications"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){i(t)},"aria-label":"Theme",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]})})}var te=i(5292),ie=i.n(te);function se(){var e=(0,r.useState)(!0),t=e[0],i=e[1],a=(0,r.useState)(!0),n=a[0],l=a[1];return(0,s.jsxs)("section",{className:ie().emailSettingsContainer,children:[(0,s.jsxs)("div",{className:ie().emailSettingsTile,children:[(0,s.jsx)("span",{children:"Send Blogs on Email"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){i(t)},"aria-label":"blogs",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]}),(0,s.jsxs)("div",{className:ie().emailSettingsTile,children:[(0,s.jsx)("span",{children:"Send Job Alerts on Email"}),(0,s.jsxs)(O,{size:"small",color:"primary",value:n,exclusive:!0,onChange:function(e,t){l(t)},"aria-label":"job alerts",children:[(0,s.jsx)(C,{value:!0,children:"On"}),(0,s.jsx)(C,{value:!1,children:"Off"})]})]})]})}var ae=i(6137),ne=i.n(ae),re=i(4634),le=i(1733),oe=i(2729),ce=i(3946);function de(){return(0,s.jsxs)("section",{className:ne().resumesContainer,children:[(0,s.jsxs)("div",{className:ne().resumesTile,children:[(0,s.jsx)(re.Z,{sx:{height:"60px",width:"60px"}}),(0,s.jsxs)("div",{className:ne().titleDate,children:[(0,s.jsx)("span",{children:"Mohammed Khalil CV.pdf"}),(0,s.jsx)("span",{children:"Uploaded on 21/4/2021"})]}),(0,s.jsx)(ce.Z,{"aria-label":"delete",children:(0,s.jsx)(le.Z,{sx:{color:"white"}})})]}),(0,s.jsxs)("div",{className:ne().resumesTile,children:[(0,s.jsx)(oe.Z,{sx:{height:"60px",width:"60px"}}),(0,s.jsxs)("div",{className:ne().titleDate,children:[(0,s.jsx)("span",{children:"Mohammed Khalil CV.jpg"}),(0,s.jsx)("span",{children:"Uploaded on 25/3/2020"})]}),(0,s.jsx)(ce.Z,{"aria-label":"delete",children:(0,s.jsx)(le.Z,{sx:{color:"white"}})})]}),(0,s.jsxs)("div",{className:ne().resumesTile,children:[(0,s.jsx)(re.Z,{sx:{height:"60px",width:"60px"}}),(0,s.jsxs)("div",{className:ne().titleDate,children:[(0,s.jsx)("span",{children:"Mohammed Khalil CV.pdf"}),(0,s.jsx)("span",{children:"Uploaded on 21/4/2022"})]}),(0,s.jsx)(ce.Z,{"aria-label":"delete",children:(0,s.jsx)(le.Z,{sx:{color:"white"}})})]})]})}function ue(){return(0,s.jsxs)("section",{className:c().mainContainer,children:[(0,s.jsx)("h1",{id:"JobAlert",className:c().header,children:"Job Alerts"}),(0,s.jsx)(H,{}),(0,s.jsx)("h1",{id:"Security",className:c().header,children:"Security"}),(0,s.jsx)(K,{}),(0,s.jsx)("h1",{id:"Visibility",className:c().header,children:"Visibility"}),(0,s.jsx)(Q,{}),(0,s.jsx)("h1",{id:"SocialMedia",className:c().header,children:"Social Media"}),(0,s.jsx)(P,{}),(0,s.jsx)("h1",{id:"Appearance",className:c().header,children:"Appearance"}),(0,s.jsx)(E,{}),(0,s.jsx)("h1",{id:"Notifications",className:c().header,children:"Notifications"}),(0,s.jsx)(ee,{}),(0,s.jsx)("h1",{id:"EmailSettings",className:c().header,children:"Email Settings"}),(0,s.jsx)(se,{}),(0,s.jsx)("h1",{id:"Resume",className:c().header,children:"Resumes"}),(0,s.jsx)(de,{})]})}var he=i(7060),pe=i.n(he);function me(e){return(0,s.jsx)("div",{className:pe().mainContainer,children:(0,s.jsxs)("div",{className:pe().tocContainer,children:[(0,s.jsx)("p",{className:pe().title,children:"Settings"}),(0,s.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Job Alerts"===e.selectedSection&&pe().selected),children:"Job Alerts"}),(0,s.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Security"===e.selectedSection&&pe().selected),children:"Security"}),(0,s.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Visibility"===e.selectedSection&&pe().selected),children:"Visibility"}),(0,s.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Social Media"===e.selectedSection&&pe().selected),children:"Social Media"}),(0,s.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Appearance"===e.selectedSection&&pe().selected),children:"Appearance"}),(0,s.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Notifications"===e.selectedSection&&pe().selected),children:"Notifications"}),(0,s.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("EmailSettings"===e.selectedSection&&pe().selected),children:"Email Settings"}),(0,s.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Resumes"===e.selectedSection&&pe().selected),children:"Resumes"})]})})}var xe=i(9077),fe=i.n(xe);function ve(){var e=function(e){if(null!==e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}return!1},t=(0,r.useState)("Job Alerts"),i=t[0],a=t[1];return(0,r.useEffect)((function(){var t=function(){var t=document.getElementById("JobAlert"),i=document.getElementById("Security"),s=document.getElementById("Visibility"),n=document.getElementById("SocialMedia"),r=document.getElementById("Appearance"),l=document.getElementById("Notifications"),o=document.getElementById("Resume"),c=document.getElementById("EmailSettings"),d=e(t),u=e(i),h=e(s),p=e(n),m=e(r),x=e(l),f=e(o),v=e(c);d?a("Job Alerts"):u?a("Security"):h?a("Visibility"):p?a("Social Media"):m?a("Appearance"):x?a("Notifications"):v?a("EmailSettings"):f&&a("Resumes")};return document.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)(n(),{children:(0,s.jsx)("title",{children:"User Settings"})}),(0,s.jsx)(l.Z,{}),(0,s.jsxs)("section",{className:fe().mainPage,children:[(0,s.jsx)(me,{selectedSection:i}),(0,s.jsx)(ue,{})]})]})}},1811:function(e){e.exports={bar:"shared_styles_bar__m2_4l",rightSide:"shared_styles_rightSide__7hjOk",leftSide:"shared_styles_leftSide__TeE3U",textField:"shared_styles_textField__QvjoS",searchButton:"shared_styles_searchButton__U7voq"}},8317:function(e){e.exports={rightButton:"user_header_rightButton__Famef",allRightButtons:"user_header_allRightButtons__PutoN",buttonIcons:"user_header_buttonIcons__WJcpG",iconButtons:"user_header_iconButtons__tRM5Q"}},4320:function(e){e.exports={headtext:"custom_text_field_headtext__B7fPI",textfield:"custom_text_field_textfield__03RiC",container:"custom_text_field_container__HdQXZ"}},5907:function(e){e.exports={appearanceContainer:"appearance_section_appearanceContainer__FbVTb",appearanceTile:"appearance_section_appearanceTile__H_hOh"}},5292:function(e){e.exports={emailSettingsContainer:"email_settings_section_emailSettingsContainer__bJ2ln",emailSettingsTile:"email_settings_section_emailSettingsTile__r4QvY"}},3116:function(e){e.exports={jobAlertsContainer:"job_alerts_section_jobAlertsContainer__LTVg0",jobAlertsTile:"job_alerts_section_jobAlertsTile__i5BrS"}},3857:function(e){e.exports={notificationsContainer:"notifications_section_notificationsContainer__ysoF0",notificationsTile:"notifications_section_notificationsTile__YF6ro"}},6137:function(e){e.exports={resumesContainer:"resumes_section_resumesContainer__eNWqT",resumesTile:"resumes_section_resumesTile__4Ik3F",titleDate:"resumes_section_titleDate__9r3dg"}},1251:function(e){e.exports={securityContainer:"security_section_securityContainer__8nD0M",securityTile:"security_section_securityTile__aGY3G"}},8439:function(e){e.exports={mainContainer:"settings_content_mainContainer__reTlz",header:"settings_content_header__NhOua"}},2411:function(e){e.exports={socialMediaContainer:"social_media_section_socialMediaContainer__IwHCp",socialMediaTile:"social_media_section_socialMediaTile__dt_qr"}},7060:function(e){e.exports={mainContainer:"table_of_contents_mainContainer__4biKK",tocContainer:"table_of_contents_tocContainer__eNdIf",settingsSections:"table_of_contents_settingsSections__elgFb",selected:"table_of_contents_selected__j16Zb",beforeAnimation:"table_of_contents_beforeAnimation__frUqi",title:"table_of_contents_title__v9QiH"}},7146:function(e){e.exports={visibilityContainer:"visibility_section_visibilityContainer__5WSL6",visibilityTile:"visibility_section_visibilityTile__mP6LP"}},9077:function(e){e.exports={mainPage:"settings_mainPage__KKNQR"}}},function(e){e.O(0,[357,360,774,888,179],(function(){return t=5961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);