<?php

namespace WooAvailability\Admin\ProductData;

/**
 * Sale product data
 */
class Sale {

    /**
     * Sale product data constructor.
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
        add_action( 'woocommerce_product_options_general_product_data', [ $this, 'add_sale_timer_checkbox' ], 10 );
        add_action( 'woocommerce_process_product_meta', [ $this, 'save_sale_timer_checkbox_meta' ] );
    }

    /**
     * Adds sale timer checkbox on WooCommerce Product Data - [General tab].
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
                'label'         => __( 'Show sale timer?', 'woo-availability' ),
                'wrapper_class' => 'hide_if_grouped',
                'desc_tip'      => false,
                'description'   => __( 'Show sale countdown timer if sale price and schedules are set', 'woo-availability' ),
                'value'         => $show_sale_timer,
            ]
        );
    }

    /**
     * Saves sale timer product meta.
     *
     * @since 1.0.0
     *
     * @param $post_id integer
     *
     * @return void
     */
    public function save_sale_timer_checkbox_meta( $post_id ) {
        $product = wc_get_product( $post_id );

        if ( ! $product || $product->is_type( 'grouped' ) ) {
            return;
        }

        // phpcs:disable WordPress.Security.NonceVerification.Missing
        // phpcs:disable WordPress.Security.ValidatedSanitizedInput.InputNotSanitized

        $sale_price     = isset( $_POST['_sale_price'] ) ? wc_clean( wp_unslash( $_POST['_sale_price'] ) ) : '';
        $sale_date_to   = isset( $_POST['_sale_price_dates_to'] ) ? wc_clean( wp_unslash( $_POST['_sale_price_dates_to'] ) ) : '';
        $sale_date_from = isset( $_POST['_sale_price_dates_from'] ) ? wc_clean( wp_unslash( $_POST['_sale_price_dates_from'] ) ) : '';

        if ( empty( $sale_price ) ) {
            return;
        }

        // If sale date to and from is not a valid date, set show sale timer to 'no' and return
        if ( empty( $sale_date_to ) || empty( $sale_date_from ) || ! strtotime( $sale_date_to ) || ! strtotime( $sale_date_from ) ) {
            $product->update_meta_data( '_woo_availability_show_sale_timer', 'no' );
            $product->save_meta_data();
            return;
        }

        $show_sale_timer = isset( $_POST['_woo_availability_show_sale_timer'] ) ? wc_clean( wp_unslash( $_POST['_woo_availability_show_sale_timer'] ) ) : 'no';

        $product->update_meta_data( '_woo_availability_show_sale_timer', $show_sale_timer );
        $product->save_meta_data();

        // phpcs:enable WordPress.Security.NonceVerification.Missing
        // phpcs:enable WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
    }
}
