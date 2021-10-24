<?php

namespace WooAvailability\Admin;

/**
 * Scripts and Styles Class.
 */
class Assets {

    /**
     * Assets constructor.
     */
    function __construct() {
        add_action( 'admin_enqueue_scripts', [ $this, 'register' ], 5 );
    }

    /**
     * Register app scripts and styles.
     *
     * @return void
     */
    public function register() {
        $this->register_scripts( $this->get_scripts() );
        $this->register_styles( $this->get_styles() );
    }

    /**
     * Gets version based on SCRIPT_DEBUG
     *
     * @return string
     */
    private function get_version() {
        return defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? time() : WOO_AVAILABILITY_VERSION;
    }

    /**
     * Gets script suffix based on SCRIPT_DEBUG.
     *
     * @return string
     */
    private function get_suffix() {
        return defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
    }

    /**
     * Register scripts.
     *
     * @param array $scripts
     *
     * @return void
     */
    private function register_scripts( $scripts ) {
        foreach ( $scripts as $handle => $script ) {
            $deps      = isset( $script['deps'] ) ? $script['deps'] : false;
            $in_footer = isset( $script['in_footer'] ) ? $script['in_footer'] : false;
            $version   = isset( $script['version'] ) ? $script['version'] : WOO_AVAILABILITY_VERSION;

            wp_register_script( $handle, $script['src'], $deps, $version, $in_footer );
        }
    }

    /**
     * Register styles.
     *
     * @param array $styles
     *
     * @return void
     */
    private function register_styles( $styles ) {
        foreach ( $styles as $handle => $style ) {
            $deps    = isset( $style['deps'] ) ? $style['deps'] : false;
            $version = isset( $script['version'] ) ? $script['version'] : WOO_AVAILABILITY_VERSION;

            wp_register_style( $handle, $style['src'], $deps, $version );
        }
    }

    /**
     * Get all registered scripts.
     *
     * @return array
     */
    private function get_scripts() {
        return [
            'woo-availability-admin-script' => [
                'src'       => WOO_AVAILABILITY_ASSET . '/js/admin' . $this->get_suffix() . '.js',
                'deps'      => [ 'jquery' ],
                'version'   => $this->get_version(),
                'in_footer' => true,
            ],
        ];
    }

    /**
     * Get registered styles
     *
     * @return array
     */
    private function get_styles() {
        return [
            'woo-availability-frontend-style' => [
                'src'     => WOO_AVAILABILITY_ASSET . '/css/frontend.css',
                'version' => $this->get_version(),
            ],
        ];
    }

}
