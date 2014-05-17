(function (window, $) {
  'use strict';

  var imgs = [
    ['images/dt-ft-worth.jpg', "Ken Lund", "https://secure.flickr.com/photos/kenlund/68218446/in/photolist-72CY7-frPbeL-9U2ggc-6fF5Wb-f88Erj-ehceP5-6XMmxr-eJAdQZ-8gyBKx-bVPQk9-29t5AN-5NWiCM-eh6vta-87EDvq-5nmzup-eJGnHJ-3Lvjud-5nmwVZ-9Ta1kz-9Ta15x-9Ta1at-9TcQKN-9TcP7U-9TcQMj-9Ta1rc-9Ta11D-9T9ZYK-9Ta17X-9TcNXu-9Ta1eX-9TcPxE-9Ta1nk-9TcQr9-9TcPrL-9TcPpG-9Ta1pk-9Ta1F8-9Ta1H2-9TcPFS-9TcPu7-9Ta2Hr-9Ta2JR-9Ta1Ki-9Ta1ie-9Ta1sZ-9TcQxE-9Ta2BV-9TcQGA-9TcQtu-9Ta2Fr"],
    ['images/dt-dallas.jpg', "Raging Wire", "https://secure.flickr.com/photos/ragingwire/3334765721/in/photolist-mYEuw-mzYP7a-65FxEH-cFv1Ro-5XZtyp-dpVujz-cU72E1-9uHynK-axJXkP-5ZR61T-aw1VED-czN78d-mMyDhe-9sjAeN-9nZ7vZ-mAtcpR-bLbxZB-faiino-973zko-9nZawz-9o3bM7-7edWQu-uQD9-95VW2P-mBciCr-e5gp5C-6UKLzn-88aoXi-7UZtCK-9HdYG2-4mbxg9-mA6pxw-93K5AH-6daYvp-fDcWYt-6ECGS1-7KmW2U-em6QPL-4EpyRk-cEhufu-cEhtTN-61Ang1-HVrvA-9dHpBu-74UHDB-4WqGbZ-dWotQP-enbN2Z-dvvZsN-dujLZF"]
  ],
    Cache = [],
    currentIndex = -1,
    rotateDuration = 5 * 1000,
    interval,
    changeBg = function () {
      var len = Cache.length, index = currentIndex;
      if (!len || (len === 1 && currentIndex === 0)) { return; }

      do {
        index = ~~(Math.random() * len);
      } while (index === currentIndex);

      $('#bgtop').fadeOut(0).css('background-image', 'url(' + Cache[index][0] + ')').fadeIn(500);
      $('#photocredit').text(Cache[index][1]);
      $('#photolink').attr('href', Cache[index][2]);
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
  
  $('#formclose').on('click', function () {
    $("#form").hide();
  });

})(window, jQuery);