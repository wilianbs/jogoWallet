
    
    this.jogador =[
        { nome: "wilian", pontos: [1,12,3,2], total:[]},
        { nome: "Joao", pontos: [7,9,6,3], total:[] },
        { nome: "maria", pontos:[4,9,5,3,10], total:[] }

    ]
  

    this.id = 0
    let chave = 1
    var soma = 0;

    for (var i = 0; i < jogador[chave].pontos.length; i++) {
        soma += jogador[chave].pontos[i]
    }

    jogador[chave].total.push(soma)
        
   
   // console.log(soma)
   // console.log(jogador[chave].total)

  // adicionar(dadosJogador){
   // this.jogador.push(dadosJogador)
   // this.id++

//}



    function salvar(){
        let addDados = this.lerDados()
        
        console.log(dadosJogador)

    }
    function lerDados(){
        let dadosJogador = {}

        dadosJogador.id = this.id;
        dadosJogador.nome = document.querySelector("#nome").value;
        dadosJogador.pontos = document.querySelector("input#pontos").value;

        return dadosJogador;

    }

console.log(jogador)












    /*
        let valoresTotal = []

     function addValores() {

        let valor = document.querySelector("input#pontos")
        let vNum = document.querySelector (".valoresSoma")
        let resultado = document.querySelector (".total")
        
        
        valoresTotal.push(Number(valor.value))
        vNum.innerHTML=` ${valoresTotal}`
        valor.value = ""
        let soma =0

        for(let pos in valoresTotal){
            soma += valoresTotal[pos]

        }
        resultado.innerHTML=`${soma}`
     }

    


function addNomes(){
    const nomes = document.querySelector("#nome").value;
   
    if (nomes){

        //Clonar html
        const template =document.querySelector(".dados");

        const newNome = template.cloneNode(true)

        newNome.querySelector("#nome").textContent = nomes;

        //newNome.classList.remove(".pontos")

        const novo = document.querySelector(".linhaDePontos")

        novo.appendChild(newNome);


        const removeBtn = newNome.querySelector(".removBtn").addEventListener("click", function (){
            renoveNome (this)

            
        })

        document.querySelector("#nome").value = "";
  

    }
}

function renoveNome(novo){
    novo.parentNode.remove (true)


}


const addBtn = document.querySelector(".btnAdicionar")

addBtn.addEventListener( "click", function(e){

    e.preventDefault()
    
    addNomes()


})

 





*/


   

