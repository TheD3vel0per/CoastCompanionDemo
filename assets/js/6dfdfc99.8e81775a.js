"use strict";(self.webpackChunkbackbenchers=self.webpackChunkbackbenchers||[]).push([[3516],{1297:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=s(4848),t=s(8453);const a={sidebar_position:5},o="Version 0.5.0 - Release Notes",r={id:"release-notes/0.5.0",title:"Version 0.5.0 - Release Notes",description:"General Notes:",source:"@site/dev/release-notes/0.5.0.md",sourceDirName:"release-notes",slug:"/release-notes/0.5.0",permalink:"/CoastCompanionDemo/dev/release-notes/0.5.0",draft:!1,unlisted:!1,editUrl:"https://github.com/thed3vel0per/CoastCompanionDemo/tree/main/backbenchers/dev/release-notes/0.5.0.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Version 0.4.0 - Release Notes",permalink:"/CoastCompanionDemo/dev/release-notes/0.4.0"},next:{title:"Version 0.5.1 - Release Notes",permalink:"/CoastCompanionDemo/dev/release-notes/0.5.1"}},l={},d=[{value:"General Notes:",id:"general-notes",level:2},{value:"Chat Sessions Portal",id:"chat-sessions-portal",level:2},{value:"Review User Rating",id:"review-user-rating",level:3},{value:"Review Chat History",id:"review-chat-history",level:3},{value:"Knowledge Base Portal",id:"knowledge-base-portal",level:2},{value:"Summary Page",id:"summary-page",level:2},{value:"Chatbot Fixes",id:"chatbot-fixes",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Known Issues:",id:"known-issues",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"version-050---release-notes",children:"Version 0.5.0 - Release Notes"}),"\n",(0,i.jsx)(n.h2,{id:"general-notes",children:"General Notes:"}),"\n",(0,i.jsxs)(n.p,{children:["API hook-up to the Admin Panel is completely hooked up. Summary, Chat Sessions page and User Ratings page is merged, as a design choice to maximize user experience for Coast Companion administrators. The Chat Sessions page is for User Ratings and Chat History functionality. Fully deliver filter and pagination features for each table in Chat Sessions. Review User Rating ",(0,i.jsx)(n.code,{children:"(/ratings/{:requestId})"})," and Chat History ",(0,i.jsx)(n.code,{children:"(/chats/{:chatId})"}),", and Export All Chats is fully delivered. Additionally, there are minor patches to improve Chatbot experience."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["There are two logins for the admin panel.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Username: admin | Password: Password@1"}),"\n",(0,i.jsx)(n.li,{children:"Username: TestAdmin | Password: Testing@2"}),"\n",(0,i.jsx)(n.li,{children:"Other accounts coming soon"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"chat-sessions-portal",children:"Chat Sessions Portal"}),"\n",(0,i.jsx)(n.p,{children:'Chat Sessions now displays accurate current user ratings based on each question and chat logs, as API is hooked up. All tables in Chat Sessions enable filter and sort functionality. There is a button named "Export All Chats" that refers to exporting all chats using two Date Pickers. When you export all chats using the start date and end date picker, it makes a CSV file with the naming "export_currentDateTime.csv". The functionality is fully delivered.'}),"\n",(0,i.jsx)(n.h3,{id:"review-user-rating",children:"Review User Rating"}),"\n",(0,i.jsx)(n.p,{children:'API hookup is complete. Admins are now able to review responses depending on the question from a user. Admins can review the dialogue between the user and the chatbot and see a certain rating (Thumbs Up or Down). There is a button named "See more" which helps redirect to the certain chat log containing this rating. Lastly, if the rating is bad, admins can examine what kind of sources are used for answering the question.'}),"\n",(0,i.jsx)(n.h3,{id:"review-chat-history",children:"Review Chat History"}),"\n",(0,i.jsx)(n.p,{children:"API hookup is complete. Admins are now able to review All Responses depending on each question from a user in a certain chat history. Admins can review the dialogue between the user and the chatbot and see a certain rating (Thumbs Up or Down). When admins hover over each response from Chat Dialog UI, the admin can notice the rating (Thumbs Up or Down), the comment, and the sources with regard to each request. Likewise, if the rating is bad, admins can examine what kind of sources are used for answering the question."}),"\n",(0,i.jsx)(n.h2,{id:"knowledge-base-portal",children:"Knowledge Base Portal"}),"\n",(0,i.jsx)(n.p,{children:"API hookup for source instances page is complete except for usage statistics. Admins are now view source instance information. This includes: modifying a source's file, and viewing important source statistics including source versioning."}),"\n",(0,i.jsx)(n.h2,{id:"summary-page",children:"Summary Page"}),"\n",(0,i.jsx)(n.p,{children:"API hookup for summary page is complete. Admins are now able to view aggregated summary statistics."}),"\n",(0,i.jsx)(n.h2,{id:"chatbot-fixes",children:"Chatbot Fixes"}),"\n",(0,i.jsx)(n.p,{children:"This release focuses primarily on ML model improvements and bug fixes. The ML model has been updated to send more accurate responses, and we have patched the bug where the user can send only whitespace."}),"\n",(0,i.jsx)(n.h3,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Improved the ML model to provide more accurate responses"}),"\n",(0,i.jsx)(n.li,{children:"Removed ability to send only whitespace"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"known-issues",children:"Known Issues:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Interval change in the summary page is not updaitng graphs. Users can "double click" the interval toggle to their desired interval, and the graph will update accurately. Will be fixed in later version.'}),"\n",(0,i.jsx)(n.li,{children:"Knowledge Base Instances file viewing is not available due to challenges in file viewing. Should be a minor bug fix, and a slight API reconfiguration. Will be fixed in the proceeding version."}),"\n",(0,i.jsx)(n.li,{children:"Knowledge Base Instance Usage statistics is unavailable and currently dummy data. Will be fixed at a later version once API is fully configured and thoroughly tested."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(6540);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);