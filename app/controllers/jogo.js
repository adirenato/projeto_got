module.exports.pergaminho = function(application, request, response){
	response.render("pergaminhos");
}

module.exports.aldeoes = function(application, request, response){
	response.render("aldeoes");
}

module.exports.jogo = function(application, request, response){
	if(request.session.autenticado)
	{
		var usuario = request.session.usuario;
		var casa    = request.session.casa;
		model= application.app.models.jogoDAO(application.get('connection'));
		model.iniciaJogo(response, usuario);
	}else{
		response.send("Usuário não autenticado");	
	}
	
}

module.exports.sair = function(application, request, response){

	
	if (request.session.destroy()) response.render("/", {validacao:{}});
	console.log("sessão destruida");
	
}

module.exports.login = function(application, request, response){
	var bodyparse = request.body;

	request.assert("usuario", "o campo usuário não pode ser vazio").notEmpty();
	request.assert("senha", "o campo senha não pode ser vazio").notEmpty();

	var error =  request.validationErrors();
 
	if(error){
		response.render("index", {validacao : error});
		return;
	}
	
	var jogoDAO = new application.app.models.jogoDAO(application.get('connection'));
	
	jogoDAO.login(bodyparse, request, response, function(err, result){
		if(err) throw console.log(err);

	});
	
	
	response.render("jogo");
}