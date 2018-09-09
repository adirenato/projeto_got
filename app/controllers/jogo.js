module.exports.pergaminho = function(application, request, response){
	if(request.session.autenticado)
		response.render("pergaminhos")
	else
		response.render("index", {validacao: {}});
	
}

module.exports.aldeoes = function(application, request, response){
    if(request.session.autenticado)
		response.render("aldeoes")
	else
		response.render("index", {validacao: {}});
}

module.exports.jogo = function(application, request, response){
	if(request.session.autenticado)
	{
		var conn = application.get('connection');
		var jogoDAO = new application.app.models.jogoDAO(conn);
		var obj  = {usuario : request.session.usuario, senha: request.session.senha};
		//jogoDAO.login(obj, response);
		jogoDAO.iniciaJogo(obj, response);
	
	}else{
		response.send("Usuário não autenticado");	
	}
	
}

module.exports.sair = function(application, request, response){
	response.render("index", {validacao:{}});
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
	jogoDAO.login(bodyparse, request);
	jogoDAO.iniciaJogo(bodyparse, response);

}