
function generateInteger(){
    let minValue = document.querySelector(".minimum");
    let maxValue = document.querySelector(".maximum");

    let generated = document.querySelector(".generated span");
    let generatedNumber = Math.floor(Math.random() * (Math.floor(maxValue.value) - Math.ceil(minValue.value))) + Math.ceil(minValue.value);

    maxValue.value = "";
    minValue.value = "";
    generated.innerHTML = generatedNumber;
}

function generateDecimalNumber(){
    const minValue = document.querySelector(".minimum");
    const maxValue = document.querySelector(".maximum");

    let generated = document.querySelector(".generated span");
    let generatedNumber = Math.random() * (Math.floor(maxValue.value) - Math.ceil(minValue.value)) + Math.ceil(minValue.value);

    maxValue.value = "";
    minValue.value = "";
    generated.innerHTML = generatedNumber;
}