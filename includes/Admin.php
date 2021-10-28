<?php

namespace WooAvailability;

use WooAvailability\Admin\AdminAssets;
use WooAvailability\Admin\Menu;
use WooAvailability\Admin\ProductData;

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
    }

    /**
     * Cleans admin notice for woo-availability page
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function cleanup_admin_notices() {
        global $pagenow;

        if ( ! ( $pagenow == 'admin.php' && $_GET['page'] == 'woo-availability' ) ) {
            return;
        }

        remove_all_actions( 'admin_notices' );
    }
}
