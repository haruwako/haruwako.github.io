$(window).on('scroll', function () {

  var elem = $('.elem');
  var isAnimate = 'isAnimate';

  elem.each(function () {

    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > elemOffset - wh) {
      $(this).addClass(isAnimate);
    }
  });
});


$(function () {
  $("a[href^='#']").click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    var speed = 500; // scroll speed（mms）
    $("body,html").animate({
      scrollTop: position
    }, speed, "swing"); // scroll way
    return false;
  });
});
