
$(function() {
$('.homePhotoLink').hover(function() {
    $('.nav').stop().fadeOut(700);
    $('.introWrapper').stop().fadeOut(700);
}, function() {
    $('.nav').stop().fadeIn(700);
    $('.introWrapper').stop().fadeIn(700);
});
});
