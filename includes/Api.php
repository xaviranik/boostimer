<?php

namespace Boostimer;

/**
 * API Manager Class.
 *
 * @since 1.0.0
 */
class Api {

    /**
     * All API classes.
     *
     * @var array
     */
    protected $classes;

    /**
     * Api Manager constructor.
     */
    public function __construct() {
        $this->classes = [
            Api\Settings::class,
        ];

        add_action( 'rest_api_init', [ $this, 'init_api' ] );
    }

    /**
     * Register APIs.
     *
     * @return void
     */
    public function init_api() {
        foreach ( $this->classes as $class ) {
            $object = new $class();
            $object->register_routes();
        }
    }
}
