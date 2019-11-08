(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{417:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(433);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},o={_frontmatter:c},l=i.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(l,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"To speed up the getting started experience and the installation experience, it is recommended that you make sure your development machine/laptop is fully prepared with the following pre-requisites tools and github configuration."),Object(n.b)("h2",{id:"installers-and-developers"},"Installers and Developers"),Object(n.b)("p",null,"The following is a list of desktop tools required to help with installation and developers."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You should have some basic knowledge of ",Object(n.b)("strong",{parentName:"p"},"Kubernetes")," and ",Object(n.b)("strong",{parentName:"p"},"Docker")," and modern software delivery techniques including CI/CD")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud Account")," this is required to enable development with the IBM Cloud and the managed services")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"}),"IBM Cloud CLI")," required for management of IBM Cloud Account and management of your managed ",Object(n.b)("strong",{parentName:"p"},"IBM Kubernetes")," and ",Object(n.b)("strong",{parentName:"p"},"Red Hat OpenShift")," environments"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"https://www.okd.io/download.html"}),"OpenShift OC CLI")," required for Red Hat OpenShift management and development"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Place ",Object(n.b)("inlineCode",{parentName:"li"},"oc")," and ",Object(n.b)("inlineCode",{parentName:"li"},"kubectl")," in your Terminal ",Object(n.b)("inlineCode",{parentName:"li"},"PATH")," or use ",Object(n.b)("inlineCode",{parentName:"li"},"Brew"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"brew install openshift-cli\n"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop")," required for running common tools and ",Object(n.b)("strong",{parentName:"p"},"Terraform")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node")," required for ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/cli"}),"IBM Garage CLI")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Installed on your local machine"),Object(n.b)("li",{parentName:"ul"},"Recommended ",Object(n.b)("inlineCode",{parentName:"li"},"v12.x LTS")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/cli"}),"IBM Garage CLI")," used to help make working with the development tools as easy as possible"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"npm i -g @garage-catalyst/ibm-garage-cloud-cli\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code")," a popular code editor"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(n.b)("li",{parentName:"ul"},"Enabling launching VSCode from a terminal (",Object(n.b)("a",r({parentName:"li"},{href:"https://code.visualstudio.com/docs/setup/mac"}),"https://code.visualstudio.com/docs/setup/mac"),")"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"}),"JDK 11")," ",Object(n.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Used for SpringBoot content")))),Object(n.b)("h2",{id:"github"},"Github"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You will need to have a public Github account. If you do not have one create one. If you have not logged in for a while make sure your login is working.")),Object(n.b)("h3",{id:"configure-github-personal-access-token"},"Configure Github Personal Access Token"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"For Jenkins to connect to and use your GitHub repo, it will need a")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line"}),"GitHub personal access token")," with ",Object(n.b)("inlineCode",{parentName:"p"},"public_repo")," and ",Object(n.b)("inlineCode",{parentName:"p"},"write:repo_hook")," scopes. The Personal Access Token only needs to be generated once then it can be used to access multiple GitHub repos."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Navigate to ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/settings/tokens"}),"Developer Settings")," and generate a new token"),Object(n.b)("li",{parentName:"ul"},"Select ",Object(n.b)("inlineCode",{parentName:"li"},"public_repo")," scope to enable git clone"),Object(n.b)("li",{parentName:"ul"},"Select ",Object(n.b)("inlineCode",{parentName:"li"},"write:repo_hook")," scope so Jenkins can create a web hook\n",Object(n.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.25851938895417%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACQ0lEQVQ4y3VTaXPaMBDl//+wfmuZkIZAIQkY2/iQZMm38PG6qxiaiV3NrCVL2qf39liN44iiKNC2LXjw/zgMGPoOdV2jbi1qa1HReV7VaGjt7vzHVgxSlBVSIZEZg67vHfBAJpSGvF6RXjyoMESjJGxuML2MpbEabxaNSBG+HXF+3SIhZxt6aH6vId4OSPdbiM0vZM9r1Ict+sjHeFeyxHCsS1SBh+iwR/Rnh1Yk6N73sP4ZSkpIbSDzEmmmUZL8r2NcYLnizYZiJZIUSRyjs/YhWZscGQFpMkPAPN/o3Nob+ik0c4b0kSrDxQ9wOnsoKfA8uq5z+4pMcHy1duAc6zQVMHnuQBcBNV0OgtCBcmZ58GVFABkxY1BNc/bFeK9pPitjmAFSdlMhkKSpe/kOWBQl8rxwc1lVyIviscf/3+P4AGQpnneBMeZxyIB3ySoj2VK5Ne9JXpNPQtJ53bYcV/uvDvknThIH/BWQ43UHlUo5ZwbmfTGdFWXpWPP8YFgRfQbkS9wx4wTIceNwGMo2rxmApdZ1g5KagbP9vYw+Y0jMLr6P0+mMiErHMaQsC6pDNUnMSDY/PAzDDGTWetxuHA8/vCKh5IxTHSYsjywm5ppkPUDuttgpxCQjuUkQODPEaiwMbnGIPI7QnI5oj9RB2ye0L2tYWjvbbTC0zQx4xc7644jLyzNOT2sEuy3anz9Qv25w/XhHEkVkMSR1Um9bDNT7zqaszluP5HZlgYwc5TWEJlZ8kSUbCjy3X+7qsJ45L0n+Cw6O04qAEUMyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Jenkins OAuth scopes",title:"Jenkins OAuth scopes",src:"/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/fb070/jenkins-scopes.png",srcSet:["/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/d6747/jenkins-scopes.png 288w","/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/09548/jenkins-scopes.png 576w","/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/fb070/jenkins-scopes.png 1152w","/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/b35d3/jenkins-scopes.png 1702w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},"Save the token in your password manager or somewhere safe that you can access later on")))))}b.isMDXComponent=!0},431:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},432:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},433:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(431),r=a(0),c=a.n(r),o=a(105),l=a.n(o),b=a(195),s=a(127),p=a(3),d=a.n(p),m=a(384),u=function(e){var t,a=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(432),j=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,i=g.data.site.siteMetadata.repository,r=a||i,c=r.baseUrl,o=r.subDirectory,l=c+"/edit/"+r.branch+o+"/src/pages"+t;return c?Object(n.b)("div",{className:"bx--row "+j.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},h=a(193),N=(a(59),a(26)),f=a(386);var v=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),c=r===i,o=new RegExp(i+"(?!-)"),b=a.replace(o,r);return Object(n.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=c,t),f.listItem)},Object(n.b)(N.Link,{className:f.link,to:""+b},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},r))))))},i}(c.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,o=t.frontmatter,p=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,g=p.tabs,j=p.title,N=p.theme,f=p.description,k=p.keywords,y=i.data.site.pathPrefix,A=y?r.pathname.replace(y,""):r.pathname,x=g?A.split("/").slice(-1)[0]||l()(g[0],{lower:!0}):"";return Object(n.b)(s.a,{homepage:!1,theme:N,pageTitle:j,pageDescription:f,pageKeywords:k,titleType:m},Object(n.b)(u,{title:c?Object(n.b)(c,null):j,label:"label",tabs:g}),g&&Object(n.b)(v,{slug:A,tabs:g,currentTab:x}),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:d})),Object(n.b)(h.a,{pageContext:t,location:r,slug:A,tabs:g,currentTab:x}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-installation-pre-reqs-index-mdx-539e168b2631bf48d525.js.map