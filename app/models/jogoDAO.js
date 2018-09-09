function JogoDAO (connection){
	this._connection = connection;
}

JogoDAO.prototype.login =  async function(pObjeto, request){
	//console.log(pObjeto);
	var dbo = this._connection.db("got");
    await dbo.collection("usuarios").find({usuario : pObjeto.usuario, senha: pObjeto.senha}).toArray(function(err, result) {
		if (err) throw err;
		
		if(result.length != 0 || result != null){
			request.session.autenticado = true;
			request.session.usuario = pObjeto.usuario;
			request.session.senha = pObjeto.senha;
		 }
		 
	});
}


JogoDAO.prototype.iniciaJogo =  function(pObjeto, response){
	
	var dbo = this._connection.db("got");
    dbo.collection("usuarios").find({usuario : pObjeto.usuario, senha: pObjeto.senha}).toArray(function(err, result) {
		if (err) throw err;
//		console.log(result);
		if(result.length > 0 ){
			response.render("jogo", {parametro : result[0]});
		 }else{
			response.render("index", {validacao : {msg: "usuário não cadastrado"}}); 
		 }
	});
}

module.exports = function(){
	return JogoDAO;
}

