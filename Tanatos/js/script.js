window.onload = function  () {



let Slides    = document.querySelectorAll('.slider__slide');
let counter   = 0;







"use strict";


// -------------
// SCROLLS
// -------------
let Scroll = document.querySelector('.scroll');

Scroll.onclick = function  (e) {
	let scrolled;
	let timer;
	let Works = document.getElementById('works');
	let pos = Works.getBoundingClientRect();
	
	pos = pos.top + pageYOffset;
	scrolled = window.pageYOffset;

	function ScrollDown () {
		if(scrolled < pos){
			window.scrollTo(0,scrolled);;
			scrolled += 40;
			timer = setTimeout(ScrollDown, 20);
		} else {
			clearTimeout(timer);
			window.scrollTo(0, pos);
		}
	}

	ScrollDown();	
}

let WorksBtn = document.getElementById('OurWorks');

WorksBtn.onclick = function  () {
	let scrolled;
	let timer;
	let Works = document.getElementById('works');
	let pos = Works.getBoundingClientRect();
	
	pos = pos.top + pageYOffset;
	scrolled = window.pageYOffset;

	function ScrollDown () {
		if(scrolled < pos){
			window.scrollTo(0,scrolled);;
			scrolled += 40;
			timer = setTimeout(ScrollDown, 20);
		} else {
			clearTimeout(timer);
			window.scrollTo(0, pos);
		}
	}

	ScrollDown();	
}

// ------------
// MODAL
// ----------

let HireBtn = document.querySelector('.header__buttons :first-child');
let Modal = document.querySelector('.modalwindow');
let ModalContainer = document.querySelector('.modalwindow .container');
let ModalClose = document.querySelector('.closed');

HireBtn.onclick = function  () {
	Modal.style.display = 'flex';
	Modal.style.zIndex = '30';
	ModalContainer.style.animationName = 'ModalOn';
}


ModalClose.onclick = function  () {
	ModalContainer.style.animationDuration = '0.2s';
	ModalContainer.style.animationName = 'ModalOff';
	setTimeout(function  () {
		Modal.style.display = 'none';
		Modal.style.zIndex = '0'
	}, 200);
	setTimeout(function  () {
		ModalContainer.style.animationDuration = '0.3s';
	},300);
}	


Modal.onclick = function  (e) {
	if(e.target != Modal){
		return false;
	} else {
		this.style.display = 'none';
		this.style.zIndex = '0'
	}
}

// ------------
// SLIDER
// -----------


let Slider 	  = document.querySelector('.slider__content');
let Prev      = document.querySelector('.references__slider .prev');
let Next      = document.querySelector('.references .next');  

Prev.onclick = function  () {
	
	Slides[counter].style.animationName = 'SlidePrev';
	setTimeout(function  () {
		Slides[counter].style.display = 'none';
	},501)

	setTimeout(function  () {
		counter--;
	
		if(counter < 0){
			counter = Slides.length - 1;
		}

		Slides[counter].style.display = 'flex';
		Slides[counter].style.animationName = 'SlideNext';
	},502)
}


Next.onclick = function  () {
	
	Slides[counter].style.animationName = 'SlidePrev';
	setTimeout(function  () {
		Slides[counter].style.display = 'none';
	},501)

	setTimeout(function  () {
		counter++;
	
		if(counter >= Slides.length){
			counter = 0;
		}

		Slides[counter].style.display = 'flex';
		Slides[counter].style.animationName = 'SlideNext';
	},502)
}
// -----------
// TEAM__SLIDER
// ---------------
let Slider3 = document.getElementById('Slider');
let percent = 0;
let TeamCounter = 0;
let Dots = document.querySelectorAll('.dot');

function TeamSlider () {
	TeamCounter++;	
	percent -= 26.67;

	if(TeamCounter >= Dots.length){
		TeamCounter = 0;
	}

	if(percent <= -106.68){
		percent = 0;
	}

	for(let i = 0; i < Dots.length; i++){
		Dots[i].classList.remove('dot-active');
	}

	Dots[TeamCounter].classList.add('dot-active');

	Slider3.style.transform = `translateX(${percent}%)`;


	setTimeout(TeamSlider, 3000);
}

TeamSlider();

// -----------
// MENU
// -----------
let Home = document.querySelector('a[href="#header"]')
let checkbox = document.querySelector('input[type="checkbox"]');
let Service = document.querySelector('a[href="#services"]');
let Works   = document.querySelector('a[href="#works"]');
let Contact = document.querySelector('a[href="#contact"]');


	Home.addEventListener('click', RemoveMenu);
	Service.addEventListener('click',RemoveMenu);
	Works.addEventListener('click', RemoveMenu);
	Contact.addEventListener('click', RemoveMenu);
	

	
	function RemoveMenu() {
		checkbox.checked = false;
	}

		// TO TOp

let Top = document.getElementById('toTop');

	setTimeout(() => {
		Top.style.visibility = 'visible';
	}, 601);

	window.addEventListener('scroll', Scrolling);

	Top.addEventListener('click', ToTop);

	function ToTop() {
		let scrolling = document.documentElement.scrollTop;
		let timer;

		function ScrollToTop() {
			if(scrolling > 0) {
				window.scrollTo(0,scrolling);
				scrolling -= 30;
				window.scrollTo(0,scrolling);
				timer = setTimeout(ScrollToTop,10);
			} else { 
				clearTimeout(timer);
				window.scrollTo(0,0);
			}
		}

		ScrollToTop();
	}


	function Scrolling() {
		if(pageYOffset >= 750){
			Top.style.animationName = 'ToTopActive';
		} else {
			Top.style.animationName = 'ToTopOff';
		}
	}





















































}
		