(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{21:function(e,t,r){},26:function(e,t,r){},45:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var s=r(1),c=r(15),a=r.n(c),n=(r(21),r(6)),o=r(3),l=r(4),i=r(0);function j(e){var t=e.filter,r=e.setfilter;return Object(i.jsx)("span",{children:Object(i.jsxs)("div",{className:"form-group mx-5",children:["Search: "," ",Object(i.jsx)("input",{value:t||"",style:{width:"300px"},type:"text",onChange:function(e){r(e.target.value),console.log(e.target.value)},"aria-describedby":"helpId",placeholder:"Name"})]})})}var d=[{Header:"Picture",accessor:"picture.thumbnail",maxWidth:70,minWidth:70,Cell:function(e){var t=e.cell.value;return Object(i.jsx)("img",{src:t,width:60,alt:""})}},{Header:"First Name",accessor:"name.first"},{Header:"Last Name",accessor:"name.last"},{Header:"Phone Number",accessor:"phone"},{Header:"Email",accessor:"email"},{Header:"State",accessor:"location.state"}];r(26);function u(e){var t=Object(s.useMemo)((function(){return d}),[]),r=Object(s.useMemo)((function(){return e}),[]);console.log("data:"),console.log(r.employees);var c=Object(l.useTable)({columns:t,data:r.employees},l.useGlobalFilter,l.useSortBy),a=c.getTableProps,n=c.getTableBodyProps,u=c.headerGroups,b=c.rows,O=c.prepareRow,p=c.state,m=c.setGlobalFilter,h=p.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{filter:h,setfilter:m}),Object(i.jsxs)("table",Object(o.a)(Object(o.a)({},a()),{},{children:[Object(i.jsx)("thead",{children:u.map((function(e){return Object(i.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?"\u25bc":"\u25b2":""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(o.a)(Object(o.a)({},n()),{},{children:b.map((function(e){return O(e),Object(i.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(i.jsx)("td",Object(o.a)(Object(o.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})}function b(e){var t=e.employees,r=e.isBusy;return Object(i.jsx)("div",{children:r?Object(i.jsx)("h2",{children:" loading... "}):Object(i.jsx)(u,{employees:t})})}var O=function(e){var t=e.employees,r=e.setFilterUser,s=e.order,c=e.setOrderState,a=e.filterUser,n=e.isBusy;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"jumbotron bg-info",children:[Object(i.jsx)("h1",{className:"display-3",children:"Employee List"}),Object(i.jsx)("p",{className:"lead"}),Object(i.jsx)("hr",{className:"my-2"})]}),Object(i.jsx)("div",{clasName:"px-2",children:Object(i.jsx)(b,{order:s,setOrderState:c,setFilterUser:r,employees:t,filterUser:a,isBusy:n})})]})},p=r(16),m=r.n(p),h=function(){return m.a.get("https://randomuser.me/api/?results=20&inc=name,location,email,phone,id,picture&nat=us")};r(45);var f=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),r=t[0],c=t[1],a=Object(s.useState)(!0),o=Object(n.a)(a,2),l=o[0],j=o[1];return Object(s.useEffect)((function(){h().then((function(e){console.log(e.data),c(e.data.results),j(!1)})).catch((function(e){return console.log(e)}))}),[]),console.log("employees: "),console.log(r),Object(i.jsx)("div",{children:Object(i.jsx)(O,{employees:r,isBusy:l})})};r(46);a.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.33bdb096.chunk.js.map