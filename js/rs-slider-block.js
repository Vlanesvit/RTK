/* ====================================
Инициализация слайдера в блоке rs-slider-block
==================================== */
function initBlockSliders() {
	const sliderBlocks = document.querySelectorAll('.rs-slider-block');

	sliderBlocks.forEach(block => {
		const slider = block.querySelector('.rs-slider-block__slider')
		const sliderPag = block.querySelector('.rs-slider-block__pagination')
		const sliderNext = block.querySelector('.rs-slider-block__button-next')
		const sliderPrev = block.querySelector('.rs-slider-block__button-prev')

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
						slidesPerView: 1.25,
						spaceBetween: 20,
					},
					540: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1439.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
			});
		}
	});

}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initBlockSliders();
});