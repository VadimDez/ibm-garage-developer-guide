(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{414:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(430);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=i("AnchorLinks"),c=i("AnchorLink"),s={_frontmatter:b},p=r.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"developer-tools"},"Developer Tools"),Object(n.b)("h3",{id:"overview"},"Overview"),Object(n.b)("p",null,"The IBM Garage for Cloud Developer Tools have been designed to help a team configure a set of popular open source tools that can enable\ncloud native development with the IBM Cloud."),Object(n.b)("p",null,"Typically a squad lead or lead developer install and setup these tools after the initial inception workshop.\nThe objective of this is to reduce the amount of time a team needs to configure and\nprepare their IBM Kubernetes Service, Red Hat OpenShift or Red Hat Code Ready Containers development environments.\nThe key benefit of this is to make the end to end CI/CD development lifecycle for Kubernetes,OpenShift and CodeReady Containers\nconsistent across each platform and make the out of the box developer experience as simple as possible."),Object(n.b)("p",null,"The installation is managed with ",Object(n.b)("strong",{parentName:"p"},"Terraform")," and it enables it to be modular in configuration\nso tools can be easily disabled or new tools added. The combination of tools selected are proven in the\nindustry to deliver real value for modern cloud native development."),Object(n.b)("p",null,"The Red Hat Innovation Lab has a very similar approach to how they deliver success with OpenShift, view their approach ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/rht-labs/labs-ci-cd"}),"here"),"."),Object(n.b)("p",null,"After installation your environment will consist of the following development tools which have been installed into your IBM Kubernetes Service,Red Hat OpenShift and Red Hat CodeReady Containers cluster managed cluster."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"IBM Container Service Cluster (3 nodes) for Kubernetes or OpenShift"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"dev"),",",Object(n.b)("em",{parentName:"li"},"test"),",",Object(n.b)("em",{parentName:"li"},"staging")," and ",Object(n.b)("em",{parentName:"li"},"tools")," namespaces created into your Development cluster")),Object(n.b)("p",null,"The following tools installed:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Capability"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Tool"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Continuous Integration"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://jenkins.io/"}),"Jenkins CI")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Jenkins is a common tool for Continuous Integration")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Code Analysis"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://www.sonarqube.org/"}),"SonarQube")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"SonarQube can scan code and give a dashboard of analysis")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Artifact and Helm Storage"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://jfrog.com/open-source/"}),"Artifactory")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Artifactory is an artifact storage and Helm chart repository")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Continuous Deployment"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://argoproj.github.io/argo-cd/"}),"Argo CD")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"ArgoCD support Continuous Delivery with GitOps")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Contract API Testing"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://docs.pact.io/"}),"Pack Broker")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Pact Broker enables API contract testing")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Eclipse Che"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://www.eclipse.org/che/"}),"Eclipse CHE")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Web IDE for editing and managing code")))),Object(n.b)("p",null,"The following IBM Cloud services will be created and bound to you your development cluster namespaces:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Capability"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Service"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Logging"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA?topic=LogDNA-getting-started"}),"LogDNA Logging")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Manage app logging LogDNA")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Monitoring"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started"}),"SysDig Monitoring")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Manage monitoring of apps with SysDig")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"AppID"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/appid?topic=appid-service-access-management"}),"AppID Application Authentication")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Secure your apps, APIs and Kubernetes Ingress end points")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Cloudant"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Cloudant?topic=cloudant-getting-started"}),"Cloudant NoSQL Database")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"NoSQL Database commonly used for data persistence")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Cloud Object Storage"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/cloud-object-storage?topic=cloud-object-storage-getting-started"}),"Cloud Object Storage Storage")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Storage service commonly used for binary content")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"PostreSQL"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/databases-for-postgresql?topic=databases-for-postgresql-about"}),"PostgreSQL")," (used by SonarQube)"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"SQL Database used for structure data persistence")))),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)("p",null,"To continue getting started work through the following guides"),Object(n.b)(l,{mdxType:"AnchorLinks"},Object(n.b)(c,{to:"../installation/overview",mdxType:"AnchorLink"},"Installation"),Object(n.b)(c,{to:"../getting-started/deploy-app",mdxType:"AnchorLink"},"Deploy First App"),Object(n.b)(c,{to:"../guides/overview",mdxType:"AnchorLink"},"Guides"),Object(n.b)(c,{to:"../starterkits/overview",mdxType:"AnchorLink"},"Starter Kit Templates")))}d.isMDXComponent=!0},428:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},429:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},430:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(428),o=a(0),b=a.n(o),i=a(105),l=a.n(i),c=a(195),s=a(127),p=a(3),d=a.n(p),m=a(384),u=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(429),O=a(385),j=function(e){var t=e.relativePagePath,a=e.repository,r=g.data.site.siteMetadata.repository,o=a||r,b=o.baseUrl,i=o.subDirectory,l=b+"/edit/"+o.branch+i+"/src/pages"+t;return b?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},h=a(193),N=(a(59),a(26)),f=a(386);var v=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),b=o===r,i=new RegExp(r+"(?!-)"),c=a.replace(i,o);return Object(n.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(n.b)(N.Link,{className:f.link,to:""+c},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},o))))))},r}(b.a.Component),y=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,b=e.Title,i=t.frontmatter,p=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,g=p.tabs,O=p.title,N=p.theme,f=p.description,w=p.keywords,C=r.data.site.pathPrefix,S=C?o.pathname.replace(C,""):o.pathname,D=g?S.split("/").slice(-1)[0]||l()(g[0],{lower:!0}):"";return Object(n.b)(s.a,{homepage:!1,theme:N,pageTitle:O,pageDescription:f,pageKeywords:w,titleType:m},Object(n.b)(u,{title:b?Object(n.b)(b,null):O,label:"label",tabs:g}),g&&Object(n.b)(v,{slug:S,tabs:g,currentTab:D}),Object(n.b)(y.a,{padded:!0},a,Object(n.b)(j,{relativePagePath:d})),Object(n.b)(h.a,{pageContext:t,location:o,slug:S,tabs:g,currentTab:D}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-overview-index-mdx-cc8b8e868c8f68f145e8.js.map