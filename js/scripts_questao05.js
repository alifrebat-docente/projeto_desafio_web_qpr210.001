//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let largura = parseFloat(objFormDados.get('largura'))
    let altura = parseFloat(objFormDados.get('altura'))
    
    let area = largura * altura


    divResultado.innerHTML = `A área a ser pintada é de ${area.toFixed(2).replace('.',',')}m², <br> Total de litros para pintar essa área é de ${parseFloat(area / 2).toFixed(2).replace('.',',')}l`

    formDados.reset()

})