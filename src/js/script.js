window.addEventListener("DOMContentLoaded", () => {

    "use strict";

    window.calculateTheCost = {
        balconyShape: "",
        width: "",
        height: "",
        glazingType: "",
        profile: ""
    };

    let afterSixtySeconds = require("./parts/afterSixtySeconds.js"),
        calc = require("./parts/calc.js"),
        modal = require("./parts/modal.js"),
        decorationTab = require("./parts/decorationTab.js"),
        form = require("./parts/form.js"),
        glazingTab = require("./parts/glazingTab.js"),
        modalPictures = require("./parts/modalPictures.js"),
        timer = require("./parts/timer.js"),
        validation = require("./parts/validation.js");

    afterSixtySeconds();
    calc();
    modal();
    decorationTab();
    form();
    glazingTab();
    modalPictures();
    timer();
    validation();

});