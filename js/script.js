window.addEventListener("DOMContentLoaded", () => {

    "use strict";

    //------------------MODAL WINDOW-----------------------------------------------------------------------------
    let body = document.querySelector("body"),
        popupEngineer = document.querySelector(".popup_engineer"),
        popup = document.querySelector(".popup"),
        btn = document.querySelectorAll("button.popup_close");

    function close(elem) {
        for (let i = 0; i < elem.length; i++) {
            let cross = elem[i];
            cross.addEventListener("click", () => {
                popupEngineer.style.display = "none";
                popup.style.display = "none";
                document.body.style.overflow = "";
            });
        }
    }

    body.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("header_btn")) {
            popupEngineer.style.display = "block";
            document.body.style.overflow = "hidden";
        } else if (event.target && event.target.classList.contains("phone_link")) {
            event.preventDefault();
            popup.style.display = "block";
            document.body.style.overflow = "hidden";
        } else {
            close(btn);
        }
    });

    window.addEventListener("click", (event) => {
        if (event.target === popupEngineer || event.target === popup) {
            popupEngineer.style.display = "none";
            popup.style.display = "none";
            document.body.style.overflow = "";
        }
    });

    //------------------TIMER-----------------------------------------------------------------------------

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

    //------------------TABs 1-----------------------------------------------------------------------------

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

    //------------------TABs 2-----------------------------------------------------------------------------

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

    //------------------Pictures-----------------------------------------------------------------------------

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

    //------------------FORMA-Modal-popup-----------------------------------------------------------------------------

    let message = {
        loading: "Загрузка",
        success: "Спасибо! Скоро мы с Вами свзяжемся!",
        failure: "Что-то пошло не так!"
    };

    let forms = document.querySelectorAll("form"),
        inputs = document.querySelectorAll(".form input"),
        statusMessage = document.createElement("div"),
        allInputsUserPhone = document.querySelectorAll("input[name='user_phone']");

    function setValidation(elem) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener("input", () => {
                elem[i].value = elem[i].value.replace(/[^0-9]/ig, "");
            });
        }
    }
    setValidation(allInputsUserPhone);

    statusMessage.classList.add("status");

    function sendform(ourForm, ourInputs) {
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
                request.send(json);

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

    sendform(forms, inputs);

    //------------------Calc-----------------------------------------------------------------------------

    //----------------------Modal-Calc------------------------------------------------

    let glazingSection = document.querySelector(".glazing"),
        popupCalc = document.querySelector(".popup_calc"),
        popupCalcClose = popupCalc.querySelector(".popup_calc_close"),
        popupCalcInputs = popupCalc.getElementsByTagName("input");

    glazingSection.addEventListener("click", (event) => {
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

    popupCalcClose.addEventListener("click", () => {
        popupCalc.style.display = "none";
        document.body.style.overflow = "";
    });

    //----------------------Tabs-Calc------------------------------------------------

    let popupCalcBalconIcons = popupCalc.querySelector(".balcon_icons"), // родитель картинок
        smallPictures = popupCalc.querySelectorAll(".picture"), // маленькие картинки добавить класс do_image_more
        bigPictures = popupCalc.querySelectorAll(".big_img img"); // больше картинки

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
                    break;
                }
            }
        }
    });

    //----------------------Modal-Calc-Profile------------------------------------------------

    let popupCalcButton = popupCalc.querySelector(".popup_calc_button"),
        popupCalcProfile = document.querySelector(".popup_calc_profile"),
        popupCalcProfileClose = document.querySelector(".popup_calc_profile_close"),
        popupCalcContent = document.querySelector(".popup_calc_content");


    /*Array.from(popupCalcProfileInput).forEach(function (check) { // нужно отобрать все инпуты
            check.addEventListener('change', function (e) {
              Array.from(popupCalcProfileInput).forEach(function (check) {
                check.checked = false;
              });
              
              e.target.checked = true;
            });
          });*/

    popupCalcButton.addEventListener("click", () => {

        let statusMessageInput = document.createElement("div");
        statusMessageInput.classList.add("status");

        if (popupCalcInputs[0].value == "" && popupCalcInputs[1].value == "") {
            popupCalc.style.display = "block";
            popupCalcContent.appendChild(statusMessageInput);
            statusMessageInput.textContent = "Заполните все поля!";
        } else {
            popupCalcProfile.style.display = "block";
            document.body.style.overflow = "hidden";
            popupCalc.style.display = "none";
        }

    });

    popupCalcProfileClose.addEventListener("click", () => {
        popupCalcProfile.style.display = "none";
        document.body.style.overflow = "";
    });

    document.getElementById('Check2').addEventListener('change', () => {
        document.getElementById('Check1').checked = !document.getElementById('Check2').checked;
    });

    document.getElementById('Check1').addEventListener('change', () => {
        document.getElementById('Check2').checked = !document.getElementById('Check1').checked;
    });

    //----------------------Modal-Calc-End------------------------------------------------







});