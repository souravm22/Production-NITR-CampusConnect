"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[390],{390:(e,s,l)=>{l.r(s),l.d(s,{default:()=>m});var r=l(43),i=l(216),n=l(475),a=l(213),t=l(401),o=l(3),d=l(61),c=l(579);const m=()=>{const e=(0,o.wA)(),s=(0,i.Zp)(),[l,m]=(0,r.useState)({name:"",email:"",password:"",role:"student",identifier:""}),[u,x]=(0,r.useState)(""),g=e=>{const{name:s,value:r}=e.target;m({...l,[s]:r})};return(0,c.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-gray-900 relative",children:[(0,c.jsx)("div",{className:"absolute inset-0 bg-cover bg-center z-0",style:{backgroundImage:"url('/bg-nitr.jpg')"},children:(0,c.jsx)("div",{className:"absolute inset-0 bg-black opacity-60"})}),(0,c.jsxs)("div",{className:"relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-4 md:p-8 lg:p-12 space-y-6 md:space-y-0 md:space-x-6",children:[(0,c.jsxs)("div",{className:"text-white text-center md:text-left max-w-md space-y-4",children:[(0,c.jsx)("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold",children:"Welcome to NIT Rourkela's Club Portal"}),(0,c.jsx)("p",{className:"text-lg md:text-xl",children:"Explore, learn, and grow with our diverse club opportunities. Discover the resources you need to prepare for inductions, apply for clubs that match your interests, and more."})]}),(0,c.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[(0,c.jsx)("h2",{className:"text-2xl font-bold mb-6 text-gray-900 text-center",children:"Register"}),(0,c.jsxs)("form",{onSubmit:async r=>{if(r.preventDefault(),"admin"!==l.role||"nitr2026"===u)try{e((0,d.Cs)());const r=await a.A.post("/api/v1/user/register",l);setTimeout((()=>{e((0,d.RZ)()),r.data.success?(t.oR.success("User registered successfully"),s("/login")):t.oR.error(r.data.message)}),1500)}catch(i){setTimeout((()=>{e((0,d.RZ)()),alert("Some error occurred"),console.log(i)}),1500)}else t.oR.error("Admin key provided is wrong ")},children:[(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{htmlFor:"name",className:"block text-gray-700 font-semibold mb-2",children:"Name"}),(0,c.jsx)("input",{type:"text",id:"name",name:"name",value:l.name,onChange:g,className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{htmlFor:"email",className:"block text-gray-700 font-semibold mb-2",children:"Email"}),(0,c.jsx)("input",{type:"email",id:"email",name:"email",value:l.email,onChange:g,className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{htmlFor:"password",className:"block text-gray-700 font-semibold mb-2",children:"Password"}),(0,c.jsx)("input",{type:"password",id:"password",name:"password",value:l.password,onChange:g,className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{htmlFor:"role",className:"block text-gray-700 font-semibold mb-2",children:"Role"}),(0,c.jsxs)("select",{id:"role",name:"role",value:l.role,onChange:e=>{m({...l,role:e.target.value,identifier:""})},className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0,children:[(0,c.jsx)("option",{value:"student",children:"Student"}),(0,c.jsx)("option",{value:"admin",children:"Admin"})]})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{htmlFor:"identifier",className:"block text-gray-700 font-semibold mb-2",children:"student"===l.role?"Student Roll Number":"Admin ID"}),(0,c.jsx)("input",{type:"text",id:"identifier",name:"identifier",value:l.identifier,onChange:g,className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0})]}),"admin"===l.role&&(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{htmlFor:"adminkey",className:"block text-gray-700 font-semibold mb-2",children:"Admin Passkey (Provided by college)"}),(0,c.jsx)("input",{type:"password",id:"adminkey",name:"adminkey",value:u,onChange:e=>{x(e.target.value)},className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0})]}),(0,c.jsx)("div",{className:"mb-4",children:(0,c.jsx)("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105",children:"Register"})}),(0,c.jsx)("div",{className:"text-center",children:(0,c.jsxs)("p",{className:"text-gray-700",children:["Already a user?"," ",(0,c.jsx)(n.N_,{to:"/login",className:"text-indigo-600 hover:underline",children:"Sign in"})]})})]})]})]})]})}}}]);
//# sourceMappingURL=390.881c6ff9.chunk.js.map