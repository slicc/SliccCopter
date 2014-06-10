(function (homeController){

	homeController.init = function(app){

		//home routing
		app.get("/", function(req, res){
			res.render("index", {title: "Express + Vash"})
		});

	};

})(module.exports);