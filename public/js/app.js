let menu = document.querySelector('.menu');
let navegador = document.querySelector('.nav-principal');
let iconBar = menu.innerHTML;
let iconX = '<i class="fa-solid fa-xmark"></i>';
menu.addEventListener('click', () => {
    if(navegador.classList.contains('cx-nav')){
        navegador.classList.remove('dp-nav');
        setTimeout(() => {
            navegador.classList.remove('cx-nav');
        }, 10);
        menu.innerHTML = iconX;
    } else{
        navegador.classList.add('cx-nav');
        menu.innerHTML = iconBar;
    }
});
navegador.addEventListener('transitionend' , () => {
    if(navegador.classList.contains('cx-nav')){
        navegador.classList.add('dp-nav');
    }
});

let botones = document.querySelectorAll('nav > ul > li > a');
botones.forEach(activar => {
    activar.addEventListener('click', () => {
        botones.forEach(remover => {
            remover.classList.remove('activo');
        });
        activar.classList.add('activo');
    });
});