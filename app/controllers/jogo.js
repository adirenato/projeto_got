module.exports.pergaminho = function(application, request, response){
	response.render("pergaminhos");
}

module.exports.aldeoes = function(application, request, response){
	response.render("aldeoes");
}

module.exports.jogo = function(application, request, response){
	response.render("jogo");
}

module.exports.sair = function(application, request, response){
	if (request.session.destroy()) response.render("/", {validacao:{}});
	
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
	
	var jogoDAO = new application.app.controllers.jogoDAO(application.get('mongoDB'));
	
	jogoDAO.login(bodyparse, function(err, result){

	});
	
	
	response.render("jogo");
}