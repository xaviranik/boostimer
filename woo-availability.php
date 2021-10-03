<?php
/**
 * Plugin Name: WooAvailability Product Scheduler
 * Description:
 * URI: https://zabiranik.com
 * Author: Zabir Anik
 * Author URI: https://zabiranik.com
 * Version: 1.0
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: woo-availability
 */
defined( 'ABSPATH' ) || exit;

require __DIR__ . '/vendor/autoload.php';

/**
 * WooAvailability Class
 */
final class WooAvailability {

    /**
     * Initialize
     */
    public function __construct() {
        // code...
    }

    /**
     * Initializes the WooAvailability class
     *
     * Checks for an existing WooAvailability instance
     * and if it doesn't find one, creates it.
     */
    public static function instance() {
        static $instance = false;

        if ( ! $instance ) {
            $instance = new self();
        }

        return $instance;
    }

}

/**
 * Return the instance
 *
 * @return \WooAvailability
 */
function woo_availability() {
    return WooAvailability::instance();
}

// let's get started
woo_availability();