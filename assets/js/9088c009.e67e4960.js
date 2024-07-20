"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5628],{2244:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const r={},o="Action Flow",a={id:"The Backend Implementation/action_flow",title:"Action Flow",description:"architecture diagram",source:"@site/versioned_docs/version-1.2/The Backend Implementation/1-action_flow.md",sourceDirName:"The Backend Implementation",slug:"/The Backend Implementation/action_flow",permalink:"/microsite/docs/1.2/The Backend Implementation/action_flow",draft:!1,unlisted:!1,tags:[],version:"1.2",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tech Stack",permalink:"/microsite/docs/1.2/The Platform/tecnologies"},next:{title:"Load Balancer",permalink:"/microsite/docs/1.2/The Backend Implementation/load_balancer"}},c={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"General Flow Description",id:"general-flow-description",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"action-flow",children:"Action Flow"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"architecture diagram",src:t(6885).A+"",width:"1245",height:"721"})})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.p,{children:"The Backend technologies and their connections."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#action-flow",children:"Action Flow"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#general-flow-description",children:"General Flow Description"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"general-flow-description",children:"General Flow Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"backend"})," is composed of multiple services and technologies that manage ",(0,s.jsx)(n.strong,{children:"three internal functions"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Load Balancing"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Data Manipulation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Data Persistance"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"data"})," is provided in the form of ",(0,s.jsx)(n.strong,{children:"HTTP requests"})," created by the ",(0,s.jsx)(n.strong,{children:"frontend"})," of the application."]}),"\n",(0,s.jsxs)(n.p,{children:["These requests are first intercepted by the ",(0,s.jsx)(n.strong,{children:"load balancer"}),", which will distribute all the incoming requests to a set of ",(0,s.jsx)(n.strong,{children:"API instances"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["These instances will perform the necessary ",(0,s.jsx)(n.strong,{children:"data processing"})," and analysis and will provide the response back to the load balancer, which will promptly ",(0,s.jsx)(n.strong,{children:"foward the response"})," back to the initial ",(0,s.jsx)(n.strong,{children:"requester"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To ",(0,s.jsx)(n.strong,{children:"persist"})," and save the ",(0,s.jsx)(n.strong,{children:"data"}),", the API instances are connected to a set of ",(0,s.jsx)(n.strong,{children:"three main databases"}),".\nEach database has a ",(0,s.jsx)(n.strong,{children:"distinct function"}),", that being for saving the ",(0,s.jsx)(n.strong,{children:"data models"})," (main database), saving the ",(0,s.jsx)(n.strong,{children:"provided files"})," (cloud storage) and finally saving the ",(0,s.jsx)(n.strong,{children:"configurations"}),' of the instances and "magic numbers" (configuration database)']})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6885:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/backend-817c74ec02f634999faf71fe639bf4f0.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);