let slidePos = 1;
let slidePosAut = 1;
let slideAut
let slidePosSobre = 1
const forms = document.getElementById('form')
const subtitle = document.querySelector('h2')
const title = document.querySelector('.line')

//mostrarSlide(slidePos)
//slideAut = setInterval(passarSlideAut,4500)
//mostrarSlideSobre(slidePosSobre)
/*function mostrarSlide(n){
    let pontos = document.getElementsByClassName("ponto")
    let slides = document.getElementsByClassName("slide")
    if(n>slides.length){
        slidePos = 1;
    }
    if(n<=0){
        slidePos = slides.length;
    }
    for(let i =0; i<slides.length;i++){
        slides[i].style.display = 'none'
    }
    for(let i =0; i<pontos.length;i++){
        pontos[i].className = pontos[i].className.replace('active','')
    }
    pontos[slidePos-1].className += ' active'
    //slides[slidePos-1].style.display = 'block'
}
function passarSlide(n){
    clearInterval(slideAut)
    mostrarSlide(slidePos+=n)
    slideAut = setInterval(passarSlideAut,4500)
}
function passarSlidePonto(n){
    clearInterval(slideAut)
    mostrarSlide(slidePos=n)
    slideAut = setInterval(passarSlideAut,4500)
}
function passarSlideAut(){
    let pontos = document.getElementsByClassName("ponto")
    let slides = document.getElementsByClassName("slide")
    if(slidePosAut>slides.length){
        slidePosAut = 1;
    }
    if(slidePosAut<=0){
        slidePosAut = slides.length;
    }
    for(let i =0; i<slides.length;i++){
        slides[i].style.display = 'none'
    }
    for(let i =0; i<pontos.length;i++){
        pontos[i].className = pontos[i].className.replace('active','')
    }
    pontos[slidePosAut-1].className += ' active'
    //slides[slidePosAut-1].style.display = 'block'
    slidePosAut+=1
}
function mostrarSlideSobre(n){
    let slidesSobre = document.getElementsByClassName('sobre-card');
    if(n>slidesSobre.length){
        slidePosSobre = 1;
    }
    if(n<=0){
        slidePosSobre = slidesSobre.length
    }
    for(let i = 0; i<slidesSobre.length; i++){
        slidesSobre[i].style.display = 'none'
    }
    slidesSobre[slidePosSobre-1].style.display = 'flex'
}
function passarSlideSobre(n){
    mostrarSlideSobre(slidePosSobre+=n)
}
*/

function confirmarEnvio(){
    let inputName = document.getElementById('nome')
    let inputEmail = document.getElementById('email')
    let inputMensagem = document.getElementById('mensagem')
    let buttonEnviar = document.getElementById('btn')
    let caixa = document.getElementsByClassName('caixa-confirm')
    let corFundo = document.getElementsByClassName('bg')
    let opacityMap = document.getElementsByClassName('mapouter')


    if(inputName.value != '' && inputEmail.value != '' && inputMensagem.value != ''){
        buttonEnviar.disabled = 'true'
        caixa[0].style.display = 'block';
        caixa[0].style.opacity = '1';
        opacityMap[0].style.opacity = '0.5';
        corFundo[0].style.display = 'block';
    } else{
        alert("Preencha todos os campos!")
    }
}

function showMenu(){
    let menu = document.getElementById('navbar')
    let header = document.getElementById('header')

    if(menu.className === 'header-navbar'){
        menu.className += ' responsive'
        header.style.height = '330px'
        header.style.background = '#feda12'
    }
    else{
        menu.className = 'header-navbar'
        header.style.height = '128px'
    }
}

const players = Array.from(document.querySelectorAll('.play-on-screen')) // transforma a node lista em array

function isOnScreen(el) { // qual elemento está na tela
    let rect = el.getBoundingClientRect() // pega o bottom ou top do elemento em relação ao viewport
    return rect.top > 0 && rect.bottom - 700 < window.innerHeight;
}

function playAnimation(el){
    if(isOnScreen(el)){
        el.style.animationPlayState = 'running'
    }
}

const render = () => players.forEach(playAnimation);

window.addEventListener('scroll',render);
render();

function loading(){
    let load = document.getElementById('load');
    let content = document.getElementsByClassName('container')

    load.style.display = 'none'
    content[0].style.display = 'block'

    return true
}

const display = title
let frase = ['Olá, bem vindo ao MARIA']
let fim = false
let deletar = false
let i = 0
let j = 0
let fraseAtual = []

function typeWrite(){
    fim = false
    display.innerHTML = fraseAtual.join('')

    if(i<frase.length){
        if(!deletar && j<=frase[i].length){
            fraseAtual.push(frase[i][j])
            j++
            display.innerHTML = fraseAtual.join('')
        }
        if(deletar){
            fraseAtual.pop(frase[i])
            j--
            display.innerHTML = fraseAtual.join('')
        }
        if(j == frase[i].length){
            fim = true
            deletar = true
        } 

        if(deletar && j == 0){
            deletar = false
            fraseAtual = []
            i++
            if(i == frase.length){
                i = 0;
            }
        }
    }
    
    const spedUp =  Math.random() * (60 -50) + 50
    const normalSpeed = Math.random() * (300 -200) + 200
    const tempo = fim ? 4000 : deletar ? spedUp : normalSpeed
    setTimeout(() => typeWrite(), tempo)
}

roboBaixo = document.getElementsByClassName('robo-animaa')
roboCima = document.getElementsByClassName('robo-anima')
moverDir = document.getElementsByClassName('move')
moverEsq = document.getElementsByClassName('moveb')

/*function playAnim(robo,tipo_anim){
    if(loading()){
        tipo_anim[0].style.animationPlayState = 'running'
        robo[0].style.display = 'block'
    }
}
function stopAnim(robo,tipo_anim){
    tipo_anim[0].style.animationPlayState = 'paused'
    robo[0].style.display = 'none'
}
playAnim(roboCima, moverEsq)
*/

var largura = window.innerWidth
document.documentElement.clientWidth
document.body.clientWidth;
var test = ''
let x = 0 

function moverRobo(){
    let i = 0
    let j = 0
    let c = 2

    roboCima[0].style.transform = 'translateX(0px)'
    roboBaixo[0].style.transform = 'translateX(0px)'
    roboCima[0].style.display = 'block'
   
    move = setInterval(function(){
        roboCima[0].style.transform = `translateX(${i}px)`

        if(roboCima[0].style.transform == 'translateX(1420px)'){
            roboCima[0].style.display = 'none'
            roboCima[0].style.transform = 'translateX(0px)'
            c = 1
        }
        else{
            i = i + 1
        }
        if(c == 1){
            roboBaixo[0].style.display = 'block'
            roboBaixo[0].style.transform = `translateX(${j}px)`
            if(roboBaixo[0].style.transform == 'translateX(-1425px)'){
                roboBaixo[0].style.display = 'none'
                roboBaixo[0].style.transform = 'translateX(0px)'
                clearInterval(move)
                c = 0
            }
            else{
                j = j-1;
            }
            
            if(c == 0){
                moverRobo()
            }
        }
        //}
    }, 0.01)
}


if(largura >= 1500){
    var m = setInterval(moverRobo(), 100)
    if(loading()){
        title.innerHTML = ''
        typeWrite()
    }
}