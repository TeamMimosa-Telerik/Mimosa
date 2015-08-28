function signIn(username,password) {
    var user = new Parse.User();
    Parse.User.logIn(username, password, {
        success: function (user) {

            alert('Welcomeeeee');
            // Do stuff after successful login.
            Parse.User.become(Parse.Session.sessionToken).then(function (user) {
                // The current user is now set to user.
                alert('The user is set');
                $('#signout').show();
                $('#login').hide();
                $('#signup').hide();
                $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();
            }, function (error) {
                alert('The user is not set');
                // The token could not be validated.
            });
        },
        error: function (user, error) {
            console.log(user.message);
            alert(error.message);

            // The login failed. Check error to see why.
        }
    });
    return user;
}

