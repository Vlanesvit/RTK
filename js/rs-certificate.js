/* ====================================
Инициализация слайдера в блоке rs-certificate
==================================== */
function initCertificateSliders() {
	const sliderBlocks = document.querySelectorAll('.rs-certificate');

	sliderBlocks.forEach(block => {
		const slider = block.querySelector('.rs-certificate__slider')
		const sliderPag = block.querySelector('.rs-certificate__pagination')
		const sliderNext = block.querySelector('.rs-certificate__button-next')
		const sliderPrev = block.querySelector('.rs-certificate__button-prev')

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
						slidesPerView: 1.2,
						spaceBetween: 10,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					991.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1169.98: {
						slidesPerView: 6,
						spaceBetween: 30,
					},
				},
			});
		}

		addCursorHover(".rs-certificate__swiper", ".cursor", "cursor__active");
		addCursorDrag(".rs-certificate__swiper", ".cursor__circle", "cursor__circle__drag")
		addCursorMove(".cursor__circle")
	});

}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initCertificateSliders();
});