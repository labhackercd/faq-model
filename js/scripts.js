$('.faq__topic-name').click(function() {
  $(this).siblings('.faq__question-wrapper').toggleClass('active');
  $(this).find('.faq__topic-icon').toggleClass('active');
});

$('.faq__question').click(function() {
  $(this).siblings('.faq__answer').toggleClass('active');
  $(this).find('.faq__question-icon').toggleClass('active');
});
