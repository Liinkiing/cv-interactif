var main = function () {


	$(document).scroll(function () {
		var scrollPos = $(window).scrollTop();
		var header = $('header');
		if (scrollPos > 50) {
			$(header).addClass('collapsed');
			$('header .hidden.col-sm-8').removeClass('hidden')
		} else {
			$(header).removeClass('collapsed');
			$('header .col-sm-8').addClass('hidden')
		}


	});

	$('#openConv').click(function(e) {
		var messages = $('.conversation .message, .action-message');
		var i = 100;
		$(messages).each(function(){
			i += 300;
			$(this).addClass('animated');
			if($(this).index() == messages.length){
				$(this).prev().addClass('animated').addClass('fadeInUp').css({"animation-delay" : i + "ms", "animation-duration": "1500ms"})
				$(this).addClass('fadeInUp').css({"animation-delay" : i + "ms", "animation-duration": "1500ms"})
			}
			else if($(this).index() % 2 == 0 ){
				$(this).addClass('fadeInLeft').css({"animation-delay" : i + "ms", "animation-duration": "700ms"});
			} else {
				$(this).addClass('fadeInRight').css({"animation-delay" : i + "ms", "animation-duration": "700ms"});
			}
		});
	});

	$('.timeline').timelify({
		animLeft: "fadeInLeft",
		animRight: "fadeInRight",
		animCenter: "fadeInUp",
		animSpeed: 600,
		offset: 150
	});


};


$(document).ready(main);