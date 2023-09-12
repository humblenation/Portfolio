const elementToggleFunction = function(ele){
    ele.classList.toggle("active")
};
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function(){
    elementToggleFunction(sidebar)
});


// page navigation 
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
// add event to all nav link
for(let i = 0; i < navigationLinks.length; i++){
    navigationLinks[i].addEventListener("click", function(){
        for(let i = 0; i < pages.length; i++){
            if(this.innerHTML.toLowerCase() === pages[i].dataset.page){
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            }else{
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
                
            }
        }
    })
}