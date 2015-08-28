/**
 * Created by Aleksandra on 8/28/2015.
 */
/*globals  require global*/



//user.set("username", "alek");
//user.set("password", "123");
//user.set("email", "email@example.com");
// other fields can be set just like with Parse.Object
// user.set("phone", "415-392-0202");
//signUp(user);
$(document).ready(function () {
    //Parse.User.logOut();
    //console.log(Parse.User.current());
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
        var username = $('#username-login').val();
        var password = $('#password-login').val();
        signIn(username, password)
            .then(function (user) {
                alert('The user is set');
                $('#signout').show();
                $('#login').hide();
                $('#signup').hide();
                $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();

            }, function (error) {
                console.log(user.message);
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
        signUp(user).then(function (user) {
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
        signOut();

    });

});

