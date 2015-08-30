/**
 * Created by Aleksandra on 8/28/2015.
 */
/*globals  require global*/

import sign from '../model/signin.js';
import signO from '../model/signout.js';
import signU from '../model/signup.js';

function loggerEvents(){
    
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
        // if(username!=undefined && password!=undefined) {
        // console.log(signIn);
        var username = $('#username-login').val();
        var password = $('#password-login').val();
        sign.signIn(username, password)
            .then(function (user) {
                alert('The user is set');
                $('#signout').show();
                console.log($('#signout'));
                $('#login').hide();
                $('#signup').hide();
                $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();

            }, function (error) {
                console.log(error.message);
                alert(error.message);
            });
        //console.log('Username '+user.get('username'));


        // }
    });

    $('#submit-signup').click(function () {

        var username = $('#username-signup').val();
        var password = $('#password-signup').val();
        var email = $('#email').val();
        var user = new Parse.User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);
        signU.signUp(user).then(function (user) {
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
        signO.signOut();

    });

}

export default {loggerEvents};

