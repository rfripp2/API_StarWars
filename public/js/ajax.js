
var estado = true;

function clearData(){
	$('#uno').html("");
	$('#dos').html("");
	$('#tres').html("");
	$('#cuatro').html("");
	$('#cinco').html("");
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
                        $("#first").html("<h4>" + "Name" + "</h4>");
                        $("#second").html("<h4>" + "Climate" + "</h4>");
                        $("#third").html("<h4>" + "Terrain" + "</h4>");
                        $("#fourth").html("<h4>" + "Rotation Period" + "</h4>");
                        $("#fifth").html("<h4>" + "Orbital Period" + "</h4>");

                        $('#uno').append('<h6>' + resultados.name + '</h6>')
                        $('#dos').append('<div><h6>' + resultados.climate + '</h6></div>');
                        $('#tres').append('<div><h6>' + resultados.terrain + '</h6></div>');
                        $('#cuatro').append('<div><h6>' + resultados.rotation_period + '</h6></div>');
                        $('#cinco').append('<div><h6>' + resultados.orbital_period + '</h6></div>');
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
                        $("#first").html("<h4>" + "Name" + "</h4>");
                        $("#second").html("<h4>" + "Hair Color" + "</h4>");
                        $("#third").html("<h4>" + "Skin Color" + "</h4>");
                        $("#fourth").html("<h4>" + "Mass" + "</h4>");
                        $("#fifth").html("<h4>" + "Height" + "</h4>");

                        $('#uno').append('<div><h6>' + resultados.name + '</h6></div>');
                        $('#dos').append('<div><h6>' + resultados.hair_color + '</h6></div>');
                        $('#tres').append('<div><h6>' + resultados.skin_color + '</h6></div>');
                        $('#cuatro').append('<div><h6>' + resultados.mass + '</h6></div>');
                        $('#cinco').append('<div><h6>' + resultados.height + '</h6></div>');
                    }
                }
                estado = false;
                },
                error: function(data) {
                    console.log("no volvio nada-----");
                }
            })
	})


$("#starships").on("click",function(){
	estado = true;
	clearData();
		$.ajax({
                url: "http://swapi.co/api/starships/",
                type: 'get',
                dataType: 'json',
                success: function(data) {
                    for (var i in data.results) {
                        console.log(data.results[i]);
                        var resultados = data.results[i];
                 
                        if(estado){
                        $("#first").html("<h4>" + "Name" + "</h4>");
                        $("#second").html("<h4>" + "Model" + "</h4>");
                        $("#third").html("<h4>" + "Manufacturer" + "</h4>");
                        $("#fourth").html("<h4>" + "Consumables" + "</h4>");
                        $("#fifth").html("<h4>" + "Crew" + "</h4>");

                        $('#uno').append('<div><h6>' + resultados.name + '</h6></div>');
                        $('#dos').append('<div><h6>' + resultados.model + '</h6></div>');
                        $('#tres').append('<div><h6>' + resultados.manufacturer + '</h6></div>');
                        $('#cuatro').append('<div><h6>' + resultados.consumables + '</h6></div>');
                        $('#cinco').append('<div><h6>' + resultados.crew + '</h6></div>');
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

