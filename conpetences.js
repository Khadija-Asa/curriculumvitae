$('.competences-illus, .jumbo-icons .fa').mouseover(function(){
      $(this).velocity('callout.pulse');
  });

  var level = $('#show-level');
  var levelContainer = $('#level-container');
  var elm_levelContainer = $('.level-item');
  level.on('click', function(){
    if(levelContainer.is(':hidden')){
      levelContainer.hide().velocity('slideDown',{duration:500});
      elm_levelContainer.delay(600).hide().velocity('transition.bounceLeftIn',{ duration:500, stagger:100 });
      level.removeClass('fa-tasks').addClass('fa-minus');
    }else{
      if(levelContainer.is(':visible')){
        levelContainer.velocity('slideUp',{duration:500});
        level.removeClass('fa-minus').addClass('fa-tasks');
      }
    }
  });


  $("#alert-wrapp").hide()
  .velocity('transition.bounceDownIn').delay(3000)
  .velocity('transition.bounceUpOut');

  $('.close').on('click', function(){
    $(this).parent().parent().slideUp();
  });
