import{u as i,j as e}from"./index-DFlIz16s.js";const x=i.form`
  width: 360px;
  height: 88px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`,h=i.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(16, 24, 40, 0.6);
`,c=i.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(16, 24, 40, 0.6);

  border-radius: 10px;
  border: none;
  padding: 18px 18px 18px 18px;
  width: 360px;
  height: 56px;
  background: ${t=>t.theme.colors.veryLightGrey};
`,d=i.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  width: 48px;
  color: ${t=>t.theme.colors.grey};
  margin-bottom: 14px;
`,p=i.div`
  /* border: 1px solid black; */
  width: 360px;
  height: 270px;
  margin-bottom: 32px;
`,n=i.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: ${t=>t.theme.colors.black};
`,l=i.hr`
  border: none;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  width: 100%;
  margin: 20px 0;
`,a=i.div`
  /* border: 1px solid black; */
  width: 360px;
  height: 167px;
  margin-bottom: 64px;
`,s=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 8px;
`,r=i.li`
  width: 114px;
  height: 95px;
`,o=i.button`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  background-color: #fff;
  width: 100%;
  height: 100%;
`,g=i.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  border: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background: ${t=>t.theme.colors.red};
  transition: ${t=>t.theme.transition};

  &:hover {
    background-color: #d84343;
  }
`,j=()=>e.jsxs("div",{children:[e.jsxs(x,{children:[e.jsx(h,{children:"Location"}),e.jsx(c,{type:"text",id:"location",name:"location",placeholder:"City"})]}),e.jsx(d,{children:"Filters"}),e.jsxs(p,{children:[e.jsx(n,{children:"Vehicle equipment"}),e.jsx(l,{}),e.jsxs(s,{children:[e.jsx(r,{children:e.jsx(o,{children:"1"})}),e.jsx(r,{children:e.jsx(o,{children:"2"})}),e.jsx(r,{children:e.jsx(o,{children:"3"})}),e.jsx(r,{children:e.jsx(o,{children:"4"})}),e.jsx(r,{children:e.jsx(o,{children:"5"})})]})]}),e.jsxs(a,{children:[e.jsx(n,{children:"Vehicle type"}),e.jsx(l,{}),e.jsxs(s,{children:[e.jsx(r,{children:e.jsx(o,{children:"1"})}),e.jsx(r,{children:e.jsx(o,{children:"2"})}),e.jsx(r,{children:e.jsx(o,{children:"3"})})]})]}),e.jsx(g,{children:"Search"})]}),b=()=>e.jsx(e.Fragment,{children:e.jsx(j,{})}),f=()=>e.jsx("div",{children:e.jsx(b,{})});export{f as default};
