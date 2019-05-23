window.addEventListener("DOMContentLoaded", () => {

    "use strict";

    //------------------MODAL WINDOW-----------------------------------------------------------------------------
    let headerBtn = document.querySelector(".header_btn_wrap_block"),
        popupEngineer = document.querySelector(".popup_engineer"),
        close = document.querySelector(".popup_engineer > .popup_dialog > .popup_content > .popup_close");

    headerBtn.addEventListener("click", () => {
        popupEngineer.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", () => {
        popupEngineer.style.display = "none";
        document.body.style.overflow = "";
    });

    window.addEventListener('click', (event) => {
        if (event.target === popupEngineer) {
            popupEngineer.style.display = 'none';
            document.body.style.overflow = "";
        }
    });









































});