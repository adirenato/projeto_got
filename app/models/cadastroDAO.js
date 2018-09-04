function cadastroDAO (connection){
	this._connection = connection;
}

cadastroDAO.prototype.cadastrar = function(usuario){

	var collecion = this._connection.db("got").collection("usuarios");
   	collecion.insertOne({
				nome    : usuario[0].nome,
				senha   : usuario[0].senha,
				usuario : usuario[0].usuario,
				casa    : usuario[0].casa,
				moeda   :15,
				temor   : Math.floor(Math.random()*1000),
				sabedoria :Math.floor(Math.random()*1000),
				comercio : Math.floor(Math.random()*1000),
				magia    : Math.floor(Math.random()*1000)
			});
}
   


module.exports = function(){
	return cadastroDAO;
}