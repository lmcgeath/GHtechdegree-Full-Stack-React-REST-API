(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(41),c=a.n(s),o=(a(50),a(2)),i=a.n(o),u=a(11),l=a(4),m=a(5),d=a(7),p=a(6),h=a(8),f={apiBaseUrl:"http://localhost:5000/api"},E=a(18),b=a.n(E),v=n.a.createContext(),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={authenticatedUser:b.a.getJSON("authenticatedUser")||null,userPassword:b.a.getJSON("userPassword")||null},a.api=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=f.apiBaseUrl+e,c={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};if(null!==a&&(c.body=JSON.stringify(a)),r){var o=btoa("".concat(n.emailAddress,":").concat(n.password));c.headers.Authorization="Basic ".concat(o)}return fetch(s,c)},a.getUser=function(){var e=Object(u.a)(i.a.mark((function e(t,r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.api("/users","GET",null,!0,{emailAddress:t,password:r});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json().then((function(e){return e})));case 7:if(401!==n.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.createUser=function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.api("/users","POST",t);case 2:if(201!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==r.status){e.next=11;break}console.log(r.json()).then((function(e){return e.errors})),e.next=12;break;case 11:throw new Error;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.signIn=function(){var e=Object(u.a)(i.a.mark((function e(t,r){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getUser(t,r);case 2:return null!==(n=e.sent)&&(s=btoa(r),a.setState({authenticatedUser:n,userPassword:s}),b.a.set("authenticatedUser",JSON.stringify(n),{expires:1}),b.a.set("userPassword",s,{expires:1})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.signOut=function(){a.setState({authenticatedUser:null,userPassword:null}),b.a.remove("authenticatedUser"),b.a.remove("userPassword")},a.signUp=function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.api("/users","POST",t);case 2:if(201!==(r=e.sent).status){e.next=8;break}return window.location.href="/",e.abrupt("return",[]);case 8:if(400!==r.status){e.next=12;break}return e.abrupt("return",r.json().then((function(e){return e.errors})));case 12:if(200!==r.status){e.next=16;break}return e.abrupt("return",r.json().then((function(e){return[e.message]})));case 16:throw new Error;case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.createCourse=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.state.authenticatedUser.emailAddress,n=atob(a.state.userPassword),e.next=4,a.api("/courses","POST",t,!0,{emailAddress:r,password:n});case 4:if(201!==(s=e.sent).status){e.next=9;break}return e.abrupt("return",[]);case 9:if(400!==s.status){e.next=13;break}return e.abrupt("return",s.json().then((function(e){return e.errors})));case 13:throw new Error;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getCourse=function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.api("/courses/".concat(t),"GET",null);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.json().then((function(e){return e})));case 7:if(404!==r.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getCourses=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.api("/courses","GET",null);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.json().then((function(e){return e})));case 7:throw new Error;case 8:case"end":return e.stop()}}),e)}))),a.updateCourse=function(){var e=Object(u.a)(i.a.mark((function e(t,r){var n,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.authenticatedUser.emailAddress,s=atob(a.state.userPassword),e.next=4,a.api("/courses/".concat(t),"PUT",r,!0,{emailAddress:n,password:s});case 4:if(204!==(c=e.sent).status){e.next=9;break}return e.abrupt("return",[]);case 9:if(400!==c.status){e.next=13;break}return e.abrupt("return",c.json().then((function(e){return e.errors})));case 13:if(404!==c.status){e.next=17;break}return e.abrupt("return",c.json().then((function(e){return e.message})));case 17:throw new Error;case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.deleteCourse=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.state.authenticatedUser.emailAddress,n=atob(a.state.userPassword),e.next=4,a.api("/courses/".concat(t),"DELETE",null,!0,{emailAddress:r,password:n});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={authenticatedUser:this.state.authenticatedUser,userPassword:this.state.userPassword,actions:{signIn:this.signIn,signOut:this.signOut,signUp:this.signUp,createCourse:this.createCourse,updateCourse:this.updateCourse,getCourse:this.getCourse,deleteCourse:this.deleteCourse,getCourses:this.getCourses,createUser:this.createUser}};return n.a.createElement(v.Provider,{value:e},this.props.children)}}]),t}(r.Component),N=v.Consumer;function w(e){return function(t){return n.a.createElement(v.Consumer,null,(function(a){return n.a.createElement(e,Object.assign({},t,{context:a}))}))}}var x=a(1),y=a(17),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={courses:[]},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.context.actions.getCourses().then((function(t){e.setState({courses:t.courses})})).catch((function(t){console.log(t),e.props.history.push("/error")}))}},{key:"render",value:function(){var e=this.state.courses.map((function(e){return n.a.createElement("div",{key:e.id,className:"grid-33"},n.a.createElement(x.b,{to:"/courses/".concat(e.id),className:"course--module course--link"},n.a.createElement("h4",{className:"course--label"},"Course"),n.a.createElement("h3",{className:"course--title"},e.title)))}));return n.a.createElement("div",{className:"bounds"},e,n.a.createElement("div",{className:"grid-33"},n.a.createElement(x.b,{to:"/courses/create",className:"course--module course--add--module"},n.a.createElement("h3",{className:"course--add--title"},n.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add"},n.a.createElement("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})),"New Course"))))}}]),t}(r.Component),O=function(e){var t=e.context.authenticatedUser;return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"bounds"},n.a.createElement("h1",{className:"header--logo"},"Courses"),n.a.createElement("nav",null,t?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,"Welcome, ",t.firstName," ",t.lastName,"!"),n.a.createElement(x.b,{className:"signout",to:"/signout"},"Sign Out")):n.a.createElement(n.a.Fragment,null,n.a.createElement(x.b,{className:"signup",to:"/signup"},"Sign Up"),n.a.createElement(x.b,{className:"signin",to:"/signin"},"Sign In")))))},j=a(57),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={course:[],courseOwner:[]},a.deleteCourse=function(e){a.props.context.actions.deleteCourse(e).then((function(e){204===e.status?a.props.history.push("/courses"):404===e.status||403===e.status&&a.props.history.push("/forbidden")})).catch((function(e){console.log(e),a.props.history.push("/error")}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.props.context.actions.getCourse(t).then((function(t){null!==t&&e.setState({course:t.course,courseOwner:t.course.User})})).catch((function(t){console.log(t),e.props.history.push("/error")}))}},{key:"render",value:function(){var e=this.state,t=e.course,a=e.courseOwner;return n.a.createElement("div",null,n.a.createElement("div",{className:"actions--bar"},n.a.createElement("div",{className:"bounds"},n.a.createElement("div",{className:"grid-100"},n.a.createElement(U,{authenticatedUser:this.props.context.authenticatedUser,courseOwner:a,courseId:this.props.match.params.id,deleteCourse:this.deleteCourse})))),n.a.createElement("div",{className:"bounds course--detail"},n.a.createElement("div",{className:"grid-66"},n.a.createElement("div",{className:"course--header"},n.a.createElement("h4",{className:"course--label"},"Course"),n.a.createElement("h3",{className:"course--title"},t.title),n.a.createElement("p",null,"By ",a.firstName," ",a.lastName)),n.a.createElement("div",{className:"course--description"},n.a.createElement(j,{source:t.description}))),n.a.createElement("div",{className:"grid-25 grid-right"},n.a.createElement("div",{className:"course--stats"},n.a.createElement("ul",{className:"course--stats--list"},n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Estimated Time"),n.a.createElement("h3",null,t.estimatedTime)),n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Materials Needed"),n.a.createElement(j,{source:t.materialsNeeded})))))))}}]),t}(r.Component),U=function(e){var t=e.authenticatedUser,a=e.courseOwner,r=e.courseId,s=e.deleteCourse;return t&&t.id===a.id?n.a.createElement("span",null,n.a.createElement(x.b,{to:"/courses/".concat(r,"/update"),className:"button"},"Update Course"),n.a.createElement("button",{onClick:function(){s(r)},className:"button"},"Delete Course"),n.a.createElement(x.b,{to:"/courses",className:"button button-secondary"},"Return to List")):n.a.createElement("span",null,n.a.createElement(x.b,{to:"/courses",className:"button button-secondary"},"Return to List"))},T=a(16),A=function(e){var t=e.cancel,a=e.errors,r=e.submit,s=e.submitButtonText,c=e.elements;return n.a.createElement("div",null,n.a.createElement(S,{errors:a}),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r()}},c(),n.a.createElement("div",{className:"pad-bottom"},n.a.createElement("button",{className:"button",type:"submit"},s),n.a.createElement("button",{className:"button button-secondary",onClick:function(e){e.preventDefault(),t()}},"Cancel"))))};function S(e){var t=e.errors,a=null;return t.length&&(a=n.a.createElement("div",null,n.a.createElement("h2",{className:"validation--errors--label"},"Validation errors"),n.a.createElement("div",{className:"validation-errors"},n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},e)})))))),a}var P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={emailAddress:"",password:"",errors:[]},a.change=function(e){var t=e.target.name,r=e.target.value;a.setState((function(){return Object(T.a)({},t,r)}))},a.submit=function(){var e=a.props.context,t=a.state,r=t.emailAddress,n=t.password;e.actions.signIn(r,n).then((function(e){null===e?a.setState((function(){return{errors:["Sign-in was unsuccessful"]}})):a.props.history.push("/")})).catch((function(e){console.error(e)}))},a.cancel=function(){a.props.history.push("/")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.emailAddress,r=t.password,s=t.errors;return n.a.createElement("div",{className:"bounds"},n.a.createElement("div",{className:"grid-33 centered signin"},n.a.createElement("h1",null,"Sign In"),n.a.createElement(A,{cancel:this.cancel,errors:s,submit:this.submit,submitButtonText:"Sign In",elements:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"text",value:a,onChange:e.change,placeholder:"Email"}),n.a.createElement("input",{id:"password",name:"password",type:"password",value:r,onChange:e.change,placeholder:"Password"}))}}),n.a.createElement("p",null,"Don't have a user account? ",n.a.createElement(x.b,{to:"/signup"},"Click here")," to sign up!")))}}]),t}(r.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:"",errors:[]},a.change=function(e){var t=e.target.name,r=e.target.value;a.setState((function(){return Object(T.a)({},t,r)}))},a.submit=function(){var e=a.state,t=e.firstName,r=e.lastName,n=e.emailAddress,s=e.password,c=e.confirmPassword,o={firstName:t,lastName:r,emailAddress:n,password:s};if(s===c)a.props.context.actions.signUp(o).then((function(e){e.length?a.setState({errors:e}):(a.props.context.actions.signIn(n,s),console.log("".concat(n," is successfully signed up and authenticated!")))})).catch((function(e){console.log(e),a.props.history.push("/error")}));else{var i=a.state.errors.push("Passwords must match");a.setState({passMatchError:i})}},a.cancel=function(){a.props.history.push("/")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,r=t.lastName,s=t.emailAddress,c=t.password,o=t.errors,i=t.confirmPassword;return n.a.createElement("div",{className:"bounds"},n.a.createElement("div",{className:"grid-33 centered signin"},n.a.createElement("h1",null,"Sign Up"),n.a.createElement(A,{cancel:this.cancel,errors:o,submit:this.submit,submitButtonText:"Sign Up",elements:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{id:"firstName",name:"firstName",type:"text",value:a,onChange:e.change,placeholder:"First Name"}),n.a.createElement("input",{id:"lastName",name:"lastName",type:"text",value:r,onChange:e.change,placeholder:"Last Name"}),n.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"text",value:s,onChange:e.change,placeholder:"Email Address"}),n.a.createElement("input",{id:"password",name:"password",type:"password",value:c,onChange:e.change,placeholder:"Password"}),n.a.createElement("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:i,onChange:e.change,placeholder:"Confirm Password"}))}}),n.a.createElement("p",null,"Already have a user account? ",n.a.createElement(x.b,{to:"/signin"},"Click here")," to sign in!")))}}]),t}(r.Component),B=function(e){return e.context.actions.signOut(),n.a.createElement(y.a,{to:"/courses"})},D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",description:"",estimatedTime:"",materialsNeeded:"",userId:a.props.context.authenticatedUser.id,errors:[]},a.change=function(e){var t=e.target.name,r=e.target.value;a.setState((function(){return Object(T.a)({},t,r)}))},a.submit=function(){var e=a.props.context,t=a.state,r=t.title,n=t.description,s=t.estimatedTime,c=t.materialsNeeded,o=t.userId,i=e.authenticatedUser.emailAddress,u=e.userPassword,l={title:r,description:n,estimatedTime:s,materialsNeeded:c,userId:o};e.actions.createCourse(l,{emailAddress:i,password:u}).then((function(e){e.length?a.setState({errors:e}):a.props.history.push("/courses")})).catch((function(e){console.log(e),a.props.history.push("/error")}))},a.cancel=function(){a.props.history.push("/")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.context,a=this.state,r=a.title,s=a.description,c=a.estimatedTime,o=a.materialsNeeded,i=a.errors,u="".concat(t.authenticatedUser.firstName," ").concat(t.authenticatedUser.lastName);return n.a.createElement("div",{className:"bounds course--detail"},n.a.createElement("h1",null,"Create Course"),n.a.createElement(A,{cancel:this.cancel,errors:i,submit:this.submit,submitButtonText:"Create Course",elements:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"grid-66"},n.a.createElement("div",{className:"course--header"},n.a.createElement("h4",{className:"course--label"},"Course"),n.a.createElement("input",{id:"title",name:"title",className:"input-title course--title--input",type:"text",value:r,onChange:e.change,placeholder:"Course Title..."}),n.a.createElement("p",null,"by ",u)),n.a.createElement("div",{className:"course--description"},n.a.createElement("textarea",{id:"description",name:"description",type:"text",value:s,onChange:e.change,placeholder:"Course Description..."}))),n.a.createElement("div",{className:"grid-25 grid-right"},n.a.createElement("div",{className:"course--stats"},n.a.createElement("ul",{className:"course--stats--list"},n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Estimated Time"),n.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",value:c,onChange:e.change,placeholder:"Hours"})),n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Materials Needed"),n.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",type:"text",value:o,onChange:e.change,placeholder:"Materials Needed..."}))))))}}))}}]),t}(r.Component),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",description:"",estimatedTime:"",materialsNeeded:"",ownerName:"",errors:[]},a.change=function(e){var t=e.target.name,r=e.target.value;a.setState((function(){return Object(T.a)({},t,r)}))},a.submit=function(){var e=a.props.context,t=a.state,r=t.title,n=t.description,s=t.estimatedTime,c=t.materialsNeeded,o=a.state.course.course.id,i=e.authenticatedUser.emailAddress,u=e.authenticatedUserPassword,l={title:r,description:n,estimatedTime:s,materialsNeeded:c};e.actions.updateCourse(o,l,{emailAddress:i,password:u}).then((function(e){e.length?a.setState({errors:e}):a.props.history.push("/courses/".concat(o))})).catch((function(e){console.log(e),a.props.history.push("/error")}))},a.cancel=function(){var e=a.state.course.course.id;a.props.history.push("/courses/".concat(e))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.context,e.next=3,t.actions.getCourse(this.props.match.params.id).then((function(e){var r=e.course,n=r.title,s=r.description,c=r.estimatedTime,o=r.materialsNeeded,i="".concat(t.authenticatedUser.firstName," ").concat(t.authenticatedUser.lastName);a.setState({title:n,description:s,estimatedTime:c,materialsNeeded:o,ownerName:i,course:e})}));case 3:this.state.course.course.userId!==t.authenticatedUser.id&&this.props.history.push("/forbidden");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.title,r=t.description,s=t.estimatedTime,c=t.materialsNeeded,o=t.ownerName,i=t.errors;return n.a.createElement("div",{className:"bounds course--detail"},n.a.createElement("h1",null,"Update Course"),n.a.createElement("div",null,n.a.createElement(A,{cancel:this.cancel,errors:i,submit:this.submit,submitButtonText:"Update Course",elements:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"grid-66"},n.a.createElement("div",{className:"course--header"},n.a.createElement("input",{id:"title",name:"title",className:"input-title course--title--input",type:"text",value:a,onChange:e.change,placeholder:"Course Title..."}),n.a.createElement("p",null,"by ",o)),n.a.createElement("div",{className:"course--description"},n.a.createElement("textarea",{id:"description",name:"description",type:"text",value:r,onChange:e.change,placeholder:"Course Description..."}))),n.a.createElement("div",{className:"grid-25 grid-right"},n.a.createElement("div",{className:"course--stats"},n.a.createElement("ul",{className:"course--stats--list"},n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Estimated Time"),n.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",value:s,onChange:e.change,placeholder:"Hours"})),n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Materials Needed"),n.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",type:"text",value:c,onChange:e.change,placeholder:"Materials Needed..."}))))))}})))}}]),t}(r.Component),M=a(44),J=function(e){var t=e.component,a=Object(M.a)(e,["component"]);return n.a.createElement(N,null,(function(e){return n.a.createElement(y.b,Object.assign({},a,{render:function(a){return e.authenticatedUser?n.a.createElement(t,a):n.a.createElement(y.a,{to:{pathname:"/signin",state:{from:a.location}}})}}))}))},L=function(){return n.a.createElement("div",{className:"bounds"},n.a.createElement("h1",null,"Unexpected Error"),n.a.createElement("p",null,"An internal server error has occurred, please try again later"))},G=function(){return n.a.createElement("div",{className:"bounds"},n.a.createElement("h1",null,"Forbidden"),n.a.createElement("p",null,"Nice try! You are not authorized to access this page."),n.a.createElement(x.b,{to:"/courses",className:"button button-secondary"},"Return to List"))},R=function(){return n.a.createElement("div",{className:"bounds"},n.a.createElement("h1",null,"Not Found"),n.a.createElement("p",null,"Oops! We couldn't find that page."),n.a.createElement(x.b,{to:"/courses",className:"button button-secondary"},"Return to List"))},W=w(C),z=w(O),H=w(k),V=w(P),Y=w(I),$=w(B),q=w(D),K=w(F),Q=function(){return n.a.createElement(x.a,null,n.a.createElement("div",null,n.a.createElement(z,null),n.a.createElement(y.d,null,n.a.createElement(y.b,{exact:!0,path:"/",component:W}),n.a.createElement(y.b,{exact:!0,path:"/courses",component:W}),n.a.createElement(J,{exact:!0,path:"/courses/create",component:q}),n.a.createElement(y.b,{exact:!0,path:"/signin",component:V}),n.a.createElement(y.b,{exact:!0,path:"/signup",component:Y}),n.a.createElement(y.b,{exact:!0,path:"/signout",component:$}),n.a.createElement(J,{exact:!0,path:"/courses/:id/update",component:K}),n.a.createElement(y.b,{exact:!0,path:"/courses/:id",component:H}),n.a.createElement(y.b,{path:"/error",component:L}),n.a.createElement(y.b,{path:"/forbidden",component:G}),n.a.createElement(y.b,{path:"/notfound",component:R}),n.a.createElement(y.b,{component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(g,null,n.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){e.exports=a(137)},50:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.b1d1a086.chunk.js.map