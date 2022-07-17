let nomes = ['Leandro','Arthur','Théo','Miguel','Noah','Benjamin','Helena','Alice','Laura','Manuela']

function showName(){
    let nameShw = parseInt(Math.random()*(nomes.length-1)+1)
    document.getElementById("nome").innerHTML = "Nome: " + nomes[nameShw]
}

function adicionarNome(){
    let newname = prompt("Digite aqui:")
    isNaN(newname)

    if(isNaN(newname)){
        if(confirm("Tem certeza que desejar adicionar o nome " + newname + " ?")){
            nomes.push(newname)
            alert("Nome adicionado!")
        }
    } else {
        alert("Você digitou um número")
    }
}