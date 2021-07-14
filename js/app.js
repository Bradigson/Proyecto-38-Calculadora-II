let a;
let b;
let c;

function start(){
 
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let zero = document.getElementById("zero");
    let sumar = document.getElementById("sumar");
    let restar = document.getElementById("restar");
    let multiplicar = document.getElementById("multiplicar");
    let dividir = document.getElementById("dividir");    
    let equal = document.getElementById("equal");
    let mostrar = document.getElementById("mostrar");
    let clear = document.getElementById("delete");
    
    


    one.onclick = function(e){

        mostrar.textContent = mostrar.textContent + "1";
    }
    two.onclick = function(e){
        mostrar.textContent = mostrar.textContent + "2";
    }
    three.onclick = function(e){
        mostrar.textContent = mostrar.textContent + "3";
    }
    four.onclick = function(e){
        mostrar.textContent = mostrar.textContent + "4";
    }
    five.onclick = function(e){
        mostrar.textContent = mostrar.textContent + "5";
    }
    six.onclick = function(e){
        mostrar.textContent = mostrar.textContent + "6";
    }
    seven.onclick = function(e){
        mostrar.textContent = mostrar.textContent + "7";
    }
    eight.onclick = function(e){
        mostrar.textContent = mostrar.textContent + "8";
    }
    nine.onclick = function(e){
        mostrar.textContent = mostrar.textContent + "9";
    }
    zero.onclick = function(e){
        mostrar.textContent = mostrar.textContent + "0";
    }

    clear.onclick = function(e){
        limpiar();
    }

    sumar.onclick = function(e){
        a = mostrar.textContent;
        c = "+";
        limpiar();
    }
    restar.onclick = function(e){
        a = mostrar.textContent;
        c = "-";
        limpiar();
    }
    multiplicar.onclick = function(e){
        a = mostrar.textContent;
        c = "*";
        limpiar();
    }
    dividir.onclick = function(e){
        a = mostrar.textContent;
        c = "/";
        limpiar();
    }
    equal.onclick = function(e){
        b = mostrar.textContent;
        resolver();
    }
}
function limpiar(){
    mostrar.textContent = "";
}

function resolver(){
    let solve = 0;
    switch(c){
        case "+":
            solve = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            solve = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            solve = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            solve = parseFloat(a) / parseFloat(b);          
    }
    mostrar.textContent = solve;
}