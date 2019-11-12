(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{417:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return r})),t.d(e,"default",(function(){return m}));t(11),t(5),t(6),t(4),t(10),t(1),t(0);var a=t(106),o=t(433);function i(){return(i=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(A[a]=t[a])}return A}).apply(this,arguments)}var r={},n=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}},s=n("Row"),l=n("Column"),c=n("ArticleCard"),b=n("AnchorLinks"),d=n("AnchorLink"),p={_frontmatter:r},g=o.a;function m(A){var e=A.components,t=function(A,e){if(null==A)return{};var t,a,o={},i=Object.keys(A);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=A[t]);return o}(A,["components"]);return Object(a.b)(g,i({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"paths-to-installation"},"Paths to Installation"),Object(a.b)("p",null,"The IBM Garage for Cloud Developer Tools support the installation into a number of\nKubernetes-based cluster technologies. The tools can be installed into multiple clusters and support ",Object(a.b)("strong",{parentName:"p"},"IBM Kubernetes")," and ",Object(a.b)("strong",{parentName:"p"},"Red Hat OpenShift")," managed cluster environments. The installation process is built using ",Object(a.b)("strong",{parentName:"p"},"Terraform Infrastructure as Code"),". For a more detailed explanation on this you can read the ",Object(a.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/iasc"}),"Infrastructure as Code Guide"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Complete the instalation and setup of the ",Object(a.b)("a",i({parentName:"li"},{href:"/ibm-garage-developer-guide/installation/pre-reqs"}),"Prerequisites")," before starting any of the installations paths.")),Object(a.b)("p",null,"Select the approach that best suites your requirement:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If its a brand new project or being managed by a ",Object(a.b)("em",{parentName:"li"},"Cloud Administrator"),", use the ",Object(a.b)("em",{parentName:"li"},"New")," path"),Object(a.b)("li",{parentName:"ul"},"If you have an existing IBM Cloud managed cluster, use the ",Object(a.b)("em",{parentName:"li"},"Existing")," approach"),Object(a.b)("li",{parentName:"ul"},"If you want to do local development on your laptop use ",Object(a.b)("em",{parentName:"li"},"OpenShift 4 CodeReady Containers")," path")),Object(a.b)(s,{mdxType:"Row"},Object(a.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(a.b)(c,{color:"dark",title:"Install New",subTitle:"Create a new IBM Cloud managed cluster with all the Development Tools installed",href:"/installation/installation-ibm-cloud",mdxType:"ArticleCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(a.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.8%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeGVcEgf/8QAGBABAAMBAAAAAAAAAAAAAAAAAQACEDP/2gAIAQEAAQUCY49LOf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAABIDH/2gAIAQEABj8CZk//xAAaEAEAAwADAAAAAAAAAAAAAAABACExEGFx/9oACAEBAAE/IQD1cnkcb3Gomz//2gAMAwEAAgADAAAAEJDv/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QV//EABwQAQACAgMBAAAAAAAAAAAAAAEAESGRMWFxgf/aAAgBAQABPxAxVy0CFAaPXM9dwNAgS3UpfTEoyrU//9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"code",title:"code",src:"/ibm-garage-developer-guide/static/68a0158912a13bce11729fd00f85f6a0/a4ec1/code.jpg",srcSet:["/ibm-garage-developer-guide/static/68a0158912a13bce11729fd00f85f6a0/c9de7/code.jpg 288w","/ibm-garage-developer-guide/static/68a0158912a13bce11729fd00f85f6a0/6afcd/code.jpg 576w","/ibm-garage-developer-guide/static/68a0158912a13bce11729fd00f85f6a0/a4ec1/code.jpg 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",loading:"lazy"})),"\n    "))),Object(a.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(a.b)(c,{color:"dark",title:"Install Existing",subTitle:"Install the Development Tools into an existing IBM Cloud managed cluster",href:"/installation/installation-existing",mdxType:"ArticleCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"730px"}},"\n      ",Object(a.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.57534246575342%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMBBP/aAAwDAQACEAMQAAABRNSrSGRw0//EABkQAAIDAQAAAAAAAAAAAAAAAAABAhEhQf/aAAgBAQABBQJncGiKuTpH/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AY1//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQASMf/aAAgBAgEBPwHrYW//xAAXEAEAAwAAAAAAAAAAAAAAAAAQABEx/9oACAEBAAY/AmzJ/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERITFB/9oACAEBAAE/Icq8pFhroseEuiLomDo//9oADAMBAAIAAwAAABBvD//EABcRAAMBAAAAAAAAAAAAAAAAAAABIXH/2gAIAQMBAT8QaaTD/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERkfD/2gAIAQIBAT8QYpS3tP/EABoQAQEBAQEBAQAAAAAAAAAAAAERIQBRMYH/2gAIAQEAAT8QYVMMnvj2ilj5HgQrrS5yOHmT860YZ5ywFT6M7//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"code1",title:"code1",src:"/ibm-garage-developer-guide/static/8600626a984bd9e9412dd9fc9b50f517/d4897/code1.jpg",srcSet:["/ibm-garage-developer-guide/static/8600626a984bd9e9412dd9fc9b50f517/c9de7/code1.jpg 288w","/ibm-garage-developer-guide/static/8600626a984bd9e9412dd9fc9b50f517/6afcd/code1.jpg 576w","/ibm-garage-developer-guide/static/8600626a984bd9e9412dd9fc9b50f517/d4897/code1.jpg 730w"],sizes:"(max-width: 730px) 100vw, 730px",loading:"lazy"})),"\n    "))),Object(a.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(a.b)(c,{color:"dark",title:"Install Red Hat CRC",subTitle:"Install the Development Tools into Red Hat CodeReady Containers",href:"/installation/installation-crc",mdxType:"ArticleCard"},Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(a.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.7%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAABxkvklvwBT//EABgQAQADAQAAAAAAAAAAAAAAAAIAETEQ/9oACAEBAAEFAmaNcerJ/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/AUJc/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhABAQEAAAAAAAAAAAAAAAAAEAHR/9oACAEBAAY/AsY//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERITFh/9oACAEBAAE/IbCy+CWuIgr2eNGRT//aAAwDAQACAAMAAAAQQw//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/ENwin//EABYRAQEBAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxAWzP/EABoQAQEBAQADAAAAAAAAAAAAAAERACFBcZH/2gAIAQEAAT8QtAOqRH5pqA+uuAWaCBWwJM7zy4e//9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"code2",title:"code2",src:"/ibm-garage-developer-guide/static/d41e8261a5cf31d7c026b62f70377e00/a4ec1/code2.jpg",srcSet:["/ibm-garage-developer-guide/static/d41e8261a5cf31d7c026b62f70377e00/c9de7/code2.jpg 288w","/ibm-garage-developer-guide/static/d41e8261a5cf31d7c026b62f70377e00/6afcd/code2.jpg 576w","/ibm-garage-developer-guide/static/d41e8261a5cf31d7c026b62f70377e00/a4ec1/code2.jpg 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",loading:"lazy"})),"\n    ")))),Object(a.b)("p",null,"Start reading about how to use these tools using the links below:"),Object(a.b)(b,{mdxType:"AnchorLinks"},Object(a.b)(d,{to:"../../getting-started/deploy-app",mdxType:"AnchorLink"},"Deploy First App"),Object(a.b)(d,{to:"../../guides/overview",mdxType:"AnchorLink"},"Guides"),Object(a.b)(d,{to:"../../starterkits/overview",mdxType:"AnchorLink"},"Starter Kit Templates")))}m.isMDXComponent=!0},431:function(A){A.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},432:function(A){A.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},433:function(A,e,t){"use strict";t(32),t(28);var a=t(1),o=t(431),i=t(0),r=t.n(i),n=t(105),s=t.n(n),l=t(195),c=t(127),b=t(3),d=t.n(b),p=t(384),g=function(A){var e,t=A.title,o=A.tabs,i=void 0===o?[]:o;return Object(a.b)("div",{className:d()(p.pageHeader,(e={},e[p.withTabs]=i.length,e))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:p.text},t)))))},m=t(432),u=t(385),j=function(A){var e=A.relativePagePath,t=A.repository,o=m.data.site.siteMetadata.repository,i=t||o,r=i.baseUrl,n=i.subDirectory,s=r+"/edit/"+i.branch+n+"/src/pages"+e;return r?Object(a.b)("div",{className:"bx--row "+u.row},Object(a.b)("div",{className:"bx--col"},Object(a.b)("a",{className:u.link,href:s},"Edit this page on GitHub"))):null},E=t(193),B=(t(59),t(26)),N=t(386);var h=function(A){var e,t;function o(){return A.apply(this,arguments)||this}return t=A,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,o.prototype.render=function(){var A=this.props,e=A.tabs,t=A.slug,o=t.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(A){var e,i=s()(A,{lower:!0}),r=i===o,n=new RegExp(o+"(?!-)"),l=t.replace(n,i);return Object(a.b)("li",{key:A,className:d()((e={},e[N.selectedItem]=r,e),N.listItem)},Object(a.b)(B.Link,{className:N.link,to:""+l},A))}));return Object(a.b)("div",{className:N.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:N.list},i))))))},o}(r.a.Component),Q=t(194);e.a=function(A){var e=A.pageContext,t=A.children,i=A.location,r=A.Title,n=e.frontmatter,b=void 0===n?{}:n,d=e.relativePagePath,p=e.titleType,m=b.tabs,u=b.title,B=b.theme,N=b.description,f=b.keywords,O=o.data.site.pathPrefix,w=O?i.pathname.replace(O,""):i.pathname,v=m?w.split("/").slice(-1)[0]||s()(m[0],{lower:!0}):"";return Object(a.b)(c.a,{homepage:!1,theme:B,pageTitle:u,pageDescription:N,pageKeywords:f,titleType:p},Object(a.b)(g,{title:r?Object(a.b)(r,null):u,label:"label",tabs:m}),m&&Object(a.b)(h,{slug:w,tabs:m,currentTab:v}),Object(a.b)(Q.a,{padded:!0},t,Object(a.b)(j,{relativePagePath:d})),Object(a.b)(E.a,{pageContext:e,location:i,slug:w,tabs:m,currentTab:v}),Object(a.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-installation-overview-index-mdx-2e77df767cedd16db455.js.map