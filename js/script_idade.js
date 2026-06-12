//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let nome = objFormDados.get('nome')
    let idade = objFormDados.get('idade')

    let situacaoIdade = ''

    if (idade >= 18){
        situacaoIdade = `${nome}, vc é maior de idade`
    }else{
        situacaoIdade = `${nome}, vc é menor de idade`
    }

    divResultado.innerHTML = situacaoIdade


})