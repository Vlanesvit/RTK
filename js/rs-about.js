/* ====================================
Инициализация слайдера в блоке rs-logo
==================================== */
function initLogoSliders() {
	// Перечень слайдеров
	if (document.querySelector('.rs-about__slider')) {
		const swiperMain = new Swiper('.rs-about__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 1,
				// delay: 5000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
				// Изменить направление
				// reverseDirection: true,
			},

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 5000,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: true,
			allowTouchMove: true,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			// Цикличность слайдера
			loop: true,

			// Курсор перетаскивания
			grabCursor: true,

			// Анимация переключения
			// effect: 'fade',

			// Брекпоинты (адаптив)
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				539.98: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				767.98: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				991.98: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
				1169.98: {
					slidesPerView: 6,
					spaceBetween: 30,
				},
				1439.98: {
					slidesPerView: 4,
					spaceBetween: 42,
				},
			},
		});
	}

}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initLogoSliders();
});