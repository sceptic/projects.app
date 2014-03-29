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

};

module.exports = defaultController;
