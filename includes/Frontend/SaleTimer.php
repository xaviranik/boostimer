<?php

namespace WooAvailability\Frontend;

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
        add_action( 'woocommerce_after_add_to_cart_button', [ $this, 'render_sale_timer_template' ] );
    }

    /**
     * Loads sale timer template and renders on product single page.
     *
     * @return void
     */
    public function render_sale_timer_template() {
        wavly_get_template_part(
            'sale-timer', '', []
        );
    }
}
