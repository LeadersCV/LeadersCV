(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62],{4454:function(t,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[user_profile]/statistics",function(){return e(6969)}])},5654:function(t,s,e){"use strict";e.d(s,{Z:function(){return y}});var n=e(5893),i=e(1163),a=e(7294),r=e(3878),o=e(5854),c=e.n(o),l=e(4229),u=e(5817),d=e(1671),h=e(2684),_=e(5398),x=e(6638),p=e(9320),j=e(4085),m=e(1811),f=e.n(m),g=e(8333),v=e(3321),b=e(3946),N=e(1236),Z=e(3540);function y(t){var s=t.isCompany,e=(0,i.useRouter)(),o=(0,a.useState)(e.query.term),m=o[0],y=o[1],C=function(t){"Enter"===t.key&&S()};(0,a.useEffect)((function(){return document.addEventListener("keydown",C),function(){document.removeEventListener("keydown",C)}}),[]);var S=function(){e.push({pathname:"/search",query:{term:m}})};return(0,n.jsx)("nav",{className:f().bar,children:(0,n.jsxs)("section",{className:f().leftSide,children:[(0,n.jsx)("div",{style:{paddingLeft:"10px"},children:(0,n.jsx)(r.Z,{width:"175px",height:"45px"})}),(0,n.jsx)("input",{defaultValue:t.term,className:f().textField,spellCheck:"false",placeholder:"Search for anything...",onChange:function(t){return y(t.target.value)}}),(0,n.jsx)("button",{className:f().searchButton,onClick:function(){return S()},children:"Search"}),(0,n.jsxs)("div",{className:c().allRightButtons,children:[(0,n.jsxs)(v.Z,{variant:"text",className:c().rightButton,children:[(0,n.jsx)(x.Z,{className:c().buttonIcons}),(0,n.jsx)("span",{children:"Home"})]}),s?(0,n.jsxs)(v.Z,{variant:"text",className:c().rightButton,children:[(0,n.jsx)(h.Z,{className:c().buttonIcons}),(0,n.jsx)("span",{children:"Employees"})]}):(0,n.jsxs)(v.Z,{variant:"text",className:c().rightButton,children:[(0,n.jsx)(d.Z,{className:c().buttonIcons}),(0,n.jsx)("span",{children:"Companies"})]}),s?(0,n.jsxs)(v.Z,{variant:"text",className:c().rightButton,children:[(0,n.jsx)(g.Z,{className:c().buttonIcons}),(0,n.jsx)("span",{children:"Job Applications"})]}):(0,n.jsxs)(v.Z,{variant:"text",className:c().rightButton,children:[(0,n.jsx)(h.Z,{className:c().buttonIcons}),(0,n.jsx)("span",{children:"Projects"})]}),(0,n.jsxs)(v.Z,{variant:"text",className:c().rightButton,onClick:function(){var t=e.asPath.split("/");e.push({pathname:"/user/"+t[2]})},children:[s?(0,n.jsx)(d.Z,{className:c().buttonIcons}):(0,n.jsx)(_.Z,{className:c().buttonIcons}),(0,n.jsx)("span",{children:"Profile"})]}),(0,n.jsxs)(v.Z,{variant:"text",className:c().rightButton,onClick:function(){var t=e.asPath.split("/");e.push({pathname:"/user/"+t[2]+"/statistics"})},children:[(0,n.jsx)(j.Z,{className:c().buttonIcons}),(0,n.jsx)("span",{children:"Statistics"})]}),(0,n.jsxs)(v.Z,{variant:"text",className:c().rightButton,onClick:function(){var t=e.asPath.split("/");e.push({pathname:"/user/"+t[2]+"/settings"})},children:[(0,n.jsx)(l.Z,{className:c().buttonIcons}),(0,n.jsx)("span",{children:"Settings"})]}),(0,n.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,n.jsx)(N.Z,{badgeContent:2,color:"primary",children:(0,n.jsx)(p.Z,{style:{fontSize:"25px"}})})}),(0,n.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,n.jsx)(N.Z,{badgeContent:4,color:"primary",children:(0,n.jsx)(u.Z,{style:{fontSize:"25px"}})})}),(0,n.jsx)(b.Z,{color:"primary","aria-label":"add to shopping cart",children:(0,n.jsx)(Z.Z,{style:{fontSize:"25px"}})})]})]})})}},121:function(t,s,e){"use strict";e.d(s,{Z:function(){return u}});var n=e(5893),i=e(5376),a=e(6775),r=e(9416),o=e.n(r);a.kL.register(a.uw,a.f$,a.od,a.jn,a.Dx,a.u,a.De);var c={responsive:!0},l={labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Visits",data:[5,7,8,55,4,96,100,60,53,73,89,34],borderColor:"#002463",backgroundColor:"rgba(53, 162, 235, 0.5)"}]};function u(t){var s=t.header;return(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:o().lineContainer,children:[(0,n.jsx)("h1",{children:s}),(0,n.jsx)(i.x1,{data:l,options:c})]})})}},2429:function(t,s,e){"use strict";e.d(s,{Z:function(){return r}});var n=e(5893),i=e(4365),a=e.n(i);function r(t){var s=t.title,e=t.statistic;return(0,n.jsxs)("div",{className:a().statisticContainer,children:[(0,n.jsx)("span",{className:a().title,children:s}),(0,n.jsx)("span",{className:a().statistic,children:e})]})}},4728:function(t,s,e){"use strict";e.d(s,{Z:function(){return c}});var n=e(5893),i=(e(4055),e(1059),e(486)),a=e.n(i),r=e(286),o=e(7294);function c(){var t=(0,o.useState)([{startDate:new Date((new Date).getFullYear(),(new Date).getMonth(),1),endDate:new Date,key:"selection"}]),s=t[0],e=t[1];return(0,n.jsx)("section",{className:a().filterSection,children:(0,n.jsx)(r.Dw,{ranges:s,onChange:function(t){var s=t.selection;console.log(t),e([s])},color:"#002463"})})}},6969:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return C}});var n=e(5893),i=e(9008),a=e.n(i),r=e(7294),o=e(5654),c=e(2429),l=e(5376),u=e(8328),d=e.n(u),h=e(6775);h.kL.register(h.qi);var _={datasets:[{data:[10,30,40],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}],labels:["Consulting","Tech","Industrial"]},x={cutoutPercentage:50,responsive:!0};function p(){return(0,n.jsxs)("div",{className:d().pieContainer,children:[(0,n.jsx)("h3",{children:"Companies Applied Distribution"}),(0,n.jsx)(l.$I,{data:_,options:x})]})}var j=e(4728),m=e(1725),f=e.n(m);h.kL.register(h.qi);var g={datasets:[{data:[10,30,40],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}],labels:["Software Engineer","Flutter Developer","Python Developer"]},v={cutoutPercentage:50,responsive:!0};function b(){return(0,n.jsxs)("div",{className:f().doughnutContainer,children:[(0,n.jsx)("h3",{children:"Jobs Applied Distribution"}),(0,n.jsx)(l.$I,{data:g,options:v})]})}var N=e(121),Z=e(3743),y=e.n(Z);function C(){return(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"User Statistics"})}),(0,n.jsx)(o.Z,{}),(0,n.jsxs)("section",{className:y().mainContainer,children:[(0,n.jsx)(j.Z,{}),(0,n.jsx)(N.Z,{header:"User Profile Visits"}),(0,n.jsxs)("div",{className:y().chartsRow,children:[(0,n.jsx)(b,{}),(0,n.jsx)(p,{})]}),(0,n.jsxs)("div",{className:y().statisticsNumbers,children:[(0,n.jsx)(c.Z,{title:"Impressions",statistic:"24%"}),(0,n.jsx)(c.Z,{title:"Jobs Applied",statistic:"154"}),(0,n.jsx)(c.Z,{title:"Blogs Created",statistic:"3"})]})]})]})}},1811:function(t){t.exports={bar:"shared_styles_bar__m2_4l",rightSide:"shared_styles_rightSide__7hjOk",leftSide:"shared_styles_leftSide__TeE3U",textField:"shared_styles_textField__QvjoS",searchButton:"shared_styles_searchButton__U7voq"}},5854:function(t){t.exports={rightButton:"user_or_company_header_rightButton__IYaKQ",allRightButtons:"user_or_company_header_allRightButtons___c3WY",buttonIcons:"user_or_company_header_buttonIcons__rYoHj",iconButtons:"user_or_company_header_iconButtons__VV9zH"}},9416:function(t){t.exports={lineContainer:"profile_views_lineContainer__4J4Rl"}},4365:function(t){t.exports={statisticContainer:"statistic_container_statisticContainer__zqeA2",title:"statistic_container_title__2i6JO",statistic:"statistic_container_statistic__OGO__"}},486:function(t){t.exports={filterSection:"statistics_filter_fields_filterSection__qeHtJ"}},8328:function(t){t.exports={pieContainer:"company_types_applied_pieContainer__qeDUx"}},1725:function(t){t.exports={doughnutContainer:"job_types_applied_doughnutContainer__jAraN"}},3743:function(t){t.exports={mainContainer:"user_statistics_mainContainer__NVrQq",statisticsNumbers:"user_statistics_statisticsNumbers___PrRp",chartsRow:"user_statistics_chartsRow__vLhV7"}}},function(t){t.O(0,[757,357,676,319,774,888,179],(function(){return s=4454,t(t.s=s);var s}));var s=t.O();_N_E=s}]);