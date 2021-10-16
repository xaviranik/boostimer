<?php

namespace WooAvailability\Admin;

/**
 * WooCommerce product data meta box handler class
 */
class ProductData {

    /**
     * ProductData constructor.
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
     * Adds sale timer checkbox.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function add_sale_timer_checkbox() {
        woocommerce_wp_checkbox( [
            'id'            => '_woo_availability_show_sale_timer',
            'label'         => __( 'Show sale timer', 'woo-availability' ),
            'wrapper_class' => 'show_if_grouped',
            'desc_tip' => true,
            'description' => 'If it is not a regular WooCommerce product',
            'value'   => '',
        ] );
    }
}
