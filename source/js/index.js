$(document).ready(function(){

  var steps = $(".form__form").children(".form__step");
  var nextStep = $('.next');
  var submit = $('.submit');
  var currentStep = 0;
  var isInputFilled = false;

  $(steps[currentStep]).css('display', 'flex');
  $(nextStep).css('display', 'block');

  $(".form__form").validate({
    rules:{
      phoneNumber:{
        required: true,
        minlength: 11,
        maxlength: 11,
        number:  true,
      },
      name:{
        required: true,
        minlength: 2,
        maxlength: 16,
      },
      position:{
        required: true,
        minlength: 6,
        maxlength: 16,
      },
      city:{
        required: true,
        minlength: 3,
        maxlength: 16,
      }
    },
    messages:{
      phoneNumber:{
        required: "Это поле обязательно для заполнения",
        minlength: "Номер должен быть минимум 11 символов",
        maxlength: "Максимальное число символов - 11",
        number:  "Введите цифры",
      },
      name:{
        required: "Это поле обязательно для заполнения",
        minlength: "Имя должен быть минимум 2 символа",
        maxlength: "Имя должен быть максимум 16 символов",
      },
      position:{
        required: "Это поле обязательно для заполнения",
        minlength: "Должность должен быть минимум 6 символа",
        maxlength: "Должность должен быть максимум 16 символов",
      },
      city:{
        required: "Это поле обязательно для заполнения",
        minlength: "Город должен быть минимум 3 символа",
        maxlength: "Город должен быть максимум 16 символов",
      }
    }
  });

  function  inputFillchecked() {

    var currentInputs =  $(steps[currentStep]).find("input[type='text']")
    
   
     for(var i = 0; i < currentInputs; i++) {
      console.log(currentInputs[i])
        if(currentInputs[i].value == '') {
          console.log(123)
        }
      } 
  
    }
  
  function currentDot(index) {
    var dots = $('.form__nav-dots');
        for(var i = 0; i < dots.length; i++) {
          dots[i].classList.remove('form__nav-dots--active')
        }   
      dots[index+1].classList.add('form__nav-dots--active');
    }

  $(nextStep).click(function() {
    currentDot(currentStep);
        
    if (currentStep <  steps.length-1) {
        $(steps[currentStep]).css('display', 'none');
        currentStep ++;
        $(steps[currentStep]).css('display', 'flex');
        inputFillchecked()
    }

    if(currentStep == steps.length-1) {
      $(nextStep).css('display', 'none');
      $(submit).css('display', 'block');
    }
  })

  $('.form__nav-dots').click(function() {
    currentStep = $(this).index();

    for(var i = 0; i < steps.length; i++) {
      $(steps).css('display', 'none');
    }   
    currentDot(currentStep-1)
    $(steps[currentStep]).css('display', 'flex');
    if(currentStep == steps.length-1) {
      $(nextStep).css('display', 'none');
      $(submit).css('display', 'block');
    } else {
      $(nextStep).css('display', 'block');
      $(submit).css('display', 'none');
    }
  })



    $( "input[type='text']" ).change(function() {

      });


   
 


  });
