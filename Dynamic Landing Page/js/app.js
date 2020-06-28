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

//Define Global Variables
const navbar = document.getElementById('navbar__list')
const sections = Array.from(document.getElementsByTagName('section'));
const parts = document.querySelectorAll('section');
const topbutton=document.querySelector('.topscroll')
const title = document.getElementById('title');

//End Global Variables

//Helper Functions
//Hide or display button if we reached page fold
function scrollFunction() {
	const lastPosition = window.scrollY
	if (lastPosition > 570 ) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

//handler function for click event on the button
function scrolltop(){
document.documentElement.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});	// document.body.scrollTop=0;
	// document.documentElement.scrollTop=0;
}


///////////////Check if the section is in viewport
function isvisible(element) {
	if (element.offsetTop-window.scrollY<200&& element.offsetTop-window.scrollY>-200) {
		return true;
	}else {
		return false;
	}
};

//////////////////////////////////////////////////////////////////////
function scroll () {
	let section = document.querySelector('#' + event.target.dataset.nav);
	section.scrollIntoView({
		 behavior: "smooth",
		 block:'end',
		 inline:'end'
	 })
 }
 ////////////////////////////////////////////////////////////////////
//hide navbar unless mouse moved or scrolled
navbar.classList.add('hide')
////////////////////////////////////////////////////////////////////

 // Hide navbar when the user don't move the mouse or scroll
 function hide(){
 	time=setTimeout(function(){
		navbar.classList.add('hide')

 	},2000)
 }
 ////////////////////////////////////////////////////////////////////
 //clear the hide time of the navbar
 function clear(){
 	if (typeof time != 'undefined'){
 		clearTimeout(time);
 	}
 }
 ////////////////////////////////////////////////////////////////////


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//show nav on movement or scrolling
function visiblenav(){
	navbar.classList.remove('hide')
 clear();
 hide();

} ;
////////////////////////////////////////////////////////////////////
// Build menu
function navlist() {
	listno=1
  for (let section of sections) {
    let list = document.createElement('li');
    list.className = 'menu__link';
    list.dataset.nav = section.id;
    list.id = 'list'+listno;
    list.innerHTML = section.dataset.nav;
    navbar.appendChild(list);
    listno++
  }
}
////////////////////////////////////////////////////////////////////
function activelist() {

	for (let part of parts) {
		sectionid=part.id
		if (isvisible(part)) {
			let navbarAnchors = document.querySelectorAll('.menu__link');
			for (let anchor of navbarAnchors) {
				if (anchor.dataset.nav===sectionid) {
					anchor.classList.add('activeli')
				}
				else {
					anchor.classList.remove('activeli')
				}
			}
		}
	}
}
function activeSection() {
  for (let section of sections) {
    if (isvisible(section)) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  }
}

/**
 * End Main Functions
 * Begin Events

 *
*/
//Calling the navlist function which builds the nav
navlist();
//make navbar visible when mouse is moved or scrolled
document.addEventListener ('scroll',visiblenav);
document.addEventListener ('mousemove',visiblenav);

//add active list to items in the navbar when scrolled to it's corresponding sections
 document.addEventListener("scroll", activelist);
//scrolling to display the scroll to top button
window.onscroll = function() {scrollFunction()};

// Scroll to section on link click
navbar.addEventListener('click',scroll);
topbutton.addEventListener("click", scrolltop);


// Set sections as active
document.addEventListener("scroll", activeSection);
