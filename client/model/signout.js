/**
 * Created by Aleksandra on 8/27/2015.
 */
function signOut(){
	 Parse.User.logOut();
	 $('#signout').hide();
	 $('#login').show();
	 $('#signup').show();
	 $('#user-name').hide();
	 if ($('#signup-trigger').hasClass('active')) {
	  $('#signup-trigger').find('span').html('&#x25BC;');
	  $('#signup-trigger').next('#signup-content').slideToggle();
	  $('#signup-trigger').toggleClass('active');
	 }
	 if ($('#login-trigger').hasClass('active')){
	  $('#login-trigger').next('#login-content').slideToggle();
	  $('#login-trigger').find('span').html('&#x25BC;');
	  $('#login-trigger').toggleClass('active');
	 }


}

export default {signOut};