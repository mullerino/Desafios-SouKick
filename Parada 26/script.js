function validar(){
    const formulario = document.getElementById('forms')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inputNome = formulario.elements['name'].value
    var inputEmail = document.getElementById('email').value
    var inputIdade = formulario.elements['idade'].value
    var radioPos = document.querySelector('input[name=posicao]:checked').value
    var selectValor = formulario.elements['tipo-select'].value

    if(inputEmail.match(mailformat)){
    } else {
        alert("Email inválido")
        document.getElementById('email').style = 'background-color: #dd5035;'
        document.getElementById('email').focus()
        return false
    }

    if(inputIdade < 14 || inputIdade >70){
        alert("Você deve ter entre 14 e 70 anos de idade.")
        return false
    }

    infos(inputNome,inputEmail,inputIdade,radioPos,selectValor)

    return true
}

function infos(nome,email,idade,posicao,selecao){
    if(confirm(`Confira se os dados foram preenchidos corretamente: \n\nNome: ${nome} \nEmail: ${email} \nIdade: ${idade} \nPosição: ${posicao} \nTipo de campeão: ${selecao}\n`)){
    }
}