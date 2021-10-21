<?php
/**
 * Plugin Name: WooAvailability
 * Description: From sale to stock, Store-wise availability management in a breeze.
 * URI: https://zabiranik.com
 * Author: Zabir Anik
 * Author URI: https://zabiranik.com
 * Version: 1.0.0
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: woo-availability
 */

defined( 'ABSPATH' ) || exit;

require __DIR__ . '/vendor/autoload.php';

/**
 * WooAvailability Class.
 */
final class WooAvailability {

    /**
     * WooAvailability Constructor.
     */
    public function __construct() {
        $this->define_constants();

        register_activation_hook(__FILE__, array( $this, 'activate' ));
        register_deactivation_hook(__FILE__, array( $this, 'deactivate' ));

        add_action( 'woocommerce_loaded', [ $this, 'init_plugin' ] );
    }

    /**
     * Define plugin constants.
     *
     * @return void
     */
    public function define_constants() {
        define( 'WOO_AVAILABILITY_DIR', __DIR__ );
        define( 'WOO_AVAILABILITY_URL', plugins_url( '', __FILE__ ) );
        define( 'WOO_AVAILABILITY_DIST', plugins_url( 'dist', __FILE__ ) );
    }

    /**
     * Activate plugin.
     */
    public function activate() {
        if ( ! function_exists( 'WC' ) ) {
            require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
            deactivate_plugins( plugin_basename( __FILE__ ) );

            wp_die( '<div class="error"><p>' . sprintf( wp_kses_post( '<b>WooAvailability</b> requires <a href="%s">WooCommerce</a> to be installed & activated! Go back to <a href="%s">Plugin page</a>' ), 'https://wordpress.org/plugins/woocommerce/', esc_url( admin_url( 'plugins.php' ) ) ) . '</p></div>' );
        }
    }

    /**
     * Deactivate plugin.
     */
    public function deactivate() {
        // @todo codes to execute upon deactivation
    }

    /**
     * Initializes the WooAvailability class.
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

    /**
     * Initialize the plugin.
     *
     * @return void
     */
    public function init_plugin() {
        if ( is_admin() ) {
            new WooAvailability\Admin();
        }
    }
}

/**
 * Return the instance.
 *
 * @return \WooAvailability
 */
function woo_availability() {
    return WooAvailability::instance();
}

// let's get started
woo_availability();
