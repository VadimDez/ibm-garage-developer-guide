(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{413:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return h}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(441);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=l("Tabs"),c=l("Tab"),b=l("PageDescription"),p={_frontmatter:o},u=r.a;function h(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(u,i({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"Tabs"},Object(n.b)(c,{label:"Pre-requisites",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Prepare to run the scripts that create a cluster")),Object(n.b)("p",null,"The IBM Garage for Cloud Developer Tools facilitate development and deployment of cloud-native applications.\nThey can be hosted in any Kubernetes or OpenShift cluster.\nIn IBM Cloud, the cluster is hosted by either the ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers"}),"IBM Cloud Kubernetes Service")," or\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/openshift"}),"Red Hat OpenShift on IBM Cloud"),".\nThese instructions explain how to access, configure, and run the scripts to create the cluster."),Object(n.b)("p",null,"After creating the cluster, follow the ",Object(n.b)("a",i({parentName:"p"},{href:"install-tools"}),"Install Tools")," instructions\nto install the Developer Tools into the cluster created here."),Object(n.b)("p",null,"The following pre-requisties are required before following these setup instructions."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"An IBM Cloud account with:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"the ability to provision resources to support ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/clusters"}),"Kubernetes"),"\nand ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/clusters?platformType=openshift"}),"OpenShift")," environments"),Object(n.b)("li",{parentName:"ul"},"the ability to create a ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/account/resource-groups"}),"Resource Group")," for your development resources\nand admin rights to this resource group"),Object(n.b)("li",{parentName:"ul"},"a region and zone containing ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/classic/network/vlans"}),"a pair of public and private VLANs")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop")," installed and running on your local machine"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node")," installed on your local machine"))),Object(n.b)(c,{label:"1. Download",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Obtain the scripts that create a cluster")),Object(n.b)("p",null,"Clone the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n")),Object(n.b)("p",null,"Switch to the cloned directory"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n"))),Object(n.b)(c,{label:"2. API keys",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the keys the CLI uses to authenticate")),Object(n.b)("p",null,"In IBM Cloud, a Kubernetes or OpenShift clutser is a PaaS resource hosted in IaaS resources.\nAPI keys authenticate an ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli",title:"IBM Cloud CLI and Developer Tools"}),"IBM Cloud CLI"),"\nclient—such as a Terraform script—to create these resources programatically. Two keys will be needed:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The first key authorizes creating Classic Infrastructure (IaaS) resources"),Object(n.b)("li",{parentName:"ul"},"The second key authorizes creating IBM Cloud (PaaS) resources")),Object(n.b)("p",null,"The following steps find or create the required keys and put them into a file called ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties"),"."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"classic.username=<CLASSIC_USERNAME>\nclassic.api.key=<CLASSIC_API_KEY>\nibmcloud.api.key=<IBMCLOUD_API_KEY>\n")),Object(n.b)("p",null,"The installation scripts will use these properties to authenticate to IBM Cloud."),Object(n.b)("h3",{id:"step-a-create-the-credentialsproperties-file"},"Step A. Create the credentials.properties file"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Inside the ",Object(n.b)("inlineCode",{parentName:"li"},"iteration-zero-ibmcloud")," folder, copy ",Object(n.b)("inlineCode",{parentName:"li"},"credentials.template")," to a file named ",Object(n.b)("inlineCode",{parentName:"li"},"credentials.properties"),".")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd iteration-zero-ibmcloud\ncp credentials.template credentials.properties\n")),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file is already listed in the ",Object(n.b)("inlineCode",{parentName:"p"},".gitignore")," file so that the file containing\nyour private API keys will not be pushed to the server repository."),Object(n.b)("h3",{id:"step-b-set-the-classic-infrastructure-api-key"},"Step B. Set the Classic infrastructure API key"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Follow these instructions to ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-classic_keys",title:"Managing classic infrastructure API keys"}),"create a Classic infrastructure API key"),":"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the IBM Cloud console, go to the IBM Cloud API Keys page"),Object(n.b)("p",{parentName:"li"},"To open the IBM Cloud API Keys page, select ",Object(n.b)("strong",{parentName:"p"},"Manage -> Access (IAM)"),", then select the ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud API keys")," tab.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If your account already has a classic infrastructure API key, it will appear in the list of keys as ",Object(n.b)("strong",{parentName:"p"},"Classic infrastructure API key"),". Otherwise, the page will have a ",Object(n.b)("strong",{parentName:"p"},"Create a classic infrastructure API key")," button on the top. To crate the key, press that button and close the dialog."),Object(n.b)("img",i({parentName:"li"},{src:"apikeys.png",alt:"API Keys"}))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Find ",Object(n.b)("strong",{parentName:"p"},"Classic infrastructure API key")," in the list and open its details."),Object(n.b)("img",i({parentName:"li"},{src:"classickeys.png",alt:"Classic Keys"}))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the values for the ",Object(n.b)("inlineCode",{parentName:"p"},"classic.username")," and ",Object(n.b)("inlineCode",{parentName:"p"},"classic.api.key")," properties."))),Object(n.b)("h3",{id:"step-c-set-the-ibm-cloud-api-key"},"Step C. Set the IBM Cloud API key"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Follow these instructions to create an IBM Cloud API key:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey",title:"Managing user API keys"}),"Managing user API keys")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the value for the ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property.")))),Object(n.b)(c,{label:"3. TF Variables",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the properties describing the cluster environment")),Object(n.b)("p",null,"The settings for creating the Developer Tools cluster go in a properties file called ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),". "),Object(n.b)("p",null,"The file you will edit is ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/settings/terraform.tfvars"),". The next few steps will find the necessary\nresources and set them in the ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," file. Along the way, if any of these resources don’t already exist,\nyou’ll need to create them."),Object(n.b)("p",null,"The file consists of two parts: required varialbes and optional variables. There is a tool for optionally generating\nthe required variables. The optional variables have default values that you can change."),Object(n.b)("h3",{id:"required-variables"},"Required variables"),Object(n.b)("p",null,"Several of the variables are required and have no reasonable defaults, therefore you will need to set them."),Object(n.b)("p",null,"Typical values look like this:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'resource_group_name="catalyst-team"\nvlan_region="us-south"\nvlan_datacenter="dal10"\npublic_vlan_id="2366011"\nprivate_vlan_id="2366012"\ncluster_name="catalyst-team-cluster"\n')),Object(n.b)("h3",{id:"optional-generate-the-properties"},"Optional: Generate the properties"),Object(n.b)("p",null,"This tool is for users who don’t know what these required settings should be and want a simple way\nto gather reasonable defaults for their particular account."),Object(n.b)("p",null,"The ",Object(n.b)("a",i({parentName:"p"},{href:"cli"}),"Developer Tools CLI")," has a command to gather this information for you,\nin a format that is easy to cut/paste into the ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," properties file. "),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"igc vlan\n")),Object(n.b)("p",null,"Note that you need to log into your account using the IBM Cloud CLI to use this tool."),Object(n.b)("h3",{id:"optional-variables"},"Optional variables"),Object(n.b)("p",null,"The remaining properties are also required but have reasonable defaults, so setting them is optional."),Object(n.b)("p",null,"The values look like this:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'# The type of cluster that will be created/used (kubernetes or openshift)\ncluster_type="kubernetes"\n# Flag indicating if we are using an existing cluster or creating a new one\ncluster_exists="false"\n# Flag indicating if we are using an existing PostgreSQL server or creating a new one\npostgres_server_exists="false"\n')),Object(n.b)("h3",{id:"scenarios"},"Scenarios"),Object(n.b)("p",null,"These are scenarios for using these optioal settings:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To specify whether the cluster (new or existing) is Kubernetes or OpenShift, set ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_type"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To specify installing the tools into an existing cluster, set ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_exists"),", ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_type"),", and  ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_name"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To specify that the existing cluster already has a PostgreSQL service instance, set ",Object(n.b)("inlineCode",{parentName:"p"},"postgres_server_exists"),".")))),Object(n.b)(c,{label:"3a. Resource Group",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the property specifying the resource group")),Object(n.b)("p",null,"The Developer Tools environment consists of several IBM Cloud resources—a Kubernetes or OpenShift cluster,\nsome cloud service instances, etc.\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam",title:"Managing identity and access"}),"IBM Cloud Identity and Access Management"),"\nmanages access to resources by organizing them into resource groups, so that one access policy can easily be applied\nto all of the resources in a group. "),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),", set the ",Object(n.b)("inlineCode",{parentName:"p"},"resource_group_name")," property to specify the resource group for the environment’s resources.\nThis resource group enables all of the resources to work together\nand will help distinguish the Developer Tools resources from the other resources in the same IBM Cloud account.\nThe resource group can be a new one—see the instructions below. Or you can specify an existing resource group."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Follow these instructions to create a resource group:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/resources?topic=resources-rgs#create_rgs",title:"Creating and managing resource groups"}),"Creating a resource group")))))),Object(n.b)(c,{label:"3b. VLANs",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the properties specifying the region, zone, and VLANs")),Object(n.b)("p",null,"The Developer Tools environment will be installed in either a Kubernetes or OpenShift cluster.\nIn IBM Cloud, a single zone cluster is\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-zero-downtime#ov_intro_reg",title:"Locations for resource deployment"}),"hosted in a particular zone in a particular region"),".\nIf the account you’re using has multiple regions and zones,\nyou need to decide what region and zone you’ll want the cluster cerated in and specify those. "),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),", set the following properties:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"vlan_region")," — The region that the cluster is or will be in"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"vlan_datacenter")," — The zone in that region that the cluster is or will be in")),Object(n.b)("p",null,"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-plan_clusters#plan_basics",title:"Understanding network basics of classic clusters"}),"networking in a Kubernetes or OpenShift cluster"),"\nconsists of (at a minimum) two VLANs, a public VLAN and a private VLAN.\nSpecify a pair of VLANs in the desired region and zone."),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),", set the following properties:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"public_vlan_id")," — The public VLAN that the cluster is or will be using"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"private_vlan_id")," — The private VLAN that the cluster is or will be using")),Object(n.b)("p",null,"An earlier step talked about using the ",Object(n.b)("inlineCode",{parentName:"p"},"igc vlan")," command in the ",Object(n.b)("a",i({parentName:"p"},{href:"cli"}),"Developer Tools CLI"),"\nto gather these VLAN settings. "),Object(n.b)("p",null,"Advanced users who want to specifiy more specific settings can determine the VLAN info:\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/infrastructure/vlans",title:"VLANs"}),"Getting started with VLANs")," explains how to open the\nVLAN List page in the console. Choose the public and private VLANs for the region and zone you want to\nhost the Developer Tools environment. If suitable VLANs don’t already exist, you can create them here.")),Object(n.b)(c,{label:"4. Run",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Run the scripts that create the cluster")),Object(n.b)("p",null,"Having configured the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," and ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," files, we are now ready to kick off the installation."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Launch a ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"IBM Garage for Developer Tools Docker container"),"."),Object(n.b)("p",{parentName:"li"},"  Run the following command to run the Docker container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n")),Object(n.b)("p",{parentName:"li"},"  This will install the Cloud Garage Tools Docker image and exec shell into the running container. The container will\nmount the filesystem’s ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(n.b)("inlineCode",{parentName:"p"},"/home/devops/src/"),". Once the Docker container has started and\nthe script has exec shelled into it, you will see an IBM Garage banner. This will help you identify you are running\ninside the Docker image that has just mounted your file system."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"% ./launch.sh\nCleaning up old container: ibm-garage-cli-tools-abcde\nInitializing container ibm-garage-cli-tools-abcde from garagecatalyst/ibm-garage-cli-tools:0.0.24\nd14e378eac5f8080dbaf5466d680396fc36f9fcf9433247409ea9b3a62326ad2\nAttaching to running container...\n    ________  __  ___   ________                __   ______\n   /  _/ __ )/  |/  /  / ____/ /___  __  ______/ /  / ____/___ __________ _____ ____\n   / // __  / /|_/ /  / /   / / __ \\/ / / / __  /  / / __/ __ `/ ___/ __ `/ __ `/ _ \\\n _/ // /_/ / /  / /  / /___/ / /_/ / /_/ / /_/ /  / /_/ / /_/ / /  / /_/ / /_/ /  __/\n/___/_____/_/  /_/   \\____/_/\\____/\\__,_/\\__,_/   \\____/\\__,_/_/   \\__,_/\\__, /\\___/\n                                                                        /____/\nRun 'image-help' to get a list of available tools, scripts, and ENV properties\n")),Object(n.b)("p",{parentName:"li"},"  The ",Object(n.b)("inlineCode",{parentName:"p"},"image-help")," command shows what can be done in this conatiner:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"$ image-help\nAvailable env properties (can be overridden for individual commands):\n> BM_API_KEY - the IBM Cloud api key\n> REGION - the IBM Cloud region (e.g. us-south)\n> RESOURCE_GROUP - the IBM Cloud resource group\n> CLUSTER_NAME - the name of the kubernetes cluster in IBM Cloud\n> SL_USERNAME - the Classic Infrastructure user name or API user name (e.g. 282165_joe@us.ibm.com)\n> SL_API_KEY - the Classic Infrastructure api key\n\nAvailable tools:\n> terraform (with helm, kube, and ibm provider plugins)\n> calicoctl\n> ibmcloud (with container-service, container-registry, and cloud-databases plugins)\n> kubectl\n> kustomize\n> oc\n> helm\n> docker\n> git\n> nvm\n> node (v11.12.0 currently installed)\n> yo\n\nAvailable scripts:\n> init.sh {BM_API_KEY} {REGION} {RESOURCE_GROUP} {CLUSTER_NAME}\n> createNamespaces.sh\n> deleteNamespace.sh\n> installHelm.sh\n> cluster-pull-secret-apply.sh\n> setup-namespace-pull-secrets.sh\n> checkPodRunning.sh\n> copy-secret-to-namespace.sh\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create the Developer Tools cluster"),Object(n.b)("p",{parentName:"li"},"  The supplied Terraform script is ready to run using the settings in ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),".\nYou optionally can extend or modify the scripts and tailor them for your project’s specific needs."),Object(n.b)("p",{parentName:"li"},"  Run this script in the container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./runTerraform.sh\n")),Object(n.b)("p",{parentName:"li"},"  This script will create the Developer Tools cluster."),Object(n.b)("p",{parentName:"li"},"  The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(n.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(n.b)("p",{parentName:"li"},"  Creating a new cluster takes about 1.5 hours on average (but can also take considerably longer).\nAt the end, you should have your Developer Tools cluster. Enjoy!"))),Object(n.b)("h3",{id:"possible-issues"},"Possible issues"),Object(n.b)("p",null,"If you find that that the Terraform provisioning has failed, try re-running the ",Object(n.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."))))}h.isMDXComponent=!0},439:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},440:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},441:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(439),i=a(0),o=a.n(i),l=a(105),s=a.n(l),c=a(195),b=a(127),p=a(3),u=a.n(p),h=a(384),d=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:u()(h.pageHeader,(t={},t[h.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:h.text},a)))))},m=a(440),g=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,r=m.data.site.siteMetadata.repository,i=a||r,o=i.baseUrl,l=i.subDirectory,s=o+"/edit/"+i.branch+l+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a(193),f=(a(59),a(26)),_=a(386);var N=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),o=i===r,l=new RegExp(r+"(?!-)"),c=a.replace(l,i);return Object(n.b)("li",{key:e,className:u()((t={},t[_.selectedItem]=o,t),_.listItem)},Object(n.b)(f.Link,{className:_.link,to:""+c},e))}));return Object(n.b)("div",{className:_.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:_.list},i))))))},r}(o.a.Component),y=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,l=t.frontmatter,p=void 0===l?{}:l,u=t.relativePagePath,h=t.titleType,m=p.tabs,g=p.title,f=p.theme,_=p.description,v=p.keywords,C=r.data.site.pathPrefix,T=C?i.pathname.replace(C,""):i.pathname,w=m?T.split("/").slice(-1)[0]||s()(m[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:f,pageTitle:g,pageDescription:_,pageKeywords:v,titleType:h},Object(n.b)(d,{title:o?Object(n.b)(o,null):g,label:"label",tabs:m}),m&&Object(n.b)(N,{slug:T,tabs:m,currentTab:w}),Object(n.b)(y.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:u})),Object(n.b)(j.a,{pageContext:t,location:i,slug:T,tabs:m,currentTab:w}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-create-cluster-ic-index-mdx-a33494e9fb7dd192fa95.js.map