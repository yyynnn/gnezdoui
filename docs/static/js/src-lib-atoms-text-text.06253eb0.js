(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"./src/lib/atoms/Spacer/Spacer.js":function(e,s,i){"use strict";var t=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");i("./node_modules/core-js/modules/es.object.assign.js"),i("./node_modules/core-js/modules/es.object.define-property.js"),i("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.Spacer=s.Inner=void 0;var o=t(i("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),r=t(i("./node_modules/styled-components/dist/styled-components.browser.esm.js")),n=t(i("./node_modules/react/index.js")),a=i("./src/theme/index.js"),m=function(e,s,i){return i?e:s||0===s&&"number"===typeof s?s:e/2},u=r.default.div.withConfig({componentId:"b9lm47-0"})(["height:","px;min-width:","px;&:before{content:'","';display:none;}@media (min-width:","px){height:","px;min-width:","px;&:before{content:'","';display:none;}}@media (min-width:","px){height:","px;min-width:","px;&:before{content:'","';display:none;}}"],(function(e){var s=e.space,i=e.spacemob,t=e.samespace;return m(s,i,t)}),(function(e){var s=e.space,i=e.spacemob,t=e.samespace;return m(s,i,t)}),(function(e){var s=e.space,i=e.spacemob,t=e.samespace;return m(s,i,t)}),a.theme.breakpoints.sm,(function(e){return e.space}),(function(e){return e.space}),(function(e){return e.space}),a.theme.breakpoints.sm,(function(e){var s=e.space;return void 0===s?20:s}),(function(e){var s=e.space;return void 0===s?20:s}),(function(e){var s=e.space;return void 0===s?20:s}));s.Inner=u,"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Inner",filename:"src\\lib\\atoms\\Spacer\\Spacer.js"}});var c=function(e){var s=e.space,i=void 0===s?20:s,t=e.spacemob,r=e.samespace,a=void 0!==r&&r,m=(0,o.default)(e,["space","spacemob","samespace"]);return n.default.createElement(u,Object.assign({"data-testid":"spacer",space:i,spacemob:t,samespace:a},m))};s.Spacer=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacer",filename:"src\\lib\\atoms\\Spacer\\Spacer.js"}})},"./src/lib/atoms/Spacer/index.js":function(e,s,i){"use strict";i("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"Spacer",{enumerable:!0,get:function(){return t.Spacer}});var t=i("./src/lib/atoms/Spacer/Spacer.js")},"./src/lib/atoms/Text/Text.js":function(e,s,i){"use strict";var t=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");i("./node_modules/core-js/modules/es.object.assign.js"),i("./node_modules/core-js/modules/es.object.define-property.js"),i("./node_modules/core-js/modules/es.object.is-extensible.js"),i("./node_modules/core-js/modules/es.string.bold.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.Text=void 0;var o=t(i("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),r=t(i("./node_modules/react/index.js")),n=t(i("./node_modules/styled-components/dist/styled-components.browser.esm.js")),a=i("./src/theme/index.js"),m=function(e){return"lg"===e?16:"md"===e?14:"sm"===e?12:10},u=function(e,s){return"lg"===e?24:"md"===e||"md"===e&&s?20:16},c=function(e){var s=e.children,i=e.className,t=e.size,n=void 0===t?"md":t,a=e.sizemob,m=void 0===a?"md":a,u=e.capitalize,c=void 0!==u&&u,d=e.bold,p=void 0!==d&&d,b=e.caption,x=void 0!==b&&b,f=e.reset,j=void 0!==f&&f,g=(0,o.default)(e,["children","className","size","sizemob","capitalize","bold","caption","reset"]);return r.default.createElement(l,Object.assign({caption:x,bold:p,size:n,sizemob:m,className:i,capitalize:c?"capitalize":"none",reset:j},g,{"data-testid":"text"}),s)};s.Text=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src\\lib\\atoms\\Text\\Text.js"}});var l=n.default.div.withConfig({componentId:"sc-1tkk9cd-0"})(["font-size:","px;line-height:",";letter-spacing:0px;font-weight:",";margin-top:0;margin-bottom:0;text-align:",";text-transform:",";font-family:'GNEZDO Sans','Arial','Helvetica',sans-serif;& *{font-family:'GNEZDO Sans','Arial','Helvetica',sans-serif;}@media (min-width:","px){font-size:","px;line-height:",";}"],(function(e){var s=e.sizemob;return m(s)}),(function(e){var s=e.sizemob,i=e.caption;return e.reset?"1em":"".concat(u(s,i),"px")}),(function(e){return e.bold?600:400}),(function(e){return e.align}),(function(e){var s=e.capitalize;return e.caption?"uppercase":s}),a.theme.breakpoints.sm,(function(e){var s=e.size;return m(s)}),(function(e){var s=e.size,i=e.caption;return e.reset?"1em":"".concat(u(s,i),"px")}))},"./src/lib/atoms/Text/Text.mdx":function(e,s,i){"use strict";var t=i("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");i("./node_modules/core-js/modules/es.object.assign.js"),i("./node_modules/core-js/modules/es.object.define-property.js"),i("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.default=d;var r=o(i("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),n=t(i("./node_modules/react/index.js")),a=i("./node_modules/@mdx-js/react/dist/index.es.js"),m=i("./node_modules/docz/dist/index.esm.js"),u=i("./src/lib/atoms/Text/Text.js"),c=i("./src/lib/atoms/Spacer/index.js"),l={};function d(e){var s=e.components,i=(0,r.default)(e,["components"]);return(0,a.mdx)("wrapper",Object.assign({},l,i,{components:s,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"text"},"Text"),(0,a.mdx)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.mdx)(m.Playground,{__position:0,__code:'<Text size="lg" sizemob="sm">\n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum.\n  Voluptatum quaerat quos quisquam perferendis dolor rerum illum, similique\n  nobis fugiat tenetur officiis maxime minus ipsa earum omnis quasi ipsam.\n</Text>\n<Spacer />\n<Text>\n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum.\n  Voluptatum quaerat quos quisquam perferendis dolor rerum illum, similique\n  nobis fugiat tenetur officiis maxime minus ipsa earum omnis quasi ipsam.\n</Text>\n<Spacer />\n<Text size="sm" sizemob="lg">\n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum.\n  Voluptatum quaerat quos quisquam perferendis dolor rerum illum, similique\n  nobis fugiat tenetur officiis maxime minus ipsa earum omnis quasi ipsam.\n</Text>',__scope:{props:this?this.props:i,useState:n.useState,Playground:m.Playground,Props:m.Props,Text:u.Text,Spacer:c.Spacer},__codesandbox:"undefined",mdxType:"Playground"},(0,a.mdx)(u.Text,{size:"lg",sizemob:"sm",mdxType:"Text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum. Voluptatum quaerat quos quisquam perferendis dolor rerum illum, similique nobis fugiat tenetur officiis maxime minus ipsa earum omnis quasi ipsam."),(0,a.mdx)(c.Spacer,{mdxType:"Spacer"}),(0,a.mdx)(u.Text,{mdxType:"Text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum. Voluptatum quaerat quos quisquam perferendis dolor rerum illum, similique nobis fugiat tenetur officiis maxime minus ipsa earum omnis quasi ipsam."),(0,a.mdx)(c.Spacer,{mdxType:"Spacer"}),(0,a.mdx)(u.Text,{size:"sm",sizemob:"lg",mdxType:"Text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum. Voluptatum quaerat quos quisquam perferendis dolor rerum illum, similique nobis fugiat tenetur officiis maxime minus ipsa earum omnis quasi ipsam.")),(0,a.mdx)("h2",{id:"props"},"Props"),(0,a.mdx)(m.Props,{of:u.Text,mdxType:"Props"}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\lib\\atoms\\Text\\Text.mdx"}}),d.isMDXComponent=!0},"./src/theme/index.js":function(e,s,i){"use strict";var t=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");i("./node_modules/core-js/modules/es.object.define-property.js"),i("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.theme=s.darken=s.baseUnit=s.activeRatio=s.hoverRatio=void 0;var o=t(i("./node_modules/color/index.js")),r="#E30611";s.hoverRatio=.12,.12===Object(.12)&&Object.isExtensible(.12)&&Object.defineProperty(.12,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hoverRatio",filename:"src\\theme\\index.js"}});s.activeRatio=.24,.24===Object(.24)&&Object.isExtensible(.24)&&Object.defineProperty(.24,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"activeRatio",filename:"src\\theme\\index.js"}});s.baseUnit=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"baseUnit",filename:"src\\theme\\index.js"}});var n=function(e,s){return(0,o.default)(e).darken(s).hex()};s.darken=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"darken",filename:"src\\theme\\index.js"}});var a={opacities:{op100:100,op80:80,op64:64,op52:52,op40:40,op32:32,op24:24,op16:16,op12:12,op8:8,op4:4},spacings:{xs4:4,xs3:8,xs2:12,xs:16,s:24,m:32,l:40,xl:52,xl2:64,xl3:80,xl4:96},font_sizes:{s:12,md:14,lg:16,xl:20,xl1:24,xl2:32,xl3:48,xl4:64},colors:{black:"#000",white:"#FFF",gray:{primary:"#001424",secondary:"#202D3D",g300:"#6E7782",g400:"#9198A0",g500:"#BBC1C7",g600:"#E2E5EB",g700:"#F2F3F7"},red:{primary:r,activehover:n(r,.12),active:n(r,.24)},blue:{primary:"#007DBB",hover:n("#007DBB",.12),active:n("#007DBB",.24)},orange:{primary:"#E06400",hover:n("#E06400",.12),active:n("#E06400",.24)},green:{primary:"#009A00",hover:n("#009A00",.12),active:n("#009A00",.24)},yellow:{autofill:"#FBFFC4"},transparent:"transparent"},transitions:{basic:"250ms ease-in-out"},borders:{basic:"2px solid"},radiuses:{lg:6,basic:4,sm:2,round:5e3},breakpoints:{none:0,mob:320,sm:1024,md:1280,lg:1600,uber:1800},z_indexes:{zero:0,high:99999,negative:-1,basic:1,med:5e3},sizes:{lesser:{lg:32,md:28,sm:20},greater:{lg:52,md:44,sm:32}},shadows:{basic:"0px 2px 4px rgba(0, 0, 0, 0.1)",mid_basic:"0px 5px 8px rgba(0, 0, 0, 0.1)",mid:"0px 9px 10px rgba(0, 0, 0, 0.1)",mid_top:"0px 20px 30px rgba(0, 0, 0, 0.1)",top:"0px 30px 30px rgba(0, 0, 0, 0.1)",uber_top:"0px 50px 50px rgba(0, 0, 0, 0.1)"}};s.theme=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"theme",filename:"src\\theme\\index.js"}})}}]);
//# sourceMappingURL=src-lib-atoms-text-text.63735a401981adb1dc46.js.map