"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[66],{66:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var n=a(43),t=a(216),l=a(475),o=a(213),r=a(401),i=a(3),c=a(61),d=a(682),u=a(579);const g=()=>{const e=(0,t.Zp)(),[s,a]=(0,n.useState)({email:"",password:""}),g=(0,i.wA)(),m=e=>{const{name:n,value:t}=e.target;a({...s,[n]:t})};return(0,u.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:[(0,u.jsx)("div",{className:"absolute inset-0 bg-cover bg-center z-0",style:{backgroundImage:"url('/bg-nitr.jpg')"},children:(0,u.jsx)("div",{className:"absolute inset-0 bg-black opacity-60"})}),(0,u.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative z-10",children:[(0,u.jsx)("h2",{className:"text-2xl font-bold mb-6 text-gray-900 text-center",children:"Login"}),(0,u.jsxs)("form",{onSubmit:async a=>{a.preventDefault();try{g((0,c.Cs)());const a=await o.A.post("/api/v1/user/login",s);g((0,c.RZ)()),a.data.success?(localStorage.setItem("token",a.data.token),r.oR.success("User Login Successful"),g((0,d.g)(a.data.user)),e("/")):r.oR.error(a.data.message)}catch(n){g((0,c.RZ)()),r.oR.error("Something went wrong"),console.log(n)}},children:[(0,u.jsxs)("div",{className:"mb-4",children:[(0,u.jsx)("label",{htmlFor:"email",className:"block text-gray-700 font-semibold mb-2",children:"Email"}),(0,u.jsx)("input",{type:"email",id:"email",name:"email",value:s.email,onChange:m,className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0})]}),(0,u.jsxs)("div",{className:"mb-4",children:[(0,u.jsx)("label",{htmlFor:"password",className:"block text-gray-700 font-semibold mb-2",children:"Password"}),(0,u.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:m,className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0})]}),(0,u.jsx)("div",{className:"mb-4",children:(0,u.jsx)("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:"Login"})}),(0,u.jsx)("div",{className:"text-center",children:(0,u.jsxs)("p",{className:"text-gray-700",children:["Not registered?"," ",(0,u.jsx)(l.N_,{to:"/register",className:"text-indigo-600 hover:underline",children:"Create an account"})]})})]})]})]})}}}]);
//# sourceMappingURL=66.489f69cb.chunk.js.map