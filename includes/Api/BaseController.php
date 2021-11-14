<?php

namespace Boostimer\Api;

use WP_REST_Controller;

class BaseController extends WP_REST_Controller {

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
