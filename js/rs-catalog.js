/* ====================================
Инициализация слайдера rs-catalog
==================================== */
function initCatalogSlider() {
	if (document.querySelector('.rs-catalog__slider')) {
		'use strict';
		// До этой ширины слайдер будет неактивным
		const breakpoint = window.matchMedia('(min-width: 991.98px)');

		let catalogNav;

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				if (catalogNav !== undefined) catalogNav.destroy(true, true);
				return;
			} else if (breakpoint.matches === false) {
				return enableSwiper();
			}
		};

		// Инициализация слайдера
		const enableSwiper = function () {
			catalogNav = new Swiper('.rs-catalog__slider', {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 5000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: true,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,
				// Cобытие touchstart (pointerdown)
				touchStartPreventDefault: true,

				// Курсор перетаскивания
				grabCursor: true,

				nested: true,

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.5,
						spaceBetween: 40,
					},
					540: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
				},
			});
		};

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	}
}

/* ====================================
Инициализация слайдера в блоке product
==================================== */
function initBlockSliders() {
	const sliderBlocks = document.querySelectorAll('.product__img');

	sliderBlocks.forEach(block => {
		const slider = block.querySelector('.product__img_slider')
		const sliderPag = block.querySelector('.product__img_pagination')

		// Перечень слайдеров
		if (slider) {
			const swiperMain = new Swiper(slider, {
				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,
				// Cобытие touchstart (pointerdown)
				touchStartPreventDefault: true,

				// Курсор перетаскивания
				grabCursor: true,

				// Пагинация
				pagination: {
					el: sliderPag,
					clickable: true,
					// type: 'progressbar',
				},

				effect: "fade",
				slidesPerView: 1,
				spaceBetween: 0,
			});
		}
	});
}
initBlockSliders();
initCatalogSlider();

/* ====================================
Анимация кнопки корзины
==================================== */
function animAddCart() {
	const productItem = document.querySelectorAll('.product');

	if (productItem.length > 0) {
		productItem.forEach(product => {
			const cartBtn = product.querySelectorAll('.cart-btn');

			cartBtn.forEach(btn => {
				btn.addEventListener('click', function (e) {
					e.preventDefault();
					cartBtn.forEach(btnAll => {
						btnAll.classList.toggle('_add-to-cart');
					});
				})
			});
		});
	}
}
animAddCart()