let nomes = ['Leandro','Arthur','Théo','Miguel','Noah','Benjamin','Helena','Alice','Laura','Manuela']

function showName(){
    let numbername = parseInt(Math.random()*(nomes.length-1)+1)
    let showname = document.getElementById("nome").innerHTML = "Nome: " + nomes[numbername]
    return showname
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