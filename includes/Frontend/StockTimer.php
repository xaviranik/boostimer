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

        $this->title = __( 'Restock in:', 'woo-availability' );
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

        $title = apply_filters( 'wavly_sale_timer_title', $this->title );
    }
}
