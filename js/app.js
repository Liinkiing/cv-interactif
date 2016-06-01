var main = function () {

	var timeline_items = $('.timeline-items li');

	$(document).scroll(function () {
		var scrollPos = $(window).scrollTop();
		console.log(scrollPos);
		var header = $('header');
		if (scrollPos > 50) {
			$(header).addClass('collapsed');
			$('header .hidden.col-sm-8').removeClass('hidden')
		} else {
			$(header).removeClass('collapsed');
			$('header .col-sm-8').addClass('hidden')


		}

		$('.timeline').timelify();
	});


};


$(document).ready(main);