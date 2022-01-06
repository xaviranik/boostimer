<?php

namespace Boostimer\Abstracts;

/**
 * BaseManager abstract class.
 *
 * @since BOOSTIMER_SINCE
 */
abstract class BaseManager {

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
        }
    }
}
