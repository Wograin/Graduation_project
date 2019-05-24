window.addEventListener("DOMContentLoaded", () => {

    "use strict";

    //------------------MODAL WINDOW -1-----------------------------------------------------------------------------
    let headerBtn = document.querySelector(".header_btn_wrap_block"),
        popupEngineer = document.querySelector(".popup_engineer"),
        btn = document.querySelectorAll("button.popup_close");

    headerBtn.addEventListener("click", () => {
        popupEngineer.style.display = "block";
        document.body.style.overflow = "hidden";
    });

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

    close(btn);

    //------------------MODAL WINDOW -2-----------------------------------------------------------------------------
    let phoneLink = document.querySelectorAll(".phone_link"),
        popup = document.querySelector(".popup");

    function callModal(elem) {
        for (let i = 0; i < elem.length; i++) {
            let a = elem[i];
            a.addEventListener("click", (event) => {
                event.preventDefault();
                popup.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        }
    }

    callModal(phoneLink);

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
            days = Math.floor(time / ((1000 * 60 * 60 * 24)));

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

            function addZero(elem, val){
                elem.textContent = val;
                if(val < 10) {
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