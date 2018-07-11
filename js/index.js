//window.onload = function() {
//	click_scrol = function() {
//		var scroll_offset = $("#aa").offset().top;
//		$("body").animate({
//			scrollTop: scroll_offset
//		}, 800); //800 控制点击滚动条向下滑动的速度（越大越慢）
//		alert(1)
//	}

//	click_scrol2 = function() {
//		var scroll_offset = $("#aaa").offset().top;
//		$("body").animate({
//			scrollTop: scroll_offset
//		}, 800);
//		alert(2)
//	}
//
//	click_scrol3 = function() {
//		var scroll_offset = $("#aaaa").offset().top;
//		$("body").animate({
//			scrollTop: scroll_offset
//		}, 800);
//		alert(3)
//	}
//}
//	function aaa(){
//		alert(1111);
//	}





















	$(window).scroll( function (){
        var  topScroll = $(window).scrollTop();
        var topPin = $('#aaaa').offset().top;
        alert(topPin);
    });
















