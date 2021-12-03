<?php

namespace Boostimer;

use Boostimer\Admin\Settings;

/**
 * Helper class.
 *
 * @since 1.0.0
 */
class Helper {

    /**
     * Gets sale timer title
     *
     * @since 1.0.0
     *
     * @return string
     */
    public static function get_sale_timer_title() {
        $settings = Settings::get( 'sale_timer' );

        return isset( $settings['title'] ) ? $settings['title'] : __( 'Sale ends in:', 'boostimer' );
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

        return isset( $settings['title'] ) ? $settings['title'] : __( 'Expected restock in:', 'boostimer' );
    }
}
