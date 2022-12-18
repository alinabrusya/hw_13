//task 1
const firstValue_input = document.getElementById('first_value');
const secondValue_input = document.getElementById('second_value');
const operator_input = document.getElementById('operator');
const res_calc_span = document.getElementById('res_calc');

function calc(){
    switch (operator_input.value) {
        case '+':
            res_calc_span.textContent = +firstValue_input.value + +secondValue_input.value;
            break;
        case '-':
            res_calc_span.textContent = +firstValue_input.value - +secondValue_input.value;
            break;
        case '*':
            res_calc_span.textContent = +firstValue_input.value * +secondValue_input.value;
            break;
        case '/':
            res_calc_span.textContent = +firstValue_input.value / +secondValue_input.value;
            break;
    }
}



//task 2
const item_input = document.getElementById('item_input');
const sum_span = document.getElementById('sum_item');
const array_result_span = document.getElementById('array_result');

const storageVal =  localStorage.getItem("array");
const arr = (storageVal)?JSON.parse(storageVal):[];

function addItem(){
    arr.push(+item_input.value);
    array_result_span.textContent = JSON.stringify(arr);

    let sum = 0;
    for (const arr_item of arr) {
        if (arr_item){
            sum = sum + arr_item;
            sum_span.textContent = sum;
        }
    }
    localStorage.setItem("array",
        JSON.stringify(arr));
}



//task 3
const number = document.getElementById('number_input');
const reverse_span = document.getElementById('reverse_result');

function reverseNumber(){
    let num = +number.value;
    let i = 0;
    while (number.value != 0){
        number.value = number.value / 10;
        i = i + 1; //i - power
    }
    let k = 1; //k - visshaya stepen 10
    while (i > 1) {
        k = k * 10;
        i = i - 1;
    }
    let m; //poslednee chislo, umnozhennoye na 10^i
    let n = 0;
    while (k > 0){
        m = k * (num % 10);
        n = n + m; //n skladivaet 4000 + 300 + 20 + 1
        k = k / 10;
        num = num / 10;
    }
reverse_span.textContent = 'n';
}
