<?php

namespace WooAvailability\Frontend;

use WooAvailability\Helper;

/**
 * SaleTimer class.
 *
 * @since 1.0.0
 */
class SaleTimer {

    /**
     * SaleTimer constructor.
     */
    public function __construct() {
        $this->set_hooks();
    }

    /**
     * Set hooks.
     */
    public function set_hooks() {
        add_action( 'woocommerce_before_add_to_cart_form', [ $this, 'render_sale_timer_template' ] );
    }

    /**
     * Loads sale timer template and renders on product single page.
     *
     * @return void
     */
    public function render_sale_timer_template() {
        global $post;

        $product = wc_get_product( $post->ID );

        if ( ! $product || $product->is_type( 'grouped' ) ) {
            return;
        }

        $is_sale_time_active = Helper::is_sale_timer_active( $product );

        if ( ! $is_sale_time_active ) {
            return;
        }

        $sale_date_to   = $product->get_meta( '_sale_price_dates_to', true );
        $sale_date_from = $product->get_meta( '_sale_price_dates_from', true );


        wavly_get_template_part(
            'sale-timer', '', []
        );
    }
}
