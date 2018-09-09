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

module.exports.acao_aldeao = function(application, request, response){
	bodyparse =  request.body;
	request.assert("acao","Você deve escolher uma ação").notEmpty();
	request.assert("quantidade","A quantidade não deve ser vazia").notEmpty();
	
	var valida = request.validationErrors();

	if(valida){
		response.redirect("/jogo?haserro=E");
		return;
	}

	var conn = application.get('connection');
	var jogoDAO = new application.app.models.jogoDAO(conn);
	var date = Date();
	var tempo = null;
	
	switch (body.acao){
		case 1 : tempo = 1 * 60 * 6000;
		case 2 : tempo = 2 * 60 * 6000;
		case 3 : tempo = 5 * 60 * 6000;
		case 4 : tempo = 5 * 60 * 6000;
	}

	tempo = date.getDate() + tempo;
	bodyparse.usuario = request.session.usuario;
	bodyparse.termina_em = tempo;

	jogoDAO.acaoAldeao(bodyparse, response);
	
}

module.exports.jogo = function(application, request, response){
	if(request.session.autenticado)
	{
		var hasMsg =  request.query.hasmsg;
		
       
		var conn = application.get('connection');
		var jogoDAO = new application.app.models.jogoDAO(conn);
		var obj  = {usuario : request.session.usuario, senha: request.session.senha};
		//jogoDAO.login(obj, response);
		jogoDAO.iniciaJogo(obj, response, hasMsg);
	
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
	jogoDAO.iniciaJogo(bodyparse, response, "");

}
