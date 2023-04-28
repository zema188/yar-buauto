// "use strict"


function changerActive(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    list = 0
}
// // scroll document false

function is_touch_device() {
    return ('ontouchstart' in window);
  }
  
  function bodyFixed() { //scroll - false
    if(is_touch_device()) {
      document.body.classList.add('fixed')
    } else {
      let x=window.scrollX;
      let y=window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
    }
  }
  
  function bodyNotFixed() { // scroll - true
    if(is_touch_device()) {
      document.body.classList.remove('fixed')
    } else {
      window.onscroll=function(){window.scrollTo()};
  
    }
  }

  
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


//Popup close 
document.addEventListener("click",
function(event) {
  event = event || window.event;
  let target = event.target
  if(target.classList.contains('popup') && !target.classList.contains('gallery')) {
    target.classList.remove('active')
    bodyNotFixed()
    // bodyNotFixed()
  }

}
)

let popupClose = document.querySelectorAll('.popup-close')
for(let i=0 ; i < popupClose.length ; i++) {
    popupClose[i].addEventListener("click",
    function() {
        popupClose[i].closest('.popup').classList.remove('active')
        bodyNotFixed()
    })
}

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


//preview-swiper
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


//benefit-swiper
const benefitSwiper = new Swiper('.benefit-swiper', {
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 35,
    breakpoints: {
        0: {
          slidesPerView: 1.65,
          spaceBetween: 8,
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


//benefit-swiper _____car
const benefitSwiperCar = new Swiper('.benefit-swiper-car', {
  slidesPerView: 2.2,
  speed: 400,
  pagination: {
    el: '.benefit-swiper-car-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
      0: {
        slidesPerView: 1.65,
        spaceBetween: 8,
      },
      900: {
        slidesPerView: 2.5,
        spaceBetween: 8,
      },
      1024: {
          slidesPerView: 2.25,
          spaceBetween: 25,
      },
  }
})

//types-swiper
const typesSwiper = new Swiper('.types-swiper', {
    slidesPerView: 2.55,
    speed: 400,
    spaceBetween: 10,
    // centeredSlides: true,
})


//offers__item-swiper
const offersItemSwiper = new Swiper('.offers__item-swiper', {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 10,
  pagination: {
    el: '.offers__item-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.42,
      spaceBetween: 5,
    },
    360: {
      slidesPerView: 1.42,
      spaceBetween: 5,
    },
    450: {
      slidesPerView: 1.82,
      spaceBetween: 5,
    },
    540: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 1,
    },
  }
})





//card other 
const otherSwiper = new Swiper('.other-swiper', {
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 2.2
    },
    768: {
      slidesPerView: 3,
    },
  }
})


//advantages swiper 
const advantagesSwiper = new Swiper('.advantages-swiper', {
  // slidesPerView: 3,
  speed: 400,
  spaceBetween: 25,
  slidesPerView: "auto",
  breakpoints: {
    0: {
      spaceBetween: 14,
    },
    540: {
      spaceBetween: 14,
    },
    768: {
      spaceBetween: 25,
    },
  }
})


//parnters swiper 
const partnersSwiper = new Swiper('.partners-swiper', {
  slidesPerView: 3.5,
  speed: 400,
  spaceBetween: 14,
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 14,
    },
  }
})


//parnters swiper 
const characteristicsSwiper = new Swiper('.characteristics-swiper', {
  speed: 400,
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 18,
    },
  }
})


//car page  car__equipment-item 
let carEquipmentItem = document.querySelectorAll('.car__equipment-item-subtitle')
if(carEquipmentItem.length) {
  for(let i = 0; i<carEquipmentItem.length; i++) {
    carEquipmentItem[i].addEventListener("click", function() {
      let parent = carEquipmentItem[i].closest('.car__equipment-item')
      parent.classList.toggle('active')
    })
  } 
}


//car page car__discount
if(document.querySelectorAll('.car__discount-btn_pc').length) {
  let carDiscountBtn = document.querySelector('.car__discount-btn_pc')
  let discount = document.querySelector('.car__discount_pc')
  carDiscountBtn.onclick = function() {
    this.classList.toggle('active')
    discount.classList.toggle('active')
  }
}
//car page car__discount mobile
if(document.querySelectorAll('.car__discount-btn_mob').length) {
  let carDiscountBtn = document.querySelector('.car__discount-btn_mob')
  let discount = document.querySelector('.car__discount_mobile')
  carDiscountBtn.onclick = function() {
    this.classList.toggle('active')
    discount.classList.toggle('active')
  }
}

if(document.querySelectorAll('.credit__form').length) {
  // рассчет при загрузке страницы
  calc()
  //связываем поля друг с другом
  //поля ввода
  let fields = document.querySelectorAll('[range-for]')
  link_Feilds(fields)
  let fieldsRange = document.querySelectorAll('[range-name]')
  link_Feilds_Range(fieldsRange)

}

//link fields for calc поля ввода 
function link_Feilds(fields) {
  for(let i = 0; i < fields.length; i++) {
    let id = fields[i].getAttribute('range-for')
    let suffix = fields[i].getAttribute('suffix')
    let min = fields[i].getAttribute('min')
    let max = fields[i].getAttribute('max')
    let range = document.querySelector('[range-name="'+id+'"]')



    fields[i].addEventListener('blur', function() {
      addSuffix(fields[i], suffix, min, max)
      let number = getNumber(fields[i].value)
      range.value = number
    }) 


    
    fields[i].addEventListener('input', function() {
      let number = getNumber(fields[i].value)
      range.value = number
      calc()
    })
    fields[i].addEventListener('click', function() {
      // console.log(fields[i].value.split('').join)
    })
  }
}

function link_Feilds_Range(range) {
  for(let i = 0; i < range.length; i++) {
    let id = range[i].getAttribute('range-name')
    let field = document.querySelector('[range-for="'+id+'"]')
    let suffix = range[i].getAttribute('suffix')
    range[i].addEventListener('input', function() {
      field.value = numberWithCommas(range[i].value) + ' ' + suffix
      calc()
    })
  }
}




function getNumber(str){
  return +str.replace(/[\D]+/g, '') 
}
function addSuffix(field, text, min, max) {
  // let test = fields[i].value.split(' ').join('')
  // test = getNumber(test)
  // fields[i].value = numberWithCommas(test)


  let value = field.value;
  let number = min
  if(value) {
    value = value.split(' ').join('')
    number = parseInt(value.match(/\d+/)[0], 10);
  }
  if(number > max)
    number = max
  field.value = ""
  field.value = numberWithCommas(number) + ' ' + text;
}


function calc() {


  let price = document.querySelector('.car__price-now').innerHTML
  price =  parseInt(price.split(' ').join(''))
  let months = document.querySelector('[range-name="months"').value
  months =  parseInt(months)
  let procents = document.querySelector('.credit-year-procent').innerHTML
  procents =  parseFloat(procents.split(' ').join(''))
  procents = (procents / 100) / 12
  let firstPay = document.querySelector('[range-name="deposit"').value
  price = price - firstPay

  let res =  (price * procents) / (1 - Math.pow((1 + procents),(-months)))
  res = parseInt(res)
  res = numberWithCommas(res)
  let creditResult = document.querySelector('.credit-result')
  
  creditResult.innerHTML = res + ' ₽'
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}





//car-swiper
function createCarSwiper(numberSlide) {
  let carSwiper = new Swiper(".car-swiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    initialSlide: numberSlide,
    navigation: {
      nextEl: ".car-swiper__next",
      prevEl: ".car-swiper__prev",
    },
    pagination: {
      el: '.car-swiper__pagination',
      type: 'fraction',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.01
      },
      768: {
        slidesPerView: 1,
      },
    }
  });
}




//car page текст на последнем фото 

if(document.querySelectorAll('.car__slider ').length) {
  createCarSwiper(0)



  let slider = document.querySelector('.car__slider')
  let quantity = slider.querySelectorAll('.car-swiper__slide')
  let thumbSlide = document.querySelectorAll('.car-swiper-thumb__slide')

  let block = `<span>+ еще ${quantity.length - thumbSlide.length} фото</span>`
  thumbSlide[thumbSlide.length-1].classList.add('notZoom')
  thumbSlide[thumbSlide.length-1].innerHTML+= block



// смена фото при наведении 

  for(let i = 0; i < thumbSlide.length; i++) {
    thumbSlide[i].addEventListener('mouseover', function() {
      if(!this.classList.contains('notZoom')) {
        createCarSwiper(i)
      }
    })
  }



}

//gallery swiper
if(document.querySelectorAll('.gallery__swiper').length) {
  const gallery = document.querySelector('.gallery')
  const miniImage = gallery.querySelectorAll('.gallery__swiper-slide')
  const bigImage = gallery.querySelectorAll('.gallery__list-item')
  const gallerySwiperList = gallery.querySelector('.gallery__swiper-list')
  const galleryPrevBtn = gallery.querySelector('.gallery__swiper-prev')
  const galleryNextBtn = gallery.querySelector('.gallery__swiper-next')
  let activeId = 0

  // открыть галарею по клику на фото
  const openGallery = document.querySelectorAll('.open-gallery')
  for(let i = 0; i < openGallery.length; i++) {
    openGallery[i].addEventListener('click', function() {
      gallery.classList.add('active')
      bodyFixed()
    })
  }


  //скролл по кнопкам
  galleryPrevBtn.onclick = function() {
    if(activeId > 0) {
      changeActiveSlide(-1)
    } else {
      changeActiveSlide(miniImage.length-1)
    }
  }
  galleryNextBtn.onclick = function() {
    if(activeId < miniImage.length - 1) {
      changeActiveSlide(1)
    } else {
      changeActiveSlide(-miniImage.length+1)
    }
  }

  function changeActiveSlide(side) {
      activeId += side
      miniImage[activeId].scrollIntoView();
      bigImage[activeId].scrollIntoView();
      changerActive(miniImage)
      miniImage[activeId].classList.add('active')

  }
  //scroll by click in mini image
  for(let i = 0; i < miniImage.length; i++) {
    miniImage[i].addEventListener('click', function() {
      changerActive(miniImage)
      this.classList.add('active')
      activeId = i
      bigImage[i].scrollIntoView();
    })
  }


  // change mini images by scroll
  gallery.addEventListener('scroll', function(){
    for(let i = 0; i < bigImage.length; i++) {
      checkIfElementIs100pxBelowViewport(bigImage[i],i)
    }
  });


  function checkIfElementIs100pxBelowViewport(element,number) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const isAboveMidpoint = rect.top < windowHeight / 2;
    const isBelowMidpoint = rect.bottom > windowHeight / 2;
  
    if (isAboveMidpoint && isBelowMidpoint) {
      activeId = number
      changerActive(miniImage)
      miniImage[number].classList.add('active')
      miniImage[number].scrollIntoView();
    }
  }

}
