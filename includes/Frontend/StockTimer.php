<?php

namespace Boostimer\Frontend;

use Boostimer\Abstracts\Timer;
use Boostimer\Helper;

class StockTimer extends Timer {

    /**
     * SaleTimer constructor.
     */
    public function __construct() {
        parent::__construct();

        // Setting default title
        $this->set_default_title( __( 'Expected restock in:', 'boostimer' ) );
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

        $title = Helper::get_stock_timer_title();

        $title                  = apply_filters( 'boostimer_restock_timer_title', $title );
        $restock_date_timestamp = absint( $product->get_meta( '_woo_availability_restock_date', true ) );

        $this->set_title( $title );
        $this->set_date_to( $restock_date_timestamp );

        $this->render();
    }
}
