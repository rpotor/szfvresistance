(function (window, $) {
  'use strict';

  var imgs = [
    ['images/dt-ft-worth.jpg', "Ken Lund", "https://www.flickr.com/photos/kenlund/68218446"],
    ['images/dt-dallas.jpg', "Raging Wire", "https://www.flickr.com/photos/ragingwire/3334765721"],
    ['images/bp-arlington.jpg', "Bo Nash", "https://www.flickr.com/photos/sidehike/309394754"],
    ['images/cowboys-stadium.jpg', "joevare", "https://www.flickr.com/photos/joevare/5629027097"],
    ['images/dallas-arboretum.jpg', "Rodney", "https://www.flickr.com/photos/rjhuttondfw/9937691186"],
    ['images/dealey-plaza.jpg', "CameliaTWU", "https://www.flickr.com/photos/cameliatwu/10972543013"],
    ['images/denton.jpg', "Brandi Korte", "https://www.flickr.com/photos/branditressler/8401359196"],
    ['images/ftw-stockyard.jpg', "Nicolas Henderson", "https://www.flickr.com/photos/texasbackroads/8126754604"],
    ['images/ftw-water-garden.jpg', "Nicolas Henderson", "https://www.flickr.com/photos/texasbackroads/7004491381"],
    ['images/gaylord-texan.jpg', "Dell Inc.", "https://www.flickr.com/photos/dellphotos/5083385705"],
    ['images/lonestar-park.jpg', "Travis Isaacs", "https://www.flickr.com/photos/tbisaacs/2406344139"],
    ['images/shops-legacy.jpg', "Tony Moore", "https://www.flickr.com/photos/soulrider/2963640409"],
    ['images/southfork.jpg', "Adam Simmons", "https://www.flickr.com/photos/mr-numb/13936057127"],
    ['images/basshall.jpg', "Bron Praslicka", "https://www.flickr.com/photos/bronpraslicka/6439645075/"]
  ],
    Cache = [],
    currentIndex = -1,
    rotateDuration = 8 * 1000,
    interval,
    changeBg = function () {
      var len = Cache.length, index = currentIndex;
      if (!len || (len === 1 && currentIndex === 0)) { return; }

      do {
        index = ~~(Math.random() * len);
      } while (index === currentIndex);

      $('#bgtop').fadeOut(0).css('background-image', 'url(' + Cache[index][0] + ')').fadeIn(500);
      $('#photocredit').text(Cache[index][1]);
      $('a#photolink').prop('href', Cache[index][2]);
      currentIndex = index;
    },
    shuffle = function (array) {
      var i, j, temp;
      for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };

  window.bg = {
    start: function () {
      interval = window.setInterval(changeBg, rotateDuration);
    },
    stop: function () {
      window.clearInterval(interval);
    }
  };

  imgs = shuffle(imgs);

  $.each(imgs, function () {
    var url = this,
      img = new Image();

    $(img).load(function () {
      Cache.push(url);

      if (Cache.length === 1) {
        changeBg();
        window.bg.start();
      }
    }).attr('src', url[0]);
  });

  $('#joinlink').on('click', function () {
    $("#form").fadeIn(500);
  });

  $('#joinconfirm').on('click', function () {
    $("#gplus").hide();
    $("#form").fadeIn(500);
  });

  $('#formclose').on('click', function () {
    $("#form").hide();
  });

  $('#aboutlink').on('click', function () {
    $("#about").fadeIn(500);
  });

  $('#aboutclose').on('click', function () {
    $("#about").hide();
  });

  $('#gpluslink').on('click', function () {
    $("#gplus").fadeIn(500);
  });

  $('#gplusclose').on('click', function () {
    $("#gplus").hide();
  });

})(window, jQuery);