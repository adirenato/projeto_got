function JogoDAO (connection){
	this._connection = connection;
}

JogoDAO.prototype.login =  function(pObjeto, request, response){
	//console.log(pObjeto);
	var dbo = this._connection.db("got");
    dbo.collection("usuarios").find({usuario : pObjeto.usuario, senha: pObjeto.senha}).toArray(function(err, result) {
		if (err) throw err;
		
		if(result.length != 0 || result != null){
			request.session.autenticado = true;
			this.iniciaJogo(result, response);
		 }else{
			response.render("index", {validacao : {msg: "usuário não cadastrado"}}); 
		 }
		 
	});
}


JogoDAO.prototype.iniciaJogo =  function(pObjeto, response){
	
	var dbo = this._connection.db("got");
    dbo.collection("usuarios").find({usuario : pObjeto.usuario, senha: pObjeto.senha}).toArray(function(err, result) {
		if (err) throw err;
		
		if(result.length != 0 || result != null){
			response.render("jogo", {parametro : result[0]});
		 }else{
			response.render("index", {validacao : {msg: "usuário não cadastrado"}}); 
		 }
	});
}

module.exports = function(){
	return JogoDAO;
}

