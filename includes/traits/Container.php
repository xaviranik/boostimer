<?php

namespace Boostimer\Traits;

trait Container {

    /**
     * Contains chainable class instances
     *
     * @var array
     */
    protected $container = [];

    /**
     * Magic getter to get chainable container instance
     *
     * @since 1.0.0
     *
     * @param string $prop
     *
     * @return mixed
     */
    public function __get( $prop ) {
        if ( array_key_exists( $prop, $this->container ) ) {
            return $this->container[ $prop ];
        }
    }
}
