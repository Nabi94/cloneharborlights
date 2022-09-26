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
const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:2500,
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
/* Swiper Testimony */


const swiper2 = new Swiper('.swiper-two' , {
  // Optional parameters
  direction: 'horizontal',
  
  autoplay:{
      delay:1500,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
/* End of Testimony */



/* Date Popup */

flatpickr("input[type=text]", {});

/* End of Popup */


/* Open Images */
document.querySelectorAll('.instagram__images').forEach(image=>{
  image.onclick = () =>{
    querySelector('.instagram__popup').style.display="block";
    querySelector('.instagram__popup img').src=image.getAttribute('src');
    console.log("salam");
    
  };
});


/* End of Open Images */