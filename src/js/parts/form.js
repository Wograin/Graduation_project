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

                if (Object.keys(globalObject).length == 1) {
                    request.send(json);
                } else {
                    request.send(JSON.stringify(globalObject));
                    // Object.getOwnPropertyNames(calculateTheCost).forEach(function (prop) {
                    //     delete calculateTheCost[prop];
                    // });
                }

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