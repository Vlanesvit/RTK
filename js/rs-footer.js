
/* ====================================
Создание карты
==================================== */
ymaps.ready(init);
function init() {
	let map = new ymaps.Map("map", {
		controls: [],
		// Координаты центра карты
		center: [48.010139, 37.778335],
		// Уровень масштабирования
		zoom: 12,
	}, {
		suppressMapOpenBlock: true
	});

	let pinsCollection = new ymaps.GeoObjectCollection({}, {
		preset: 'islands#redDotIcon', // дефолт метка
		draggable: false, // метки нельзя перемещать
		iconLayout: 'default#imageWithContent', // указать данный тип макета.
		iconImageHref: 'img/footer/map-pin.png', // cвоё изображение иконки метки.
		iconImageSize: [36, 52], // размеры метки
		iconImageOffset: [-18, -26], // смещение левого верхнего угла иконки
		iconContentOffset: [0, 0], // cмещение слоя с содержимым относительно слоя с картинкой
	});

	for (let i = 0; i < branchData.length; i++) {
		let marks = new ymaps.Placemark(branchData[i].location, {
			// Зададим содержимое всплывающей подсказки.
			hintContent: `${branchData[i].address}`,
		},)
		pinsCollection.add(marks);
	}

	// Добавим метки на карту.
	map.geoObjects.add(pinsCollection);
}

/* ====================================
Слайдер адресов
==================================== */
function initAddressFooterSlider() {
	const sliderBlocks = document.querySelectorAll('.rs-footer__shops');

	sliderBlocks.forEach(block => {
		const slider = block.querySelector('.rs-footer__shops_slider')
		const sliderNext = block.querySelector('.rs-footer__shops_button-next')
		const sliderPrev = block.querySelector('.rs-footer__shops_button-prev')

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
				spaceBetween: 30,
			});
		}
	});
}
// Запуск инициализации слайдеров
initAddressFooterSlider();