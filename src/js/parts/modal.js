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