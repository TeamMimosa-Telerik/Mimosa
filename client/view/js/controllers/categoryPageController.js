"use strict"
import page2 from '../secondPageCreation.js';
import categoryEvents from '../events/categoryEvents.js';

var questions;
function init() {
    // .js file for category page
    var $body = $('body');
    $body.empty();
    var secondPage = page2.secondPageCreation();
    $body.append(secondPage);
    questions = categoryEvents.getQuestions();

};
function getQuestions() {
    return questions;
}
export default {init, getQuestions};