//utilizando name consegue chamar direto o elemento e sua cadeia
//console.log(document.calcula)

var display = document.getElementById("display")
var botao = document.querySelector('.botao')

botao.addEventListener('click', function(e) {
    e.preventDefault();
    display.value = "1"

})