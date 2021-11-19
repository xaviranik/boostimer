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
        add_action( 'woocommerce_single_product_summary', [ $this, 'build'] );
    }

    /**
     * Validates the timer for frontend display.
     *
     * @since 1.0.0
     *
     * @return bool
     */
    public function validate() {
        $product = wc_get_product( get_the_ID() );

        if ( ! $product || $product->is_type( 'grouped' ) ) {
            return false;
        }

        if ( ! $product->managing_stock() && $product->is_in_stock() ) {
            return false;
        }

        if ( $product->get_stock_quantity() > 0 ) {
            return false;
        }

        $is_restock_timer_active = Helper::is_restock_timer_active( $product );

        if ( ! $is_restock_timer_active ) {
            return false;
        }

        return true;
    }

    /**
     * Sets the stock timer data.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function setup() {
        $product = wc_get_product( get_the_ID() );

        $title = Helper::get_stock_timer_title();

        $title                  = apply_filters( 'boostimer_restock_timer_title', $title );
        $restock_date_timestamp = absint( $product->get_meta( '_woo_availability_restock_date', true ) );

        $this->set_title( $title );
        $this->set_date_to( $restock_date_timestamp );
    }
}
