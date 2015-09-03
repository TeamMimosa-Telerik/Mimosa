"use strict"
import SecondPage from '../view/categoryPageCreation.js';

var categoryQuestions;
var typeCategory;

var categoryPageIIFE = (function(){
	// var categoryQuestions;
	function init() {

		var $body = $('body');
		$body.empty();
		var secondPage = SecondPage.secondPageCreation();
		$body.append(secondPage);

		if (localStorage.getItem("category") === null) {
			localStorage.setItem("category", JSON.stringify({'type': "", 'currentQuestion': 0}));
		}

		if (localStorage.getItem("badge") === null) {
	        var badges = { 'kids': false, 'algo': false, 'school': false, 'software':false };
	        localStorage.setItem('badge', JSON.stringify(badges));
	    }


		var retrievedObject = localStorage.getItem('category');
    
    	var badgesObject = JSON.parse(localStorage.getItem('badge'));


	    var category = JSON.parse(retrievedObject);
    	$('#first-category-btn').removeClass('blured');

    	if (badgesObject.kids) {
    		$('#second-category-btn').removeClass('blured');
    	}

    	if (badgesObject.school) {
    		$('#third-category-btn').removeClass('blured');
    	}

    	if (badgesObject.algo) {
    		$('#fourth-category-btn').removeClass('blured');
    	}

    	$('#first-category-btn').click(function () {

	    	if (!badgesObject.kids) {
	    		category.type = "kids";
		        localStorage.setItem("category", JSON.stringify(category));
		        //Do not delete it
		        $.getJSON("https://api-mimosa.herokuapp.com/kidsAcademyQuestions")
		            .done(function(result) {
		                categoryQuestions = result;
		                typeCategory = 'kids';
		                window.location.assign("#/question");
		            });   
		    }else{
		    	alert("You have opened this badge!");
		    }  
	    });

	 	$('#second-category-btn').click(function () {
		    if (!badgesObject.school){
		    		if(badgesObject.kids) {
				        category.type= "school";
				        localStorage.setItem("category", JSON.stringify(category));

				        $.getJSON("https://api-mimosa.herokuapp.com/schoolAcademyQuestions")
				            .done(function(result) {
				                categoryQuestions = result;
				                typeCategory = 'school';
				                window.location.assign("#/question");
			            });
				    }
	        }else{
	        	alert("You have opened this badge!");
	        }

		});
    	
	   	$('#third-category-btn').click(function () {
	   		if (!badgesObject.algo){

		   		if(badgesObject.school) {
				
			    	category.type= "algo";
			        localStorage.setItem("category", JSON.stringify(category));

			        $.getJSON("https://api-mimosa.herokuapp.com/algoAcademyQuestions")
			            .done(function(result) {
			                categoryQuestions = result;
			                typeCategory = 'algo';
			                window.location.assign("#/question");
		            });
			    }
			        
		    }else{
	        	alert("You have opened this badge!");
	        }
			
		});

	   	$('#fourth-category-btn').click(function () {
			if (!badgesObject.software){
				if(badgesObject.algo) {
				

			        category.type = "software";
			        localStorage.setItem("category", JSON.stringify(category));

			        $.getJSON("https://api-mimosa.herokuapp.com/softAcademyQuestions")
			            .done(function(result) {
			                categoryQuestions = result;
			                typeCategory = 'software';
			                window.location.assign("#/question");
			            });

			    }
			    
		    }else{
		        	alert("You have opened this badge!");
		        }
		});

	}


	function getQuestions(){
	    return categoryQuestions;
	}

	return {
		init:init,
		getQuestions:getQuestions
	};

}());


export default {categoryPageIIFE}

