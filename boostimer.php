<?php
/**
 * Plugin Name: Boostimer - Product Availability Countdown And Scheduler For WooCommerce
 * Description: From sale to stock, Store-wise availability management in a breeze.
 * URI: https://zabiranik.com
 * Author: Zabir Anik
 * Author URI: https://zabiranik.com
 * Version: 1.1.0
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: boostimer
 */

defined( 'ABSPATH' ) || exit;

require __DIR__ . '/vendor/autoload.php';

/**
 * Boostimer Class.
 */
final class Boostimer {

    /**
     * Plugin version.
     *
     * @var string
     */
    private $version = '1.1.0';

    /**
     * Boostimer Constructor.
     */
    public function __construct() {
        // Defines constants.
        $this->define_constants();

        // Set up plugin.
        new \Boostimer\Setup();
    }

    /**
     * Define plugin constants.
     *
     * @return void
     */
    public function define_constants() {
        define( 'BOOSTIMER_VERSION', $this->version );
        define( 'BOOSTIMER_PLUGIN_FILE', __FILE__ );
        define( 'BOOSTIMER_DIR', __DIR__ );
        define( 'BOOSTIMER_PLUGIN_BASENAME', plugin_basename( BOOSTIMER_PLUGIN_FILE ) );
        define( 'BOOSTIMER_TEXT_DOMAIN_DIR', dirname( plugin_basename( __FILE__ ) ) . '/languages' );
        define( 'BOOSTIMER_URL', plugins_url( '', BOOSTIMER_PLUGIN_FILE ) );
        define( 'BOOSTIMER_TEMPLATES', BOOSTIMER_DIR . '/templates' );
        define( 'BOOSTIMER_ASSET', BOOSTIMER_URL . '/assets' );
        define( 'BOOSTIMER_DIST', plugins_url( 'dist', BOOSTIMER_PLUGIN_FILE ) );
    }

    /**
     * Initializes the Boostimer class.
     *
     * Checks for an existing Boostimer instance
     * and if it doesn't find one, creates it.
     *
     * @return Boostimer
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
 * Return the instance.
 *
 * @return Boostimer
 */
function boostimer() {
    return Boostimer::instance();
}

// let's get started
boostimer();
