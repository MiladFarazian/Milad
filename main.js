$(document).ready(function(){
  $('.header').height($(window).height());
})
$(function(){
	$("btn btn-outline-secondary btn-lg").click(function(){
		if(this.hash){
			var hash = this.hash.substr(1);
			console.log(hash);
			
			var $toElement = $("a[name="+hash+"]");
			var toPosition = $toElement.position().top;
			
			$("body,html").animate({
				scrollTop:toPostion
			},2000,"easeOutExpo");
			
			return false;
		}		
	});
	if(location.hash){
		var hash = location.hash;
		window.scroll(0.1);
		$("a[href="+hash+"]").click();

	}
})