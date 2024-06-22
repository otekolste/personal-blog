/*
* THE FOLLOWING CODE IS BASED OFF OF THE FOLLOWING:
https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

*/ 

const toggle = document.querySelector('#toggle'); // Gets reference to toggle button
const body = document.body; // Gets reference to body of document


toggle.addEventListener('click', function () { // Adds event listener to toggle button
  body.classList.toggle("dark"); // Toggles whether the body element has the "dark" class (if it has "dark" element, removes it; otherwise, adds it)
  if(body.classList.contains("dark")) { // checks if page is currently in dark mode
    toggle.textContent = String.fromCodePoint(127774); // if so, changes toggle button to sun emoji
  }
  else{
    toggle.textContent = String.fromCodePoint(127769); // otherwise, changes toggle button to moon emoji
  }
});
