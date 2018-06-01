let init = function(){
 	$(".example:first h3").prop("id", "Granados");
 	$("h1").text("Examen jQuery. Marzo de 2016. Jorge Granados Jurado");
    $("#customInput").val("Jorge Granados Jurado");
    let funcionesClick = [efectoInicial, subeYBaja, escondeElementosLista, sublistaComoAcordeon, soloElPrimerParrafito, ponFondoVerdeSeleccionados, aplicaClaseYAnima]
    $submits = $('div.example :submit');
    $submits.each(function(index, element){
      $(element).on('click', funcionesClick[index]);
    });
    $("#toggleCustom").on("click", ajax);
    //Llamamos al plugin
    $(".domtree h3").plugin();
    $('#miId').plugin({
        color: "red",
        height: "40%",
        tamanio: "600%"
    });
}
let efectoInicial = function () {
	$(this).fadeOut(1500).fadeIn(1500).delay(500);
}
let subeYBaja = function () {
	$('div.domtree h3').slideUp().slideDown();
}
let escondeElementosLista = function(){
	$('div.section li').fadeToggle().fadeToggle();
}
let sublistaComoAcordeon = function(){
	$('div.section li li').slideToggle().slideToggle();
}
let soloElPrimerParrafito = function () {
	$('p:first').animate({width: 'toggle'}, 2000, function(){
  		$(this).animate({height: 'toggle'}, 'slow');
	});
}
let ponFondoVerdeSeleccionados = function () {
	$(':selected').css({backgroundColor: "#0f0"})
}
let aplicaClaseYAnima = function(){
	$('code').addClass('highlight').animate({ marginLeft: 10}, 'fast')
}
let ajax = function () {
    $.getJSON("texto.json", function (resultado) {
        $.each(resultado, function (i, field) {
            $("#customInput").val(field);
        });
    });
}

     
jQuery.fn.plugin = function(options){
    let opts = $.extend(true, $.fn.plugin.defaults, options);
    $(this).css({backgroundColor: opts.color})
    	.on("click", function(){
	        $(this).css({
	            height: opts.height,
	            fontSize: opts.tamanio
	        });
    	}).on("dblclick", function(){
	        $(this).css({
	            height: '',
	            fontSize: ''
	        });
	    });
    return this;
}
jQuery.fn.plugin.defaults = {
        color: "yellow",
        height: "40%",
        tamanio: "500%"
    };


$(init);
