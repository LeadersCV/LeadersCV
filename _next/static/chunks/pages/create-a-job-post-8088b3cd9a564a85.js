(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[761],{27036:function(e,t,s){"use strict";var n=s(91941);t.Z=void 0;var a=n(s(64938)),r=s(85893),i=(0,a.default)((0,r.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=i},63343:function(e,t,s){"use strict";var n=s(91941);t.Z=void 0;var a=n(s(64938)),r=s(85893),i=(0,a.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=i},63978:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-a-job-post",function(){return s(51440)}])},49880:function(e,t){"use strict";t.Z={src:"/LeadersCV/_next/static/media/small_logo.e47977f0.png",height:1874,width:1236,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAoklEQVR42mP4udWUAYh9/m6T+f97m4YnAwj83w/GWv93Mlz+v5vBACxoPf+uOMO8l/EM8180MMz6rAIWFFnw2IJhyn19hokPIoXmP3rKMO9xKEPsxqcgXLnoyqsYhlmPnJnnP37PwND5ILTz2Iv/5z5+SGJgOMAmtODxXwaGeY9SVBY93sNQeo8dyF7KOP/xFQaGuY9AeAlQ4D9Q4B7DvEeqABf2TQS1WHH5AAAAAElFTkSuQmCC"}},65654:function(e,t,s){"use strict";s.d(t,{Z:function(){return C}});var n=s(85893),a=s(11163),r=s(67294),i=s(85854),o=s.n(i),c=s(94229),l=s(65817),d=s(1671),h=s(2684),u=s(15398),x=s(76638),p=s(59320),_=s(4085),j=s(11811),m=s.n(j),f=s(28333),b=s(75084),g=s(80562),v=s(41483),y=s(13540),N=s(41664),A=s.n(N),Z=s(25675),S=s.n(Z),B=s(49880);function C(e){var t=e.isCompany,s=(0,a.useRouter)(),i=s.asPath.split("/"),j=(0,r.useState)(s.query.term),N=j[0],Z=j[1],C=function(e){"Enter"===e.key&&P()};(0,r.useEffect)((function(){return document.addEventListener("keydown",C),function(){document.removeEventListener("keydown",C)}}));var P=function(){s.push({pathname:"/search",query:{term:N}})};return(0,n.jsxs)("nav",{className:m().bar,children:[(0,n.jsxs)("section",{className:m().leftSide,children:[(0,n.jsx)("div",{style:{paddingLeft:"10px",paddingTop:"10px",paddingBottom:"10px"},children:(0,n.jsx)(A(),{href:"/",children:(0,n.jsx)(S(),{src:"/"+B.Z.src,width:"25px",height:"35px",alt:"logo",priority:!0,style:{cursor:"pointer",paddingLeft:"10px"}})})}),(0,n.jsx)("input",{defaultValue:e.term,className:m().textField,spellCheck:"false",placeholder:"Search for anything...",onChange:function(e){return Z(e.target.value)}}),(0,n.jsx)("button",{className:m().searchButton,onClick:function(){return P()},children:"Search"})]}),(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:o().allRightButtons,children:[(0,n.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,n.jsx)(x.Z,{className:o().buttonIcons}),(0,n.jsx)("span",{children:"Home"})]}),t?(0,n.jsx)(A(),{href:"/company/"+i[2]+"/employees",children:(0,n.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,n.jsx)(h.Z,{className:o().buttonIcons}),(0,n.jsx)("span",{children:"Employees"})]})}):(0,n.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,n.jsx)(d.Z,{className:o().buttonIcons}),(0,n.jsx)("span",{children:"Companies"})]}),t?(0,n.jsx)(A(),{href:"/company/"+i[2]+"/job-posts",children:(0,n.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,n.jsx)(f.Z,{className:o().buttonIcons}),(0,n.jsx)("span",{children:"Job Posts"})]})}):(0,n.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,n.jsx)(h.Z,{className:o().buttonIcons}),(0,n.jsx)("span",{children:"Projects"})]}),(0,n.jsx)(A(),{href:"user"==i[1]?"/user/"+i[2]:"/company/"+i[2],children:(0,n.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[t?(0,n.jsx)(d.Z,{className:o().buttonIcons}):(0,n.jsx)(u.Z,{className:o().buttonIcons}),(0,n.jsx)("span",{children:"Profile"})]})}),(0,n.jsxs)(b.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=s.asPath.split("/");s.push({pathname:"/user/"+e[2]+"/statistics"})},children:[(0,n.jsx)(_.Z,{className:o().buttonIcons}),(0,n.jsx)("span",{children:"Statistics"})]}),(0,n.jsxs)(b.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=s.asPath.split("/");s.push({pathname:"/user/"+e[2]+"/settings"})},children:[(0,n.jsx)(c.Z,{className:o().buttonIcons}),(0,n.jsx)("span",{children:"Settings"})]}),(0,n.jsx)(A(),{href:"/messaging",children:(0,n.jsx)(g.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,n.jsx)(v.Z,{badgeContent:2,color:"primary",children:(0,n.jsx)(p.Z,{style:{fontSize:"25px"}})})})}),(0,n.jsx)(A(),{href:"/notifications",children:(0,n.jsx)(g.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,n.jsx)(v.Z,{badgeContent:4,color:"primary",children:(0,n.jsx)(l.Z,{style:{fontSize:"25px"}})})})}),(0,n.jsx)(g.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,n.jsx)(y.Z,{style:{fontSize:"25px"}})})]})})]})}},51440:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var n=s(85893),a=s(9008),r=s.n(a),i=s(67294),o=s(65654),c=s(16633),l=s.n(c),d=s(27036),h=s(63343),u=s(75084);function x(){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:"Create A Job Post"})}),(0,n.jsx)(o.Z,{isCompany:!0}),(0,n.jsxs)("section",{className:l().createAJobPostSection,children:[(0,n.jsxs)("div",{className:l().formSection,children:[(0,n.jsx)("span",{children:"Title"}),(0,n.jsx)("input",{className:l().inputField,placeholder:"Write your title here"})]}),(0,n.jsxs)("div",{className:l().formSection,children:[(0,n.jsx)("span",{children:"Job Desciption"}),(0,n.jsx)("textarea",{className:l().areaField,placeholder:"Write your job description here"})]}),(0,n.jsxs)("div",{className:l().formSection,children:[(0,n.jsx)("span",{children:"Job Requirements"}),(0,n.jsx)("textarea",{className:l().areaField,placeholder:"Write your job requirements here"})]}),(0,n.jsxs)("div",{className:l().formSection,children:[(0,n.jsx)("span",{children:"Job Responsibilities"}),(0,n.jsx)("textarea",{className:l().areaField,placeholder:"Write your job responsibilities here"})]}),(0,n.jsxs)("div",{className:l().actionsRow,children:[(0,n.jsx)(u.Z,{variant:"contained",color:"error",startIcon:(0,n.jsx)(h.Z,{}),children:"Cancel"}),(0,n.jsx)(u.Z,{variant:"contained",startIcon:(0,n.jsx)(d.Z,{}),children:"Create"})]})]})]})}},11811:function(e){e.exports={bar:"shared_styles_bar__m2_4l",rightSide:"shared_styles_rightSide__7hjOk",leftSide:"shared_styles_leftSide__TeE3U",textField:"shared_styles_textField__QvjoS",searchButton:"shared_styles_searchButton__U7voq"}},85854:function(e){e.exports={rightButton:"user_or_company_header_rightButton__IYaKQ",allRightButtons:"user_or_company_header_allRightButtons___c3WY",buttonIcons:"user_or_company_header_buttonIcons__rYoHj",iconButtons:"user_or_company_header_iconButtons__VV9zH"}},16633:function(e){e.exports={createAJobPostSection:"create_a_job_post_createAJobPostSection__z96KZ",formSection:"create_a_job_post_formSection__jM_mM",actionsRow:"create_a_job_post_actionsRow__6bASo",inputField:"create_a_job_post_inputField__yBxSQ",areaField:"create_a_job_post_areaField__5z7n3"}}},function(e){e.O(0,[425,180,774,888,179],(function(){return t=63978,e(e.s=t);var t}));var t=e.O();_N_E=t}]);