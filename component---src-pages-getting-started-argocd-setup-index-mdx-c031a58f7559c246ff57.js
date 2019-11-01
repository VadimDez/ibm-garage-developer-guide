(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{404:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),o=a(442);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=c("AnchorLinks"),p=c("AnchorLink"),s={_frontmatter:r},b=o.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"ArgoCD is a complete ",Object(n.b)("strong",{parentName:"p"},"GitOps")," tool for managing the deployment of built application images into other development environments this\nmight include ",Object(n.b)("em",{parentName:"p"},"test"),", ",Object(n.b)("em",{parentName:"p"},"pre-prod")," and ",Object(n.b)("em",{parentName:"p"},"production"),". It uses both the IBM Container Image Registry for sourcing built docker images and uses\nArtifactory for sourcing packaged Helm charts from your apps. Complete this setup to enable ArgoCD to be ready to integrate with Artifactory."),Object(n.b)("p",null,"Read the following guides to understand how to use it to create combined CI/CD solution read the following guides:"),Object(n.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(n.b)(p,{to:"/guides/continuous-integration",mdxType:"AnchorLink"},"Continuous Integration"),Object(n.b)(p,{to:"/guides/continuous-deployment",mdxType:"AnchorLink"},"Continuous Deployment")),Object(n.b)("h2",{id:"configuration"},"Configuration"),Object(n.b)("p",null,"To enable ArgoCD to work seamlessly with the Developer Tools\ninstallation you need to configure Artifactory to be used as a Helm Chart Repository.\nThis will enable the use of application Helm charts to be de-coupled from the docker image that is built with the Jenkins CI pipeline."),Object(n.b)("h3",{id:"clone-argocd-template"},"Clone ArgoCD Template"),Object(n.b)("p",null,"Using the ArgoCD Template you can get the ",Object(n.b)("inlineCode",{parentName:"p"},"configMap")," files required to easily ArgoCD"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Clone the Repository to you development machine")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-cloud/template-argocd-test\ncd template-argocd-test\n")),Object(n.b)("h3",{id:"update-configmap-for-argocd"},"Update ConfigMap for ArgoCD"),Object(n.b)("p",null,"In the ",Object(n.b)("inlineCode",{parentName:"p"},"config")," directory there is a ",Object(n.b)("inlineCode",{parentName:"p"},"yaml")," file called ",Object(n.b)("inlineCode",{parentName:"p"},"argocd-helm-repo.yaml"),".\nEdit this file and modify the ",Object(n.b)("inlineCode",{parentName:"p"},"- url:")," to point to the URL of the Artifactory Repository."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-cm\n  namespace: tools\ndata:\n  helm.repositories: |\n    - url: <artifactory helm repository location>\n      name: helm-repository-location\n")),Object(n.b)("p",null,"You need to have completed the setup of the Artifactory instance so it can store Helm charts from your CI pipeline with Jenkins."),Object(n.b)("p",null,"You need to select"),Object(n.b)("p",null,"To obtain the ",Object(n.b)("inlineCode",{parentName:"p"},"- url: ")," you start by logging into Artifactory and clicking on ",Object(n.b)("inlineCode",{parentName:"p"},"Setup Me Up")," tile and click on the repository ",Object(n.b)("inlineCode",{parentName:"p"},"generic-local")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"460px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.08695652173913%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABEklEQVQoz52RfU+DMBDG+f4fzBg3M2OWbOqI/oGIG1Ao9IW3Pt5Vtmy6gPGSH3cp7dPnroHWGkop1HUNrq21v2iaZpLjHj4f8CeOY0RRhCRJ4JzDf4OFvWDf92jb9oKu604MwzALGzk55IVje8YYaBqBpexr+s+b5+DwgqWsUEiJXAgc0hRZnnvSLENeFHRJc3Wu16iqigRfX1A8LpGvV0jub7F/WOBzdYd4SfXiBroQMDRwMzqewgvW2zXy+B2ilJCyREGuFL24j8MHnMjADblxTlMts2igwy3MbgOxe4IMnz3qLQSyPVy4AaryW3zi9S8ErSI3mlFjJlQFR0KOMzsYD/3JoaX5+Ft+cL425+5c8AsiNAuFHwQXEAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Setup",title:"Setup Screen",src:"/ibm-garage-developer-guide/static/47a18ca9bf4f3a6f6626bd91afc5df8b/0ac1e/setupartifactory.png",srcSet:["/ibm-garage-developer-guide/static/47a18ca9bf4f3a6f6626bd91afc5df8b/d6747/setupartifactory.png 288w","/ibm-garage-developer-guide/static/47a18ca9bf4f3a6f6626bd91afc5df8b/0ac1e/setupartifactory.png 460w"],sizes:"(max-width: 460px) 100vw, 460px",loading:"lazy"})),"\n    "),Object(n.b)("p",null,"This will open the detailed setup view and from here you can copy the URL from the setup screen."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"874px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.27688787185355%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABk0lEQVQ4y6VT2VLbQBDU//8ZD7yAcQwYymULg7QW0mov7dmZXcXGIU6FIlPVNXtoe65W1TQN6rpG9lLK/wLnHNUwDFBKQWsNa+2X4Jw74fx8miZUmeyzpZTwNwshlIdHYu89AiHGWO4LYTmkDzPRv2CMgRCilOh9ztKDC1mqzKQzobtMeMz2fH0sM/tEBM4HvA8jFAUohEIJTH4qmw+yeDnD+Ps+xvRHe6qB9+gVh8lNpagZxjroyZYzS+34iuUKS4bGTEj0UDMGzvYQhzcM7Qt0xyBYA9G3UJsN+PUN+sUKw8O6gN8/Q643GMnbXX1qRZWzCNQDtnhEsyTcrfG6eMBh9Yx2+QS2ekJ7+4jXqx9oaH2gwB1plrMepldQnYAd1anHFRcc0it8FkrC96waxYhRchq7gDYCSs/QepZCloeSirRGPQqJPAq8T/Mg4xz6OPlqIl0FumyZwq7p8dJybN/e0XYSu9piu3PYbGe/3Ytyv2+pRZ3BLy2fhpJRdJgnb20kpDPEAuc+4Cm1EF1BSpd/hJ8YlfQJQGMMogAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Setup",title:"Setup Screen",src:"/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/d278b/artifactoryurlsetup.png",srcSet:["/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/d6747/artifactoryurlsetup.png 288w","/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/09548/artifactoryurlsetup.png 576w","/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/d278b/artifactoryurlsetup.png 874w"],sizes:"(max-width: 874px) 100vw, 874px",loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Edit the ",Object(n.b)("inlineCode",{parentName:"p"},"argocd-helm-repo.yaml")," and replace the value ",Object(n.b)("inlineCode",{parentName:"p"},"<artifactory helm repository location>")," with the value from the\nArtifactory console."),Object(n.b)("h3",{id:"run-the-kubectl-command"},"Run the ",Object(n.b)("inlineCode",{parentName:"h3"},"kubectl")," Command"),Object(n.b)("p",null,"Now you have edited the ",Object(n.b)("inlineCode",{parentName:"p"},"yaml")," file you need to make sure you are logged into either the IBM Kubernetes Service or Red Hat OpenShift consoles."),Object(n.b)("p",null,"You can test this by running the following commands :"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"kubectl get nodes | oc get nodes\n")),Object(n.b)("p",null,"There is a helper shell script that you can run called ",Object(n.b)("inlineCode",{parentName:"p"},"addconfigmap.sh")," this runs the following command to add the details of the Helm Registry with ArgoCD Config map."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"#!/bin/bash\nkubectl apply -f argocd-helm-repo.yaml\n")),Object(n.b)("p",null,"Once this is complete you can validate the configuration by opening the ",Object(n.b)("inlineCode",{parentName:"p"},"argocd-cm")," Config Map in the IKS Console or OpenShift Cluster Console.\nNavigate to the ",Object(n.b)("inlineCode",{parentName:"p"},"tools")," namespace and view the ",Object(n.b)("inlineCode",{parentName:"p"},"Config Maps")," open up the config map called ",Object(n.b)("inlineCode",{parentName:"p"},"argocd-cm")," and validate the the ",Object(n.b)("inlineCode",{parentName:"p"},"Data"),"\nsection now has a ",Object(n.b)("inlineCode",{parentName:"p"},"helm.repositories")," entry that is referencing Artifactory."))}d.isMDXComponent=!0},440:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},441:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},442:function(e,t,a){"use strict";a(32),a(28);var n=a(1),o=a(440),i=a(0),r=a.n(i),c=a(105),l=a.n(c),p=a(195),s=a(127),b=a(3),d=a.n(b),g=a(384),m=function(e){var t,a=e.title,o=e.tabs,i=void 0===o?[]:o;return Object(n.b)("div",{className:d()(g.pageHeader,(t={},t[g.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:g.text},a)))))},u=a(441),h=a(385),f=function(e){var t=e.relativePagePath,a=e.repository,o=u.data.site.siteMetadata.repository,i=a||o,r=i.baseUrl,c=i.subDirectory,l=r+"/edit/"+i.branch+c+"/src/pages"+t;return r?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},y=a(193),O=(a(59),a(26)),j=a(386);var A=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0}),r=i===o,c=new RegExp(o+"(?!-)"),p=a.replace(c,i);return Object(n.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(n.b)(O.Link,{className:j.link,to:""+p},e))}));return Object(n.b)("div",{className:j.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:j.list},i))))))},o}(r.a.Component),v=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,c=t.frontmatter,b=void 0===c?{}:c,d=t.relativePagePath,g=t.titleType,u=b.tabs,h=b.title,O=b.theme,j=b.description,N=b.keywords,C=o.data.site.pathPrefix,w=C?i.pathname.replace(C,""):i.pathname,k=u?w.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(n.b)(s.a,{homepage:!1,theme:O,pageTitle:h,pageDescription:j,pageKeywords:N,titleType:g},Object(n.b)(m,{title:r?Object(n.b)(r,null):h,label:"label",tabs:u}),u&&Object(n.b)(A,{slug:w,tabs:u,currentTab:k}),Object(n.b)(v.a,{padded:!0},a,Object(n.b)(f,{relativePagePath:d})),Object(n.b)(y.a,{pageContext:t,location:i,slug:w,tabs:u,currentTab:k}),Object(n.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-argocd-setup-index-mdx-c031a58f7559c246ff57.js.map