function JogoDAO (connection){
	this._connection = connection;
}

JogoDAO.prototype.login = function(pObjeto, request, response, callback){
	//console.log(pObjeto);
	var dbo = this._connection.db("got");
	dbo.collection("usuarios").find({usuario : pObjeto.usuario, senha: pObjeto.senha}).toArray(function(err, result) {
		if (err) throw err;
		 if(result[0].nome != ''){
			request.session.autenticado = true;
			request.session.casa = result[0].casa;
			request.session.usuario = result[0].usuario;
			
		 }else{
			 request.session.autenticado = false;
			 console.log("não encotrado");
		 }
	});
	
}

JogoDAO.prototype.iniciaJogo= function(response, usuario){
	//console.log(pObjeto);
	var dbo = this._connection.db("got");
	dbo.collection("usuarios").find({usuario : usuario}).toArray(function(err, result) {
		if (err) throw err;
		 if(result[0].nome != ''){
		    console.log("inicia jogo -"+ result);
			response.render("jogo", {parametros : result[0]});
		 }
	});
	
}

module.exports = function(){
	return JogoDAO;
}

