/*
* THE FOLLOWING CODE IS BASED OFF OF THE FOLLOWING:
https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

*/ 

const toggle = document.querySelector('#toggle');
const body = document.body;


toggle.addEventListener('click', function () {
  body.classList.toggle("dark");
  if(body.classList.contains("dark")) {
    toggle.textContent = String.fromCodePoint(127774);
  }
  else{
    toggle.textContent = String.fromCodePoint(127769);;
  }
});
