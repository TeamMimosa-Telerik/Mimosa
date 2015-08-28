/**
 * Created by Aleksandra on 8/27/2015.
 */
function signOut(){
 Parse.User.logOut();
 $('#signout').hide();
 $('#login').show();
 $('#signup').show();
 $('#user-name').hide();

}