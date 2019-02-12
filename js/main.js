$(document).ready(function(){
	"use strict";
	//wow-js-active
	new WOW().init();
	//===============

	// main slider active
	$('.main-slider-active').owlCarousel({
	    loop:true,
	    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    nav:true,
	    autoplay:true,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	//===================

	// menu-fixed
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top>120)
		{
			$('header').addClass('header-bg');
		}
		else
			if($('header').hasClass('header-bg'))
			{
				$('header').removeClass('header-bg');
			}
	});
	// ===================
	
	// testimonial slider active
	$('.testimonial-active').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    autoplay:true,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	//===================

	// portfolio | mixitup
		var mixer = mixitup('.portfolio-control-active');
	// ==========================

	// portfolio-area | popup for image
	$('.portfolio-item').magnificPopup({
	  type: 'image',
	  gallery: {
	    enabled: true
	  },
	 
	});
	//=======================================

	// counterup js for badge-facts
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	// team slider active
	$('.team-slider-active').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayHoverPause:true,
	    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    nav:true,
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        }
	    }
	});
	//===================

	// popup for quick video

	$('.video-active').magnificPopup({
	  type: 'iframe',
	  iframe: {
		  patterns: {
		    youtube: {
		      index: 'youtube.com/', 

		      id: 'v=', 
		      src: 'https://www.youtube.com/embed/%id%?autoplay=1',
		    },

		  },

		  srcAction: 'iframe_src', 
		}
	  
	});
	//=======================================

	// logo-items js
	$('#logo-items').multislider({
		continuous:true,
		duration:5000,
	});
	// ==========================

	// one page nav 
	$('#menu-active').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	
	});

	//go to top
	$(window).scroll(function(){
		if($(this).scrollTop() > 150)
		{
			$('.goto-top').fadeIn();
		}
		else{
			$('.goto-top').fadeOut();
		}
	});
	$('.goto-top').click(function(){

		$('html ,body').animate({scrollTop : 0},800);

	});
	//=================================

	// slicknav js
	$(function(){
		$('#menu-active').slicknav({
			label:"",
		});
	});



}(jQuery));