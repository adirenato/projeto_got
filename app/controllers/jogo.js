module.exports.pergaminho = function(application, request, response){
	response.render("pergaminhos");
}

module.exports.aldeoes = function(application, request, response){
	response.render("aldeoes");
}

module.exports.jogo = function(application, request, response){
	if(request.session.autenticado)
	{
		response.send("Usuário pode prosseguir para o processo de inícia o jogo");	
	}else{
		response.send("Usuário não autenticado");	
	}
	
}

module.exports.sair = function(application, request, response){
	request.session.destroy();
	response.render("/", {validacao:{}});
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
	
	var conn = application.get('connection');
	var jogoDAO = new application.app.models.jogoDAO(conn);
	jogoDAO.login(bodyparse, request, response);

}