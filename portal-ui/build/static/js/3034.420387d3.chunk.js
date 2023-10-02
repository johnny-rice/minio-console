(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3034],{21435:function(e,n,t){"use strict";var r=t(29439),o=t(1413),i=t(72791),a=t(20817),u=t(61889),c=t(30829),s=t(20068),l=t(13400),d=t(20165),f=t(3579),p=t(11135),x=t(72455),v=t(25787),m=t(23814),h=t(29945),Z=t(63733),j=t(80184),b=(0,x.Z)((function(e){return(0,p.Z)((0,o.Z)({},m.gM))}));function y(e){var n=b();return(0,j.jsx)(a.Z,(0,o.Z)({InputProps:{classes:n}},e))}n.Z=(0,v.Z)((function(e){return(0,p.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},m.YI),m.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var n=e.label,t=e.onChange,a=e.value,p=e.id,x=e.name,v=e.type,m=void 0===v?"text":v,b=e.autoComplete,C=void 0===b?"off":b,g=e.disabled,k=void 0!==g&&g,M=e.multiline,F=void 0!==M&&M,I=e.tooltip,S=void 0===I?"":I,K=e.index,P=void 0===K?0:K,_=e.error,w=void 0===_?"":_,N=e.required,z=void 0!==N&&N,E=e.placeholder,R=void 0===E?"":E,A=e.min,L=e.max,O=e.overlayId,B=e.overlayIcon,T=void 0===B?null:B,W=e.overlayObject,Y=void 0===W?null:W,D=e.extraInputProps,V=void 0===D?{}:D,q=e.overlayAction,G=e.noLabelMinWidth,H=void 0!==G&&G,X=e.pattern,J=void 0===X?"":X,Q=e.autoFocus,U=void 0!==Q&&Q,$=e.classes,ee=e.className,ne=void 0===ee?"":ee,te=e.onKeyPress,re=e.onFocus,oe=e.onPaste,ie=(0,o.Z)({"data-index":P},V),ae=(0,i.useState)(!1),ue=(0,r.Z)(ae,2),ce=ue[0],se=ue[1];"number"===m&&A&&(ie.min=A),"number"===m&&L&&(ie.max=L),""!==J&&(ie.pattern=J);var le=T,de=m;return"password"===m&&null===T&&(le=ce?(0,j.jsx)(d.Z,{}):(0,j.jsx)(f.Z,{}),de=ce?"text":"password"),(0,j.jsx)(i.Fragment,{children:(0,j.jsxs)(u.ZP,{container:!0,className:(0,Z.Z)(""!==ne?ne:"",""!==w?$.errorInField:$.inputBoxContainer),children:[""!==n&&(0,j.jsxs)(c.Z,{htmlFor:p,className:H?$.noMinWidthLabel:$.inputLabel,children:[(0,j.jsxs)("span",{children:[n,z?"*":""]}),""!==S&&(0,j.jsx)("div",{className:$.tooltipContainer,children:(0,j.jsx)(s.Z,{title:S,placement:"top-start",children:(0,j.jsx)("div",{className:$.tooltip,children:(0,j.jsx)(h.byK,{})})})})]}),(0,j.jsxs)("div",{className:$.textBoxContainer,children:[(0,j.jsx)(y,{id:p,name:x,fullWidth:!0,value:a,autoFocus:U,disabled:k,onChange:t,type:de,multiline:F,autoComplete:C,inputProps:ie,error:""!==w,helperText:w,placeholder:R,className:$.inputRebase,onKeyPress:te,onFocus:re,onPaste:oe}),le&&(0,j.jsx)("div",{className:"".concat($.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,j.jsx)(l.Z,{onClick:q?function(){q()}:function(){return se(!ce)},id:O,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:le})}),Y&&(0,j.jsx)("div",{className:"".concat($.overlayAction," ").concat(""!==n?"withLabel":""),children:Y})]})]})})}))},33034:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r=t(72791),o=t(29945),i=t(57689),a=t(56087),u=t(87995),c=t(81551),s=t(29439),l=t(21435),d=t(9505),f=t(40214),p=t(23814),x=t(80184),v=function(e){var n=e.onSuccess,t=e.onError,i=(0,d.Z)(n,t),a=(0,s.Z)(i,2),u=a[0],c=a[1],v=(0,r.useState)(""),m=(0,s.Z)(v,2),h=m[0],Z=m[1],j=""!==h.trim()&&-1===h.indexOf(" ");return(0,x.jsx)(o.Xgh,{children:(0,x.jsx)(o.ltY,{title:"Create Key",icon:(0,x.jsx)(o.sR0,{}),helpBox:(0,x.jsx)(f.Z,{helpText:"Encryption Key",contents:["Create a new cryptographic key in the Key Management Service server connected to MINIO."]}),children:(0,x.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),c("POST","/api/v1/kms/keys/",{key:h})},children:(0,x.jsxs)(o.rjZ,{container:!0,children:[(0,x.jsx)(o.rjZ,{item:!0,xs:12,children:(0,x.jsx)(l.Z,{id:"key-name",name:"key-name",label:"Key Name",autoFocus:!0,value:h,error:function(e){return-1!==e.indexOf(" ")?"Key name cannot contain spaces":""}(h),onChange:function(e){Z(e.target.value)}})}),(0,x.jsxs)(o.rjZ,{item:!0,xs:12,sx:p.ID.modalButtonBar,children:[(0,x.jsx)(o.zxk,{id:"clear",type:"button",variant:"regular",onClick:function(){Z("")},label:"Clear"}),(0,x.jsx)(o.zxk,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:u||!j,label:"Save"})]})]})})})})},m=t(47974),h=t(99670),Z=function(){var e=(0,c.TL)(),n=(0,i.s0)();return(0,r.useEffect)((function(){e((0,u.Sc)("add_key"))}),[]),(0,x.jsx)(r.Fragment,{children:(0,x.jsxs)(o.rjZ,{item:!0,xs:12,children:[(0,x.jsx)(m.Z,{label:(0,x.jsx)(o.hbI,{label:"Keys",onClick:function(){return n(a.gA.KMS_KEYS)}}),actions:(0,x.jsx)(h.Z,{})}),(0,x.jsx)(v,{onError:function(n){return e((0,u.Ih)(n))},onSuccess:function(){return n("".concat(a.gA.KMS_KEYS))}})]})})}},40214:function(e,n,t){"use strict";var r=t(72791),o=t(29945),i=t(80184);n.Z=function(e){var n=e.helpText,t=e.contents;return(0,i.jsx)(o.KfX,{iconComponent:(0,i.jsx)(o.M9A,{}),title:n,help:(0,i.jsx)(r.Fragment,{children:t.map((function(e){return(0,i.jsx)(o.xuv,{sx:{paddingBottom:"20px"},children:e})}))})})}},3579:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var o=r(t(45649)),i=t(80184),a=(0,o.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");n.Z=a},20165:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var o=r(t(45649)),i=t(80184),a=(0,o.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");n.Z=a},45649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(28610)},31260:function(e,n,t){"use strict";var r=t(78949);n.Z=r.Z},28610:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return a.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return x.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return m},useControlled:function(){return h.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return j.Z},useIsFocusVisible:function(){return b.Z}});var r=t(55902),o=t(14036),i=t(31260),a=t(76189),u=t(83199);var c=function(e,n){return function(){return null}},s=t(19103),l=t(98301),d=t(17602);t(87462);var f=function(e,n){return function(){return null}},p=t(62971).Z,x=t(40162),v=t(67384);var m=function(e,n,t,r,o){return null},h=t(98278),Z=t(89683),j=t(42071),b=t(23031),y={configure:function(e){r.Z.configure(e)}}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=3034.420387d3.chunk.js.map