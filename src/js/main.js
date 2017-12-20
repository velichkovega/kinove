/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

//= ../../node_modules/slick-carousel/slick/slick.js

//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

//= ./partials/app.js

$(window).ready(function () {
    console.log('')
})

$('.persone-img').click(function(e) {
    e.preventDefault();
    $('body').css('overflow', 'hidden');
    $('.overlay').fadeIn(500);
    $('.custom-modal').removeClass('modal-disable');
    $('.custom-modal').addClass('modal-animate');

});
$('.overlay').click(function(event) {
    // console.log(event);
    if(event.target !== event.currentTarget) return;
    $('.overlay').fadeOut(500);
    $('body').css('overflow-y', 'auto');
    $('.custom-modal').removeClass('modal-animate').addClass('modal-disable');
});