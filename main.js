

function putInHtml(answer, location) {
    let div = document.createElement("div");
    div.textContent = answer;
    document.getElementById(location).appendChild(div);
}

//#1
function add(x, y) {
    return x + y;
}
putInHtml(add(2, 4), 'div1');




//#2
function multiply(x, y) {
    let built = 0;
    for (var x = 0; x < 6; x++){
        built = add(built, y);
    }
    return built;
    }
let built = multiply(6, 8);
putInHtml(multiply(6, 8), 'div2');




// //#3
function power(x, n) {
    let built2 = 0;
    for (var x = 0; x < 32; x++){
        built2 = add(built2, n);
    }
    return built2;
}
let built2 = power(2, 8);
putInHtml(power(2, 8), 'div3');



// //#4
function factorial(built3){
    for (var i = built3 - 1; i >= 1; i--){
        built3 *= i;
    }
            return built3;
}
built3 = factorial(4);
putInHtml(factorial(4), 'div4');



// //#5
function fibonacci(built4){
        let x = 0;
        let y = 1;

    for (var i = 2; i <= built4; i++){
        fib =add(x,y);
        x=y;
        y=fib;
    }
        return x;
}
// console.log(fibonacci(8));
built4 = fibonacci(8);
putInHtml(fibonacci(8), 'div5');