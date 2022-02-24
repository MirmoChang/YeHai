const body = document.querySelector('body');
const drawer = document.querySelector('.drawer-open');
const drawerNav = document.querySelector('.drawer-nav');

window.addEventListener("click",function(){
    if(document.querySelector('.drawer-nav').style.left = 0){
        document.querySelector('.drawer-nav').remove('drawer-nav--open');
    }else{
        document.querySelector('.drawer-nav').add('drawer-nav--open');
    }
})