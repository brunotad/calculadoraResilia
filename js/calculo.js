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

//fazer calculo 
function calculo(i) {
    let res = eval(i)
    teste.innerText = res
}

//limpar tela
function reset() {

}