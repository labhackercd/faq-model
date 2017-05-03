$('.faq__topic-name').on('keypress click', function() {
  $(this).siblings('.faq__question-wrapper').toggleClass('active');
  $(this).find('.faq__topic-icon').toggleClass('active');
});

$('.faq__question').on('keypress click', function() {
  $(this).siblings('.faq__answer').toggleClass('active');
  $(this).find('.faq__question-icon').toggleClass('active');
});

$('.faq__controls-button--expand').click(function(){
  $(this).closest('.faq').find('.faq__question-wrapper, .faq__topic-icon, .faq__answer, .faq__question-icon').addClass('active');
});

$('.faq__controls-button--close').click(function(){
  $(this).closest('.faq').find('.faq__question-wrapper, .faq__topic-icon, .faq__answer, .faq__question-icon').removeClass('active');
});

function setTab(hash) {
  $('.faq').addClass('hide');
  $(hash).removeClass('hide');
  $('.navigation__link').removeClass('active');
  $('a[href$="' + hash + '"]').addClass('active');
}

$('.navigation__link').on('keypress click', function(event) {
  setTab(event.target.hash);
})


$(document).ready(function() {
  var actualHash = document.location.hash;

  if (actualHash) {
    setTab(actualHash);
  } else {
    var defaultHash = $('.navigation__link').first()[0].hash;
    setTab(defaultHash);
  }
})
