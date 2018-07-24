$(document).ready(function() {
                $('.select').msDropdown();
            $('.slider').slick({
                            	
                              autoplay: false,
                              autoplaySpeed: 2000,
                 				slidesToShow: 1,
                  slidesToScroll: 1,
                              infinite: true,
                              speed: 500,
                              fade: false,
                              arrows:true,
                              dots:false,
                                });
             $('nav>ul').clone().appendTo('.side_bar');
          
             
		$('#nav-icon').click(function(){
		$('body').toggleClass('open');
	});

          
           $('.side_bar ul li a').click(function(){
           $(this).parent().find('>ul').slideToggle();
            $(this).parent().siblings().find('>ul').slideUp();
           
			$(this).parent().toggleClass('active');
			$(this).parent().siblings().removeClass('active')
		});
             // FOR Equalheight --------------------------

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.equal');
});

$(window).resize(function(){
  equalheight('.equal');
});

$(document).ready(function(){
  equalheight('.equal');
});

  });
          