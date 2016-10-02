//REGISTRO CONSTRUCTOR DATA

datosUsuarios = function(){
	function Usuario(nombre,apellido,username,email,password){
		this.nombre = nombre;
		this.apellido = apellido;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	$("#register").on("click",function(event){
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();
		var username = $("#username").val();
		var email = $("#email").val();
		var password = $("#pw").val();


		if ($("#nombre").val() == "" || $("#apellido").val() == "" || $("#username").val() == "" ||
			$("#email").val() == "" || $("#pw").val() == ""){
			$("#message").html("<p>Complete all the fields</p>");
		}else if($("#username").val() == datos.username){
			$("#message").html("<p>This username already exists</p>");
		}else if($("#email").val() == datos.email){
			$("#message").html("<p>This email already exists</p>");
		}else{
		var usuario = new Usuario(nombre,apellido,username,email,password);
		localstorage(usuario);
		view = undefined;
	    router.evalRoute(view);
	}
	
	});
}




