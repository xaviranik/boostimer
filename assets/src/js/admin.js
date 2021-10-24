(function($) {

  "use strict";

  const Dokan_Woo_Availability_Admin = {
    woocommerce_product_data: $( '#woocommerce-product-data' ),
    show_sale_timer_field: $( '._woo_availability_show_sale_timer_field' ),
    show_sale_timer_field_checkbox: $( '#_woo_availability_show_sale_timer_field' ),
    sale_price_dates_fields: $( '.sale_price_dates_fields' ),

    init: function () {
      const self = this;

      self.woocommerce_product_data.on( 'click', '.sale_schedule', function() {
        self.show_sale_timer_field.show();
      } );

      self.woocommerce_product_data.on( 'click', '.cancel_sale_schedule', function() {
        self.show_sale_timer_field.hide()
      } );

      if ( self.sale_price_dates_fields.is(":visible") ) {
        self.show_sale_timer_field.show();
      } else {
        self.show_sale_timer_field.hide();
      }
    },
  };

  $( document ).ready( function() {
    Dokan_Woo_Availability_Admin.init();
  } );

})(jQuery);
