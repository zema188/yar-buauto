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

  function deleteSpace(str) {
    return str.replace(/\s+/g, ' ').trim()
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
//filter list close
document.addEventListener("click",
function(event) {
  event = event || window.event;
  let target = event.target
  if(target.classList.contains('popup') && !target.classList.contains('gallery')) {
    target.classList.remove('active')
    bodyNotFixed()
    let carDiscountBtn = document.querySelector('.car__discount-btn_mob')
    if(carDiscountBtn !== null)
    carDiscountBtn.classList.remove('active')
  }
  if(event.target.closest('.filter__item-content') !== null || event.target.classList.contains('filter__item-content')) {
  } else {
    if(!event.target.classList.contains('filter__item-subtitle') && !event.target.classList.contains('new-text')) {
      let filterItem = document.querySelectorAll('.filter__item')
      changerActive(filterItem)
    }
  }
}
)

let popupClose = document.querySelectorAll('.popup-close')
for(let i=0 ; i < popupClose.length ; i++) {
    popupClose[i].addEventListener("click",
    function() {
      let popup = popupClose[i].closest('.popup')
      if(popup.classList.contains('filter')) {
        popup.classList.remove('popup')
      } else {
        popup.classList.remove('active')
      }
        bodyNotFixed()
        let carDiscountBtn = document.querySelector('.car__discount-btn_mob')
        if(carDiscountBtn !== null)
        carDiscountBtn.classList.remove('active')
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




//header menu mobile


let headerMenuBtn = document.querySelectorAll('.toggle-menu')
let mobileMenu = document.querySelector('.header-m')
for (let i = 0; i < headerMenuBtn.length; i++) {
  headerMenuBtn[i].addEventListener('click', function() {
    toggleMobileMenu()
  })
}

function toggleMobileMenu() {
  for (let i = 0; i < headerMenuBtn.length; i++) {
    headerMenuBtn[i].classList.toggle('open')
  }
  mobileMenu.classList.toggle('active')
}
const filter = document.querySelector('.filter')
// Size-control
window.addEventListener('resize', function(event){
    // if(window.innerWidth > 1278) {
    //   document.querySelector('.header__menu').classList.remove('active')
    //   document.querySelector('.header-m').classList.remove('active')
    //   for(let i = 0; i < nav_icon.length;i++) {
    //     nav_icon[i].classList.remove('open')
    //   }
    // }
    let popupPhone = document.querySelector('.popup-phone')
    // if(window.innerWidth <= 539) {
    //   if(popupPhone.classList.contains('active')) {
    //     bodyNotFixed()
    //   }
    // }
    let popups = document.querySelectorAll('.popup')
    let credit = document.querySelector('.credit')
    if(window.innerWidth >= 540) {
      if(filter !== null)
        filter.classList.remove('popup')
        bodyNotFixed()
    }
    if(window.innerWidth >= 1024) {
      mobileMenu.classList.remove('active')
      for (let i = 0; i < headerMenuBtn.length; i++) {
        headerMenuBtn[i].classList.remove('open')
      }
      if(credit !== null)
      credit.classList.remove('popup')
      let popupActive = false
      for (var i = 0; i < popups.length; i++) {
        if (popups[i].classList.contains('active')) {
          popupActive = true
          break
        }
      }
      if(!popupActive) {
        bodyNotFixed()
      }
    }
    if(window.innerWidth <=1023) {
      let creditCar = document.querySelector('.credit_car')
      if(creditCar !== null) {
        let style = getComputedStyle(creditCar)
        if(style.display == 'none') {
          $(creditCar).attr('style', '')
        }
      }
    }
    if(window.innerWidth <= 539) {

      if(filter !== null && !filter.classList.contains('filter_catalog')) {
        filter.classList.add('active')
        filter.style.display = 'block'
      } else {
        $( filter ).slideUp( "slow", function() {
        });
      }
    }
})
if(window.innerWidth <= 539 && (filter !== null)) {
  if(!filter.classList.contains('filter_catalog')) {
    filter.classList.add('active')
  } else {
    filter.classList.remove('active')
    $( filter ).slideUp( "slow", function() {
      // Animation complete.
    });
  }
}
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
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
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
  mousewheel: true,
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
// offers swiper 

if(document.querySelectorAll('.offers__item-swiper').length) {
  let swipers = document.querySelectorAll('.offers__item-swiper')
  for(let i = 0; i < swipers.length; i++) {
    addHoverMouseSwiper(swipers[i],i)
  }

  function addHoverMouseSwiper (swiper,index) {
    let slides = swiper.querySelectorAll('.offers__item-slide')
    width = swiper.offsetWidth / slides.length
    let left = 0
    for(let i = 0; i < slides.length; i++) {
      let newDiv = document.createElement("i");
      swiper.append(newDiv)
      newDiv.style.width = width + 'px'
      newDiv.style.left = width * i + 'px'
      newDiv.addEventListener('mouseover', function() {
        offersItemSwiper[index].slideTo(i, 400)
      })
    }
  }
}





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
let carSwiper = new Swiper(".car-swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  initialSlide: 0,
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




//car page текст на последнем фото 

if(document.querySelectorAll('.car__slider ').length) {

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
        carSwiper.slideTo(i, 400)
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



//filter 

if(document.querySelectorAll('.filter').length) {
  const filter = document.querySelector('.filter')
  const filteritem = filter.querySelectorAll('.filter__item')
  const filterInputs = filter.querySelectorAll('input')
  const filterReset = filter.querySelectorAll('.btn_reset')
  let activeMinYearId = 0
  let activeMaxYearId = 0
  for (let i = 0; i < filteritem.length; i++) {
    filteritem[i].addEventListener('click', function(e) {
      if(e.target.classList.contains('filter__item-subtitle') || e.target.classList.contains('new-text')) {
        if(this.classList.contains('active')) {
          changerActive(filteritem)
        } else {
          changerActive(filteritem)
          this.classList.add('active')
        }
      }
      if(e.target.classList.contains('filter__item-close-btn')) {
        this.classList.remove('active')
      }
      if(e.target.classList.contains('filter__item-content-reset')) {
        let inputs = this.querySelectorAll('input')
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].checked = false
          inputs[i].value = ''
          e.target.closest('.filter__item').querySelector('.filter__item-subtitle').querySelector('span').innerHTML = ''
          e.target.closest('.filter__item').classList.remove('arrow-hidden')
        }
      }
      if(e.target.classList.contains('reset-year')) {
        activeMinYearId = 0
        activeMaxYearId = 0
      }
    })
  }

  //закрытие фильтра на крестик
  let filterClose = filter.querySelector('.filter__header-close')
  filterClose.onclick = function() {
    if(filter.classList.contains('filter_catalog')) {
      filter.classList.remove('active')
      filter.classList.remove('popup')
      filter.style.display = 'none'
    }
  }


  let labels = filter.querySelectorAll('label')
  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', function(e) {
      labels[i].querySelector('input').checked = !labels[i].querySelector('input').checked
      e.preventDefault()
    })
  }



  //показ что выбрал пользователь в фильтрах
  //checbox list 
  let listCheckbox = filter.querySelectorAll('.list-checkbox')
  for (let i = 0; i < listCheckbox.length; i++) {
    listCheckbox[i].addEventListener('click', function(e) {
      let target = e.target
      if(!target.classList.contains('filter__item-list'))
      addSelector(target)
    })
  }


  function addSelector(target) {
    let parent = target.closest('label')
    let text = parent.querySelector('span').innerHTML
    let filterItem = parent.closest('.filter__item')
    let subtitle = filterItem.querySelector('.filter__item-subtitle')
    let span = subtitle.querySelector('span')
    let input = parent.querySelector('input')
    let inputs = filterItem.querySelectorAll('input')
    let checked = 0


    text = deleteSpace(text)
    if(input.checked) {
      if(deleteSpace(span.innerHTML) == '') {
        span.innerHTML += text
      } else {
        if(!deleteSpace(span.innerHTML).includes(text) && !deleteSpace(span.innerHTML).includes('+')) {
          span.innerHTML += ' +'
        }
      }
    } else {
      if(deleteSpace(span.innerHTML).includes(text)) {
        span.innerHTML = ''
        for (let i = 0; i < inputs.length; i++) {
          if(inputs[i].checked && !checked) {
            span.innerHTML += inputs[i].closest('label').querySelector('span').innerHTML
            checked++
          } else if (inputs[i].checked) {
            checked++
          }
        }
        if(checked>1)
        span.innerHTML += ' +'
      }
    }
    if(!deleteSpace(span.innerHTML) == '') {
      filterItem.classList.add('arrow-hidden')
    } else {
      filterItem.classList.remove('arrow-hidden')
    }
    checkForReset()

  }



  //то что в инпутах
  let inputsSelector = filter.querySelectorAll('.filter__item-input')
  for (let i = 0; i < inputsSelector.length; i++) {
    inputsSelector[i].addEventListener('input', function() {
      addSelectorFromInput(this)
    })
  }
  function addSelectorFromInput(target) {
    let filterItem = target.closest('.filter__item')
    let title = filterItem.querySelector('.filter__item-subtitle').querySelector('span')
    let min = filterItem.querySelector('[name$="от"]')
    let max = filterItem.querySelector('[name$="до"]')
    let text = ''

    if(target.value.length >=10) {
      target.value = target.value.slice(0, 10);
    }
    if(min.value) {
      text += 'от ' + min.value
    }
    if(max.value) {
      text += ' до ' + max.value
    }
    title.innerHTML = text
    
    if(text) {
      filterItem.classList.add('arrow-hidden')
    } else {
      filterItem.classList.remove('arrow-hidden')
    }
    checkForReset()

  }

function checkForReset() {
  let filterResetBtn = filter.querySelector('.filter__footer-btn_reset')
  let spans = filter.querySelectorAll('.new-text')
  let isActive = false
  for (let i = 0; i < spans.length; i++) {
    if(deleteSpace(spans[i].innerHTML) != '') {
      isActive =  true
      break
    }
  } 

  if(isActive) {
    filterResetBtn.classList.add('active')
  } else {
    filterResetBtn.classList.remove('active')
  }
}

// год выпуска
let filterItemListYear = filter.querySelector('.filter__item-list_year')
filterItemListYear.addEventListener('click', function(e) {
  let target = e.target
  if(!target.classList.contains('filter__item-side') && !target.classList.contains('filter__item-list')) {
    addYears(target)
  }
})



function addYears(target) {
  let parent = target.closest('label')

    let span = parent.querySelector('span')
    let filterItem = target.closest('.filter__item')
    let filterItemSubtitleSpan = filterItem.querySelector('.filter__item-subtitle').querySelector('span')
    let text = ""
  
    let min = filterItem.querySelectorAll('[name$="min-year"]')
    let max = filterItem.querySelectorAll('[name$="max-year"]')
    let minText = ''
    let maxText = ''
    let a = 0
    let b = 0
    


    if(parent.classList.contains('disabled')) {
      let input = parent.querySelector('input')
      input.checked = false
      if(!min[activeMinYearId].classList.contains('disabled')) {
        min[activeMinYearId].querySelector('input').checked = true
      }
      if(!max[activeMaxYearId].classList.contains('disabled')) {
        max[activeMaxYearId].querySelector('input').checked = true
      }
      
    } else {
      
    }


    for (let i = 0; i < min.length; i++) {
      min[i].classList.remove('disabled')
      max[i].classList.remove('disabled')
      if(min[i].querySelector('input').checked) {
        minText = min[i].querySelector('span').innerHTML
        minText = deleteSpace(minText)
        activeMinYearId = i
        if(i)
        b = i
      }
      if(max[i].querySelector('input').checked) {
        maxText = max[i].querySelector('span').innerHTML
        maxText = deleteSpace(maxText)
        activeMaxYearId = i
        if(i)
        a = i + 1 
      }
    }
    if(b)
    for (b; b < max.length; b++) {
      max[b].classList.add('disabled')
    }
    if(a)
    for (let i = 0; i < a; i++) {
      min[i].classList.add('disabled')
    }
  
    
    if(minText == maxText) {
      text = minText
    } else {
      if (minText && minText!='Любой') {
        text += 'от ' + minText
      } 
      if (maxText && maxText!='Любой') {
        text += ' до ' + maxText
      } 
    }
    filterItemSubtitleSpan.innerHTML = text
    if(!deleteSpace(filterItemSubtitleSpan.innerHTML) == '') {
      filterItem.classList.add('arrow-hidden')
    } else {
      filterItem.classList.remove('arrow-hidden')
    }
    checkForReset()
}

//show filter by click
  let showFilterBtn = document.querySelector('.btn-show-filter')
  $( showFilterBtn ).on( "click", function() {
    if(window.innerWidth <= 539) {
      filter.classList.add('active')
      filter.classList.add('popup')
      filter.style.display = 'block'
      bodyFixed()
    } else {
      $( filter ).slideToggle( "slow", function() {
        // Animation complete.
      });
    }
  });
//close filter by click
  let closeFilterBtn = filter.querySelector('.filter__footer-btn_close')
  $( closeFilterBtn ).on( "click", function() {
    $( filter ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });
  let filterSubtitle = filter.querySelectorAll('.filter__item-subtitle')
  let filterResetBtn = filter.querySelector('.filter__footer-btn_reset')

  //reset settings
  for (let i = 0; i < filterReset.length; i++) {
    filterReset[i].addEventListener("click", function() {
      filterResetBtn.classList.remove('active')
      for (let i = 0; i < filterInputs.length; i++) {
        filterInputs[i].checked = false;
        filterInputs[i].value = '';
        activeMinYearId = 0
        activeMaxYearId = 0
      }
      for (let i = 0; i < filteritem.length; i++) {
        if(filterSubtitle[i].querySelector('span') !== null) {
          filterSubtitle[i].querySelector('span').innerHTML = ''
        }
        filteritem[i].classList.remove('arrow-hidden')
      }
      for (let i = 0; i < labels.length; i++) {
        labels[i].classList.remove('disabled')
      }
    });
  }



  //add filter popup for mobile
  const filterShowBtnMobile = document.querySelector('.filter__footer_filter')
  filterShowBtnMobile.onclick = function() {
    filter.classList.add('popup')
    bodyFixed()
  }
}


//mileage__content open hidden 

if(document.querySelectorAll('.mileage__item').length) {
  let mileage = document.querySelector('.mileage')
  let mileageContentHidden = mileage.querySelectorAll('.mileage__item')
  let showMoreBtn = mileage.querySelector('.btn_dropdown')
  showMoreBtn.onclick = function() {
    this.classList.add('hidden')
    for (let i = 0; i < mileageContentHidden.length; i++) {
      mileageContentHidden[i].classList.remove('hidden')
    }
  }
}


//show phone by blick btns

if(document.querySelectorAll('.show-modal-phone').length) {
  let showModalPhone = document.querySelectorAll('.show-modal-phone')
  let popupPhone = document.querySelector('.popup-phone')
  for (let i = 0; i < showModalPhone.length; i++) {
    showModalPhone[i].addEventListener('click', function() {
      popupPhone.classList.add('active')
      if(window.innerWidth >= 540) {
        bodyFixed()
      }
    })
  }
}


//credit open in mobile 
if(document.querySelectorAll('.open-credit-btn').length) {
  let showCreditModalBtn = document.querySelectorAll('.open-credit-btn')
  let credit = document.querySelector('.credit')
  for(let i = 0; i<showCreditModalBtn.length; i++) {
    showCreditModalBtn[i].onclick = function() {
      credit.classList.add('active')
      credit.classList.add('popup')
      bodyFixed()
    }
  }
}


//credit page 
function addLock(elem) {
  elem.classList.add('lock')
  elem.querySelector('span').innerHTML = ''
  let li = elem.querySelectorAll('li')
  changerActive(li)
}
function addHidden(elem) {
  elem.classList.add('hidden')
}


if(document.querySelectorAll('.additionally').length) {
  let additionally = document.querySelector('.additionally')
  let additionallyItem = document.querySelectorAll('.additionally__item')


  allLi = additionally.querySelectorAll('li')
  allSpans = additionally.querySelectorAll('span')

  additionally.addEventListener('click', function(e) {
    let target = e.target
    let parent = target.closest('.additionally__item')
    if(target.tagName == 'LI') {
      let span = parent.querySelector('.additionally__subtilte').querySelector('span')
      let li = parent.querySelectorAll('li')
      if(target.classList.contains('active')) {
        changerActive(li)
        span.innerHTML = ''
        switch(parent.getAttribute('name')) {
          case 'mark': {
            addLock(document.querySelector('[name$="model"]'))
            addLock(document.querySelector('[name$="ads"]'))
            addHidden(document.querySelector('[name$="calc"]'))
            addHidden(document.querySelector('[name$="ads-item"]'))
            break
          }
          case 'model': {
            addLock(document.querySelector('[name$="ads"]'))
            addHidden(document.querySelector('[name$="calc"]'))
            addHidden(document.querySelector('[name$="ads-item"]'))
            break
          }
          case 'ads': {
            addHidden(document.querySelector('[name$="calc"]'))
            addHidden(document.querySelector('[name$="ads-item"]'))
            break
          }
        }
      } else {
        changerActive(li)
        target.classList.add('active')
        span.innerHTML = deleteSpace(target.innerHTML)
        parent.classList.remove('active')
        switch(parent.getAttribute('name')) {
          case 'mark': {
            document.querySelector('[name$="model"]').classList.remove('lock')
            break
          }
          case 'model': {
            document.querySelector('[name$="ads"]').classList.remove('lock')
            break
          }
          case 'ads': {
            document.querySelector('[name$="calc"]').classList.remove('hidden')
            document.querySelector('[name$="ads-item"]').classList.remove('hidden')
            calc()
            break
          }
        }
      }



    }
    if(target.classList.contains('close')) {
      parent.classList.remove('active')
    }
    
  })

  // открытие 

  let additionallySubtilte = document.querySelectorAll('.additionally__subtilte')
  for (let i = 0; i < additionallySubtilte.length; i++) {
    additionallySubtilte[i].addEventListener('click', function() {
      let parent = additionallySubtilte[i].closest('.additionally__item')


      if(parent.classList.contains('active')) {
        changerActive(additionallyItem)
      } else {
        changerActive(additionallyItem)
        if(!parent.classList.contains('lock')) {
          parent.classList.add('active')
        }
      }
      
    })
  }
}


if(document.querySelectorAll('.test').length) {
  let test = document.querySelector('.test') 
  test.onclick = function() {
    this.classList.add('progress-bar-striped')
  }
}



if(document.querySelectorAll('.header_car').length) {
  let header = document.querySelector('.header_car')
  document.addEventListener('scroll', function() {
    if(window.pageYOffset>=20) {
      header.classList.add('fixed')
    } else {
      header.classList.remove('fixed')
    }
  })
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}




//car page car__discount
if(document.querySelectorAll('.car__discount-btn_pc').length) {
  let carDiscountBtn = document.querySelector('.car__discount-btn_pc')
  let discount = document.querySelector('.car__discount_pc')

  $( carDiscountBtn ).on( "click", function() {
    this.classList.toggle('active')
    $( discount ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });
}
//car page car__discount mobile
if(document.querySelectorAll('.car__discount-btn_mob').length) {
  let carDiscountBtn = document.querySelector('.car__discount-btn_mob')
  let discount = document.querySelector('.car__discount_mobile')
  carDiscountBtn.onclick = function() {
    this.classList.toggle('active')
    discount.classList.toggle('active')
    bodyFixed()
  }

}


//mask for input type tel 
  [].forEach.call( document.querySelectorAll('[type="tel"]'), function(input) {
  let keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});


//offers__header-filter-list


if(document.querySelectorAll('.offers__header-filter-list').length) {
  let btnOpenFilterOfferList = document.querySelector('.offers__header-filter-title')
  let offersFilterList = document.querySelector('.offers__header-filter-list')
  $( btnOpenFilterOfferList ).on( "click", function() {
    $( offersFilterList ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });
  offersFilterList.addEventListener('click', function(e) {
    let target = e.target
    if(target.classList.contains('offers__header-filter-item')) {
      btnOpenFilterOfferList.innerHTML = e.target.innerHTML
    }
  })
}



//раскрытие формы обменять на мой авто  на странице car 

if(document.querySelectorAll('.possibilities_trade').length) {
  let possibilitiesTrade = document.querySelector('.possibilities_trade')
  possibilitiesTrade.onclick = function() {
        $('.trade-form').slideToggle(400);
        $('.credit_car').slideUp(400);
  }
}

//раскрытие формы с калькулятором на странице car
if(document.querySelectorAll('.possibilities_credit').length) {
  let possibilitiesCredit = document.querySelector('.possibilities_credit')
  possibilitiesCredit.onclick = function() {
        $('.trade-form').slideUp(400);
        $('.credit_car').slideToggle(400);
  }
}