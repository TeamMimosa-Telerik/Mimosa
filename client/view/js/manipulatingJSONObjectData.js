var $element = 0;
var $points = $points || 0;
var $countOfUnlockedBadges = $countOfUnlockedBadges || 0;
var arrayOfObjectPropertiees = [];

for (var prop in $currentQuestion) {
    arrayOfObjectPropertiees.push(prop);
}
$('#totalAnswersExpected').text(arrayOfObjectPropertiees.length);

(function implementNextQuestion() {
    var $htmlTaker = ($('#questionContent')).html();
    var $workingHTML = Handlebars.compile($htmlTaker);
    var $content = $('#questionHolder');
    $content.html($workingHTML(''));
    $content.html($workingHTML($currentQuestion[arrayOfObjectPropertiees[$element]])); 

}());
