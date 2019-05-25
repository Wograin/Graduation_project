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
        if (event.target === popupEngineer || event.target == popup) {
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






































});