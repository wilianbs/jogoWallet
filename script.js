

var valor = document.querySelector("input#pontos")

     console.log (valor.value)

    


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

 








   

