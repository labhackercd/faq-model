$('.faq__topic-name').on('keypress click', function() {
  $(this).siblings('.faq__question-wrapper').toggleClass('active');
  $(this).find('.faq__topic-icon').toggleClass('active');
});

$('.faq__question').on('keypress click', function() {
  $(this).siblings('.faq__answer').toggleClass('active');
  $(this).find('.faq__question-icon').toggleClass('active');
});

function setTab(hash) {
  $('.faq').addClass('hide');
  $(hash).removeClass('hide');
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
