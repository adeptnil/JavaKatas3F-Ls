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
    for (var x = 0; x < 2; x++){
        built2 = multiply(built2, x);
    }
    return built2;
}
let built2 = power(2, 8);
putInHtml(power(2, 8), 'div3');



// //#4
// function factorial(x)



// //#5