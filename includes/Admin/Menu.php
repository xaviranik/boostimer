<?php

namespace WooAvailability\Admin;

/**
 * Admin menu class.
 */
class Menu {

    /**
     * Admin menu constructor.
     *
     * @since 1.0.0
     */
    public function __construct() {
        add_action( 'admin_menu', [ $this, 'register_menu' ] );
    }

    /**
     * Register admin menu.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function register_menu() {
        $menu = add_menu_page(
            __( 'WooAvailability', 'woo-availability' ),
            __( 'WooAvailability', 'woo-availability' ),
            'manage_options',
            'woo-availability',
            [ $this, 'render_menu_page' ],
            'dashicons-yes-alt',
            57
        );

        add_action( 'admin_print_scripts-' . $menu, [ $this, 'enqueue_scripts' ], 99, 1 );
    }

    /**
     * Renders the admin page.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function render_menu_page() {
        echo '<div id="woo-availability-app"></div>';
    }

    /**
     * Enqueue JS and CSS.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function enqueue_scripts() {
        $this->register_scripts();

        // enqueue scripts and styles
        wp_enqueue_script( 'woo-availability-admin' );
        wp_enqueue_style( 'woo-availability-admin-css' );
    }

    /**
     * Register admin scripts.
     *
     * @since 1.0.0
     *
     * @return void
     */
    private function register_scripts() {
        $assets = $this->get_admin_dist_asset();

        // register scripts
        wp_register_script( 'woo-availability-vendors', WOO_AVAILABILITY_DIST . '/vendors.js', $assets['dependencies'], $assets['version'], true );
        wp_register_script( 'woo-availability-admin', WOO_AVAILABILITY_DIST . '/core.js', [ 'woo-availability-vendors' ], $assets['version'], true );

        // register styles
        wp_register_style( 'woo-availability-vendors-css', WOO_AVAILABILITY_DIST . '/vendors.css', [ 'wp-components' ], $assets['version'] );
        wp_register_style( 'woo-availability-admin-css', WOO_AVAILABILITY_DIST . '/style-core.css', [ 'woo-availability-vendors-css' ], $assets['version'] );
    }

    /**
     * Gets dist admin.asset.php.
     *
     * @since 1.0.0
     *
     * @return mixed
     */
    private function get_admin_dist_asset() {
        return require WOO_AVAILABILITY_DIR . '/dist/core.asset.php';
    }
}
