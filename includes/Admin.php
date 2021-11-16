<?php

namespace Boostimer;

use Boostimer\Admin\Menu;
use Boostimer\Admin\AdminAssets;
use Boostimer\Admin\ProductData;

/**
 * Admin Manager Class.
 */
class Admin {

    /**
     * Admin manager constructor.
     * Handles admin initializations.
     *
     * @since 1.0.0
     */
    public function __construct() {
        $this->initialize();
        $this->set_hooks();
    }

    /**
     * Initiates admin classes
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function initialize() {
        // Asset Loader
        new AdminAssets();

        // Admin menu manager
        new Menu();

        // Product data manager
        new ProductData();
    }

    /**
     * Sets up hooks.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function set_hooks() {
        // Plugin page cleanup
        add_action( 'admin_head', [ $this, 'cleanup_admin_notices' ], 1 );

        // Plugin row meta docs link
        add_filter( 'plugin_row_meta', [ $this, 'plugin_row_meta' ], 10, 2 );
    }

    /**
     * Cleans admin notice for boostimer page
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function cleanup_admin_notices() {
        global $pagenow;

        if ( ! ( 'admin.php' === $pagenow && 'boostimer' === $_GET['page'] ) ) {
            return;
        }

        remove_all_actions( 'admin_notices' );
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
