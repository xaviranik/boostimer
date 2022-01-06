<?php

namespace Boostimer;

/**
 * Handles plugin deactivation.
 */
class Deactivate {

    /**
     * Deactivate constructor.
     *
     * @since 1.1.0
     */
    public function __construct() {
        register_deactivation_hook( BOOSTIMER_PLUGIN_FILE, [ $this, 'deactivate' ] );
    }

    /**
     * Deactivate plugin.
     *
     * @return void
     */
    public function deactivate() {
        // @todo codes to execute upon deactivation
    }
}
