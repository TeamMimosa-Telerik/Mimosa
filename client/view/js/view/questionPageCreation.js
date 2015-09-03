import '../../lib/jquery/dist/jquery.js';
//import 'bootstrap';
import SignOut from '../../../model/signout.js';

function thirdPage() {

    var thirdPageWrapper = $('<div id="thirdPageWrapper">'),
    //$container = $('<div id="container">'),
        $header = $('<header class="row">'),
        $badgeHolder = $('<div id="badgeContainer" class="col-md-4">'),
        $currentCorrectAnswersContainer = $(' <div id="countsContainer" class="col-md-5">'),
        $playerNameAndPoints = $('<div id="playerAndPoints" class="col-md-3">');

    $badgeHolder.append('<img id="kids" class="blured" src="../img/kids.jpg" />');
    $badgeHolder.append('<img id="school" class="blured" src="../img/school.jpg" />');
    $badgeHolder.append('<img id="algo" class="blured" src="../img/algo.jpg" />');
    $badgeHolder.append('<img id="software" class="blured" src="../img/software.jpg" />');
    $currentCorrectAnswersContainer.append('<span id="answerText">Answers: </span>');
    $currentCorrectAnswersContainer.append('<span id="currentCorrectAnsweres" class="answeredCount">0</span>');
    $currentCorrectAnswersContainer.append('<span class="answeredCount">/</span>');
    $currentCorrectAnswersContainer.append('<span id="totalAnswersExpected" class="answeredCount">10</span>');
    $playerNameAndPoints.append('<a id="log-out-third-page-name">Player</a>');
    $playerNameAndPoints.append('<div id="separator"></div>');
    $playerNameAndPoints.append('<span id="currentPlayerPoints">0</span>');
    $header.append($badgeHolder);
    $header.append($currentCorrectAnswersContainer);
    $header.append($playerNameAndPoints);
    thirdPageWrapper.append($header);

    var $section = $('<section class="row">'),
        $asideBar = $('<div id="aside" class="col-md-3">'),
        $announcer = $('<div id="announcer">'),
    // $categoryContainer = $('<div id="categoryContainer">'),
        $top5users = $('<div id="top5">'),
        $kidsAcad = $('<div class="category">'),
        $schoolAcad = $('<div class="category">'),
        $algoAcad = $('<div class="category">'),
        $softwareAcad = $('<div class="category">');
        // $logoutLink = $('<a id="log-out-third-page">Log out</a>');
    ////$kidsAcad.append('<a href="#">Kids Academy</a>');
    //$schoolAcad.append('<a href="#">School Academy</a>');
    //$algoAcad.append('<a href="#">Algo Academy</a>');
    //$softwareAcad.append('<a href="#">Software Academy</a>');
    //$categoryContainer.append($kidsAcad);
    //$categoryContainer.append($schoolAcad);
    //$categoryContainer.append($algoAcad);
    //$categoryContainer.append($softwareAcad);
    $announcer.append('<a href="#/category">Select category</a>');
    // $asideBar.append($logoutLink);
    $asideBar.append($announcer);
    //$asideBar.append($categoryContainer);
    $asideBar.append($top5users);
    $section.append('<div id="questionHolder" class="col-md-9 col-sm-12 col-xs-12">');
    $section.append($asideBar);
    thirdPageWrapper.append($section);


    var $footer = $('<footer class="row">'),
        $innerFooter = $('<div class="col-md-12">');

    $innerFooter.append(' <h2>Property of Telerik Academy. Designed by Team Mimosa</h2>');
    $footer.append($innerFooter);

    return thirdPageWrapper;
}

export default {thirdPage};


