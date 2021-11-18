<?php

namespace Boostimer\Abstracts;

/**
 * Abstract Timer class
 *
 * @since 1.0.0
 */
abstract class Timer {

    /**
     * @var string $title
     */
    protected $title;

    /**
     * @var string $default_title
     */
    protected $default_title;

    /**
     * @var string $date_from
     */
    protected $date_from;

    /**
     * @var string $date_to
     */
    protected $date_to;

    /**
     * Timer constructor.
     */
    public function __construct() {
        $this->set_hooks();
    }

    /**
     * Gets timer title.
     *
     * @return string
     */
    public function get_title() {
        return $this->title;
    }

    /**
     * Sets timer title.
     *
     * @param string $title
     */
    public function set_title( $title ) {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function get_default_title() {
        return $this->default_title;
    }

    /**
     * @param string $default_title
     */
    public function set_default_title( $default_title ) {
        $this->default_title = $default_title;
    }

    /**
     * Gets date from, in which the timer will display.
     *
     * @return string
     */
    public function get_date_from() {
        return $this->date_from;
    }

    /**
     * Sets date from, in which the timer will display.
     *
     * @param string $date_from
     */
    public function set_date_from( $date_from ) {
        $this->date_from = $date_from;
    }

    /**
     * Gets date to, in which the timer will display.
     *
     * @return string
     */
    public function get_date_to() {
        return $this->date_to;
    }

    /**
     * Sets date to, in which the timer will display.
     *
     * @param string $date_to
     */
    public function set_date_to( $date_to ) {
        $this->date_to = $date_to;
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
     * @return void
     */
    public function render() {
        boostimer_get_template_part(
            'countdown-timer', '', [
                'date_to'   => $this->date_to,
                'date_from' => $this->date_from,
                'title'     => $this->title,
            ]
        );
    }
}
