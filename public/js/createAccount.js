//Create Account
$("#register").on("click",function(event){
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();
		var username = $("#username").val();
		var email = $("#email").val();
		var password = $("#pw").val();
		var usuario = new Usuario(nombre,apellido,username,email,password);
		localstorage(usuario);
		app.loadTemplate("contenedor","inicio",inicio);

	})