(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{9060:function(e,a,n){"use strict";function r(e,a,n,r,t,s,i){try{var o=e[s](i),c=o.value}catch(e){n(e);return}o.done?a(c):Promise.resolve(c).then(r,t)}function t(e){return function(){var a=this,n=arguments;return new Promise(function(t,s){var i=e.apply(a,n);function o(e){r(i,t,s,o,c,"next",e)}function c(e){r(i,t,s,o,c,"throw",e)}o(void 0)})}}n.d(a,{l:function(){return h}});var s=n(7794),i=n.n(s),o=n(1345),c=n.n(o),l=n(4682),d=n(7294),u=n(5893);function p(){return(p=t(i().mark(function e(){var a,n,r=arguments;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:{},e.next=3,fetch("/contact-form-handler.php",{method:"POST",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var m=function(e){var a=e.type,n=e.placeholder,r=e.pattern,t=e.name;return(0,u.jsx)("input",{type:a,required:!0,placeholder:n,onInvalid:function(e){e.target.setCustomValidity("Molimo Vas da ispravno popunite ovo polje")},onInput:function(e){return e.target.setCustomValidity("")},pattern:r,name:t})};function h(e){var a,n=e.apartment,r=(0,d.useState)(!1),s=r[0],o=r[1],h=(0,d.useState)(!1),_=h[0],f=h[1],j=(a=t(i().mark(function e(a){var r,t;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),o(!1),a.preventDefault(),r=a.target,t=Object.fromEntries(new FormData(r)),n&&(t.apartment=n),e.next=9,function(){return p.apply(this,arguments)}(t);case 9:if(0!==Number(e.sent.code)){e.next=13;break}return o(!0),e.abrupt("return");case 13:f(!0);case 14:case"end":return e.stop()}},e)})),function(e){return a.apply(this,arguments)});return(0,d.useEffect)(function(){setTimeout(function(){f(!1),o(!1)},5e3)},[s,_]),(0,u.jsxs)("form",{className:c().form,onSubmit:j,children:[(0,u.jsxs)("div",{className:(0,l.d)(c().gridGroup),children:[(0,u.jsx)(m,{name:"name",type:"text",placeholder:"Ime i prezime"}),(0,u.jsx)(m,{name:"email",type:"text",placeholder:"E-mail",pattern:"^[a-zA-Z0-9+._%\\-+]{1,256}@[a-zA-Z0-9][a-zA-Z0-9-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9-]{0,25})+$"}),(0,u.jsx)(m,{name:"phone",type:"text",placeholder:"Telefon"})]}),(0,u.jsx)("div",{className:c().formGroup,children:(0,u.jsx)("textarea",{name:"message",placeholder:"Napišite poruku",rows:10})}),(0,u.jsxs)("div",{className:c().formGroup,children:[s&&(0,u.jsx)("p",{className:(0,l.d)(c().message,c().successMessage),children:"Vaša poruka je uspješno poslana. Hvala!"}),_&&(0,u.jsx)("p",{className:(0,l.d)(c().message,c().errorMessage),children:"Nažalost, došlo je do greške. Molimo Vas da pokušate ponovo."})]}),(0,u.jsx)("button",{type:"submit",className:(0,l.d)("btn-primary",c().btnSalji),children:"Pošalji"})]})}},8402:function(e,a,n){"use strict";n.d(a,{j:function(){return p}});var r=n(9008),t=n.n(r),s=n(4682),i=n(2134),o=n.n(i),c=n(5893),l=function(e){var a=e.title,n=e.desc;return(0,c.jsxs)("div",{className:(0,s.d)(o().pageHeader),children:[(0,c.jsx)("div",{className:o().shadow}),(0,c.jsx)("div",{className:(0,s.d)("container",o().container),children:(0,c.jsxs)("div",{className:o().headingContainer,children:[(0,c.jsx)("h1",{className:o().heading,children:a}),(0,c.jsx)("p",{className:o().desc,children:n})]})})]})},d=n(1435),u=n.n(d),p=function(e){var a=e.title,n=e.pageTitle,r=e.desc,i=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t(),{children:(0,c.jsxs)("title",{children:["UGT Invest - ",a]})}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{title:n,desc:r}),(0,c.jsx)("div",{className:(0,s.d)("container",u().detailsContainer),children:i})]})]})}},5497:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return l}});var r=n(9060),t=n(8402),s=n(4682),i=n(133),o=n.n(i),c=n(5893);function l(){return(0,c.jsx)(t.j,{title:"UGT Invest - kupnja stana Bjelovar",desc:"Obratite nam se sa sigurnošću",pageTitle:"Kontakt",children:(0,c.jsxs)("div",{className:(0,s.d)(o().container,"kontakt"),children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{className:(0,s.d)("subtitle",o().subtitle),children:"UGT Invest"}),(0,c.jsxs)("div",{className:o().dataGrid,children:[(0,c.jsx)("div",{className:o().label,children:"Adresa:"}),(0,c.jsx)("div",{className:o().value,children:"Cvjetna 29, Bjelovar"}),(0,c.jsx)("div",{className:o().label,children:"Mobitel:"}),(0,c.jsx)("div",{className:o().value,children:"+385 99 2543 204"}),(0,c.jsx)("div",{className:o().label,children:"e-mail:"}),(0,c.jsx)("div",{className:o().value,children:"prodaja@ugt-invest.hr"}),(0,c.jsx)("div",{className:o().label,children:"OIB:"}),(0,c.jsx)("div",{className:o().value,children:"49490079293"}),(0,c.jsx)("div",{className:o().label,children:"MB:"}),(0,c.jsx)("div",{className:o().value,children:"04809874"}),(0,c.jsx)("div",{className:o().label,children:"Direktor:"}),(0,c.jsx)("div",{className:o().value,children:"Zoran Matić"})]})]}),(0,c.jsx)("div",{children:(0,c.jsx)(r.l,{})})]})})}},870:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kupnja-stana-bjelovar",function(){return n(5497)}])},1345:function(e){e.exports={form:"form_form__e6qcl",gridGroup:"form_gridGroup__116NN",btnSalji:"form_btnSalji__OGdFd",message:"form_message__Mpk5u",errorMessage:"form_errorMessage__qs2n5",successMessage:"form_successMessage__qzMT9"}},1435:function(e){e.exports={detailsContainer:"LayoutDetail_detailsContainer__S5HL6"}},2134:function(e){e.exports={pageHeader:"PageHeader_pageHeader__CL9At",shadow:"PageHeader_shadow__jE438",container:"PageHeader_container__O_Dxi",headingContainer:"PageHeader_headingContainer__0U01o",heading:"PageHeader_heading__oMc79",desc:"PageHeader_desc__JxA1Q"}},133:function(e){e.exports={container:"Kontakt_container__kHhd2",subtitle:"Kontakt_subtitle__XKgxF",dataGrid:"Kontakt_dataGrid__NB8ZT",label:"Kontakt_label__iypkY"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=870)}),_N_E=e.O()}]);