"use strict";

let Scroll = document.querySelector('.scroll');
// let h = 1700;


Scroll.onclick = function  () {
	let pos    = document.documentElement.scrollTop;
	let timer;

	ScrollToTop();


	function ScrollToTop () {
		if(pos < 1700) {
			window.scrollTo(0,pos);
			pos = pos + 20;
			timer = setTimeout(ScrollToTop, 20);
		} else {
			clearTimeout(timer);
			window.scrollTo(0,1700);
		}
	}

}