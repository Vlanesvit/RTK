/* ====================================
Меню
==================================== */
function menuFunction() {
	const menus = document.querySelectorAll('.rs-header__menu');

	// Бургер-кнопка
	function menuBurger() {
		menus.forEach(menu => {
			const menuBurgerBtns = menu.querySelectorAll('.menu__icon');
			const menuBurgerClose = menu.querySelectorAll('.menu__close');

			if (menuBurgerBtns) {
				menuBurgerBtns.forEach(btn => {
					// Открываем меню
					btn.addEventListener("click", function (e) {
						if (document.documentElement.classList.contains("menu-open")) {
							menuClose();
						} else {
							menuOpen()
						}
					});
				});
			}
			if (menuBurgerClose) {
				menuBurgerClose.forEach(btn => {
					// Открываем меню
					btn.addEventListener("click", function (e) {
						if (document.documentElement.classList.contains("menu-open")) {
							menuClose();
						}
					});
				});
			}
		});
	};
	if (document.querySelector(".menu__icon")) {
		menuBurger()
	}

	// Меню
	function menuInit() {
		menus.forEach(menu => {
			// Все пункты
			const menuItem = menu.querySelectorAll('.menu__list li');

			// Все пункты с выпадающим меню
			const menuItemDropdowns = menu.querySelectorAll('.menu__list .dropdown');
			const menuItemDropdownsMenu = menu.querySelectorAll('.menu__list .dropdown__menu');

			// 0-ой уровень
			const menuItemDropdownsNull = menu.querySelectorAll('.menu__list > .dropdown');
			const menuItemDropdownsMenuNull = menu.querySelectorAll('.menu__list > .dropdown > .dropdown__menu');

			// 1-ый уровень
			const menuItemDropdownsFirst = menu.querySelectorAll('.menu__list > .dropdown > .dropdown__menu > .dropdown');
			const menuItemDropdownsMenuFirst = menu.querySelectorAll('.menu__list > .dropdown > .dropdown__menu > .dropdown > .dropdown__menu');

			// 2-ой уровень
			const menuItemDropdownsTwo = menu.querySelectorAll('.menu__list > .dropdown > .dropdown__menu > .dropdown > .dropdown__menu > .dropdown');
			const menuItemDropdownsMenuTwo = menu.querySelectorAll('.menu__list > .dropdown > .dropdown__menu > .dropdown > .dropdown__menu > .dropdown > .dropdown__menu');

			// 3-ий уровень
			const menuItemDropdownsThree = menu.querySelectorAll('.menu__list > .dropdown > .dropdown__menu > .dropdown > .dropdown__menu > .dropdown  > .dropdown__menu > .dropdown');
			const menuItemDropdownsMenuThree = menu.querySelectorAll('.menu__list > .dropdown > .dropdown__menu > .dropdown > .dropdown__menu > .dropdown > .dropdown__menu > .dropdown > .dropdown__menu');

			// Добавляем иконки в пункты с выпадающим меню
			menuItemDropdowns.forEach(item => {
				const menuLink = Array.from(item.children).find(child => child.matches('a'));
				if (menuLink) {
					let icon = document.createElement('i');
					menuLink.append(icon);
				}
			});

			// Функция для отдельных уровней меню, чтобы открывался только один пункт, а открытые закрывались, кроме тех, кто выше уровнем
			function openLvlMenu(li, ul) {
				li.forEach(item => {
					const menuItemList = item.querySelector('ul');
					const menuItemBtn = item.querySelector('button');
					const menuItemIcons = item.querySelector('a > i');

					const addEventList = (btn) => {
						// Раскрываем меню при клике на иконку
						if (btn) {
							btn.addEventListener('click', (e) => {
								e.preventDefault();
								_slideToggle(menuItemList, 500);
								ul.forEach(menu => {
									if (!menu.hasAttribute('hidden')) {
										_slideUp(menu, 500);
									}
								});

								// Проходимся по всем пунктам и ищем активные классы, убираем их и добавляем активный класс кликнутому пункту
								if (!btn.closest('.dropdown').classList.contains('_open-menu')) {
									li.forEach(itemDrop => {
										if (itemDrop.classList.contains('_open-menu')) {
											itemDrop.classList.remove('_open-menu')
										}
									});
									btn.closest('.dropdown').classList.add('_open-menu');
								} else if (btn.closest('.dropdown').classList.contains('_open-menu')) {
									btn.closest('.dropdown').classList.remove('_open-menu');
								}
							});
						}
					}
					addEventList(menuItemBtn)
					addEventList(menuItemIcons)
				});
			}

			// Пункты 0-го уровня меню
			openLvlMenu(menuItemDropdownsNull, menuItemDropdownsMenuNull)
			// Пункты 1-го уровня меню
			openLvlMenu(menuItemDropdownsFirst, menuItemDropdownsMenuFirst)
			// Пункты 2-го уровня меню
			openLvlMenu(menuItemDropdownsThree, menuItemDropdownsMenuTwo)
			// Пункты 3-го уровня меню
			openLvlMenu(menuItemDropdownsTwo, menuItemDropdownsMenuThree)

			// При клике на бургер убираем открые меню и активные класс
			document.addEventListener("click", function (e) {
				if (e.target.closest('.menu__icon')) {
					menuItemDropdownsMenu.forEach(menu => {
						_slideUp(menu, 500);
					});
					menuItemDropdowns.forEach(item => {
						item.classList.remove('_open-menu');
					});
				}
			});
		});
	}
	menuInit()

	// Функции открытия бургер-меню с блокировкой скролла
	function menuOpen() {
		bodyLock();
		document.documentElement.classList.add("menu-open");
	}
	function menuClose() {
		bodyUnlock();
		document.documentElement.classList.remove("menu-open");
	}
	function menuToggle() {
		bodyLockToggle();
		document.documentElement.classList.toggle("menu-open");
	}
}
menuFunction()

function catalogMenu() {
	// Получаем элементы
	const catalogBtn = document.querySelector('.rs-header__catalog_btn');
	const catalogMenu = document.querySelector('.rs-header__catalog_menu');
	const catalogTitles = document.querySelectorAll('.rs-header__catalog_title');
	const catalogBodies = document.querySelectorAll('.rs-header__catalog_body');

	// Функция для открытия или закрытия меню
	const toggleMenu = () => {
		catalogMenu.classList.toggle('_active');
	};

	// Функция для скрытия всех разделов меню и удаления активных классов
	const hideAllSections = () => {
		catalogBodies.forEach(section => {
			section.classList.remove('_active-category');
		});
		catalogTitles.forEach(title => {
			title.classList.remove('_active-category');
		});
	};

	// Обработчик клика на кнопку открытия меню
	catalogBtn.addEventListener('click', (event) => {
		event.stopPropagation(); // Останавливаем всплытие события

		if (catalogBtn.classList.contains('_btn-primary')) {
			catalogBtn.classList.remove('_btn-primary')
			catalogBtn.classList.add('_btn-second')
		} else if (catalogBtn.classList.contains('_btn-second')) {
			catalogBtn.classList.remove('_btn-second')
			catalogBtn.classList.add('_btn-primary')
		}

		catalogBtn.classList.toggle('_active')
		toggleMenu();
		bodyLockToggle();
	});

	// Обработчик клика на кнопки разделов
	catalogTitles.forEach((title, index) => {
		title.addEventListener('click', (event) => {
			event.stopPropagation(); // Останавливаем всплытие события
			hideAllSections(); // Скрываем все разделы и убираем активные классы
			title.classList.add('_active-category'); // Добавляем активный класс к выбранной кнопке
			catalogBodies[index].classList.add('_active-category'); // Добавляем активный класс к соответствующему разделу
		});
	});

	// Обработчик клика вне меню для закрытия меню и удаления активных классов
	document.addEventListener('click', (event) => {
		if (!catalogMenu.contains(event.target) && !catalogBtn.contains(event.target)) {
			catalogMenu.classList.remove('active');
		}
	});
}
catalogMenu()

/* ====================================
Якорные ссылки
==================================== */
// data-goto - указать ID блока
// data-goto-header - учитывать header
// data-goto-top - недокрутить на указанный размер
// data-goto-speed - скорость (только если используется доп плагин)
let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		let headerItem = "";
		let headerItemHeight = 0;
		if (noHeader) {
			headerItem = ".header";
			const headerElement = document.querySelector(headerItem);
			if (!headerElement.classList.contains("_header-scroll")) {
				headerElement.style.cssText = `transition-duration: 0s;`;
				headerElement.classList.add("_header-scroll");
				headerItemHeight = headerElement.offsetHeight;
				headerElement.classList.remove("_header-scroll");
				setTimeout((() => {
					headerElement.style.cssText = ``;
				}), 0);
			} else headerItemHeight = headerElement.offsetHeight;
		}
		let options = {
			speedAsDuration: true,
			speed,
			header: headerItem,
			offset: offsetTop,
			easing: "linear"
		};
		document.documentElement.classList.contains("menu-open") ? menuClose() : null;
		if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
			let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
			targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
			targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
			window.scrollTo({
				top: targetBlockElementPosition,
				behavior: "smooth"
			});
		};
	};
}
function pageNavigation() {
	document.addEventListener("click", pageNavigationAction);
	document.addEventListener("watcherCallback", pageNavigationAction);
	function pageNavigationAction(e) {
		if ("click" === e.type) {
			const targetElement = e.target;
			if (targetElement.closest("[data-goto]")) {
				const gotoLink = targetElement.closest("[data-goto]");
				const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
				const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
				const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
				const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
				gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
				e.preventDefault();
			}
		} else if ("watcherCallback" === e.type && e.detail) {
			const entry = e.detail.entry;
			const targetElement = entry.target;
			if ("navigator" === targetElement.dataset.watch) {
				document.querySelector(`[data-goto]._navigator-active`);
				let navigatorCurrentItem;
				if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
					const element = targetElement.classList[index];
					if (document.querySelector(`[data-goto=".${element}"]`)) {
						navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
						break;
					}
				}
				if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
			}
		}
	}
}
pageNavigation();

/* ====================================
Header при скролле
==================================== */
function headerFixed() {
	const header = document.querySelector('.rs-header');
	const headerFixed = document.querySelector('.rs-header__fixed');
	let lastScrollTop = 0;

	function headerClassAdd() {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if (window.scrollY >= 500) {
			// Проверка на присутствие класса для бургер-меню. Если он есть, то шапка не скрывается
			if (document.documentElement.classList.contains("menu-open")) {
				headerFixed.style.top = "0px";
			}
			else {
				// Скрытие шапки
				if (scrollTop > lastScrollTop) {
					headerFixed.style.top = "-300px";
				} else {
					headerFixed.style.top = "0px";
				}
			}
		} else {
			headerFixed.style.top = "-300px";
		}
		lastScrollTop = scrollTop;
	}

	window.addEventListener('scroll', function () {
		headerClassAdd()
	})
	window.addEventListener('load', function () {
		headerClassAdd()
	})
	window.addEventListener('resize', function () {
		headerClassAdd()
	})
}
headerFixed()

/* ====================================
Поиск
==================================== */
function search() {
	const searchs = document.querySelectorAll('.search');

	searchs.forEach(search => {
		const searchSubmit = search.querySelector('.search__submit')
		const searchClear = search.querySelector('.search__clear');
		const searchInput = search.querySelector('.search__input')
		const searchForm = search.querySelector('.search__form');
		const searchModal = document.querySelector('.search__block');

		// Отправка формы
		searchSubmit.addEventListener('click', function (e) {
			e.preventDefault();
			if (searchInput.value != '') {
				searchForm.submit();
			}
		})

		// При вводе появляется кнопка отчистки
		searchInput.addEventListener('input', function (e) {
			searchClear.style.display = "flex";
		})

		// Очистить инпут
		searchClear.addEventListener('click', function (e) {
			searchInput.value = '';
			searchClear.style.display = "none";
			putСursorInInput(searchInput);
		})
	});

	// Вспомогательные функции ========================================================================================================================================================
	// Поставить курсор в инпут после клика
	function putСursorInInput(input) {
		setTimeout(function () {
			input.focus()
		}, 0);
	}
	// Функции открытия/закрытия поиска с блокировкой скролла
	function searchOpen() {
		// bodyLock();
		document.documentElement.classList.add("search-open");
	}
	function searchClose() {
		// bodyUnlock();
		document.documentElement.classList.remove("search-open");
	}
	function searchToggle() {
		// bodyLockToggle();
		document.documentElement.classList.toggle("search-open");
	}
}
if (document.querySelector('.search')) {
	search()
}

/* ====================================
Слайдер категорий
==================================== */
function initHeadCate() {
	const sliderBlocks = document.querySelectorAll('.rs-header__category');

	sliderBlocks.forEach(block => {
		const slider = block.querySelector('.rs-header__category_slider')
		const sliderNext = block.querySelector('.rs-header__category_button-next')
		const sliderPrev = block.querySelector('.rs-header__category_button-prev')

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

				slidesPerView: 'auto',

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						spaceBetween: 10,
					},
					1169.98: {
						spaceBetween: 20,
					},
				},
			});
		}
	});
}
// Запуск инициализации слайдеров
initHeadCate();