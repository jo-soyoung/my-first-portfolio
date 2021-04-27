const priceSmall = document.querySelector(".js-price-sm"),
    priceMedium = document.querySelectorAll(".js-price-md"),
    priceLarge = document.querySelector(".js-price-lg"),
    result = document.querySelector(".js-result");

const [md01, md02, md03] = priceMedium;

function handleSmallNum() {
    let clickedNum = 9.9;
    calculator(clickedNum);
}

function handleMediumNum() {
    let clickedNum = 12.9;
    calculator(clickedNum);
}

function handleLargeNum() {
    let clickedNum = 13.9;
    calculator(clickedNum);
}

function calculator(n) {
    let initValue = parseFloat(result.innerHTML);

    let total = (initValue + n).toFixed(2);

    return (result.innerText = `${total}`);
}

console.log(priceMedium);

priceSmall.addEventListener("click", handleSmallNum);
md01.addEventListener("click", handleMediumNum);
md02.addEventListener("click", handleMediumNum);
md03.addEventListener("click", handleMediumNum);
priceLarge.addEventListener("click", handleLargeNum);
