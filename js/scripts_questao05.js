//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let ld1 = parseFloat(objFormDados.get('lado1'))
    let ld2 = parseFloat(objFormDados.get('lado2'))
    let ld3 = parseFloat(objFormDados.get('lado3'))

    let triangulo = ''
    
    if((ld1 == ld2) && (ld1 == ld3) && (ld2 == ld3)){
        triangulo = 'Triângulo Equilátero'
    }else if((ld1 != ld2) && (ld1 != ld3) && (ld2 != ld3)){
           triangulo = 'Triângulo Escaleno'
    }else{
           triangulo = 'Triângulo Isócele'
    }


    divResultado.innerHTML = `Lado1 ${ld1}, Lado2 ${ld2} e Lado3 ${ld3}, esse triângulo é ${triangulo}`

    formDados.reset()

})