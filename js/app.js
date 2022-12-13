/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/ 

// Scroll to section on link click
// to Add Active to items in class 
// Add class 'active' to section when near top of viewport
const links = document.querySelectorAll(".menu__link");
const sections = document.querySelectorAll("section");

function activeMenu(){
    let len = sections.length;
    while(--len && window.scrollY + 97 < sections[len].offsetTop){}
    // To Delete Active to items in class After  going from the Sections directly
    links.forEach(ltx => ltx.classList.remove("active"));
    // To Add Active to items in class After  going to the Sections directly
    links[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);



// Clicking on the icon the document will scroll to the top smoothly
// Scroll up 
let scrollBtnUP = document.querySelector(".scrollBtn");
window.addEventListener("scroll", ()=>{
    scrollUp()
})

// Scroll to anchor ID using scrollTO event
// It moves smoothly by just clicking on it
scrollBtnUP.addEventListener('click', ()=>{
    window.scrollTo({
        top : 0 ,
        behavior : "smooth"
    })
})
scrollUp()

// It becomes active when it reaches the bottom
// Its activity ends when it returns to the top
function scrollUp(){
    window.scrollY > 100 ?  scrollBtnUP.classList.add('active') :
                            scrollBtnUP.classList.remove('active');
}