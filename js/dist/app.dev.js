"use strict";

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
var navList = document.getElementById('navbar__list');
var sections = document.querySelectorAll('section');
var navItems = [];
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Extract section ids as navigation items.

for (var i = 0; i < sections.length; i++) {
  var sec = sections[i];
  navItems.push(sec.getAttribute('id'));
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav


var navBar = function navBar() {
  for (var _i = 1; _i <= navItems.length; _i++) {
    var newList = document.createElement('li');
    var newLinks = document.createElement('a');
    newLinks.setAttribute('class', 'menu__link');
    newLinks.classList.add("section".concat(_i));
    newLinks.setAttribute('href', "#section".concat(_i));
    newLinks.textContent = "Section ".concat(_i);
    newList.appendChild(newLinks);
    navList.appendChild(newList);
  }
}; // Build menu 


navBar(); // Scroll to section on link click
// to Add Active to items in class 
// Add class 'active' to section when near top of viewport

var isInViewport = function isInViewport(element) {
  var position = element.getBoundingClientRect();
  return position.top <= 150 && position.bottom >= 150 ? true : false;
};

var classActive = function classActive() {
  document.addEventListener('scroll', function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var section = _step.value;

        if (isInViewport(section)) {
          // To Add Active to items in class After  going to the Sections directly
          var id = section.getAttribute('id');
          document.querySelector(".".concat(id)).classList.add('active');
          section.classList.add('your-active-class');
        } else {
          // To Delete Active to items in class After  going from the Sections directly
          var _id = section.getAttribute('id');

          document.querySelector(".".concat(_id)).classList.remove('active');
          section.classList.remove('your-active-class');
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
}; // Set sections as active


classActive(); // Scroll to anchor ID using scrollTO event

var scrollSmoothly = function scrollSmoothly() {
  document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target.classList.contains('menu__link')) return;
    e.preventDefault();
    var targetId = target.hash;
    document.querySelector(targetId).scrollIntoView({
      inline: 'nearest',
      block: 'start',
      behavior: 'smooth'
    });
  });
}; // Scroll to section on link click


scrollSmoothly(); // Clicking on the icon the document will scroll to the top smoothly
// Scroll up 

var scrollBtnUP = document.querySelector(".scrollBtn");
window.addEventListener("scroll", function () {
  scrollUp();
}); // Scroll to anchor ID using scrollTO event
// It moves smoothly by just clicking on it

scrollBtnUP.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
scrollUp(); // It becomes active when it reaches the bottom
// Its activity ends when it returns to the top

function scrollUp() {
  window.scrollY > 100 ? scrollBtnUP.classList.add('active') : scrollBtnUP.classList.remove('active');
}
/**
 * End Main Functions
 * Begin Events
 * 
*/
//# sourceMappingURL=app.dev.js.map
