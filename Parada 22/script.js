let respostasMat = ['a','b','b']
let respostasCal = ['b','b','b']
let respostasFis = ['a','a','c']
let loop = 1
let respJog = ['x','x','x']
let pontos = 0
let nameJogador = ''
let erros = ['','','']

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
                sairQuiz();
                break;
            case 3:
                quizFis(respostasFis);
                sairQuiz();
                break;
        }
    }
    loop = 1
}

function quizMat(gab){
    nameJogador = prompt("Bem vindo ao QUIZ DOS MELHORES!!\n\nDigite seu nome:")

    if(nameJogador != null){
        alert("Vamos iniciar o Quiz de matemática, se prepare bixin!! \n\nLembre de escrever com a letra que corresponde a resposta correta na sua concepção!")

        respJog[0] = prompt("1 - Qual o grau do seguinte polinomio: 2x^2 + 3x - 5 \na) 1º grau \nb) 2º grau \nc) 3º grau").toLowerCase()
        respJog[1] = prompt("2 - Qual o valor de X na equação a seguir: X + 2 * 10 + 5  = 3 \na) 19 \nb) 22 \nc) 20").toLowerCase()
        respJog[2] = prompt("3 - Qual função representa a equação a seguir: f(x) = ax+b \na) Função do 2º Grau \nb) Função afim \nc) Função quadrática").toLowerCase()
        compararGab(gab);

        alert(`Parabéns ${nameJogador}, você finalizou o quiz de Matemática :)\nVocê fez o total de ${pontos} pontos! \n\nFeedback:\nQuestão 1: ${erros[0]}\nQuestão 2: ${erros[1]} \nQuestão 3: ${erros[2]}`)
    } else {
        alert("Você não digitou um nome '-'")
    }
}

function quizCalc(gab){
    nameJogador = prompt("Bem vindo ao QUIZ DOS MELHORES!!\n\nDigite seu nome:")

    if(nameJogador != null){
        alert("Vamos iniciar o Quiz de Cálculo, se prepare bixin!! \n\nLembre de escrever a letra que corresponde a resposta correta na sua concepção!")
        respJog[0] = prompt("1 - Qual o resultado da seguinte integral: ∫x^2dx \na) x^2 + c \nb) (x^3/3) + c \nc) (x^4/6) + c").toLowerCase()
        respJog[1] = prompt("2 - Qual alternativa está relacionada ao conceito de derivada: \na) Multiplicar com soma \nb) Taxa de variação \nc) Soma sob uma área definida ou não").toLowerCase()
        respJog[2] = prompt("3 - Qual alternativa está relacionada ao conceito de integral: \na) Alguma coisa \nb) Soma sob a área de uma função \nc) Subtração sob a área de uma função").toLowerCase()

        compararGab(gab);
        
        alert(`Parabéns ${nameJogador}, você finalizou o quiz de Cálculo :)\nVocê fez o total de ${pontos} pontos! \n\nFeedback:\nQuestão 1: ${erros[0]}\nQuestão 2: ${erros[1]} \nQuestão 3: ${erros[2]}`)
    } else {
    alert("Você não digitou um nome '-'")
    }
}


function quizFis(gab){
    nameJogador = prompt("Bem vindo ao QUIZ DOS MELHORES!!\n\nDigite seu nome:")

    if(nameJogador != null){
        alert("Vamos iniciar o Quiz de Física, se prepare bixin!! \n\nLembre de escrever a letra que corresponde a resposta correta na sua concepção!")

        respJog[0] = prompt("1 - O que diz a primeira equação de Maxwell: \na) Existência de campo eletrico a partir de uma carga \nb) Existência de campo magnético a partir de uma carga \nc) Existência da luz").toLowerCase()
        respJog[1] = prompt("2 - Qual o resultado da derivada do Momento linear? \na) 2º lei de Newton \nb) Equação da velocidade \nc) Equação da aceleração").toLowerCase()
        respJog[2] = prompt("3 - A primeira lei de Newton afirma que, se a soma de todas as forças atuando sobre um corpo é zero, ele: \na) Terá um movimento uniformemente variado. \nb) Apresentará velocidade constante. \nc) Apresentará velocidade constante em módulo, mas sua direção pode ser alterada.").toLowerCase()

        compararGab(gab);
        
        alert(`Parabéns ${nameJogador}, você finalizou o quiz de Física :)\nVocê fez o total de ${pontos} pontos! \n\nFeedback:\nQuestão 1: ${erros[0]}\nQuestão 2: ${erros[1]} \nQuestão 3: ${erros[2]}`)
    } else {
        alert("Você não digitou um nome '-'")
    }
}

function sairQuiz(){
    let aux = 1

    while(aux== 1){
        sair = parseInt(prompt("Agora você decide: \n1 - Jogar novamente \n0 - Sair do Quiz"))
        if(sair == 0){
            aux = 0
            return loop = 0;
        } else if(sair == 1){
            aux= 0
            return loop = 1;
        } else{
            alert("Digite um valor válido!!")
        }
    }
}


function compararGab(gabarito){
    for(let i =0; i<gabarito.length; i++){
        if(respJog[i] == gabarito[i]){
            pontos++
            erros[i] = 'Correta'
        }
        else{
            erros[i] = 'Incorreta'
        }
    }
}