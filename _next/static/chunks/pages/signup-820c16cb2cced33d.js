(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8575:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(2152)}])},3834:function(e,o,n){"use strict";n.d(o,{Z:function(){return _}});var a=n(5893),l=n(3321),t=n(8204),c=n(5819),i=n(87),r=n(1664),d=n.n(r),p=n(4369),s=n.n(p),h=n(7294);function u(e,o){(null==o||o>e.length)&&(o=e.length);for(var n=0,a=new Array(o);n<o;n++)a[n]=e[n];return a}function b(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,t=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(t.push(a.value),!o||t.length!==o);c=!0);}catch(r){i=!0,l=r}finally{try{c||null==n.return||n.return()}finally{if(i)throw l}}return t}}(e,o)||function(e,o){if(!e)return;if("string"===typeof e)return u(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,o)}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(){var e=b(h.useState(null),2),o=e[0],n=e[1],r=Boolean(o),p=function(e){n(null),u(e)},u=function(e){};return(0,a.jsxs)("div",{className:s().smallContainer,children:[(0,a.jsx)(l.Z,{id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:function(e){n(e.currentTarget)},children:(0,a.jsx)(i.Z,{})}),(0,a.jsxs)(t.Z,{id:"basic-menu",anchorEl:o,open:r,onClose:p,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(c.Z,{onClick:function(){return p("ar")},children:"\u0639\u0631\u0628\u064a"}),(0,a.jsx)(c.Z,{value:"en",onClick:function(){return p("en")},children:"English"})]}),(0,a.jsx)(d(),{href:"/login",children:(0,a.jsx)("a",{className:s().login,children:"Log in"})}),(0,a.jsx)(d(),{href:"/signup",children:(0,a.jsx)("a",{className:s().signup,children:"Sign up"})})]})}var m=n(2460),g=n.n(m);function _(){return(0,a.jsx)("div",{className:g().GuestHeader,children:(0,a.jsx)(f,{})})}},4530:function(e,o,n){"use strict";var a=n(5893),l=n(3852),t=n.n(l);o.Z=function(e){return(0,a.jsx)("button",{style:{margin:e.margin,width:e.width},className:e.isDisabled?t().disabledButton:t().submitButton,disabled:e.isDisabled,onClick:e.onClick,children:e.text})}},4359:function(e,o,n){"use strict";var a=n(5893),l=n(4320),t=n.n(l);o.Z=function(e){return(0,a.jsxs)("div",{className:t().container,children:[(0,a.jsx)("p",{className:t().headtext,children:e.fieldName}),(0,a.jsx)("input",{className:t().textfield,type:e.type,placeholder:e.placeholder,spellCheck:"false"})]})}},4157:function(e,o,n){"use strict";n.d(o,{Z:function(){return c}});var a=n(5893),l=n(990),t=n.n(l);function c(e){var o;return(0,a.jsx)("section",{className:t().section,style:{padding:e.padding,margin:null!==(o=e.margin)&&void 0!==o?o:"100px 0px"},children:e.children})}},2152:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return G}});var a=n(5893),l=n(1163),t=n(3834),c=n(7294),i=n(7357),r=n(1820),d=n(9114),p=n(3916),s=n.n(p);function h(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function u(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(o){h(e,o,n[o])}))}return e}function b(e){return(0,a.jsxs)("div",{className:s().container,children:[(0,a.jsx)("p",{className:s().headtext,children:e.fieldName}),(0,a.jsxs)("div",{className:s().smallContainer,children:[(0,a.jsx)(d.Z,{id:"country-select-demo",sx:{width:135},options:f,className:"dsds",autoHighlight:!0,defaultValue:f.find((function(e){return"966"==e.phone})),getOptionLabel:function(e){return"+"+e.phone},renderOption:function(e,o){return(0,a.jsxs)(i.Z,u({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e,{children:[(0,a.jsx)("img",{loading:"lazy",width:"15",src:"https://flagcdn.com/w20/".concat(o.code.toLowerCase(),".png"),srcSet:"https://flagcdn.com/w40/".concat(o.code.toLowerCase(),".png 2x"),alt:"flag"}),"+",o.phone]}))},renderInput:function(e){return(0,a.jsx)(r.Z,u({},e,{className:s().textfield,inputProps:u({},e.inputProps,{autoComplete:"new-password",defaultValue:"+966"})}))}}),(0,a.jsx)("input",{type:"text",className:s().smallTextField})]})]})}var f=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61",suggested:!0},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1",suggested:!0},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49",suggested:!0},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33",suggested:!0},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81",suggested:!0},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan, Province of China",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1",suggested:!0},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}],m=n(4320),g=n.n(m);function _(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function x(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(o){_(e,o,n[o])}))}return e}function y(e){return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:g().headtext,children:e.fieldName}),(0,a.jsx)(d.Z,{id:"country-select-demo",sx:{width:"100%",backgroundColor:"#f6f6f6",height:"60px"},options:f,autoHighlight:!0,getOptionLabel:function(e){return e.label},defaultValue:f.find((function(e){return"966"==e.phone})),renderOption:function(e,o){return(0,a.jsxs)(i.Z,x({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e,{children:[(0,a.jsx)("img",{loading:"lazy",width:"20",src:"https://flagcdn.com/w20/".concat(o.code.toLowerCase(),".png"),srcSet:"https://flagcdn.com/w40/".concat(o.code.toLowerCase(),".png 2x"),alt:"flag"}),o.label]}))},renderInput:function(e){return(0,a.jsx)(r.Z,x({},e,{inputProps:x({},e.inputProps,{autoComplete:"new-password"})}))}})]})}var S=n(4530),N=n(4164),C=n.n(N);function v(e,o){(null==o||o>e.length)&&(o=e.length);for(var n=0,a=new Array(o);n<o;n++)a[n]=e[n];return a}function j(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function M(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,t=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(t.push(a.value),!o||t.length!==o);c=!0);}catch(r){i=!0,l=r}finally{try{c||null==n.return||n.return()}finally{if(i)throw l}}return t}}(e,o)||function(e,o){if(!e)return;if("string"===typeof e)return v(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,o)}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){var o=M(c.useState(e.options[0]),2),n=o[0],l=o[1],t=M(c.useState(""),2),i=t[0],p=t[1];return(0,a.jsxs)("div",{className:C().container,children:[(0,a.jsx)("p",{className:C().headtext,children:e.fieldName}),(0,a.jsx)(d.Z,{value:n,onChange:function(e,o){l(o)},inputValue:i,onInputChange:function(e,o){p(o)},id:"controllable-states-demo",options:e.options,renderInput:function(o){return(0,a.jsx)(r.Z,function(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(o){j(e,o,n[o])}))}return e}({className:C().textfield},o,{label:e.label}))}})]})}var P=n(4359),A=n(4157),I=n(3779),B=n.n(I);var G=function(){var e=(0,l.useRouter)();return(0,a.jsxs)("div",{className:B().container,children:[(0,a.jsx)(t.Z,{}),(0,a.jsxs)(A.Z,{padding:"5vh 4vw",children:[(0,a.jsx)("h1",{className:B().headline,children:"SIGN UP"}),(0,a.jsxs)("div",{className:B().signUpForm,children:[(0,a.jsxs)("div",{className:B().formColumn,children:[(0,a.jsx)(P.Z,{type:"email",fieldName:"Email*",placeholder:"JohnDoe@example.com"}),(0,a.jsx)(w,{options:["Male","Female"],fieldName:"Gender"}),(0,a.jsx)(w,{options:["Single","Married"],fieldName:"Marital Status*"}),(0,a.jsx)(b,{fieldName:"Phone Number"}),(0,a.jsx)(y,{fieldName:"Nationality*"})]}),(0,a.jsxs)("div",{className:B().formColumn,children:[(0,a.jsx)(P.Z,{type:"text",fieldName:"First Name*",placeholder:"First Name"}),(0,a.jsx)(P.Z,{type:"text",fieldName:"Middle Name",placeholder:"Middle Name"}),(0,a.jsx)(P.Z,{type:"text",fieldName:"Last Name*",placeholder:"Last Name"}),(0,a.jsx)(P.Z,{type:"text",fieldName:"Password*",placeholder:"Password"}),(0,a.jsx)(P.Z,{type:"text",fieldName:"Confirm Password*",placeholder:"Confirm Password"})]})]}),(0,a.jsx)("p",{className:B().notice,children:"verification code will be sent to the phone number provided for verification, otherwise , email verification will be sent instead."}),(0,a.jsx)(S.Z,{onClick:function(){e.push("/signup/phone-verification")},text:"Confirm"})]})]})}},2460:function(e){e.exports={GuestHeader:"headers___footers_GuestHeader__Yd_J6"}},3916:function(e){e.exports={headtext:"country_code_picker_headtext__sV6fU",textfield:"country_code_picker_textfield__OiK51",container:"country_code_picker_container__hRV_S",smallContainer:"country_code_picker_smallContainer__IAcEG",smallTextField:"country_code_picker_smallTextField__9oDfR"}},3852:function(e){e.exports={submitButton:"custom_button_submitButton__wzRVg",disabledButton:"custom_button_disabledButton___w6sG"}},4164:function(e){e.exports={headtext:"custom_drop_down_headtext__Q4R1l",textfield:"custom_drop_down_textfield__3P5wc",container:"custom_drop_down_container__sASUr",removeBorder:"custom_drop_down_removeBorder__BduaX"}},4320:function(e){e.exports={headtext:"custom_text_field_headtext__B7fPI",textfield:"custom_text_field_textfield__03RiC",container:"custom_text_field_container__HdQXZ"}},4369:function(e){e.exports={smallContainer:"login_signup_buttons_smallContainer___f7lY",login:"login_signup_buttons_login__XdRX4",signup:"login_signup_buttons_signup__Sk8mR",languageDropDown:"login_signup_buttons_languageDropDown__PJP2Q",dropDown:"login_signup_buttons_dropDown__fCU17",menu:"login_signup_buttons_menu__a0Ee6",languageButtons:"login_signup_buttons_languageButtons__37iJx"}},990:function(e){e.exports={section:"middle_container_section__nfTyj"}},3779:function(e){e.exports={headline:"signup_headline__rrVEo",container:"signup_container__me2em",createAccount:"signup_createAccount__y7IIo",signUpForm:"signup_signUpForm__vwSDV",formColumn:"signup_formColumn__On40k",notice:"signup_notice__M4omi"}}},function(e){e.O(0,[357,579,528,30,774,888,179],(function(){return o=8575,e(e.s=o);var o}));var o=e.O();_N_E=o}]);