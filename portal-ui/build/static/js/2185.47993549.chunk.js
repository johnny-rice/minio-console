"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2185],{62185:function(e,t,n){n.r(t);var r=n(29439),a=n(72791),i=n(57689),o=n(78687),l=n(29945),s=n(56028),c=n(23814),u=n(45248),d=n(44690),f=n(87995),h=n(80184),x=(0,o.$j)((function(e){return{simplePath:e.objectBrowser.simplePath}}));t.default=x((function(e){var t=e.modalOpen,n=(e.folderName,e.bucketName),x=e.onClose,p=e.simplePath,m=(0,d.TL)(),v=(0,i.s0)(),j=(0,a.useState)(""),b=(0,r.Z)(j,2),w=b[0],g=b[1],C=(0,a.useState)(!1),P=(0,r.Z)(C,2),k=P[0],Z=P[1],y=(0,a.useState)(n),z=(0,r.Z)(y,2),B=z[0],E=z[1],S=(0,o.v9)((function(e){return e.objectBrowser.records}));(0,a.useEffect)((function(){if(p){var e="".concat(n).concat(n.endsWith("/")||p.startsWith("/")?"":"/").concat(p);E(e)}}),[p,n]);var F=function(){var e="/";p&&(e=p.endsWith("/")?p:"".concat(p,"/"));if(-1===S.findIndex((function(t){return t.name===e+w}))){var t=w.split("/").filter((function(e){return""!==e.trim()})).join("/");"/"===e.slice(0,1)&&(e=e.slice(1));var r="/browser/".concat(n,"/").concat((0,u.LL)("".concat(e).concat(t,"/")));v(r),x()}else m((0,f.zb)({errorMessage:"Folder cannot have the same name as an existing file",detailedError:""}))};(0,a.useEffect)((function(){var e=!0;0===w.trim().length&&(e=!1),Z(e)}),[w]);return(0,h.jsx)(a.Fragment,{children:(0,h.jsx)(s.Z,{modalOpen:t,title:"Choose or create a new path",onClose:x,titleIcon:(0,h.jsx)(l.Z9m,{}),children:(0,h.jsxs)(l.ltY,{withBorders:!1,containerPadding:!1,children:[(0,h.jsxs)(l.xuv,{className:"inputItem",sx:{display:"flex",gap:8},children:[(0,h.jsx)("strong",{children:"Current Path:"})," ",(0,h.jsx)("br",{}),(0,h.jsx)(l.xuv,{sx:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:14,textAlign:"left"},dir:"rtl",children:B})]}),(0,h.jsx)(l.Wzg,{value:w,label:"New Folder Path",id:"folderPath",name:"folderPath",placeholder:"Enter the new Folder Path",onChange:function(e){g(e.target.value)},onKeyPress:function(e){"Enter"===e.code&&""!==w&&F()},required:!0}),(0,h.jsxs)(l.rjZ,{item:!0,xs:12,sx:c.ID.modalButtonBar,children:[(0,h.jsx)(l.zxk,{id:"clear",type:"button",color:"primary",variant:"regular",onClick:function(){g("")},label:"Clear"}),(0,h.jsx)(l.zxk,{id:"create",type:"submit",variant:"callAction",disabled:!k,onClick:F,label:"Create"})]})]})})})}))}}]);
//# sourceMappingURL=2185.47993549.chunk.js.map