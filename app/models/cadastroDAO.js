function cadastroDAO (connection){
	this._connection = connection;
}

cadastroDAO.prototype.cadastrar = function(usuario){
	var dbo = this._connection.db("got");

    console.log(usuario);

    var obj = {
		nome    : usuario.nome,
		senha   : usuario.senha,
		usuario : usuario.usuario,
		casa    : usuario.casa,
		moeda   :15,
		temor   : Math.floor(Math.random()*1000),
		sabedoria :Math.floor(Math.random()*1000),
		comercio : Math.floor(Math.random()*1000),
		magia    : Math.floor(Math.random()*1000)
	};
	dbo.collection("usuarios").insertOne(obj, function(err, res) {
		if (err) throw err;
		//dbo.close();
	});
}

module.exports = function(){
	return cadastroDAO;
}