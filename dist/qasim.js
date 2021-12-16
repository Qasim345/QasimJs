/*
   |=>  qasim.js v.0.1
   |=>  a mini js library like (jQuery)
   |=>  author: Qasim Sarwari
   |=>  Portfolio: qa-sim.netlify.app
   |=>  Github: github.com/Qasim345
   |=>  Copyright ⓒ2021 by Qasim Sarwari
*/
function $(sel) {
  const qasim = {
    ele: document.querySelector(sel),
    html: (name)=> {
      qasim.ele.innerHTML = name;
    },
    text: (name)=> {
      qasim.ele.innerText = name;
    },
    val: (value)=>{
      if (qasim.ele.value)
        qasim.ele.value = "";
        else
        qasim.ele.value = value;
    },
    on: (event, callback)=> {
      qasim.ele.addEventListener(event, callback);
    },
    hi: ()=> {
      qasim.ele.style.display = "none";
    },
    sh: (time)=> {
      qasim.ele.style.display = "block";
      qasim.ele.style.transition = time+"ms";
    },
    ezafaClass: (name)=> {
      qasim.ele.classList.add(name);
    },
    hazfClass: (name)=> {
      qasim.ele.classList.remove(name);
    },
    doranClass: (name)=> {
      qasim.ele.classList.toggle(name);
    },
    doran: ()=> {
      qasim.ele.style.transition = "0.3s";
      if (qasim.ele.style.display == "block") {
        qasim.ele.style.display = "none";
      } else {
        qasim.ele.style.display = "block";
      }
    },
    attr: (name, value)=> {
      if (value == null)
        qasim.ele.getAttribute(name);
      else
        qasim.ele.setAttribute(name, value);
    },
    hazfAttr: (name, value)=> {
      if (value == null)
        qasim.ele.getAttribute(name);
      else
        qasim.ele.removeAttribute(name, value);
    },
  };
  return qasim;
}