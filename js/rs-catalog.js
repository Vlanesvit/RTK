/* ====================================
Инициализация слайдера rs-catalog
==================================== */
function initCatalogSlider() {
	if (document.querySelector('.rs-catalog__slider')) {
		'use strict';
		// До этой ширины слайдер будет неактивным
		const breakpoint = window.matchMedia('(min-width: 1169.98px)');

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

/* ====================================
Функционал фильтров
==================================== */
function filterFunction() {
	const filter = document.querySelector('.filter');

	if (filter) {
		// Отдельные блоки с фильтрами
		const filterItems = filter.querySelectorAll('.filter__item')
		filterItems.forEach(filterItem => {
			// Блок чекбоксов
			const filterCheckboxList = filterItem.querySelector('.filter__nav');

			// Кнопка "Показать еще"
			const filterShowmore = filterItem.querySelector('.filter__showmore')

			if (filterCheckboxList) {
				const filterCheckboxItems = filterCheckboxList.querySelectorAll('li input');

				filterCheckboxItems.forEach(item => {
					// Даем активный класс при клике
					item.addEventListener('click', function () {
						checkActiveClassCheckbbox(filterItem, filterBodyReset)
					})
				});

				if (filterShowmore) {
					// Показываем скрытые чекбоксы
					filterShowmore.addEventListener('click', function () {
						filterCheckboxItems.forEach(item => {
							item.closest("li").style.display = 'block';
						});
						this.style.display = 'none';
					});
				}

				// Функция проверки чекбоксов. Если чекбоксов <= 6 - кнопка "Показать еще" скрывается
				function checkHideCheckbbox(filterCheckboxItems, filterShowmore) {
					if (filterCheckboxItems && filterShowmore) {
						if (filterCheckboxItems.length <= 6) {
							filterShowmore.style.display = 'none';
						} else {
							filterShowmore.style.display = 'block';
						}
					}
				}
				checkHideCheckbbox(filterCheckboxItems, filterShowmore)
			}
		});

		// Кнопка очистки ВСЕХ фильтров
		const filterAllReset = filter.querySelector('.filter__control .filter__reset');
		// Все блоки с чекбоксами
		const filterCheckboxLists = filter.querySelectorAll('.filter__nav');

		if (filterCheckboxLists) {
			filterCheckboxLists.forEach(list => {
				const filterCheckboxItems = list.querySelectorAll('li input');

				// Убираем ВСЕ активные чекбоксы и кнопки очистки
				filterAllReset.addEventListener('click', function () {
					filterCheckboxItems.forEach(item => {
						item.checked = false;
					});
				})
			});
		}
	}
}
filterFunction()

/* ====================================
Открыть/закрыть фильтры (в моб.версии)
==================================== */
function openFilter() {
	const filterCloseBtn = document.querySelector('.filter__close');
	const filterOpenBtn = document.querySelectorAll('.rs-catalog__open-filter');

	filterOpenBtn.forEach(btn => {
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			if (document.documentElement.classList.contains("filter-open")) {
				filterClose()
			} else {
				filterOpen()
			}
		})
	});

	filterCloseBtn.addEventListener('click', function (e) {
		e.preventDefault();
		filterClose()
	});

	// Функции открытия бургер-меню с блокировкой скролла
	function filterOpen() {
		bodyLock();
		document.documentElement.classList.add("filter-open");
	}
	function filterClose() {
		bodyUnlock();
		document.documentElement.classList.remove("filter-open");
	}
}
if (document.querySelector('.rs-catalog__open-filter') && document.querySelector('.filter__close')) {
	openFilter()
}

/* ====================================
Смена отображения товаров
==================================== */
function changeViewProduct() {
	const gridBtn = document.getElementById('grid-view-btn');
	const listBtn = document.getElementById('list-view-btn');
	const gridBlock = document.getElementById('grid-view-block');
	const listBlock = document.getElementById('list-view-block');

	if (gridBtn && listBtn && gridBlock && listBlock) {
		gridBtn.addEventListener('click', function (e) {
			e.preventDefault();
			listBtn.classList.remove('_active');
			gridBtn.classList.add('_active');
			listBlock.classList.remove('_active');
			gridBlock.classList.add('_active');
		})

		listBtn.addEventListener('click', function (e) {
			e.preventDefault();
			listBtn.classList.add('_active');
			gridBtn.classList.remove('_active');
			listBlock.classList.add('_active');
			gridBlock.classList.remove('_active');
		})
	}
}
changeViewProduct()