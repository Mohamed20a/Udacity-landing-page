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

const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navItems = [];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Extract section ids as navigation items.
for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    navItems.push(sec.getAttribute('id'));
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBar = () => {
    for (let i = 1; i <= navItems.length; i++) {
        const newList = document.createElement('li');
        const newLinks = document.createElement('a');
        newLinks.setAttribute('class', 'menu__link');
        newLinks.classList.add(`section${i}`);
        newLinks.setAttribute('href', `#section${i}`);
        newLinks.textContent = `Section ${i}`;
        newList.appendChild(newLinks);
        navList.appendChild(newList);
    }
};
// Build menu 
navBar();

// Scroll to section on link click
// to Add Active to items in class 
// Add class 'active' to section when near top of viewport
const isInViewport = element => {
    const position = element.getBoundingClientRect();
    return (position.top <= 150 && position.bottom >= 150) ? true : false;
};

const classActive = () => {
    document.addEventListener('scroll', () => {
        for (const section of sections) {
            if (isInViewport(section)) {
                // To Add Active to items in class After  going to the Sections directly
                const id = section.getAttribute('id');
                document.querySelector(`.${id}`).classList.add('active');
                section.classList.add('your-active-class');
            } else {
                // To Delete Active to items in class After  going from the Sections directly
                const id = section.getAttribute('id');
                document.querySelector(`.${id}`).classList.remove('active');
                section.classList.remove('your-active-class');
            }
        }
    });
};
// Set sections as active
classActive();


// Scroll to anchor ID using scrollTO event
const scrollSmoothly = () => {
    document.addEventListener('click', e => {
        const target = e.target;
        if (!target.classList.contains('menu__link'))
            return;
        e.preventDefault();
        const targetId = target.hash;
        document.querySelector(targetId).scrollIntoView({
            inline: 'nearest',
            block: 'start',
            behavior: 'smooth',
        });
    });
};
// Scroll to section on link click
scrollSmoothly();



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


/**
 * End Main Functions
 * Begin Events
 * 
*/