<?php

namespace Boostimer\Frontend;

/**
 * Class ShortSaleDate.
 *
 * @since BOOSTIMER_SINCE
 */
class ShortSaleDate {

    /**
     * ShortSaleDate constructor.
     */
    public function __construct() {
        add_action( 'woocommerce_after_shop_loop_item_title', [ $this, 'render_short_date' ] );
    }

    /**
     * Renders the short sale date.
     *
     * @return void
     */
    public function render_short_date() {
        boostimer_get_template_part(
            'short-sale-date',
            '',
            []
        );
    }
}
