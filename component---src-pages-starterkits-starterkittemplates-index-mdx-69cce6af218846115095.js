(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{422:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var i=a(106),o=a(428);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=s("AnchorLinks"),b=s("AnchorLink"),l=s("Row"),p=s("Column"),g=s("ResourceCard"),m={_frontmatter:r},d=o.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(i.b)(d,n({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"overview"},"Overview"),Object(i.b)("p",null,"In the ",Object(i.b)("a",n({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/overview"}),"Overview")," section we describe why ",Object(i.b)("em",{parentName:"p"},"Starter Kit Templates")," provide a\nperfect on ramp to help projects get started. The Developer Tools project is providing a set of seed\ntemplates that can be used to get projects moving quickly and focusing on use case business logic."),Object(i.b)("p",null,"They cover some very common patterns for developers.\nWe are looking forward to the community providing new open source templates for others to use with this set of developer tools."),Object(i.b)("p",null,"Read up on Why Start Kit Templates and if you have not already tried to deploy your first app get started.overview"),Object(i.b)(c,{mdxType:"AnchorLinks"},Object(i.b)(b,{to:"/starterkits/overview",mdxType:"AnchorLink"},"Starter Kit Templates Overview"),Object(i.b)(b,{to:"/getting-started/deploy-app",mdxType:"AnchorLink"},"Deploy An App")),Object(i.b)("p",null,"Here are links to the base set of ",Object(i.b)("strong",{parentName:"p"},"Starter Kit Templates")," provided for the ",Object(i.b)("em",{parentName:"p"},"IBM Garage for Cloud Developer Tools"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To use the Starter Kit templates, click on the link and then the ",Object(i.b)("strong",{parentName:"li"},"Template")," button to create a version in your own\nown git organization."),Object(i.b)("li",{parentName:"ul"},"Then clone it onto your local machine and then use ",Object(i.b)("inlineCode",{parentName:"li"},"igc pipeline")," to register it with your Jenkins server.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",n({parentName:"pre"},{className:"language-bash"}),"ibmcloud login | oc login\nkubectl get nodes | oc get nodes\nnpm i -g @garage-catalyst/ibm-garage-cloud-cli\ngit clone <generated startkit template>\ncd <generated startkit template>\ncode package.json ! rename your project\nigc pipeline\n")))),Object(i.b)("h3",{id:"start-kit-templates-links"},"Start Kit Templates Links"),Object(i.b)(l,{mdxType:"Row"},Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"React UI Patterns",subTitle:"Carbon based UI to help with common patterns using React framework",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-node-react",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Angular UI Patterns",subTitle:"Carbon based UI to help with common patterns using Angular framework",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-node-angular",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Typescript Microservice",subTitle:"Node.js TypeScript GraphQL Backend for Frontend",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-node-typescript",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    ")))),Object(i.b)("br",null),Object(i.b)(l,{mdxType:"Row"},Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Typescript GraphQL",subTitle:"Node.js TypeScript GraphQL Backend for Frontend",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-graphql-typescript",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Spring Boot Microservice",subTitle:"Spring Boot Java Microservice",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-java-spring",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Python AI Microservice",subTitle:"Machine Learning Microservice with TensorFlow",actionIcon:"launch",color:"light",disabled:!0,href:"https://github.com/ibm-garage-cloud/template-python-tensorflow",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    ")))))}u.isMDXComponent=!0},426:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},427:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},428:function(e,t,a){"use strict";a(32),a(28);var i=a(1),o=a(426),n=a(0),r=a.n(n),s=a(105),c=a.n(s),b=a(195),l=a(127),p=a(3),g=a.n(p),m=a(384),d=function(e){var t,a=e.title,o=e.tabs,n=void 0===o?[]:o;return Object(i.b)("div",{className:g()(m.pageHeader,(t={},t[m.withTabs]=n.length,t))},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12"},Object(i.b)("h1",{id:"page-title",className:m.text},a)))))},u=a(427),A=a(385),h=function(e){var t=e.relativePagePath,a=e.repository,o=u.data.site.siteMetadata.repository,n=a||o,r=n.baseUrl,s=n.subDirectory,c=r+"/edit/"+n.branch+s+"/src/pages"+t;return r?Object(i.b)("div",{className:"bx--row "+A.row},Object(i.b)("div",{className:"bx--col"},Object(i.b)("a",{className:A.link,href:c},"Edit this page on GitHub"))):null},O=a(193),y=(a(59),a(26)),v=a(386);var f=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=c()(e,{lower:!0}),r=n===o,s=new RegExp(o+"(?!-)"),b=a.replace(s,n);return Object(i.b)("li",{key:e,className:g()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(i.b)(y.Link,{className:v.link,to:""+b},e))}));return Object(i.b)("div",{className:v.tabsContainer},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(i.b)("nav",null,Object(i.b)("ul",{className:v.list},n))))))},o}(r.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,s=t.frontmatter,p=void 0===s?{}:s,g=t.relativePagePath,m=t.titleType,u=p.tabs,A=p.title,y=p.theme,v=p.description,B=p.keywords,j=o.data.site.pathPrefix,T=j?n.pathname.replace(j,""):n.pathname,C=u?T.split("/").slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(i.b)(l.a,{homepage:!1,theme:y,pageTitle:A,pageDescription:v,pageKeywords:B,titleType:m},Object(i.b)(d,{title:r?Object(i.b)(r,null):A,label:"label",tabs:u}),u&&Object(i.b)(f,{slug:T,tabs:u,currentTab:C}),Object(i.b)(N.a,{padded:!0},a,Object(i.b)(h,{relativePagePath:g})),Object(i.b)(O.a,{pageContext:t,location:n,slug:T,tabs:u,currentTab:C}),Object(i.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-starterkits-starterkittemplates-index-mdx-69cce6af218846115095.js.map