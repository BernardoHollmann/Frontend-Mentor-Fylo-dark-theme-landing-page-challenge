window.onload = function(){
    const input = document.querySelector('input');
    const error = document.querySelector('span');
    const form = document.querySelector('form');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', validate);
    form.addEventListener('submit', validate);

    console.log(error)
    error.style.display = "none"

    function validate(e) {
        e.preventDefault()

        const inputValue = input.value.trim()

        if (!isEmail(inputValue)) {
            error.style.display = "block"
            error.style.color = "hsl(0, 100%, 63%)"
            error.style.fontWeight = 400
        } else {
            error.style.display = "none"
        }
    }

    function isEmail(input) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
    }
}