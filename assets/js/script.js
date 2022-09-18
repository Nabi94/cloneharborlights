AOS.init();

// loader
let loader = function() {
    setTimeout(function() { 
        if($('#ftco-loader').length > 0) {
            $('#ftco-loader').removeClass('show');
        }
    }, 1000);
};
loader();
//End of Loader

/* Header */
const nav=document.querySelector("#header");
window.onscroll = function(){
    let myTop=window.scrollY;
    if (myTop>=400){
        header.classList.add('active2');
        document.querySelector('.header__logo-link').style.color="black";
        document.querySelector('#header').style.transition=".5s all";
        document.querySelector('#header').style.transform="translateY(0)";
        
    }else if(myTop>=100){
        header.classList.add('active2');
        document.querySelector('.header__logo-link').style.color="black";
        document.querySelector('#header').style.transition=".5s all";
        document.querySelector('#header').style.transform="translateY(-90px)";

    }
    else{
        header.classList.remove('active2');
        document.querySelector('.header__logo-link').style.color="white";
        document.querySelector('#header').style.transform="translateY(0)";
    }
    

};
/* End of Header */


/* Swiper  */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed:2500,
    loop: true,
    autoplay:{
        delay:3000,
        duration:5000,
        transition:0.5,
    },
    effect: 'fade',
    fadeEffect: {
    crossFade: true
  },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
  });


/* End of Swiper */

/* Date Popup */

flatpickr("input[type=text]", {});

/* End of Popup */