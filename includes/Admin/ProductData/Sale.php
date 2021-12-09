<?php

namespace Boostimer\Admin\ProductData;

use Boostimer\Abstracts\ProductData;

/**
 * Sale product data.
 *
 * @since 1.0.0
 */
class Sale extends ProductData {

    /**
     * Sets hook for template rendering.
     *
     * @return void
     */
    public function set_hook_for_template_render() {
        add_action( 'woocommerce_product_options_general_product_data', [ $this, 'render_template' ], 10 );
    }

    /**
     * Adds sale timer checkbox on WooCommerce Product Data - [General tab].
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

        $show_sale_timer = $product->get_meta( "_boostimer_show_sale_timer", true );

        woocommerce_wp_checkbox(
            [
                'id'            => '_boostimer_show_sale_timer',
                'label'         => __( 'Show sale timer?', 'boostimer' ),
                'wrapper_class' => 'hide_if_grouped hide_if_variable',
                'desc_tip'      => false,
                'description'   => __( 'Show sale countdown timer if sale price and schedules are set', 'boostimer' ),
                'value'         => $show_sale_timer,
            ]
        );

        wp_nonce_field( 'boostimer_sale_timer_meta_save', 'boostimer_sale_timer_nonce' );
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
    public function save_meta( $post_id ) {
        if ( ! isset( $_POST['boostimer_sale_timer_nonce'] ) || ! wp_verify_nonce( $_POST['boostimer_sale_timer_nonce'], 'boostimer_sale_timer_meta_save' ) ) {
            return;
        }

        $product = wc_get_product( $post_id );

        if ( ! $product || $product->is_type( 'grouped' ) ) {
            return;
        }

        $sale_price     = isset( $_POST['_sale_price'] ) ? wc_clean( wp_unslash( $_POST['_sale_price'] ) ) : '';
        $sale_date_to   = isset( $_POST['_sale_price_dates_to'] ) ? wc_clean( wp_unslash( $_POST['_sale_price_dates_to'] ) ) : '';
        $sale_date_from = isset( $_POST['_sale_price_dates_from'] ) ? wc_clean( wp_unslash( $_POST['_sale_price_dates_from'] ) ) : '';

        if ( empty( $sale_price ) ) {
            return;
        }

        // If sale date to and from is not a valid date, set show sale timer to 'no' and return
        if ( empty( $sale_date_to ) || empty( $sale_date_from ) || ! strtotime( $sale_date_to ) || ! strtotime( $sale_date_from ) ) {
            $product->update_meta_data( '_boostimer_show_sale_timer', 'no' );
            $product->save_meta_data();
            return;
        }

        $show_sale_timer = isset( $_POST['_boostimer_show_sale_timer'] ) ? wc_clean( wp_unslash( $_POST['_boostimer_show_sale_timer'] ) ) : 'no';

        $product->update_meta_data( '_boostimer_show_sale_timer', $show_sale_timer );
        $product->save_meta_data();
    }
}
