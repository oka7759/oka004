import _, { reduce } from 'lodash'

const headScroll = document.querySelector ('header');


window.addEventListener('scroll', _.throttle(function(){

    if(window.scrollY > 500){
        gsap.to(headScroll, .6,{
          opacity: 0.8
        });
       


    }else{
        gsap.to(headScroll, .6,{
            opacity: 1
          });

    }


}));


const fadeEls = document.querySelectorAll('.wellcome__message .fade-in ');

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1
        opacity: 1
    })

});


const aboutEls = document.querySelectorAll ('.about .inner .about__me .fade-in');

window.addEventListener('scroll', _.throttle(function(){

    if(window.scrollY > 300){
        gsap.to("#animate", 2,{
                opacity:1
        })
        TweenLite.to("#animate", 2, { 
            left: 100, top: 150,  ease: Power4.easeIn });
   
   
        aboutEls.forEach(function(aboutEl, index){
            gsap.to(aboutEl, 1, {
                delay: (index + 1) * .9, // 0.7, 1.4, 2.1
                opacity: 1
            })
        
        });


    }

}));


  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  

    $(".main-menu li a").click(function() {
        var scrollPosition = $($(this).attr("data-target")).offset().top;
        alert(scrollPosition);
       //window.scrollTo(xpos, ypos);
       // 스무스 옵션을 이용하려면 {감싸고 옵션 적용}
        window.scrollTo({ left: 0, top: scrollPosition, behavior: "smooth" });
      });

    


