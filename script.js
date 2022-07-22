
function generateInteger(){
    const minValue = document.querySelector(".minimum");
    const maxValue = document.querySelector(".maximum");
    let generated = document.querySelector(".generated span");

    let generatedNumber = Math.floor(Math.random() * (maxValue.value - minValue.value) + minValue.value);

    maxValue.value = "";
    minValue.value = "";
    generated.innerHTML = generatedNumber;
}

function generateDecimalNumber(){
    const minValue = document.querySelector(".minimum");
    const maxValue = document.querySelector(".maximum");
    let generated = document.querySelector(".generated span");

    let generatedNumber = Math.random() * (maxValue.value - minValue.value) + minValue.value;

    maxValue.value = "";
    minValue.value = "";
    generated.innerHTML = generatedNumber;
}