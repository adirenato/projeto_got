module.exports = (application)=>{
	application.get("/cadastro", (request, response)=>{
		application.app.controllers.cadastro.cadastro(request, response);
	});

	application.post("/cadastrar", (request, response)=>{
		application.app.controllers.cadastro.cadastrar(request, response, application);
	});
}