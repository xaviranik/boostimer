<?php

namespace Boostimer\Frontend\Timer;

use Boostimer\Helper;
use Boostimer\Abstracts\Timer;

/**
 * StockTimer class
 *
 * @since 1.0.0
 */
class Stock extends Timer {

    /**
     * SaleTimer constructor.
     */
    public function __construct() {
        parent::__construct();

        // Setting default title
        $this->set_default_title( __( 'Expected restock in:', 'boostimer' ) );

        // Setting timer key
        $this->set_key( 'stock_timer' );
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
    public function can_be_displayed() {
        if ( ! $this->product->managing_stock() && $this->product->is_in_stock() ) {
            return false;
        }

        if ( $this->product->get_stock_quantity() > 0 ) {
            return false;
        }

        return true;
    }

    /**
     * Sets the stock timer data.
     *
     * @since 1.0.0
     *
     * @throws \Exception
     *
     * @return void
     */
    public function setup() {
        $title                  = apply_filters( 'boostimer_restock_timer_title', Helper::get_stock_timer_title() );
        $restock_date_timestamp = absint( $this->product->get_meta( '_boostimer_restock_date', true ) );

        $current_datetime = boostimer_current_datetime()->getTimestamp();

        if ( $restock_date_timestamp < $current_datetime ) {
            throw new \Exception( 'Stock timer has ended' );
        }

        $this->set_title( $title );
        $this->set_date_to( $restock_date_timestamp );
    }
}
