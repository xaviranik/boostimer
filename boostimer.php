<?php
/**
 * Plugin Name: Boostimer - Product Availability Countdown And Scheduler For WooCommerce
 * Description: From sale to stock, Store-wise availability management in a breeze.
 * URI: https://zabiranik.com
 * Author: Zabir Anik
 * Author URI: https://zabiranik.com
 * Version: 1.0.0
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
    private $version = '1.0.0';

    /**
     * Instance container.
     *
     * @var array
     */
    private $container = [];

    /**
     * Boostimer Constructor.
     */
    public function __construct() {
        $this->define_constants();

        register_activation_hook(__FILE__, array( $this, 'activate' ));
        register_deactivation_hook(__FILE__, array( $this, 'deactivate' ));

        add_action( 'init', [ $this, 'load_text_domain' ] );
        add_action( 'plugins_loaded', [ $this, 'init_plugin' ] );
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
        define( 'BOOSTIMER_URL', plugins_url( '', BOOSTIMER_PLUGIN_FILE ) );
        define( 'BOOSTIMER_TEMPLATES', BOOSTIMER_DIR . '/templates' );
        define( 'BOOSTIMER_ASSET', BOOSTIMER_URL . '/assets' );
        define( 'BOOSTIMER_DIST', plugins_url( 'dist', BOOSTIMER_PLUGIN_FILE ) );
    }

    /**
     * Activate plugin.
     *
     * @return void
     */
    public function activate() {
        if ( ! function_exists( 'WC' ) ) {
            require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
            deactivate_plugins( plugin_basename( __FILE__ ) );

            wp_die( '<div class="error"><p>' . sprintf( wp_kses_post( '<b>Boostimer</b> requires <a href="%s">WooCommerce</a> to be installed & activated! Go back to <a href="%s">Plugin page</a>' ), 'https://wordpress.org/plugins/woocommerce/', esc_url( admin_url( 'plugins.php' ) ) ) . '</p></div>' );
        }

        $installer = new Boostimer\Install();
        $installer->run();
    }

    /**
     * Deactivate plugin.
     *
     * @return void
     */
    public function deactivate() {
        // @todo codes to execute upon deactivation
    }

    /**
     * Loads text domain
     *
     * @return void
     */
    public function load_text_domain() {
        load_plugin_textdomain( 'boostimer', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
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

    /**
     * Initialize the plugin.
     *
     * @return void
     */
    public function init_plugin() {
        // Load global functions
        include_once BOOSTIMER_DIR . '/includes/functions.php';

        // Load admin manager
        if ( is_admin() ) {
            new Boostimer\Admin();
        }

        // Load frontend manager
        if ( ! is_admin() ) {
            new Boostimer\Frontend();
        }

        // Load API manager
        new Boostimer\Api();
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
