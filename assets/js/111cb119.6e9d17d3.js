"use strict";(self.webpackChunkbackbenchers=self.webpackChunkbackbenchers||[]).push([[1084],{5548:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(4848),o=s(8453);const i={sidebar_position:2},a="Version 0.2.0 - Release Notes",r={id:"release-notes/0.2.0",title:"Version 0.2.0 - Release Notes",description:"General Notes:",source:"@site/dev/release-notes/0.2.0.md",sourceDirName:"release-notes",slug:"/release-notes/0.2.0",permalink:"/CoastCompanionDemo/dev/release-notes/0.2.0",draft:!1,unlisted:!1,editUrl:"https://github.com/thed3vel0per/CoastCompanionDemo/tree/main/backbenchers/dev/release-notes/0.2.0.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Version 0.1.0 - Release Notes",permalink:"/CoastCompanionDemo/dev/release-notes/0.1.0"},next:{title:"Version 0.3.0 - Release Notes",permalink:"/CoastCompanionDemo/dev/release-notes/0.3.0"}},l={},d=[{value:"General Notes:",id:"general-notes",level:2},{value:"Revamped Chatbot UI:",id:"revamped-chatbot-ui",level:2},{value:"Admin Panel Accounts:",id:"admin-panel-accounts",level:2},{value:"Stronger Chatbot Model:",id:"stronger-chatbot-model",level:2},{value:"Known Issues:",id:"known-issues",level:2}];function c(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"version-020---release-notes",children:"Version 0.2.0 - Release Notes"}),"\n",(0,t.jsx)(n.h2,{id:"general-notes",children:"General Notes:"}),"\n",(0,t.jsx)(n.p,{children:"There are two logins for the admin panel."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Username: admin | Password: Password@1"}),"\n",(0,t.jsx)(n.li,{children:"Username: TestAdmin | Password: Testing@2"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"revamped-chatbot-ui",children:"Revamped Chatbot UI:"}),"\n",(0,t.jsx)(n.p,{children:"We have greatly improved the style of our chatbot to make it more appealing and to make it more clear to the user that they are interacting with a chatbot. We have also added UI elements with placeholders for upcoming features."}),"\n",(0,t.jsx)(n.p,{children:"Changes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Added initial message introducing the chatbot"}),"\n",(0,t.jsx)(n.li,{children:"Fixed send button not receiving a response from chatbot"}),"\n",(0,t.jsx)(n.li,{children:"Modernized the user interface by introducing color gradients and including a Coast Companion avatar beside all chatbot messages"}),"\n",(0,t.jsx)(n.li,{children:"Added a chatbot header that includes the Coast Companion icon, name, and online status."}),"\n",(0,t.jsx)(n.li,{children:"Added settings cog icon to toggle a dropdown menu (this menu will include options for font size changes in a future update)"}),"\n",(0,t.jsx)(n.li,{children:"Added three dots below every chat message to display links to the sources used in the chatbot answer (working links will be included in a future update)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"admin-panel-accounts",children:"Admin Panel Accounts:"}),"\n",(0,t.jsx)(n.p,{children:"We have implemented admin accounts using Amazon Cognito. This will allow us to have multiple admin users and manage accounts through AWS. Having Amazon Cognito accounts allows us to have individual credentials for database and knowledge base access which allows us to audit changes made by admins to the knowledge base."}),"\n",(0,t.jsx)(n.p,{children:"Changes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connected login page to Amazon Cognito"}),"\n",(0,t.jsxs)(n.li,{children:["Created two admin accounts","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Username: admin | Password: Password@1"}),"\n",(0,t.jsx)(n.li,{children:"Username: TestAdmin | Password: Testing@2"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Set up protected routes to block access to pages without logging in"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"stronger-chatbot-model",children:"Stronger Chatbot Model:"}),"\n",(0,t.jsx)(n.p,{children:"We have strengthened our chatbot model to improve reliability. We have made various changes to reduce hallucinations and return more accurate response times."}),"\n",(0,t.jsx)(n.p,{children:"Changes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Confined responses to CCS related responses only"}),"\n",(0,t.jsx)(n.li,{children:"Improved Knowledge base look up"}),"\n",(0,t.jsx)(n.li,{children:"Improved response coherency"}),"\n",(0,t.jsx)(n.li,{children:"Responds to ambiguous responses in context of CCS"}),"\n",(0,t.jsx)(n.li,{children:"Gave model context so it can understand that it is a chatbot for CCS"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"known-issues",children:"Known Issues:"}),"\n",(0,t.jsx)(n.p,{children:"The following are known issues we have discovered but have not fixed in this current version:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Chatbot is overtuned to only respond to questions about onboarding. May not respond to greetings like "hello" when it should be expected to.'}),"\n",(0,t.jsx)(n.li,{children:"Response times for the chatbot are still being improved."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);