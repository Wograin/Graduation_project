function form() {
    let message = {
        loading: "Загрузка",
        success: "Спасибо! Скоро мы с Вами свзяжемся!",
        failure: "Что-то пошло не так!"
    };

    let forms = document.querySelectorAll("form"),
        inputs = document.querySelectorAll(".form input"),
        statusMessage = document.createElement("div");

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
}

module.exports = form;