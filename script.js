const headeer=document.querySelector("header");
 window.addEventListener("scroll",function(){
    headeer.classList.toggle("sticky",this.window.scrollY >120);
 });
