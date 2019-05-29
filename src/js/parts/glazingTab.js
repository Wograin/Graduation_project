function glazingTab() {
    let glazingSlider = document.querySelector(".glazing_slider"),
        glazingBlockTabs = document.querySelectorAll(".glazing_block"),
        glazing = document.querySelectorAll(".glazing .row");

    function hide(a) {
        for (let i = a; i < glazing.length; i++) {
            glazing[i].style.display = "none";
        }
    }

    function show(b) {
        if (glazing[b].style.display == "none") {
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
}

module.exports = glazingTab;