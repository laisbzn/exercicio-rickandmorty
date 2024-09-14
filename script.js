
async function executar(){
    console.log("Iniciando...")
  
    const elementoInput = document.getElementById("idPersonagem")
    const id = elementoInput.value 
    
    const personagem = await buscarPersonagemDaAPI(id)
  
    const elementoImg = document.getElementById("imgPersonagem")
    const elementoNome = document.getElementById("nomePersonagem")

    elementoImg.src = personagem.image
    elementoNome.innerHTML = personagem.name
 
}



async function buscarPersonagemDaAPI(id){
    const url = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(url)
    return response.json()
}