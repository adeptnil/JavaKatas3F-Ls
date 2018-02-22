//HTML DIV Installation Function
function putInHtml(answer, location) {
    let div = document.createElement("div");
    div.textContent = answer;
    document.getElementById(location).appendChild(div);
}


//#1 Add
function add(x, y) {
    return x + y;
}
putInHtml(add(2, 4), 'div1');


//#2 Multiply
function multiply(x, y){
    let result = 0;
    for(let i = 0; i < y; i++){
        result = add(result, x);
    }
    return result;
}
putInHtml(multiply(add(2, 4), 8), 'div2');


//#3 Power
function power(x, n){
    let result = 1;
    for(let i = 0; i < n; i++){
        result = multiply(result, x);
    }
    return result;
}
putInHtml(power(multiply(1, 2), 8), 'div3');


//#4 Factorial
function factorial(x){
    let result = 1;
    for(let i = x; i >= 1; i--){
        result = multiply(result, i);
    }
    return result;
}
putInHtml(factorial(4), 'div4');


//#5 Fibonacci
function fibonacci(z){
    let x = 0;
    let y = 1;

for (var i = 2; i <= z; i++){
    fib = add(x,y);
    x=y;
    y=fib;
}
    return x;
}
putInHtml(fibonacci(8), 'div5');
