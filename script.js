gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }


});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



function myFunction() {
  document.querySelector(".drop").style.opacity = "1";
  document.querySelector(".drop").style.display = "block";
  document.querySelector(".drop").style.pointerEvents = "all";
    document.querySelector(".menu-btn").style.display = "none";
    document.querySelector(".close").style.display = "block";
    document.querySelector(".close").style.opacity = "1";
    gsap.to(".drop",{
      transform: 'translateY(0%)',
      duration:1,
      opacity:1,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    })
  }



  function myFunction2() {
    document.querySelector(".drop").style.display = "none";
      document.querySelector(".menu-btn").style.display = "block";
      document.querySelector(".close").style.display = "none";
    document.querySelector(".drop").style.opacity = "0";
    document.querySelector(".close").style.opacity = "0";
    gsap.to(".drop",{
      transform: 'translateY(-150%)',
      duration:2,
      opacity:0,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    })
  }

  Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.textAnimate(".text-target" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


// gsap.to("#nav",{
//   y:0,
//   duration:2,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
// })

gsap.from(".img2",{
  y:-30,
  duration:2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  delay:0.5
})

gsap.to(".img3",{
  x:-40,
  duration:2,
  ease:Power4,
  opacity:1
})


// gsap.to(".b-rightside",{
//   transform: `translateX(-10%)`,
//     opacity: 1,
//   duration:2,
//   ease:Power4,
//   delay: 3,
// })

// gsap.to(".b-left",{
//   transform: `translateX(0%)`,
//     opacity: 1,
//   duration:2,
//   ease:Power4,
// })


// var tl = gsap.timeline({ paused: true });

// tl.to(".b-rightside",{
//   transform: `translateX(-10%)`,
//     opacity: 1,
//   duration:3,
//   ease:Power4,
//   scrollTrigger:{
//     trigger:".b-rightside",
//     scroller:"#main",
//     markers:true,
//     start:"top 20%",
//     end:"top -20%",
//     scrub: 3
//   }
// },"-=1.2")
//   .to(".b-left",{
//     transform: `translateX(0%)`,
//       opacity: 1,
//     duration:2,
//     ease:Power4,
//     scrollTrigger:{
//       trigger:".b-left",
//       scroller:"#main",
//       // markers:true,
//       start:"top 20%",
//       end:"top -30%",
//       scrub: 3
//     }
//   })

var tl = gsap.timeline();

// Select all elements with the class name '.b-rightside'
var elements = document.querySelectorAll('.b-rightside');

// Loop through each element and add animations with staggered delays
elements.forEach((element, index) => {
  tl.to(element, {
    transform: 'translateX(-5%)',
    opacity: 1,
    duration: 3,
    ease: 'power4',
    scrollTrigger: {
      trigger: element,
      scroller: '#main',
      // markers: true,
      start: 'top 50%',
      end: 'top -20%',
      scrub: 3
    }
  });
});


var tl = gsap.timeline();

// Select all elements with the class name '.b-left'
var elements = document.querySelectorAll('.b-left');

// Loop through each element and add animations with staggered delays
elements.forEach((element, index) => {
  tl.to(element, {
    transform: 'translateX(-10%)',
    opacity: 1,
    duration: 3,
    ease: 'power4',
    scrollTrigger: {
      trigger: element,
      scroller: '#main',
      // markers: true,
      start: 'top 60%',
      end: 'top -20%',
      scrub: 3
    }
  });
});


const line = document.getElementById('c-line');

gsap.to(line, {
  backgroundColor: '#22CFB8',
  scrollTrigger: {
    trigger: line,
    scroller: '#main',
    start: 'top 50%',
    end: 'bottom 50%',
    scrub: 3,
    // markers: true, 
  }
});



var circle = document.querySelectorAll('.zero');

// Loop through each  and add animations with staggered delays
circle.forEach((circle, index) => {
  tl.to(circle, {
    backgroundColor:"#6A73FC",
    duration: 3,
    ease: 'power4',
    scrollTrigger: {
      trigger: circle,
      scroller: '#main',
      // markers: true,
      start: 'top 60%',
      end: 'top -10%',
      scrub: 3
    }
  });
});

function togglePopup() {
  document.getElementById("form-page").style.display = "block";
}

function closePopup() {
  document.getElementById("form-page").style.display = "none";

}


const body = document.querySelector("body")
const navbar = document.getElementById("nav");

body.addEventListener("wheel",function(dets){
  if(dets.deltaY > 0){
    gsap.to(navbar,{
      transform: 'translateY(-30vw)',
      width: '150%',
      duration:2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    })
  }else{
    gsap.to(navbar,{
      transform: 'translateY(0%)',
      width: '90%',
      duration:1,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    })
  }
})