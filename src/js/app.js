// "use strict"


// function changerActive(list) {
//     for(let i = 0; i < list.length; i++) {
//         list[i].classList.remove('active')
//     }
//     list = 0
// }
// // scroll document false

// function is_touch_device() {
//     return ('ontouchstart' in window);
//   }
  
//   function bodyFixed() { //scroll - false
//     if(is_touch_device()) {
//       document.body.classList.add('fixed')
//     } else {
//       let x=window.scrollX;
//       let y=window.scrollY;
//       window.onscroll=function(){window.scrollTo(x, y);};
//     }
//   }
  
//   function bodyNotFixed() { // scroll - true
//     if(is_touch_device()) {
//       document.body.classList.remove('fixed')
//     } else {
//       window.onscroll=function(){window.scrollTo()};
  
//     }
//   }

  
// //production block
// let category = document.querySelectorAll('.production__categorys-item')
// let categoryList = document.querySelectorAll('.production__list-w')

// function changerActive(list) {
//     for(let i = 0; i < list.length; i++) {
//         list[i].classList.remove('active')
//     }
//     list = 0
// }

// for(let i=0 ; i < category.length ; i++) {
//     category[i].addEventListener("click",
//     function() {
//         changerActive(category)
//         changerActive(categoryList)
//         category[i].classList.add('active')
//         categoryList[i].classList.add('active')
//         if(window.innerWidth < 1278) {
//             $('body,html').animate({
//                 scrollTop: $('.production__blocks').offset().top-100
//             },500);
//         }
//     })
// }

// let productionQuestion = document.querySelectorAll('.production__item-questions-item')
// let productionQuestionText = document.querySelectorAll('.production__questions-text')
// for(let i=0 ; i < productionQuestion.length ; i++) {
//     productionQuestion[i].addEventListener("click",
//     function() {
//         $(productionQuestionText[i]).slideToggle(400);
//     })
// }


// //hits swiper
// const swiperHits = new Swiper('.hits__swiper', {
//     slidesPerView: 1,
//     navigation: {
//         nextEl: '.hits__next',
//         prevEl: '.hits__prev',
//     },
//     pagination: {
//         el: '.hits__pagination',
//         type: 'bullets',
//         clickable: true,
//       },
// })


// //completed block
// let completedCategory = document.querySelectorAll('.completed__categorys-item')
// let completedCategoryList = document.querySelectorAll('.completed__list')

// for(let i=0 ; i < completedCategory.length ; i++) {
//     completedCategory[i].addEventListener("click",
//     function() {
//         changerActive(completedCategory)
//         changerActive(completedCategoryList)
//         completedCategory[i].classList.add('active')
//         completedCategoryList[i].classList.add('active')
//     })
// }

// //header
// window.onscroll = function() {headerFixed()};

// let header = document.querySelector(".header-w");

// let sticky = header.offsetTop;

// function headerFixed() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("fixed");
//     document.querySelector('.preview').style.paddingBottom = "127px"
//   } else {
//     header.classList.remove("fixed");
//     document.querySelector('.preview').style.paddingBottom = "47px"
//   }
// }
// if (window.pageYOffset >= sticky) {
//     header.classList.add("fixed");
//     document.querySelector('.preview').style.paddingBottom = "127px"
//   } else {
//     header.classList.remove("fixed");
//     document.querySelector('.preview').style.paddingBottom = "47px"
//   }

// //produce swiper
// function createSwiperProduce(number) {
//     const swiperProduce = new Swiper('.produce__swiper', {
//         slidesPerView: 1,
//         navigation: {
//             nextEl: '.produce__next',
//             prevEl: '.produce__prev',
//         },
//         allowTouchMove: false,
//         initialSlide: number,
//     })
// }
// //completed swiper
// function createSwiperCompleted(number) {
//     const swiperCompleted = new Swiper('.completed__swiper', {
//         slidesPerView: 1,
//         navigation: {
//             nextEl: '.completed__next',
//             prevEl: '.completed__prev',
//         },
//         allowTouchMove: false,
//         initialSlide: number,
//     })
// }


// //Popup close 
// document.addEventListener("click",
// function(event) {
//   event = event || window.event;
//   let target = event.target
//   if(target.classList.contains('popup')) {
//     target.classList.remove('active')
//     bodyNotFixed()
//     // bodyNotFixed()
//   }
//   if(target.classList.contains('completed__slide')) {
//     target.closest(".popup").classList.remove('active')
//     bodyNotFixed()
//   }
// }
// )

// let popupClose = document.querySelectorAll('.popup-close')
// for(let i=0 ; i < popupClose.length ; i++) {
//     popupClose[i].addEventListener("click",
//     function() {
//         popupClose[i].closest('.popup').classList.remove('active')
//         bodyNotFixed()
//     })
// }

// // create produce swiper
// let produceListItem = document.querySelectorAll('.production__item-btn')
// let producePopup = document.querySelector('.produce__popup')
// for(let i=0 ; i < produceListItem.length ; i++) {
//     produceListItem[i].addEventListener("click",
//     function() {
//         createSwiperProduce(i)
//         producePopup.classList.add('active')
//         bodyFixed()
//     })
// }

// // create competed swiper
// let completedListItem = document.querySelectorAll('.completed__list-pic')
// let completedPopup = document.querySelector('.completed__popup')
// for(let i=0 ; i < completedListItem.length ; i++) {
//     completedListItem[i].addEventListener("click",
//     function() {
//         createSwiperCompleted(i)
//         completedPopup.classList.add('active')
//         bodyFixed()
//     })
// }

// //Change preview img on popup completed

// let completedGalleryItem = document.querySelectorAll('.completed__slide-gallery-item')

// for(let i=0 ; i < completedGalleryItem.length ; i++) {
//     completedGalleryItem[i].addEventListener("click",
//     function() {
//         let previewPic = completedGalleryItem[i].closest('.completed__slide-pics').querySelector('.completed__slide-preview-pic')
//         let img = completedGalleryItem[i].innerHTML
//         previewPic.innerHTML = ""
//         previewPic.innerHTML = img
//     })
// }

// //videos
// let videoPlay = document.querySelectorAll('.videos__item-play')

// for(let i=0 ; i < videoPlay.length ; i++) {
//     videoPlay[i].addEventListener("click",
//     function() {
//         let videoItem = videoPlay[i].closest('.videos__item-content')
//         videoItem.classList.add('active')
//     })
// }

// //Menu mobile
// let nav_icon = document.querySelectorAll('#nav-icon')
// let headerMobile = document.querySelector('.header-m')
// document.querySelector('.header__menu').onclick = function() {
//   document.querySelector('.header__menu').classList.toggle('active')
//   headerMobile.classList.toggle('active')
//   for(let i = 0; i < nav_icon.length;i++) {
//     nav_icon[i].classList.toggle('open')
//   }
// }

// // Size-control
// window.addEventListener('resize', function(event){
//     if(window.innerWidth > 1278) {
//       document.querySelector('.header__menu').classList.remove('active')
//       document.querySelector('.header-m').classList.remove('active')
//       for(let i = 0; i < nav_icon.length;i++) {
//         nav_icon[i].classList.remove('open')
//       }
//     }
// })

// let formCallBtn = document.querySelectorAll('.form-btn')
// let formCall = document.querySelector('.form-call-me')
// for(let i=0 ; i < formCallBtn.length ; i++) {
//     formCallBtn[i].addEventListener("click",
//     function() {
//         formCall.classList.add('active')
//         bodyFixed()
//     })
// }


// // form call-me

// const formCallMe = document.querySelector('.form-call-me')
// formCallMe.addEventListener('submit', formSend)

// async function formSend(e) {
//     e.preventDefault();
//     let error = formValidate(formCallMe)

//     let formData = new FormData(formCallMe)
//     if(error === 0 ) {
//         formCallMe.classList.add('_sending');
//         let response = await fetch('../sendmail.php', {
//             method: 'POST',
//             body: formData
//         });
//         if(response.ok) {
//             let result = await response.json();
//             alert(result.message);
//             formCallMe.reset();
//             formCallMe.classList.remove('_sending');
//         } else {
//             alert('Ошибка!')
//             formCallMe.classList.remove('_sending');
//         }
//     } else {

//     }
// }

// function formValidate(form) {
//     let error = 0
//     let formReq = document.querySelectorAll('.req');

//     for (let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
//         formRemoveError(input);
//         if(input.classList.contains('form-call-me__mail')) {
//             if(emailTest(input)) {
//                 formAddError(input)
//                 error++
//             }
//         }
//         if(input.classList.contains('form-call-me__name')) {
//             if(input.value == 0) {
//                 formAddError(input)
//                 error++
//             }
//         }
//         if(input.classList.contains('form-call-me__mob')) {
//             if(phoneTest(input)) {
//                 formAddError(input)
//                 error++
//             }
//         }
//     }
//     return error
// }

// function formAddError(input) {
//     input.classList.add('_error');
//     input.classList.add('_error')
// }

// function formRemoveError(input) {
//     input.classList.remove('_error');
//     input.classList.remove('_error')
// }

// function emailTest(input) {
//     return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(input.value)
// }

// function phoneTest(input) {
//     return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value)
// }

// // gallery click

// // check mobile
// function is_touch_device() {
//     return ('ontouchstart' in window);
// }

// let galleryPic = document.querySelectorAll('.lightbox-item')

// if(!is_touch_device()) {
//     for(let i=0 ; i < galleryPic.length ; i++) {
//         galleryPic[i].addEventListener("click",
//         function(event) {
//             event = event || window.event;
//             let target = event.target
//             let src = galleryPic[i].getAttribute('src')
//             createLightBoxPopup(src)
//             bodyFixed()
//         })
//     }
// }
// function createLightBoxPopup(name) {
//     let box = document.querySelector('.lightbox')
//     box.classList.add('active')
//     let lightboxPic = box.querySelector('.lightbox__img')
//     lightboxPic.setAttribute('src', name)
// }

// //scroll up

// function toTop() {
//     $('body,html').animate({scrollTop:0},500);
// }

// $(function() {
//     $('.up-btn').on('click', toTop);
//  })


//hits swiper
const previewSwiper = new Swiper('.preview-swiper', {
    slidesPerView: 2,
    speed: 400,
    spaceBetween: 25,
    pagination: {
        el: '.preview-swiper__pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    }
})

const benefitSwiper = new Swiper('.benefit-swiper', {
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 35,
    breakpoints: {
        0: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})

const typesSwiper = new Swiper('.types-swiper', {
    slidesPerView: 2.55,
    speed: 400,
    spaceBetween: 10,
    // centeredSlides: true,
})