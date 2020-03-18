(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./playground/spacing/Spacings.js":function(e,s,t){"use strict";var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.array.slice.js"),t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.object.is-extensible.js"),t("./node_modules/core-js/modules/es.object.keys.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.Spacings=void 0;var o=n(t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js")),l=n(t("./node_modules/react/index.js")),a=n(t("./node_modules/styled-components/dist/styled-components.browser.esm.js")),d=t("./src/theme/index.js"),r=t("./src/lib/index.js"),c=function(){return l.default.createElement(r.Row,null,Object.keys(d.theme.spacings).map((function(e,s){var t=d.theme.spacings[e];return l.default.createElement(r.Col,{key:e,lg:"2"},l.default.createElement(i,{space:t},l.default.createElement(r.Spacer,{space:t})),l.default.createElement(r.Text,null,t,"px"))})),l.default.createElement(r.Col,null,l.default.createElement(r.Spacer,null),l.default.createElement(r.Heading,{h:4},"Responsive size (toggle mobile width)"),l.default.createElement(r.Spacer,null)),Object.keys(d.theme.spacings).slice(4,8).map((function(e,s){var t=d.theme.spacings[e];return l.default.createElement(r.Col,{key:e,lg:"2"},l.default.createElement(i,(0,o.default)({space:!0},"space",t),l.default.createElement(r.Spacer,{space:t,spacemob:66})),l.default.createElement(r.Text,null,t,"px"))})))};s.Spacings=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacings",filename:"playground\\spacing\\Spacings.js"}});var i=a.default.div.withConfig({componentId:"sc-1dunueo-0"})(["background-color:",";width:100%;opacity:0.5;border-radius:","px;"],d.theme.colors.red.primary,d.theme.radiuses.basic)},"./src/docs/Spacings.mdx":function(e,s,t){"use strict";var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");t("./node_modules/core-js/modules/es.object.assign.js"),t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.default=r;var o=n(t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),l=(n(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),a=(t("./node_modules/docz/dist/index.esm.js"),t("./playground/spacing/Spacings.js")),d={};function r(e){var s=e.components,t=(0,o.default)(e,["components"]);return(0,l.mdx)("wrapper",Object.assign({},d,t,{components:s,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"\u043e\u0442\u0441\u0442\u0443\u043f\u044b"},"\u041e\u0442\u0441\u0442\u0443\u043f\u044b"),(0,l.mdx)("h2",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-desktop"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 Desktop"),(0,l.mdx)(a.Spacings,{mdxType:"Spacings"}))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\docs\\Spacings.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-spacings.63735a401981adb1dc46.js.map