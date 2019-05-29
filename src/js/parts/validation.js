function validation(){
    let allInputsUserPhone = document.querySelectorAll("input[name='user_phone']");

    function setValidation(elem) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener("input", () => {
                elem[i].value = elem[i].value.replace(/[^0-9]/ig, "");
            });
        }
    }
    setValidation(allInputsUserPhone);
}

module.exports = validation;
