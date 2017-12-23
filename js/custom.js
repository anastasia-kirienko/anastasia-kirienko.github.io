jQuery(document).ready(function($){

	$('#fullpage').fullpage({
	    anchors: ['home', 'howitworks','gallery','advantages','contacts'],
	    menu: '#menu',
	    responsiveWidth: 768,
	    scrollOverflow: true,
	    verticalCentered:true
	});

})
