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


// counter to specify attributes and number of section
// The addition of the section begins after the fourth section
let counter = 4;
const addSection = () => {
    counter++;
    const content = `<section id="section${counter}" data-nav="Section ${counter}">
        <div class="landing__container">
        <h2>Section ${counter}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
        
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
        </section>`;
    document.querySelector("main").insertAdjacentHTML("beforeend", content);
};


// make list items equal to the number of sections by iterate on them
// but I need to remove all items to avoid the duplicating
// Build menu 
const navList = document.getElementById("navbar__list");
const addNavItems = () => {
    // To complete the count from 4 not to start over
    navList.innerHTML = "";
    // To Add Item in Navbar with id and class 
    // build the nav
    document.querySelectorAll("section").forEach((section) => {
        const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
        navList.insertAdjacentHTML("beforeend", listItem);
    });
};

// Clicking on the icon the document will scroll to the top smoothly
// when you click on nav links will go smoothly to the correct section
navList.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.dataset.nav) {
    document
        .getElementById(`${event.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });
    // I use setTimeout to earn some time to scroll smoothly    
    setTimeout(() => {
        location.hash = `${event.target.dataset.nav}`;
    }, 200);
    }
});

// Scroll to section on link click
// to Add Active to items in class 
// Add class 'active' to section when near top of viewport
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navList.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){
    // To Add Active to items in class After  going to the Sections directly
    active.classList.add("your-active-class");
    activeLink.classList.add("active");

    }
    // To Delete Active to items in class After  going from the Sections directly
    else{
        active.classList.remove("your-active-class");
        activeLink.classList.remove("active");
    }
	});
}

// In order to add after the fourth section, where the beginning of the count equals 4
for (let i = 4; i < 4; i++) addSection();
addNavItems();
// observingSections();

// creating more sections And Nav Items by click on the button
document.getElementById("btn").addEventListener("click", () => {
    addSection();
    addNavItems();
  // observingSections();
});


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