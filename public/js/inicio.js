//INICIO


function inicio() {

	$("#login").on("click",function(){

		var user = $('#userlogin').val();
		var pw = $("#pwlogin").val();
	

		if(datos.username == user && datos.password == pw){
		console.log("usuario correcto");
		app.loadTemplate("contenedor","dashboard",API);

	    }else{
	    	console.log("usuario incorrecto")
	    }

	})

	for (var i in localStorage){
		 datos = localStorage.getItem(i);
		 datos = JSON.parse(datos);
	}

}










