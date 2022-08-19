let slidePos = 1;
let slidePosAut = 1;
let slideAut

mostrarSlide(slidePos)
slideAut = setInterval(passarSlideAut,4500)

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


