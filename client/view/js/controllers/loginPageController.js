"use strict"
import FirstPage from '../view/indexCreation.js';
import ToggleNavigation from '../events/toggleNavigation.js';
import logger from '../../../controller/loggerController.js';

function init() {

    var $body = $('body');
    $body.empty();
    var index = FirstPage.indexCreation();
    $body.append(index);

    $('#play').click(function () {
        if(Parse.User.current() == null) {
            alert('You must be signed in to continue');
        }else{
            window.location.assign("#/category");
        }
    });

    ToggleNavigation.toggleNavigationEvents();
    logger.loggerEvents();

};

export default {init}