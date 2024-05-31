$(document).ready(function(){

	// Scroll effect
	var $root = $('html, body');
  
	$('.box a').click(function() {
		$root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 70
		}, 1200);
		return false;
	});
	 
	 $('a.anchor').click(function() {
	  $root.animate({
		  scrollTop: $( $.attr(this, 'href') ).offset().top - 0
	  }, 1200);
	  return false;
  });
	 
	 
	 
	
   
  });
  
  
  
  
  
  
  
	AOS.init({      
		  duration: 1800,
	  easing: 'ease'
	});
  
  