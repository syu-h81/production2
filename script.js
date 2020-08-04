//service部分のhover処理
$(function() {
  $('.item1').hover(
    function() {
      $('.text-item1').fadeIn();
    },
    function() {
      $('.text-item1').fadeOut();
    }
  );
  $('.item2').hover(
    function() {
      $('.text-item2').fadeIn();
    },
    function() {
      $('.text-item2').fadeOut();
    }
  );
  $('.item3').hover(
    function() {
      $('.text-item3').fadeIn();
    },
    function() {
      $('.text-item3').fadeOut();
    }
  );
  $('.item4').hover(
    function() {
      $('.text-item4').fadeIn();
    },
    function() {
      $('.text-item4').fadeOut();
    }
  );
});
