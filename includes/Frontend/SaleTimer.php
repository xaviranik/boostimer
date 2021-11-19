<?php

namespace Boostimer\Frontend;

use Boostimer\Helper;
use Boostimer\Abstracts\Timer;

/**
 * SaleTimer class.
 *
 * @since 1.0.0
 */
class SaleTimer extends Timer {

    /**
     * SaleTimer constructor.
     */
    public function __construct() {
        parent::__construct();

        // Setting default title
        $this->set_default_title( __( 'Sale ends in:', 'boostimer' ) );
    }

    /**
     * Validate the timer for frontend display.
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

        if ( ! $product->is_on_sale() ) {
            return false;
        }

        $is_sale_time_active = Helper::is_sale_timer_active( $product );

        if ( ! $is_sale_time_active ) {
            return false;
        }

        return true;
    }

    /**
     * Sets the sale timer data.
     *
     * @since 1.0.0
     *
     * @throws \Exception
     *
     * @return void
     */
    public function setup() {
        $product = wc_get_product( get_the_ID() );

        $sale_date_to   = $product->get_date_on_sale_to()->getTimestamp();
        $sale_date_from = $product->get_date_on_sale_from()->getTimestamp();

        $current_datetime = boostimer_current_datetime()->getTimestamp();

        if ( ! ( $sale_date_from < $current_datetime && $current_datetime < $sale_date_to ) ) {
            throw new \Exception( 'Sale timer is off' );
        }

        $title = apply_filters( 'boostimer_sale_timer_title', Helper::get_sale_timer_title() );

        $this->set_date_from( $sale_date_from );
        $this->set_date_to( $sale_date_to );
        $this->set_title( $title );
    }
}
