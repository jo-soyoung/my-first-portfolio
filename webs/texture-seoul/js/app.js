const btns = document.querySelectorAll(".js-button"),
    result = document.querySelector(".js-result");

for (let btn of btns) {
    btn.addEventListener("click", handleCartBtn);

    function handleCartBtn(event) {
        event.preventDefault();
        showAdded(event);
        clickCounter();
    }

    function showAdded(event) {
        return (event.target.innerText = `Added!`);
    }

    function clickCounter() {
        let initValue = parseInt(result.innerText, 10);
        initValue += 1;
        return (result.innerText = `${initValue}`);
    }
}
