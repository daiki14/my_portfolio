// When the DOM is loaded and ready, let's do some shit!
$(document).ready(function() {
  function skillSet() {
    // Iterate over each element w/ a class of
    // bar-info, storing the value of data-total
    // in a variable.  Using jQuery's CSS method,
    // dynamically update the width of each bar.
    $('.bar-info').each(function() {
      total = $(this).data("total");
      $(this).css("width", total + "%");
    });
    
    // Iterate over each element w/ the class percent.  Using
    // jQuery's $(this) will allow us to interact w/ each specific
    // object in the loop.  Then use jQuery's super awesome animate method
    // to implement a counter on each .percent element, which will "count"
    // up incrementally until it reaches the number inside the percent span,
    // aka it's "ceiling".
    $('.percent').each(function() {
      var $this = $(this);
      $({
        Counter: 10
      }).animate({
        Counter: $this.text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter) + "%");
        }
      });
    });
  };
  // Invoke our skillSet function inside a setTimeout, 
  // to create a short delay before the animation begins.
  setTimeout(skillSet, 1000);
});


$(function() {
  var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
});

$(function(){
  $('#portfolio-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
    centerPadding: '100px',
    centerMode: true,
    responsive: [
      // slickからコピペ
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: 0,
          // 一枚だけ表示
          centerMode:true,
        }
      }
    ]
  });
});

$(function(){
  $( '.drawer' ).drawer()

  //スムすスクロール
  // #から始まるURLがクリックされた時
  $('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = $(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    $("html, body").animate(
      {
        scrollTop: position - $('#js-header').outerHeight()
    },
      speed
    );
    return false;
  });
});

$(function() {
  new WOW().init();
});