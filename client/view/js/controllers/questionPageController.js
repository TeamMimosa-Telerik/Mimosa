"use strict"
import page3 from '../mainGamepageCreation.js';
// import handlebarsTemplate from '../handlebarsCreator.js';

import implementator from '../events/implementingNextQuestion.js';
import SignOut from '../../../model/signout.js';
import scoreObj from '../../../model/score.js'
function init() {

    // .js file for question page

    console.log("EXOOOOOOOOOOOOOOOOO");
    var $body = $('body');
    $body.empty();
    var thirdPage = page3.thirdPage();
    $body.append(thirdPage);
    // handlebarsTemplate.handlebarsCreator();

    //settings.dataHolder();

    //nextQuestionImplementation.questionChanger();
    console.log('init');
    implementator.questionChanger();
    $('#log-out-third-page').click(function(){
        alert('pred sign out');

        var username = Parse.User.current().get('username');
        var score = localStorage.getItem('points');
        var pointsObject = scoreObj.createGameScoreObject();
        console.log(username);
        console.log(score);
        pointsObject.init(username, score);
        pointsObject.save().then(function () {
            SignOut.signOut();
            localStorage.clear();
            alert('The score is saved');
            windows.location.assign('');

        }, function (error) {
            alert(error.message);
        });
    });


};

export default {init}

