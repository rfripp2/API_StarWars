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
		var usuario = new Usuario(nombre,apellido,username,email,password);
		console.log(usuario);
		localstorage(usuario);

	})
}




