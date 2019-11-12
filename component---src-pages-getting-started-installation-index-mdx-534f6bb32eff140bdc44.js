(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{412:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(439);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=o("Tabs"),c=o("Tab"),b={_frontmatter:s},p=r.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"Tabs"},Object(n.b)(c,{label:"Pre-requisites",mdxType:"Tab"},Object(n.b)("p",null,"The IBM Garage for Cloud Developer Tools are hosted in a ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers"}),"IBM Cloud Kubernetes Service")," or\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/openshift"}),"Red Hat OpenShift on IBM Cloud")," clutser to use for application development. These\ninstructions explain how to access, configure, and run the scripts to create the cluster."),Object(n.b)("p",null,"The following pre-requisties are required before following the setup instructions."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"An IBM Cloud account with:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"the ability to provision resources to support ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/clusters"}),"Kubernetes"),"\nand ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/clusters?platformType=openshift"}),"OpenShift")," environments"),Object(n.b)("li",{parentName:"ul"},"the ability to create a ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/account/resource-groups"}),"Resource Group")," for your development resources and admin rights to this resource group"),Object(n.b)("li",{parentName:"ul"},"a region and zone containing ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/classic/network/vlans"}),"a pair of public and private VLANs")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop")," installed and running on your local machine"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node")," installed on your local machine"))),Object(n.b)(c,{label:"1. Clone",mdxType:"Tab"},Object(n.b)("p",null,"Clone the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n")),Object(n.b)("p",null,"Switch to the cloned directory"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n"))),Object(n.b)(c,{label:"2. API keys",mdxType:"Tab"},Object(n.b)("p",null,"A Kubernetes or OpenShift clutser is a PaaS resource hosted in IaaS resources.\nAPI keys authenticate an ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli",title:"IBM Cloud CLI and Developer Tools"}),"IBM Cloud CLI"),"\nclient—such as a Terraform script—to create these resources programatically. Two keys will be needed:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The first Key is for the Classic Infrastructure (IaaS) resources"),Object(n.b)("li",{parentName:"ul"},"The second key is for the IBM Cloud (PaaS) resources")),Object(n.b)("p",null,"The following steps create the required keys and put them into a file called ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties"),"."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-properties"}),"classic.username=<CLASSIC_USERNAME>\nclassic.api.key=<CLASSIC_API_KEY>\nibmcloud.api.key=<IBMCLOUD_API_KEY>\n")),Object(n.b)("p",null,"The Iteration Zero scripts will use these settings to authenticate to IBM Cloud."),Object(n.b)("h3",{id:"step-a-create-the-credentialsproperties-file"},"Step A. Create the credentials.properties file"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Inside the ",Object(n.b)("inlineCode",{parentName:"li"},"iteration-zero-ibmcloud")," folder, copy ",Object(n.b)("inlineCode",{parentName:"li"},"credentials.template")," to a file named ",Object(n.b)("inlineCode",{parentName:"li"},"credentials.properties"),".")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd iteration-zero-ibmcloud\ncp credentials.template credentials.properties\n")),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file is already listed in the ",Object(n.b)("inlineCode",{parentName:"p"},".gitignore")," file so that the file containing\nyour private API keys will not be pushed to the server repository."),Object(n.b)("h3",{id:"step-b-set-the-classic-infrastructure-api-key"},"Step B. Set the Classic infrastructure API key"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Follow these instructions to ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-classic_keys",title:"Managing classic infrastructure API keys"}),"create a Classic infrastructure API key"),":"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the IBM Cloud console, go to the IBM Cloud API Keys page"),Object(n.b)("p",{parentName:"li"},"To open the IBM Cloud API Keys page, select ",Object(n.b)("strong",{parentName:"p"},"Manage -> Access (IAM)"),", then select the ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud API keys")," tab.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If your account already has a classic infrastructure API key, it will appear in the list of keys as ",Object(n.b)("strong",{parentName:"p"},"Classic infrastructure API key"),". Otherwise, the page will have a ",Object(n.b)("strong",{parentName:"p"},"Create a classic infrastructure API key")," button on the top. To crate the key, press that button and close the dialog."),Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"968px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.42148760330579%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQY043Mu07DMBSA4TwtEojLwguwsDAgcRtYGZB4DNRWLAixchEoSqvUxnFckjhx2vycpAIWBix95z86g6NUaWzu0CYb5G7Bf1/XdQPZMJmlKEsik39iXUEm+r1v6QNVHaQNvgnUTSt++31rlyuC6LuSf5cyopm2JHPDTFmmKhuapOanb1PNS6x4ek95Tdb7czwnTi3a1ajcr9mKD+eJCt/yl1IsqsDh9QMbx7fsnI/FhK3TEfuXdxxc3bN5MmJX7ttnY/YuJhzdPPIFqJUn7NcaI6oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"API Keys",title:"API Keys",src:"/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/cfe9c/apikeys.png",srcSet:["/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/d6747/apikeys.png 288w","/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/09548/apikeys.png 576w","/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/cfe9c/apikeys.png 968w"],sizes:"(max-width: 968px) 100vw, 968px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Find ",Object(n.b)("strong",{parentName:"p"},"Classic infrastructure API key")," in the list and open its details."),Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"608px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.77631578947368%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQ4y42Ti26rMAyG+/7Pd6bR9bJ2BRISoNBwTUj+44RTymGatEif4jjC/m2cXSwbpEULVnaB/+0Xs6/fnDskeUs0+BIKV15hB1qT0ej7DnocYCeDYegxkm30CE34e+9rGhV8/jwOQ/jG2QnPZbSeA3bDiCSTuDGB8qGQihwxF8iKO3heBrwt7zWYLCDonLAMt4RBNe0SUGuDnXPOSwQcZfLZvE0KSC4x/NvXkM9ZrFeIEQJ6hRRARX/Ao3dU5wOKwx6GJ0ApgCKDk3wDg0uvIciaENCQQp+1OB/xwSQuXOKQcORNB6WnwFOLW+1OpFTJNNvfApJCc4rQnz/QHiM89m+oSXFFeNvePoHkAkeEPaZz+jUn2CoMJVPf+tMeefQGk1ypTA7kjOAzXk1GLeAxHAF2m32r3j31LyXfP0/YxwyiqkG/A/1kMVi3MLpNyT6BfZU82U3AKb5gqCt0hYQS2YzMFruRAo5mEK2Ca5tZ7aKOBIzmVXK4eFT0VyVQFT9D967MqSUUvJtnb7IWqtM0x2al8FnGL8DGNtSaoqYX1OvXYGMzTz+BDeuS1y/lLzUf8FmtiQsfAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Classic Keys",title:"Classic Keys",src:"/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/0bd43/classickeys.png",srcSet:["/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/d6747/classickeys.png 288w","/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/09548/classickeys.png 576w","/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/0bd43/classickeys.png 608w"],sizes:"(max-width: 608px) 100vw, 608px",loading:"lazy"})),"\n    ")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the values for the ",Object(n.b)("inlineCode",{parentName:"p"},"classic.username")," and ",Object(n.b)("inlineCode",{parentName:"p"},"classic.api.key")," properties."))),Object(n.b)("h3",{id:"step-c-set-the-ibm-cloud-api-key"},"Step C. Set the IBM Cloud API key"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Follow these instructions to create an IBM Cloud API key:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey",title:"Managing user API keys"}),"Managing user API keys")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the value for the ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property.")))),Object(n.b)(c,{label:"3. TF Variables",mdxType:"Tab"},Object(n.b)("p",null,"The settings for creating the Cloud Developer Tools environment go in a properties file called ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),".\nThe process that creates the environment can create a new cluster for the environment or install the environment\ninto an existing cluster. With either a new or existing cluster, these ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," variables must be set."),Object(n.b)("p",null,"The file you will edit is ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/settings/terraform.tfvars"),". The next few steps will find the necessary\nresources and set them in the ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," file. Along the way, if any of these resources don’t already exist,\nyou’ll need to create them."),Object(n.b)("p",null,"The file consists of two parts: required varialbes and optional variables. There is a tool for optionally generating\nthe required variables. The optional variables have default values which assume the environment will create a new\ncluster; change them to use an existing cluster."),Object(n.b)("h3",{id:"required-variables"},"Required variables"),Object(n.b)("p",null,"Several of the variables are required and have no reasonable defaults, therefore you will need to set them."),Object(n.b)("p",null,"Typical values look like this:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'resource_group_name="catalyst-team"\nvlan_region="us-south"\nvlan_datacenter="dal10"\npublic_vlan_id="2366011"\nprivate_vlan_id="2366012"\ncluster_name="catalyst-team-cluster"\n')),Object(n.b)("h3",{id:"optional-generate-the-properties"},"Optional: Generate the properties"),Object(n.b)("p",null,"If you want to use specific settings, such as for an existing cluster, then skip this step.\nThis tool is for users who don’t know what these required settings should be and want a simple way\nto gather reasonable defaults for their particular account."),Object(n.b)("p",null,"The ",Object(n.b)("a",i({parentName:"p"},{href:"../getting-started/cli"}),"Cloud Developer Tools CLI")," has a command to gather this information for you,\nin a format that is easy to cut/paste into the ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," properties file. "),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"igc vlan\n")),Object(n.b)("p",null,"Note that you need to log into your account using the IBM Cloud CLI to use this tool."),Object(n.b)("h3",{id:"optional-variables"},"Optional variables"),Object(n.b)("p",null,"The remaining properties are also required but have reasonable defaults, so setting them is optional."),Object(n.b)("p",null,"The values look like this:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'# The type of cluster that will be created/used (kubernetes or openshift)\ncluster_type="kubernetes"\n# Flag indicating if we are using an existing cluster or creating a new one\ncluster_exists="false"\n# Flag indicating if we are using an existing PostgreSQL server or creating a new one\npostgres_server_exists="false"\n')),Object(n.b)("h3",{id:"scenarios"},"Scenarios"),Object(n.b)("p",null,"These are scenarios for using these optioal settings:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To specify whether the cluster (new or existing) is Kubernetes or OpenShift, set ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_type"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To specify installing the tools into an existing cluster, set ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_exists"),", ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_type"),", and  ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_name"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To specify that the existing cluster already has a PostgreSQL service instance, set ",Object(n.b)("inlineCode",{parentName:"p"},"postgres_server_exists"),".")))),Object(n.b)(c,{label:"3a. Resource Group",mdxType:"Tab"},Object(n.b)("p",null,"The Cloud Developer Tools environment consists of several IBM Cloud resources—a Kubernetes or OpenShift cluster,\nsome cloud service instances, etc. ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam",title:"Managing identity and access"}),"IBM Cloud Identity and Access Management"),"\nmanages access to resources by organizing them into resource groups, so that one access policy can easily be applied\nto all of the resources in a group. "),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),", set the ",Object(n.b)("inlineCode",{parentName:"p"},"resource_group_name")," property to specify the resource group for the environment’s resources.\nThis resource group will help distinguish the Cloud Developer Tools resources from the other resources in the same IBM Cloud account.\nThe resource group can be a new one—see the instructions below. If using an existing cluster, specify the\ncluster’s resource group."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Follow these instructions to create a resource group:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/resources?topic=resources-rgs#create_rgs",title:"Creating and managing resource groups"}),"Creating a resource group")))))),Object(n.b)(c,{label:"3b. VLANs",mdxType:"Tab"},Object(n.b)("p",null,"The Cloud Developer Tools environment will be installed in either a Kubernetes or OpenShift cluster, either\na new one or an existing one. In IBM Cloud, a single zone cluster is\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-zero-downtime#ov_intro_reg",title:"Locations for resource deployment"}),"hosted in a particular zone in a particular region"),".\nIf the environment will go in a new cluster and the account you’re using has multiple regions and zones,\nyou need to decide what region and zone you’ll want the cluster cerated in.\nIf the environment will be installed in an existing cluster, specify the region and zone that cluster is already in."),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),", set the following properties:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"vlan_region")," — The region that the cluster is or will be in"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"vlan_datacenter")," — The zone in that region that the cluster is or will be in")),Object(n.b)("p",null,"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-plan_clusters#plan_basics",title:"Understanding network basics of classic clusters"}),"networking in a Kubernetes or OpenShift cluster"),"\nconsists of (at a minimum) two VLANs, a public VLAN and a private VLAN.\nIf creating a new cluster, specify a pair of VLANs in the desired region and zone.\nIf the environment will be installed in an existing cluster, specify the VLANs that cluster is using."),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),", set the following properties:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"public_vlan_id")," — The public VLAN that the cluster is or will be using"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"private_vlan_id")," — The private VLAN that the cluster is or will be using")),Object(n.b)("p",null,"An earlier step talked about using the ",Object(n.b)("inlineCode",{parentName:"p"},"igc vlan")," command in the ",Object(n.b)("a",i({parentName:"p"},{href:"../getting-started/cli"}),"Cloud Developer Tools CLI"),"\nto gather these VLAN settings. Advanced users who want to specifiy more specific settings have\ntwo approaches for determing the VLAN info:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If using an existing cluster, determine the VLANs it’s using"),Object(n.b)("li",{parentName:"ul"},"If using a new cluster, select existing VLANs (or create new ones) in the desired region and zone")),Object(n.b)("p",null,"Either way, once you determine the VLAN info, you need to set it in the ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," properties file."),Object(n.b)("h3",{id:"option-a-select-existing-clusters-vlans-advanced"},"Option A. Select existing cluster’s VLANs (Advanced)"),Object(n.b)("p",null,"If installing the environment into an existing cluster, specifiy the VLANs that the cluster is using.\nEach worker node in a cluster’s worker pool connects to a public VLAN and private VLAN.\nIn the IBM Cloud console, the VLANs are shown on the cluster’s page in the ",Object(n.b)("strong",{parentName:"p"},"Worker Nodes")," tab."),Object(n.b)("h3",{id:"option-b-select-from-accounts-vlan-list-advanced"},"Option B. Select from account’s VLAN list (Advanced)"),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/infrastructure/vlans",title:"VLANs"}),"Getting started with VLANs")," explains how to open the\nVLAN List page in the console. Choose the public and private VLANs for the region and zone you want to\nhost the Cloud Developer Tools environment. If suitable VLANs don’t already exist, you can create them here.")),Object(n.b)(c,{label:"4. Run",mdxType:"Tab"},Object(n.b)("p",null,"Having configured the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," and ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," files, we are now ready to kick off the installation."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Launch a ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"IBM Garage for Cloud Developer Tools Docker container"),"."),Object(n.b)("p",{parentName:"li"},"  Run the following command to run the Docker container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n")),Object(n.b)("p",{parentName:"li"},"  This will install the Cloud Garage Tools Docker image and exec shell into the running container. The container will\nmount the filesystem’s ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(n.b)("inlineCode",{parentName:"p"},"/home/devops/src/"),". Once the Docker container has started and\nthe script has exec shelled into it, you will see an IBM Garage banner. This will help you identify you are running\ninside the Docker image that has just mounted your file system."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"% ./launch.sh\nCleaning up old container: ibm-garage-cli-tools-abcde\nInitializing container ibm-garage-cli-tools-abcde from garagecatalyst/ibm-garage-cli-tools:0.0.24\nd14e378eac5f8080dbaf5466d680396fc36f9fcf9433247409ea9b3a62326ad2\nAttaching to running container...\n    ________  __  ___   ________                __   ______\n   /  _/ __ )/  |/  /  / ____/ /___  __  ______/ /  / ____/___ __________ _____ ____\n   / // __  / /|_/ /  / /   / / __ \\/ / / / __  /  / / __/ __ `/ ___/ __ `/ __ `/ _ \\\n _/ // /_/ / /  / /  / /___/ / /_/ / /_/ / /_/ /  / /_/ / /_/ / /  / /_/ / /_/ /  __/\n/___/_____/_/  /_/   \\____/_/\\____/\\__,_/\\__,_/   \\____/\\__,_/_/   \\__,_/\\__, /\\___/\n                                                                        /____/\nRun 'image-help' to get a list of available tools, scripts, and ENV properties\n")),Object(n.b)("p",{parentName:"li"},"  The ",Object(n.b)("inlineCode",{parentName:"p"},"image-help")," command shows what can be done in this conatiner:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"$ image-help\nAvailable env properties (can be overridden for individual commands):\n> BM_API_KEY - the IBM Cloud api key\n> REGION - the IBM Cloud region (e.g. us-south)\n> RESOURCE_GROUP - the IBM Cloud resource group\n> CLUSTER_NAME - the name of the kubernetes cluster in IBM Cloud\n> SL_USERNAME - the Classic Infrastructure user name or API user name (e.g. 282165_joe@us.ibm.com)\n> SL_API_KEY - the Classic Infrastructure api key\n\nAvailable tools:\n> terraform (with helm, kube, and ibm provider plugins)\n> calicoctl\n> ibmcloud (with container-service, container-registry, and cloud-databases plugins)\n> kubectl\n> kustomize\n> oc\n> helm\n> docker\n> git\n> nvm\n> node (v11.12.0 currently installed)\n> yo\n\nAvailable scripts:\n> init.sh {BM_API_KEY} {REGION} {RESOURCE_GROUP} {CLUSTER_NAME}\n> createNamespaces.sh\n> deleteNamespace.sh\n> installHelm.sh\n> cluster-pull-secret-apply.sh\n> setup-namespace-pull-secrets.sh\n> checkPodRunning.sh\n> copy-secret-to-namespace.sh\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create the Cloud Developer Tools environment"),Object(n.b)("p",{parentName:"li"},"  The supplied Terraform script is ready to run using the settings in ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),".\nYou optionally can extend or modify the scripts and tailor them for your project’s specific needs."),Object(n.b)("p",{parentName:"li"},"  Run this script in the container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./runTerraform.sh\n")),Object(n.b)("p",{parentName:"li"},"  This script will create the Cloud Developer Tools environment."),Object(n.b)("p",{parentName:"li"},"  The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(n.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(n.b)("p",{parentName:"li"},"  If ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," specifies an existing cluster, the contents will be cleaned up to prepare for the terraform\nprocess. Any resources in the ",Object(n.b)("inlineCode",{parentName:"p"},"tools"),", ",Object(n.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(n.b)("inlineCode",{parentName:"p"},"test"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"staging")," namespaces will be deleted."),Object(n.b)("p",{parentName:"li"},"  Creating a new cluster takes about 1.5 hours on average (but can also take considerably longer)\nand the rest of the process takes about 30 minutes. At the end, you should have your Cloud Developer Tools environment\nfully provisioned and configured. Enjoy!"))),Object(n.b)("h3",{id:"cloud-developer-tools-environment"},"Cloud Developer Tools environment"),Object(n.b)("p",null,"Once the Terraform scripts have finished, you can see the resources that the scripts created in IBM Cloud:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In the IBM Cloud console, open the ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-ui#dashboardview",title:"Managing resources in the resource list"}),"Resource List")),Object(n.b)("li",{parentName:"ul"},"On the Resource List page, filter by your Resource Group (e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"catalyst-team"),")"),Object(n.b)("li",{parentName:"ul"},"You should see these resources listed:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Clusters"),": 1, either Kubernetes or OpenShift"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Services"),": 5 or so, such as PostgreSQL, LogDNA, etc."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Storage"),": 1, an instance of Cloud Object Storage"))),Object(n.b)("li",{parentName:"ul"},"Select the cluster and open the Kubernetes dashboard or OpenShift web console. You should see:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Namespaces: ",Object(n.b)("inlineCode",{parentName:"li"},"tools"),", ",Object(n.b)("inlineCode",{parentName:"li"},"dev"),", ",Object(n.b)("inlineCode",{parentName:"li"},"test"),", and ",Object(n.b)("inlineCode",{parentName:"li"},"staging")),Object(n.b)("li",{parentName:"ul"},"Deployments in the ",Object(n.b)("inlineCode",{parentName:"li"},"tools")," namespace: ",Object(n.b)("inlineCode",{parentName:"li"},"catalyst-dashboard"),", ",Object(n.b)("inlineCode",{parentName:"li"},"jenkins"),", etc.")))),Object(n.b)("h3",{id:"possible-issues"},"Possible issues"),Object(n.b)("p",null,"If you find that that the Terraform provisioning has failed, try re-running the ",Object(n.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(n.b)("p",null,"If you find that some of the services have failed to create in the time allocated, you can try this:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Manually delete the service instances in your resource group"),Object(n.b)("li",{parentName:"ul"},"Delete the ",Object(n.b)("inlineCode",{parentName:"li"},"workspace")," directory (which will remove any state that has been created by Terraform)"),Object(n.b)("li",{parentName:"ul"},"Re-run the ",Object(n.b)("inlineCode",{parentName:"li"},"runTerraform.sh")," script")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rm -rf workspace\n./runTerraform.sh\n")))))}u.isMDXComponent=!0},437:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},438:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},439:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(437),i=a(0),s=a.n(i),o=a(105),l=a.n(o),c=a(195),b=a(127),p=a(3),u=a.n(p),d=a(384),m=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},h=a(438),g=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,i=a||r,s=i.baseUrl,o=i.subDirectory,l=s+"/edit/"+i.branch+o+"/src/pages"+t;return s?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a(193),f=(a(59),a(26)),N=a(386);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0}),s=i===r,o=new RegExp(r+"(?!-)"),c=a.replace(o,i);return Object(n.b)("li",{key:e,className:u()((t={},t[N.selectedItem]=s,t),N.listItem)},Object(n.b)(f.Link,{className:N.link,to:""+c},e))}));return Object(n.b)("div",{className:N.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:N.list},i))))))},r}(s.a.Component),_=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,s=e.Title,o=t.frontmatter,p=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,h=p.tabs,g=p.title,f=p.theme,N=p.description,v=p.keywords,A=r.data.site.pathPrefix,C=A?i.pathname.replace(A,""):i.pathname,w=h?C.split("/").slice(-1)[0]||l()(h[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:f,pageTitle:g,pageDescription:N,pageKeywords:v,titleType:d},Object(n.b)(m,{title:s?Object(n.b)(s,null):g,label:"label",tabs:h}),h&&Object(n.b)(y,{slug:C,tabs:h,currentTab:w}),Object(n.b)(_.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:u})),Object(n.b)(j.a,{pageContext:t,location:i,slug:C,tabs:h,currentTab:w}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-installation-index-mdx-534f6bb32eff140bdc44.js.map