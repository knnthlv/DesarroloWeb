function accion() {
    console.log('Está funcionando mi botón');
    var ancla = document.getElementsByClassName('nav-enlace');
    for (var i =0; i < ancla.length; i++) {
        ancla[i].classList.toggle('desaparece');
    }
}