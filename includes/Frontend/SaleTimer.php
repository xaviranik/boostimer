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
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function set_hooks() {
        add_action( 'woocommerce_before_add_to_cart_form', [ $this, 'render_sale_timer_template' ] );
    }

    /**
     * Loads sale timer template and renders on product single page.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function render_sale_timer_template() {
        global $post;

        $product = wc_get_product( $post->ID );

        if ( ! $product || $product->is_type( 'grouped' ) ) {
            return;
        }

        if ( ! $product->is_on_sale() ) {
            return;
        }

        $is_sale_time_active = Helper::is_sale_timer_active( $product );

        if ( ! $is_sale_time_active ) {
            return;
        }

        $sale_date_to   = $product->get_date_on_sale_to()->getTimestamp();
        $sale_date_from = $product->get_date_on_sale_from()->getTimestamp();

        $current_datetime = wavly_current_datetime()->getTimestamp();

        if ( ! ( $sale_date_from < $current_datetime && $current_datetime < $sale_date_to ) ) {
            return;
        }

        wavly_get_template_part(
            'sale-timer', '', [
                'sale_date_to'   => $sale_date_to,
                'sale_date_from' => $sale_date_from,
            ]
        );
    }
}
