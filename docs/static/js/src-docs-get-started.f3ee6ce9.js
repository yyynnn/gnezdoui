(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/docs/GetStarted.mdx":function(e,n,t){"use strict";var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");t("./node_modules/core-js/modules/es.object.assign.js"),t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.object.is-extensible.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var m=s(t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),r=(o(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),d=(t("./node_modules/docz/dist/index.esm.js"),{});function a(e){var n=e.components,t=(0,m.default)(e,["components"]);return(0,r.mdx)("wrapper",Object.assign({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"\u043d\u0430\u0447\u0430\u043b\u043e-\u0440\u0430\u0431\u043e\u0442\u044b"},"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b"),(0,r.mdx)("h2",{id:"installation"},"Installation"),(0,r.mdx)("pre",null,(0,r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm add gneznoui\n")),(0,r.mdx)("p",null,"*","Aye, capt'n, there's ",(0,r.mdx)("strong",{parentName:"p"},"add")," command in our npm!"),(0,r.mdx)("h2",{id:"dot-env"},"Dot env"),(0,r.mdx)("p",null,"To start up create an .env file in project's root whit this prerequisites:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"PORT=666\nDOCZ_PORT=667\nAPP_ID=gnezdo_docz\n")),(0,r.mdx)("h2",{id:"getting-set-up"},"Getting set up"),(0,r.mdx)("p",null,"To start using the components, please follow these steps:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Wrap your application in a ",(0,r.mdx)("strong",{parentName:"li"},"styled-components")," ",(0,r.mdx)("inlineCode",{parentName:"li"},"<ThemeProvider>")," and provide it with theme:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { ThemeProvider } from 'styled-components'\nimport { theme } from 'gneznoui'\n\nconst Root = () => (\n  <ThemeProvider theme={theme}>\n    <App />\n  </ThemeProvider>\n)\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Then start using components. And you can access theme from props:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { Button } from 'gneznoui'\n\nconst App = props => <Button style={{ color: props.theme.colors.pink }}>PRESS ME!</Button>\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Or just import it straight from the lib to avoid bloat:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { Button, theme } from 'gneznoui'\nimport styled from 'styled-components'\n\nconst App = props => <StyledButton>PRESS ME!</StyledButton>\n\nconst StyledButton = styled(Button)`\n  color: ${theme.colors.pink};\n`\n// instead of\n// const StyledButton = styled(Button)`\n//    color: ${({ theme }) => theme.colors.pink};\n//`\n")),(0,r.mdx)("h2",{id:"after-work-is-done"},"After work is done"),(0,r.mdx)("p",null,"Write a conventional commit with:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm run commit\n")),(0,r.mdx)("p",null,"Regular ",(0,r.mdx)("inlineCode",{parentName:"p"},"git commit")," with simple message wont cut it, resulting in error"))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\docs\\GetStarted.mdx"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-get-started.63735a401981adb1dc46.js.map