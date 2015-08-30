"use strict"
import page1 from '../indexCreation.js';
function init() {
    console.log('Init index');
    // .js file for login page

    var $body = $('body');
    $body.empty();
    var index = page1.indexCreation();
    $body.append(index);

};

export default {init}