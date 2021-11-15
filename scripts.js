	// функция показать поиск
	document.querySelector('.mobile-search-button').onclick = function() {
		
		let searchContent = document.querySelector('.search');
		searchContent.style.display = 'flex'; // Открываем поле ввода

		document.querySelector('.mobile-search-button').style.display = 'none'; //Скрываем кнопку поиска

		document.querySelector('.mobile-close-search').style.display = 'block'; // Открываем кнопку закрытия поиска

		document.querySelector('.mobile-close-search').onclick = function(){ // Закрываем поле ввода
			if (searchContent.style.display = 'block') {
				searchContent.style.display = 'none';
				document.querySelector('.mobile-close-search').style.display = 'none';
				document.querySelector('.mobile-search-button').style.display = 'block'; //Открываем кнопку поиска
			}
		}
	};

// Меню
	var el = document.getElementsByClassName('nav-item');

	for(var i=0; i<el.length; i++) {
		el[i].addEventListener("mouseenter", showSub, false);
		el[i].addEventListener("mouseleave", hideSub, false);
	}

	function showSub(e) { // Отображение подменю
		if(this.children.length>1) {
			this.children[1].style.height = "auto";
			this.children[1].style.overflow = "visible";
			this.children[1].style.opacity = "1";
			this.children[1].style.display = "block";
		} else {
			return false;
		}
	}

	function hideSub(e) { // Скрытие подменю
		if(this.children.length>1) {
			this.children[1].style.height = "0px";
			this.children[1].style.overflow = "hidden";
			this.children[1].style.opacity = "0";
			this.children[1].style.display = "none";
		}
		else {
			return false;
		}
	}

// Кнопка наверх
(function() {
	'use strict';

	function trackScroll() {
		var scrolled = window.pageYOffset;
		var coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			goTopBtn.classList.add('back-to-top-show');
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('back-to-top-show');
		}
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 10);
		}
	}

	var goTopBtn = document.querySelector('.back-to-top');

	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);
})();

//Подсветка последнего слова в заголовке
	$(document).ready(function() {
		$('.title').each(function(index, element) {
			var heading = $(element);
			var word_array, last_word, first_part;

			word_array = heading.html().split(/\s+/); //split on spaces
			last_word = word_array.pop(); //pop the last word
			first_part = word_array.join(' '); //rejoin the first words together

			heading.html([first_part, ' <span class="last-word">', last_word, '</span>'].join(''));
		});
	});




