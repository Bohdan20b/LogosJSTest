const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const divisionButton = document.getElementById('division')
const multiplyButton = document.getElementById('multiply')

function calculatePlus(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let sum = +number1 + +number2;
    let result = document.getElementById('result')
    result.append(sum)
}
function calculateMinus(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let sum = +number1 - +number2;
    let result = document.getElementById('result')
    result.append(sum)
}
function calculateDivision(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    if(number2 != 0){
        let sum = +number1 / +number2;
        let result = document.getElementById('result')
        result.append(sum)
    }
    else{
        result.append("can't divide by zero")
    }
}
function calculateMultiply(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let sum = +number1 * +number2;
    let result = document.getElementById('result')
    result.append(sum)
}