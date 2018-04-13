document.addEventListener("WeixinJSBridgeReady", function (){
  vedioAutoPlay();
})
function vedioAutoPlay(){
  var audio = document.getElementById("video"),
  play = function(){
    audio.play();
  };
  // audio.play();
  setTimeout(function(){
    document.getElementById("video").style.display = "block";
  }, 500)
}

$(function () {

  var videos = document.getElementById('video');
  $('.loading').addClass('active');
  $(window).on('load', function () {
    setTimeout(function () {
      $('.loadMain').fadeOut(600);
    }, 500,function () {

    });
  });


  $('.plays').tap(function () {
    if(videos.paused){
      videos.play();
      $(this).addClass('active');
      getInfo();
    }else {
      videos.pause();
      $(this).removeClass('active');
      clearInterval(sets);
    }
  })
  var time,times,tol,sets;
  function getInfo(){
    time = parseFloat(video.duration);
    times = parseFloat(video.currentTime);
    tol = parseFloat(time-times)*1000
    sets = setTimeout(function () {
       $('.vedios').animate({
         opacity:0
       },400,function () {
         $(this).hide();
       })
     },tol);
  }



  $('body').swipeLeft(function(){
    console.log('向左');

  })
  $('body').swipeRight(function(){console.log('向右')})
  $('body').swipeUp(function(){console.log('向上')})
  $('body').swipeDown(function(){console.log('向下')})
})