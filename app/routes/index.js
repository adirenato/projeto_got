module.exports = function(application){
	application.get('/', function(request, response){
		application.app.controllers.index.index(application, request, response);
	});

	application.post("/login", function(request, response){
		application.app.controllers.jogo.login(application, request, response);
	});

	
}