<?php

namespace Boostimer\Admin;

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
        $icon = 'data:image/svg+xml;base64,' . base64_encode( '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Zm-9.75 1.915a3.911 3.911 0 0 1-2.585 1.818 3.904 3.904 0 1 1 2-6.59l-.85.85a2.703 2.703 0 1 0 .791 1.911h.086a3.904 3.904 0 1 1 .558 2.011Zm6.049-2.011a2.703 2.703 0 1 1-5.405 0 2.703 2.703 0 0 1 5.405 0Z" fill="#9EA3A8"/></svg>' );

        $menu = add_menu_page(
            __( 'Boostimer', 'boostimer' ),
            __( 'Boostimer', 'boostimer' ),
            'manage_options',
            'boostimer',
            [ $this, 'render_menu_page' ],
            $icon,
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
        echo '<div id="boostimer-app"></div>';
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
        wp_enqueue_script( 'boostimer-admin' );
        wp_enqueue_style( 'boostimer-admin-css' );
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
        wp_register_script( 'boostimer-vendors', BOOSTIMER_DIST . '/vendors.js', $assets['dependencies'], $assets['version'], true );
        wp_register_script( 'boostimer-admin', BOOSTIMER_DIST . '/core.js', [ 'boostimer-vendors' ], $assets['version'], true );

        // register styles
        wp_register_style( 'boostimer-vendors-css', BOOSTIMER_DIST . '/vendors.css', [ 'wp-components' ], $assets['version'] );
        wp_register_style( 'boostimer-admin-css', BOOSTIMER_DIST . '/style-core.css', [ 'boostimer-vendors-css' ], $assets['version'] );
    }

    /**
     * Gets dist admin.asset.php.
     *
     * @since 1.0.0
     *
     * @return mixed
     */
    private function get_admin_dist_asset() {
        return require BOOSTIMER_DIR . '/dist/core.asset.php';
    }
}
