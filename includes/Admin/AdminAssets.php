<?php

namespace WooAvailability\Admin;

use WooAvailability\Abstracts\Assets;

/**
 * Scripts and Styles Class.
 */
class AdminAssets extends Assets {

    /**
     * AdminAssets constructor.
     */
    public function __construct() {
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ], 5 );
    }

    /**
     * Register app scripts and styles.
     *
     * @return void
     */
    public function enqueue_scripts() {
        $this->register();
        $this->load_scripts();
    }


    /**
     * Get all registered scripts.
     *
     * @return array
     */
    protected function get_scripts() {
        return [
            'woo-availability-flatpickr-script' => [
                'src'       => WOO_AVAILABILITY_ASSET . '/vendor/flatpickr.min.js',
                'deps'      => [ 'jquery' ],
                'version'   => $this->get_version(),
                'in_footer' => true,
            ],
            'woo-availability-admin-script' => [
                'src'       => WOO_AVAILABILITY_ASSET . '/js/admin' . $this->get_suffix() . '.js',
                'deps'      => [ 'jquery', 'woo-availability-flatpickr-script' ],
                'version'   => $this->get_version(),
                'in_footer' => true,
            ],
        ];
    }

    /**
     * Gets frontend styles.
     *
     * @return array
     */
    protected function get_styles() {
        return [
            'woo-availability-flatpickr-style' => [
                'src'     => WOO_AVAILABILITY_ASSET . '/vendor/flatpickr.min.css',
                'version' => $this->get_version(),
            ],
        ];
    }

    /**
     * Loads scripts
     *
     * @return void
     */
    private function load_scripts() {
        wp_enqueue_script( 'woo-availability-admin-script' );
        wp_enqueue_style( 'woo-availability-flatpickr-style' );
    }
}
