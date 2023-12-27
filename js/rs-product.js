/* ====================================
Инициализация слайдера в блоке rs-product
==================================== */
function initProductCardSliders() {
	// Перечень слайдеров
	const thumbsSlider = new Swiper('.rs-thumbs__slider', {
		// // Автовысота
		// autoHeight: true,

		// // Бесконечность
		// loop: true,

		// // Предзагрузка изоражений
		// preloadImages: false,

		// // Ленивая загрузка
		// lazy: true,

		// Слежка за слайдером
		watchOverflow: true,

		// // Автопрокрутка
		// autoplay: {
		// 	// Пауза между прокруткой
		// 	delay: 5000,
		// 	// Закончить на последнем слайде
		// 	stopOnLastSlide: false,
		// 	// Отключить после ручного переключения
		// 	disableOnInteraction: false,
		// },

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

		grabCursor: true,

		// Навигация
		navigation: {
			prevEl: ".rs-thumbs__button-prev",
			nextEl: ".rs-thumbs__button-next",
		},


		// Брейкпоинты(адаптив)
		// Шрина экрана
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 20,
				direction: 'horizontal',
			},
			540: {
				slidesPerView: 4,
				spaceBetween: 12,
				direction: 'horizontal',
			},
			991.98: {
				slidesPerView: 4,
				spaceBetween: 12,
				direction: 'vertical',
			},
		},
	});

	const productSlider = new Swiper('.rs-product__slider', {
		// Слияние слайдеров
		thumbs: {
			swiper: thumbsSlider,
		},
		grabCursor: true,

		// // Автовысота
		// autoHeight: true,

		// // Бесконечность
		// loop: true,

		// // Предзагрузка изоражений
		// preloadImages: false,

		// // Ленивая загрузка
		// lazy: true,

		// Слежка за слайдером
		watchOverflow: true,

		// // Автопрокрутка
		// autoplay: {
		// 	// Пауза между прокруткой
		// 	delay: 5000,
		// 	// Закончить на последнем слайде
		// 	stopOnLastSlide: false,
		// 	// Отключить после ручного переключения
		// 	disableOnInteraction: false,
		// },

		// // Управлениt колесом мыши
		// mousewheel: {
		// 	// Чувствительность колеса мыши
		// 	sensitivity: 1,
		// },

		// Кол-во показываемых слайдов
		slidesPerView: 1,
		// spaceBetween: 30,

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
	});
}
initProductCardSliders();

/* ====================================
Открытие фильтров
==================================== */
function openDropdown() {
	const productDropdowns = document.querySelectorAll('.rs-product__about_dropdown');
	if (productDropdowns) {
		productDropdowns.forEach(dropdown => {
			const openBtn = dropdown.querySelector('i')
			const list = dropdown.querySelectorAll('.rs-product__about_dropdown-list li')

			// Открываем меню
			openBtn.addEventListener('click', function () {
				document.documentElement.classList.toggle("dropdown-filter-open");
			})
			dropdown.addEventListener('click', function (e) {
				e.stopPropagation();
			});
			document.addEventListener('click', function (e) {
				document.documentElement.classList.remove("dropdown-filter-open");
			});

			// Ставим активный класс
			list.forEach(item => {
				item.addEventListener('click', function (e) {
					list.forEach(item => {
						item.classList.remove('_active')
					});
					e.preventDefault();
					item.classList.add('_active')
				})
			});
		});
	}
}
openDropdown()