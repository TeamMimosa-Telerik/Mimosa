/**
 * Created by Aleksandra on 8/29/2015.
 */
$(document).ready(function () {
    $('#play').click(function () {
        if(Parse.User.current()!=null) {
            $('#wrapper').hide();
            $('#secondPageWrapper').show();
        }
        else
        {
            alert('You must be signed in to continue');
        }
    });
});