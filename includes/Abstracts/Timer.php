<?php

namespace WooAvailability\Abstracts;

/**
 * Abstract Timer class
 *
 * @since 1.0.0
 */
abstract class Timer {

    /**
     * @var string
     */
    protected $title;

    /**
     * Timer constructor.
     */
    public function __construct() {
        $this->set_hooks();
    }

    /**
     * Set hooks.
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function set_hooks() {
        add_action( 'woocommerce_before_add_to_cart_form', [ $this, 'render_timer_template' ] );
    }

    /**
     * Loads template and renders on product single page.
     *
     * @return void
     */
    abstract public function render_timer_template();
}
