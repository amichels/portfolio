$(function () {
  var lastScrollTop = 0,
    $el = $('#js-port'),
    leftVal = 2;
    topVal = 5;
  $(window).scroll(function () {
    var st = $(this).scrollTop(),
        elLeft = parseInt($('#js-port').css('left'), 10);
        elTop = parseInt($('#js-port').css('top'), 10);
    if (st > lastScrollTop){
      // downscroll code
      $('#js-port').css({'left': '+=50', 'top': '+=50'});
    } else {
      // upscroll code
      $('#js-port').css({'left': '-=50', 'top': '-=50'});
    }
    lastScrollTop = st;
  });
});