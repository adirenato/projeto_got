module.exports.cadastro = function(request, response){
	response.render("cadastro",{validacao:{}, campos :{}});
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
    


    

    var UsuarioDAO = new application.app.models.cadastroDAO();

    UsuarioDAO.cadastrar(bodyparse, function(error, result){
         
    }); 
	
	response.send("pode cadastrar e mudar de página");	
}