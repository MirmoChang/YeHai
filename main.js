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


//輪播圖的JS
$(".responsive").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: {
        delay: 5000,
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  