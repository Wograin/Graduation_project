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