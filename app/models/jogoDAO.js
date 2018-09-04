function JogoDAO (connection){
	this._connection = connection;
}

JogoDAO.prototype.login = function(usuario){
	
	var dbo = this._connection.db("got");
    dbo.collection("usuarios").find({nome : usuario.nome, senha: usuario.senha}).toArray( function(err, result) {
		if (err) throw err;
		console.log(result);
	});
	
}

module.exports = function(){
	return JogoDAO;
}