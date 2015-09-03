/// <reference path="../client/view/js/mainGamepacgeCreation.js" />
import 'mainGamepacgeCreation.js';
//import {secondPageCreation} from '../client/view/js/mainGamepacgeCreation.js';

describe('#design tests', function () {
    it('expect #wrapper to be generated, which should be the first layer, serving as a cоntainer', function () {
        var container = document.body.getElementById('wrapper');
        expect(container).to.exist;
    });

    //The children in the container are christmas tree like . /\  
    
    it('expect second layer to be generated with class .site-wrapper-inner', function () {
        var firstChild = document.body.getElementByClass('.site-wrapper-innter');
        expect(firstChild).to.exist;
    });
    
    it('expect second layer to be generated with class .cover-container', function () {
        var secondChild = document.body.getElementByClass('.cover-container');
        expect(secondChild).to.exist;
    });
    it('expect second layer to be generated with class .masthead clearfix', function () {
        var headerNodes = document.body.getElementByClass('.masthead clearfix');
        expect(headerNodes).to.exist;
    });
    it('expect second layer to be generated with class .inner cover', function () {
        var coverNodes = document.body.getElementByClass('.inner cover');
        expect(coverNodes).to.exist;
    });
    it('expect second layer to be generated with class .mastfoot', function () {
        var footerNodes = document.body.getElementByClass('.mastfoot');
        expect(footerNodes).to.exist;
    });
});

