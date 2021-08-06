(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||a;return r?i.a.createElement(d,c(c({ref:t},s),{},{components:r})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(112)),o={id:"network-emulation",title:"Network emulation (netem) CNI-plugin for Kubernetes",sidebar_label:"Network Emulation",slug:"/design/network-emulation",partners:["vtt","rwth"]},c={unversionedId:"design/network-emulation",id:"design/network-emulation",isDocsHomePage:!1,title:"Network emulation (netem) CNI-plugin for Kubernetes",description:"Facts",source:"@site/docs/design/network-emulation.md",slug:"/design/network-emulation",permalink:"/docs/design/network-emulation",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/design/network-emulation.md",version:"current",sidebar_label:"Network Emulation",sidebar:"docs",previous:{title:"Time Synchronization",permalink:"/docs/design/time-sync"},next:{title:"Monitoring of network conditions",permalink:"/docs/design/network-monitoring"}},l=[{value:"Features",id:"features",children:[]},{value:"TC",id:"tc",children:[]},{value:"VTT Network Emulator",id:"vtt-network-emulator",children:[]},{value:"Example Profile",id:"example-profile",children:[]},{value:"Example Pod",id:"example-pod",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Custom Resources",id:"custom-resources",children:[]},{value:"Mutating Admission Webhook",id:"mutating-admission-webhook",children:[]},{value:"Sidecar Container",id:"sidecar-container",children:[]}],s={toc:l};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"facts"},"Facts"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Git Repo:")," ",Object(a.b)("a",{parentName:"li",href:"https://github.com/ERIGrid2/k8s-netem"},"https://github.com/ERIGrid2/k8s-netem")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"State:")," under development")),Object(a.b)("h1",{id:"introduction"},"Introduction"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"k8s-netem")," adds traffic control to Kubernetes pods."),Object(a.b)("p",null,"It allows the user to configure one or more traffic profiles to impair network traffic between pods in the cluster and between pods and external networks."),Object(a.b)("p",null,"The traffic profiles are implemented as a custom resource (CR) which the user can add and modify in the Kubernetes database using standard tools like ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl")," or a Kubernetes web-interface."),Object(a.b)("p",null,"These, ",Object(a.b)("em",{parentName:"p"},"TrafficProfiles")," can use ",Object(a.b)("inlineCode",{parentName:"p"},"podSelectors")," or CIDRs to match a set of source and destination pods/networks for which the impairment should be configured.\nIn addition the impairment can be restricted to a set of UDP or TCP port numbers."),Object(a.b)("p",null,"The traffic profile custom resource is heavily inspired by Kubernetes NetworkPolicy CR."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Network emulation and rate limiting"),Object(a.b)("li",{parentName:"ul"},"Support for ingress and egress traffic"),Object(a.b)("li",{parentName:"ul"},"Requires no modification of existing manifests"),Object(a.b)("li",{parentName:"ul"},"Matches cross-pod flows and from/to CIDRs"),Object(a.b)("li",{parentName:"ul"},"Complex ingress/egress filters inspired by ",Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"Kubernete's network policies")),Object(a.b)("li",{parentName:"ul"},"Live filter updates based on ",Object(a.b)("inlineCode",{parentName:"li"},"podSelectors")),Object(a.b)("li",{parentName:"ul"},"Support for multiple traffic controllers")),Object(a.b)("h1",{id:"employed-technologies"},"Employed technologies"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Linux:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man8/tc.8.html"},"Traffic control")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.linuxfoundation.org/networking/netem"},"Netem")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://ipset.netfilter.org/"},"IPsets")))),Object(a.b)("li",{parentName:"ul"},"Kubernetes:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom Resources")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"Mutating Admission Webhook"))))),Object(a.b)("h1",{id:"controllers"},"Controllers"),Object(a.b)("p",null,"Currently ",Object(a.b)("em",{parentName:"p"},"k8s-netem")," supports two types of controllers:"),Object(a.b)("h2",{id:"tc"},"TC"),Object(a.b)("p",null,"The TC controller uses ",Object(a.b)("a",{parentName:"p",href:"https://wiki.linuxfoundation.org/networking/iproute2"},"iproute2"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"tc")," command to configure Linux's traffic control subsystem by adding Qdiscs and filters."),Object(a.b)("h2",{id:"vtt-network-emulator"},"VTT Network Emulator"),Object(a.b)("h1",{id:"example"},"Example"),Object(a.b)("h2",{id:"example-profile"},"Example Profile"),Object(a.b)("h2",{id:"example-pod"},"Example Pod"),Object(a.b)("h1",{id:"architecture"},"Architecture"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"User creates a new ",Object(a.b)("em",{parentName:"li"},"TrafficProfile")," CR"),Object(a.b)("li",{parentName:"ol"},"User creates one or more ",Object(a.b)("em",{parentName:"li"},"Pods")," which match the ",Object(a.b)("inlineCode",{parentName:"li"},"podSelector")," of the ",Object(a.b)("em",{parentName:"li"},"TrafficProfile")," CR"),Object(a.b)("li",{parentName:"ol"},"A mutating addmission webhook will inject a Sidecar container into the newly created ",Object(a.b)("em",{parentName:"li"},"Pods")),Object(a.b)("li",{parentName:"ol"},"The sidecar container will configure the network traffic controller by:"),Object(a.b)("li",{parentName:"ol"},"Watching for new/modified ",Object(a.b)("em",{parentName:"li"},"TrafficProfile")," matching the ",Object(a.b)("inlineCode",{parentName:"li"},"podSelector")),Object(a.b)("li",{parentName:"ol"},"Watching for new/modified ",Object(a.b)("em",{parentName:"li"},"Pods")," which match the ingress/egress peers ",Object(a.b)("inlineCode",{parentName:"li"},"podSelector"),"s",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"New matching ",Object(a.b)("em",{parentName:"li"},"Pods")," will be added to IPsets"),Object(a.b)("li",{parentName:"ul"},"Previously matching ",Object(a.b)("em",{parentName:"li"},"Pods")," which have been deleted will be removed from the IPsets."))),Object(a.b)("li",{parentName:"ol"},"Configuring the traffic impairment by cnofiguring one or more netem Qdiscs and attaching them to their dedicated IPsets filters.")),Object(a.b)("h1",{id:"implementation-details"},"Implementation details"),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"k8s-netem")," is deployed by the Riasc Helm chart."),Object(a.b)("h2",{id:"custom-resources"},"Custom Resources"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"k8s-netem")," defines a new CRD k8s-netem.riasc.io/v1/trafficprofiles."),Object(a.b)("h2",{id:"mutating-admission-webhook"},"Mutating Admission Webhook"),Object(a.b)("p",null,"The mutating admission webhooks gets invoked by the Kubernetes API server for each created, modified or deleted ",Object(a.b)("em",{parentName:"p"},"Pod")," resource."),Object(a.b)("p",null,"The webhook will check if any of the existing ",Object(a.b)("em",{parentName:"p"},"TrafficProfiles")," targets the ",Object(a.b)("em",{parentName:"p"},"Pod"),".\nIf this is the case, an additional sidecar container will be injected into the ",Object(a.b)("em",{parentName:"p"},"Pod"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Currently, the webhook will only inject the sidecar if the ",Object(a.b)("em",{parentName:"p"},"TrafficProfile")," already exists at the time of the ",Object(a.b)("em",{parentName:"p"},"Pod")," creation or update. ",Object(a.b)("em",{parentName:"p"},"k8s-netem")," will not re-create ",Object(a.b)("em",{parentName:"p"},"Pods")," (or use ephermal contaienrs) after a new ",Object(a.b)("em",{parentName:"p"},"TrafficProfile")," is added to the cluster. It is the responsibility to re-create ",Object(a.b)("em",{parentName:"p"},"Pods")," in order for the side-cards to be injected. "),Object(a.b)("h2",{id:"sidecar-container"},"Sidecar Container"),Object(a.b)("p",null,"The sidecar container will run alongside the user containers for the full life-cycle of the ",Object(a.b)("em",{parentName:"p"},"Pod"),".\nIt is tasked with the sychronization of ",Object(a.b)("em",{parentName:"p"},"TrafficProfiles")," with the Kernel TC / IPset datastructures."),Object(a.b)("p",null,"This means, modifications of existing ",Object(a.b)("em",{parentName:"p"},"TrafficProfiles")," by the user (e.g. to adjust impairment parameters) are synced to the Linux kernel configuration."),Object(a.b)("p",null,"At the same time the sidecar container will watch for new or deleted ",Object(a.b)("em",{parentName:"p"},"Pods")," which match the ingres/egress peer podSelectors and add their podIPs to the respective IPsets which are used by the TC filters."),Object(a.b)("h1",{id:"further-reading"},"Further reading"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://networkop.co.uk/post/2018-11-k8s-topo-p1/"},"https://networkop.co.uk/post/2018-11-k8s-topo-p1/")," "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/networkop/k8s-topo"},"https://github.com/networkop/k8s-topo")," "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.altoros.com/blog/kubernetes-networking-writing-your-own-simple-cni-plug-in-with-bash/"},"https://www.altoros.com/blog/kubernetes-networking-writing-your-own-simple-cni-plug-in-with-bash/"))))}b.isMDXComponent=!0}}]);