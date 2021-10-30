<?php

namespace WooAvailability;

/**
 * Helper class.
 *
 * @since 1.0.0
 */
class Helper {

    /**
     * Check if sale timer is active for a product
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
     * @param \WC_Product $product
     *
     * @return bool
     */
    public static function is_restock_timer_active( $product ) {
        $is_restock_timer_active = $product->get_meta( '_woo_availability_show_stock_timer', true );

        return 'yes' === $is_restock_timer_active;
    }
}
