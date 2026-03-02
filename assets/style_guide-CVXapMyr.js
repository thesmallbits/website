import{b as e,h as t,x as n}from"./index-CsLGWLGP.js";import{ComponentFromMdx as r,valueFromMDX as i}from"./export_sample-DGkkmUWb.js";var a=t(),o=n(e(),1);function s(e){let t=(0,a.c)(2),{text:n}=e,r;return t[0]===n?r=t[1]:(r=(0,o.jsxs)(`p`,{children:[`Loaded from sample: `,n]}),t[0]=n,t[1]=r),r}const c={author:`Divij Verma`,created_at:`26-02-2026`,modified_at:`27-02-2026`,tags:[`tutorial`,`style guide`,`mdx`]};function l(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,del:`del`,em:`em`,h1:`h1`,h2:`h2`,img:`img`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:`Rules and regulations (and features) while writing mdx`}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsx)(t.p,{children:`MDX has (almost) all features of normal markdown`}),`
`]}),`
`,(0,o.jsx)(t.h2,{children:`Headers`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:`# Header 1
## Header 2
...
###### Header 6
`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Headers when clicked copy the URL to directly focus onto them`}),`
`,(0,o.jsx)(t.li,{children:`Only the first header of the file should be a Header-1 (single hash)`}),`
`]}),`
`,(0,o.jsx)(t.h2,{children:`Text formatting`}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Bold`}),` `,(0,o.jsx)(t.code,{children:`**Bold**`})]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:`italics`}),` `,(0,o.jsx)(t.code,{children:`_italics_`})]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.del,{children:`striked`}),` `,(0,o.jsx)(t.code,{children:`~striked~`})]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`inline code`})," `inline code`"]}),`
`,(0,o.jsx)(t.li,{children:`Code blocks`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'```<language>\n<code>\n```\n\n\n```py\n<code>\nfor i in range(10):\n    print("hello")\n```\n'})}),`
`,(0,o.jsxs)(t.ol,{start:`6`,children:[`
`,(0,o.jsx)(t.li,{children:`Tables - normally`}),`
`]}),`
`,(0,o.jsx)(t.h2,{children:`Embedding images`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Save images in `,(0,o.jsx)(t.code,{children:`/public/images`}),` folder and reference them here using `,(0,o.jsx)(t.code,{children:`/images/<image name>`})]}),`
`,(0,o.jsxs)(t.li,{children:[`DO NOT directly use the `,(0,o.jsx)(t.code,{children:`<img/>`}),` tag to embed images since they wont get styled automatically`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:`![BFOP](/images/BFOP.png)`})}),`
`,(0,o.jsx)(t.p,{children:`Preview`}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:`/images/BFOP.png`,alt:`BFOP`})}),`
`,(0,o.jsx)(t.h2,{children:`Embedding React components`}),`
`,(0,o.jsx)(t.p,{children:`Since we are using MDX we can import and export any component to and from the .mdx files`}),`
`,(0,o.jsx)(t.p,{children:`There are two ways to go about when including custom components`}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsx)(t.li,{children:`Direct imports`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import MyComponent from "@/components/MyComponent"

<MyComponent/>
`})}),`
`,(0,o.jsx)(t.p,{children:`Example`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import Sample from "@/components/Sample"
<Sample text={"this is it being directly imported into the mdx file"/> <Sample text={"this is it being directly imported into the mdx file"/>
`})}),`
`,`
`,(0,o.jsx)(s,{text:`this is it being directly imported into the mdx file`}),`
`,(0,o.jsxs)(t.ol,{start:`2`,children:[`
`,(0,o.jsxs)(t.li,{children:[`We define it globally by adding it to the global `,(0,o.jsx)(t.code,{children:`Elements`}),` map object`,`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Goto `,(0,o.jsx)(t.em,{children:`/src/content/registry.ts`})]}),`
`,(0,o.jsxs)(t.li,{children:[`Import and add the element component to the object passed to `,(0,o.jsx)(t.code,{children:`generateElementsFrom`}),` function, and then directly reference that component here`]}),`
`]}),`
`]}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-tsx`,children:`import {generateElementsFrom} from "@d1vij/jassm";
import Sample from "@/components/Sample";

export const Elements = generateElementsFrom({
    Sample, // this will automatically be injecting in all mdx files
}, true);
`})}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsxs)(t.p,{children:[`the build step `,(0,o.jsx)(t.strong,{children:`WONT FAIL`}),` if the compiler is unable to resolve the component at build time, instead it would fail at runtime`]}),`
`]}),`
`,(0,o.jsx)(t.h2,{children:`Embedding js`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`You can also embedded js expression into mdx by wrapping the expression in `,(0,o.jsx)(t.code,{children:`{}`})]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`Example`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:`{Date.now()}`}),` => `,Date.now()]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Since compiled mdx is just a react component, you can import-export anything from it`}),`
`]}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsx)(t.li,{children:`Importing from somwehre`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import {value} from "@/components/Sample"

Imported value is {value}
`})}),`
`,`
`,(0,o.jsxs)(t.p,{children:[`Imported value is `,10]}),`
`,(0,o.jsxs)(t.ol,{start:`2`,children:[`
`,(0,o.jsx)(t.li,{children:`Exporting something from the mdx file into a mdx file`}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`Stuff like components, variables etc can be exported from mdx files`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:`import {
valueFromMDX,
ComponentFromMdx
} from "@/assets/mdx/export_sample.mdx";

{valueFromMDX}

<ComponentFromMdx/>
`})}),`
`,`
`,i,`
`,(0,o.jsx)(`br`,{}),`
`,(0,o.jsx)(r,{}),`
`,(0,o.jsxs)(t.ol,{start:`2`,children:[`
`,(0,o.jsx)(t.li,{children:`Exporting something from mdx file into React files`}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`Components and variables can be imported from mdx files in two ways`}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsx)(t.li,{children:`Direct import from mdx file`}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import {
valueFromMDX,
ComponentFromMdx
} from "@/assets/mdx/blogs/export_sample.mdx";

console.log(valueFromMDX);
`})}),`
`,(0,o.jsxs)(t.ol,{start:`2`,children:[`
`,(0,o.jsxs)(t.li,{children:[`Using the `,(0,o.jsx)(t.code,{children:`registry.getExport()`}),` method if the file is registered in in the registry (see `,(0,o.jsx)(t.a,{href:`#working-with-registry`,children:`working with registry`}),`)`]}),`
`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import {registry} from "@/content/registry";
const exports = 
`})}),`
`,(0,o.jsx)(t.h2,{children:`Working with registry`}),`
`,(0,o.jsx)(t.h2,{children:`Blog Metadata`}),`
`,(0,o.jsxs)(t.p,{children:[`Each blog `,(0,o.jsx)(t.strong,{children:`must`}),` export a metadata object. The schema for which is present at `,(0,o.jsx)(t.code,{children:`/src/schemas/BlogExportSchema.ts`})]}),`
`,(0,o.jsx)(t.p,{children:`Example`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`export const meta = {
  author: "Divij Verma",
  created_at: "26-02-2026",
  modified_at: "27-02-2026",
  tags: ["tutorial", "style guide", "mdx"],
};
`})}),`
`,(0,o.jsx)(t.p,{children:`If the exported meta is not upto the schema, runtime error will be raised`})]})}function u(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}export{u as default,c as meta};