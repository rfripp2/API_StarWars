
var estado = true;
var estado1 = true;

function clearData(){
	$("#first").html("");
	$("#second").html("");
	$("#third").html("");
	$('#uno').html("");
	$('#dos').html("");
	$('#tres').html("");
}


API = function(){

$("#planets").on("click",function(){
		$.ajax({
                url: "http://swapi.co/api/planets/",
                type: 'get',
                dataType: 'json',
                success: function(pepe) {
                    console.log("llego pepe: " + pepe);
                    for (var i in pepe.results) {
                        console.log(pepe.results[i]);
                        var resultados = pepe.results[i];
                 
                        if(estado){
                        $("#first").html("Nombre");
                        $("#second").html("Rotation Period");
                        $("#third").html("Orbital Period");

                        $('#uno').append('<div><h6>' + resultados.name + '</h6></div>')
                        $('#dos').append('<div><h6>' + resultados.rotation_period + '</h6></div>')
                        $('#tres').append('<div><h6>' + resultados.orbital_period + '</h6></div>')
                    }
                }
                estado = false;
                },
                error: function(pepe) {
                    console.log("no volvio nada-----");
                }

            })
	})

}