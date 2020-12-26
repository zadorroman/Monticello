'use strict';

let cords;  //вывод кординат которые будут показыватся при начальной загрузке, сделал глобальными для ссылок

cords = {
	lat: 40.68060208817025,
	lng: -73.90018194869931
};

function initMap() {
	let map, styles, marker, info, content;

	styles =
		[
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#bdbdbd"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dadada"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
					}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c9c9c9"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			}]; //стили которые взяли с https://mapstyle.withgoogle.com/

	map = new google.maps.Map(document.getElementById("map"), {
		center: cords,

		zoom: 14,
		styles: styles,   //подключаем стили к карте
		disableDefaultUI: true,  //убираем юи с карты... след параметры добавляют отдельно юи
	});

	marker = new google.maps.Marker({



		position: cords, //координаты маркера



		map: map,  //подключение к карте маркера
		title: `PopCat`,  //при наводке на маркер вылазит текст
		animation: google.maps.Animation.DROP, // анимация
		// draggable: true  перемещать маркер
		icon: 'images/marker.png'// подключаем свой маркер
	});

	content = `	<img style="-webkit-user-select: none;margin: auto;"
	src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/637310/fef3f9b974263f411cafb4909bb09af91d31610d.png">`;

	info = new google.maps.InfoWindow({			 //
		content: content,          				// создаем контент который открывается по клику на маркер
	});										   //

	marker.addListener("click", () => {			   //
		info.open(map, marker);                   // подключаем клик на маркер
	});											 //
}

(function ($) {
	$(document).ready(function () {
		// Code
		//chng cord при клике на ссылку
		$('.cord-ny').click(function () {
			cords = {
				lat: 40.74059839526125,
				lng: -74.04011286357431                 //new-york
			};
			initMap();
		})

		$('.cord-hk').click(function () {
			cords = {
				lat: 22.3171493189299,                // Hong Kong
				lng: 114.16800654312759
			};
			initMap();
		})

		//slick slider 
		$('.slider__wrap').slick({
			dots: true, // включение точек
			arrows: true, // включение стрелок
			prevArrow: '<div class="slider-prev"> <span class="slider__arrow"></span></div>', //custom arrow
			nextArrow: '<div class="slider-next"> <span class="slider__arrow"></span></div>', // custom arrow
			appendArrows: $('.slider__arrows'), //стрелки в другом месте разместить
			appendDots: $('.slider__dots'), //точки в другом месте разместить
			slidesToShow: 3, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			autoplay: true, //auto play on
			autoplaySpeed: 4000, // скорость прокрутки в автоплей
			swipe: true // отключает включает свап
		});

		//волна на соц иконки
		$('.social__item').click(function () {
			let
				wave = $('<span class="wave"></span>');
			$(this).append(wave);

			setTimeout(function () {
				wave.remove();
			}, 800);
		});

		//волна на соц иконки
		$('.btn__link').click(function () {
			let
				wave = $('<span class="wave"></span>');
			$(this).append(wave);

			setTimeout(function () {
				wave.remove();
			}, 800);
		});



		//волна на стрелки слайдера
		$('[class^=slider-]').click(function () {
			let ani = $('[class^=slider-]'),
				wave = $('<span class="wave"></span>');
			$(this).append(wave);

			setTimeout(function () {
				wave.remove();
			}, 800);


		});

		// Fancybox	
		$('.gallery__photo').fancybox({
			buttons: [               //настройки кнопок 
				"fullScreen",
				"download",
				"thumbs",
				"close"
			],
			animationEffect: 'zoom-in-out',   //вид анимации
			animationDuration: 800,    //задержки
			transitionEffect: 'tube', //когда нажимаешь на стрелочку в галерее ефект тюба
			transitionDuration: 800,  //задержка
			loop: true, //повторение

		});

		//показ дополнительной галереи 
		$('.gallery__wrap--more').hide()
		$('.btn__seemore').on('click', function () {
			$('.gallery__wrap--more').toggle({
				duration: '1000' // продолжительность анимации
			});
			$('.btn__seemore').toggle({

				duration: '1000' // продолжительность анимации

			}).css({
				'margin': '10px auto 140px'
			})

			$(this).text() === 'See less' ? $('.btn__seemore').text('See more') : $('.btn__seemore').text('See less');
		});


		// Фикс меню
		let sections = {
			home: $('#header').offset().top,
			about: $('#about').offset().top,
			news: $('#news').offset().top,    //назначение кординат по id
			gallery: $('#projects').offset().top,
			map: $('#map').offset().top,
			footer: $('#footer').offset().top
		};
		console.log(sections);

		$(window).scroll(() => {
			let scrTop = $(document).scrollTop() + ($(window).height() / 3),
				position = '',
				colorText = $('.fix-menu__text');



			if (scrTop < sections.about) {
				position = 'header';
				colorText.css({
					'color': '#fff'
				})
			} else if (scrTop >= sections.about && scrTop < sections.news) {
				position = 'about';

				colorText.css({
					'color': '#4f1efe'
				})
			} else if (scrTop >= sections.news && scrTop < sections.gallery) {
				position = 'news';
				colorText.css({
					'color': '#fff'
				})
			} else if (scrTop >= sections.gallery && scrTop < sections.map) {
				position = 'projects';
				colorText.css({
					'color': '#4f1efe'
				})
			} else if (scrTop >= sections.map && scrTop < sections.footer) {
				position = 'map';
				colorText.css({
					'color': '#4f1efe'
				})
			} else {
				position = 'footer';
				colorText.css({
					'color': '#fff'
				})
			}

			$('.fix-menu__link').removeClass('fix-menu__active');
			$('.fix-menu').find(`[href="#${position}"]`).addClass('fix-menu__active');

		});

		$('.btn--submit').click(function () {
			if ($('.contacts__input').val() != '' && $('.contacts__input--email').val() != '') {
				$('.send-animation').toggle({
				})

				setTimeout(function () {
					$('.send-animation').toggle({
					})
				}, 1800);
			} else {
				return;
			}

		});



	});
})(jQuery);
