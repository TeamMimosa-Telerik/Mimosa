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
}

$('#aside').mouseenter(function() {
    alert('hi');
});

export default {gameEvents};
