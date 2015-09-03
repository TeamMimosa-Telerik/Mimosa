/// <reference path="../client/view/js/secondPageCreation.js" />
import 'secondPageCreation.js';
//import {secondPageCreation} from '../client/view/js/secondPageCreation.js';

describe('#design tests', function () {
    it('expect DOM to generate four rows', function () {
        var documentBody = document.body,
            html = '<scripts>../client/view/js/secondPageCreation.js</scripts>';

        documentBody.innerHTML += html;

        var categories = document.getElementsByClassName('row'),
            totalRowsCount = 3;
        expect(categories).to.have.length(totalCategoriesCount);
    });
});

describe('#The head "Pick a category" sign tests', function () {
    it('expect the first row to have one children - #header' , function(){
        var documentBody = document.body,
            html = '<scripts>../client/view/js/secondPageCreation.js</scripts>';

        documentBody.innerHTML += html;

        var firstRow = document.getElementsByClassName('row')[0],
            children;
        if(firstRow.hasChildNodes()) {
            // Make sure that object is not empty and, that it has child nodes.
            children = firstRow.childNodes;
        }
        expect(children).to.have.length(1);
    });

    it('expect the children to be the #header node' , function(){
        var documentBody = document.body,
            html = '<scripts>../client/view/js/secondPageCreation.js</scripts>';

        documentBody.innerHTML += html;

        var header = document.getElementById('header');
        expect(header).to.exist;
    });
});

describe('#Kids and School categories tests', function () {
    it('expect the first to have #KidsAcademy and #SchoolAcademy nodes' , function(){
        var documentBody = document.body,
            html = '<scripts>../client/view/js/secondPageCreation.js</scripts>';

        documentBody.innerHTML += html;

        var secondRow = document.getElementsByClassName('row')[1],
            children;
        if(secondRow.hasChildNodes()) {
            children = secondRow.childNodes;
        }
        expect(children).to.have.length(2);
    });
    it('expect #KidsAcademy to exist' , function(){
        var documentBody = document.body,
            html = '<scripts>../client/view/js/secondPageCreation.js</scripts>';

        documentBody.innerHTML += html;

        var kidsAcademy = document.getElementById('#KidsAcademy');
        expect(kidsAcademy).to.exist;
    });
    it('expect #SchoolAcademy to exist' , function(){
        var documentBody = document.body,
            html = '<scripts>../client/view/js/secondPageCreation.js</scripts>';

        documentBody.innerHTML += html;

        var schoolAcademy  = document.getElementById('#SchoolAcademy');
        expect(schoolAcademy).to.exist;
    });
});

describe('#Software and Algo categories tests', function () {
    it('expect the first to have #SoftwareAcademy and #AlgoAcademy nodes' , function(){
        var documentBody = document.body,
            html = '<scripts>../client/view/js/secondPageCreation.js</scripts>';

        documentBody.innerHTML += html;

        var thirdRow = document.getElementsByClassName('row')[2],
            children;
        if(thirdRow .hasChildNodes()) {
            children = secondRow.childNodes;
        }
 
        expect(children).to.have.length(2);
    });
    it('expect #SoftwareAcademyAcademy to exist' , function(){
        var documentBody = document.body,
            html = '<scripts>../client/view/js/secondPageCreation.js</scripts>';

        documentBody.innerHTML += html;

        var softwareAcademy = document.getElementById('#SoftwareAcademy');
        expect(softwareAcademy).to.exist;
    });
    it('expect #SchoolAcademy to exist' , function(){
        var documentBody = document.body,
            html = '<scripts>../client/view/js/secondPageCreation.js</scripts>';

        documentBody.innerHTML += html;

        var algoAcademy = document.getElementById('#AlgoAcademy');
        expect(algoAcademy).to.exist;
    });
});