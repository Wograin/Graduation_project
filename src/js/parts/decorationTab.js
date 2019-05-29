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
        if (decoration[b].style.display == "none") {
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