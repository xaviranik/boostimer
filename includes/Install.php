<?php

namespace Boostimer;

/**
 * Installer Class.
 *
 * @since 1.0.0
 */
class Install {

    /**
     * Run the installer.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function run() {
        $installed = get_option( 'boostimer_installed' );

        if ( ! $installed ) {
            update_option( 'boostimer_installed', time() );
        }

        update_option( 'boostimer_version', BOOSTIMER_VERSION );
    }
}
