(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{406:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return g}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var o=a(106),r=a(443);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=c("PageDescription"),p=c("AnchorLinks"),s=c("AnchorLink"),b={_frontmatter:i},m=r.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(o.b)(m,n({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"PageDescription"},Object(o.b)("p",null,"Complete the steps for setting up the ArgoCD tool")),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"ArgoCD is a complete ",Object(o.b)("a",n({parentName:"p"},{href:"https://www.weave.works/technologies/gitops/"}),Object(o.b)("strong",{parentName:"a"},"GitOps"))," tool for managing the deployment of application images into deployment environments.\nThese deployment environments often include ones for development lifecycle stages such as ",Object(o.b)("em",{parentName:"p"},"test"),", ",Object(o.b)("em",{parentName:"p"},"pre-prod"),", and ",Object(o.b)("em",{parentName:"p"},"production"),". "),Object(o.b)("p",null,"The Developer Tools environment packages apps into two types of artifacts, Docker images and Helm charts.\nThe environment uses Jenkins to build the artifacts and ArgoCD to deploy them.\nThe artifacts are stored in two registries/repositories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Docker images are stored in the ",Object(o.b)("a",n({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Registry"}),"IBM Cloud Container Registry")),Object(o.b)("li",{parentName:"ul"},"Helm charts are stored in the ",Object(o.b)("a",n({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/artifactory-setup"}),"Helm chart repository in Artifactory"))),Object(o.b)("p",null,"ArgoCD is part of the Developer Tools environment’s complete CI/CD solution:"),Object(o.b)(p,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(s,{to:"/guides/continuous-integration",mdxType:"AnchorLink"},"Continuous Integration"),Object(o.b)(s,{to:"/guides/continuous-deployment",mdxType:"AnchorLink"},"Continuous Deployment")),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before setting up ArgoCD, set up the ",Object(o.b)("a",n({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/artifactory-setup"}),"Helm chart repository in Artifactory")," so that ArgoCD can use it."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Configure ArgoCD to use Artifactory."),Object(o.b)("h3",{id:"clone-the-argocd-repository"},"Clone the ArgoCD repository"),Object(o.b)("p",null,"The ArgoCD repository contains files and samples for configuring ArgoCD."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Clone the repository to your development machine"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",n({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-cloud/template-argocd-test\ncd template-argocd-test\n")))),Object(o.b)("h3",{id:"get-the-helm-repository-location"},"Get the Helm repository location"),Object(o.b)("p",null,"The Helm repository is in Artifactory. ArgoCD will need the URL to that repository."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the Artifactory console, select the Home page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the Set Me Up section, click on the ",Object(o.b)("inlineCode",{parentName:"p"},"generic-local")," repository"),Object(o.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"460px"}}),"\n      ",Object(o.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.08695652173913%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABEklEQVQoz52RfU+DMBDG+f4fzBg3M2OWbOqI/oGIG1Ao9IW3Pt5Vtmy6gPGSH3cp7dPnroHWGkop1HUNrq21v2iaZpLjHj4f8CeOY0RRhCRJ4JzDf4OFvWDf92jb9oKu604MwzALGzk55IVje8YYaBqBpexr+s+b5+DwgqWsUEiJXAgc0hRZnnvSLENeFHRJc3Wu16iqigRfX1A8LpGvV0jub7F/WOBzdYd4SfXiBroQMDRwMzqewgvW2zXy+B2ilJCyREGuFL24j8MHnMjADblxTlMts2igwy3MbgOxe4IMnz3qLQSyPVy4AaryW3zi9S8ErSI3mlFjJlQFR0KOMzsYD/3JoaX5+Ft+cL425+5c8AsiNAuFHwQXEAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Set Me Up - Repositories",title:"Set Me Up: Repositories",src:"/ibm-garage-developer-guide/static/47a18ca9bf4f3a6f6626bd91afc5df8b/0ac1e/setupartifactory.png",srcSet:["/ibm-garage-developer-guide/static/47a18ca9bf4f3a6f6626bd91afc5df8b/d6747/setupartifactory.png 288w","/ibm-garage-developer-guide/static/47a18ca9bf4f3a6f6626bd91afc5df8b/0ac1e/setupartifactory.png 460w"],sizes:"(max-width: 460px) 100vw, 460px",loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the Set Me Up dialog for the generic-local repository, copy the Deploy URL"),Object(o.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"874px"}}),"\n      ",Object(o.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.27688787185355%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABk0lEQVQ4y6VT2VLbQBDU//8ZD7yAcQwYymULg7QW0mov7dmZXcXGIU6FIlPVNXtoe65W1TQN6rpG9lLK/wLnHNUwDFBKQWsNa+2X4Jw74fx8miZUmeyzpZTwNwshlIdHYu89AiHGWO4LYTmkDzPRv2CMgRCilOh9ztKDC1mqzKQzobtMeMz2fH0sM/tEBM4HvA8jFAUohEIJTH4qmw+yeDnD+Ps+xvRHe6qB9+gVh8lNpagZxjroyZYzS+34iuUKS4bGTEj0UDMGzvYQhzcM7Qt0xyBYA9G3UJsN+PUN+sUKw8O6gN8/Q643GMnbXX1qRZWzCNQDtnhEsyTcrfG6eMBh9Yx2+QS2ekJ7+4jXqx9oaH2gwB1plrMepldQnYAd1anHFRcc0it8FkrC96waxYhRchq7gDYCSs/QepZCloeSirRGPQqJPAq8T/Mg4xz6OPlqIl0FumyZwq7p8dJybN/e0XYSu9piu3PYbGe/3Ytyv2+pRZ3BLy2fhpJRdJgnb20kpDPEAuc+4Cm1EF1BSpd/hJ8YlfQJQGMMogAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Set Me Up - Generic Local Repository",title:"Set Me Up: generic-local Repository",src:"/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/d278b/artifactoryurlsetup.png",srcSet:["/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/d6747/artifactoryurlsetup.png 288w","/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/09548/artifactoryurlsetup.png 576w","/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/d278b/artifactoryurlsetup.png 874w"],sizes:"(max-width: 874px) 100vw, 874px",loading:"lazy"})),"\n    "))),Object(o.b)("h3",{id:"update-the-argocd-configuration-file"},"Update the ArgoCD configuration file"),Object(o.b)("p",null,"The repo you cloned contains an ArgoCD configuration file. Put the Helm repository location in that file\nand deploy it to your Developer Tools environment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In your local copy of the ",Object(o.b)("inlineCode",{parentName:"p"},"template-argocd-test")," repo, open the ",Object(o.b)("inlineCode",{parentName:"p"},"config/argocd-helm-repo.yaml")," file in an editor")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Edit the ",Object(o.b)("inlineCode",{parentName:"p"},"data.helm.url")," property to replace the value ",Object(o.b)("inlineCode",{parentName:"p"},"<artifactory helm repository location>"),"\nwith the URL of the Helm repository location in Artifactory"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",n({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-cm\n  namespace: tools\ndata:\n  helm.repositories: |\n    - url: <artifactory helm repository location>\n      name: helm-repository-location\n")))),Object(o.b)("p",null,"Use the kubectl CLI to deploy the edited configuration file."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Test to confirm that your shell is logged into your cluster"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",n({parentName:"pre"},{className:"language-bash"}),"kubectl version --short\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Apply the configuration file to the cluster in the ",Object(o.b)("inlineCode",{parentName:"p"},"tools")," namespace"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",n({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f argocd-helm-repo.yaml -n tools\n")),Object(o.b)("p",{parentName:"li"},"You can also apply the file using the ",Object(o.b)("inlineCode",{parentName:"p"},"config/addconfigmap.sh")," script in the ",Object(o.b)("inlineCode",{parentName:"p"},"template-argocd-test")," repo."))),Object(o.b)("p",null,"Verify that the new configuration has deployed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the Kubernetes dashboard or OpenShift console, navigate to the Config Maps in the ",Object(o.b)("inlineCode",{parentName:"p"},"tools")," namespace")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("inlineCode",{parentName:"p"},"argocd-cm")," config map and confirm that its ",Object(o.b)("inlineCode",{parentName:"p"},"helm.repositories")," property specifies the\nArtifactory URL"))),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"ArgoCD now has the configuration file in the Developer Tools environment that it needs to access the Helm chart repository in Artifactory."))}g.isMDXComponent=!0},441:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},442:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},443:function(e,t,a){"use strict";a(32),a(28);var o=a(1),r=a(441),n=a(0),i=a.n(n),c=a(105),l=a.n(c),p=a(195),s=a(127),b=a(3),m=a.n(b),g=a(384),d=function(e){var t,a=e.title,r=e.tabs,n=void 0===r?[]:r;return Object(o.b)("div",{className:m()(g.pageHeader,(t={},t[g.withTabs]=n.length,t))},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12"},Object(o.b)("h1",{id:"page-title",className:g.text},a)))))},u=a(442),h=a(385),f=function(e){var t=e.relativePagePath,a=e.repository,r=u.data.site.siteMetadata.repository,n=a||r,i=n.baseUrl,c=n.subDirectory,l=i+"/edit/"+n.branch+c+"/src/pages"+t;return i?Object(o.b)("div",{className:"bx--row "+h.row},Object(o.b)("div",{className:"bx--col"},Object(o.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a(193),y=(a(59),a(26)),j=a(386);var A=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0}),i=n===r,c=new RegExp(r+"(?!-)"),p=a.replace(c,n);return Object(o.b)("li",{key:e,className:m()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(o.b)(y.Link,{className:j.link,to:""+p},e))}));return Object(o.b)("div",{className:j.tabsContainer},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(o.b)("nav",null,Object(o.b)("ul",{className:j.list},n))))))},r}(i.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,c=t.frontmatter,b=void 0===c?{}:c,m=t.relativePagePath,g=t.titleType,u=b.tabs,h=b.title,y=b.theme,j=b.description,v=b.keywords,C=r.data.site.pathPrefix,w=C?n.pathname.replace(C,""):n.pathname,D=u?w.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(o.b)(s.a,{homepage:!1,theme:y,pageTitle:h,pageDescription:j,pageKeywords:v,titleType:g},Object(o.b)(d,{title:i?Object(o.b)(i,null):h,label:"label",tabs:u}),u&&Object(o.b)(A,{slug:w,tabs:u,currentTab:D}),Object(o.b)(N.a,{padded:!0},a,Object(o.b)(f,{relativePagePath:m})),Object(o.b)(O.a,{pageContext:t,location:n,slug:w,tabs:u,currentTab:D}),Object(o.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-argocd-setup-index-mdx-3e2303efe2eaaf97adb3.js.map