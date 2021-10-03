<?php

namespace WooAvailability;

/**
 * Admin Manager Class
 */
class Admin {

    /**
     * Initialize
     */
    public function __construct() {
        add_action( 'admin_menu', [ $this, 'register_menu' ] );
    }

    /**
     * Register admin menu
     *
     * @return void
     */
    public function register_menu() {
        $menu = add_menu_page(
            __( 'WooAvailability', 'woo-availability' ),
            __( 'WooAvailability', 'woo-availability' ),
            'manage_options',
            'woo-availability',
            [ $this, 'render_page' ],
            'dashicons-yes-alt',
            57
        );

        add_action( 'admin_print_scripts-' . $menu, [ $this, 'enqueue_scripts' ] );
    }

    /**
     * Render the page
     *
     * @return void
     */
    public function render_page() {
        echo '<div id="woo-availability-app"></div>';
    }

    /**
     * Enqueue JS and CSS
     *
     * @return void
     */
    public function enqueue_scripts() {
        $assets = require WOO_AVAILABILITY_DIR . '/dist/admin.asset.php';

        $url = WOO_AVAILABILITY_URL;

        // register scripts
        wp_register_script( 'woo-availability-vendors', $url . '/dist/vendors.js', $assets['dependencies'], $assets['version'], true );
        wp_register_script( 'woo-availability-admin', $url . '/dist/admin.js', [ 'woo-availability-vendors' ], $assets['version'], true );

        // register styles
        wp_register_style( 'woo-availability-vendors-css', $url . '/dist/vendors.css', [ 'wp-components' ], $assets['version'] );
        wp_register_style( 'woo-availability-admin-css', $url . '/dist/style-admin.css', [  'woo-availability-vendors-css' ], $assets['version'] );

        // enqueue scripts and styles
        wp_enqueue_script( 'woo-availability-admin' );
        wp_enqueue_style( 'woo-availability-admin-css' );
    }
}
