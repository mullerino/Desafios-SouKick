let respostasMat = ['a','b','b']
let respostasCal = ['b','b','b']
let respostasFis = ['a','a','a']
let loop = 1
let respJog = ['x','x','x']
let pontos = 0

function jogar(tema){
    while(loop == 1){
        pontos = 0

        switch(tema){
            case 1:
                quizMat(respostasMat);
                sairQuiz();
                break;
            case 2:
                quizCalc(respostasCal);
                break;
            case 3:
                quizFis(respostasFis);
                break;
        }
    }
    loop = 1
}

function quizMat(gab){
    let nameJogador = prompt("Bem vindo ao QUIZ DOS MELHORES!!\n\nDigite seu nome:")

    alert("Vamos iniciar o Quiz de matemática, se prepare bixin!!")

    respJog[0] = prompt("1 - Qual o grau do seguinte polinomio: 2x^2 + 3x - 5 \na)1º grau \nb)2º grau \nc)3º grau")
    respJog[1] = prompt("2 - Qual o valor de X na equação a seguir: X + 2 * 10 + 5  = 3 \na)19 \nb)22 \nc)20")
    respJog[2] = prompt("3 - Qual função representa a equação a seguir: f(x) = ax+b \na)Função do 2º Grau \nb)Função afim \nc)Função quadrática")

    for(let i =0; i<gab.length; i++){
        if(respJog[i] == gab[i]){
            pontos++
        }
        else{
            console.log("errou")
        }
    }

    alert(`Parabéns ${nameJogador}, você finalizou o quiz de Matemática :)\nVocê fez o total de ${pontos} pontos!`)
}

function quizCalc(gab){
    let nameJogador = prompt("Bem vindo ao QUIZ DOS MELHORES!!\n\nDigite seu nome:")
    alert("Vamos iniciar o Quiz de Cálculo, se prepare bixin!!")
    respJog[0] = prompt("1 - Qual o resultado da seguinte integral: ∫x^2dx \na) x^2 + c \nb)(x^3/3) \nb)(x^4/6)")
    respJog[1] = prompt("2 - Qual alternativa está relacionada ao conceito de derivada: \na)Multiplicar com soma \nb)Taxa de variação \nc)Soma sob uma área definida ou não")
    respJog[2] = prompt("3 - Qual alternativa está relacionada ao conceito de integral: \na)Alguma coisa \nb)Soma sob a área de uma função \nc)Subtração sob a área de uma função")

    for(let i =0; i<gab.length; i++){
        if(respJog[i] == gab[i]){
            pontos++
        }
        else{
            console.log("errou")
        }
    }
    
    alert(`Parabéns ${nameJogador}, você finalizou o quiz de Cálculo :)\nVocê fez o total de ${pontos} pontos!`)
}

function quizFis(gab){
    let nameJogador = prompt("Bem vindo ao QUIZ DOS MELHORES!!\n\nDigite seu nome:")
    alert("Vamos iniciar o Quiz de Física, se prepare bixin!!")
    respJog[0] = prompt("1 - O que diz a primeira equação de Maxwell: \na)Existência de campo eletrico a partir de uma carga \nb)Existência de campo magnético a partir de uma carga \nc)Existência da luz")
    respJog[1] = prompt("2 - Qual o resultado da derivada do Momento linear? \na)2º lei de Newton \nb)Equação da velocidade \nc)Equação da aceleração")
    respJog[2] = prompt("3 - Qual movimento tem aceleração constante? \na)MRU \nb)MRUV \nc)MCUV")

    for(let i =0; i<gab.length; i++){
        if(respJog[i] == gab[i]){
            pontos++
        }
        else{
            console.log("errou")
        }
    }
    
    alert(`Parabéns ${nameJogador}, você finalizou o quiz de Física :)\nVocê fez o total de ${pontos} pontos!`)
}

function sairQuiz(){
    sair = parseInt(prompt("Agora você decide: \n0 - Sair do Quiz \n1 - Jogar novamente"))
    if(sair == 0){
        return loop = 0 ;
    } else if(sair == 1){
        return loop = 1;
    } else{
        alert("Digite um valor válido!!")
    }
}