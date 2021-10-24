<?php

namespace WooAvailability\Admin;

/**
 * WooCommerce product data meta box handler class.
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
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ], 20 );

        add_action( 'woocommerce_product_options_general_product_data', [ $this, 'add_sale_timer_checkbox' ], 10 );
        add_action( 'woocommerce_process_product_meta', [ $this, 'save_sale_timer_checkbox_meta' ] );
    }

    /**
     * Adds sale timer checkbox on WooCommerce Product Data - General tab.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function add_sale_timer_checkbox() {
        global $post;

        $product = wc_get_product( $post->ID );

        if ( ! $product ) {
            return;
        }

        $show_sale_timer = $product->get_meta( '_woo_availability_show_sale_timer', true );

        woocommerce_wp_checkbox(
            [
                'id'            => '_woo_availability_show_sale_timer',
                'label'         => __( 'Show sale timer', 'woo-availability' ),
                'wrapper_class' => 'hide_if_grouped',
                'desc_tip'      => false,
                'description'   => 'Show sale countdown timer if sale price dates are set',
                'value'         => $show_sale_timer,
            ]
        );
    }

    /**
     * Saves sale timer product meta
     *
     * @since 1.0.0
     *
     * @param $post_id integer
     *
     * @return void
     */
    public function save_sale_timer_checkbox_meta( $post_id ) {
        $product = wc_get_product( $post_id );

        if ( ! $product ) {
            return;
        }

        // phpcs:disable WordPress.Security.NonceVerification.Missing
        // phpcs:disable WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
        $show_sale_timer = isset( $_POST['_woo_availability_show_sale_timer'] ) ? wc_clean( wp_unslash( $_POST['_woo_availability_show_sale_timer'] ) ) : 'no';

        $product->update_meta_data( '_woo_availability_show_sale_timer', $show_sale_timer );

        $product->save_meta_data();
    }

    /**
     * Enqueues scripts.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function enqueue_scripts() {
        wp_enqueue_script( 'woo-availability-admin-script' );
    }
}
