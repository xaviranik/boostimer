<?php

namespace Boostimer;

class Deactivate {

    /**
     * Deactivate constructor.
     *
     * @since BOOSTIMER_SINCE
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
