//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let n1 = parseFloat(objFormDados.get('num1'))
    let n2 = parseFloat(objFormDados.get('num2'))
    let n3 = parseFloat(objFormDados.get('num3'))

    let media = (n1 + n2 + n3) / 3

    divResultado.innerHTML = `A MÉDIA DOS NÚMEROS DIGITADOS É: ${media.toFixed(2).replace('.',',')}`

    formDados.reset()

})