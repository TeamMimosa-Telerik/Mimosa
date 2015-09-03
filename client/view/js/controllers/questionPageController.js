"use strict"
import page3 from '../mainGamepageCreation.js';
// import handlebarsTemplate from '../handlebarsCreator.js';

import implementator from '../events/implementingNextQuestion.js';
import SignOut from '../../../model/signout.js';

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
        SignOut.signOut().then(function(){
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa sign out");
            window.location.assign("");
        });

    });


};

export default {init}

