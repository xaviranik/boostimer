<?php

namespace Boostimer\Api\Controllers;

use WP_REST_Controller;

/**
 * Base for Boostimer REST controllers
 *
 * @since 1.0.0
 */
class Base extends WP_REST_Controller {

    /**
     * Permission check for admin
     *
     * @param \WP_REST_Request $request
     *
     * @return bool
     */
    public function admin_permissions_check( $request ) {
        return current_user_can( 'manage_options' );
    }
}
