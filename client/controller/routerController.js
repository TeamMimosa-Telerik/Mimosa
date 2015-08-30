function eventRouter(){
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

    $('#first-category-btn').click(function(){
       $('#secondPageWrapper').hide();
        $('#thirdPageWrapper').show();
    });
}

export default {eventRouter};
