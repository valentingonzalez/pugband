// Create language switcher instance
var lang = new Lang();
lang.dynamic('en', '/lib/ln/en.json');
lang.init({
    defaultLang: 'es'
});

$(document).ready(function() {
	// Parallax FX
	$(document).scroll(function(e, b) {
		var scrollTop  = $(this).scrollTop(),
			logoOffset = scrollTop/10;

		$('#mainLogo div:nth-child(1)').css({'margin-left': -logoOffset});
		$('#mainLogo div:nth-child(3)').css({'margin-left': logoOffset});
	})

	$('#mainNav .nav-item').click(function(e) {
		var $target = $($(this).attr('href'));

		$('html, body').animate({
			scrollTop: $target.offset().top
		}, 1500);
		e.preventDefault();
	})

	// Get all events from Bandsintown API
	getEvents();
})


//d033c3ad8b82dcbe0597d8b0b8c08478
function getEvents() {
	$.ajax({
		url: 'https://rest.bandsintown.com/artists/pug/events',
		type: 'GET',
		dataType: 'json',
		data: {app_id: 'd033c3ad8b82dcbe0597d8b0b8c08479'},
	})
	.done(function(data) {
		populateEvents(data);
	})
}
function populateEvents(events) {
	var $eventTemplate = $('.event-template');
	$.each(events, function(index, event) {
		var $event = $eventTemplate.clone().appendTo($eventTemplate.parent()),
			$link  = $event.children('a'),
			$venue = $event.find('.venue .text'),
			$day   = $event.find('.day'),
			$month = $event.find('.month'),
			$city  = $event.find('.city'),
			date   = new Date(event.datetime),
			months = new Array('ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC');
		$link.attr('href', event.url);
		$venue.html(event.venue.name);
		$city.html(event.venue.city+', '+event.venue.country);
		$day.html(date.getDate());
		$month.html(months[date.getMonth()]);
	});
	$eventTemplate.remove();
}