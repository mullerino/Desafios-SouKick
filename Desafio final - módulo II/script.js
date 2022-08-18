let slidePos = 1;
let slidePosAut = 1;
let habAut = 0;
var tempo = null

mostrarSlide(slidePos)
passarSlideAut(slidePosAut)

function mostrarSlide(n){
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

    slides[slidePos-1].style.display = 'block'
    
}

function passarSlide(n){
    habAut = 1
    clearTimeout(tempo)
    mostrarSlide(slidePos+=n)
    tempo = setTimeout(passarSlideAut,null)
}

function passarSlideAut(){
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

    slides[slidePosAut-1].style.display = 'block'

    slidePosAut+=1

    tempo = setTimeout(passarSlideAut,4500)
}
