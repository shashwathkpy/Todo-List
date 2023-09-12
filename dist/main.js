(()=>{"use strict";function e(e,t){this.title=e,this.taskList=t}const t=function(t){return new e(t,[])};let n=[];const o=function(e){if("get"==e)return n;n=e};function c(e,t){console.log(e);document.getElementById(e).style.textDecoration=t?"line-through":"none"}function d(e){const t=document.getElementById(e),n=e.split(".")[0],c=o("get");for(let e=0;e<c.length;e++)for(let t=0;t<c[e].taskList.length;t++)c[e].taskList[t].title==n&&c[e].taskList.splice(t,1);o(c),content.removeChild(t)}function l(e,t){const n=document.getElementById(e),o="100px";t.classList.add("taskDescription"),t.style.height!=o?(t.style.height=o,t.style.overflow="overlay",n.appendChild(t)):(t.style.height="50px",t.style.overflow="hidden",n.removeChild(t))}const r=function(){let e;const t=document.querySelector(".selected"),n=o("get");for(let o=0;o<n.length;o++)n[o].title==t.id&&(e=n[o].taskList);for(let t=0;t<e.length;t++){const n=document.createElement("div");n.classList.add("taskDiv");const o=document.createElement("div");o.textContent=e[t].title,n.id=o.textContent+Math.random().toString().substring(1);const r=document.createElement("div");r.textContent=e[t].description;const i=document.createElement("div");i.textContent=e[t].dueDate;const a=document.createElement("div");switch(a.textContent=e[t].priority,a.textContent){case"LOW":a.style.color="green";break;case"MEDIUM":a.style.color="yellow";break;case"HIGH":a.style.color="red"}const s=document.createElement("input");s.type="checkbox";const u=document.createElement("img");u.style.height="40px",u.src="./images/trash.png",u.classList.add("deleteTaskBtn");const p=document.createElement("img");p.style.height="60px",p.src="./images/down.png",p.classList.add("expandBtn"),e[t].checked&&(s.checked=!0,n.style.textDecoration="line-through"),s.onchange=function(){e[t].checked=1!=e[t].checked,c(n.id,e[t].checked)},u.onclick=function(){d(n.id)},p.onclick=function(){p.style.rotate="90deg"==p.style.rotate?"0deg":"90deg",l(n.id,r)};const m=document.createElement("div");m.classList.add("taskDivTop"),m.appendChild(s),m.appendChild(o),m.appendChild(i),m.appendChild(a),m.appendChild(u),m.appendChild(p),n.appendChild(m),content.appendChild(n)}};function i(e,t,n,o,c){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.checked=c}function a(){const e=document.querySelector("#content"),t=document.querySelector("#header"),n=document.querySelector("#sidebar"),o=document.querySelector("#footer");"rgba(0, 0, 0, 0.5)"==e.style.backgroundColor?(e.style.backgroundColor="rgb(58, 58, 58)",t.style.backgroundColor="rgb(55, 79, 158)",n.style.backgroundColor="rgb(100, 100, 100)",o.style.backgroundColor="rgb(55, 79, 158)"):(e.style.backgroundColor="rgba(0, 0, 0, 0.5)",t.style.backgroundColor="rgba(0, 0, 100, 0.5)",n.style.backgroundColor="rgba(0, 0, 0, 0.2)",o.style.backgroundColor="rgba(0, 0, 100, 0.5)")}const s=function(e){a();const t=document.createElement("fieldset"),n=document.createElement("label");n.textContent="Task Name:";const c=document.createElement("input");c.type="text";const d=document.createElement("label");d.textContent="Description:";const l=document.createElement("textarea");l.rows="4";const s=document.createElement("label");s.textContent="Due Date:";const u=document.createElement("input");u.type="date";const p=document.createElement("label");p.textContent="Priority:";const m=document.createElement("select"),h=document.createElement("option");h.textContent="LOW",h.value="LOW";const C=document.createElement("option");C.textContent="MEDIUM",C.value="MEDIUM";const y=document.createElement("option");y.textContent="HIGH",y.value="HIGH",m.appendChild(h),m.appendChild(C),m.appendChild(y);const g=document.createElement("button");g.textContent="Create";const v=document.createElement("button");v.textContent="Cancel",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(l),t.appendChild(s),t.appendChild(u),t.appendChild(p),t.appendChild(m),t.appendChild(g),t.appendChild(v),content.appendChild(t),g.addEventListener("click",(function(n){if(c.value.length<1||c.value.includes("."))c.value="",c.placeholder="Task Title Error!",l.placeholder="Task Title Error!";else{const n=new i(c.value,l.value,u.value,m.value,!1);content.removeChild(t);const d=document.querySelector(".selected");e.forEach((e=>{e.title==d.id&&e.taskList.push(n)})),o(e),document.querySelectorAll(".taskDiv").forEach((e=>{content.removeChild(e)})),r(),document.querySelector("#addTaskBtn").style.visibility="visible",a()}})),v.addEventListener("click",(function(e){content.removeChild(t),document.querySelector("#addTaskBtn").style.visibility="visible",a()}))};let u=[],p=!1;function m(e){let t=!0;const n=document.querySelectorAll(".project");return Array.from(n).forEach((n=>{""==e.value&&(t=!1),e.value==n.textContent&&(e.value="",e.placeholder="A project with that name already exists!",t=!1)})),t}function h(e){const n=t(e.value);u.push(n),o(u);const c=document.createElement("div");c.classList.add("project"),c.textContent=n.title,c.id=n.title,sidebar.appendChild(c)}function C(){const e=document.querySelectorAll(".project");Array.from(e).forEach((e=>{e.onclick=function(){!function(e){const t=document.querySelector("#content"),n=document.querySelectorAll(".project"),c=document.createElement("div");c.id="contentHeader";const d=document.createElement("h1");g(t),g(c),p=!1,n.forEach((n=>{n.style.backgroundColor="",n.classList.remove("selected"),n.getAttribute("id")==e&&(u=o("get"),n.classList.add("selected"),p=!0,d.textContent=n.id,n.style.backgroundColor="green",c.appendChild(d),t.appendChild(c),function(){const e=document.createElement("img");e.src="./images/add.png",e.id="addTaskBtn",e.title="Add Task",document.querySelector("#contentHeader").appendChild(e),e.addEventListener("click",(function(t){s(u),e.style.visibility="hidden"}))}(),r())}))}(e.id)}}))}function y(){const e=document.querySelectorAll(".project");for(let t=0;t<e.length;t++)""!=e[t].style.backgroundColor&&(sidebar.removeChild(e[t]),u.splice(t,1),g(content));o(u)}function g(e){e.innerHTML=""}!function(){const e=document.querySelector("#sidebar"),n=(document.querySelector("#content"),document.createElement("div"));n.id="projectHeader";const c=document.createElement("h2");c.textContent="Projects";const d=document.createElement("img");d.src="./images/add.png",d.id="addProjectBtn",n.appendChild(c),n.appendChild(d),e.appendChild(n);const l=document.createElement("div");l.id="projectSubHeader";const r=document.createElement("input");r.id="addProjectInput",r.type="text",r.placeholder="Add Project",l.appendChild(r);const i=document.createElement("img");i.src="./images/trash.png",i.style.width="50px",i.id="deleteProjectBtn",i.textContent="Delete",l.appendChild(i),i.addEventListener("click",(function(e){y()})),i.onmouseenter=function(){p&&(document.querySelector(".selected").style.backgroundColor="darkred")},i.onmouseleave=function(){p&&(document.querySelector(".selected").style.backgroundColor="green")},e.appendChild(l);const a=t("Chores");u.push(a),o(u);const s=document.createElement("div");s.classList.add("project"),s.textContent=a.title,s.id=a.title,e.appendChild(s),C(),d.addEventListener("click",(function(t){m(r)&&(h(r),C(),r.value=""),e.removeChild(i),e.appendChild(i)})),r.addEventListener("keypress",(function(t){r.placeholder="Add Project","Enter"==t.key&&(t.preventDefault(),m(r)&&(h(r),C(),r.value=""),e.removeChild(i),e.appendChild(i))}))}()})();