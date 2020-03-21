jQuery(function ($) {
  $('.viewMoreButton').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $('.viewMoreContainer').slideToggle(700);
  });
  $('.closeButton').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $('.viewMoreContainer').slideToggle(700);
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


$(window).on('load', function () {
  $('.2000ms').delay(2000).queue(function (next) {
    $(this).addClass('animated fadeInLeft');
    next();
  });
  $('.R-2000ms').delay(2000).queue(function (next) {
    $(this).addClass('animated fadeInRight');
    next();
  });
  $('.2100ms').delay(2100).queue(function (next) {
    $(this).addClass('animated flipInX');
    next();
  });
  $('.2200ms').delay(2200).queue(function (next) {
    $(this).addClass('animated fadeInLeft');
    next();
  });
  $('.2400ms').delay(2400).queue(function (next) {
    $(this).addClass('animated fadeInLeft');
    next();
  });
  $('.2600ms').delay(2600).queue(function (next) {
    $(this).addClass('animated fadeInLeft');
    next();
  });
  $('.teamName').attr('src', '../img/verdures_animated.svg')
});

// ios ダブルタップでリンクバグ対応

var userAgent = navigator.userAgent;
var UA_iPhone = (userAgent.indexOf('iPhone') > -1) ? true : false;
var UA_iPad = (userAgent.indexOf('iPad') > -1) ? true : false;
$(function () {
  if (UA_iPhone || UA_iPad) {
    $('#gloval-navi a , #footer-navi a').bind("mouseover", function (ev) {
      var link = $(this).attr("href");
      var target = $(this).attr("target");
      var linktype = link.substring(0, 1);
      if (linktype != "#") {
        if (target == "_blank") {
          window.open(link);
        } else {
          location.href = link;
        }
      }
    });
  }
});
