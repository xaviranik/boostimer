<?php

namespace Boostimer;

/**
 * Installer Class
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
        $installed = get_option( 'wavly_installed' );

        if ( ! $installed ) {
            update_option( 'wavly_installed', time() );
        }

        update_option( 'wavly_version', BOOSTIMER_VERSION );
    }
}
