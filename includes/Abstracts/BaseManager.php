<?php

namespace Boostimer\Abstracts;

use Boostimer\Traits\Container;

/**
 * BaseManager abstract class.
 *
 * @since BOOSTIMER_SINCE
 */
abstract class BaseManager {

    use Container;

    /**
     * @var array
     */
    protected $classes = [];

    public function __construct() {
        $this->load_classmap();
        $this->register_classes();
    }

    /**
     * Loads classmap for the manager
     *
     * @return void
     */
    abstract protected function load_classmap();

    /**
     * Registers classes and puts in the container.
     *
     * @return void
     */
    private function register_classes() {
        foreach ( $this->classes as $key => $class ) {
            $object = new $class();

            $this->container[ $key ] = $object;
        }
    }
}
