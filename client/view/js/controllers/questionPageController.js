"use strict"
import ThirdPage from '../view/questionPageCreation.js';
import Implementator from '../events/implementingNextQuestion.js';
import SignOut from '../../../model/signout.js';
import ScoreObject from '../../../model/score.js'

function init() {
    var $body = $('body');
    $body.empty();
    var thirdPage = ThirdPage.thirdPage();
    $body.append(thirdPage);

    Implementator.questionChanger();

    $('#log-out-third-page').click(function(){
        //alert('pred sign out');

        var username = Parse.User.current().get('username');
        var score = localStorage.getItem('points');
        var pointsObject = ScoreObject.createGameScoreObject();

        pointsObject.init(username, score);
        pointsObject.save().then(function () {
            SignOut.signOut();
            localStorage.clear();
            //alert('The score is saved');
            window.location.assign('');

        }, function (error) {
            alert(error.message);
        });
    });


};

export default {init}

