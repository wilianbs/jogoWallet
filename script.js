
    //teste de somar array
    //------------------------------------
    let jogador ={
        nome: "wilian",
        pontos: [1,2,3]

        
    }
    let soma =0
    for(let pos in jogador.pontos){
        soma += jogador.pontos[pos]

    }
    
        console.log (jogador.pontos)
        console.log(soma)

    //------------------------------------------



    
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

 








   

