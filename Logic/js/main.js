$(function () {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $ ('.posts .' + get_id);

		$ ('.post').not(get_current).hide(800);
		get_current.show(800);
	});

	$ ('#all').click(function() {
		$ ('.post').show(800);
	});

});
