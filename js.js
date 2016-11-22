$(document).ready(function() {
	$('#campofecha').datepicker();
	$('#menu').menu();
	$('.caja').draggable();
	$('#dropable').droppable({
		drop: function (e, ui) {
			$(this).css({ 'background-color' : '#108803'});
			$(this).html('Caja arrastrable DENTRO');
		},
		out: function (e, ui) {
			$(this).css({'background-color':'#DFDFDF'});
			$(this).html('Caja dropable');
		}
	});

})