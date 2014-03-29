// defaultController.js
var defaultController = function( app ){

//ROUTES: ( _GET_)
//=========================
app.get('/', function( req, res ){
	console.log("/ :: in  HOME :: ");
	res.render("home");
});
//ROUTES: ( _POST_)
//=========================


app.get("/test/data", function( req, res ){
	data=[
	{"titulo":"Proyecto 1", "descripcion":"Proyecto A, descripcion de prueba"},
	{"titulo":"Proyecto 2", "descripcion":"Proyecto B, probando"},
	{"titulo":"Proyecto 3", "descripcion":"Proyecto C, Desc TEST"}
	];

	res.send(data);
});



};

module.exports = defaultController;
