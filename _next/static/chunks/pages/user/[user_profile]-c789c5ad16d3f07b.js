(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{3161:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[user_profile]",function(){return t(8364)}])},38:function(e,s){"use strict";s.Z={src:"/_next/static/media/user_cover.f9634a32.png",height:360,width:936,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAFklEQVR4nGO0tLb+z4AHMFoRUkDIBAA9+QUPnbez9AAAAABJRU5ErkJggg=="}},3834:function(e,s,t){"use strict";t.d(s,{Z:function(){return g}});var i=t(5893),n=t(3321),a=t(8204),r=t(5819),l=t(87),o=t(1664),c=t.n(o),d=t(4369),u=t.n(d),p=t(7294);function m(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,i=new Array(s);t<s;t++)i[t]=e[t];return i}function x(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,n,a=[],r=!0,l=!1;try{for(t=t.call(e);!(r=(i=t.next()).done)&&(a.push(i.value),!s||a.length!==s);r=!0);}catch(o){l=!0,n=o}finally{try{r||null==t.return||t.return()}finally{if(l)throw n}}return a}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return m(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(){var e=x(p.useState(null),2),s=e[0],t=e[1],o=Boolean(s),d=function(e){t(null),m(e)},m=function(e){};return(0,i.jsxs)("div",{className:u().smallContainer,children:[(0,i.jsx)(n.Z,{id:"basic-button","aria-controls":o?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,onClick:function(e){t(e.currentTarget)},children:(0,i.jsx)(l.Z,{})}),(0,i.jsxs)(a.Z,{id:"basic-menu",anchorEl:s,open:o,onClose:d,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,i.jsx)(r.Z,{onClick:function(){return d("ar")},children:"\u0639\u0631\u0628\u064a"}),(0,i.jsx)(r.Z,{value:"en",onClick:function(){return d("en")},children:"English"})]}),(0,i.jsx)(c(),{href:"/login",children:(0,i.jsx)("a",{className:u().login,children:"Log in"})}),(0,i.jsx)(c(),{href:"/signup",children:(0,i.jsx)("a",{className:u().signup,children:"Sign up"})})]})}var _=t(2460),j=t.n(_);function g(){return(0,i.jsx)("div",{className:j().GuestHeader,children:(0,i.jsx)(h,{})})}},5654:function(e,s,t){"use strict";t.d(s,{Z:function(){return A}});var i=t(5893),n=t(1163),a=t(7294),r=t(3878),l=t(5854),o=t.n(l),c=t(4229),d=t(5817),u=t(1671),p=t(2684),m=t(5398),x=t(6638),h=t(9320),_=t(4085),j=t(1811),g=t.n(j),f=t(8333),b=t(3321),y=t(3946),v=t(1236),N=t(3540);function A(e){var s=e.isCompany,t=(0,n.useRouter)(),l=(0,a.useState)(t.query.term),j=l[0],A=l[1],Z=function(e){"Enter"===e.key&&C()};(0,a.useEffect)((function(){return document.addEventListener("keydown",Z),function(){document.removeEventListener("keydown",Z)}}),[]);var C=function(){t.push({pathname:"/search",query:{term:j}})};return(0,i.jsx)("nav",{className:g().bar,children:(0,i.jsxs)("section",{className:g().leftSide,children:[(0,i.jsx)("div",{style:{paddingLeft:"10px"},children:(0,i.jsx)(r.Z,{width:"175px",height:"45px"})}),(0,i.jsx)("input",{defaultValue:e.term,className:g().textField,spellCheck:"false",placeholder:"Search for anything...",onChange:function(e){return A(e.target.value)}}),(0,i.jsx)("button",{className:g().searchButton,onClick:function(){return C()},children:"Search"}),(0,i.jsxs)("div",{className:o().allRightButtons,children:[(0,i.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(x.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Home"})]}),s?(0,i.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(p.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Employees"})]}):(0,i.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(u.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Companies"})]}),s?(0,i.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(f.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Job Applications"})]}):(0,i.jsxs)(b.Z,{variant:"text",className:o().rightButton,children:[(0,i.jsx)(p.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Projects"})]}),(0,i.jsxs)(b.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=t.asPath.split("/");t.push({pathname:"/user/"+e[2]})},children:[s?(0,i.jsx)(u.Z,{className:o().buttonIcons}):(0,i.jsx)(m.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Profile"})]}),(0,i.jsxs)(b.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=t.asPath.split("/");t.push({pathname:"/user/"+e[2]+"/statistics"})},children:[(0,i.jsx)(_.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Statistics"})]}),(0,i.jsxs)(b.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=t.asPath.split("/");t.push({pathname:"/user/"+e[2]+"/settings"})},children:[(0,i.jsx)(c.Z,{className:o().buttonIcons}),(0,i.jsx)("span",{children:"Settings"})]}),(0,i.jsx)(y.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,i.jsx)(v.Z,{badgeContent:2,color:"primary",children:(0,i.jsx)(h.Z,{style:{fontSize:"25px"}})})}),(0,i.jsx)(y.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,i.jsx)(v.Z,{badgeContent:4,color:"primary",children:(0,i.jsx)(d.Z,{style:{fontSize:"25px"}})})}),(0,i.jsx)(y.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,i.jsx)(N.Z,{style:{fontSize:"25px"}})})]})]})})}},8364:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return oe}});var i=t(5893),n=t(9661),a=t(8032),r=t(5675),l=t.n(r),o=t(7266),c=t.n(o),d=t(38),u=t(7957),p=(t(3834),t(5654)),m=t(7058),x=t.n(m),h=t(3210),_=t.n(h);function j(e){return(0,i.jsxs)("section",{className:x().mainContainer,children:[(0,i.jsxs)("div",{className:x().titleAndActions,children:[(0,i.jsx)("div",{className:x().title,children:"About"}),e.isDifferentUser?null:(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(u.Z,{sx:{color:"white"}})})]}),(0,i.jsx)("p",{className:_().aboutContent,children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})]})}var g=t(6540),f=t(4313),b=(t(8444),t(8333)),y=t(195),v=t.n(y);function N(e){return(0,i.jsxs)(f.VerticalTimelineElement,{date:e.date,dateClassName:v().date,icon:(0,i.jsx)(b.Z,{sx:{color:"white"}}),iconStyle:{backgroundColor:"#002463"},contentArrowStyle:{borderRight:"7px solid #002463"},className:v().box,contentStyle:{backgroundColor:"#002463",boxShadow:"0px 0px 14px 1px gray"},children:[(0,i.jsx)("h3",{className:"vertical-timeline-element-title",children:e.jobTitle}),(0,i.jsx)("h6",{className:"vertical-timeline-element-subtitle",children:e.company}),(0,i.jsx)("p",{className:v().experienceContent,children:e.description})]})}function A(e){return(0,i.jsxs)("section",{className:x().mainContainer,children:[(0,i.jsxs)("div",{className:x().titleAndActions,children:[(0,i.jsx)("div",{className:x().title,children:"Experience"}),e.isDifferentUser?null:(0,i.jsxs)("span",{className:x().actions,children:[(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(g.Z,{sx:{color:"white"}})}),(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,i.jsxs)(f.VerticalTimeline,{lineColor:"#002463",animate:!0,children:[(0,i.jsx)(N,{jobTitle:"Flutter Developer",company:"Mham International IT",date:"07/3/2021 - Current",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum temporibus, quia, unde ut ex mollitia libero voluptates, recusandae nihil similique?"}),(0,i.jsx)(N,{jobTitle:"Software Engineer",company:"Mham International IT",date:"10/04/2021 - 07/08/2021",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum temporibus, quia, unde ut ex mollitia libero voluptates, recusandae nihil similique?"}),(0,i.jsx)(N,{jobTitle:"Front End Developer",company:"Mham International IT",date:"07/3/2021 - Current",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum temporibus, quia, unde ut ex mollitia libero voluptates, recusandae nihil similique?"}),(0,i.jsx)(N,{jobTitle:"BackEnd Developer",company:"Mham International IT",date:"07/3/2021 - Current",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum temporibus, quia, unde ut ex mollitia libero voluptates, recusandae nihil similique?"})]})]})}var Z=t(7654),C=t.n(Z);function S(e){return(0,i.jsxs)("div",{className:C().educationContainer,children:[(0,i.jsx)("span",{className:C().specialty,children:e.specialty}),(0,i.jsx)("span",{className:C().university,children:e.university}),(0,i.jsx)("span",{className:C().date,children:e.date}),(0,i.jsxs)("span",{className:C().gpa,children:["GPA: ",e.gpa]})]})}function w(e){return(0,i.jsxs)("section",{className:x().mainContainer,children:[(0,i.jsxs)("div",{className:x().titleAndActions,children:[(0,i.jsx)("div",{className:x().title,children:"Education"}),e.isDifferentUser?null:(0,i.jsxs)("span",{className:x().actions,children:[(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(g.Z,{sx:{color:"white"}})}),(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,i.jsx)(S,{specialty:"Software Engineering",university:"King Fahad University Of Petroleum And Minerals",date:"2016 - 2020",gpa:"3.79"}),(0,i.jsx)("hr",{style:{width:"50%",margin:"0px"}}),(0,i.jsx)(S,{specialty:"Software Engineering",university:"King Fahad University Of Petroleum And Minerals",date:"2016 - 2020",gpa:"3.79"}),(0,i.jsx)("hr",{style:{width:"50%",margin:"0px"}}),(0,i.jsx)(S,{specialty:"Software Engineering",university:"King Fahad University Of Petroleum And Minerals",date:"2016 - 2020",gpa:"3.79"}),(0,i.jsx)("hr",{style:{width:"50%",margin:"0px"}}),(0,i.jsx)(S,{specialty:"Software Engineering",university:"King Fahad University Of Petroleum And Minerals",date:"2016 - 2020",gpa:"3.79"})," ",(0,i.jsx)("hr",{style:{width:"50%",margin:"0px"}})]})}var k=t(218),D=t.n(k),E=t(3321);function P(e){return(0,i.jsxs)("div",{className:D().jobSuggestion,children:[(0,i.jsx)(n.Z,{sx:{width:56,height:56},alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"}),(0,i.jsxs)("div",{className:D().jobDetails,children:[(0,i.jsx)("span",{className:D().title,children:e.job}),(0,i.jsx)("span",{className:D().company,children:e.company})]}),(0,i.jsx)(E.Z,{size:"small",variant:"outlined",sx:{margin:"0px 8px"},children:"Details"}),(0,i.jsx)(E.Z,{size:"small",variant:"contained",children:"Apply"})]})}var I=t(6680),B=t.n(I);function z(e){return(0,i.jsxs)("div",{className:B().projectMemberSuggestion,children:[(0,i.jsx)(n.Z,{sx:{width:56,height:56},alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"}),(0,i.jsxs)("div",{className:B().memberDetails,children:[(0,i.jsx)("span",{className:B().title,children:e.name}),(0,i.jsx)("span",{className:B().company,children:e.job}),(0,i.jsxs)("span",{className:B().suggestion,children:["Suggested for ",e.job," role"]})]}),(0,i.jsx)(E.Z,{size:"small",variant:"outlined",sx:{margin:"0px 8px"},children:"View"}),(0,i.jsx)(E.Z,{size:"small",variant:"contained",children:"Invite"})]})}var M=t(8996),U=t.n(M);function L(){return(0,i.jsxs)("section",{className:U().mainSection,children:[(0,i.jsxs)("div",{className:U().container,children:[(0,i.jsx)("h3",{children:"Available Jobs"}),(0,i.jsx)(P,{job:"Flutter Developer",company:"Amazon"}),(0,i.jsx)(P,{job:"Software Engineer",company:"Google"}),(0,i.jsx)(P,{job:"Java Developer",company:"Oracle"}),(0,i.jsx)(P,{job:"Laravel Developer",company:"Mham"})]}),(0,i.jsxs)("div",{className:U().container,children:[(0,i.jsx)("h3",{children:"Project Member Suggestions"}),(0,i.jsx)(z,{name:"Ibrahim",job:"Developer"}),(0,i.jsx)(z,{name:"Mohammed",job:"Recruiter"}),(0,i.jsx)(z,{name:"Khalil",job:"Manager"})]})]})}var T=t(7918),V=t(6214),F=t(8629),q=t(5118),G=t(8805),R=t(5810),J=t(3505),O=t(9219);function H(e){return(0,i.jsxs)("section",{className:x().mainContainer,children:[(0,i.jsxs)("div",{className:x().titleAndActions,children:[(0,i.jsx)("div",{className:x().title,children:"Skills"}),e.isDifferentUser?null:(0,i.jsxs)("span",{className:x().actions,children:[(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(g.Z,{sx:{color:"white"}})}),(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,i.jsxs)("div",{className:x().wrapContainer,children:[(0,i.jsx)(T.Z,{label:"Front End Web Development",icon:(0,i.jsx)(V.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"HTML",icon:(0,i.jsx)(F.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"CSS",icon:(0,i.jsx)(q.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"Javascript",icon:(0,i.jsx)(G.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"Django",icon:(0,i.jsx)(O.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"Python",icon:(0,i.jsx)(J.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"Flutter",icon:(0,i.jsx)(R.Z,{}),color:"primary",className:x().interestAndSkillChips})]})]})}var Y=t(7648),K=t(6536),Q=t(1872),X=t(8176),W=t(4682);function $(e){return(0,i.jsxs)("section",{className:x().mainContainer,children:[(0,i.jsxs)("div",{className:x().titleAndActions,children:[(0,i.jsx)("div",{className:x().title,children:"Interests"}),e.isDifferentUser?null:(0,i.jsxs)("span",{className:x().actions,children:[(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(g.Z,{sx:{color:"white"}})}),(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,i.jsxs)("div",{className:x().wrapContainer,children:[(0,i.jsx)(T.Z,{label:"Software",icon:(0,i.jsx)(V.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"Web Development",icon:(0,i.jsx)(Y.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"Mobile App Development",icon:(0,i.jsx)(K.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"Algorithms",icon:(0,i.jsx)(X.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"Statistics",icon:(0,i.jsx)(Q.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,i.jsx)(T.Z,{label:"Data Science",icon:(0,i.jsx)(W.Z,{}),color:"primary",className:x().interestAndSkillChips})]})]})}var ee=t(8210),se=t.n(ee),te=t(7565),ie=t.n(te);function ne(e){return(0,i.jsxs)("div",{className:ie().card,children:[(0,i.jsxs)("span",{className:ie().titleAndDate,children:[(0,i.jsx)("span",{className:ie().title,children:e.title}),(0,i.jsxs)("span",{className:ie().date,children:["(",e.date,")"]})]}),(0,i.jsx)("span",{className:ie().description,children:e.description})]})}function ae(e){return(0,i.jsxs)("section",{className:se().projectsContainer,children:[(0,i.jsxs)("div",{className:x().titleAndActions,children:[(0,i.jsx)("div",{className:x().title,children:"Projects"}),e.isDifferentUser?null:(0,i.jsxs)("span",{className:x().actions,children:[(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(g.Z,{sx:{color:"white"}})}),(0,i.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,i.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,i.jsxs)("div",{className:se().projectsList,children:[(0,i.jsx)(ne,{title:"Determined",description:"A project that talks about app usage , goals and other stuff",date:"Sep 2021 - Aug 2022"}),(0,i.jsx)("hr",{style:{width:"50%",margin:"0px 12px"}}),(0,i.jsx)(ne,{title:"Determined",description:"A project that talks about app usage , goals and other stuff",date:"Jan 2019 - Aug 2021"}),(0,i.jsx)("hr",{style:{width:"50%",margin:"0px 12px"}}),(0,i.jsx)(ne,{title:"Determined",description:"A project that talks about app usage , goals and other stuff",date:"Mar 2018 - Aug 2020"}),(0,i.jsx)("hr",{style:{width:"50%",margin:"0px 12px"}}),(0,i.jsx)(ne,{title:"Determined",description:"A project that talks about app usage , goals and other stuff",date:"Feb 2015 - Aug 2020"}),(0,i.jsx)("hr",{style:{width:"50%",margin:"0px 12px"}})]})]})}var re=t(9008),le=t.n(re);function oe(){return(0,i.jsxs)("section",{className:c().mainPage,children:[(0,i.jsx)(le(),{children:(0,i.jsx)("title",{children:"Mohammeds Profile"})}),(0,i.jsx)(p.Z,{}),(0,i.jsxs)("div",{className:c().mainContainer,children:[(0,i.jsxs)("main",{className:c().profileContainer,children:[(0,i.jsxs)("section",{className:c().coverAndProfileSection,children:[(0,i.jsx)(l(),{src:"/"+d.Z.src,alt:"cover",layout:"fill",objectFit:"cover",style:{borderRadius:"25px 25px 0px 0px"},priority:!0}),(0,i.jsx)(n.Z,{className:c().profilePicture}),(0,i.jsx)(a.Z,{size:"medium","aria-label":"edit",className:c().editCoverButton,children:(0,i.jsx)(u.Z,{color:"primary"})})]}),(0,i.jsxs)("section",{className:c().detailsSection,children:[(0,i.jsx)("span",{className:c().fullName,children:" Mohammed K. Abu Arida"}),(0,i.jsx)("span",{className:c().jobTitle,children:"Software Engineer"}),(0,i.jsx)("span",{className:c().company,children:"Mham IT International"})]}),(0,i.jsx)(j,{isDifferentUser:!1}),(0,i.jsx)(A,{isDifferentUser:!1}),(0,i.jsx)(w,{isDifferentUser:!1}),(0,i.jsx)(ae,{isDifferentUser:!1}),(0,i.jsxs)("div",{className:c().interestsAndSkils,children:[(0,i.jsx)($,{isDifferentUser:!1}),(0,i.jsx)(H,{isDifferentUser:!1})]})]}),(0,i.jsx)(L,{})]})]})}},2460:function(e){e.exports={GuestHeader:"headers___footers_GuestHeader__Yd_J6"}},1811:function(e){e.exports={bar:"shared_styles_bar__m2_4l",rightSide:"shared_styles_rightSide__7hjOk",leftSide:"shared_styles_leftSide__TeE3U",textField:"shared_styles_textField__QvjoS",searchButton:"shared_styles_searchButton__U7voq"}},5854:function(e){e.exports={rightButton:"user_or_company_header_rightButton__IYaKQ",allRightButtons:"user_or_company_header_allRightButtons___c3WY",buttonIcons:"user_or_company_header_buttonIcons__rYoHj",iconButtons:"user_or_company_header_iconButtons__VV9zH"}},4369:function(e){e.exports={smallContainer:"login_signup_buttons_smallContainer___f7lY",login:"login_signup_buttons_login__XdRX4",signup:"login_signup_buttons_signup__Sk8mR",languageDropDown:"login_signup_buttons_languageDropDown__PJP2Q",dropDown:"login_signup_buttons_dropDown__fCU17",menu:"login_signup_buttons_menu__a0Ee6",languageButtons:"login_signup_buttons_languageButtons__37iJx"}},3210:function(e){e.exports={aboutContent:"about_section_aboutContent__Pa3p8"}},7654:function(e){e.exports={educationContainer:"education_container_educationContainer__yyAVP",specialty:"education_container_specialty__z6EI3",university:"education_container_university__ixxGJ",date:"education_container_date__GXv2Y",gpa:"education_container_gpa__VAVbC"}},195:function(e){e.exports={box:"experience_timeline_element_box__SWLGL",date:"experience_timeline_element_date__PyCGl",experienceContent:"experience_timeline_element_experienceContent__y6cVQ"}},218:function(e){e.exports={jobSuggestion:"job_suggestion_jobSuggestion__TGCXU",jobDetails:"job_suggestion_jobDetails__avWor",title:"job_suggestion_title__mJMvc",company:"job_suggestion_company__bnipe"}},7565:function(e){e.exports={card:"project_card_card__22Mdl",title:"project_card_title__tL67F",description:"project_card_description__hj0uG",date:"project_card_date__3oOvd",titleAndDate:"project_card_titleAndDate__DfZXp"}},6680:function(e){e.exports={projectMemberSuggestion:"project_member_suggestion_projectMemberSuggestion__zBvAZ",memberDetails:"project_member_suggestion_memberDetails__lsf4Q",title:"project_member_suggestion_title__4emdT",company:"project_member_suggestion_company__L6yzb",suggestion:"project_member_suggestion_suggestion__0z5hK"}},8210:function(e){e.exports={projectsContainer:"projects_section_projectsContainer___czt2",title:"projects_section_title__Vf14g",projectsList:"projects_section_projectsList__vgpSu"}},7058:function(e){e.exports={titleAndActions:"shared_style_titleAndActions__FiGv5",mainContainer:"shared_style_mainContainer__IEiiY",title:"shared_style_title__WkIYL",actions:"shared_style_actions__ysz85",wrapContainer:"shared_style_wrapContainer__IQGpA",interestAndSkillChips:"shared_style_interestAndSkillChips__kWorJ"}},8996:function(e){e.exports={mainSection:"suggestions_section_mainSection__XwXaC",container:"suggestions_section_container__cbL5s"}},7266:function(e){e.exports={mainPage:"user_profile_mainPage__zUCPd",coverAndProfileSection:"user_profile_coverAndProfileSection__9MaaG",profilePicture:"user_profile_profilePicture__bLFu6",detailsSection:"user_profile_detailsSection__6gqDj",editCoverButton:"user_profile_editCoverButton__meNrr",editProfilePicButton:"user_profile_editProfilePicButton__kSLm4",fullName:"user_profile_fullName__nVNPb",jobTitle:"user_profile_jobTitle__eNEH3",company:"user_profile_company__ceHT9",mainContainer:"user_profile_mainContainer__YqMEp",profileContainer:"user_profile_profileContainer__ZJvSL",interestsAndSkils:"user_profile_interestsAndSkils__VP_4Q"}}},function(e){e.O(0,[357,579,528,676,430,774,888,179],(function(){return s=3161,e(e.s=s);var s}));var s=e.O();_N_E=s}]);