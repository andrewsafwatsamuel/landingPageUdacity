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

/**
 * Define Global Variables
 * 
 */
const mainNavUl = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
const fragment = document.createDocumentFragment();
const tabs = new Array();
const screenHeight = window.innerHeight;

// build the nav
for (section of sections) {
    const item = document.createElement('li');
    item.innerText = section.dataset.nav;
    tabs.push(item);
    fragment.appendChild(item);
}

mainNavUl.appendChild(fragment);

/**
 * Begin Events
 *
 */
mainNavUl.addEventListener('click', onTabClick)

window.addEventListener('scroll', onSectionScrolled);

// Scroll to section on link click
function onTabClick(event) {
    if (event.target.tagName === 'LI') {
        scrollToSection(tabs.indexOf(event.target));
    }
}

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

// Set sections as active
function onSectionScrolled() {
    for (let i = 0; i < sections.length; i++) {
        setSectionClass(sections[i], tabs[i]);
    }
}

function setSectionClass(section, tab) {

    const sectionBoundaries = section.getBoundingClientRect();
    if ((sectionBoundaries.top <= innerHeight / 1.4 && sectionBoundaries.top > -1) || (sectionBoundaries.bottom >= innerHeight / 1.4 && sectionBoundaries.bottom <= section.clientHeight)) {
        section.classList.add('your-active-class');
        tab.classList.add('active_tab')
        tab.classList.remove('non_active_tab')
    } else {
        section.classList.remove('your-active-class');
        tab.classList.remove('active_tab')
        tab.classList.add('non_active_tab')
    }
}