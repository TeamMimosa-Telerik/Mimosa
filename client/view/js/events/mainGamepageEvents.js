import SignOut from '../../../model/signout.js';
function gameEvents(){

    $('#announcer').mouseenter(function () {
        $(this).css('background-color', 'orange');
    });
    $('#announcer').mouseleave(function () {
        $(this).css('background-color', 'rgb(' + 11 + ',' + 79 + ',' + 66 + ')');
    });


    $('.category').mouseenter(function () {
        $(this).css('background-color', 'lime');
        var $child = $(this).children();
        $child.each(function (item) {
            $child.eq(item).css('color', 'white');
        });
    });
    $('.category').mouseleave(function () {
        $(this).css('background-color', 'black');
        var $child = $(this).children();
        $child.each(function (item) {
            $child.eq(item).css('color', 'lime');
        });
    });
    $('#log-out-third-page').click(function(){
        alert('pred sign out');
        SignOut.signOut().then(function(){
            console.log("goran sign out");
           // window.location.assign(location.hostname+'/login');
        });

    });
}

$('#aside').mouseenter(function() {
    alert('hi');
});


export default {gameEvents};
