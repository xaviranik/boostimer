<?php

namespace Boostimer;

/**
 * Handles Activation the plugin
 *
 * @since BOOSTIMER_SINCE
 */
class Activate {

    /**
     * Activates the plugin.
     *
     * @return void
     */
    public function __construct() {
        register_activation_hook( __FILE__, [ $this, 'activate' ] );
    }

    /**
     * Activate plugin.
     *
     * @return void
     */
    public function activate() {
        $installer = new Install();
        $installer->run();
    }
}
