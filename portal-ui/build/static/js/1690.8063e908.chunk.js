"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1690],{90767:(e,i,t)=>{t.d(i,{Z:()=>u});var r=t(72791),n=t(31776),s=t(82342),l=t(23508),o=t(29945),a=t(87995),c=t(44690),d=t(80184);const u=e=>{let{configurationName:i,closeResetModalAndRefresh:t,resetOpen:u}=e;const p=(0,c.TL)(),[x,h]=(0,r.useState)(!1);(0,r.useEffect)((()=>{x&&n.h.configs.resetConfig(i).then((()=>{h(!1),t(!0)})).catch((e=>{h(!1),p((0,a.Ih)((0,s.g)(e.error)))}))}),[t,i,x,p]);return(0,d.jsx)(l.Z,{title:"Restore Defaults",confirmText:"Yes, Reset Configuration",isOpen:u,titleIcon:(0,d.jsx)(o.NvT,{}),isLoading:x,onConfirm:()=>{h(!0)},onClose:()=>{t(!1)},confirmationContent:(0,d.jsxs)(r.Fragment,{children:[x&&(0,d.jsx)(o.kod,{}),(0,d.jsxs)(r.Fragment,{children:["Are you sure you want to restore these configurations to default values?",(0,d.jsx)("br",{}),(0,d.jsx)("b",{style:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"},children:"Please note that this may cause your system to not be accessible"})]})]})})}},37099:(e,i,t)=>{t.d(i,{Z:()=>o});var r=t(72791),n=t(29945),s=t(80184);const l=e=>{let{icon:i,description:t}=e;return(0,s.jsxs)(n.xuv,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[i," ",(0,s.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:t})]})},o=e=>{let{helpText:i,docLink:t,docText:o,contents:a}=e;return(0,s.jsxs)(n.xuv,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px"},children:[(0,s.jsxs)(n.xuv,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,s.jsx)(n.M9A,{}),(0,s.jsx)("div",{children:i})]}),(0,s.jsxs)(n.xuv,{sx:{fontSize:"14px",marginBottom:"15px"},children:[a.map(((e,i)=>(0,s.jsxs)(r.Fragment,{children:[e.icon&&(0,s.jsx)(n.xuv,{sx:{paddingBottom:"20px"},children:(0,s.jsx)(l,{icon:e.icon,description:e.iconDescription})}),(0,s.jsx)(n.xuv,{sx:{paddingBottom:"20px"},children:e.text})]},"feature-item-".concat(i)))),(0,s.jsx)(n.xuv,{sx:{paddingBottom:"20px"},children:(0,s.jsx)("a",{href:t,target:"_blank",rel:"noopener",children:o})})]})]})}},11690:(e,i,t)=>{t.r(i),t.d(i,{default:()=>C});var r=t(72791),n=t(29945),s=t(31776),l=t(82342),o=t(44690),a=t(87995),c=t(79979),d=t(79844),u=t(37099),p=t(78687),x=t(99779),h=t(80184);const g=e=>{let{name:i}=e;return(0,h.jsxs)("h4",{children:[(0,h.jsx)(n.ZyT,{style:{transform:"rotateZ(90deg)"}}),i]})},m=e=>{let{blockName:i,results:t}=e;return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsxs)("strong",{children:[i,":"]}),(0,h.jsx)("ul",{children:t.map(((e,t)=>(0,h.jsx)("li",{children:e},"policy-".concat(i,"-").concat(t))))})]})},f=e=>{var i,t,s,l,o,a;let{entityName:c,results:d}=e,u=0;switch(c){case"Group":u=(null===(i=d.groups)||void 0===i?void 0:i.length)||0;break;case"Policy":u=(null===(t=d.policies)||void 0===t?void 0:t.length)||0;break;case"User":u=(null===(s=d.users)||void 0===s?void 0:s.length)||0}return(0,h.jsxs)(n.xuv,{className:"resultElement",sx:{marginTop:50,"&:first-of-type":{marginTop:0}},children:[(0,h.jsxs)(n.NZf,{separator:!0,sx:{fontSize:12},icon:(0,h.jsx)(n.anK,{style:{width:17,height:17}}),actions:(0,h.jsxs)(n.xuv,{sx:{fontSize:14},children:[(0,h.jsx)("strong",{children:u})," Entit",1===u?"y":"ies"," Found"]}),children:[c," Mappings"]}),(0,h.jsxs)(n.xuv,{className:"resultsList",sx:{h4:{borderBottom:"#e2e2e2 1px solid",padding:"12px 0",margin:0,marginBottom:15,display:"flex",alignItems:"center","& svg":{marginRight:10,fill:"#3C77A7"}}},children:["Group"===c&&(null===(l=d.groups)||void 0===l?void 0:l.map(((e,i)=>(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(g,{name:e.group||""}),e.policies&&(0,h.jsx)(m,{blockName:"Policies",results:e.policies})]},"policy-res-".concat(i))))),"User"===c&&(null===(o=d.users)||void 0===o?void 0:o.map(((e,i)=>(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(g,{name:e.user||""}),e.policies&&(0,h.jsx)(m,{blockName:"Policies",results:e.policies})]},"users-res-".concat(i))))),"Policy"===c&&(null===(a=d.policies)||void 0===a?void 0:a.map(((e,i)=>(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(g,{name:e.policy||""}),e.groups&&(0,h.jsx)(m,{blockName:"Groups",results:e.groups}),e.users&&(0,h.jsx)(m,{blockName:"Users",results:e.users})]},"policy-map-".concat(i)))))]})]})};var y=t(58400);const v=()=>{const e=(0,o.TL)(),[i,t]=(0,r.useState)(!1),[c,d]=(0,r.useState)([""]),[u,g]=(0,r.useState)([""]),[m,v]=(0,r.useState)(null),j=(0,p.v9)((e=>e.createUser.selectedPolicies));return(0,h.jsxs)(n.xuv,{sx:{marginTop:15,paddingTop:0},children:[(0,h.jsxs)(n.rjZ,{container:!0,sx:{marginTop:5},children:[(0,h.jsxs)(n.rjZ,{item:!0,sm:12,md:6,lg:5,sx:{padding:10,paddingTop:0},children:[(0,h.jsx)(n.NZf,{children:"Query Filters"}),(0,h.jsxs)(n.xuv,{sx:{padding:"0 10px",display:"flex",flexDirection:"column",gap:40},children:[(0,h.jsxs)(n.xuv,{sx:{padding:"10px 26px"},withBorders:!0,children:[(0,h.jsx)(n.xuv,{sx:{display:"flex"},children:(0,h.jsx)("h4",{style:{margin:0,marginBottom:10,fontSize:14},children:"Users"})}),(0,h.jsx)(n.xuv,{sx:{overflowY:"auto",minHeight:50,maxHeight:250,"& > div > div":{width:"100%"}},children:c.map(((e,i)=>(0,h.jsx)(n.Wzg,{id:"search-user-".concat(i),value:e,onChange:e=>{const t=[...c];t[i]=e.target.value,d(t)},overlayIcon:c.length===i+1?(0,h.jsx)(n.dtP,{}):(0,h.jsx)(n.HFL,{}),overlayAction:()=>{((e,i)=>{if(e){const e=[...c,""];return void d(e)}const t=c.filter(((e,t)=>t!==i));d(t)})(c.length===i+1,i)}},"search-user-".concat(i))))})]}),(0,h.jsxs)(n.xuv,{sx:{padding:"10px 26px"},withBorders:!0,children:[(0,h.jsx)("h4",{style:{margin:0,marginBottom:10,fontSize:14},children:"Groups"}),(0,h.jsx)(n.xuv,{sx:{overflowY:"auto",minHeight:50,maxHeight:"calc(100vh - 340px)","& > div > div":{width:"100%"}},children:u.map(((e,i)=>(0,h.jsx)(n.Wzg,{id:"search-group-".concat(i),value:e,onChange:e=>{const t=[...u];t[i]=e.target.value,g(t)},overlayIcon:u.length===i+1?(0,h.jsx)(n.dtP,{}):(0,h.jsx)(n.HFL,{}),overlayAction:()=>{((e,i)=>{if(e){const e=[...u,""];return void g(e)}const t=u.filter(((e,t)=>t!==i));g(t)})(u.length===i+1,i)}},"search-group-".concat(i))))})]}),(0,h.jsxs)(n.xuv,{sx:{padding:"10px 26px"},withBorders:!0,children:[(0,h.jsx)("h4",{style:{margin:0,marginBottom:10,fontSize:14},children:"Policies"}),(0,h.jsx)(n.xuv,{sx:{minHeight:265,maxHeight:"calc(100vh - 740px)"},children:(0,h.jsx)(y.Z,{selectedPolicy:j,noTitle:!0})})]})]})]}),(0,h.jsx)(n.rjZ,{item:!0,sm:12,md:6,lg:7,sx:{padding:10,paddingTop:0,display:"flex",flexDirection:"column"},children:i?(0,h.jsx)(n.xuv,{sx:{textAlign:"center"},children:(0,h.jsx)(n.aNw,{})}):(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(n.NZf,{actions:(0,h.jsx)(n.xuv,{sx:{display:"flex",flexDirection:"row",alignItems:"center",fontSize:14},children:null!==m&&void 0!==m&&m.timestamp?(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(n.wZd,{style:{width:14,height:14,marginRight:5,fill:"#BEBFBF"}}),x.ou.fromISO(m.timestamp).toFormat("D HH:mm:ss")]}):""}),children:"Query Results"}),m?(0,h.jsxs)(n.xuv,{sx:{backgroundColor:"#FBFAFA",padding:"8px 22px",flexGrow:1,overflowY:"auto"},children:[!m.groups&&!m.users&&!m.policies&&(0,h.jsx)(n.xuv,{sx:{textAlign:"center"},children:(0,h.jsx)("h4",{children:"No Results Available"})}),!!m.groups&&(0,h.jsx)(f,{results:m,entityName:"Group"}),!!m.users&&(0,h.jsx)(f,{results:m,entityName:"User"}),!!m.policies&&(0,h.jsx)(f,{results:m,entityName:"Policy"})]}):(0,h.jsx)(n.xuv,{sx:{textAlign:"center"},children:"No query results yet"})]})})]}),(0,h.jsx)(n.rjZ,{container:!0,children:(0,h.jsx)(n.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-start",marginTop:45,padding:"0 20px"},children:(0,h.jsx)(n.zxk,{id:"search-entity",type:"button",variant:"callAction",onClick:()=>{t(!0);let i={},r=j.filter((e=>""!==e)),n=c.filter((e=>""!==e)),o=u.filter((e=>""!==e));r.length>0&&(i.policies=r),n.length>0&&(i.users=n),o.length>0&&(i.groups=o),s.h.ldapEntities.getLdapEntities(i).then((e=>{v(e.data),t(!1)})).catch((i=>{e((0,a.Ih)((0,l.g)(i.error))),t(!1)}))},icon:(0,h.jsx)(n.W1M,{}),children:"Search"})})})]})};var j=t(90767),b=t(99670);const k=["server_addr","lookup_bind_dn","user_dn_search_base_dn","user_dn_search_filter"],C=()=>{const e=(0,o.TL)(),i=c.iR,[t,p]=(0,r.useState)(!0),[x,g]=(0,r.useState)(!1),[m,f]=(0,r.useState)(!1),[y,C]=(0,r.useState)({}),[D,S]=(0,r.useState)({}),[_,w]=(0,r.useState)(void 0),[P,I]=(0,r.useState)(!1),[A,N]=(0,r.useState)(!1),[E,O]=(0,r.useState)("configuration"),[L,F]=(0,r.useState)(!1),q=()=>{P&&_&&B(_),I(!P)},B=e=>{let i={},t={};if(e&&e.length>0){const r=e.find((e=>"enable"===e.key));let n=0,s=0;e.forEach((e=>{e.env_override?(i[e.key]=e.env_override.value,t[e.key]=e.env_override.name):i[e.key]=e.value,k.includes(e.key)&&(e.value&&""!==e.value&&"off"!==e.value||e.env_override&&""!==e.env_override.value&&"off"!==e.env_override.value)&&n++,k.includes(e.key)&&e.env_override&&s++}));const l=0!==n;l&&(r&&"off"!==r.value||!r)?g(!0):g(!1),0!==s&&F(!0),f(l)}S(t),C(i)};(0,r.useEffect)((()=>{t&&s.h.configs.configInfo("identity_ldap").then((e=>{e.data.length>0&&(w(e.data[0].key_values),B(e.data[0].key_values||[])),p(!1)})).catch((i=>{p(!1),e((0,a.Ih)((0,l.g)(i.error)))}))}),[e,t]);return(0,r.useEffect)((()=>{e((0,a.Sc)("LDAP"))}),[]),(0,h.jsxs)(n.rjZ,{item:!0,xs:12,children:[A&&(0,h.jsx)(j.Z,{configurationName:"identity_ldap",closeResetModalAndRefresh:async i=>{N(!1),i&&(e((0,a.cN)(i)),w(void 0),C({}),g(!1),f(!1),I(!1))},resetOpen:A}),(0,h.jsx)(d.Z,{label:"LDAP",actions:(0,h.jsx)(b.Z,{})}),(0,h.jsx)(n.Xgh,{variant:"constrained",children:(0,h.jsx)(n.mQc,{horizontal:!0,options:[{tabConfig:{id:"configuration",label:"Configuration"},content:(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(n.UHn,{icon:null,title:P?"Edit Configuration":"",actions:P?null:(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(n.ua7,{tooltip:L?"Configuration cannot be edited in this module as LDAP environment variables are set for this MinIO instance.":"",children:(0,h.jsx)(n.zxk,{id:"edit",type:"button",variant:"callAction",icon:(0,h.jsx)(n.dY8,{}),onClick:q,label:"Edit Configuration",disabled:t||L})}),m&&(0,h.jsx)(n.ua7,{tooltip:L?"Configuration cannot be disabled / enabled in this module as LDAP environment variables are set for this MinIO instance.":"",children:(0,h.jsx)(n.zxk,{id:"is-configuration-enabled",onClick:()=>(i=>{const t={key_values:[{key:"enable",value:i?"on":"off"}]};s.h.configs.setConfig("identity_ldap",t).then((i=>{g(!x),e((0,a.cN)(i.data.restart||!1)),i.data.restart||e((0,a.y1)("Configuration saved successfully"))})).catch((i=>{e((0,a.Ih)((0,l.g)(i.error)))}))})(!x),label:x?"Disable LDAP":"Enable LDAP",variant:x?"secondary":"regular",disabled:L})}),(0,h.jsx)(n.zxk,{id:"refresh-idp-config",onClick:()=>p(!0),label:"Refresh",icon:(0,h.jsx)(n.DuK,{})})]})}),(0,h.jsx)("br",{}),t?(0,h.jsx)(n.xuv,{sx:{display:"flex",justifyContent:"center",marginTop:10},children:(0,h.jsx)(n.aNw,{})}):(0,h.jsx)(r.Fragment,{children:P?(0,h.jsx)(r.Fragment,{children:(0,h.jsxs)(n.ltY,{helpBox:(0,h.jsx)(u.Z,{helpText:"Learn more about LDAP Configurations",contents:c.Si,docLink:"https://min.io/docs/minio/linux/operations/external-iam.html?ref=con#minio-external-iam-ad-ldap",docText:"Learn more about LDAP Configurations"}),children:[P&&m?(0,h.jsx)(n.xuv,{sx:{marginBottom:15},children:(0,h.jsx)(n.KfX,{title:(0,h.jsx)(n.xuv,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexGrow:1},children:"Lookup Bind Password must be re-entered to change LDAP configurations"}),iconComponent:(0,h.jsx)(n.e6P,{}),help:null})}):null,Object.entries(i).map((e=>{let[i,t]=e;return((e,i)=>"toggle"===i.type?(0,h.jsx)(n.rsf,{indicatorLabels:["Enabled","Disabled"],checked:"on"===y[e],value:"is-field-enabled",id:"is-field-enabled",name:"is-field-enabled",label:i.label,tooltip:i.tooltip,onChange:i=>C({...y,[e]:i.target.checked?"on":"off"}),description:"",disabled:!P},e):(0,h.jsx)(n.Wzg,{id:e,required:i.required,name:e,label:i.label,tooltip:i.tooltip,error:i.hasError(y[e],P),value:y[e]?y[e]:"",onChange:i=>C({...y,[e]:i.target.value}),placeholder:i.placeholder,disabled:!P,type:i.type},e))(i,t)})),(0,h.jsxs)(n.xuv,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"20px",gap:"15px"},children:[P&&m&&(0,h.jsx)(n.zxk,{id:"clear",type:"button",variant:"secondary",onClick:()=>N(!0),label:"Reset Configuration"}),(0,h.jsx)(n.zxk,{id:"cancel",type:"button",variant:"regular",onClick:q,label:"Cancel"}),(0,h.jsx)(n.zxk,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:t||!(()=>{for(const[e,t]of Object.entries(i))if(t.required&&(void 0===y[e]||null===y[e]||""===y[e]))return!1;return!0})(),label:"Save",onClick:()=>{const t=Object.keys(i).map((e=>({key:e,value:y[e]})));s.h.configs.setConfig("identity_ldap",{key_values:t}).then((i=>{I(!1),w(t),B(t),e((0,a.cN)(i.data.restart||!1)),C({...y,lookup_bind_password:""}),i.data.restart||e((0,a.y1)("Configuration saved successfully"))})).catch((i=>{e((0,a.Ih)((0,l.g)(i.error)))}))}})]})]})}):(0,h.jsx)(r.Fragment,{children:(0,h.jsxs)(n.xuv,{sx:{display:"grid",gridTemplateColumns:"1fr",gridAutoFlow:"dense",gap:3,padding:"15px",border:"1px solid #eaeaea","@media (min-width: 576px)":{gridTemplateColumns:"2fr 1fr",gridAutoFlow:"row"}},children:[(0,h.jsx)(n.kKA,{label:"LDAP Enabled",value:x?"Yes":"No"}),m&&(0,h.jsx)(r.Fragment,{children:Object.entries(i).map((e=>{let[i,t]=e;if(!t.editOnly){let e=t.label,r=y[i]?y[i]:"";return D[i]&&(e=(0,h.jsxs)(n.xuv,{sx:{display:"flex",alignItems:"center",gap:5,"& .min-icon":{height:20,width:20},"& span":{height:20,display:"flex",alignItems:"center"}},children:[(0,h.jsx)("span",{children:t.label}),(0,h.jsx)(n.ua7,{tooltip:"This value is set from the ".concat(D[i]," environment variable"),placement:"right",children:(0,h.jsx)("span",{className:"muted",children:(0,h.jsx)(n.zD0,{})})})]}),r=(0,h.jsx)("i",{children:(0,h.jsx)("span",{className:"muted",children:r})})),(0,h.jsx)(n.kKA,{label:e,value:r},i)}return null}))})]})})})]})},{tabConfig:{id:"entities",label:"Entities",disabled:!m||!x},content:(0,h.jsx)(r.Fragment,{children:m&&(0,h.jsx)(n.xuv,{children:(0,h.jsx)(v,{})})})}],currentTabOrPath:E,onTabClick:e=>{O(e),I(!1)}})})]})}},79979:(e,i,t)=>{t.d(i,{DY:()=>o,Si:()=>s,f4:()=>l,iR:()=>a});var r=t(29945),n=t(80184);const s=[{text:"MinIO supports using an Active Directory or LDAP (AD/LDAP) service for external management of user identities. Configuring an external IDentity Provider (IDP) enables Single-Sign On (SSO) workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:(0,n.jsx)(r.wXn,{}),iconDescription:"Create Configurations"},{text:"MinIO queries the configured Active Directory / LDAP server to verify the credentials specified by the application and optionally return a list of groups in which the user has membership. MinIO supports two modes (Lookup-Bind Mode and Username-Bind Mode) for performing these queries",icon:null,iconDescription:""},{text:"MinIO recommends using Lookup-Bind mode as the preferred method for verifying AD/LDAP credentials. Username-Bind mode is a legacy method retained for backwards compatibility only.",icon:null,iconDescription:""}],l=[{text:"MinIO supports using an OpenID Connect (OIDC) compatible IDentity Provider (IDP) such as Okta, KeyCloak, Dex, Google, or Facebook for external management of user identities.",icon:(0,n.jsx)(r.mBM,{}),iconDescription:"Create Configurations"},{text:"Configuring an external IDP enables Single-Sign On workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:null,iconDescription:""}],o={config_url:{required:!0,hasError:(e,i)=>!e&&i?"Config URL is required":"",label:"Config URL",tooltip:"Config URL for identity provider configuration",placeholder:"https://identity-provider-url/.well-known/openid-configuration",type:"text",editOnly:!1},client_id:{required:!0,hasError:(e,i)=>!e&&i?"Client ID is required":"",label:"Client ID",tooltip:"Identity provider Client ID",placeholder:"Enter Client ID",type:"text",editOnly:!1},client_secret:{required:!0,hasError:(e,i)=>!e&&i?"Client Secret is required":"",label:"Client Secret",tooltip:"Identity provider Client Secret",placeholder:"Enter Client Secret",type:"password",editOnly:!0},claim_name:{required:!1,label:"Claim Name",tooltip:"Claim from which MinIO will read the policy or role to use",placeholder:"Enter Claim Name",type:"text",hasError:(e,i)=>"",editOnly:!1},display_name:{required:!1,label:"Display Name",tooltip:"",placeholder:"Enter Display Name",type:"text",hasError:(e,i)=>"",editOnly:!1},claim_prefix:{required:!1,label:"Claim Prefix",tooltip:"",placeholder:"Enter Claim Prefix",type:"text",hasError:(e,i)=>"",editOnly:!1},scopes:{required:!1,label:"Scopes",tooltip:"",placeholder:"openid,profile,email",type:"text",hasError:(e,i)=>"",editOnly:!1},redirect_uri:{required:!1,label:"Redirect URI",tooltip:"",placeholder:"https://console-endpoint-url/oauth_callback",type:"text",hasError:(e,i)=>"",editOnly:!1},role_policy:{required:!1,label:"Role Policy",tooltip:"",placeholder:"readonly",type:"text",hasError:(e,i)=>"",editOnly:!1},claim_userinfo:{required:!1,label:"Claim User Info",tooltip:"",placeholder:"Claim User Info",type:"toggle",hasError:(e,i)=>"",editOnly:!1},redirect_uri_dynamic:{required:!1,label:"Redirect URI Dynamic",tooltip:"",placeholder:"Redirect URI Dynamic",type:"toggle",hasError:(e,i)=>"",editOnly:!1}},a={server_insecure:{required:!0,hasError:(e,i)=>!e&&i?"Server Address is required":"",label:"Server Insecure",tooltip:"Disable SSL certificate verification ",placeholder:"myldapserver.com:636",type:"toggle",editOnly:!1},server_addr:{required:!0,hasError:(e,i)=>!e&&i?"Server Address is required":"",label:"Server Address",tooltip:'AD/LDAP server address e.g. "myldapserver.com:636"',placeholder:"myldapserver.com:636",type:"text",editOnly:!1},lookup_bind_dn:{required:!0,hasError:(e,i)=>!e&&i?"Lookup Bind DN is required":"",label:"Lookup Bind DN",tooltip:"DN (Distinguished Name) for LDAP read-only service account used to perform DN and group lookups",placeholder:"cn=admin,dc=min,dc=io",type:"text",editOnly:!1},lookup_bind_password:{required:!0,hasError:(e,i)=>!e&&i?"Lookup Bind Password is required":"",label:"Lookup Bind Password",tooltip:"Password for LDAP read-only service account used to perform DN and group lookups",placeholder:"admin",type:"password",editOnly:!0},user_dn_search_base_dn:{required:!0,hasError:(e,i)=>!e&&i?"User DN Search Base DN is required":"",label:"User DN Search Base",tooltip:"",placeholder:"DC=example,DC=net",type:"text",editOnly:!1},user_dn_search_filter:{required:!0,hasError:(e,i)=>!e&&i?"User DN Search Filter is required":"",label:"User DN Search Filter",tooltip:"",placeholder:"(sAMAcountName=%s)",type:"text",editOnly:!1},group_search_base_dn:{required:!1,hasError:(e,i)=>"",label:"Group Search Base DN",tooltip:"",placeholder:"ou=swengg,dc=min,dc=io",type:"text",editOnly:!1},group_search_filter:{required:!1,hasError:(e,i)=>"",label:"Group Search Filter",tooltip:"",placeholder:"(&(objectclass=groupofnames)(member=%d))",type:"text",editOnly:!1}}},58400:(e,i,t)=>{t.d(i,{Z:()=>x});var r=t(72791),n=t(29945),s=t(21639),l=t(59114),o=t(87995),a=t(44690),c=t(74616),d=t(78687),u=t(31776),p=t(80184);const x=e=>{let{noTitle:i=!1}=e;const t=(0,a.TL)(),[x,h]=(0,r.useState)([]),[g,m]=(0,r.useState)(!1),[f,y]=(0,r.useState)(""),v=(0,d.v9)((e=>e.createUser.selectedPolicies)),j=(0,r.useCallback)((()=>{m(!0),u.h.policies.listPolicies().then((e=>{var i;const t=null!==(i=e.data.policies)&&void 0!==i?i:[];m(!1),h(t.sort(s.g4))})).catch((e=>{m(!1),t((0,o.zb)(e))}))}),[t]);(0,r.useEffect)((()=>{m(!0)}),[]),(0,r.useEffect)((()=>{g&&j()}),[g,j]);const b=x.filter((e=>e.name.includes(f)));return(0,p.jsxs)(n.rjZ,{item:!0,xs:12,className:"inputItem",children:[g&&(0,p.jsx)(n.kod,{}),x.length>0?(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)(n.rjZ,{item:!0,xs:12,className:"inputItem",children:(0,p.jsx)(l.Z,{placeholder:"Start typing to search for a Policy",onChange:e=>{y(e)},value:f,label:i?"":"Assign Policies"})}),(0,p.jsx)(n.wQF,{columns:[{label:"Policy",elementKey:"name"}],onSelect:e=>{const i=e.target,r=i.value,n=i.checked;let s=[...v];n?s.push(r):s=s.filter((e=>e!==r)),s=s.filter((e=>""!==e)),t((0,c.ue)(s))},selectedItems:v,isLoading:g,records:b,entityName:"Policies",idField:"name",customPaperHeight:"200px"})]}):(0,p.jsx)(n.xuv,{sx:{textAlign:"center",padding:"10px 0"},children:"No Policies Available"})]})}},21639:(e,i,t)=>{t.d(i,{KE:()=>l,LQ:()=>r,V2:()=>s,g4:()=>n});const r=(e,i)=>{if(e.accessKey&&i.accessKey){if(e.accessKey>i.accessKey)return 1;if(e.accessKey<i.accessKey)return-1}return 0},n=(e,i)=>e.name>i.name?1:e.name<i.name?-1:0,s=(e,i)=>e>i?1:e<i?-1:0,l=(e,i)=>e.policy>i.policy?1:e.policy<i.policy?-1:0}}]);
//# sourceMappingURL=1690.8063e908.chunk.js.map