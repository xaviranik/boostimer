<?php

namespace Boostimer\Admin;

use Boostimer\Frontend\SaleTimer;
use Boostimer\Frontend\StockTimer;

/**
 * Admin settings manager
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
                'title'   => boostimer()->frontend->saletimer->get_default_title(),
                'enabled' => true,
            ],
            'stock_timer' => [
                'title'   => boostimer()->frontend->stocktimer->get_default_title(),
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
