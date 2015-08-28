/**
 * Created by Aleksandra on 8/27/2015.
 */
function signUp(user) {

    user.signUp(null, {
        success: function (user) {
            alert('Thanks for your sign up');

            $('#signout').show();
            $('#login').hide();
            $('#signup').hide();
            $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();
            // Hooray! Let them use the app now.
        },
        error: function (user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
}