var loader = document.getElementById("preloader");

window.addEventListener("load", function(){

    loader.style.display= "none";
})




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})


var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



function darkMode() {
    let body = document.body;
    let div1 = document.querySelector(".div1");
    let div15 = document.querySelector(".div15");
    let div2 = document.querySelector(".div2");
    let vid = document.querySelector(".contains-video");
    let scrollBar = document.querySelector(".scroll-bar");
    let aTags = document.querySelectorAll("a")
    body.classList.toggle("body-dark");
    div1.classList.toggle("div1-dark");
    div15.classList.toggle("div15-dark");
    div2.classList.toggle("div2-dark");
    vid.classList.toggle("contains-video-dark");
    scrollBar.classList.toggle("scroll-bar-dark");
    aTags.forEach(tag => tag.classList.toggle("a-dark"))
    
 }

 //email sign up
 window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("email-signup");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  
  //remove focus from input
  function focusInput() {
    const textField = document.getElementById("inputform");
  
    textField.focus();
  
    // The input will lose focus after 3 seconds
    setTimeout(() => {
      textField.blur();
    }, 0500);
  }