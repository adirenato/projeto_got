module.exports = function(application){
	application.get("/aldeoes", function(request, response){
		application.app.controllers.jogo.aldeoes(application, request, response);

	});

	application.get("/pergaminho", function(request, response){
		application.app.controllers.jogo.pergaminho(application, request, response);
	});
	
	application.get("/jogo", function(request, response){
		application.app.controllers.jogo.jogo(application, request, response);
	});

	application.get("/sair", function(request, response){
		application.app.controllers.jogo.sair(application, request, response);
	});

	application.post("/acao_aldeao", function(request, response){
		application.app.controllers.jogo.acao_aldeao(application, request, response);
	});	


}