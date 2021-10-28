(function ($) {

  "use strict";

  $.fn.wavlyCountdown = function ( options ) {
    const wavly = $( this );
    let settings = $.extend(
      {
        endTime: '',
        timezone: '',
        refresh: 1000,
      },
      options
    );
    return this.each( function ( i ) {
      const interval = setInterval(function () {
        countTimer();
      }, settings.refresh);

      function countTimer() {
        let endTime = new Date(settings.endTime);
        endTime = Date.parse(endTime) / 1000;

        let now = new Date();
        now = Date.parse(now) / 1000;

        let timeLeft = endTime - now;

        if ( timeLeft <= -1 ) {
          clearInterval(interval);
          return;
        }

        let days = Math.floor(timeLeft / 86400);
        let hours = Math.floor((timeLeft - days * 86400) / 3600);
        let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        let seconds = Math.floor(
          timeLeft - days * 86400 - hours * 3600 - minutes * 60
        );

        if ( days == '0' && hours == '0' && minutes == '0' && seconds == '0' ) {
          window.location.reload( false );
        }

        if (hours < "10") {
          hours = "0" + hours;
        }
        if (minutes < "10") {
          minutes = "0" + minutes;
        }
        if (seconds < "10") {
          seconds = "0" + seconds;
        }

        $(wavly).find("[data-wavly-days]").html(days);
        $(wavly).find("[data-wavly-hours]").html(hours);
        $(wavly).find("[data-wavly-minutes]").html(minutes);
        $(wavly).find("[data-wavly-seconds]").html(seconds);
      }
    });
  };
})(jQuery);

(function($) {

  "use strict";

  const Dokan_Woo_Availability_Frontend = {
    timer: $("#wavly-timer"),
    sale_dates: typeof wavly_sale_dates === 'undefined' ? {} : wavly_sale_dates,

    init: function () {
      this.timer.wavlyCountdown({
        endTime: this.sale_dates.sale_date_to * 1000,
        timezone: this.sale_dates.timezone,
      });
    },
  };

  $( document ).ready( function() {
    Dokan_Woo_Availability_Frontend.init();
  } );

})(jQuery);
