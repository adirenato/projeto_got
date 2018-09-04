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
	response.render("/");
}

module.exports.logar = function(application, request, response){
	
}