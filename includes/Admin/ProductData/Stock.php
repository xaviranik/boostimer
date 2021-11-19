<?php

namespace Boostimer\Admin\ProductData;

class Stock {

    /**
     * stock product data constructor.
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
        add_action( 'woocommerce_product_options_inventory_product_data', [ $this, 'add_stock_timer_template' ], 10 );
        add_action( 'woocommerce_process_product_meta', [ $this, 'save_stock_timer_meta' ], 20, 1 );
    }

    /**
     * Adds stock timer checkbox on WooCommerce Product Data - [General tab].
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function add_stock_timer_template() {
        global $post;

        $product = wc_get_product( $post->ID );

        if ( ! $product ) {
            return;
        }

        $show_stock_timer       = $product->get_meta( '_woo_availability_show_stock_timer', true );
        $restock_date_timestamp = $product->get_meta( '_woo_availability_restock_date', true );

        $restock_date = boostimer_format_datetime( $restock_date_timestamp, 'Y-m-d' );

        boostimer_get_template_part(
            'admin/stock-product-data',
            '',
            [
                'show_stock_timer' => $show_stock_timer,
                'restock_date'     => $restock_date,
            ]
        );
    }

    /**
     * Saves stock timer product meta.
     *
     * @since 1.0.0
     *
     * @param $post_id integer
     *
     * @return void
     */
    public function save_stock_timer_meta( $post_id ) {
        $product = wc_get_product( $post_id );

        if ( ! $product || $product->is_type( 'grouped' ) ) {
            return;
        }

        // phpcs:disable WordPress.Security.NonceVerification.Missing
        // phpcs:disable WordPress.Security.ValidatedSanitizedInput.InputNotSanitized

        $show_stock_timer = isset( $_POST['_woo_availability_show_stock_timer'] ) ? wc_clean( wp_unslash( $_POST['_woo_availability_show_stock_timer'] ) ) : 'no';
        $restock_date     = isset( $_POST['_woo_availability_restock_date'] ) ? wc_clean( wp_unslash( $_POST['_woo_availability_restock_date'] ) ) : '';

        if ( ! strtotime( $restock_date ) ) {
            return;
        }

        $restock_date_timestamp = boostimer_current_datetime()
                                    ->modify( $restock_date )
                                    ->setTime( 23, 59, 59 )
                                    ->getTimestamp();

        $product->update_meta_data( '_woo_availability_show_stock_timer', $show_stock_timer );
        $product->update_meta_data( '_woo_availability_restock_date', $restock_date_timestamp );
        $product->save_meta_data();

        // phpcs:enable WordPress.Security.NonceVerification.Missing
        // phpcs:enable WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
    }
}
