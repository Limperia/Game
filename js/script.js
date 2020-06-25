 $('.sl').slick({
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: true,
     cssEase:'ease-in'
 });



  $('.playkey1_slider0').slick({
//autoplay: true,
     autoplaySpeed: 10000,
     arrows: false,
     cssEase:'ease-in',
     asNavFor: '.playkey1_slider',
      
//      при нажатии на картинку нижнюю она появляется вверху
      
 });

$('.playkey1_slider').slick({
slidesToShow: 3,
//    под слайдером 3 картинки
     autoplaySpeed: 2000,
     arrows: false,
     cssEase:'ease-in',
     asNavFor: '.playkey1_slider0',
    focusOnSelect: true,
//    centerMode: true,
//     centerPadding: '20px',
    
 });

//3 slader
 $('.slider_reviews').slick({
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: true,
     cssEase:'ease-in'
 });


//....button modal window...
var show=function(open_up){
    document.getElementById('button_click').style.display=open_up;
    document.getElementById('modal_window').style.display=open_up;
    document.getElementById('filter').style.display=open_up;
}