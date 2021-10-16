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
     *
     * @since 1.0.0
     */
    public function __construct() {
        $this->set_hooks();
    }

    /**
     * Set hooks.
     *
     * @since 1.0.0
     */
    public function set_hooks() {
        add_filter( 'woocommerce_product_options_general_product_data', [ $this, 'add_sale_timer_checkbox' ] );
    }

    /**
     * Adds sale timer enable checkbox
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function add_sale_timer_checkbox() {
        woocommerce_wp_checkbox([
            'id' => '_woo_availability_show_sale_timer',
            'label' => __( 'Show sale timer', 'woo-availability' ),
            'wrapper_class' => 'show_if_grouped',
        ]);
    }
}
