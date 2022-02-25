const body = document.querySelector('body');
const drawer = document.querySelector('.drawer-nav-open');
const overLay = document.querySelector('.drawer-overlay');

drawer.addEventListener("click", function(){
    document.getElementsByClassName('drawer-nav')[0].id = 'drawer-nav-show';
    document.getElementsByClassName('drawer-overlay')[0].id = 'draw-overlay';
})

overLay.addEventListener("click", function(){
    document.getElementById('drawer-nav-show').removeAttribute('id');
    document.getElementById('draw-overlay').removeAttribute('id');
})

