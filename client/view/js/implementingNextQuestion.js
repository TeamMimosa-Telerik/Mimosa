$('.percental').click(function () {
    if ($element < arrayOfObjectPropertiees.length) {
        var $this = $(this);
        var $id = $this.attr('id');
        if ($id.toString() === $currentQuestion[arrayOfObjectPropertiees[$element]].answer.toString()) {
            $points += $currentQuestion[arrayOfObjectPropertiees[$element]].pointsOnGuessing;
            $('#currentPlayerPoints').html($points);
            $element += 1;
            
            $('#currentCorrectAnsweres').text($element);
            if ($element < arrayOfObjectPropertiees.length) {
                $('#questionText').text($currentQuestion[arrayOfObjectPropertiees[$element]].questionText);
                $('#1').find('span').text($currentQuestion[arrayOfObjectPropertiees[$element]].optionOne);
                $('#2').find('span').text($currentQuestion[arrayOfObjectPropertiees[$element]].optionTwo);
                $('#3').find('span').text($currentQuestion[arrayOfObjectPropertiees[$element]].optionThree);
                $('#4').find('span').text($currentQuestion[arrayOfObjectPropertiees[$element]].optionFour);
            }
            else {
                //UNLOCK BADGE
                if ($countOfUnlockedBadges < 4) {
                    
                    $countOfUnlockedBadges += 1;

                    alert('Congratulations! You have unlocked a badge!');

                    var looper;
                    for (looper = 1; looper <= $countOfUnlockedBadges; looper += 1) {
                       $('#badge' + looper).removeClass('blured');
                       
                    }
                }
                //else if all badges have already been unlock...dont do anything
            }
        }
    }
});