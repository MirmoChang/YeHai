const body = document.querySelector('body');
const drawer = document.querySelector('.drawer-nav-open');
const drawerNav = document.querySelector('.drawer-nav');

window.addEventListener("click", function () {
    // document.getElementsByClassName('drawer-nav')[0].id = 'drawer-nav-show';
    document.getElementsByClassName('drawer-nav')[0].style.left = '0';
    // drawerNav.classList.toggle('.drawer-nav-open');
})