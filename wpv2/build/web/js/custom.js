/**	
	* Template Name: Outlook
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/ 

	Custom JS
	
	1. FULL OVERLYAY SEARCH FORM
	2. SIDE MENU 
	3. HEADER
	4. MENU SMOOTH SCROLLING 
	5. MAIN SLIDER ( FLEX SLIDER ) 
	6. COUNTER
	7. OUR WORK GALLERY
	8. CLIENT SLIDE (SLICK SLIDER)  
	9. RETINA SUPPORT 
	10. FAQ ACCORDION
	11. CLIENTS LOGO (SLICK SLIDER)
	12. PRELOADER 	
	13. SCROLL TOP BUTTON
	14. HOVER DROPDOWN MENU
	15. MOBILE MENU CLOSE
	
**/

(function( $ ){


	/* ----------------------------------------------------------- */
	/*  1. FULL OVERLYAY SEARCH FORM
	/* ----------------------------------------------------------- */

   $('.ol-search-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.ol-search-full-overlay').addClass('ol-search-full-overlay-show');
        
		//searcbox focus
		
		 setTimeout(function() { $('#ol-overlay-search-form input[name="searchbox"]').focus() }, 100);
       
    });
   
    // when click colose btn
    
    $('.ol-search-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.ol-search-full-overlay').removeClass('ol-search-full-overlay-show');
		
    });
    
    
	/* ----------------------------------------------------------- */
	/*  2. SIDE MENU 
	/* ----------------------------------------------------------- */

   $('.ol-sidemenu-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.ol-side-menu-area').addClass('ol-side-menu-area-show');
       
    });
    
	// when click close btn side menu will colse 
	
    $('.ol-side-menu-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.ol-side-menu-area').removeClass('ol-side-menu-area-show');
		
    });
    
    // when click overlay bg side menu will colse 
    

    $('.ol-side-menu-area').on('click', function(event) {
	    
	   $(this).removeClass('ol-side-menu-area-show');
	   
    });
    
    // when click side menu inner
    
    $('.ol-side-menu').click(function(e){ 
	     e.stopPropagation(); 
	 });


	/* ----------------------------------------------------------- */
	/*  3. HEADER
	/* ----------------------------------------------------------- */
	 

	$(window).bind('scroll', function () {
		
    if ($(window).scrollTop() > 100) {
	    
        $('.ol-transparent-header').addClass('ol-transparent-header-fixed');
        
	    } else {
	        $('.ol-transparent-header').removeClass('ol-transparent-header-fixed');

	    }
	});


	/* ----------------------------------------------------------- */
	/*  4. MENU SMOOTH SCROLLING 
	/* ----------------------------------------------------------- */
	
		//MENU SCROLLING WITH ACTIVE ITEM SELECTED
	
  		// Cache selectors

		var lastId,
		topMenu = $(".ol-nav-scroll"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find('a[href^=\\#]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});
		
		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+20;
		  jQuery('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 2000);
		  e.preventDefault();
		});

		// Bind to scroll
		$(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("current")
		         .end().filter("[href=\\#"+id+"]").parent().addClass("current");
		   }           
		});
		
		

	/* ----------------------------------------------------------- */
	/*  5. MAIN SLIDER ( FLEX SLIDER ) 
	/* ----------------------------------------------------------- */ 
	
		$('.flexslider').flexslider({
		    animation: "slide"
		});


	/* ----------------------------------------------------------- */
	/*  6. COUNTER
	/* ----------------------------------------------------------- */


	$('.ol-about-us-counter-no').counterUp({
        delay: 10,
        time: 1000
    });


	/* ----------------------------------------------------------- */
	/*  7. OUR WORK GALLERY
	/* ----------------------------------------------------------- */

	$(".ol-work-item-info").fadeOut();
	$("#ol-work-item-details").fadeOut();
	
	// 	when click single item 
	
	$(".ol-work-item-thumbonil").on('click', function( e ){
		e.preventDefault();
		$("#ol-work-item-details").fadeOut();
		var portfolio_details = $(this).parent(".ol-work-item").find(".ol-work-item-info").html();
		$("#ol-work-item-details").fadeIn();
		$(".ol-work-item-details-content").html(portfolio_details);
		$("#ol-work-item-details").css('transform','scale(1)')
		$("#ol-work-item-details .ol-work-item-info").delay(8000).fadeIn("slow");
		
		// 	for smooth scroll to item details view section
		
		$('html, body').animate({
	        scrollTop: $("#ol-our-work").offset().top
	    }, 600);
		
	});
	
	
	// 	when click details close button
	
	$(".ol-work-details-close-btn").on('click', function(e){
		e.preventDefault();
		$("#ol-work-item-details").css('transform','scale(0)');
		$("#ol-work-item-details").fadeOut("slow");
	});


	/* ----------------------------------------------------------- */
	/*  8. CLIENT SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	$('.ol-clients-testimonial-slider').slick({
	  arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 500,
	  autoplay: true,
	  cssEase: 'linear'
	});
	
	/* ----------------------------------------------------------- */
	/*  9. RETINA SUPPORT
	/* ----------------------------------------------------------- */
	
		retinajs();
	

	/* ----------------------------------------------------------- */
	/*  10. FAQ ACCORDION
	/* ----------------------------------------------------------- */ 
	
	$('#ol-left-accordion .panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-plus").addClass("fa-minus");
	});
	
	//The reverse of the above on hidden event:
	
	$('#ol-left-accordion .panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-minus").addClass("fa-plus");
	});
	
	/* ----------------------------------------------------------- */
	/*  11. CLIENTS LOGO ( SLICK SLIDER )
	/* ----------------------------------------------------------- */
	
	$('.ol-clients-logo-slide').slick({
	  arrows: false,
	  infinite: true,
	  autoplay: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});	
	

	/* ----------------------------------------------------------- */
	/*  12. PRELOADER 
	/* ----------------------------------------------------------- */ 
	
	 $(window).load(function() {

      $('#ol-preloader-wrapper').delay(200).fadeOut('slow'); //  fade out
    
    });
    
    
	/* ----------------------------------------------------------- */
	/*  13. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */


	
	//Check to see if the window is top if not then display button


	  $(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
			$('.ol-scroll-top').addClass("ol-scroll-top-show");

	    } else {
			$('.ol-scroll-top').removeClass("ol-scroll-top-show");
	    }
	  });

	   
	  //Click event to scroll to top


	  jQuery('.ol-scroll-top').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });
	  
  /* ----------------------------------------------------------- */
  /*  14. HOVER DROPDOWN MENU
  /* ----------------------------------------------------------- */ 
  
  	// for hover dropdown menu
  
    $('ul.nav li.dropdown').hover(function() {
	    
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
      
    },
     
    function() {
	    
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
      
    });

	
	/* ----------------------------------------------------------- */
	/*  15. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 

	// 	when normal item click

	$('.ol-nav-scroll').on('click', 'li a', function() {
	  $('.ol-navbar .in').collapse('hide');
	});

	
	// 	when dropdown item click 
	$('.dropdown').on("click.bs.dropdown-toggle", function (e) { e.stopPropagation(); });
	
	
	

	
})( jQuery );
	