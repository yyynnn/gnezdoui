(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"./src/lib/atoms/ToolTip/ToolTip.mdx":function(o,e,A){"use strict";var s=A("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=A("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");A("./node_modules/core-js/modules/es.object.assign.js"),A("./node_modules/core-js/modules/es.object.define-property.js"),A("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=m;var i=n(A("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),d=s(A("./node_modules/react/index.js")),l=A("./node_modules/@mdx-js/react/dist/index.es.js"),p=A("./node_modules/docz/dist/index.esm.js"),a=A("./src/lib/index.js"),t={};function m(o){var e=o.components,A=(0,i.default)(o,["components"]);return(0,l.mdx)("wrapper",Object.assign({},t,A,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"tooltip"},"ToolTip"),(0,l.mdx)(p.Playground,{__position:0,__code:"<ToolTip\n  hint={`\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0442\u0443\u043b\u0442\u0438\u043f\u0430 \u2014 288 px.`}\n>\n  <span>Hover above</span>\n</ToolTip>\n<Spacer />\n<ToolTip hint={'Small hint'} placement=\"right\">\n  <span>\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430</span>\n</ToolTip>",__scope:{props:this?this.props:A,useState:d.useState,Playground:p.Playground,Props:p.Props,ToolTip:a.ToolTip,Spacer:a.Spacer,Text:a.Text,Heading:a.Heading,Col:a.Col,Container:a.Container,Row:a.Row},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGBnAILJ2HkV1jXlM0_X5O1IPYAAFKBXESFIhFCDAlmwgc7CQo1ZXaA8AC90Ig9goMsYQoEsCAZiWZwZglDIlksbACCWAAJcUWBnJZHCgSTgNcNA-PYEVRkQ5DqKgCAPAYzDFM1VSTU1dowVQXQUWOU5aLgxIsXYbgmPWKIBGeVArnaAAGdgkxmLB2j3aseM7AoXIAFi89gADYvJ89YwGAgAxb1oESFz-GcQ4EQdTAcKEfgliIahKDgHiESi6sYpoZwIFoy52AARiC3z5CMkypgAQTmGz2AjKDyBsKB0DDRCORssROujGR2BRKyYG4YA6MsrF5C3GtgB66B-uCAAyDbxkSeZKGaVa-oG7gTrlMBiMlAZUHadgAH4NjWsMIyGq5DvW1BGurKQZCrN8zBhdVjhgMAwigKZnuG0avra5dqwTQNJRwWLMhSK8CCWmtaxYyg2I4ldMZsGgZuKQAkEEAQRBAH4QQBuEEAaRBACYQQAGEEAORBAEkQQAOEEAVhB2ApwA-EEAFhAycALhAGcAdhBBbZ9gyf5jnAAEQQA2EAZwAhEHYQWZaVwWea5nmKbZsmGcAXhBOZVnn9cVjnAE4QfXZYZ9hFcAYRAqcVtmKZtwAUAnYAAmAAOL2-1wYpPsxiwMaDxhCvcMRhMoVgMhCLwY6kcPUBD7dsdx2Gg9rbjeKOTd8ax1j2JmXw0AIGb2mcKIEhLmh2iQsleLRvhBAgFJCHEfOEyTsRABwQBmqY5_XABkQYXAHkQbn-aF0XhcTnjk_zqQ06LkOpARggkZRtGlqkGHfrML8QCK7ZXDSf84GoQDdBAgwwOAdZ-FQb1GSQdh-B-Ytqgyc0fzJZ_fIsfgMcBD5GoPwK4_BXI4Ega5HK98QDlHIP0GY3Z_Qv34C1CaGFYDQiwN6X-QMySUESLmPIBQJyanNO_P4pZYHVn4FENAYDX4qHDBoOAtCAHwJgPMcMxkIDwCYXfOGzDTSSiYfwAAejVMKOAvY4DChwms_A6LiJAFInAHsoGKM4aIi0VpVFSJkXIhRIB1ifXkAfD-3gPjUEgCkM-F9tBX30AwO-IBaA-iyGAt-ppaDml0eaWYMx-AWPkGEoAA",mdxType:"Playground"},(0,l.mdx)(a.ToolTip,{hint:"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0442\u0443\u043b\u0442\u0438\u043f\u0430 \u2014 288 px.",mdxType:"ToolTip"},(0,l.mdx)("span",null,"Hover above")),(0,l.mdx)(a.Spacer,{mdxType:"Spacer"}),(0,l.mdx)(a.ToolTip,{hint:"Small hint",placement:"right",mdxType:"ToolTip"},(0,l.mdx)("span",null,"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430"))),(0,l.mdx)("h2",{id:"props"},"Props"),(0,l.mdx)(p.Props,{of:a.ToolTip,mdxType:"Props"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\lib\\atoms\\ToolTip\\ToolTip.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=src-lib-atoms-tool-tip-tool-tip.63735a401981adb1dc46.js.map