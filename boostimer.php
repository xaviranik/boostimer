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

    use \Boostimer\Traits\Container;

    /**
     * Plugin version.
     *
     * @var string
     */
    private $version = '1.0.0';

    /**
     * Boostimer Constructor.
     */
    public function __construct() {
        $this->define_constants();

        register_activation_hook(__FILE__, array( $this, 'activate' ));
        register_deactivation_hook(__FILE__, array( $this, 'deactivate' ));

        add_action( 'init', [ $this, 'load_text_domain' ] );
        add_action( 'plugins_loaded', [ $this, 'init_plugin' ] );

        // Plugin row meta docs link
        add_filter( 'plugin_row_meta', [ $this, 'plugin_row_meta' ], 10, 2 );
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
        require_once BOOSTIMER_DIR . '/includes/functions.php';

        $checker = new \Boostimer\DependencyChecker();

        if ( ! $checker->has_woocommerce() ) {
            return;
        }

        $this->load_classes();
    }

    /**
     * Loads all the classes
     *
     * @return void
     */
    protected function load_classes() {
        // Load admin manager
        if ( is_admin() ) {
            $this->container['admin'] = new Boostimer\Admin();
        }

        // Load frontend manager
        if ( ! is_admin() ) {
            $this->container['frontend'] = new Boostimer\Frontend\Manager();
        }

        // Load API manager
        new Boostimer\Api();
    }

    /**
     * Show row meta on the plugin screen.
     *
     * @since 1.0.0
     *
     * @param array $links Plugin Row Meta.
     * @param mixed $file  Plugin Base file.
     *
     * @return array
     */
    public static function plugin_row_meta( $links, $file ) {
        if ( BOOSTIMER_PLUGIN_BASENAME !== $file ) {
            return $links;
        }

        $row_meta = [
            'docs'    => '<a href="' . esc_url( apply_filters( 'boostimer_docs_url', 'https://boostimer.netlify.app/' ) ) . '" aria-label="' . esc_attr__( 'View Boostimer documentation', 'boostimer' ) . '">' . esc_html__( 'Docs', 'boostimer' ) . '</a>',
            'support' => '<a href="' . esc_url( apply_filters( 'boostimer_community_support_url', 'https://wordpress.org/support/plugin/boostimer/' ) ) . '" aria-label="' . esc_attr__( 'Visit Boostimer forums', 'boostimer' ) . '">' . esc_html__( 'Community support', 'boostimer' ) . '</a>',
        ];

        return array_merge( $links, $row_meta );
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
