// import manipulator from './manipulatingJSONObjectData.js';
import Handlebars from '../../lib/handlebars/handlebars.js';
import _ from '../../lib/underscore/underscore.js';


import json from '../controllers/categoryPageController.js';


function questionManipulation() {
    var i=0;
   // var arrayQuestions = questions.dataHolder()();
    var arrayQuestions = json.categoryPageIIFE.getQuestions();
    console.log('JSSOOOOOn');
    console.log(arrayQuestions);
    return arrayQuestions;
}

function questionChanger() {

    var $points = 0;
    var $countOfUnlockedBadges = 0;

    var arrayQuestions = questionManipulation();

    console.log("ARRAY QUESTIONS");
    console.log(arrayQuestions);

    //drago use this variable
    var type = json.categoryPageIIFE.getTypeCategory();
    console.log("TYPEEEEEE");
    console.log(type);

    var properties = [];
    for (var prop in arrayQuestions) {
        properties.push(prop);
    }

    console.log("PROPERTIES QUESTIONS");
    console.log(properties);

    var $element = 0;
    $('#totalAnswersExpected').text(properties.length);


    var $content = $('#questionHolder');
    var $top5users = $('#top5');

    function makeTemplate() {
        var $htmlTaker = '<div id="questionHeader">' +
            '<h2>{{questionText}}</h2>' +
            '</div>' +
            '<div id="questioBody">' +
            '<div id="1" class="percental"><span>{{optionOne}}</span></div>' +
            '<div id="2" class="percental"><span>{{optionTwo}}</span></div>' +
            '<br />' +
            '<div id="3" class="percental"><span>{{optionThree}}</span></div>' +
            '<div id="4" class="percental"><span>{{optionFour}}</span></div>' +

            '</div>';
        var $workingHTML = Handlebars.compile($htmlTaker);
        return $workingHTML;
    }

    function top5UsersTemplate() {
        var template = '<ul>Top 5 Users' +
            '{{#each people}}' +
            '<li>{{this.name}}-{{this.score}}</li>' +
            '{{/each}}'
        '</ul>';
        return Handlebars.compile(template);
    }

    var GameScore = Parse.Object.extend("GameScore");
    var query = new Parse.Query(GameScore);
    query.ascending("score");

    var users = [];
    var top5UsersArray = {
        people: []
    }
    query.find().then(function (results) {
            var queryResults = results.slice();

            for (var i = 0; i < results.length; i++) {
                users.push({name: queryResults[i].get('username'), score: queryResults[i].get('score')|0});
            }

            var top5UsersHTML = top5UsersTemplate();
            var sortedUsers = _.sortBy(users, 'score').reverse();

            var nonDuplidatedUsers = _.uniq(sortedUsers, 'name');
            console.log(nonDuplidatedUsers);
            top5UsersArray.people= _.first(nonDuplidatedUsers,5);
            console.log(top5UsersArray.people);
            $top5users.html(top5UsersHTML(top5UsersArray));
        }
    )

    //for (var i = 0; i < 5; i++) {
    //    top5UsersArray.people.push({name: top5Results[i].get('username'), score: top5Results[i].get('score')});
    //}


    var $workingHTML = makeTemplate();

    function implementNextQuestion(objectToImplement) {

        $content.html($workingHTML(''));
        $content.html($workingHTML(objectToImplement));
        console.log("CONTENT");
        console.log($content.html());
    }

    implementNextQuestion(arrayQuestions[properties[$element]]);

    $('#questionHolder').on('click', '.percental', function () {


        var $this = $(this);
        var $id = $this.attr('id');
        console.log('aaaaaaaaaaaaaaaaabbbbbbbbbbbbb');
        console.log($id);
        if ($id.toString() == arrayQuestions[properties[$element]].answer.toString()) {
            $points += arrayQuestions[properties[$element]].pointsOnGuessing;
            localStorage.setItem('points', $points);
            $('#currentPlayerPoints').html($points);
            $element += 1;

            //WHAT IS THIS
            $('#currentCorrectAnsweres').text($element);

            if ($element < properties.length) {
                implementNextQuestion(arrayQuestions[properties[$element]]);

                // implementNextQuestion(arrayQuestions[properties[$element]]);
                // if (properties[$element] < arrayQuestions.length) {

                // if ($element < properties.length){

                //     console.log("EEEEEEEEEEEEEE")
                //     // $('#questionText').text(arrayQuestions[properties[$element]].questionText);
                //     // $('#1').find('span').text(arrayQuestions[properties[$element]].optionOne);
                //     // $('#2').find('span').text(arrayQuestions[properties[$element]].optionTwo);
                //     // $('#3').find('span').text(arrayQuestions[properties[$element]].optionThree);
                //     // $('#4').find('span').text(arrayQuestions[properties[$element]].optionFour);

                // }
            } else {
                //UNLOCK BADGE
                if ($countOfUnlockedBadges < 4) {

                    $countOfUnlockedBadges += 1;

                    alert('Congratulations! You have unlocked a badge!');

                    // Facebook with URL : https://mimosa.herokuapp.com/
                    FB.ui(
                        {
                            method: 'share',
                            href: 'https://mimosas.herokuapp.com/'
                        }, function (response) {
                        });

                    //Facebook END

                    // $('#questionHolder').html('<h1>Something to pop up');
                    var looper;
                    for (looper = 1; looper <= $countOfUnlockedBadges; looper += 1) {
                        $('#badge' + looper).removeClass('blured');

                    }
                }
            }
            // else {
            //             //UNLOCK BADGE
            //     if ($countOfUnlockedBadges < 4) {

            //         $countOfUnlockedBadges += 1;

            //         alert('Congratulations! You have unlocked a badge!');

            //         $('#questionHolder').html('<h1>Something interesting to pop up');
            //         var looper;
            //         for (looper = 1; looper <= $countOfUnlockedBadges; looper += 1) {
            //             $('#badge' + looper).removeClass('blured');

            //         }
            //     }
            //else if all badges have already been unlock...dont do anything
        }
    });
}

export default {questionChanger};