let slidePos = 1;
mostrarSlide(slidePos)

function mostrarSlide(n){
    let slides = document.getElementsByClassName("slide")
    alert(slides.length)

    if(n>slides.length){
        n = 1;
    }

    for(let i =0; i<slides.length;i++){
        slides[i].style.display = 'none'
    }
}