"use strict";(self.webpackChunkriasc=self.webpackChunkriasc||[]).push([[4268],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9245:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"terminology",title:"Terminology",sidebar_label:"\u270d\ufe0f Terminology",slug:"/terminology"},s=void 0,d={unversionedId:"terminology",id:"terminology",title:"Terminology",description:"RIasC",source:"@site/docs/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/docs/terminology",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/terminology.md",tags:[],version:"current",frontMatter:{id:"terminology",title:"Terminology",sidebar_label:"\u270d\ufe0f Terminology",slug:"/terminology"},sidebar:"docs",previous:{title:"Slides",permalink:"/docs/slides"}},c=[{value:"RIasC",id:"riasc",children:[],level:3},{value:"Kubernetes, K8s",id:"kubernetes-k8s",children:[{value:"Pod",id:"pod",children:[],level:4},{value:"Daemonset",id:"daemonset",children:[],level:4},{value:"Deployment",id:"deployment",children:[],level:4},{value:"CustomResourceDescription",id:"customresourcedescription",children:[],level:4}],level:3},{value:"Overlay Network",id:"overlay-network",children:[],level:3},{value:"WireGuard",id:"wireguard",children:[],level:3},{value:"Kilo (kg)",id:"kilo-kg",children:[],level:3},{value:"Netem",id:"netem",children:[],level:3},{value:"Iperf3",id:"iperf3",children:[],level:3},{value:"Ping",id:"ping",children:[],level:3},{value:"K3S",id:"k3s",children:[],level:3},{value:"Helm",id:"helm",children:[],level:3},{value:"Chart",id:"chart",children:[],level:3},{value:"Mobile Unit",id:"mobile-unit",children:[],level:3},{value:"Agent Node",id:"agent-node",children:[],level:3},{value:"Master Node",id:"master-node",children:[],level:3}],p={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"riasc"},"RIasC"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"RIasC"),", an acronym for Research Infrastructure as Code, is a framework to accelerate distributed Research Infrastructure (RI) experiments."),(0,o.kt)("p",null,"It is heavily inspired by the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Infrastructure_as_code"},"Infrastructure-as-Code (IaC)")," process and uses on declarative configuration to setup distributed research experiments."),(0,o.kt)("h3",{id:"kubernetes-k8s"},"Kubernetes, K8s"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Kubernetes"},"Kubernetes"))," (commonly stylized as K8s) is an open-source container orchestration system for automating software deployment, scaling, and management."),(0,o.kt)("h4",{id:"pod"},"Pod"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/concepts/workloads/pods/"},"Pods"))," are the smallest deployable units of computing that you can create and manage in Kubernetes."),(0,o.kt)("h4",{id:"daemonset"},"Daemonset"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet"))," ensures that all (or some) Nodes run a copy of a Pod. As nodes are added to the cluster, Pods are added to them. As nodes are removed from the cluster, those Pods are garbage collected. Deleting a DaemonSet will clean up the Pods it created."),(0,o.kt)("h4",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment"))," provides declarative updates for Pods and ReplicaSets."),(0,o.kt)("p",null,"You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments."),(0,o.kt)("h4",{id:"customresourcedescription"},"CustomResourceDescription"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom resources"))," are extensions of the Kubernetes API. This page discusses when to add a custom resource to your Kubernetes cluster and when to use a standalone service. It describes the two methods for adding custom resources and how to choose between them."),(0,o.kt)("h3",{id:"overlay-network"},"Overlay Network"),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Overlay_network"},"overlay network"))," is a computer network that is layered on top of (or tunneled through) another network."),(0,o.kt)("h3",{id:"wireguard"},"WireGuard"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/WireGuard"},"WireGuard"))," is a communication protocol and free and open-source software that implements encrypted virtual private networks (VPNs), and was designed with the goals of ease of use, high speed performance, and low attack surface."),(0,o.kt)("h3",{id:"kilo-kg"},"Kilo (kg)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://kilo.squat.ai/"},"Kilo"))," is a multi-cloud network overlay built on WireGuard and designed for Kubernetes."),(0,o.kt)("h3",{id:"netem"},"Netem"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://wiki.linuxfoundation.org/networking/netem"},"netem"))," provides Network Emulation functionality for testing protocols by emulating the properties of wide area networks. The current version emulates variable delay, loss, duplication and re-ordering."),(0,o.kt)("h3",{id:"iperf3"},"Iperf3"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://iperf.fr/"},"iPerf3"))," is a tool for active measurements of the maximum achievable bandwidth on IP networks. It supports tuning of various parameters related to timing, buffers and protocols (TCP, UDP, SCTP with IPv4 and IPv6). For each test it reports the bandwidth, loss, and other parameters. "),(0,o.kt)("h3",{id:"ping"},"Ping"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"[Ping]","(",(0,o.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Ping"},"https://en.wikipedia.org/wiki/Ping")),"(networking",(0,o.kt)("em",{parentName:"p"},"utility))")," is a computer network administration software utility used to test the reachability of a host on an Internet Protocol (IP) network. It is available for virtually all operating systems that have networking capability, including most embedded network administration software."),(0,o.kt)("h3",{id:"k3s"},"K3S"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://k3s.io/"},"K3s"))," is a fully compliant Kubernetes distribution built for IoT & Edge computing."),(0,o.kt)("h3",{id:"helm"},"Helm"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://helm.sh/"},"Helm")),' is a package manager that helps developers "easily manage and deploy applications onto the Kubernetes cluster".'),(0,o.kt)("h3",{id:"chart"},"Chart"),(0,o.kt)("p",null,"Helm uses a packaging format called charts. A chart is a collection of files that describe a related set of Kubernetes resources. A single chart might be used to deploy something simple, like a memcached pod, or something complex, like a full web app stack with HTTP servers, databases, caches, and so on."),(0,o.kt)("h3",{id:"mobile-unit"},"Mobile Unit"),(0,o.kt)("h3",{id:"agent-node"},"Agent Node"),(0,o.kt)("h3",{id:"master-node"},"Master Node"))}u.isMDXComponent=!0}}]);