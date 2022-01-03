<?php

namespace Boostimer\Admin\ProductData;

use Boostimer\Abstracts\ProductData;

/**
 * Sale product data.
 *
 * @since 1.0.0
 *
 * @since BOOSTIMER_SINCE added hook setup for template rendering.
 */
class Stock extends ProductData {

    /**
     * Sets hook for template render.
     *
     * @return void
     */
    public function set_hook_for_template_render() {
        add_action( 'woocommerce_product_options_inventory_product_data', [ $this, 'render_template' ], 10 );
    }

    /**
     * Adds stock timer checkbox on WooCommerce Product Data - [General tab].
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function render_template() {
        global $post;

        $product = wc_get_product( $post->ID );

        if ( ! $product ) {
            return;
        }

        $show_stock_timer       = $product->get_meta( '_boostimer_show_stock_timer', true );
        $restock_date_timestamp = $product->get_meta( '_boostimer_restock_date', true );

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
    public function save_meta( $post_id ) {
        if ( ! isset( $_POST['boostimer_stock_timer_nonce'] ) || ! wp_verify_nonce( $_POST['boostimer_stock_timer_nonce'], 'boostimer_stock_timer_meta_save' ) ) {
            return;
        }

        $product = wc_get_product( $post_id );

        if ( ! $product || $product->is_type( 'grouped' ) ) {
            return;
        }

        $show_stock_timer = isset( $_POST['_boostimer_show_stock_timer'] ) ? wc_clean( wp_unslash( $_POST['_boostimer_show_stock_timer'] ) ) : 'no';
        $restock_date     = isset( $_POST['_boostimer_restock_date'] ) ? wc_clean( wp_unslash( $_POST['_boostimer_restock_date'] ) ) : '';

        if ( ! strtotime( $restock_date ) || 'no' === $show_stock_timer ) {
            return;
        }

        $restock_date_timestamp = boostimer_current_datetime()
            ->modify( $restock_date )
            ->setTime( 23, 59, 59 )
            ->getTimestamp();

        $product->update_meta_data( '_boostimer_show_stock_timer', $show_stock_timer );
        $product->update_meta_data( '_boostimer_restock_date', $restock_date_timestamp );
        $product->save_meta_data();
    }
}
