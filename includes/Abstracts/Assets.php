<?php

namespace WooAvailability\Abstracts;

abstract class Assets {

    /**
     * Register app scripts and styles.
     *
     * @return void
     */
    public function register() {
        $this->register_scripts();
        $this->register_styles();
    }

    /**
     * Gets version based on SCRIPT_DEBUG
     *
     * @return string
     */
    protected function get_version() {
        return defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? time() : WOO_AVAILABILITY_VERSION;
    }

    /**
     * Gets script suffix based on SCRIPT_DEBUG.
     *
     * @return string
     */
    protected function get_suffix() {
        return defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
    }

    /**
     * Register scripts.
     *
     * @return void
     */
    private function register_scripts() {
        $scripts = $this->get_scripts();

        if ( empty( $scripts ) ) {
            return;
        }

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
     * @return void
     */
    private function register_styles() {
        $styles = $this->get_styles();

        if ( empty( $styles ) ) {
            return;
        }

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
    abstract protected function get_scripts();

    /**
     * Get registered styles
     *
     * @return array
     */
    abstract protected function get_styles();
}
