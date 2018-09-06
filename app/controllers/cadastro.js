module.exports.cadastro = function(request, response){
	response.render("cadastro",{validacao:{}, usuarios :{}});
}

module.exports.cadastrar = function(request, response, application){
	var bodyparse = request.body;
   
	request.assert("nome","O campo nome não pode ser vazio").notEmpty();
	request.assert("usuario","O campo usuario não pode ser vazio").notEmpty();
	request.assert("senha","O campo senha não pode ser vazio").notEmpty();
	request.assert("casa","O campo casa não pode ser vazio").notEmpty();

	var error =  request.validationErrors();

	if (error){
		response.render("cadastro", {validacao : error, usuarios : bodyparse});
		return;
	}
    var cadastroDAO = new application.app.models.cadastroDAO(application.get('connection'));
	cadastroDAO.cadastrar(bodyparse, request, response);
      
}