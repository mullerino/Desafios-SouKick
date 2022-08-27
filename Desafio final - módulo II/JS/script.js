let slidePos = 1;
let slidePosAut = 1;
let slideAut
let slidePosSobre = 1
const forms = document.getElementById('form')

mostrarSlide(slidePos)
slideAut = setInterval(passarSlideAut,4500)
mostrarSlideSobre(slidePosSobre)

function mostrarSlide(n){
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
    slides[slidePos-1].style.display = 'block'
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
    slides[slidePosAut-1].style.display = 'block'

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

function confirmarEnvio(){
    let inputName = document.getElementById('nome')
    let inputEmail = document.getElementById('email')
    let inputMensagem = document.getElementById('mensagem')
    let buttonEnviar = document.getElementById('btn')
    let caixa = document.getElementsByClassName('caixa-confirm')
    let corFundo = document.getElementsByClassName('bg')
    let opacityMap = document.getElementsByClassName('mapouter')

    if(inputName.value != '' && inputEmail.value != '' && inputMensagem.value != ''){
        inputName.disabled = true;
        inputEmail.disabled = true;
        inputMensagem.disabled = true;
        buttonEnviar.disabled = true;
        caixa[0].style.display = 'block';
        caixa[0].style.opacity = '1';
        opacityMap[0].style.opacity = '0.5';
        corFundo[0].style.display = 'block';
    } else{
        alert("Preencha todos os campos!")
    }

}

