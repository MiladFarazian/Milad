$(document).ready(function(){
  $('.header').height($(window).height());
})
$(function(){
	$('#work-expereince').click(function(){
		$('html,body').animate({
			scrollTop:('work-experience').offset().top
		}, 'slow')
	})
})

