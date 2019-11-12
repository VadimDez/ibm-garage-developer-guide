(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{413:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return O}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(442);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=l("Tabs"),b=l("Tab"),s=l("PageDescription"),p=l("InlineNotification"),m=l("AnchorLinks"),d=l("AnchorLink"),u={_frontmatter:o},h=r.a;function O(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(h,i({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"Tabs"},Object(n.b)(b,{label:"Pre-requisites",mdxType:"Tab"},Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Prepare to install developer tools into Red Hat CodeReady Containers on you Laptop")),Object(n.b)("p",null,"The IBM Garage for Cloud Developer Tools facilitate development and deployment of cloud-native applications\nwith the Red Hat CodeReady Containers local OpenShift environment."),Object(n.b)("p",null,"The following pre-requisites are required to support the installation."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"CodeReady Containers ",Object(n.b)("a",i({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg#minimum-system-requirements_gsg"}),"Minimum system requirements")),Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("a",i({parentName:"li"},{href:"https://access.redhat.com/login"}),"Red Hat account")," is required")),Object(n.b)("p",null,"The following pre-requisites are required to support the setup instructions:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"An installation of Red Hat CodeReady Containers"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop")," installed and running on your local machine"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node")," installed on your local machine"))),Object(n.b)(b,{label:"1. Install CRC",mdxType:"Tab"},Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Download CRC and install it")),Object(n.b)("p",null,"Install and configure CRC as described in ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.redhat.com/openshift/install/crc/installer-provisioned"}),"Install on Laptop")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Remember to take a copy of ",Object(n.b)("strong",{parentName:"p"},"Pull Secret"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"CRC executable"),": Copy the crc binary to your $PATH:")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"From the directory where you unzipped the download:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cp crc /usr/local/bin\n")))),Object(n.b)("p",null,"Follow these steps to complete the installation:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Run the following command from a terminal session:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"crc setup\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Add memory"),": By default, the CRC VM is set to only use 8 GB of RAM. The more RAM you can give it, the better."),Object(n.b)("p",{parentName:"li"},"  To set it to 10 GB of RAM, do this after ",Object(n.b)("inlineCode",{parentName:"p"},"crc setup")," but before ",Object(n.b)("inlineCode",{parentName:"p"},"crc start"),":"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"crc config set memory 10240\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Start")," the local CRC Cluster run the crc start command in a terminal window"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"crc start\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"During the installation process you will be prompted for your pull secret. Copy and Paste it into the terminal window.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Wait about 5 minutes for the VM initialization to complete. When complete, the kubeadmin password will be displayed. Make note of\nthis password because you will need it to log into the console.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the Cluster Admin ",Object(n.b)("strong",{parentName:"p"},"Console")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"crc console\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open a web browser and go to the OpenShift console")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Login with user id ",Object(n.b)("strong",{parentName:"p"},"kubeadmin")," and the password that was displayed\nafter the ",Object(n.b)("inlineCode",{parentName:"p"},"crc start")," had completed."))),Object(n.b)("p",null,"Other useful links:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg"}),"Getting started with Red Hat CodeReady Containers, Section 1.5")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg#installing-codeready-containers_gsg"}),"Installing CodeReady Containers"),"."))),Object(n.b)(b,{label:"2. Download",mdxType:"Tab"},Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Obtain the Terraform Infrastructure as Code that will install the tools into CodeReady Containers")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clone the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Switch to the cloned directory"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n"))))),Object(n.b)(b,{label:"3. API keys",mdxType:"Tab"},Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the keys the CLI uses to authenticate")),Object(n.b)("p",null,"API keys are not needed to connect to CRC, but the file must still exist."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Inside the ",Object(n.b)("inlineCode",{parentName:"li"},"iteration-zero-ibmcloud")," folder, copy ",Object(n.b)("inlineCode",{parentName:"li"},"credentials.template")," to a file named ",Object(n.b)("inlineCode",{parentName:"li"},"credentials.properties"),".",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd iteration-zero-ibmcloud\ncp credentials.template credentials.properties\n")))),Object(n.b)("p",null,"Just leave the property values blank, Terraform will not use them.")),Object(n.b)(b,{label:"4. Configuration",mdxType:"Tab"},Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the properties describing the environment")),Object(n.b)("p",null,"The settings for creating the Developer Tools environment in CRC go in a single property file\nin the ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"environment.tfvars")," — Properties for installing the Developer Tools")),Object(n.b)("h3",{id:"environment-variables"},"Environment variables"),Object(n.b)("p",null,"Use the  ",Object(n.b)("inlineCode",{parentName:"p"},"environment.tfvars")," properties to configure the installation for the Development Tools."),Object(n.b)("p",null,"Set the following properties so they match below, all the other properties will be ignored:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'# The type of cluster that will be created/used (kubernetes or openshift)\ncluster_type="crc"\n# Flag indicating if we are using an existing cluster or creating a new one\ncluster_exists="true"\n'))),Object(n.b)(b,{label:"5. Run",mdxType:"Tab"},Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Run Terraform to install the tools into the CRC environment")),Object(n.b)("p",null,"Having configured the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties"),", ",Object(n.b)("inlineCode",{parentName:"p"},"environment.tfvars")," properties files,\nwe are now ready to kick off the installation."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Launch a ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"Developer Tools Docker container"),"."),Object(n.b)("p",{parentName:"li"},"  Run the following command to run the Docker container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n")),Object(n.b)("p",{parentName:"li"},"  For more information on the ",Object(n.b)("strong",{parentName:"p"},"Developer Tools Image")," see the following guide:"),Object(n.b)("p",{parentName:"li"},"  This will install the Cloud Garage Tools Docker image and exec shell into the running container. The container will\nmount the filesystem’s ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(n.b)("inlineCode",{parentName:"p"},"/home/devops/src/"),". Once the Docker container has started and\nthe script has exec shelled into it, you will see an IBM Garage banner. This will help you identify you are running\ninside the Docker image that has just mounted your file system."),Object(n.b)("p",{parentName:"li"},"  The supplied Terraform scripts are ready to run using the settings in the properties files.\nYou optionally can extend or modify the scripts and tailor them for your project’s specific needs.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"From inside the terminal/containeryou need to log into the OpenShift cluster via the cli."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"oc login --insecure-skip-tls-verify=true -u kubeadmin -p <your-password> https://api.crc.testing:6443\n")),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",{parentName:"li"},"  NOTE: replace “your-password” with the password displayed when the “crc start” command command completed.")),Object(n.b)("p",{parentName:"li"},"  Run this script in the container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./runTerraform.sh\n")),Object(n.b)("p",{parentName:"li"},"  This script will setup the Developer Tools in the CRC environment."),Object(n.b)("p",{parentName:"li"},"  The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(n.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(n.b)("p",{parentName:"li"},"  The existing cluster’s contents will be cleaned up to prepare for the terraform\nprocess. Any resources in the ",Object(n.b)("inlineCode",{parentName:"p"},"tools"),", ",Object(n.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(n.b)("inlineCode",{parentName:"p"},"test"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"staging")," namespaces/projects will be deleted."),Object(n.b)("p",{parentName:"li"},"  The installation process takes about 20 minutes. At the end, you should have your Developer Tools environment\nfully provisioned and configured. Enjoy!"))),Object(n.b)("h3",{id:"finish"},"Finish"),Object(n.b)("p",null,"Once the Terraform scripts have finished, you can see the resources that the scripts created."),Object(n.b)("p",null,"To see this:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the OpenShift web console. You should see:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Namespaces: ",Object(n.b)("inlineCode",{parentName:"li"},"tools"),", ",Object(n.b)("inlineCode",{parentName:"li"},"dev"),", ",Object(n.b)("inlineCode",{parentName:"li"},"test"),", and ",Object(n.b)("inlineCode",{parentName:"li"},"staging")),Object(n.b)("li",{parentName:"ul"},"Deployments in the ",Object(n.b)("inlineCode",{parentName:"li"},"tools")," namespace: ",Object(n.b)("inlineCode",{parentName:"li"},"catalyst-dashboard"),", ",Object(n.b)("inlineCode",{parentName:"li"},"jenkins"),", etc.")))),Object(n.b)("p",null,"To get started with code using the following guides:"),Object(n.b)(m,{mdxType:"AnchorLinks"},Object(n.b)(d,{to:"/getting-started/deploy-app",mdxType:"AnchorLink"},"Deploy First App"),Object(n.b)(d,{to:"/guides/overview",mdxType:"AnchorLink"},"Guides"),Object(n.b)(d,{to:"guides/tools-image",mdxType:"AnchorLink"},"Developer Tools Image")),Object(n.b)("h3",{id:"possible-issues"},"Possible issues"),Object(n.b)("p",null,"If you find that that the Terraform provisioning has failed, try re-running the ",Object(n.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."))))}O.isMDXComponent=!0},440:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},441:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},442:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(440),i=a(0),o=a.n(i),l=a(105),c=a.n(l),b=a(195),s=a(127),p=a(3),m=a.n(p),d=a(384),u=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:m()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},h=a(441),O=a(385),j=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,i=a||r,o=i.baseUrl,l=i.subDirectory,c=o+"/edit/"+i.branch+l+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},g=a(193),N=(a(59),a(26)),f=a(386);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0}),o=i===r,l=new RegExp(r+"(?!-)"),b=a.replace(l,i);return Object(n.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(n.b)(N.Link,{className:f.link,to:""+b},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},i))))))},r}(o.a.Component),v=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,l=t.frontmatter,p=void 0===l?{}:l,m=t.relativePagePath,d=t.titleType,h=p.tabs,O=p.title,N=p.theme,f=p.description,w=p.keywords,C=r.data.site.pathPrefix,T=C?i.pathname.replace(C,""):i.pathname,x=h?T.split("/").slice(-1)[0]||c()(h[0],{lower:!0}):"";return Object(n.b)(s.a,{homepage:!1,theme:N,pageTitle:O,pageDescription:f,pageKeywords:w,titleType:d},Object(n.b)(u,{title:o?Object(n.b)(o,null):O,label:"label",tabs:h}),h&&Object(n.b)(y,{slug:T,tabs:h,currentTab:x}),Object(n.b)(v.a,{padded:!0},a,Object(n.b)(j,{relativePagePath:m})),Object(n.b)(g.a,{pageContext:t,location:i,slug:T,tabs:h,currentTab:x}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-installation-crc-index-mdx-9d889a71925bf3d56ef7.js.map