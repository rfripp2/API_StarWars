
var estado = true;

function clearData(){
	$('#uno').html("");
	$('#dos').html("");
	$('#tres').html("");
}

API = function(){
$("#planets").on("click",function(){
	estado = true;
	clearData();
		$.ajax({
                url: "http://swapi.co/api/planets/",
                type: 'get',
                dataType: 'json',
                success: function(data) {
                    for (var i in data.results) {
                        console.log(data.results[i]);
                        var resultados = data.results[i];
                 
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
                error: function(data) {
                    console.log("no volvio nada-----");
                }
            })
	})


$("#people").on("click",function(){
	estado = true;
	clearData();
		$.ajax({
                url: "http://swapi.co/api/people/",
                type: 'get',
                dataType: 'json',
                success: function(data) {
                    for (var i in data.results) {
                        console.log(data.results[i]);
                        var resultados = data.results[i];
                 
                        if(estado){
                        $("#first").html("Nombre");
                        $("#second").html("Height");
                        $("#third").html("Mass");

                        $('#uno').append('<div><h6>' + resultados.name + '</h6></div>')
                        $('#dos').append('<div><h6>' + resultados.height + '</h6></div>')
                        $('#tres').append('<div><h6>' + resultados.mass + '</h6></div>')
                    }
                }
                estado = false;
                },
                error: function(data) {
                    console.log("no volvio nada-----");
                }
            })
	})

}