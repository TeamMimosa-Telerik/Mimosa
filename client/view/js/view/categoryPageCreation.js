import '../../lib/jquery/dist/jquery.js';
//import 'bootstrap';

function secondPageCreation() {
    var $documentFragment = $(document.createDocumentFragment());
    var secondPage = $('<div id="secondPageWrapper">'),
    $container = $('<div id="container">'),
        $FirstRow = $('<div class="row">'),
        $header = $('<div class="col-xs-6 col-xs-offset-3" id="header">Pick a category</div>'),
        $secondRow = $('<div class="row">'),
        $firstCategory = $('<a id="first-category-btn" class="col-xs-3 col-xs-offset-2 blured">'),
        $kidsAcademy = $('<img src="../img/kids.jpg" class="img-responsive img-rounded" id="KidsAcademy" />'),
        $secondCategory = $('<a id="second-category-btn"  class="col-xs-3 col-xs-offset-2 blured">'),
        $schoolAcademy = $('<img src="../img/school.jpg" class="img-responsive img-rounded" id="SchoolAcademy" />'),
        $thirdRow = $('<div class="row">'),
        $thirdCateogry = $('<a id="third-category-btn" class="col-xs-3 col-xs-offset-2 blured">'),
        $algoAcademy = $('<img src="../img/algo.jpg" class="img-responsive img-rounded" id="AlgoAcademy" />'),
        $fourthCategory = $('<a id="fourth-category-btn"  class="col-xs-3 col-xs-offset-2 blured">'),
        $softwareAcademy = $('<img src="../img/software.jpg" class="img-responsive img-rounded" id="SoftwareAcademy" />');

    //Appending first row - Pick a category header
    $FirstRow.append($header);

    //Appending second row 
    //Kids academy category
    $firstCategory.append($kidsAcademy);
    $secondRow.append($firstCategory);

    //School academy
    $secondCategory.append($schoolAcademy);
    $secondRow.append($secondCategory);

    //Appending third row
    //Algo academy category 
    $thirdCateogry.append($algoAcademy);
    $thirdRow.append($thirdCateogry);

    //Software academy
    $fourthCategory.append($softwareAcademy);
    $thirdRow.append($fourthCategory);

    //Appending to documentFragment for better performance
    $documentFragment.append($FirstRow);
    $documentFragment.append($secondRow);
    $documentFragment.append($thirdRow);


    $container.append($documentFragment);
    secondPage.append($container);
    return secondPage;
}

// module.exports = solve;
export default {secondPageCreation};