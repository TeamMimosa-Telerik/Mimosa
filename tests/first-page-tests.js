/// <reference path="../client/view/js/mainGamepacgeCreation.js" />
import 'mainGamepacgeCreation.js';
//import {secondPageCreation} from '../client/view/js/mainGamepacgeCreation.js';

describe('#design tests', function () {
    it('expect #wrapper to be generated, which should be the first layer, serving asa a cointainer', function () {
        var container = document.getElementsById('wrapper');
        expect(container).to.exist;
    });

    //The children in the container are christmas tree like . /\  
    
    it('expect second layer to be generated with class .site-wrapper-inner', function () {
        var firstChild = document.getElementsByClass('.site-wrapper-innter');
        expect(firstChild).to.exist;
    });
    
    it('expect second layer to be generated with class .cover-container', function () {
        var secondChild = document.getElementByClass('.cover-container');
        expect(secondChild).to.exist;
    });
    it('expect second layer to be generated with class .masthead clearfix', function () {
        var headerNodes = document.getElementByClass('.masthead clearfix');
        expect(headerNodes).to.exist;
    });
    it('expect second layer to be generated with class .inner cover', function () {
        var coverNodes = document.getElementByClass('.inner cover');
        expect(coverNodes).to.exist;
    });
    it('expect second layer to be generated with class .mastfoot', function () {
        var footerNodes = document.getElementByClass('.mastfoot');
        expect(footerNodes).to.exist;
    });
});

