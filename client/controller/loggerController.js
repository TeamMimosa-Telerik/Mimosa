import signInModule from '../model/signin.js';
import signOutModule from '../model/signout.js';
import signUpModule from '../model/signup.js';
import scoreObj from '../model/score.js';

function loggerEvents() {

    var currentUser = Parse.User.current();
    $('#signout').hide();
    if (currentUser) {
        $('#signout').show();
        $('#login').hide();
        $('#signup').hide();
        $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();
    }
    else {
        $('#signout').hide();
    }

    $('#submit-login').click(function () {
        var username = $('#username-login').val();
        var password = $('#password-login').val();
        signInModule.signIn(username, password)
            .then(function (user) {
                localStorage.setItem('points', 0);
                //alert('The user is set');
                $('#signout').show();
                $('#login').hide();
                $('#signup').hide();
                $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();

            }, function (error) {
                //alert(error.message);
            });
    });

    $('#submit-signup').click(function () {

        var username = $('#username-signup').val();
        var password = $('#password-signup').val();
        var email = $('#email').val();
        var user = new Parse.User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);
        signUpModule.signUp(user).then(function (user) {
            alert('Thanks for your sign up');
            $('#signout').show();
            $('#login').hide();
            $('#signup').hide();
            $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();
        }, function (error) {
            alert("Error: " + error.code + " " + error.message);
        });

    });

    $('#signout').click(function () {
        var username = Parse.User.current().get('username');
        var score = localStorage.getItem('points');
        var pointsObject = scoreObj.createGameScoreObject();

        pointsObject.init(username, score);
        pointsObject.save().then(function () {
            signOutModule.signOut();
            localStorage.clear();
            $('#signout').hide();
            $('#login').show();
            $('#signup').show();
            $('#user-name').hide();
            if ($('#signup-trigger').hasClass('active')) {
                $('#signup-trigger').find('span').html('&#x25BC;');
                $('#signup-trigger').next('#signup-content').slideToggle();
                $('#signup-trigger').toggleClass('active');
            }
            if ($('#login-trigger').hasClass('active')) {
                $('#login-trigger').next('#login-content').slideToggle();
                $('#login-trigger').find('span').html('&#x25BC;');
                $('#login-trigger').toggleClass('active');
            }
            //alert('The score is saved');
        }, function (error) {
            alert(error.message);
        });

    });

}

export default {loggerEvents};

