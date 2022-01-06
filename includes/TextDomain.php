<?php

namespace Boostimer;

/**
 * Class TextDomain
 *
 * @since 1.1.0
 */
class TextDomain {

    /**
     * TextDomain constructor.
     */
    public function __construct() {
        add_action( 'init', [ $this, 'load_text_domain' ] );
    }

    /**
     * Loads text domain.
     *
     * @return void
     */
    public function load_text_domain() {
        load_plugin_textdomain( 'boostimer', false, BOOSTIMER_TEXT_DOMAIN_DIR );
    }
}
