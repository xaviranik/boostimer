(function($) {

  "use strict";

  const Dokan_Woo_Availability_Frontend = {
    init: function () {
      $('#wavly_sale_timer_flipper').flipper('init');
    },
  };

  $( document ).ready( function() {
    Dokan_Woo_Availability_Frontend.init();
  } );

})(jQuery);
