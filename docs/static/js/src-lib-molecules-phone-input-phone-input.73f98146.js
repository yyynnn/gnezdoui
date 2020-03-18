(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"./src/lib/molecules/PhoneInput/PhoneInput.mdx":function(A,e,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),g=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");o("./node_modules/core-js/modules/es.object.assign.js"),o("./node_modules/core-js/modules/es.object.define-property.js"),o("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var d=g(o("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js")),t=g(o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),B=n(o("./node_modules/react/index.js")),u=o("./node_modules/@mdx-js/react/dist/index.es.js"),s=o("./node_modules/docz/dist/index.esm.js"),r=o("./src/lib/index.js"),l={};function a(A){var e=A.components,o=(0,t.default)(A,["components"]);return(0,u.mdx)("wrapper",Object.assign({},l,o,{components:e,mdxType:"MDXLayout"}),(0,u.mdx)("h1",{id:"input-phone"},"Input Phone"),(0,u.mdx)("h2",{id:"basic"},"Basic"),(0,u.mdx)(s.Playground,{__position:0,__code:"<PhoneInput />",__scope:{props:this?this.props:o,useState:B.useState,Playground:s.Playground,Props:s.Props,PhoneInput:r.PhoneInput,Input:r.Input,Spacer:r.Spacer,Text:r.Text,Heading:r.Heading,Col:r.Col,Container:r.Container,Row:r.Row},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGBnAILJ2HkV1jXlM0_X5O1IPYAAFKBXESFIhFCDAlmwgc7CQo1ZXaA8AC90Ig9goOw4ZnQaVAZnCJZ2M4gglmcGYJQyJZLGwPj2AACXFFgZyWRwoDk4DXDQYT2BFUZEOQ6ioAgDwGMwtTNS0k1NXaMFUF0FFjlOWi4MSLF2G4Jj1iiARnlQK52gABnYJMZiwdo92rQTOwKTyABZ_PYAA2fzAvWMBgIAMW9aBEk8_hnEOBEHUwHChH4JYiGoSg4EEhF4urRKaGcCBaMudgAEZwqC-RzMsqYAEE5kc9gIyg8gbCgdAw0QjlHLEProxkdgUXsmBuGAOi7KxeQtxrYBBugEbggAMl28ZEnmShmi24bRu4S65TAYjJQGVB2nYAB-DZtrDCNxquM6dtQNrqykGQqzfMwYXVY4YDAMIoCmD6Jqm_7uuXasE0DSUcCSzIUivAh1prWsWOoGAePCdhNxXKRUYIdHMex9apERoGzC_EByu2Vw0n_OBqEA3QQIMMDgHWfhUG9RkkHYfgfmLaoMnNH8yTFoKLH4VgMnyah-CufgvJwHWvMKoWQHKch-hmbt_XF_hOtmjDYGhLBvQV8GyUoRJczyAoJ01c0pb-UsDerfgojQTWJZUcMNDgAPlaNmB5nDCyIHgUPBeRsPTUlUP-AAPUa6KcAADhwaLo5rfg6KzkBc5wAAmXXS5jjOLStSvc_zouS5AdY_vkZnpe8D5qEgFJOe57Ref0BhBZAWgfSyTXJdNWhzSb81Zhmfhe_kbegA",mdxType:"Playground"},(0,u.mdx)(r.PhoneInput,{mdxType:"PhoneInput"})),(0,u.mdx)("h2",{id:"custom-prefix-and-mask"},"Custom prefix and mask"),(0,u.mdx)(s.Playground,{__position:1,__code:'<PhoneInput\n  placeholder="\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"\n  prefix="8 800"\n  value="5001212"\n  mask={[/\\d/, /\\d/, /\\d/, \'-\', /\\d/, /\\d/, \'-\', /\\d/, /\\d/]}\n/>',__scope:{props:this?this.props:o,useState:B.useState,Playground:s.Playground,Props:s.Props,PhoneInput:r.PhoneInput,Input:r.Input,Spacer:r.Spacer,Text:r.Text,Heading:r.Heading,Col:r.Col,Container:r.Container,Row:r.Row},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGBnAILJ2HkV1jXlM0_X5O1IPYAAFKBXESFIhFCDAlmwgc7CQo1ZXaA8AC90Ig9goOw4ZnQaVAZnCJZ2M4gglmcGYJQyJZLGwPj2AACXFFgZyWRwoDk4DXDQYT2BFUZEOQ6ioAgDwGMwtTNS0k1NXaMFUF0FFjlOWi4MSLF2G4Jj1iiARnlQK52gABnYJMZiwdo92rQTOwKTyABZ_PYAA2fzAvWMBgIAMW9aBEk8_hnEOBEHUwHChH4JYiGoSg4EEhF4urRKaGcCBaMudgAEZwqC-RzMsqYAEE5kc9gIyg8gbCgdAw0QjlHLEProxkdgUXsmBuGAOi7KxeQtxrYBBugEbggAMl28ZEnmShmi24bRu4S65TAYjJQGVB2nYAB-DZtrDCNxquM6dtQNrqykGQqzfMwYXVY4YDAMIoCmD6Jqm_7uuXasE0DSUcCSzIUivAh1prWsWOoGAePCFc8bJIThmGjI-BAQBcEEAPhBAB4QQBWEEAARB2EAIRBmcAbhBmcAERB6cAXhBAAYQfhSZrfsIYgLAaYADnYWWvK8sXkbx9hWHiBkaYAViVxqACYDZVtWayiOBtkWgBtXleHQSQlhtu2Hd4W37blc1AvYR23e9pZ2g953XcDu2AF0_pNzcVykVGCHRzHsfWqREaBswvxAcrtlcNJ_zgahAN0ECDDA4B1n4VBvUZJB2H4H5i2qDJzR_MlK6Cix-FYDJ8mofgrn4LycH75WQFb6uQHKch-hmbt_Sr_hOtmjDYGhLBvWb8GyUoRJczyAoJ01c1a7-UtCtLkAojQHvR9UbAc5P6t-EweZwwsiB4EvkvVf4U1JUv_gAD1GrRRwLLHA0U754wfjZX-IAAE4H1gPcBNYv77ytNAgBQCQFgJAOsP68g05128B8agkAUg5zztoAu-gGAlxALQH0WQe411NLQc038LSzBmPwPB8geFAA",mdxType:"Playground"},(0,u.mdx)(r.PhoneInput,{placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",prefix:"8 800",value:"5001212",mask:[/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/],mdxType:"PhoneInput"})),(0,u.mdx)("h2",{id:"controlled--clearable"},"Controlled & Clearable"),(0,u.mdx)(s.Playground,{__position:2,__code:"() => {\n  const [value, setValue] = useState('+7 ')\n  return (\n    <React.Fragment>\n      <PhoneInput\n        label=\"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: \"\n        clear={true}\n        onClear={() => {\n          setValue('+7')\n        }}\n        value={value}\n        onChange={e => {\n          setValue(e.currentTarget.value)\n        }}\n      />\n      <Text>Input value: {value}</Text>\n    </React.Fragment>\n  )\n}",__scope:{props:this?this.props:o,useState:B.useState,Playground:s.Playground,Props:s.Props,PhoneInput:r.PhoneInput,Input:r.Input,Spacer:r.Spacer,Text:r.Text,Heading:r.Heading,Col:r.Col,Container:r.Container,Row:r.Row},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGBnAILJ2HkV1jXlM0_X5O1IPYAAFKBXESFIhFCDAlmwgc7CQo1ZXaA8AC90Ig9goOw4ZnQaVAZnCJZ2M4gglmcGYJQyJZLGwPj2AACXFFgZyWRwoDk4DXDQYT2BFUZEOQ6ioAgDwGMwtTNS0k1NXaMFUF0FFjlOWi4MSLF2G4Jj1iiARnlQK52gABnYJMZiwdo92rQTOwKTyABZ_PYAA2fzAvWMBgIAMW9aBEk8_hnEOBEHUwHChH4JYiGoSg4EEhF4urRKaGcCBaMudgAEZwqC-RzMsqYAEE5kc9gIyg8gbCgdAw0QjlHLEProxkdgUXsmBuGAOi7KxeQtxrYBBugEbggAMl28ZEnmShmi24bRu4S65TAYjJQGVB2nYAB-DZtrDCNxquM6dtQNrqykGQqzfMwYXVY4YDAMIoCmD6Jqm_7uuXasLGAWHuEm4AVwsDr2AAbVYeIGSWGCCAANUJmAAF1eryWD4NoR8AGoAHY5TfGsay6Ag-nMKNkY52tA0lHAksyFIrwIdaBZrRgWOoGAePCLHpfYPDAigPgQEAXBBAD4QQAeEEAVhBAAEQdhACEQA3AG4QA3ABEQHXAF4QQAGECufhlel8hyQERbUQZP6VYF6h7A9xa0Yx12VZJ8moAZJnmdfMOOfkX2_ZrAmo4W4BU59-OawDvwZ3T7p0ec_nk9m0dI-jv9egEMMCEsVw3NHHBM5gdnS8QpO_c3bPGFErBJcVqYW6uDOKfkKQ-8lsOpCFggRbFiWpZrNuLET6NJERoGzC_EByu2Vw0n_OBqEA3QQIMMDMerfhUG9RkkHYfgfmLaoMnNH8yXvoKLH4VgMnyag_BnYgC8jgUBXlCrrH4OUcg_QZjdn9A_fgnVZoYVgNCLA3pP7gzJJQRIuY8gFAnJqc0z8_ilkgdfEAUQ0BAMfiocMGg4CUJ_iATA8xwwWQgPAOhV8Ob8FNJKOh_AAB6jVoo4AABw4Giiwms0CbLCJAGInAAAmMBcjWGCItFaJRYiJHSNkSAdYf15A7xft4D41BIApCPifbQZ99AMExiAWgPoshAKfqaWg5ptHmlmDMfgZjE7yCAA",mdxType:"Playground"},(function(){var A=(0,B.useState)("+7 "),e=(0,d.default)(A,2),o=e[0],n=e[1];return(0,u.mdx)(B.default.Fragment,null,(0,u.mdx)(r.PhoneInput,{label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: ",clear:!0,onClear:function(){n("+7")},value:o,onChange:function(A){n(A.currentTarget.value)},mdxType:"PhoneInput"}),(0,u.mdx)(r.Text,{mdxType:"Text"},"Input value: ",o))})),(0,u.mdx)("h2",{id:"disabled"},"Disabled"),(0,u.mdx)(s.Playground,{__position:3,__code:"<PhoneInput disabled value={'+79672641838'} />",__scope:{props:this?this.props:o,useState:B.useState,Playground:s.Playground,Props:s.Props,PhoneInput:r.PhoneInput,Input:r.Input,Spacer:r.Spacer,Text:r.Text,Heading:r.Heading,Col:r.Col,Container:r.Container,Row:r.Row},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYBcjgGBnAILJ2HkV1jXlM0_X5O1IPYAAFKBXESFIhFCDAlmwgc7CQo1ZXaA8AC90Ig9goOw4ZnQaVAZnCJZ2M4gglmcGYJQyJZLGwPj2AACXFFgZyWRwoDk4DXDQYT2BFUZEOQ6ioAgDwGMwtTNS0k1NXaMFUF0FFjlOWi4MSLF2G4Jj1iiARnlQK52gABnYJMZiwdo92rQTOwKTyABZ_PYAA2fzAvWMBgIAMW9aBEk8_hnEOBEHUwHChH4JYiGoSg4EEhF4urRKaGcCBaMudgAEZwqC-RzMsqYAEE5kc9gIyg8gbCgdAw0QjlHLEProxkdgUXsmBuGAOi7KxeQtxrYBBugEbggAMl28ZEnmShmi24bRu4S65TAYjJQGVB2nYAB-DZtrDCNxquM6dtQNrqykGQqzfMwYXVY4YDAMIoCmD6Jqm_7uuXasE0DSUcCSzIUivAh1prWsWOoGAePCY5bFcDxYByVh4gZRb2gAagAdgATmixmACZovCxqAA4kx59okM3FcpFRgh0cx7H1qkRGgbML8QHK7ZXDSf84GoQDdBAgwwOAdZ-FQb1GSQdh-B-Ytqgyc0fzJY2gosfhWAyfJqH4K5-C8nBPa8wr9ZAcpyH6GZu39E3-E62aMNgaEsG9W3wbJShElzPICgnTVzXNv5S196t-CiNA3dNlRww0OBc4d_2YHmcMLIgeAi715Hi9NSUi_4AA9RropwHmcGiiua34Oj25ALucHZr3B8r1uLStUeu57vuB5AdY_vkBWLe8D5qEgFI1Y17Qtf0Bg9ZAWgfSyN2zdNWhzVn81ZhmfgN_kN-gA",mdxType:"Playground"},(0,u.mdx)(r.PhoneInput,{disabled:!0,value:"+79672641838",mdxType:"PhoneInput"})),(0,u.mdx)("h2",{id:"props"},"Props"),(0,u.mdx)(s.Props,{of:r.PhoneInput,mdxType:"Props"}),(0,u.mdx)("h3",{id:"-props-of-input"},"+ Props of Input"),(0,u.mdx)(s.Props,{of:r.Input,mdxType:"Props"}))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\lib\\molecules\\PhoneInput\\PhoneInput.mdx"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=src-lib-molecules-phone-input-phone-input.63735a401981adb1dc46.js.map