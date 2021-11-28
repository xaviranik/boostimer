<?php

namespace Boostimer\Abstracts;

/**
 * TimerData class
 *
 * @since BOOSTIMER_SINCE
 */
abstract class TimerData {

    /**
     * @var string $key
     */
    protected $key;

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
     * @var \WC_Product $product
     */
    protected $product;

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
     * Gets default title.
     *
     * @return string
     */
    public function get_default_title() {
        return $this->default_title;
    }

    /**
     * Sets default title.
     *
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
     * Gets the product.
     *
     * @return \WC_Product
     */
    public function get_product() {
        return $this->product;
    }

    /**
     * Sets the product.
     *
     * @param \WC_Product $product
     */
    public function set_product( $product ) {
        $this->product = $product;
    }

    /**
     * Gets timer key.
     *
     * @return string
     */
    public function get_key() {
        return $this->key;
    }

    /**
     * Sets timer key.
     *
     * @param string $key
     */
    public function set_key( $key ) {
        $this->key = $key;
    }
}
