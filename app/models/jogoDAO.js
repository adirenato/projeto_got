function JogoDAO (connection){
	this._connection = connection;
}

JogoDAO.prototype.login =  function(pObjeto, request, response){
	//console.log(pObjeto);
	var dbo = this._connection.db("got");
    dbo.collection("usuarios").find({usuario : pObjeto.usuario, senha: pObjeto.senha}).toArray(function(err, result) {
		if (err) throw err;
		if(result[0].nome != ''){
			request.session.autenticado = true;
			request.session.casa = result[0].casa;
			request.session.usuario = result[0].usuario;
			response.render("jogo", {parametros : result[0]});
			return;
		 }else{
			response.render("index", {validacao : {msg: "usuário não cadastrado"}}); 
		 }
		 
	});
}

module.exports = function(){
	return JogoDAO;
}

