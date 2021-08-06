(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},310:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/balena_select_url-d37b3a3cbc6263c171434a14fa168a9c.png"},311:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/balena_url-b8e2be34d29b8df10c494f5bc3d4f881.png"},312:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/balena_select_target-9504c64403a613c5514b809a9dead546.png"},313:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/balena_flashing-95aa5f16ce0ff3e6859685b06f155829.png"},314:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/balena_finished-3adc784e0ac8c4d8486de65f19c0967a.png"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(112)),l={id:"agent-rpi",title:"Raspberry Pi based Agent",sidebar_label:"Raspberry Pi",slug:"/setup/agent/rpi"},c={unversionedId:"setup/agent-rpi",id:"setup/agent-rpi",isDocsHomePage:!1,title:"Raspberry Pi based Agent",description:"The setup of an Raspberry Pi single-board computer is the easiest way to participate in a RIasC cloud of labs.",source:"@site/docs/setup/agent-rpi.md",slug:"/setup/agent/rpi",permalink:"/docs/setup/agent/rpi",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/setup/agent-rpi.md",version:"current",sidebar_label:"Raspberry Pi",sidebar:"docs",previous:{title:"Manually via Script",permalink:"/docs/setup/agent/manual"},next:{title:"Cloud-init",permalink:"/docs/setup/agent/cloud-init"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Screenshots",id:"screenshots",children:[]}],o={toc:s};function b(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The setup of an Raspberry Pi single-board computer is the easiest way to participate in a RIasC cloud of labs."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Raspberry Pi 3B / 4"),Object(i.b)("li",{parentName:"ul"},"SD card (>= 8 GB)"),Object(i.b)("li",{parentName:"ul"},"SD card reader"),Object(i.b)("li",{parentName:"ul"},"SD card imager tool (e.g. ",Object(i.b)("a",{parentName:"li",href:"https://www.balena.io/etcher/"},"Balena Etcher"),")"),Object(i.b)("li",{parentName:"ul"},"Hostname and token from cluster administrator")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Request a token and hostname from the cluster admin.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Note them down. We will need it later."),Object(i.b)("li",{parentName:"ul"},"Example:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TOKEN=K109b5813dd9a6944badc430e0e457179e4c83333f882a13ea7356134be77d3508b::server:e851c7e39f5fe771b8b9377c79eaff68")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HOSTNAME=riasc-node-vtt")))))),Object(i.b)("li",{parentName:"ol"},"Use your SD card imager tool of choice  to write the image to a spare SD card.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If asked use the following link as a URL for downloading the image: ",Object(i.b)("inlineCode",{parentName:"li"},"https://rwth-aachen.sciebo.de/s/7RpsGEl7NEEsvf1/download?path=%2F&files=riasc-raspios-buster-armhf-lite.zip")))),Object(i.b)("li",{parentName:"ol"},"Re-insert the SD card reader and open the ",Object(i.b)("inlineCode",{parentName:"li"},"boot")," partition of the SD card."),Object(i.b)("li",{parentName:"ol"},"Adjust the ",Object(i.b)("a",{parentName:"li",href:"/docs/setup/config"},"riasc.yaml")," file inside this partition:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Adjust the the settings ",Object(i.b)("inlineCode",{parentName:"li"},"hostname")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ansible.variables.token")," with the values from step 1."),Object(i.b)("li",{parentName:"ul"},"Relevant locations are marked with ",Object(i.b)("inlineCode",{parentName:"li"},"# changeme!")," inside the file."))),Object(i.b)("li",{parentName:"ol"},"Insert the SD card in the Raspberry Pi and power it on.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The first boot wil take a while (> 10 minutes)"))),Object(i.b)("li",{parentName:"ol"},"Wait until provisioning completes.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Once finished the the console should print ",Object(i.b)("inlineCode",{parentName:"li"},"RIasC update completed successfully!")))),Object(i.b)("li",{parentName:"ol"},"Verify that the node has been provisioned successfully:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Login to the Raspberry Pi with the standard credentials via console:")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"User: ",Object(i.b)("inlineCode",{parentName:"li"},"pi")),Object(i.b)("li",{parentName:"ul"},"Password: ",Object(i.b)("inlineCode",{parentName:"li"},"raspberry")),Object(i.b)("li",{parentName:"ul"},"Login via SSH is also possible")),Object(i.b)("ol",{parentName:"li",start:2},Object(i.b)("li",{parentName:"ol"},"Check the status of the ",Object(i.b)("inlineCode",{parentName:"li"},"riasc-update")," service by running the following command: ",Object(i.b)("inlineCode",{parentName:"li"},"systemctl status riasc-update")))),Object(i.b)("li",{parentName:"ol"},"Change the default password:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"passwd")," command and follow the instructions")))),Object(i.b)("h2",{id:"screenshots"},"Screenshots"),Object(i.b)("p",null,Object(i.b)("img",{src:a(310).default}),"\n",Object(i.b)("img",{src:a(311).default}),"\n",Object(i.b)("img",{src:a(312).default}),"\n",Object(i.b)("img",{src:a(313).default}),"\n",Object(i.b)("img",{src:a(314).default})))}b.isMDXComponent=!0}}]);