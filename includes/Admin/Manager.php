<?php

namespace Boostimer\Admin;

use Boostimer\Abstracts\BaseManager;

/**
 * Admin Manager Class.
 *
 * @since 1.0.0
 */
class Manager extends BaseManager {

    /**
     * Admin manager constructor.
     * Handles admin initializations.
     *
     * @since 1.0.0
     */
    public function __construct() {
        parent::__construct();

        $this->set_hooks();
    }

    /**
     * Loads classmap for the manager
     *
     * @return void
     */
    protected function load_classmap() {
        $this->classes = [
            'admin_asset'          => AdminAssets::class,
            'admin_menu'           => Menu::class,
            'product_data_manager' => Boostimer\Admin\ProductData\Manager::class,
        ];
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
     * Cleans admin notice for boostimer page.
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
}
