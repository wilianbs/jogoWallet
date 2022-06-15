

function addNomes(){
    const nomes = document.querySelector("#nome").value;
    
    if (nomes){

        //Clonar html
        const template =document.querySelector(".dados");

        const newNome = template.cloneNode(true)

        newNome.querySelector("#nome").textContent = nomes;

        newNome.classList.remove(".linhaDePontos")

        const novo = document.querySelector(".linhaDePontos")

        novo.appendChild(newNome);

        document.querySelector("#nome").value = "";



    }


}


const addBtn = document.querySelector(".btnAdicionar")

addBtn.addEventListener( "click", function(e){

    e.preventDefault()
    
    addNomes()
})



   

