(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"./playground/colors/Colors.js":function(e,o,r){"use strict";var d=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(o,"__esModule",{value:!0}),o.Colors=void 0;d(r("./node_modules/react/index.js"));var l=d(r("./node_modules/styled-components/dist/styled-components.browser.esm.js")),t=r("./src/theme/index.js"),s=l.default.div.withConfig({componentId:"sc-1gffc4v-0"})(["min-height:64px;width:",";height:",";background:",";box-shadow:",";border-radius:","px;flex-wrap:wrap;cursor:pointer;"],(function(e){return e.fluid?"100%":"64px"}),(function(e){return e.fluid?"100%":"64px"}),(function(e){return e.color}),(function(e){return"#FFF"===e.color&&t.theme.shadows.basic}),t.theme.radiuses.basic);o.Colors=s,"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"playground\\colors\\Colors.js"}})},"./playground/grid/Grid.js":function(e,o,r){"use strict";var d=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),l=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");r("./node_modules/core-js/modules/es.array.iterator.js"),r("./node_modules/core-js/modules/es.array.map.js"),r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.object.is-extensible.js"),r("./node_modules/core-js/modules/es.object.to-string.js"),r("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(o,"__esModule",{value:!0}),o.GridBounds=o.Grid=void 0;var t=l(r("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js")),s=d(r("./node_modules/react/index.js")),n=l(r("./node_modules/styled-components/dist/styled-components.browser.esm.js")),i=l(r("./node_modules/react-highlight/index.js")),m=r("./playground/colors/Colors.js"),a=r("./src/theme/index.js"),c=r("./src/lib/index.js"),u=function(){return s.default.createElement(c.Row,null,s.default.createElement(c.Col,null,s.default.createElement(c.Heading,{h:4},"Breakpoints"),s.default.createElement(c.Spacer,null),s.default.createElement(p,null,s.default.createElement(i.default,{language:"javascript"},JSON.stringify(a.theme.breakpoints,null," "))),s.default.createElement(c.Spacer,null)),(0,t.default)(Array(12).keys()).map((function(e,o){return s.default.createElement(c.Col,{key:o,sm:"6",md:"4",lg:"1"},s.default.createElement(c.Opacity,{opacity:a.theme.opacities.op32},s.default.createElement(m.Colors,{color:a.theme.colors.red.primary,fluid:!0},s.default.createElement(j,null,s.default.createElement(c.Text,null,o+1)))),s.default.createElement(c.Spacer,null))})),s.default.createElement(c.Col,null,s.default.createElement(c.Spacer,null)),s.default.createElement(c.Col,null,s.default.createElement(c.Opacity,{opacity:a.theme.opacities.op32},s.default.createElement(m.Colors,{color:a.theme.colors.red.primary,fluid:!0},s.default.createElement(j,null,s.default.createElement(c.Text,null,"1-12 \u041a\u043e\u043b\u043e\u043d\u043a\u0430 \u0431\u0435\u0437 ",s.default.createElement("b",null,"\u043f\u0440\u043e\u043f\u043e\u0432")," \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0432\u0435\u0441\u044c \u0440\u044f\u0434"))))))};o.Grid=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"playground\\grid\\Grid.js"}});var p=n.default.div.withConfig({componentId:"sc-1mgx2gk-0"})(["padding:","px;background-color:",";color:",";border-radius:4px;.hljs-number,.hljs-meta,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params{color:",";}.hljs{color:",";}.hljs-attr{color:",";}"],a.theme.spacings.m,a.theme.colors.gray.primary,a.theme.colors.white,a.theme.colors.red.primary,"#ffb6b6",a.theme.colors.white),j=n.default.div.withConfig({componentId:"sc-1mgx2gk-1"})(["height:200px;display:flex;justify-content:center;align-items:center;color:",";"],a.theme.colors.white);o.GridBounds=j,"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridBounds",filename:"playground\\grid\\Grid.js"}})},"./src/lib/organisms/Grid/Grid.mdx":function(e,o,r){"use strict";var d=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),l=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");r("./node_modules/core-js/modules/es.object.assign.js"),r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=p;var t=l(r("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),s=d(r("./node_modules/react/index.js")),n=r("./node_modules/@mdx-js/react/dist/index.es.js"),i=r("./node_modules/docz/dist/index.esm.js"),m=r("./src/lib/index.js"),a=r("./playground/colors/Colors.js"),c=r("./playground/grid/Grid.js"),u={};function p(e){var o=e.components,r=(0,t.default)(e,["components"]);return(0,n.mdx)("wrapper",Object.assign({},u,r,{components:o,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"grid"},"Grid"),(0,n.mdx)("h2",{id:"primary"},"Primary"),(0,n.mdx)(i.Playground,{__position:0,__code:'<Row>\n  <Col sm="6" md="4">\n    <Opacity opacity={theme.opacities.op32}>\n      <Colors color={theme.colors.red.primary} fluid>\n        <GridBounds>\n          <Text>{1}</Text>\n        </GridBounds>\n      </Colors>\n    </Opacity>\n  </Col>\n  <Col sm="6" md="4">\n    <Opacity opacity={theme.opacities.op32}>\n      <Colors color={theme.colors.red.primary} fluid>\n        <GridBounds>\n          <Text>{2}</Text>\n        </GridBounds>\n      </Colors>\n    </Opacity>\n  </Col>\n  <Col sm="6" md="4">\n    <Opacity opacity={theme.opacities.op32}>\n      <Colors color={theme.colors.red.primary} fluid>\n        <GridBounds>\n          <Text>{3}</Text>\n        </GridBounds>\n      </Colors>\n    </Opacity>\n  </Col>\n</Row>',__scope:{props:this?this.props:r,useState:s.useState,Playground:i.Playground,Props:i.Props,Spacer:m.Spacer,Text:m.Text,Heading:m.Heading,Col:m.Col,Opacity:m.Opacity,Container:m.Container,Row:m.Row,theme:m.theme,Colors:a.Colors,GridBounds:c.GridBounds},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGBnAILJ2HkV1jXlM0_X5O1IPYAAFKBXESFIhFCDAlmwgc7CQo1ZXaA8AC90Ig9goOcGYJQyJZLGwAglgACXFFgZyWRwoCWHVWPIF5EiE4DXDQdj2BFUYlgmGAj0Q5DqKgCAPAYzCmIdKAhQojS5TJfDCLaDAAUMgQ4EkYSjN09V9IAcX6dBr0s9BjKo0y8IIoirMIrhJDcrgnPtQNJRM1DFTBVBdBRY5TlouDEixdhuCY9YogEZ5UCudoAAZ2CTGYsHaPdq1YzsCkKgAWcr2AANnKyr1jAYCADFvWgRJCv4ZxDgRB1MBwoR-CWIhqEoOBxJgdrq06mhnAgWjLnYABGeqqvkeLEqmABBOZMvYCMoPIGwoHQMNEI5TKxDO6MZHYFF0pgbhgDotKsXkLca2AS7oBu4IADJQfGRJ5koZogeu27uERuUwGIyUBlQdp2AAfg2YGwwje6rjhkHUD26spBkKs3zMGFnMwMAwigKYCYep7yeO5dqwTKKCBwLrMhSK8CH-mta0UkYRdF1dKCgV6iD4EBmv4dgiB4fh6vEFcpdrMSJUkvZxMkz6VKPHBKENmJ4DNmYkwAJj-rXtelmy7CoGzjc2U23aM0Nshwft-VcAREkoqBQi4SWnZrRgwo8ry4EjqPo84rBheATb5CkFPhcdqOpFjzziO8xPtakBzbJL6PJF1iSCESSuy5lhvhLlhWlZAFW1ZADWQErhMa_1829brj3VL_Ifa4gK3zbth2uaTxhy9dmWhVHr2V9s330H9_pcpDw0w4j3OnZj9zC4wBPj7z7OxGAe2s64vupfzs_46f7cl6fqQB7rhv7Kb4-i8Zat34O3TuCse5fx_skCeRtgAm3HhbKecBraz3fs7IyhZ3bwM9n-b2m8ujbwDnvUO4d0DoITAXN-V8T432AEmTOkgb40NFi_Lg59i4sNrP_F2X9q4W3roAnhicpDi0lqIzUfMBZC3-lIDmVMzBfhAOJbYrg0j_jgNQQCugQIGDAsAdY_BUDekZEgdg_AfjFmqBkc0P4ySmKqhYfgrAMj5GoPwK4_Aio4G8UVSahiQDlHIP0GY3Z_RmP4IdV6GFYDQiwN6exxwYBkkoIkXMeQCgTk1OaSxfxSz-OrPwKIaAPHmJUOGDQcAClOMCckugmAErINKQY-e_BTSSlKfwAAeptZqOAAAcOB26OJrPwOinSQA9JwLbHx1TRlARshMrpSYfGzJACMmp7SLRWiWb0gZQz-DrDJvIJRVjvAfGoJAFIGitHaB0foBgBiQC0B9FkDxFjTS0HNFs80swZj8BOfIIFQA",mdxType:"Playground"},(0,n.mdx)(m.Row,{mdxType:"Row"},(0,n.mdx)(m.Col,{sm:"6",md:"4",mdxType:"Col"},(0,n.mdx)(m.Opacity,{opacity:m.theme.opacities.op32,mdxType:"Opacity"},(0,n.mdx)(a.Colors,{color:m.theme.colors.red.primary,fluid:!0,mdxType:"Colors"},(0,n.mdx)(c.GridBounds,{mdxType:"GridBounds"},(0,n.mdx)(m.Text,{mdxType:"Text"},1))))),(0,n.mdx)(m.Col,{sm:"6",md:"4",mdxType:"Col"},(0,n.mdx)(m.Opacity,{opacity:m.theme.opacities.op32,mdxType:"Opacity"},(0,n.mdx)(a.Colors,{color:m.theme.colors.red.primary,fluid:!0,mdxType:"Colors"},(0,n.mdx)(c.GridBounds,{mdxType:"GridBounds"},(0,n.mdx)(m.Text,{mdxType:"Text"},2))))),(0,n.mdx)(m.Col,{sm:"6",md:"4",mdxType:"Col"},(0,n.mdx)(m.Opacity,{opacity:m.theme.opacities.op32,mdxType:"Opacity"},(0,n.mdx)(a.Colors,{color:m.theme.colors.red.primary,fluid:!0,mdxType:"Colors"},(0,n.mdx)(c.GridBounds,{mdxType:"GridBounds"},(0,n.mdx)(m.Text,{mdxType:"Text"},3))))))),(0,n.mdx)("h2",{id:"props"},"Props"),(0,n.mdx)(i.Props,{of:m.Container,mdxType:"Props"}),(0,n.mdx)("h2",{id:"row"},"Row"),(0,n.mdx)(i.Props,{of:m.Row,mdxType:"Props"}),(0,n.mdx)("h2",{id:"col"},"Col"),(0,n.mdx)(i.Props,{of:m.Col,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\lib\\organisms\\Grid\\Grid.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=src-lib-organisms-grid-grid.63735a401981adb1dc46.js.map