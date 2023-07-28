/* ===================================
    Table of Content
====================================== */


/*  1.1 Scroll to Fix Top
	1.2 Smooth Scrolling to links
 	1.3 Side Menu
	1.4 Banner Text Animation
	1.5 Data Counter
	1.6 Schedule Tabs
	1.7 WOW Animations
	1.8 Custom Cursor
*/

var cursor = $(".custom-cursor");
var mouseX = 0,
	mouseY = 0;

$(document).ready(function () {
	"use strict";

	/* ===================================
			 1.1 Scroll to Fix Top
	====================================== */

	/*scroll to appear*/

	$(window).bind('scroll', function () {
		var navHeight = $(window).height() - 50;
		if ($(window).scrollTop() > navHeight) {
			$('.navbar').addClass('navbar-fixed-top');
		} else {
			$('.navbar').removeClass('navbar-fixed-top');
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin

	$('a.page-scroll').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	/* ===================================
			 1.2 Smooth Scrolling to links
	====================================== */

	$(document).ready(function () {
		// Add smooth scrolling to all links
		$("a").on('click', function (event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function () {

				});
			} // End if
		});
	});
	
	/* ===================================
	        	1.3 Side Menu
	====================================== */

	var navBtn = $('.nav-btn');

	function toggleNav() {
		navBtn.toggleClass('open');
		$('.slide-menu').toggleClass('open');
		$('.close_side_menu').toggleClass('open');
	}
	navBtn.click(function () {
		toggleNav();
	});
	$('.slide-menu ul li a').click(function () {
		toggleNav();
	});
	
	
	/* ===================================
			1.4 Banner Text Animation
	====================================== */

	consoleText(['Summit 2019'], "text");
	consoleText(['2019'], "textnew");

	function consoleText(words, id) {
		var letterCount = 1;
		var x = 1;
		var waiting = false;
		var target = document.getElementById(id);
		window.setInterval(function () {

			if (letterCount === 0 && waiting === false) {
				waiting = true;
				target.innerHTML = words[0].substring(0, letterCount);
				window.setTimeout(function () {
					var usedWord = words.shift();
					words.push(usedWord);
					x = 1;
					letterCount += x;
					waiting = false;
				}, 500);
			} else if (letterCount === words[0].length + 1 && waiting === false) {
				waiting = true;
				window.setTimeout(function () {
					x = -1;
					letterCount += x;
					waiting = false;
				}, 1000);
			} else if (waiting === false) {
				target.innerHTML = words[0].substring(0, letterCount);
				letterCount += x;
			}
		}, 70);
	}
	
	
	/* ===================================
	        	1.5 Data Counter
	====================================== */

	$('.counter').each(function () {
		var $this = $(this),
			countTo = $this.attr('data-count');

		$({
			countNum: $this.text()
		}).animate({
			countNum: countTo
		}, {
			duration: 500,
			easing: 'linear',
			step: function () {
				$this.text(Math.floor(this.countNum));
			},
			complete: function () {
				$this.text(this.countNum);
				//alert('finished');
			}
		});
	});


	/* ===================================
			 	1.6 Schedule Tabs
	====================================== */

	var tabs = $('.tabs');
	var activeItem = tabs.find('.active');
	$(".selector").css({
		"left": activeItem.position.left + "px",
	});

	$(".tabs").on("click", "a", function (e) {
		e.preventDefault();
		$('.tabs a').removeClass("active");
		$(this).addClass("active");
		var redirect = $(this).attr("data-id");
		$('.tab-pane').hide();
		$('#' + redirect).show();

		var itemPos = $(this).position();
		$(".selector").css({
			"left": itemPos.left + "px"
		});
	});


	/* ===================================
			 1.7 WOW Animations
	====================================== */

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: false, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}


	/* ===================================
			 1.8 Custom Cursor
	====================================== */

	$(document).mousemove(function (e) {

		$('.custom-cursor')
			.eq(0)
			.css({
				left: e.pageX,
				top: e.pageY
			});
		setTimeout(function () {
			$('.custom-cursor')
				.eq(1)
				.css({
					left: e.pageX,
					top: e.pageY
				});
		}, 400);
		setTimeout(function () {
			$('.custom-cursor')
				.eq(2)
				.css({
					left: e.pageX,
					top: e.pageY
				});
		}, 200);
	});

	$(document).on("mousemove", function (e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});
	$("a,button").on("mouseenter", function () {
		cursor.addClass("active");
	});
	$("a,button").on("mouseleave", function () {
		cursor.removeClass("active");
	});
	
	
	
	/*************************
	     Back to top
	*************************/
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200); // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200); // Else fade out the arrow
		}
	});
	$('#return-to-top').click(function () { // When arrow is clicked
		$('body,html').animate({
			scrollTop: 0 // Scroll to top of body
		}, 500);
	});
	
});
