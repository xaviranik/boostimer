<?php

namespace WooAvailability;

use WooAvailability\Admin\Settings;

/**
 * Helper class.
 *
 * @since 1.0.0
 */
class Helper {

    /**
     * Check if sale timer is active for a product
     *
     * @since 1.0.0
     *
     * @param \WC_Product $product
     *
     * @return bool
     */
    public static function is_sale_timer_active( $product ) {
        $is_sale_timer_active = $product->get_meta( '_woo_availability_show_sale_timer', true );

        return 'yes' === $is_sale_timer_active;
    }

    /**
     * Check if restock timer is active for a product
     *
     * @since 1.0.0
     *
     * @param \WC_Product $product
     *
     * @return bool
     */
    public static function is_restock_timer_active( $product ) {
        $is_restock_timer_active = $product->get_meta( '_woo_availability_show_stock_timer', true );

        return 'yes' === $is_restock_timer_active;
    }

    /**
     * Gets sale timer title
     *
     * @since 1.0.0
     *
     * @return string
     */
    public static function get_sale_timer_title() {
        $settings = Settings::get( 'sale_timer' );

        return isset( $settings['title'] ) ? $settings['title'] : __( 'Sale ends in:', 'woo-availability' );
    }

    /**
     * Gets stock timer title
     *
     * @since 1.0.0
     *
     * @return string
     */
    public static function get_stock_timer_title() {
        $settings = Settings::get( 'stock_timer' );

        return isset( $settings['title'] ) ? $settings['title'] : __( 'Expected restock in:', 'woo-availability' );
    }
}
