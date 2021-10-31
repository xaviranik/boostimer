<?php

namespace WooAvailability\Frontend;

use WooAvailability\Abstracts\Timer;
use WooAvailability\Helper;

class StockTimer extends Timer {

    /**
     * SaleTimer constructor.
     */
    public function __construct() {
        parent::__construct();

        $this->title = Helper::get_stock_timer_title();
    }

    /**
     * Set hooks.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function set_hooks() {
        add_action( 'woocommerce_single_product_summary', [ $this, 'build_timer' ] );
    }


    /**
     * Loads sale timer template and renders on product single page.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function build_timer() {
        global $post;

        $product = wc_get_product( $post->ID );

        if ( ! $product || $product->is_type( 'grouped' ) ) {
            return;
        }

        if ( ! $product->managing_stock() && $product->is_in_stock() ) {
            return;
        }

        if ( $product->get_stock_quantity() > 0 ) {
            return;
        }

        $is_restock_timer_active = Helper::is_restock_timer_active( $product );

        if ( ! $is_restock_timer_active ) {
            return;
        }

        $title                  = apply_filters( 'wavly_restock_timer_title', $this->title );
        $restock_date_timestamp = absint( $product->get_meta( '_woo_availability_restock_date', true ) );

        $this->render( $title, $restock_date_timestamp, '' );
    }
}
