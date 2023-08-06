const profile = document.querySelector('.prof-img');
profile.addEventListener('click',function(){
    const menu = document.querySelector('.prof-menu');
    menu.classList.toggle('action');
}) 

/////////////////////////////////////////////////////////

let divScroll = document.querySelector('#scroll')

window.addEventListener('scroll', function () {
    
    let scrollTop = window.scrollY;

    let documentHeight = document.body.clientHeight;

    // console.log(documentHeight);

    let windowHeight = window.innerHeight;

    // console.log(windowHeight);

    let scrollPercent = scrollTop / (documentHeight - windowHeight);

    // console.log(scrollPercent);

    let scrollPercentRounded = Math.round(scrollPercent * 100);

    divScroll.style.width = scrollPercentRounded + '%';

    // console.log(scrollPercentRounded);
})

////////////////////////////////////////////////////////////////////


let sl = document.querySelector('#slider');
let sliderImgElem = sl.querySelector('img')
let prevBtn = sl.querySelector('.prev')
let nextBtn = sl.querySelector('.next')

let imgSrcArray = ['img/slider1.jpeg', 'img/slider2.webp', 'img/slider3.webp']

let imgIndex = 0


function prevImage() {
  imgIndex--
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1
  }
  sliderImgElem.setAttribute('src', imgSrcArray[imgIndex])
//   console.log(imgIndex, imgSrcArray[imgIndex]);

}



function nextImage() {
  imgIndex++
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0
  }
  sliderImgElem.setAttribute('src', imgSrcArray[imgIndex])
//   console.log(imgIndex, imgSrcArray[imgIndex]);
}

setInterval(nextImage, 3000);

prevBtn.addEventListener('click', prevImage)
nextBtn.addEventListener('click', nextImage)


//////////////////////////////////////////////////////////////


// $(document).ready(function() {
 
//   var next = $(".discount-products");
 
 
//   // Custom Navigation Events
//   $(".right").click(function(){
//     alert('55664')
    
//   })
//   $(".left").click(function(){
//     alert('541952')
//   })
 
// });
$(document).ready(function() {
 
  var owl = $(".discount-products");
 
  owl.owlCarousel({
    items:4,
    rtl:true,
    loop : true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  });
 
  // Custom Navigation Events
  $(".right").click(function(){
    owl.trigger('next.owl.carousel');
    // alert('55664')
  })
  $(".left").click(function(){
    owl.trigger('prev.owl.carousel');
    // alert('541952')
  })
 
});


///////////////////////////////////////////////////////////////

var review_holder=$('.new_review');
review_holder.owlCarousel({
  items:4,
  rtl:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  
});

// $(document).ready(function() {
 
//   $(".newproduct-items").owlCarousel({
//   items:4,
//   rtl:true,
//   autoplay:true,
//   autoplayTimeout:2000,
//   autoplayHoverPause:true,
//   }); 
 
// });

// $('.newproduct-items').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })

// alert('cceeec');

////////////////////////////////////////////////////////////
$(document).ready(function() {
 
  var owl = $(".popular_review");
 
  owl.owlCarousel({
    items:4,
    rtl:true,
    loop : true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  });
 
  // Custom Navigation Events
  $(".nextt").click(function(){
    owl.trigger('next.owl.carousel');
    // alert('55664')
  })
  $(".preve").click(function(){
    owl.trigger('prev.owl.carousel');
    // alert('541952')
  })
 
});
///////////////////////////////////////////
