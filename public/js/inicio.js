//INICIO


function inicio() {

	$("#login").on("click",function(){
		var user = $('#userlogin').val();
		var pw = $("#pwlogin").val();

		if(datos.username == user && datos.password == pw){
		app.loadTemplate("contenedor","dashboard",API);
	    }else{
	    	$(".message").html("<p>Wrong User or Pw</p>");
	    }
	})

	for (var i in localStorage){
		 datos = localStorage.getItem(i);
		 datos = JSON.parse(datos);
	}
}










