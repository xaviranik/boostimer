<?php

namespace WooAvailability\Api;

use WP_REST_Server;

/**
 * Settings controller.
 *
 * @since 1.0.0
 */
class Settings extends BaseController {

    /**
     * Setting controller constructor.
     *
     * @return void
     */
    public function __construct() {
        $this->namespace = 'wavly/v1';
        $this->rest_base = 'settings';
    }

    /**
     * Registers the routes for the objects of the controller.
     *
     * @return void
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base,
            [
                [
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'get_items' ],
                    'permission_callback' => [ $this, 'admin_permissions_check' ],
                    'args'                => [],
                ],
                [
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => [ $this, 'update_items' ],
                    'args'                => $this->get_endpoint_args_for_item_schema( WP_REST_Server::EDITABLE ),
                    'permission_callback' => [ $this, 'admin_permissions_check' ],
                ],
                'schema' => [ $this, 'get_item_schema' ],
            ]
        );
    }

    /**
     * Retrieves a list of items.
     *
     * @param \WP_Rest_Request $request
     *
     * @return \WP_Error|\WP_HTTP_Response|\WP_Rest_Response
     */
    public function get_items( $request ) {
        // @todo: implement method
        $response = "test";
        return rest_ensure_response( $response );
    }

    /**
     * Retrieves a list of items.
     *
     * @param \WP_Rest_Request $request
     *
     * @return \WP_Error|\WP_HTTP_Response|\WP_Rest_Response
     */
    public function update_items( $request ) {
        // @todo: implement method
        $response = "test";
        return rest_ensure_response( $response );
    }
}
