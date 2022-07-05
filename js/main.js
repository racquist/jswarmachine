const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]") 
const roboCor = document.querySelectorAll("[data-alteraCor]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
roboCor.forEach((elemento)=>{
    elemento.addEventListener("click", (evento) => {
       console.log(evento.target.alt)
        trocaImagem(evento.target.alt)
        
    })
})




controle.forEach((elemento) =>{
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
        })
})

function manipulaDados(operacao, controle){

    const peca = controle.querySelector("[data-contador]")

    if(operacao === "+"){
        if(peca.value<5){
            peca.value = parseInt(peca.value) + 1
        }
    } 
    else{
        if(peca.value>1){
            peca.value = parseInt(peca.value) - 1
        }
    }

    
}

function atualizaEstatistica(peca){
    
    estatistica.forEach( (elemento) => {
        console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })   
}
function trocaImagem(cor){
    var img = document.querySelector("#robotron")
    img.setAttribute('src', "img/Robotron 2000 - "+cor+"/robotron.png")
 }