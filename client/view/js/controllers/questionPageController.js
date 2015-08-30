"use strict"
import page3 from '../mainGamepageCreation.js';
function init(){

		// .js file for question page
	var $body = $('body');
	$body.empty();
	var thirdPage=page3.thirdPage();
    $body.append(thirdPage);

};

export default {init}

