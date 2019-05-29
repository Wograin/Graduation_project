function modalPictures(){
    function callModalImages() {
        let images = document.querySelectorAll(".works img.pa"),
            overlay = document.querySelector(".overlay");

        for (let i = 0; i < images.length; i++) {
            let actual = images[i],
                div = document.createElement("div"),
                img = document.createElement("img");
            img.setAttribute("src", images[i].getAttribute("src"));

            actual.addEventListener("click", (event) => {
                event.preventDefault();
                overlay.style.display = "block";
                overlay.appendChild(div).appendChild(img);
                img.classList.add("myimage");
                document.body.style.overflow = "hidden";
            });
        }

        window.addEventListener("click", (event) => {
            if (event.target === overlay) {
                overlay.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    callModalImages();
}

module.exports = modalPictures;