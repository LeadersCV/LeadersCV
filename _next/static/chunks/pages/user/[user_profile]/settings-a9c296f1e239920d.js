(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{1733:function(e,t,s){"use strict";var i=s(5318);t.Z=void 0;var a=i(s(4938)),n=s(5893),r=(0,a.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=r},4634:function(e,t,s){"use strict";var i=s(5318);t.Z=void 0;var a=i(s(4938)),n=s(5893),r=(0,a.default)((0,n.jsx)("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}),"InsertDriveFile");t.Z=r},2729:function(e,t,s){"use strict";var i=s(5318);t.Z=void 0;var a=i(s(4938)),n=s(5893),r=(0,a.default)((0,n.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Photo");t.Z=r},3023:function(e,t){"use strict";var s,i=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case n:case l:case r:case h:case p:return e;default:switch(e=e&&e.$$typeof){case d:case c:case u:case x:case m:case o:return e;default:return t}}case a:return t}}}s=Symbol.for("react.module.reference")},6607:function(e,t,s){"use strict";s(3023)},5961:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[user_profile]/settings",function(){return s(6501)}])},5654:function(e,t,s){"use strict";s.d(t,{Z:function(){return N}});var i=s(5893),a=s(1163),n=s(7294),r=s(3878),l=s(5854),o=s.n(l),c=s(4229),d=s(5817),u=s(1671),h=s(2684),p=s(5398),m=s(6638),x=s(9320),f=s(4085),v=s(1811),j=s.n(v),_=s(8333),g=s(3321),b=s(3946),y=s(1236),S=s(3540);function N(e){var t=e.isCompany,s=(0,a.useRouter)(),l=(0,n.useState)(s.query.term),v=l[0],N=l[1],C=function(e){"Enter"===e.key&&Z()};(0,n.useEffect)((function(){return document.addEventListener("keydown",C),function(){document.removeEventListener("keydown",C)}}),[]);var Z=function(){s.push({pathname:"/search",query:{term:v}})};return(0,i.jsx)("nav",{className:j().bar,children:(0,i.jsxs)("section",{className:j().leftSide,children:[(0,i.jsx)("div",{style:{paddingLeft:"10px"},children:(0,i.jsx)(r.Z,{width:"175px",height:"45px"})}),(0,i.jsx)("input",{defaultValue:e.term,className:j().textField,spellCheck:"false",placeholder:"Search for anything...",onChange:function(e){return N(e.target.value)}}),(0,i.jsx)("button",{className:j().searchButton,onClick:function(){return Z()},children:"Search"}),(0,i.jsxs)("div",{className:o().allRightButtons,children:[(0,i.jsxs)(g.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(m.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Home"})]}),t?(0,i.jsxs)(g.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(h.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Employees"})]}):(0,i.jsxs)(g.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(u.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Companies"})]}),t?(0,i.jsxs)(g.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(_.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Job Applications"})]}):(0,i.jsxs)(g.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(h.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Projects"})]}),(0,i.jsxs)(g.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=s.asPath.split("/");s.push({pathname:"/user/"+e[2]})},children:[t?(0,i.jsx)(u.Z,{className:o().buttonIcons}):(0,i.jsx)(p.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Profile"})]}),(0,i.jsxs)(g.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=s.asPath.split("/");s.push({pathname:"/user/"+e[2]+"/statistics"})},children:[(0,i.jsx)(f.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Statistics"})]}),(0,i.jsxs)(g.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=s.asPath.split("/");s.push({pathname:"/user/"+e[2]+"/settings"})},children:[(0,i.jsx)(c.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Settings"})]}),(0,i.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,i.jsx)(y.Z,{badgeContent:2,color:"primary",children:(0,i.jsx)(x.Z,{style:{fontSize:"25px"}})})}),(0,i.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,i.jsx)(y.Z,{badgeContent:4,color:"primary",children:(0,i.jsx)(d.Z,{style:{fontSize:"25px"}})})}),(0,i.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,i.jsx)(S.Z,{style:{fontSize:"25px"}})})]})]})})}},4359:function(e,t,s){"use strict";var i=s(5893),a=s(4320),n=s.n(a);t.Z=function(e){return(0,i.jsxs)("div",{className:n().container,children:[!e.dontShowFieldName&&(0,i.jsx)("p",{className:n().headtext,children:e.fieldName}),(0,i.jsx)("input",{className:n().textfield,type:e.type,placeholder:e.placeholder,spellCheck:"false"})]})}},6501:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ve}});var i=s(5893),a=s(9008),n=s.n(a),r=s(7294),l=s(5654),o=s(8439),c=s.n(o),d=s(3366),u=s(7462),h=s(6010),p=s(4780),m=s(1796),x=s(7739),f=s(8216),v=s(7623),j=s(1496),_=s(4867),g=s(1588);function b(e){return(0,_.Z)("MuiToggleButton",e)}var y=(0,g.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]);const S=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],N=(0,j.ZP)(x.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[`size${(0,f.Z)(s.size)}`]]}})((({theme:e,ownerState:t})=>{let s,i="standard"===t.color?e.palette.text.primary:e.palette[t.color].main;return e.vars&&(i="standard"===t.color?e.vars.palette.text.primary:e.vars.palette[t.color].main,s="standard"===t.color?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),(0,u.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,m.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}`]:{color:i,backgroundColor:e.vars?`rgba(${s} / ${e.vars.palette.action.selectedOpacity})`:(0,m.Fq)(i,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${s} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,m.Fq)(i,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${s} / ${e.vars.palette.action.selectedOpacity})`:(0,m.Fq)(i,e.palette.action.selectedOpacity)}}}},"small"===t.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===t.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}));var C=r.forwardRef((function(e,t){const s=(0,v.Z)({props:e,name:"MuiToggleButton"}),{children:a,className:n,color:r="standard",disabled:l=!1,disableFocusRipple:o=!1,fullWidth:c=!1,onChange:m,onClick:x,selected:j,size:_="medium",value:g}=s,y=(0,d.Z)(s,S),C=(0,u.Z)({},s,{color:r,disabled:l,disableFocusRipple:o,fullWidth:c,size:_}),Z=(e=>{const{classes:t,fullWidth:s,selected:i,disabled:a,size:n,color:r}=e,l={root:["root",i&&"selected",a&&"disabled",s&&"fullWidth",`size${(0,f.Z)(n)}`,r]};return(0,p.Z)(l,b,t)})(C);return(0,i.jsx)(N,(0,u.Z)({className:(0,h.Z)(Z.root,n),disabled:l,focusRipple:!o,ref:t,onClick:e=>{x&&(x(e,g),e.defaultPrevented)||m&&m(e,g)},onChange:m,value:g,ownerState:C,"aria-pressed":j},y,{children:a}))}));s(6607);function Z(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}function T(e){return(0,_.Z)("MuiToggleButtonGroup",e)}var w=(0,g.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]);const z=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],O=(0,j.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[{[`& .${w.grouped}`]:t.grouped},{[`& .${w.grouped}`]:t[`grouped${(0,f.Z)(s.orientation)}`]},t.root,"vertical"===s.orientation&&t.vertical,s.fullWidth&&t.fullWidth]}})((({ownerState:e,theme:t})=>(0,u.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${w.grouped}`]:(0,u.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${w.selected} + .${w.grouped}.${w.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${w.selected} + .${w.grouped}.${w.selected}`]:{borderTop:0,marginTop:0}})})));var R=r.forwardRef((function(e,t){const s=(0,v.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:a,className:n,color:l="standard",disabled:o=!1,exclusive:c=!1,fullWidth:m=!1,onChange:x,orientation:j="horizontal",size:_="medium",value:g}=s,b=(0,d.Z)(s,z),y=(0,u.Z)({},s,{disabled:o,fullWidth:m,orientation:j,size:_}),S=(e=>{const{classes:t,orientation:s,fullWidth:i,disabled:a}=e,n={root:["root","vertical"===s&&"vertical",i&&"fullWidth"],grouped:["grouped",`grouped${(0,f.Z)(s)}`,a&&"disabled"]};return(0,p.Z)(n,T,t)})(y),N=(e,t)=>{if(!x)return;const s=g&&g.indexOf(t);let i;g&&s>=0?(i=g.slice(),i.splice(s,1)):i=g?g.concat(t):[t],x(e,i)},C=(e,t)=>{x&&x(e,g===t?null:t)};return(0,i.jsx)(O,(0,u.Z)({role:"group",className:(0,h.Z)(S.root,n),ref:t,ownerState:y},b,{children:r.Children.map(a,(e=>r.isValidElement(e)?r.cloneElement(e,{className:(0,h.Z)(S.grouped,e.props.className),onChange:c?C:N,selected:void 0===e.props.selected?Z(e.props.value,g):e.props.selected,size:e.props.size||_,fullWidth:m,color:e.props.color||l,disabled:e.props.disabled||o}):null))}))})),B=s(5907),A=s.n(B);function E(){var e=(0,r.useState)("Light"),t=e[0],s=e[1];return(0,i.jsx)("section",{className:A().appearanceContainer,children:(0,i.jsxs)("div",{className:A().appearanceTile,children:[(0,i.jsx)("span",{children:"Theme"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){s(t)},"aria-label":"Theme",children:[(0,i.jsx)(C,{value:"Light",children:"Light"}),(0,i.jsx)(C,{value:"Dark",children:"Dark"})]})]})})}var M=s(802),$=s(5084),k=s(4020),I=s(4359),F=s(2411),L=s.n(F);function V(){return(0,i.jsxs)("section",{className:L().socialMediaContainer,children:[(0,i.jsxs)("div",{className:L().socialMediaTile,children:[(0,i.jsx)(M.Z,{fontSize:"large",color:"primary"}),(0,i.jsx)("span",{children:"Facebook"}),(0,i.jsx)(I.Z,{dontShowFieldName:!0,placeholder:"E.g.: www.facebook.com/url"})]}),(0,i.jsxs)("div",{className:L().socialMediaTile,children:[(0,i.jsx)($.Z,{fontSize:"large",color:"primary"}),(0,i.jsx)("span",{children:"Twitter"}),(0,i.jsx)(I.Z,{dontShowFieldName:!0,placeholder:"www.twitter.com/xxxx"})]}),(0,i.jsxs)("div",{className:L().socialMediaTile,children:[(0,i.jsx)(k.Z,{fontSize:"large",color:"primary"}),(0,i.jsx)("span",{children:"Instagram"}),(0,i.jsx)(I.Z,{dontShowFieldName:!0,placeholder:"www.instagram.com/xxxx"})]})]})}var H=s(3116),W=s.n(H);function P(){var e=(0,r.useState)(!1),t=e[0],s=e[1],a=(0,r.useState)(!0),n=a[0],l=a[1],o=(0,r.useState)(!1),c=o[0],d=o[1];return(0,i.jsxs)("section",{className:W().jobAlertsContainer,children:[(0,i.jsxs)("div",{className:W().jobAlertsTile,children:[(0,i.jsx)("span",{children:"Software Engineer - Riyadh , Saudi Arabia - Full Time"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){s(t)},"aria-label":"firstAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]}),(0,i.jsxs)("div",{className:W().jobAlertsTile,children:[(0,i.jsx)("span",{children:"Flutter Developer - Khobar , Saudi Arabia - Remote"})," ",(0,i.jsxs)(R,{size:"small",color:"primary",value:n,exclusive:!0,onChange:function(e,t){l(t)},"aria-label":"secondAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]}),(0,i.jsxs)("div",{className:W().jobAlertsTile,children:[(0,i.jsx)("span",{children:"Front End Developer - Dammam , Saudi Arabia - Part Time"})," ",(0,i.jsxs)(R,{size:"small",color:"primary",value:c,exclusive:!0,onChange:function(e,t){d(t)},"aria-label":"thirdAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]})]})}var D=s(3321),J=s(1251),q=s.n(J);function K(){return(0,i.jsxs)("section",{className:q().securityContainer,children:[(0,i.jsxs)("div",{className:q().securityTile,children:[(0,i.jsx)("span",{children:"Two Factor Authentication"}),(0,i.jsx)(D.Z,{variant:"contained",size:"small",children:"Enable"})]}),(0,i.jsxs)("div",{className:q().securityTile,children:[(0,i.jsx)("span",{children:" Password"}),(0,i.jsx)(D.Z,{variant:"contained",size:"small",children:"Change"})]})]})}var U=s(7146),G=s.n(U);function Q(){var e=(0,r.useState)(!1),t=e[0],s=e[1],a=(0,r.useState)(!0),n=a[0],l=a[1],o=(0,r.useState)(!1),c=o[0],d=o[1],u=function(e,t){d(t)};return(0,i.jsxs)("section",{className:G().visibilityContainer,children:[(0,i.jsxs)("div",{className:G().visibilityTile,children:[(0,i.jsx)("span",{children:"Show Hobbies"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){s(t)},"aria-label":"firstAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]}),(0,i.jsxs)("div",{className:G().visibilityTile,children:[(0,i.jsx)("span",{children:"Show Interests"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:n,exclusive:!0,onChange:function(e,t){l(t)},"aria-label":"secondAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]}),(0,i.jsxs)("div",{className:G().visibilityTile,children:[(0,i.jsx)("span",{children:"Show Skills"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]}),(0,i.jsxs)("div",{className:G().visibilityTile,children:[(0,i.jsx)("span",{children:"Show Certificates"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]}),(0,i.jsxs)("div",{className:G().visibilityTile,children:[(0,i.jsx)("span",{children:"Show Memberships"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]}),(0,i.jsxs)("div",{className:G().visibilityTile,children:[(0,i.jsx)("span",{children:"Hide Read Messages"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]}),(0,i.jsxs)("div",{className:G().visibilityTile,children:[(0,i.jsx)("span",{children:"Hide On Search"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:c,exclusive:!0,onChange:u,"aria-label":"thirdAlert",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]})]})}var Y=s(3857),X=s.n(Y);function ee(){var e=(0,r.useState)(!0),t=e[0],s=e[1];return(0,i.jsx)("section",{className:X().notificationsContainer,children:(0,i.jsxs)("div",{className:X().notificationsTile,children:[(0,i.jsx)("span",{children:"Job Application Status Notifications"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){s(t)},"aria-label":"Theme",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]})})}var te=s(5292),se=s.n(te);function ie(){var e=(0,r.useState)(!0),t=e[0],s=e[1],a=(0,r.useState)(!0),n=a[0],l=a[1];return(0,i.jsxs)("section",{className:se().emailSettingsContainer,children:[(0,i.jsxs)("div",{className:se().emailSettingsTile,children:[(0,i.jsx)("span",{children:"Send Blogs on Email"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:t,exclusive:!0,onChange:function(e,t){s(t)},"aria-label":"blogs",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]}),(0,i.jsxs)("div",{className:se().emailSettingsTile,children:[(0,i.jsx)("span",{children:"Send Job Alerts on Email"}),(0,i.jsxs)(R,{size:"small",color:"primary",value:n,exclusive:!0,onChange:function(e,t){l(t)},"aria-label":"job alerts",children:[(0,i.jsx)(C,{value:!0,children:"On"}),(0,i.jsx)(C,{value:!1,children:"Off"})]})]})]})}var ae=s(6137),ne=s.n(ae),re=s(4634),le=s(1733),oe=s(2729),ce=s(3946);function de(){return(0,i.jsxs)("section",{className:ne().resumesContainer,children:[(0,i.jsxs)("div",{className:ne().resumesTile,children:[(0,i.jsx)(re.Z,{sx:{height:"60px",width:"60px"}}),(0,i.jsxs)("div",{className:ne().titleDate,children:[(0,i.jsx)("span",{children:"Mohammed Khalil CV.pdf"}),(0,i.jsx)("span",{children:"Uploaded on 21/4/2021"})]}),(0,i.jsx)(ce.Z,{"aria-label":"delete",children:(0,i.jsx)(le.Z,{sx:{color:"white"}})})]}),(0,i.jsxs)("div",{className:ne().resumesTile,children:[(0,i.jsx)(oe.Z,{sx:{height:"60px",width:"60px"}}),(0,i.jsxs)("div",{className:ne().titleDate,children:[(0,i.jsx)("span",{children:"Mohammed Khalil CV.jpg"}),(0,i.jsx)("span",{children:"Uploaded on 25/3/2020"})]}),(0,i.jsx)(ce.Z,{"aria-label":"delete",children:(0,i.jsx)(le.Z,{sx:{color:"white"}})})]}),(0,i.jsxs)("div",{className:ne().resumesTile,children:[(0,i.jsx)(re.Z,{sx:{height:"60px",width:"60px"}}),(0,i.jsxs)("div",{className:ne().titleDate,children:[(0,i.jsx)("span",{children:"Mohammed Khalil CV.pdf"}),(0,i.jsx)("span",{children:"Uploaded on 21/4/2022"})]}),(0,i.jsx)(ce.Z,{"aria-label":"delete",children:(0,i.jsx)(le.Z,{sx:{color:"white"}})})]})]})}function ue(){return(0,i.jsxs)("section",{className:c().mainContainer,children:[(0,i.jsx)("h1",{id:"JobAlert",className:c().header,children:"Job Alerts"}),(0,i.jsx)(P,{}),(0,i.jsx)("h1",{id:"Security",className:c().header,children:"Security"}),(0,i.jsx)(K,{}),(0,i.jsx)("h1",{id:"Visibility",className:c().header,children:"Visibility"}),(0,i.jsx)(Q,{}),(0,i.jsx)("h1",{id:"SocialMedia",className:c().header,children:"Social Media"}),(0,i.jsx)(V,{}),(0,i.jsx)("h1",{id:"Appearance",className:c().header,children:"Appearance"}),(0,i.jsx)(E,{}),(0,i.jsx)("h1",{id:"Notifications",className:c().header,children:"Notifications"}),(0,i.jsx)(ee,{}),(0,i.jsx)("h1",{id:"EmailSettings",className:c().header,children:"Email Settings"}),(0,i.jsx)(ie,{}),(0,i.jsx)("h1",{id:"Resume",className:c().header,children:"Resumes"}),(0,i.jsx)(de,{})]})}var he=s(7060),pe=s.n(he);function me(e){return(0,i.jsx)("div",{className:pe().mainContainer,children:(0,i.jsxs)("div",{className:pe().tocContainer,children:[(0,i.jsx)("p",{className:pe().title,children:"Settings"}),(0,i.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Job Alerts"===e.selectedSection&&pe().selected),children:"Job Alerts"}),(0,i.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Security"===e.selectedSection&&pe().selected),children:"Security"}),(0,i.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Visibility"===e.selectedSection&&pe().selected),children:"Visibility"}),(0,i.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Social Media"===e.selectedSection&&pe().selected),children:"Social Media"}),(0,i.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Appearance"===e.selectedSection&&pe().selected),children:"Appearance"}),(0,i.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Notifications"===e.selectedSection&&pe().selected),children:"Notifications"}),(0,i.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("EmailSettings"===e.selectedSection&&pe().selected),children:"Email Settings"}),(0,i.jsx)("span",{className:"".concat(pe().settingsSections," ").concat("Resumes"===e.selectedSection&&pe().selected),children:"Resumes"})]})})}var xe=s(9077),fe=s.n(xe);function ve(){var e=function(e){if(null!==e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}return!1},t=(0,r.useState)("Job Alerts"),s=t[0],a=t[1];return(0,r.useEffect)((function(){var t=function(){var t=document.getElementById("JobAlert"),s=document.getElementById("Security"),i=document.getElementById("Visibility"),n=document.getElementById("SocialMedia"),r=document.getElementById("Appearance"),l=document.getElementById("Notifications"),o=document.getElementById("Resume"),c=document.getElementById("EmailSettings"),d=e(t),u=e(s),h=e(i),p=e(n),m=e(r),x=e(l),f=e(o),v=e(c);d?a("Job Alerts"):u?a("Security"):h?a("Visibility"):p?a("Social Media"):m?a("Appearance"):x?a("Notifications"):v?a("EmailSettings"):f&&a("Resumes")};return document.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(n(),{children:(0,i.jsx)("title",{children:"User Settings"})}),(0,i.jsx)(l.Z,{}),(0,i.jsxs)("section",{className:fe().mainPage,children:[(0,i.jsx)(me,{selectedSection:s}),(0,i.jsx)(ue,{})]})]})}},1811:function(e){e.exports={bar:"shared_styles_bar__m2_4l",rightSide:"shared_styles_rightSide__7hjOk",leftSide:"shared_styles_leftSide__TeE3U",textField:"shared_styles_textField__QvjoS",searchButton:"shared_styles_searchButton__U7voq"}},5854:function(e){e.exports={rightButton:"user_or_company_header_rightButton__IYaKQ",allRightButtons:"user_or_company_header_allRightButtons___c3WY",buttonIcons:"user_or_company_header_buttonIcons__rYoHj",iconButtons:"user_or_company_header_iconButtons__VV9zH"}},4320:function(e){e.exports={headtext:"custom_text_field_headtext__B7fPI",textfield:"custom_text_field_textfield__03RiC",container:"custom_text_field_container__HdQXZ"}},5907:function(e){e.exports={appearanceContainer:"appearance_section_appearanceContainer__FbVTb",appearanceTile:"appearance_section_appearanceTile__H_hOh"}},5292:function(e){e.exports={emailSettingsContainer:"email_settings_section_emailSettingsContainer__bJ2ln",emailSettingsTile:"email_settings_section_emailSettingsTile__r4QvY"}},3116:function(e){e.exports={jobAlertsContainer:"job_alerts_section_jobAlertsContainer__LTVg0",jobAlertsTile:"job_alerts_section_jobAlertsTile__i5BrS"}},3857:function(e){e.exports={notificationsContainer:"notifications_section_notificationsContainer__ysoF0",notificationsTile:"notifications_section_notificationsTile__YF6ro"}},6137:function(e){e.exports={resumesContainer:"resumes_section_resumesContainer__eNWqT",resumesTile:"resumes_section_resumesTile__4Ik3F",titleDate:"resumes_section_titleDate__9r3dg"}},1251:function(e){e.exports={securityContainer:"security_section_securityContainer__8nD0M",securityTile:"security_section_securityTile__aGY3G"}},8439:function(e){e.exports={mainContainer:"settings_content_mainContainer__reTlz",header:"settings_content_header__NhOua"}},2411:function(e){e.exports={socialMediaContainer:"social_media_section_socialMediaContainer__IwHCp",socialMediaTile:"social_media_section_socialMediaTile__dt_qr"}},7060:function(e){e.exports={mainContainer:"table_of_contents_mainContainer__4biKK",tocContainer:"table_of_contents_tocContainer__eNdIf",settingsSections:"table_of_contents_settingsSections__elgFb",selected:"table_of_contents_selected__j16Zb",beforeAnimation:"table_of_contents_beforeAnimation__frUqi",title:"table_of_contents_title__v9QiH"}},7146:function(e){e.exports={visibilityContainer:"visibility_section_visibilityContainer__5WSL6",visibilityTile:"visibility_section_visibilityTile__mP6LP"}},9077:function(e){e.exports={mainPage:"settings_mainPage__KKNQR"}}},function(e){e.O(0,[357,676,774,888,179],(function(){return t=5961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);