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

	$('.timeline').timelify({
		animLeft: "fadeInLeft",
		animRight: "fadeInRight",
		animCenter: "fadeInUp",
		animSpeed: 600,
		offset: 150
	});

};


$(document).ready(main);