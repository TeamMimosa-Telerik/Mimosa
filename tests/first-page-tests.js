/// <reference path="../client/view/js/indexCreation.js" />

import 'indexCreation.js';
//import {secondPageCreation} from '../client/view/js/indexCreation.js';

describe('#design tests', function () {
    it('expect #wrapper to be generated, which should be the first layer, serving asa a cointainer', function () {
        var documentBody = document.body,
            html = '<scripts>../client/view/js/indexCreation.js</scripts>';

        documentBody.innerHTML += html;

        var container = document.getElementById('wrapper');
        expect(container).to.exist;
    });

    //The children in the container are christmas tree like . /\  
    
    it('expect second layer to be generated with class .site-wrapper-inner', function () {
        var documentBody = document.body,
            html = '<scripts>../client/view/js/indexCreation.js</scripts>';

        documentBody.innerHTML += html;

        var firstChild = document.getElementByClass('.site-wrapper-innter');
        expect(firstChild).to.exist;
    });
    
    it('expect second layer to be generated with class .cover-container', function () {
        var documentBody = document.body,
            html = '<scripts>../client/view/js/indexCreation.js</scripts>';

        documentBody.innerHTML += html;

        var secondChild = document.getElementByClass('.cover-container');
        expect(secondChild).to.exist;
    });
    it('expect second layer to be generated with class .masthead clearfix', function () {
        var documentBody = document.body,
            html = '<scripts>../client/view/js/indexCreation.js</scripts>';

        documentBody.innerHTML += html;

        var headerNodes = document.getElementByClass('.masthead clearfix');
        expect(headerNodes).to.exist;
    });
    it('expect second layer to be generated with class .inner cover', function () {
        var documentBody = document.body,
            html = '<scripts>../client/view/js/indexCreation.js</scripts>';

        documentBody.innerHTML += html;

        var coverNodes = document.getElementByClass('.inner cover');
        expect(coverNodes).to.exist;
    });
    it('expect second layer to be generated with class .mastfoot', function () {
        var documentBody = document.body,
            html = '<scripts>../client/view/js/indexCreation.js</scripts>';

        documentBody.innerHTML += html;

        var footerNodes = document.getElementByClass('.mastfoot');
        expect(footerNodes).to.exist;
    });
});

