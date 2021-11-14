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
    }

    /**
     * Gets timer title
     *
     * @return string
     */
    public static function get_title() {
        return __( 'Sale ends in:', 'boostimer' );
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

        $title = Helper::get_sale_timer_title();

        $title = apply_filters( 'wavly_sale_timer_title', $title );

        $this->render( $title, $sale_date_to, $sale_date_from );
    }
}
