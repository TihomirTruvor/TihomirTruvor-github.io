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

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.el-animation');
for (let elm of elements) {
	observer.observe(elm);
}

const details = Array.from(document.querySelectorAll("details"));

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
	// функция показать поиск
	/*document.querySelector('.mobile-search-button').onclick = function() {
		
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
	};*/

/*var mySwiper = new Swiper('.swiper-container', {
  zoom: {
    maxRatio: 5,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   }
});

var swiperSlide = document.getElementsByClassName('swiper-slide')
for(var index = 0; index< swiperSlide.length; index++){
swiperSlide[index].addEventListener('mouseover',function(e){
    mySwiper.zoom.in();
})

swiperSlide[index].addEventListener('mouseout',function(e){
    mySwiper.zoom.out();
})
}*/








