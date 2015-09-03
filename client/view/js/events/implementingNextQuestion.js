import Handlebars from '../../lib/handlebars/handlebars.js';
import _ from '../../lib/underscore/underscore.js';
import JSONObject from '../controllers/categoryPageController.js';

function questionManipulation() {
    var arrayQuestions = JSONObject.categoryPageIIFE.getQuestions();
    return arrayQuestions;
}

function questionChanger() {
    if (localStorage.getItem("points") === null) {
        localStorage.setItem("points", 0);
    }

    if (localStorage.getItem("badge") === null) {
        var badges = { 'kids': false, 'algo': false, 'school': false, 'software':false };
        localStorage.setItem('badge', JSON.stringify(badges));
    }

    if (localStorage.getItem("countOfUnlockedBadges") === null) {
        localStorage.setItem("countOfUnlockedBadges", 0);
    }


	var currentCategoryPoints = 0;
    var $points =  +localStorage.getItem("points");
     
    $('#currentPlayerPoints').html($points);

    var $countOfUnlockedBadges = +localStorage.getItem("countOfUnlockedBadges");

    var arrayQuestions = questionManipulation();

    //console.log("ARRAY QUESTIONS");
    //console.log(arrayQuestions);

    var category = JSON.parse(localStorage.getItem('category'));
    var type = category.type;
    var currentQuestion = +category.currentQuestion;
    $('#currentCorrectAnsweres').text(currentQuestion);
    //console.log("TYPEEEEEE");
    //console.log(type);

    var properties = [];
    for (var prop in arrayQuestions) {
        properties.push(prop);
        console.log(prop); //TUK
    }

    //console.log("PROPERTIES QUESTIONS");
    //console.log(properties);

    var retrievedObject = localStorage.getItem('badge');
    
    var badges = JSON.parse(retrievedObject);
   


    if (badges['kids']) {
         $('#' + 'kids').removeClass('blured');
    }

    if (badges['algo']) {
         $('#' + 'algo').removeClass('blured');
    }

    if (badges['school']) {
         $('#' + 'school').removeClass('blured');
    }

    if (badges['software']) {
         $('#' + 'software').removeClass('blured');
    }

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
            //console.log(top5UsersArray.people);
            $top5users.html(top5UsersHTML(top5UsersArray));
        }
    )

    var $workingHTML = makeTemplate();

    function implementNextQuestion(objectToImplement) {

        $content.html($workingHTML(''));
        $content.html($workingHTML(objectToImplement));
        //console.log("CONTENT");
        //console.log($content.html());
    }
    var $element = currentQuestion;
    implementNextQuestion(arrayQuestions[properties[$element]]);

    $('#questionHolder').on('click', '.percental', function () {


        var $this = $(this);
        var $id = $this.attr('id');
        //console.log('aaaaaaaaaaaaaaaaabbbbbbbbbbbbb');
        //console.log($id);
        if ($id.toString() == arrayQuestions[properties[$element]].answer.toString()) {
			currentCategoryPoints+=arrayQuestions[properties[$element]].pointsOnGuessing;
            $points += arrayQuestions[properties[$element]].pointsOnGuessing;
            localStorage.setItem('points', $points);
            $('#currentPlayerPoints').html(localStorage.getItem("points"));
            $element += 1;
            category.currentQuestion = $element;
            localStorage.setItem("category", JSON.stringify(category));

            //WHAT IS THIS
            $('#currentCorrectAnsweres').text($element);   //POINTS REFRESH

            if ($element < properties.length) {                  //IF THE LAST QUESTION OF THIS CATEGORY IS NOT!!! ANSWERED
                implementNextQuestion(arrayQuestions[properties[$element]]);


            } else {                  //LAST QUESTION REACHED
                //UNLOCK BADGE
                if ($countOfUnlockedBadges < 4) {

                    $countOfUnlockedBadges += 1;
                    localStorage.setItem("countOfUnlockedBadges", $countOfUnlockedBadges);

                    alert('Congratulations! You have unlocked a badge!');

                    badges[type] = true;

                    localStorage.setItem("badge", JSON.stringify(badges));
                    
                    $('#' + type).removeClass('blured');
                    category.currentQuestion = 0;
                    localStorage.setItem("category", JSON.stringify(category));

                     window.location.assign('#/category');
                    // Facebook with URL : https://mimosa.herokuapp.com/
                    

                    //Facebook END
                }

                if ($countOfUnlockedBadges === 4){
                    alert("You are telerik ninja!");
                     FB.ui(
                        {
                            method: 'share',
                            href: 'https://mimosas.herokuapp.com/'
                        }, function (response) {
                    });
                    window.location.assign('/');
                }else{
					alert("Start again " + category.type + " academy");
					localStorage.setItem("points", $points - currentCategoryPoints);
					localStorage.setItem("category", JSON.stringify({"type":category.type,"currentQuestion":0}));
					window.location.assign('#/category');
				}
            }
        }
    });
}

export default {questionChanger};