$(document).ready(function(){
		//app.init();
		Router.addRoute({
			url: "/",
			callback: function(){
				//.js file for question page
			},
			default: true
		})
		Router.addRoute({
			url: "/category",
			callback: categoryPageCtrl.init
		});
		
		Router.addRoute({
			url: "/login",
			callback: loginPageCtrl.init
		});

		Router.init();
		// queries
		
	});