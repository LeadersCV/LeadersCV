(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{3161:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[user_profile]",function(){return i(2142)}])},3834:function(e,s,i){"use strict";i.d(s,{Z:function(){return g}});var t=i(5893),n=i(3321),a=i(8204),r=i(5819),l=i(87),o=i(1664),c=i.n(o),d=i(4369),u=i.n(d),p=i(7294);function m(e,s){(null==s||s>e.length)&&(s=e.length);for(var i=0,t=new Array(s);i<s;i++)t[i]=e[i];return t}function x(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var t,n,a=[],r=!0,l=!1;try{for(i=i.call(e);!(r=(t=i.next()).done)&&(a.push(t.value),!s||a.length!==s);r=!0);}catch(o){l=!0,n=o}finally{try{r||null==i.return||i.return()}finally{if(l)throw n}}return a}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return m(e,s);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return m(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(){var e=x(p.useState(null),2),s=e[0],i=e[1],o=Boolean(s),d=function(e){i(null),m(e)},m=function(e){};return(0,t.jsxs)("div",{className:u().smallContainer,children:[(0,t.jsx)(n.Z,{id:"basic-button","aria-controls":o?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,onClick:function(e){i(e.currentTarget)},children:(0,t.jsx)(l.Z,{})}),(0,t.jsxs)(a.Z,{id:"basic-menu",anchorEl:s,open:o,onClose:d,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,t.jsx)(r.Z,{onClick:function(){return d("ar")},children:"\u0639\u0631\u0628\u064a"}),(0,t.jsx)(r.Z,{value:"en",onClick:function(){return d("en")},children:"English"})]}),(0,t.jsx)(c(),{href:"/login",children:(0,t.jsx)("a",{className:u().login,children:"Log in"})}),(0,t.jsx)(c(),{href:"/signup",children:(0,t.jsx)("a",{className:u().signup,children:"Sign up"})})]})}var _=i(2460),j=i.n(_);function g(){return(0,t.jsx)("div",{className:j().GuestHeader,children:(0,t.jsx)(h,{})})}},4709:function(e,s,i){"use strict";i.d(s,{Z:function(){return N}});var t=i(5893),n=i(1163),a=i(7294),r=i(3878),l=i(8317),o=i.n(l),c=i(4229),d=i(5817),u=i(1671),p=i(2684),m=i(5398),x=i(6638),h=i(9320),_=i(4085),j=i(1811),g=i.n(j),f=i(3321),b=i(3946),y=i(1236),v=i(3540);function N(e){var s=(0,n.useRouter)(),i=(0,a.useState)(s.query.term),l=i[0],j=i[1],N=function(e){"Enter"===e.key&&Z()};(0,a.useEffect)((function(){return document.addEventListener("keydown",N),function(){document.removeEventListener("keydown",N)}}),[]);var Z=function(){s.push({pathname:"/search",query:{term:l}})};return(0,t.jsx)("nav",{className:g().bar,children:(0,t.jsxs)("section",{className:g().leftSide,children:[(0,t.jsx)("div",{style:{paddingLeft:"10px"},children:(0,t.jsx)(r.Z,{width:"175px",height:"45px"})}),(0,t.jsx)("input",{defaultValue:e.term,className:g().textField,spellCheck:"false",placeholder:"Search for anything...",onChange:function(e){return j(e.target.value)}}),(0,t.jsx)("button",{className:g().searchButton,onClick:function(){return Z()},children:"Search"}),(0,t.jsxs)("div",{className:o().allRightButtons,children:[(0,t.jsxs)(f.Z,{variant:"text",className:o().rightButton,children:[(0,t.jsx)(x.Z,{className:o().buttonIcons}),(0,t.jsx)("span",{children:"Home"})]}),(0,t.jsxs)(f.Z,{variant:"text",className:o().rightButton,children:[(0,t.jsx)(u.Z,{className:o().buttonIcons}),(0,t.jsx)("span",{children:"Companies"})]}),(0,t.jsxs)(f.Z,{variant:"text",className:o().rightButton,children:[(0,t.jsx)(p.Z,{className:o().buttonIcons}),(0,t.jsx)("span",{children:"Projects"})]}),(0,t.jsxs)(f.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=s.asPath.split("/");s.push({pathname:"/user/"+e[2]})},children:[(0,t.jsx)(m.Z,{className:o().buttonIcons}),(0,t.jsx)("span",{children:"Profile"})]}),(0,t.jsxs)(f.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=s.asPath.split("/");s.push({pathname:"/user/"+e[2]+"/statistics"})},children:[(0,t.jsx)(_.Z,{className:o().buttonIcons}),(0,t.jsx)("span",{children:"Statistics"})]}),(0,t.jsxs)(f.Z,{variant:"text",className:o().rightButton,onClick:function(){var e=s.asPath.split("/");s.push({pathname:"/user/"+e[2]+"/settings"})},children:[(0,t.jsx)(c.Z,{className:o().buttonIcons}),(0,t.jsx)("span",{children:"Settings"})]}),(0,t.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,t.jsx)(y.Z,{badgeContent:2,color:"primary",children:(0,t.jsx)(h.Z,{style:{fontSize:"25px"}})})}),(0,t.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,t.jsx)(y.Z,{badgeContent:4,color:"primary",children:(0,t.jsx)(d.Z,{style:{fontSize:"25px"}})})}),(0,t.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,t.jsx)(v.Z,{style:{fontSize:"25px"}})})]})]})})}},2142:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return oe}});var t=i(5893),n=i(9661),a=i(8032),r=i(5675),l=i.n(r),o=i(7266),c=i.n(o),d="/_next/static/media/user_cover.f9634a32.png",u=i(7957),p=(i(3834),i(4709)),m=i(7058),x=i.n(m),h=i(3210),_=i.n(h);function j(e){return(0,t.jsxs)("section",{className:x().mainContainer,children:[(0,t.jsxs)("div",{className:x().titleAndActions,children:[(0,t.jsx)("div",{className:x().title,children:"About"}),e.isDifferentUser?null:(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(u.Z,{sx:{color:"white"}})})]}),(0,t.jsx)("p",{className:_().aboutContent,children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})]})}var g=i(6540),f=i(4313),b=(i(8444),i(8333)),y=i(195),v=i.n(y);function N(e){return(0,t.jsxs)(f.VerticalTimelineElement,{date:e.date,dateClassName:v().date,icon:(0,t.jsx)(b.Z,{sx:{color:"white"}}),iconStyle:{backgroundColor:"#002463"},contentArrowStyle:{borderRight:"7px solid #002463"},className:v().box,contentStyle:{backgroundColor:"#002463",boxShadow:"0px 0px 14px 1px gray"},children:[(0,t.jsx)("h3",{className:"vertical-timeline-element-title",children:e.jobTitle}),(0,t.jsx)("h6",{className:"vertical-timeline-element-subtitle",children:e.company}),(0,t.jsx)("p",{className:v().experienceContent,children:e.description})]})}function Z(e){return(0,t.jsxs)("section",{className:x().mainContainer,children:[(0,t.jsxs)("div",{className:x().titleAndActions,children:[(0,t.jsx)("div",{className:x().title,children:"Experience"}),e.isDifferentUser?null:(0,t.jsxs)("span",{className:x().actions,children:[(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(g.Z,{sx:{color:"white"}})}),(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,t.jsxs)(f.VerticalTimeline,{lineColor:"#002463",animate:!0,children:[(0,t.jsx)(N,{jobTitle:"Flutter Developer",company:"Mham International IT",date:"07/3/2021 - Current",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum temporibus, quia, unde ut ex mollitia libero voluptates, recusandae nihil similique?"}),(0,t.jsx)(N,{jobTitle:"Software Engineer",company:"Mham International IT",date:"10/04/2021 - 07/08/2021",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum temporibus, quia, unde ut ex mollitia libero voluptates, recusandae nihil similique?"}),(0,t.jsx)(N,{jobTitle:"Front End Developer",company:"Mham International IT",date:"07/3/2021 - Current",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum temporibus, quia, unde ut ex mollitia libero voluptates, recusandae nihil similique?"}),(0,t.jsx)(N,{jobTitle:"BackEnd Developer",company:"Mham International IT",date:"07/3/2021 - Current",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate atque eius pariatur aut soluta nemo ratione expedita? Explicabo harum temporibus, quia, unde ut ex mollitia libero voluptates, recusandae nihil similique?"})]})]})}var C=i(7654),S=i.n(C);function A(e){return(0,t.jsxs)("div",{className:S().educationContainer,children:[(0,t.jsx)("span",{className:S().specialty,children:e.specialty}),(0,t.jsx)("span",{className:S().university,children:e.university}),(0,t.jsx)("span",{className:S().date,children:e.date}),(0,t.jsxs)("span",{className:S().gpa,children:["GPA: ",e.gpa]})]})}function w(e){return(0,t.jsxs)("section",{className:x().mainContainer,children:[(0,t.jsxs)("div",{className:x().titleAndActions,children:[(0,t.jsx)("div",{className:x().title,children:"Education"}),e.isDifferentUser?null:(0,t.jsxs)("span",{className:x().actions,children:[(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(g.Z,{sx:{color:"white"}})}),(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,t.jsx)(A,{specialty:"Software Engineering",university:"King Fahad University Of Petroleum And Minerals",date:"2016 - 2020",gpa:"3.79"}),(0,t.jsx)("hr",{style:{width:"50%",margin:"0px"}}),(0,t.jsx)(A,{specialty:"Software Engineering",university:"King Fahad University Of Petroleum And Minerals",date:"2016 - 2020",gpa:"3.79"}),(0,t.jsx)("hr",{style:{width:"50%",margin:"0px"}}),(0,t.jsx)(A,{specialty:"Software Engineering",university:"King Fahad University Of Petroleum And Minerals",date:"2016 - 2020",gpa:"3.79"}),(0,t.jsx)("hr",{style:{width:"50%",margin:"0px"}}),(0,t.jsx)(A,{specialty:"Software Engineering",university:"King Fahad University Of Petroleum And Minerals",date:"2016 - 2020",gpa:"3.79"})," ",(0,t.jsx)("hr",{style:{width:"50%",margin:"0px"}})]})}var k=i(218),D=i.n(k),P=i(3321);function E(e){return(0,t.jsxs)("div",{className:D().jobSuggestion,children:[(0,t.jsx)(n.Z,{sx:{width:56,height:56},alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"}),(0,t.jsxs)("div",{className:D().jobDetails,children:[(0,t.jsx)("span",{className:D().title,children:e.job}),(0,t.jsx)("span",{className:D().company,children:e.company})]}),(0,t.jsx)(P.Z,{size:"small",variant:"outlined",sx:{margin:"0px 8px"},children:"Details"}),(0,t.jsx)(P.Z,{size:"small",variant:"contained",children:"Apply"})]})}var I=i(6680),M=i.n(I);function z(e){return(0,t.jsxs)("div",{className:M().projectMemberSuggestion,children:[(0,t.jsx)(n.Z,{sx:{width:56,height:56},alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"}),(0,t.jsxs)("div",{className:M().memberDetails,children:[(0,t.jsx)("span",{className:M().title,children:e.name}),(0,t.jsx)("span",{className:M().company,children:e.job}),(0,t.jsxs)("span",{className:M().suggestion,children:["Suggested for ",e.job," role"]})]}),(0,t.jsx)(P.Z,{size:"small",variant:"outlined",sx:{margin:"0px 8px"},children:"View"}),(0,t.jsx)(P.Z,{size:"small",variant:"contained",children:"Invite"})]})}var B=i(8996),L=i.n(B);function T(){return(0,t.jsxs)("section",{className:L().mainSection,children:[(0,t.jsxs)("div",{className:L().container,children:[(0,t.jsx)("h3",{children:"Available Jobs"}),(0,t.jsx)(E,{job:"Flutter Developer",company:"Amazon"}),(0,t.jsx)(E,{job:"Software Engineer",company:"Google"}),(0,t.jsx)(E,{job:"Java Developer",company:"Oracle"}),(0,t.jsx)(E,{job:"Laravel Developer",company:"Mham"})]}),(0,t.jsxs)("div",{className:L().container,children:[(0,t.jsx)("h3",{children:"Project Member Suggestions"}),(0,t.jsx)(z,{name:"Ibrahim",job:"Developer"}),(0,t.jsx)(z,{name:"Mohammed",job:"Recruiter"}),(0,t.jsx)(z,{name:"Khalil",job:"Manager"})]})]})}var U=i(7918),F=i(6214),q=i(8629),V=i(5118),G=i(8805),J=i(5810),R=i(3505),O=i(9219);function X(e){return(0,t.jsxs)("section",{className:x().mainContainer,children:[(0,t.jsxs)("div",{className:x().titleAndActions,children:[(0,t.jsx)("div",{className:x().title,children:"Skills"}),e.isDifferentUser?null:(0,t.jsxs)("span",{className:x().actions,children:[(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(g.Z,{sx:{color:"white"}})}),(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,t.jsxs)("div",{className:x().wrapContainer,children:[(0,t.jsx)(U.Z,{label:"Front End Web Development",icon:(0,t.jsx)(F.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"HTML",icon:(0,t.jsx)(q.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"CSS",icon:(0,t.jsx)(V.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"Javascript",icon:(0,t.jsx)(G.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"Django",icon:(0,t.jsx)(O.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"Python",icon:(0,t.jsx)(R.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"Flutter",icon:(0,t.jsx)(J.Z,{}),color:"primary",className:x().interestAndSkillChips})]})]})}var H=i(7648),K=i(6536),Q=i(1872),W=i(8176),Y=i(4682);function $(e){return(0,t.jsxs)("section",{className:x().mainContainer,children:[(0,t.jsxs)("div",{className:x().titleAndActions,children:[(0,t.jsx)("div",{className:x().title,children:"Interests"}),e.isDifferentUser?null:(0,t.jsxs)("span",{className:x().actions,children:[(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(g.Z,{sx:{color:"white"}})}),(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,t.jsxs)("div",{className:x().wrapContainer,children:[(0,t.jsx)(U.Z,{label:"Software",icon:(0,t.jsx)(F.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"Web Development",icon:(0,t.jsx)(H.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"Mobile App Development",icon:(0,t.jsx)(K.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"Algorithms",icon:(0,t.jsx)(W.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"Statistics",icon:(0,t.jsx)(Q.Z,{}),color:"primary",className:x().interestAndSkillChips}),(0,t.jsx)(U.Z,{label:"Data Science",icon:(0,t.jsx)(Y.Z,{}),color:"primary",className:x().interestAndSkillChips})]})]})}var ee=i(8210),se=i.n(ee),ie=i(7565),te=i.n(ie);function ne(e){return(0,t.jsxs)("div",{className:te().card,children:[(0,t.jsxs)("span",{className:te().titleAndDate,children:[(0,t.jsx)("span",{className:te().title,children:e.title}),(0,t.jsxs)("span",{className:te().date,children:["(",e.date,")"]})]}),(0,t.jsx)("span",{className:te().description,children:e.description})]})}function ae(e){return(0,t.jsxs)("section",{className:se().projectsContainer,children:[(0,t.jsxs)("div",{className:x().titleAndActions,children:[(0,t.jsx)("div",{className:x().title,children:"Projects"}),e.isDifferentUser?null:(0,t.jsxs)("span",{className:x().actions,children:[(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(g.Z,{sx:{color:"white"}})}),(0,t.jsx)(a.Z,{size:"small","aria-label":"edit",color:"primary",children:(0,t.jsx)(u.Z,{sx:{color:"white"}})})]})]}),(0,t.jsxs)("div",{className:se().projectsList,children:[(0,t.jsx)(ne,{title:"Determined",description:"A project that talks about app usage , goals and other stuff",date:"Sep 2021 - Aug 2022"}),(0,t.jsx)("hr",{style:{width:"50%",margin:"0px 12px"}}),(0,t.jsx)(ne,{title:"Determined",description:"A project that talks about app usage , goals and other stuff",date:"Jan 2019 - Aug 2021"}),(0,t.jsx)("hr",{style:{width:"50%",margin:"0px 12px"}}),(0,t.jsx)(ne,{title:"Determined",description:"A project that talks about app usage , goals and other stuff",date:"Mar 2018 - Aug 2020"}),(0,t.jsx)("hr",{style:{width:"50%",margin:"0px 12px"}}),(0,t.jsx)(ne,{title:"Determined",description:"A project that talks about app usage , goals and other stuff",date:"Feb 2015 - Aug 2020"}),(0,t.jsx)("hr",{style:{width:"50%",margin:"0px 12px"}})]})]})}var re=i(9008),le=i.n(re);function oe(){return(0,t.jsxs)("section",{className:c().mainPage,children:[(0,t.jsx)(le(),{children:(0,t.jsx)("title",{children:"Mohammeds Profile"})}),(0,t.jsx)(p.Z,{}),(0,t.jsxs)("div",{className:c().mainContainer,children:[(0,t.jsxs)("main",{className:c().profileContainer,children:[(0,t.jsxs)("section",{className:c().coverAndProfileSection,children:[(0,t.jsx)(l(),{src:"/"+d,alt:"cover",layout:"fill",objectFit:"cover",style:{borderRadius:"25px 25px 0px 0px"},priority:!0}),(0,t.jsx)(n.Z,{className:c().profilePicture}),(0,t.jsx)(a.Z,{size:"medium","aria-label":"edit",className:c().editCoverButton,children:(0,t.jsx)(u.Z,{color:"primary"})})]}),(0,t.jsxs)("section",{className:c().detailsSection,children:[(0,t.jsx)("span",{className:c().fullName,children:" Mohammed K. Abu Arida"}),(0,t.jsx)("span",{className:c().jobTitle,children:"Software Engineer"}),(0,t.jsx)("span",{className:c().company,children:"Mham IT International"})]}),(0,t.jsx)(j,{isDifferentUser:!1}),(0,t.jsx)(Z,{isDifferentUser:!1}),(0,t.jsx)(w,{isDifferentUser:!1}),(0,t.jsx)(ae,{isDifferentUser:!1}),(0,t.jsxs)("div",{className:c().interestsAndSkils,children:[(0,t.jsx)($,{isDifferentUser:!1}),(0,t.jsx)(X,{isDifferentUser:!1})]})]}),(0,t.jsx)(T,{})]})]})}},2460:function(e){e.exports={GuestHeader:"headers___footers_GuestHeader__Yd_J6"}},1811:function(e){e.exports={bar:"shared_styles_bar__m2_4l",rightSide:"shared_styles_rightSide__7hjOk",leftSide:"shared_styles_leftSide__TeE3U",textField:"shared_styles_textField__QvjoS",searchButton:"shared_styles_searchButton__U7voq"}},8317:function(e){e.exports={rightButton:"user_header_rightButton__Famef",allRightButtons:"user_header_allRightButtons__PutoN",buttonIcons:"user_header_buttonIcons__WJcpG",iconButtons:"user_header_iconButtons__tRM5Q"}},4369:function(e){e.exports={smallContainer:"login_signup_buttons_smallContainer___f7lY",login:"login_signup_buttons_login__XdRX4",signup:"login_signup_buttons_signup__Sk8mR",languageDropDown:"login_signup_buttons_languageDropDown__PJP2Q",dropDown:"login_signup_buttons_dropDown__fCU17",menu:"login_signup_buttons_menu__a0Ee6",languageButtons:"login_signup_buttons_languageButtons__37iJx"}},3210:function(e){e.exports={aboutContent:"about_section_aboutContent__Pa3p8"}},7654:function(e){e.exports={educationContainer:"education_container_educationContainer__yyAVP",specialty:"education_container_specialty__z6EI3",university:"education_container_university__ixxGJ",date:"education_container_date__GXv2Y",gpa:"education_container_gpa__VAVbC"}},195:function(e){e.exports={box:"experience_timeline_element_box__SWLGL",date:"experience_timeline_element_date__PyCGl",experienceContent:"experience_timeline_element_experienceContent__y6cVQ"}},218:function(e){e.exports={jobSuggestion:"job_suggestion_jobSuggestion__TGCXU",jobDetails:"job_suggestion_jobDetails__avWor",title:"job_suggestion_title__mJMvc",company:"job_suggestion_company__bnipe"}},7565:function(e){e.exports={card:"project_card_card__22Mdl",title:"project_card_title__tL67F",description:"project_card_description__hj0uG",date:"project_card_date__3oOvd",titleAndDate:"project_card_titleAndDate__DfZXp"}},6680:function(e){e.exports={projectMemberSuggestion:"project_member_suggestion_projectMemberSuggestion__zBvAZ",memberDetails:"project_member_suggestion_memberDetails__lsf4Q",title:"project_member_suggestion_title__4emdT",company:"project_member_suggestion_company__L6yzb",suggestion:"project_member_suggestion_suggestion__0z5hK"}},8210:function(e){e.exports={projectsContainer:"projects_section_projectsContainer___czt2",title:"projects_section_title__Vf14g",projectsList:"projects_section_projectsList__vgpSu"}},7058:function(e){e.exports={titleAndActions:"shared_style_titleAndActions__FiGv5",mainContainer:"shared_style_mainContainer__IEiiY",title:"shared_style_title__WkIYL",actions:"shared_style_actions__ysz85",wrapContainer:"shared_style_wrapContainer__IQGpA",interestAndSkillChips:"shared_style_interestAndSkillChips__kWorJ"}},8996:function(e){e.exports={mainSection:"suggestions_section_mainSection__XwXaC",container:"suggestions_section_container__cbL5s"}},7266:function(e){e.exports={mainPage:"user_profile_mainPage__zUCPd",coverAndProfileSection:"user_profile_coverAndProfileSection__9MaaG",profilePicture:"user_profile_profilePicture__bLFu6",detailsSection:"user_profile_detailsSection__6gqDj",editCoverButton:"user_profile_editCoverButton__meNrr",editProfilePicButton:"user_profile_editProfilePicButton__kSLm4",fullName:"user_profile_fullName__nVNPb",jobTitle:"user_profile_jobTitle__eNEH3",company:"user_profile_company__ceHT9",mainContainer:"user_profile_mainContainer__YqMEp",profileContainer:"user_profile_profileContainer__ZJvSL",interestsAndSkils:"user_profile_interestsAndSkils__VP_4Q"}}},function(e){e.O(0,[357,579,528,360,675,774,888,179],(function(){return s=3161,e(e.s=s);var s}));var s=e.O();_N_E=s}]);