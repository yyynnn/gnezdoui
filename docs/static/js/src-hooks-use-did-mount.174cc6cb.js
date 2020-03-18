(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/hooks/useDidMount.mdx":function(e,o,n){"use strict";var s=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),t=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");n("./node_modules/core-js/modules/es.object.assign.js"),n("./node_modules/core-js/modules/es.object.define-property.js"),n("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=j;var d,A=t(n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js")),u=t(n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),r=s(n("./node_modules/react/index.js")),i=n("./node_modules/@mdx-js/react/dist/index.es.js"),m=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/lib/index.js"),a=n("./src/hooks/index.js"),c=(d="Component",{});function j(e){var o=e.components,n=(0,u.default)(e,["components"]);return(0,i.mdx)("wrapper",Object.assign({},c,n,{components:o,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"usedidmount"},"useDidMount"),(0,i.mdx)(m.Playground,{__position:0,__code:"() => {\n  const [state, setState] = useState('')\n  const Component = () => {\n    useDidMount(() => {\n      setState('Mounted')\n    })\n\n    return (\n      <div>\n        <Text bold>{state}</Text>\n      </div>\n    )\n  }\n  return <Component />\n}",__scope:{props:this?this.props:n,useState:r.useState,Playground:m.Playground,Props:m.Props,Text:l.Text,useDidMount:a.useDidMount},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGBnAILJ2HkV1jXlM0_X5O1IPYAAFKBXESFIhFCDAlmwgc7CQo1ZXaA8AC90Ig9goMsbApkot12igCAPAYzCmOgmAtS4PU2kzdiUOGShtjgXj1XYQNJWQ6jTUVMFUF0FFjlOWi4MSLF2G4Jj1iiARnlQK52gABnYJMZiwdo92rGYOxYGcLIAFjs9gADY7Ic9YwGAgAxb1oESCz-GcQ4EQdTAcKEfgliIahKDgZyEX86tApoZwIFoy52AARncxz5DUjSpgAQTmAz2AjKDyBsKB0DDRCOQMsQ6ujGR2BRPSYG4YA6N0rF5C3GtgEa6AWuCAAyWbxkSeZKGaKbmta7hNrlMBiMlAZUHadgAH4NmmsMI3aq41pm1AyurKQZCrN8zBhOTMDAMIoCmC6Oq6-7quXasLGAH7uE64AVwsCr2AAbRRLIlhggg4KyABdWq8lg-DaEfV9IcLVBNLXagXUM0HwfxixMaE9AROIggI3JoygZrVmkZRnH2jpvR0DxlnWfkZ7-ZrLoCD6cwo2F1mY1kSnWdrFisCmLxmrEYB4doeQpEVghxvlmsHtjOW331u79dF8XV0dEnM03Fd5DN2tJABp6zC_EB0u2Vw0n_OBqEA3QQIMMCIerfhUG9RkkHYfgfmLaoMnNH8ySjxyLH4VgMnyah-CufhLJwAvLMS9Z-HKch-hmbt_Wj_hKt6jDYGhLBvRT44YDJShElzPICgnTVzTjv5SxLsOQCiNBc5jlRww0OBR_TkBMHmcN1IgeAp9D1n-BU0Ra5AAA9QrvJwAAOHBvIXmsy-0qf-CPnAACZC6vxfd8tSI78P4-z4v_h1juvId28dvAfGoJAFIvt_baEDvoBgEMQC0B9FkXOsdTS0HNO_WYMx-BAIdvIIAA",mdxType:"Playground"},(function(){var e=(0,r.useState)(""),o=(0,A.default)(e,2),n=o[0],s=o[1];return(0,i.mdx)((function(){return(0,a.useDidMount)((function(){s("Mounted")})),(0,i.mdx)("div",null,(0,i.mdx)(l.Text,{bold:!0,mdxType:"Text"},n))}),{mdxType:"Component"})})))}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\hooks\\useDidMount.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=src-hooks-use-did-mount.63735a401981adb1dc46.js.map