function cadastroDAO (connection){
	this._connection = connection;
}

cadastroDAO.prototype.cadastrar = function(usuario, resquest, response){
	var dbo = this._connection.db("got");

   // console.log(usuario);

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
		resquest.session.autenticado = true;
		var iniciaJogo = new application.app.models.jogoDAO(this._connection);  
		iniciaJogo.iniciaJogo(usuario, response);
		return ;
	});
	response.render("/", {validacao :{msg: "Usuário não cadastrado"}});
}

module.exports = function(){
	return cadastroDAO;
}