var initHeight = $(window).height() / 10;
var initHeight2 = $(window).height() / 20;
var scrollTrigg = $(window).height() * 0.5;

$(document).ready(function() {
    // NUDGE POSITIONING OF PORTRAIT SVG UP A BIT
    $('#about').css('margin-top', '-' + initHeight +'px');
    $('.topcurls').css('top', '-' + initHeight2 +'px');


});

// JUMP USER ON INITIAL SCROLL
$(window).ready(function(){
	if ($(this).scrollTop() < 10) {
	    $(this).one('scroll', function(){
	    	$('#scrolldown').trigger('click');
	    });
	} 
});

// BIND VERTICAL LINES TO SCROLL
$(window).bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0) {
         $('#vertical-lines line').each(function(i, line) {
	    	if (($(window).scrollTop() > parseInt($(line).offset().top) - 300) && (parseInt($(line).attr('y2')) < parseInt($(line).attr('maxY2')))) {
		        $(line).attr('y2', parseInt($(line).attr('y2')) + 3);
	    	}
	    });
     }else {
         $('#vertical-lines line').each(function(i, line) {
         	if (($(window).scrollTop() < parseInt($(line).offset().top) - 50) && ($(line).attr('y2') > $(line).attr('y1'))) {
     	        $(line).attr('y2', parseInt($(line).attr('y2')) - 3);
         	}
         });
     }
 })

// TRIGGER LINE ANIMATIONS
$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('#draw-01 path, #draw-02 path, #draw-03 path').css('display','block');
    } 
    if ($(this).scrollTop() > scrollTrigg) {
        $('#draw-06 path, #fade path, #fade circle, #about-blurb, #pic').css('display','block');
    } 
    if ($(this).scrollTop() > (scrollTrigg + 100) ) {
        $('#draw-07 path').css('display','block');
    }
    if ($(this).scrollTop() > (scrollTrigg + 400) ) {
        $('#draw-08 path').css('display','block');
        $('.work svg').css('display','block');
    } 
    if ($(this).scrollTop() > (scrollTrigg + 800) ) {
        $('.work svg').css('display','block');
    } 
});

// SUBTLE PARALLAX BG
function calcParallax(tileheight, speedratio, scrollposition) {
  return ((tileheight) - (Math.floor(scrollposition / speedratio) % (tileheight+1)));
}

window.onload = function() {

  // CAROUSEL ON SUB PAGES
  $('.slickSlide').slick({
        slidesToShow: 3,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
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

  window.onscroll = function() {
    var posX = (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : window.pageXOffset;
    var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;
    
    var ground = document.getElementById('ground');
    var groundparallax = calcParallax(200, 3, posY);
    ground.style.backgroundPosition = "0 " + groundparallax + "px";
  }

}

// SMOOTH SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});












