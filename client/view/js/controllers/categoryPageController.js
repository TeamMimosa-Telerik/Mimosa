"use strict"
import page2 from '../secondPageCreation.js';


//TODO: REMOVE GLOBAL VARIABLES
var categoryQuestions;

var categoryPageIIFE = (function(){

	function init(){
		console.log("IN CATEGORY PAGE INIT");

	    var $body = $('body');
	    $body.empty();
	    var secondPage = page2.secondPageCreation();
	    $body.append(secondPage);

	    $('#first-category-btn').click(function () {

	    	//Do not delete it
	        $.getJSON("https://api-mimosa.herokuapp.com/kidsAcademyQuestions")
	        		.done(function(result) {
				          categoryQuestions = result;
				          window.location.assign("#/question");
				        });

	    });

	    $('#second-category-btn').click(function () {

	        $.getJSON("https://api-mimosa.herokuapp.com/schoolAcademyQuestions")
	        		.done(function(result) {
				          categoryQuestions = result;
				          window.location.assign("#/question");
				        });

	    });

	    $('#third-category-btn').click(function () {
	        $.getJSON("https://api-mimosa.herokuapp.com/algoAcademyQuestions")
	        	    .done(function(result) {
				          categoryQuestions = result;
				          window.location.assign("#/question");
				        });
	    });

	    $('#fourth-category-btn').click(function () {
	        $.getJSON("https://api-mimosa.herokuapp.com/softAcademyQuestions")
	        		.done(function(result) {
				          categoryQuestions = result;
				          window.location.assign("#/question");
				        }); 
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

