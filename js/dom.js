//passa o parametro da funcao direto para o clica 
onload = () => {
    document.querySelector('#bt1').onclick = () => clica(1)
    document.querySelector('#bt2').onclick = () => clica(2)
    document.querySelector('#bt3').onclick = () => clica(3)
    document.querySelector('#sub').onclick = () => clica("-")
    document.querySelector('#bt4').onclick = () => clica(4)
    document.querySelector('#bt5').onclick = () => clica(5)
    document.querySelector('#bt6').onclick = () => clica(6)
    document.querySelector('#soma').onclick = () => clica("+")
    document.querySelector('#bt7').onclick = () => clica(7)
    document.querySelector('#bt8').onclick = () => clica(8)
    document.querySelector('#bt9').onclick = () => clica(9)
    document.querySelector('#mult').onclick = () => clica("*")
    document.querySelector('#bt0').onclick = () => clica(0)
    document.querySelector('#resultado').onclick = () => calculo(valor)
        //document.querySelector('#btE').onclick = () => clica("E")
    document.querySelector('#divsao').onclick = () => clica("/")
    document.querySelector("#reset").onclick = () => reset()
}

