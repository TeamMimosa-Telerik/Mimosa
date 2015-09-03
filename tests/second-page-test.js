/// <reference path="../client/view/js/secondPageCreation.js" />
import 'secondPageCreation.js';
//import {secondPageCreation} from '../client/view/js/secondPageCreation.js';

describe('#design tests', function () {
    it('expect DOM to generate four rows', function () {
        var categories = document.body.getElementsByClassName('row'),
            totalRowsCount = 3;
        expect(categories).to.have.length(totalCategoriesCount);
    });
});

describe('#The head "Pick a category" sign tests', function () {
    it('expect the first row to have one children - #header', function () {
        var firstRow = document.body.getElementsByClassName('row')[0],
            children;
        if (firstRow.hasChildNodes()) {
            // Make sure that object is not empty and, that it has child nodes.
            children = firstRow.childNodes;
        }
        expect(children).to.have.length(1);
    });

    it('expect the children to be the #header node', function () {
        var header = document.body.getElementById('header');
        expect(header).to.exist;
    });
});

describe('#Kids and School categories tests', function () {
    it('expect the first to have #KidsAcademy and #SchoolAcademy nodes', function () {
        var secondRow = document.body.getElementsByClassName('row')[1],
            children;
        if (secondRow.hasChildNodes()) {
            children = secondRow.childNodes;
        }
        expect(children).to.have.length(2);
    });
    it('expect #KidsAcademy to exist', function () {
        var kidsAcademy = document.body.getElementById('#KidsAcademy');
        expect(kidsAcademy).to.exist;
    });
    it('expect #SchoolAcademy to exist', function () {
        var schoolAcademy = document.body.getElementById('#SchoolAcademy');
        expect(schoolAcademy).to.exist;
    });
});

describe('#Software and Algo categories tests', function () {
    it('expect the first to have #SoftwareAcademy and #AlgoAcademy nodes', function () {
        var thirdRow = document.body.getElementsByClassName('row')[2],
            children;
        if (thirdRow.hasChildNodes()) {
            children = secondRow.childNodes;
        }

        expect(children).to.have.length(2);
    });
    it('expect #SoftwareAcademy to exist', function () {
        var softwareAcademy = document.body.getElementById('#SoftwareAcademy');
        expect(softwareAcademy).to.exist;
    });
    it('expect #SchoolAcademy to exist', function () {
        var algoAcademy = document.body.getElementById('#AlgoAcademy');
        expect(algoAcademy).to.exist;
    });
});