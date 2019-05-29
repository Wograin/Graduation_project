function calc() {
    let calculateTheCost = {
        balconyShape: "",
        width: "",
        height: "",
        glazingType: "",
        profile: ""
    };

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