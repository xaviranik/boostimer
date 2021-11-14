<?php

namespace Boostimer\Api;

use WP_REST_Server;
use Boostimer\Admin\Settings as AdminSettings;

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
        $this->namespace = 'boostimer/v1';
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
                    'permission_callback' => [ $this, 'admin_permissions_check' ],
                    'args'                => $this->get_endpoint_args_for_item_schema( WP_REST_Server::EDITABLE, 'update_item' ),
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
        $response = AdminSettings::all();

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
        $settings = $this->prepare_item_for_database( $request );

        AdminSettings::update( $settings );

        return rest_ensure_response( [ 'message' => __( 'Settings have been updated successfully', 'boostimer' ) ] );
    }

    /**
     * Prepare item for database save.
     *
     * @since 1.0.0
     *
     * @param \WP_REST_Request $request
     *
     * @return array $item
     */
    public function prepare_item_for_database( $request ) {
        $item = [];

        if ( isset( $request['sale_timer'] ) ) {
            $item['sale_timer'] = $request['sale_timer'];
        }

        if ( isset( $request['stock_timer'] ) ) {
            $item['stock_timer'] = $request['stock_timer'];
        }

        return $item;
    }

    /**
     * Retrieves an array of endpoint arguments from the item schema for the controller.
     *
     * @since 1.0.0
     *
     *
     * @param string $method Optional. HTTP method of the request. The arguments for `CREATABLE` requests are
     *                       checked for required values and may fall back to a given default, this is not done
     *                       on `EDITABLE` requests. Default WP_REST_Server::CREATABLE.
     *
     * @return array Endpoint arguments.
     */
    public function get_endpoint_args_for_item_schema( $method = WP_REST_Server::CREATABLE, $key = 'create_item' ) {
        $args = BaseController::get_endpoint_args_for_item_schema( $method );

        if ( WP_REST_Server::EDITABLE === $method ) {
            $args = [
                'sale_timer' => [
                    'description' => __( 'Sale timer.', 'boostimer' ),
                    'type'        => 'object',
                    'items'       => [ 'type' => 'object' ],
                    'required'    => true,
                    'properties'  => [
                        'title'   => [
                            'description'       => __( 'Sale timer title.', 'boostimer' ),
                            'type'              => 'string',
                            'required'          => true,
                            'minLength'         => 1,
                            'sanitize_callback' => 'sanitize_text_field',
                            'validate_callback' => 'rest_validate_request_arg',
                        ],
                        'enabled' => [
                            'description'       => __( 'Is sale timer enabled..', 'boostimer' ),
                            'type'              => 'boolean',
                            'required'          => true,
                            'sanitize_callback' => 'sanitize_text_field',
                            'validate_callback' => 'rest_validate_request_arg',
                        ],
                    ],
                ],
                'stock_timer' => [
                    'description' => __( 'Stock timer.', 'boostimer' ),
                    'type'        => 'object',
                    'items'       => [ 'type' => 'object' ],
                    'required'    => true,
                    'properties'  => [
                        'title'   => [
                            'description'       => __( 'Stock timer title.', 'boostimer' ),
                            'type'              => 'string',
                            'required'          => true,
                            'minLength'         => 1,
                            'sanitize_callback' => 'sanitize_text_field',
                            'validate_callback' => 'rest_validate_request_arg',
                        ],
                        'enabled' => [
                            'description'       => __( 'Is stock timer enabled..', 'boostimer' ),
                            'type'              => 'boolean',
                            'required'          => true,
                            'sanitize_callback' => 'sanitize_text_field',
                            'validate_callback' => 'rest_validate_request_arg',
                        ],
                    ],
                ],
            ];
        }

        /**
         * Filters the method query arguments.
         *
         * @since 1.0.0
         *
         * @param array  $args   Query arguments.
         * @param string $method HTTP method of the request.
         */
        return apply_filters( "boostimer_rest_settings_{$key}_query_arguments", $args, $method );
    }
}
