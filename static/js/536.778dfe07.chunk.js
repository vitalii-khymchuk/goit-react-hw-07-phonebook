"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[536],{1111:function(n,t,e){e.d(t,{L:function(){return c},s:function(){return s}});var a,r,o=e(168),i=e(4934),s=i.Z.div(a||(a=(0,o.Z)(["\n  background-color: grey;\n  display: flex;\n  justify-content: space-around;\n"]))),c=i.Z.button(r||(r=(0,o.Z)(["\n  padding: 5px;\n  font-size: 16px;\n  color: white;\n  border-radius: 10px;\n  background-color: transparent;\n  border: none;\n  &:hover,\n  &:focus {\n    color: orange;\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n"])))},9536:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var a=e(1413),r=e(5861),o=e(9439),i=e(4687),s=e.n(i),c=e(2791),m=e(9434),l=e(261),u=e(319),d=e(7689),p=e(1111),f=e(4501),h=e(3197),x=e(3683),b=e(5677),A=e(2961),g=e(184),Z=function(){var n=(0,c.useState)(null),t=(0,o.Z)(n,2),e=t[0],i=t[1],Z=(0,c.useState)(null),j=(0,o.Z)(Z,2),v=j[0],J=j[1],E=(0,c.useState)(!1),w=(0,o.Z)(E,2),S=w[0],G=w[1],R=(0,m.v9)(u.Uv),z=(0,d.s0)(),C=(0,d.TH)(),q=(0,m.I0)(),T=C.state.contactsInfo;(0,c.useEffect)((function(){i(T.avatar),J(T)}),[T]);var Y=function(){var n=(0,r.Z)(s().mark((function n(t){var r,o,i,c,m;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return G(!0),r=null!==e&&void 0!==e?e:h.Z,o=(0,a.Z)((0,a.Z)((0,a.Z)({},v),t),{},{avatar:r}),n.next=5,q((0,l.mP)(o));case 5:i=n.sent,c=i.payload,m=c.id,z("/contacts/".concat(m),{state:C.state,replace:!0});case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,g.jsxs)(f.xu,{display:"grid",gridTemplateRows:"50px 1fr",children:[(0,g.jsxs)(p.s,{CreateContNav:!0,children:[(0,g.jsx)(p.L,{type:"submit",form:"my-form",children:"Save"}),(0,g.jsx)(p.L,{type:"button",onClick:function(){return z("/contacts/".concat(v.id),{state:C.state,replace:!0})},children:"Cancel"})]}),(0,g.jsx)(f.Dx,{children:"Edit contact"}),S&&(0,g.jsx)("h2",{children:"Saving... "}),R&&(0,g.jsx)(A.Z,{msg:R}),!S&&!R&&v&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x.Z,{onPhotoUpload:function(n){return i(n)},preloadPhoto:e}),(0,g.jsx)(b.Z,{onFormSubmit:Y,initData:v})]})]})}},5677:function(n,t,e){e.d(t,{Z:function(){return x}});var a,r,o,i=e(5705),s=e(2797),c=e(168),m=e(4934),l=m.Z.label(a||(a=(0,c.Z)(["\n  position: relative;\n  font-size: 16px;\n  font-weight: 600;\n  margin-left: 15px;\n  margin-bottom: 5px;\n"]))),u=(0,m.Z)(i.gN)(r||(r=(0,c.Z)(["\n  box-sizing: border-box;\n  display: block;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 30px;\n  margin-bottom: 15px;\n"]))),d=(0,m.Z)(i.Bc)(o||(o=(0,c.Z)(["\n  width: 95%;\n  padding: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  font-size: 12px;\n  box-sizing: border-box;\n  border: 1px solid red;\n"]))),p=e(4501),f=e(184),h=s.Ry().shape({name:s.Z_().min(3).max(30).matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Please enter contact name"),phone:s.Z_().min(3).max(20).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Please enter contact number"),email:s.Z_().min(5).max(30).matches(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email must to match next format: example@mail.com")}),x=function(n){var t=n.onFormSubmit,e=n.initData,a={name:e.name,phone:e.phone,email:e.email};return(0,f.jsx)(p.xu,{children:(0,f.jsx)(i.J9,{initialValues:a,validationSchema:h,onSubmit:function(n,e){var a=e.resetForm;t(n),a()},children:(0,f.jsxs)(i.l0,{autoComplete:"off",id:"my-form",children:[(0,f.jsxs)(l,{children:["Name",(0,f.jsx)(u,{type:"text",name:"name"})]}),(0,f.jsx)(d,{component:"span",name:"name"}),(0,f.jsxs)(l,{children:["Number",(0,f.jsx)(u,{type:"tel",name:"phone"})]}),(0,f.jsx)(d,{component:"span",name:"phone"}),(0,f.jsxs)(l,{children:["Email",(0,f.jsx)(u,{type:"email",name:"email"})]}),(0,f.jsx)(d,{component:"span",name:"email"})]})})})}},3683:function(n,t,e){e.d(t,{Z:function(){return G}});var a,r,o,i,s=e(1413),c=e(5861),m=e(9439),l=e(4687),u=e.n(l),d=e(2791),p=e(3264),f=e.n(p),h=e(168),x=e(4934),b=x.Z.img(a||(a=(0,h.Z)(["\n  position: relative;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n"]))),A=x.Z.div(r||(r=(0,h.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n"]))),g=x.Z.button(o||(o=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: transparent;\n"]))),Z=x.Z.button(i||(i=(0,h.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  background-color: transparent;\n  border: none;\n"]))),j=e(9105),v=e(5515),J=e(4501),E=e(8820),w=e(184),S=function(n){return(0,j.w)(n)},G=function(n){var t=n.onPhotoUpload,e=n.preloadPhoto,a=void 0===e?null:e,r=d.useState([]),o=(0,m.Z)(r,2),i=o[0],l=o[1];(0,d.useEffect)((function(){a&&l([{data_url:a}])}),[a]);var p=function(){var n=(0,c.Z)(u().mark((function n(e,a){var r,o,i,s;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e[0].data_url,n.next=3,c=r,(0,j.J)(c);case 3:return o=n.sent,n.next=6,a=o,(0,v.Z)(a,80,150,150,"jpeg");case 6:return i=n.sent,n.next=9,S(i);case 9:s=n.sent,t(s),l(e);case 12:case"end":return n.stop()}var a,c}),n)})));return function(t,e){return n.apply(this,arguments)}}();return(0,w.jsx)(J.xu,{className:"App",display:"flex",justifyContent:"center",children:(0,w.jsx)(f(),{multiple:!1,value:i,onChange:p,maxNumber:1,dataURLKey:"data_url",children:function(n){var t=n.imageList,e=n.onImageUpload,a=(n.onImageRemoveAll,n.onImageUpdate),r=(n.onImageRemove,n.isDragging),o=n.dragProps;return(0,w.jsxs)("div",{className:"upload__image-wrapper",children:[!i[0]&&(0,w.jsxs)(g,(0,s.Z)((0,s.Z)({style:r?{color:"red"}:void 0,onClick:e},o),{},{children:[(0,w.jsx)(E.dEn,{size:48}),(0,w.jsxs)("span",{children:["Click or Drop here ",(0,w.jsx)("br",{})," to add image"]})]})),"\xa0",t.map((function(n,t){return(0,w.jsxs)(A,{className:"image-item",children:[(0,w.jsx)(b,{src:n.data_url,alt:"",width:"100"}),(0,w.jsx)(Z,{onClick:function(){return a(t)},children:(0,w.jsx)(E.Em2,{size:64,color:"rgba(200, 200, 200, 0.5)"})})]},t)}))]})}})})}},3197:function(n,t){t.Z="data:image/png;base64,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"}}]);
//# sourceMappingURL=536.778dfe07.chunk.js.map