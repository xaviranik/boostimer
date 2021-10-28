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
        add_action( 'admin_enqueue_scripts', [ $this, 'register_scripts' ], 5 );
    }

    /**
     * Register app scripts and styles.
     *
     * @return void
     */
    public function register_scripts() {
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
            'woo-availability-admin-script' => [
                'src'       => WOO_AVAILABILITY_ASSET . '/js/admin' . $this->get_suffix() . '.js',
                'deps'      => [ 'jquery' ],
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
        return [];
    }

    /**
     * Loads scripts
     *
     * @return void
     */
    private function load_scripts() {
    }
}
