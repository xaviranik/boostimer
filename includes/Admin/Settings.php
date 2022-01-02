<?php

namespace Boostimer\Admin;

/**
 * Admin settings manager.
 *
 * @since 1.0.0
 */
class Settings {

    /**
     * @var string
     */
    public static $OPTION_KEY = 'boostimer_settings';

    /**
     * Return all settings.
     *
     * @return array
     */
    public static function all() {
        $default = apply_filters( 'boostimer_settings_default', [
            'sale_timer'  => [
                'title'   => __( 'Sale ends in:', 'boostimer' ),
                'enabled' => true,
            ],
            'stock_timer' => [
                'title'   => __( 'Expected restock in:', 'boostimer' ),
                'enabled' => true,
            ],
            'prompt_sale_date' => [
                'title'   => __( 'Sale till:', 'boostimer' ),
                'enabled' => true,
            ],
            'prompt_stock_date' => [
                'title'   => __( 'Expected restock on:', 'boostimer' ),
                'enabled' => true,
            ],
        ] );

        $settings = get_option( self::$OPTION_KEY, [] );

        return wp_parse_args( $settings, $default );
    }

    /**
     * Get a settings value by key.
     *
     * @param string $key
     *
     * @return mixed
     */
    public static function get( $key ) {
        $settings = self::all();

        if ( isset( $settings[ $key ] ) ) {
            return $settings[ $key ];
        }

        return false;
    }

    /**
     * Updates settings
     *
     * @since 1.0.0
     *
     * @param array $settings
     */
    public static function update( $settings ) {
        update_option( self::$OPTION_KEY, $settings );
    }
}
