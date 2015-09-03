"use strict"
import page2 from '../secondPageCreation.js';


//TODO: REMOVE GLOBAL VARIABLES
var categoryQuestions;
var typeCategory;

var categoryPageIIFE = (function(){

	function init(){
		console.log("IN CATEGORY PAGE INIT");

	    var $body = $('body');
	    $body.empty();
	    var secondPage = page2.secondPageCreation();
	    $body.append(secondPage);

	    if (localStorage.getItem("category") === null) {
        	localStorage.setItem("category", JSON.stringify({'type': "", 'currentQuestion':0}));
    	}
    	var retrievedObject = localStorage.getItem('category');
    
    	
    	var category = JSON.parse(retrievedObject);
	    $('#first-category-btn').click(function () {	    	
    		category.type = "kids";
            localStorage.setItem("category", JSON.stringify(category));
	    	//Do not delete it
	        $.getJSON("https://api-mimosa.herokuapp.com/kidsAcademyQuestions")
	        		.done(function(result) {
				          categoryQuestions = result;
				          typeCategory = 'kids';
				          window.location.assign("#/question");
				        });

	    });

	    $('#second-category-btn').click(function () {
	    	category.type= "school";
            localStorage.setItem("category", JSON.stringify(category));

	        $.getJSON("https://api-mimosa.herokuapp.com/schoolAcademyQuestions")
	        		.done(function(result) {
				          categoryQuestions = result;
				          typeCategory = 'school';
				          window.location.assign("#/question");
				        });

	    });

	    $('#third-category-btn').click(function () {
	    	category.type= "algo";
            localStorage.setItem("category", JSON.stringify(category));

	        $.getJSON("https://api-mimosa.herokuapp.com/algoAcademyQuestions")
	        	    .done(function(result) {
				          categoryQuestions = result;
				          typeCategory = 'algo';
				          window.location.assign("#/question");
				        });
	    });

	    $('#fourth-category-btn').click(function () {
	    	category.type = "software";
            localStorage.setItem("category", JSON.stringify(category));

	        $.getJSON("https://api-mimosa.herokuapp.com/softAcademyQuestions")
	        		.done(function(result) {
				          categoryQuestions = result;
				          typeCategory = 'software';
				          window.location.assign("#/question");
				        }); 
	    });

}

	function getQuestions(){
	    return categoryQuestions;
	}

	function getTypeCategory(){
	    return typeCategory;
	}
	return {
		init:init,
		getQuestions:getQuestions,
		getTypeCategory:getTypeCategory
	};

}());


export default {categoryPageIIFE}

