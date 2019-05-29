/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/afterSixtySeconds.js":
/*!*******************************************!*\
  !*** ./src/js/parts/afterSixtySeconds.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function stealInSixtySeconds() {
    let popup = document.querySelector(".popup"),
        popupEngineer = document.querySelector(".popup_engineer"),
        popupCalc = document.querySelector(".popup_calc");

    let callModalWindow = setTimeout(sixtySeconds, 60000);

    function sixtySeconds() {
        if (popup.style.display == "none" && popupEngineer.style.display == "none" && popupCalc.style.display == "none") {
            clearTimeout(callModalWindow);
        } else {
            popup.style.display = "block";
        }
        /*setTimeout(function () {
            if (popup.style.display != 'block' && popupEngineer.style.display != 'block' && popupCalc.style.display != 'block') {
                popup.style.display = 'block';
            }
        }, 3000);*/
    }
}

module.exports = stealInSixtySeconds;

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {

    let popupCalc = document.querySelector(".popup_calc"),
        popupCalcInputs = popupCalc.getElementsByTagName("input");

    window.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("popup_calc_btn")) {
            popupCalc.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });

    function setValidationCalc(inputs) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", () => {
                inputs[i].value = inputs[i].value.replace(/[^0-9]/ig, "");
            });
        }
    }
    setValidationCalc(popupCalcInputs);

    //----------------------Tabs-Calc------------------------------------------------

    let popupCalcBalconIcons = popupCalc.querySelector(".balcon_icons"), // родитель картинок
        smallPictures = popupCalc.querySelectorAll(".picture"), // маленькие картинки добавить класс do_image_more
        bigPictures = popupCalc.querySelectorAll(".big_img img"); // больше картинки
    calculateTheCost.balconyShape = smallPictures[0].src; // картинка по умолчанию если она не выбрана пользователем

    function hidePictures(a) {
        for (let i = a; i < bigPictures.length; i++) {
            bigPictures[i].style.display = "none";
            smallPictures[i].classList.remove("do_image_more");
        }
    }

    function showPictures(b) {
        if (bigPictures[b].style.display = "none") {
            bigPictures[b].style.display = "inline-block";
            smallPictures[b].classList.add("do_image_more");
        }
    }

    popupCalcBalconIcons.addEventListener("click", (event) => {
        let target = event.target;
        if (target && target.classList.contains("picture")) {
            for (let i = 0; i < smallPictures.length; i++) {
                if (target == smallPictures[i]) {
                    hidePictures(0);
                    showPictures(i);
                    calculateTheCost.balconyShape = smallPictures[i].src;
                    break;
                }
            }
        }
    });

    //----------------------Modal-Calc-Profile------------------------------------------------

    let popupCalcButton = popupCalc.querySelector(".popup_calc_button"),
        popupCalcProfile = document.querySelector(".popup_calc_profile"),
        popupCalcContent = document.querySelector(".popup_calc_content"),
        popupCalcProfileButton = document.querySelector(".popup_calc_profile_button"),
        popupCalcEnd = document.querySelector(".popup_calc_end"),
        btn = document.querySelectorAll(".shutDown");
    /*
        Array.from(popupCalcProfileInput).forEach(function (check) { // нужно отобрать все инпуты
            check.addEventListener('change', function (e) {
                Array.from(popupCalcProfileInput).forEach(function (check) {
                    check.checked = false;
                });

                e.target.checked = true;
            });
        });
    */
    popupCalcButton.addEventListener("click", () => {

        let statusMessageInput = document.createElement("div");
        statusMessageInput.classList.add("status");

        if (popupCalcInputs[0].value == "" || popupCalcInputs[1].value == "") {
            popupCalc.style.display = "block";
            popupCalcContent.appendChild(statusMessageInput);
            statusMessageInput.textContent = "Заполните все поля!";
        } else {
            popupCalcProfile.style.display = "block";
            document.body.style.overflow = "hidden";
            popupCalc.style.display = "none";
            calculateTheCost.width = popupCalcInputs[0].value;
            calculateTheCost.height = popupCalcInputs[1].value;
        }

    });

    document.getElementById('Check2').addEventListener('change', () => {
        document.getElementById('Check1').checked = !document.getElementById('Check2').checked;
    });

    document.getElementById('Check1').addEventListener('change', () => {
        document.getElementById('Check2').checked = !document.getElementById('Check1').checked;
    });

    popupCalcProfileButton.addEventListener("click", () => {
        let options = document.getElementsByTagName("option"),
            checkbox = document.querySelectorAll(".checkbox");

        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                calculateTheCost.profile = checkbox[i].alt;
            }
        }

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                calculateTheCost.glazingType = options[i].value;
            }
            popupCalcProfile.style.display = "none";
            popupCalcEnd.style.display = "block";
        }
    });

    function close(elem) {
        for (let i = 0; i < elem.length; i++) {
            let cross = elem[i];
            cross.addEventListener("click", () => {
                popupCalc.style.display = "none";
                popupCalcProfile.style.display = "none";
                popupCalcEnd.style.display = "none";
                document.body.style.overflow = "";
            });
        }
    }
    close(btn);
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/decorationTab.js":
/*!***************************************!*\
  !*** ./src/js/parts/decorationTab.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function decorationTab() {
    let decorationSlider = document.querySelector(".decoration_slider"),
        decorationItemTabs = document.querySelectorAll(".no_click"),
        decoration = document.querySelectorAll(".decoration .row .service");

    function hideDecoration(a) {
        for (let i = a; i < decoration.length; i++) {
            decoration[i].style.display = "none";
            decorationItemTabs[i].classList.remove("after_click");
        }
    }

    function showDecoration(b) {
        if (decoration[b].style.display = "none") {
            decoration[b].style.display = "block";
            decorationItemTabs[b].classList.add("after_click");
        }
    }

    decorationSlider.addEventListener("click", function (event) {
        let target = event.target;
        while (target != this) {
            if (target.classList.contains("no_click")) {
                for (let i = 0; i < decorationItemTabs.length; i++) {
                    if (target == decorationItemTabs[i]) {
                        hideDecoration(0);
                        showDecoration(i);
                        break;
                    }
                }
            }
            target = target.parentNode;
        }
    });
}

module.exports = decorationTab;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    let message = {
        loading: "Загрузка",
        success: "Спасибо! Скоро мы с Вами свзяжемся!",
        failure: "Что-то пошло не так!"
    };

    let forms = document.querySelectorAll("form"),
        inputs = document.querySelectorAll(".form input"),
        statusMessage = document.createElement("div"),
        popupCalc = document.querySelector(".popup_calc");

    statusMessage.classList.add("status");

    function sendform(ourForm, ourInputs, globalObject) {
        for (let f = 0; f < ourForm.length; f++) {
            let form = ourForm[f];

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);

                let request = new XMLHttpRequest();
                request.open("POST", "server.php");
                request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

                let formData = new FormData(form);
                let obj = {};
                formData.forEach(function (value, key) {
                    obj[key] = value;
                });

                let json = JSON.stringify(obj);

                if(popupCalc.style.display = "block"){
                    request.send(JSON.stringify(globalObject));
                } else{
                    request.send(json);
                }

               //let json = JSON.stringify(obj);
               //request.send(json);

                request.addEventListener("readystatechange", () => {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                });
                for (let i = 0; i < ourInputs.length; i++) {
                    ourInputs[i].value = "";
                }
            }); // конец обработчика событий

        } // конец цикла for f
    }

    sendform(forms, inputs, calculateTheCost);
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/glazingTab.js":
/*!************************************!*\
  !*** ./src/js/parts/glazingTab.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function glazingTab() {
    let glazingSlider = document.querySelector(".glazing_slider"),
        glazingBlockTabs = document.querySelectorAll(".glazing_block"),
        glazing = document.querySelectorAll(".glazing .row");

    function hide(a) {
        for (let i = a; i < glazing.length; i++) {
            glazing[i].style.display = "none";
        }
    }

    function show(b) {
        if (glazing[b].style.display = "none") {
            glazing[b].style.display = "block";
        }
    }

    glazingSlider.addEventListener("click", function (event) {
        let target = event.target;
        while (target != this) {
            if (target.classList.contains("glazing_block")) {
                for (let i = 0; i < glazingBlockTabs.length; i++) {
                    if (target == glazingBlockTabs[i]) {
                        hide(0);
                        show(i);
                        break;
                    }
                }
            }
            target = target.parentNode;
        }
    });
}

module.exports = glazingTab;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalWindow() {
    let body = document.querySelector("body"),
        popupEngineer = document.querySelector(".popup_engineer"),
        popup = document.querySelector(".popup"),
        btn = document.querySelectorAll(".shutDown");

    body.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("header_btn")) {
            popupEngineer.style.display = "block";
            document.body.style.overflow = "hidden";
        } else if (event.target && event.target.classList.contains("phone_link")) {
            event.preventDefault();
            popup.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });

    window.addEventListener("click", (event) => {
        if (event.target === popupEngineer || event.target === popup) {
            popupEngineer.style.display = "none";
            popup.style.display = "none";
            document.body.style.overflow = "";
        }
    });

    function close(elem) {
        for (let i = 0; i < elem.length; i++) {
            let cross = elem[i];
            cross.addEventListener("click", () => {
                popupEngineer.style.display = "none";
                popup.style.display = "none";
            });
        }
    }
    close(btn);
}

module.exports = modalWindow;

/***/ }),

/***/ "./src/js/parts/modalPictures.js":
/*!***************************************!*\
  !*** ./src/js/parts/modalPictures.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalPictures(){
    function callModalImages() {
        let images = document.querySelectorAll(".works img.pa"),
            overlay = document.querySelector(".overlay");

        for (let i = 0; i < images.length; i++) {
            let actual = images[i],
                div = document.createElement("div"),
                img = document.createElement("img");
            img.setAttribute("src", images[i].getAttribute("src"));

            actual.addEventListener("click", (event) => {
                event.preventDefault();
                overlay.style.display = "block";
                overlay.appendChild(div).appendChild(img);
                img.classList.add("myimage");
                document.body.style.overflow = "hidden";
            });
        }

        window.addEventListener("click", (event) => {
            if (event.target === overlay) {
                overlay.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    callModalImages();
}

module.exports = modalPictures;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadline = "2019-06-05";

    function getTimeRemaining(endtime) {
        let timeZone = new Date().getTimezoneOffset() * 1000 * 60,
            time = Date.parse(endtime) - Date.parse(new Date()) + timeZone,
            seconds = Math.floor((time / 1000) % 60),
            minutes = Math.floor((time / 1000 / 60) % 60),
            hours = Math.floor((time / 1000 / 60 / 60) % 24),
            days = Math.floor(time / (1000 * 60 * 60 * 24));

        return {
            "total": time,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function setTimer(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateTimer, 1000);

        function updateTimer() {
            let t = getTimeRemaining(endtime);

            function addZero(elem, val) {
                elem.textContent = val;
                if (val < 10) {
                    elem.textContent = `0${val}`;
                }
            }

            addZero(days, t.days);
            addZero(hours, t.hours);
            addZero(minutes, t.minutes);
            addZero(seconds, t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }
    setTimer("timer", deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/parts/validation.js":
/*!************************************!*\
  !*** ./src/js/parts/validation.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validation(){
    let allInputsUserPhone = document.querySelectorAll("input[name='user_phone']");

    function setValidation(elem) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener("input", () => {
                elem[i].value = elem[i].value.replace(/[^0-9]/ig, "");
            });
        }
    }
    setValidation(allInputsUserPhone);
}

module.exports = validation;


/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener("DOMContentLoaded", () => {

    "use strict";

    window.calculateTheCost = {
        balconyShape: "",
        width: "",
        height: "",
        glazingType: "",
        profile: ""
    };

    let afterSixtySeconds = __webpack_require__(/*! ./parts/afterSixtySeconds.js */ "./src/js/parts/afterSixtySeconds.js"),
        calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
        decorationTab = __webpack_require__(/*! ./parts/decorationTab.js */ "./src/js/parts/decorationTab.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        glazingTab = __webpack_require__(/*! ./parts/glazingTab.js */ "./src/js/parts/glazingTab.js"),
        modalPictures = __webpack_require__(/*! ./parts/modalPictures.js */ "./src/js/parts/modalPictures.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
        validation = __webpack_require__(/*! ./parts/validation.js */ "./src/js/parts/validation.js");

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map