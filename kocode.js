$(window).on('load scroll', function () {
  add_class_in_scrolling($('.svg-title1'));
  add_class_in_scrolling($('.svg-namebar'));
  add_class_in_scrolling($('.svg-title2'));
  add_class_in_scrolling($('.svg-title3'));
  add_class_in_scrolling($('.svg-title4'));
});

// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
  var winScroll = $(window).scrollTop();
  var winHeight = $(window).height();
  var scrollPos = winScroll + winHeight;
  target.addClass('hide');
  if (target.offset().top < scrollPos) {
    target.addClass('start');

    $('.svg-title1.start').attr('src', '../img/aboutme_animated.svg');
    $('.svg-namebar.start').attr('src', '../img/namebar_animated.svg');
    $('.svg-title2.start').attr('src', '../img/service_animated.svg');
    $('.svg-title3.start').attr('src', '../img/works_animated.svg');
    $('.svg-title4.start').attr('src', '../img/contact_animated.svg');
    target.removeClass('hide');

  }

}

// $(window).on('scroll', function () {

//   var elem = $('.elem');
//   var isAnimate = 'isAnimate';

//   elem.each(function () {

//     var elemOffset = $(this).offset().top;
//     var scrollPos = $(window).scrollTop();
//     var wh = $(window).height();

//     if (scrollPos > elemOffset - wh) {
//       $(this).addClass(isAnimate);
//     }
//   });
// });
$(window).scroll(function () {
  $(".elem").each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();

    if (scroll > hit - wHeight - wHeight / 1000) {
      $(this).addClass("isAnimate");
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
