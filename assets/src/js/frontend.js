(function ($) {

  "use strict";

  $.fn.boostimerCountdown = function ( options ) {
    const boostimer = $( this );
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

        $(boostimer).find("[data-boostimer-days]").html(days);
        $(boostimer).find("[data-boostimer-hours]").html(hours);
        $(boostimer).find("[data-boostimer-minutes]").html(minutes);
        $(boostimer).find("[data-boostimer-seconds]").html(seconds);
      }
    });
  };
})(jQuery);

(function($) {

  "use strict";

  const Dokan_Woo_Availability_Frontend = {
    timer: $("#boostimer-timer"),
    dates: typeof boostimer_dates === 'undefined' ? {} : boostimer_dates,

    init: function () {
      this.timer.boostimerCountdown({
        endTime: this.dates.date_to * 1000,
        timezone: this.dates.timezone,
      });
    },
  };

  $( document ).ready( function() {
    Dokan_Woo_Availability_Frontend.init();
  } );

})(jQuery);
