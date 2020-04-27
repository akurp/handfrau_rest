let slider = $('.range');
let fill = $('.bar .fill');
function setBar()
{
  fill.css('width', (slider.val() / 20)+'%');
  square = slider.val();
}

slider.on('input', setBar);
setBar();

$('.navbar-mobile__menu').on('click', function(e)
{
  e.preventDefault();
  $(this).toggleClass('navbar-mobile__menu_active');
  $('.navbar-nav__mobile').toggleClass('navbar-nav__mobile_active');
});
// $('.modal-contact__checkbox').addEventListener('click', function(){
//   if(!($(this).checked))
//   {
//     console.log('1');
//     $('.modal-contact__label:before').css('border', 'red');
//   }
// })
// Переключение вкладок
let typeList = document.querySelector('.calc-type__list'),
    typeListItems = typeList.querySelectorAll('.calc-type__category'),
    typeListText = document.querySelectorAll('.calc-type__description_adaptive');

const toggleTabContent = (index) => {
  for (let i = 0; i < typeListText.length; i++) {
    if (index === i) {
      typeListItems[i].classList.add('calc-type__category_active');
      typeListText[i].classList.remove('calc-type__description_adaptive--d-none');
    } else {
      typeListItems[i].classList.remove('calc-type__category_active');
      typeListText[i].classList.add('calc-type__description_adaptive--d-none');
    }
  }
};

typeList.addEventListener('click', (event) => {
  let target = event.target;
  target = target.closest('.calc-type__category');

  if (target) {
    typeListItems.forEach((item, i) => {
      if (item === target) {
        toggleTabContent(i);
      }
    });
  }
});


// Увеличение числа метров ковролина
let amount = document.querySelector('.amount');
let amount1 = document.querySelector('.amount-1');
let amount2 = document.querySelector('.amount-2');
let amount3 = document.querySelector('.amount-3');
let amount4 = document.querySelector('.amount-4');
let amount5 = document.querySelector('.amount-5');
let amount6 = document.querySelector('.amount-6');
let amount7 = document.querySelector('.amount-7');
let amount8 = document.querySelector('.amount-8');
let amount9 = document.querySelector('.amount-9');
let minus = document.querySelector('.minus-img');
let minus1 = document.querySelector('.minus-img-1');
let minus2 = document.querySelector('.minus-img-2');
let minus3 = document.querySelector('.minus-img-3');
let minus4 = document.querySelector('.minus-img-4');
let minus5 = document.querySelector('.minus-img-5');
let minus6 = document.querySelector('.minus-img-6');
let minus7 = document.querySelector('.minus-img-7');
let minus8 = document.querySelector('.minus-img-8');
let minus9 = document.querySelector('.minus-img-9');
let plus = document.querySelector('.plus-img');
let plus1 = document.querySelector('.plus-img-1');
let plus2 = document.querySelector('.plus-img-2');
let plus3 = document.querySelector('.plus-img-3');
let plus4 = document.querySelector('.plus-img-4');
let plus5 = document.querySelector('.plus-img-5');
let plus6 = document.querySelector('.plus-img-6');
let plus7 = document.querySelector('.plus-img-7');
let plus8 = document.querySelector('.plus-img-8');
let plus9 = document.querySelector('.plus-img-9');



// minus
minus.addEventListener('click', () => {
  if (+amount.textContent > 1) {
    amount.textContent--;
    console.log(`уменьшение первого \n` , amount);
  }
});
minus1.addEventListener('click', () => {
  if(+amount1.textContent > 1) {
    amount1.textContent--;
    console.log(`уменьшение второго \n` ,amount1);
  }
});
minus2.addEventListener('click', () => {
  if(+amount2.textContent > 1)
  {
    amount2.textContent--;
    console.log(`уменьшение третьего \n` ,amount2);
  }
});
minus3.addEventListener('click', () => {
  if(+amount3.textContent > 1)
  {
    amount3.textContent--;
    console.log(`уменьшение четвертого \n` ,amount3);
  }
});
minus4.addEventListener('click', () => {
  if(+amount4.textContent > 1)
  {
    amount4.textContent--;
    console.log(`уменьшение пятого \n` ,amount4);
  }
});
minus3.addEventListener('click', () => {
  if(+amount5.textContent > 1)
  {
    amount5.textContent--;
    console.log(`уменьшение шестого \n` ,amount5);
  }
});
minus3.addEventListener('click', () => {
  if(+amount6.textContent > 1)
  {
    amount6.textContent--;
    console.log(`уменьшение седьмого \n` ,amount6);
  }
});
minus7.addEventListener('click', () => {
  if(+amount7.textContent > 1)
  {
    amount7.textContent--;
    console.log(`уменьшение восьмого \n` ,amount7);
  }
});
minus8.addEventListener('click', () => {
  if(+amount8.textContent > 1)
  {
    amount8.textContent--;
    console.log(`уменьшение девятого \n` ,amount8);
  }
});
minus9.addEventListener('click', () => {
  if(+amount9.textContent > 1)
  {
    amount9.textContent--;
    console.log(`уменьшение десятого \n` ,amount9);
  }
});

// plus
plus.addEventListener('click', function() {
  amount.textContent++;
  console.log(`увеличение первого \n`, amount);
});
plus1.addEventListener('click', function() {
  amount1.textContent++;
  console.log(`увеличение второго \n`, amount1);
})
plus2.addEventListener('click', function() {
  console.log(`увеличение третьего \n`, amount2);
  amount2.textContent++;
});
plus3.addEventListener('click', function() {
  console.log(`увеличение четвёртого\n`, amount3);
  amount3.textContent++;
});
plus4.addEventListener('click', function() {
  console.log(`увеличение пятого\n`, amount4);
  amount4.textContent++;
});
plus5.addEventListener('click', function() {
  console.log(`увеличение шестого\n`, amount5);
  amount5.textContent++;
});
plus6.addEventListener('click', function() {
  console.log(`увеличение седьмого\n`, amount6);
  amount6.textContent++;
});
plus7.addEventListener('click', function() {
  console.log(`увеличение восьмого\n`, amount7);
  amount7.textContent++;
});
plus8.addEventListener('click', function() {
  console.log(`увеличение девятого\n`, amount8);
  amount8.textContent++;
});
plus9.addEventListener('click', function() {
  console.log(`увеличение десятого\n`, amount9);
  amount9.textContent++;
});
// Окрашивание плиток
let services = document.querySelector('.calc-calculator-services');
services.addEventListener('click', (event) => {
  let target = event.target;
  target = target.closest('.calc-calculator__service');
  if (target.matches('.calc-calculator__service')) {
    target.classList.toggle('calc-calculator__service--active');
  }
  // if(target.matches('.minus-img') || target.mathces('.plus-img'))
  // {

  // }
});



// бегунок
let inputRange = document.querySelector('.range'),
    area = document.querySelector('.calc-calculator-square__square_count'),
    result = document.querySelector('.calc-result-sum__count'),
    resultPersonal = document.querySelectorAll('.calc-result-personal__man'),
    resultHours = document.querySelectorAll('.calc-result-personal__hour');

inputRange.addEventListener('input', (event) => {
  inputRange.value = event.target.value;
  area.textContent = +inputRange.value;

  // Количество людей и часов
  for (let i = 0; i < resultPersonal.length && i < resultHours.length; i++) {
    if (+inputRange.value === 10) {
      resultPersonal[i].textContent = '1 человек';
      resultHours[i].textContent = '2 часа';
    } else if (+inputRange.value === 20) {
      resultPersonal[i].textContent = '1 человек';
      resultHours[i].textContent = '4 часа';
    } else if (+inputRange.value === 30) {
      resultPersonal[i].textContent = '1 человек';
      resultHours[i].textContent = '6 часов';
    } else if (+inputRange.value === 40) {
      resultPersonal[i].textContent = '1 человек';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 50) {
      resultPersonal[i].textContent = '2 человека';
      resultHours[i].textContent = '5 часов';
    } else if (+inputRange.value === 60) {
      resultPersonal[i].textContent = '2 человека';
      resultHours[i].textContent = '6 часов';
    } else if (+inputRange.value === 70) {
      resultPersonal[i].textContent = '2 человека';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value === 80) {
      resultPersonal[i].textContent = '2 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 90) {
      resultPersonal[i].textContent = '3 человека';
      resultHours[i].textContent = '6 часов';
    } else if (+inputRange.value === 100) {
      resultPersonal[i].textContent = '3 человека';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value === 110) {
      resultPersonal[i].textContent = '3 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 120) {
      resultPersonal[i].textContent = '3 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 130) {
      resultPersonal[i].textContent = '4 человека';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value === 140) {
      resultPersonal[i].textContent = '4 человека';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value === 150) {
      resultPersonal[i].textContent = '4 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 160) {
      resultPersonal[i].textContent = '4 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 170) {
      resultPersonal[i].textContent = '5 человек';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value >= 180 && +inputRange.value <= 200) {
      resultPersonal[i].textContent = '5 человек';
      resultHours[i].textContent = '8 часов';
    }
  }

  // Калькулятор
  const calc = (price = 200) => {
    result.textContent = price * inputRange.value;
  };
  calc();

  // Передаём в модалку данные из калькулятора
  let modalCount = document.querySelector('.add-modal-contact__count');
  modalCount.textContent = result.textContent;
});



// popup'ы
let window1 = document.querySelector('.modal');
let window2 = document.querySelector('.add-modal');

// $('.navbar-contact__button').on('click', function(){
//   window1.classList.add('modal_active');
// });
// $('.main-button__order').on('click', function(){
//   window1.classList.add('modal_active');
// });
// $('.main-button__discover').on('click', function(){
//   window1.classList.add('modal_active');
// })
// $('.main-button__immediate').on('click', function(){
//   window1.classList.add('modal_active');
// });
// $('.special-gallery-slide__button').on('click', function(){
//   window1.classList.add('modal_active');
// });
// $('.dirt-text__button').on('click', function(){
//   window1.classList.add('modal_active');
// });
// $('.command-button-slide').on('click', function(){
//   window1.classList.add('modal_active');
// })
// $('.trust-button').on('click', function(){
//   window1.classList.add('modal_active');
// });
// $('.why__button').on('click', function(){
//   window1.classList.add('modal_active');
// });
// $('.call__button').on('click', function(){
//   window1.classList.add('modal_active');
// });
// $('.tenders__button').on('click', function(){
//   window1.classList.add('modal_active');
// })
// $('.button-main').on('click', function(){
//   window2.classList.add('add-modal_active');
  // Берём виды уборки из вкладки в модалку
  

$('.modal-contact__close').on('click', function(){
  window1.classList.remove('modal_active')
  // window2.classList.remove('add-modal_active')
});
$('.modal-contact-close').on('click', function(){
  window1.classList.remove('modal_active');
});
$('.modal-mobile__close').on('click', function(e){
  e.preventDefault();
  window1.classList.remove('modal_active');
})

// слайдеры
let swiper1 = new Swiper('.special-gallery',{
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.special-gallery__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320:
    {
      slidesPerView: 1
    },
    576:
    {
      slidesPerView: 2,
    }
  }
});


let swiper2 = new Swiper ('.command-slider-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  // If we need pagination
  pagination: {
    clickable: true,
    el: '.command-pagination',
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.command-button-next',
    prevEl: '.command-button-prev',
  },

  breakpoints: {
    320:
    {
      slidesPerView: 1
    },
    768:
    {
      slidesPerView: 2,
      centredSlides: false
    },
    991:
    {
      slidesPerview: 3,
      centeredSlides: true,
    }
  }
});

let swiper3 = new Swiper('.materials-slider',{
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.materials-button-next',
    prevEl: '.materials-button-prev',
  },
  pagination: {
    clickable: true,
    el: '.materials-slider-pagination',
  }
  
});
let swiper4 = new Swiper('.partners-slider-container',
{
  loop: true,
  navigation: {
    nextEl: '.partners-button-next',
    prevEl: '.partners-button-prev'
  },
  breakpoints: {
    1200:
    {
      slidesPerView: 4,
    },
    991:
    {
      slidesPerView: 3
    },
    768:
    {
      spaceBetween: 90,
      slidesPerView: 2
    },
    320:
    {
      centeredSlides: true,
      splidesPerView: 1,
      pagination: {
        clickable: true,
        el: '.partners-pagination',
      }
    }
  }
});
let swiper5 = new Swiper('.reviews-slider-container',
{
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev'
  },
  pagination: {
    clickable: true,
    el: '.reviews-pagination',
  },
  slidesPerView: 1,
  spaceBetween: 90,
  centeredSlides: true,
});


$(document).ready(function(){
  
  $('.phone').mask("+7 (999) 999-99-99");
  $('.modal-contact-form').each(function(){
    $(this).validate({
        rules:
        {
          name:
          {
            required: true
          },
          tel:
          {
            required: true
          },
          check:
          {
            required: true
          }
        },
        errorClass: "invalid",
        errorElement: "label",
        errorPlacement: function(invalid, label){},
        submitHandler: function(form){
            // e.preventDefault();
          $.ajax({
            url: "smart.php",
            type: "POST",
            data: $(form).serialize(),
            success: function () {
              $('#modal-main').hide();
              $('#modal-success').show();
              $('form').trigger('reset');
            }
          })
        }
    })
  });
  $('.add-modal-contact__form').each(function(){
    $(this).validate({
        rules:
        {
          orderName:
          {
            required: true
          },
          orderTel:
          {
            required: true
          },
          orderCheck:
          {
            required: true
          }
        },
        errorClass: "invalid",
        errorElement: "label",
        errorPlacement: function(invalid, label){},
        submitHandler: function(form){
            // e.preventDefault();
          $.ajax({
            url: "smart1.php",
            type: "POST",
            data: $(form).serialize(),
            success: function () {
              $('#modal-order').hide();
              $('#modal-success').show();
              $('form').trigger('reset');
            }
          })
        }
    })
  });
  $('.evaluation-form').each(function(){
    $(this).validate({
      rules:
      {
        evaName:
        {
          required: true
        },
        evaTel:
        {
          required: true
        }
      },
      errorClass: "invalid",
      errorElement: "label",
      errorPlacement: function(invalid, label){},
      submitHandler: function(form){
          // e.preventDefault();
        $.ajax({
          url: "smart2.php",
          type: "POST",
          data: $(form).serialize(),
          success: function () {
            $('.modal').addClass('modal_active');
            $('.modal-contact-body').hide();
            $('.add-modal-contact').hide();
            $('#modal-success').hide();
            $('#modal-photo').show();
            $('form').trigger('reset');
          }
        })
      }
    })
  });
  
  let modal = $('.modal');
  $('.button-modal').on('click', function(){
    event.preventDefault();
    modal.addClass('modal_active');
    let target = $(this).attr('data-target');
    $('.modal-contact_hidden').hide();
    $('#'+target).show();
  });
var massive = [];
modalServices = document.querySelector('.modal-contact__input-services');
modalServices.value = massive

  $('#order-calc').click( function () {
      var services = '';
      $('.add-modal-contact-add__title').hide();
      var modalAmount = document.querySelector('.add-modal-contact__amount');
      var modalCount = document.querySelector('.modal-contact__input-count');
      var modalType = document.querySelector('.modal-contact__input-type');
      modalCount.value = modalAmount.textContent;

      $('.calc-calculator__service--active').each(function (e) {
          var title = $(this).find('.calc-calculator-service__header').text();
          var params = $(this).find('.params').html() || '';
          var value = $(this).find('.amount').text() || '';
          var serviceId = $(this).data('service-id');
          massive.push(title + ' ' + value + ' ' + params);
          console.log(title, params, value, serviceId)
          services += '<li class="add-modal-contact-add__item" data-service-id="' +
           serviceId + '"><div class="add-modal-contact-add__info">'+
           '<span class="add-modal-contact-add__mark"></span><span class="add-modal-contact-add__name">' +
            title + '</span></div><div class="add-modal-contact-add__details">'+
            '<span class="add-modal-contact-add__items">' +
            value + '</span> ' + params + '<img src="img/popup/x.png" alt="" class="add-modal-contact-add__remove"></div></li>';
            console.log(massive);
        modalServices.value = massive;

      });


      $('.add-modal-contact-add__list').html(services);

      if (services) {
          $('.add-modal-contact-add__title').show();
      }
      let typeCleaning = document.getElementById('cleaning-type'),
        typeListItemsActive = typeList.querySelector('.calc-type__category_active'),
        cleaningTime = document.getElementById('cleaning-time'),
        cleaningTimeValue = cleaningTime.options[cleaningTime.selectedIndex].value,
        special = document.getElementById('special');
      if (typeListItemsActive.textContent === 'Утренняя') {
        typeCleaning.textContent = 'утреннюю';
        modalType.value = typeListItemsActive.textContent;
        special.textContent = '';
      } else if (typeListItemsActive.textContent === 'Вечерняя') {
        typeCleaning.textContent = 'вечернюю';
        modalType.value = typeListItemsActive.textContent;
        special.textContent = '';
      } else if (typeListItemsActive.textContent === 'Ежедневная') {
        typeCleaning.typeListItemsActive = 'ежедневную';
        modalType.value = typeListItemsActive.textContent;
        special.textContent = '';
      } else if (typeListItemsActive.textContent === 'Генеральная') {
        typeCleaning.textContent = 'генеральную';
        modalType.value = typeListItemsActive.textContent;
        special.textContent = '';
      } else if (typeListItemsActive.textContent === 'После ЧП') {
        typeCleaning.textContent = '';
        special.textContent = 'после ЧП';
        modalType.value = typeListItemsActive.textContent;
      }

      if (document.documentElement.clientWidth < 769) {
        if (cleaningTimeValue === 'morning') {
          typeCleaning.textContent = 'утреннюю';
          special.textContent = '';
        } else if (cleaningTimeValue === 'evening') {
          typeCleaning.textContent = 'вечернюю';
          special.textContent = '';
        } else if (cleaningTimeValue === 'everyday') {
          typeCleaning.textContent = 'ежедневную';
          special.textContent = '';
        } else if (cleaningTimeValue === 'general') {
          typeCleaning.textContent = 'генеральную';
          special.textContent = '';
        } else if (cleaningTimeValue === 'emergency') {
          typeCleaning.textContent = '';
          special.textContent = 'после ЧП';
        }
      }
  });

  $('body').on('click', '.add-modal-contact-add__remove', function () {
    console.log($(this).parent('div').parent('li').data('serviceId'));
    var id = $(this).parent('div').parent('li').data('serviceId');
    
    $(this).parent('div').parent('li').remove();
    $('.calc-calculator__service[data-service-id=' + id + ']').removeClass('calc-calculator__service--active');
    // $('.select-type-clean').change();
    massive.splice(id-1, 1)
    console.log(massive);
    
  });

  $('.clock-calculator-services__showMore').click(function(e){
    e.preventDefault();
    $('.calc-service-add').removeClass('calc-service_hidden');
    $('.clock-calculator-services__showMore').css('display', 'none');
    $('.clock-calculator-services__hideMore').css('display', 'block');
  })
  $('.clock-calculator-services__hideMore').click(function(e){
    e.preventDefault();
    $('.calc-service-add').addClass('calc-service_hidden');
    $('.clock-calculator-services__hideMore').css('display', 'none');
    $('.clock-calculator-services__showMore').css('display', 'block');
  })

  $('.dirt-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    verticalSwiping: true,
    vertical: true,
    prevArrow: '<div class="dirt-arrow__up">',
    nextArrow: '<div class="dirt-arrow__down">',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          verticalSwiping: false,
          vertical: false,
          dots: true
        }
      },
    ]
  });
});