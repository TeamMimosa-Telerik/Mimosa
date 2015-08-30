"use strict"
import page3 from '../mainGamepageCreation.js';
import handlebarsTemplate from '../handlebarsCreator.js';
function init(){

		// .js file for question page
	var $body = $('body');
	$body.empty();
	var thirdPage=page3.thirdPage();
    $body.append(thirdPage);
    handlebarsTemplate.handlebarsCreator();


};

export default {init}

