<?php

namespace WooAvailability;

use WooAvailability\Admin\Assets;
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
        // Asset Loader
        new Assets();
        // Admin menu manager
        new Menu();
        // Product data manager
        new ProductData();

        // Plugin page cleanup
        add_action( 'admin_head', [ $this, 'cleanup_admin_notices' ], 1 );
    }

    public function cleanup_admin_notices() {
        global $pagenow;

        if ( ! ( $pagenow == 'admin.php' && $_GET['page'] == 'woo-availability' ) ) {
            return;
        }

        remove_all_actions( 'admin_notices' );
    }
}
