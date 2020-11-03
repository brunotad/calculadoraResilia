<<<<<<< HEAD
//utilizando name consegue chamar direto o elemento e sua cadeia
//console.log(document.calcula)
var display = document.getElementById("display")
var res = document.getElementById('resultado')
var teste = document.getElementById('teste')

function clica(botao) {
    let valor;
    valor = display.value //guarda variavel
    if (botao.value === "=") {
        calculo(valor);
        return;
    } else {
        display.value = valor + botao.value //rescreve o que já tinha e coloca+1

    }
}

function calculo(x) {
    let arr = [] = x.split(""); //transforma a string valor em um array

    for(let i = 0; i < x.length; i++) {

        if(x[i] === "-" || x[i] === "+" || x[i] === "*" || x[i] === "/") {

=======
var display = document.getElementById("display")
var valor = ""
display.textContent = valor

//verificando e concatenando string
function clica(botao) {
    valor = display.textContent += botao
        // if (botao == "E") {
        //     apagar(valor)
        // }

}

//limpar tela
function reset() {
    display.textContent = ""
}

//apaga um elemento de cada vez
// function apagar(valor) {
//     var res = valor.split('')
//     res.pop()
//     res.pop()
//     var string = res.join('')
//     return display.textContent = string

// }

function calculo(x) {



    let arr = [] = x.split(""); //transforma a string valor em um array
    for (let i = 0; i < x.length; i++) {
        if (x[i] === "-" || x[i] === "+" || x[i] === "*" || x[i] === "/") {
>>>>>>> 1a0c910ac5583887e3e9e7c3777d29fa8b41aba0
            var posicaoOperador = x.indexOf(x[i]); //guarda a posicao do operador aritmetico
            var operador = x[i] //guarda o operador aritmetico
        }
    }
<<<<<<< HEAD

    let guardaArrNum1 = arr.splice(0, posicaoOperador); //guarda os numeros do array que vem antes do operador aritmetico

    let num1 = guardaArrNum1.join(""); //concatena os numeros do array que vem antes do operador aritmetico

    let guardaArrNum2 = arr.splice(0, 1); //remove o operador aritmetico

    let num2 = arr.join(""); //concatena os numeros do array que vem depois do operador aritmetico

    var result = 0;
    
    //faz trata as strings e faz o calculo
    switch (operador) {

        case "-": {
            result = parseFloat(num1) - parseFloat(num2);
            break;
        }

        case "+": {
            result = parseFloat(num1) + parseFloat(num2);
            break;
        }

        case "*": {
            result = parseFloat(num1) * parseFloat(num2);
            break;
        }

        case "/": {
            result = parseFloat(num1) / parseFloat(num2);
            break;
        }
    }

    teste.innerText = result
}


//função original (escrita pela Scarlate)
//function calculo2(i) {
//   let res = eval(i)
//    teste.innerText = res
//}
=======
    let guardaArrNum1 = arr.splice(0, posicaoOperador); //guarda os numeros do array que vem antes do operador aritmetico
    let num1 = guardaArrNum1.join(""); //concatena os numeros do array que vem antes do operador aritmetico
    let guardaArrNum2 = arr.splice(0, 1); //remove o operador aritmetico
    let num2 = arr.join(""); //concatena os numeros do array que vem depois do operador aritmetico
    var result = 0;
    //faz trata as strings e faz o calculo
    switch (operador) {
        case "-":
            {
                result = parseFloat(num1) - parseFloat(num2);
                break;
            }
        case "+":
            {
                result = parseFloat(num1) + parseFloat(num2);
                break;
            }
        case "*":
            {
                result = parseFloat(num1) * parseFloat(num2);
                break;
            }
        case "/":
            {
                result = parseFloat(num1) / parseFloat(num2);
                break;
            }
    }
    //resltado fora do padrao
    if (result > 0 || result < 0)
        return display.textContent = result
    return display.textContent = x

}
>>>>>>> 1a0c910ac5583887e3e9e7c3777d29fa8b41aba0
