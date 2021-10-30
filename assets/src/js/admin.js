(function($) {

  "use strict";

  const Dokan_Woo_Availability_Admin = {
    woocommerce_product_data: $( '#woocommerce-product-data' ),
    show_sale_timer_field: $( '._woo_availability_show_sale_timer_field' ),
    show_sale_timer_field_checkbox: $( '#_woo_availability_show_sale_timer_field' ),
    sale_price_dates_fields: $( '.sale_price_dates_fields' ),

    show_stock_timer: $( '#_woo_availability_show_stock_timer' ),
    restock_date: $( '._woo_availability_restock_date_field' ),

    init: function () {
      const self = this;

      this.handle_sale_product_data( self );

      let config = {
        minDate: 'today',
        altInput: true,
        altFormat: 'Y-m-d',
        dateFormat: 'Y-m-d',
      };

      $( '.stock_timer' ).flatpickr(config);

      this.show_stock_timer.on( 'change', function () {
        if ( this.checked ) {
          self.restock_date.show();
        } else {
          self.restock_date.hide();
        }
      } ).trigger( 'change' );
    },

    handle_sale_product_data: function ( self ) {
      self.woocommerce_product_data.on( 'click', '.sale_schedule', function () {
        self.show_sale_timer_field.show();
      } );

      self.woocommerce_product_data.on( 'click', '.cancel_sale_schedule', function () {
        self.show_sale_timer_field.hide()
      } );

      if ( self.sale_price_dates_fields.is( ":visible" ) ) {
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
