//	INI
router = function(){
	var Router = {};
			var view;

	Router.evalRoute = function(view){
		
		if(localStorage.length == 0){
			app.loadTemplate("contenedor","createAccount",datosUsuarios);
		}else if(view == undefined){
            app.loadTemplate("contenedor","inicio",inicio);
        }else if(view == "createAccount"){
        	app.loadTemplate("contenedor","createAccount",datosUsuarios)
        }
        	app.loadTemplate("navbar","nav",rutas);
	}
	return Router;
}();



app = function(router) {
    var myApp = {};
    myApp.init = function() {
        $(document).ready(function() {
            console.log("-Se inicio  la app-");
            router.evalRoute();

        });
    }();

    myApp.loadTemplate = function(load, partialName, callback) {
        $("#" + load).load("../partes/" + partialName + ".html", callback);
    }
    return myApp;
}(router);