<?php

namespace Boostimer\Abstracts;

/**
 * Abstract Timer class
 *
 * @since 1.0.0
 */
abstract class Timer {

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
        add_action( 'woocommerce_before_add_to_cart_form', [ $this, 'build_timer' ] );
    }

    /**
     * Loads template and renders on product single page.
     *
     * @return void
     */
    abstract public function build_timer();

    /**
     * Renders template file
     *
     * @since 1.0.0
     *
     * @param $date_to
     * @param $date_from
     * @param $title
     *
     * @return void
     */
    public function render( $title, $date_to, $date_from = '' ) {
        wavly_get_template_part(
            'countdown-timer', '', [
                'date_to'   => $date_to,
                'date_from' => $date_from,
                'title'     => $title,
            ]
        );
    }
}
