/* ====================================
Инициализация слайдера в блоке rs-reviews
==================================== */
function initReviewsSliders() {
	const sliderBlocks = document.querySelectorAll('.rs-reviews');

	sliderBlocks.forEach(block => {
		const slider = block.querySelector('.rs-reviews__slider')
		const sliderPag = block.querySelector('.rs-reviews__pagination')
		const sliderNext = block.querySelector('.rs-reviews__button-next')
		const sliderPrev = block.querySelector('.rs-reviews__button-prev')

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
				touchStartPreventDefault: false,

				// Курсор перетаскивания
				// grabCursor: true,

				// Стрелки
				navigation: {
					nextEl: sliderNext,
					prevEl: sliderPrev,
				},

				// Пагинация
				pagination: {
					el: sliderPag,
					clickable: true,
					// type: 'progressbar',
				},

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.05,
						spaceBetween: 20,
					},
					540: {
						slidesPerView: 1.5,
						spaceBetween: 20,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					991.98: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},
			});
		}

		addCursorHover(".rs-reviews__swiper", ".cursor", "cursor__active");
		addCursorDrag(".rs-reviews__swiper", ".cursor__circle", "cursor__circle__drag")
		addCursorMove(".cursor__circle")
	});

}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initReviewsSliders();
});