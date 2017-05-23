$(document).ready(function() {
	$("p img").each(function() {
		var strA = "<a id='yourid' href='" + this.src + "'></a>";
		$(this).wrapAll(strA);
	});

	$("#yourid").fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',
	});
});
