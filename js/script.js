function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "https://github.com/rllimaferreira/aprendendo_menu_sanduiche/blob/main/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "https://github.com/rllimaferreira/aprendendo_menu_sanduiche/blob/main/img/close_white_36dp.svg"
    }
}

// Objetivo: fazer com que o quadrado que fica embaixo do menu sanduíche apareça apenas quando clicar
