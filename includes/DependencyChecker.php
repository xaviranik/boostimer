<?php

namespace Boostimer;

/**
 * WooCommerce Dependency Checker class
 */
class DependencyChecker {

    /**
     * Constructor.
     */
    public function __construct() {
        // Admin notice for WooCommerce dependency
        add_action( 'admin_notices', [ $this, 'render_woocommerce_dependency_notice' ] );
    }

    /**
     * Missing WooCommerce notice
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function render_woocommerce_dependency_notice() {
        // Check wooCommerce is available and active
        $has_woocommerce = $this->has_woocommerce();

        if ( $has_woocommerce ) {
            return;
        }

        // Check if woocommerce installed
        $woocommerce_installed = $this->is_woocommerce_installed();

        $plugin_file = basename( BOOSTIMER_DIR ) . '/boostimer.php';

        if ( current_user_can( 'activate_plugins' ) ) {
            boostimer_get_template_part(
                'notice', '',
                [
                    'has_woocommerce'       => $has_woocommerce,
                    'woocommerce_installed' => $woocommerce_installed,
                    'plugin_file'           => $plugin_file,
                ]
            );
        }
    }

    /**
     * Check whether woocommerce is installed and active.
     *
     * @return bool
     */
    public function has_woocommerce() {
        return class_exists( 'WooCommerce' );
    }

    /**
     * Check whether woocommerce is installed.
     *
     * @return bool
     */
    public function is_woocommerce_installed() {
        return in_array( 'woocommerce/woocommerce.php', array_keys( get_plugins() ), true );
    }
}
