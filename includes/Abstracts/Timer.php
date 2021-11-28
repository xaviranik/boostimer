<?php

namespace Boostimer\Abstracts;

use Boostimer\Admin\Settings;

/**
 * Abstract Timer class.
 *
 * @since 1.0.0
 */
abstract class Timer extends TimerData {

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
        add_action( 'woocommerce_before_add_to_cart_form', [ $this, 'build'] );
    }

    /**
     * Validates the timer for displaying on frontend.
     *
     * @return bool
     */
    abstract public function can_be_displayed();

    /**
     * Sets up the timer.
     *
     * @throws \Exception
     *
     * @return void
     */
    abstract public function setup();

    /**
     * Loads template and renders on product single page.
     *
     * @throws \Exception
     *
     * @return void
     */
    public function build() {
        if ( ! $this->is_timer_enabled_globally() ) {
            return;
        }

        $this->product = wc_get_product( get_the_ID() );

        if ( ! $this->valid_product() || ! $this->can_be_displayed() ) {
            return;
        }

        if ( ! $this->is_timer_enabled_for_product() ) {
            return;
        }

        try {
            $this->setup();
            $this->render();
        } catch ( \Exception $e ) {}
    }

    /**
     * Checks if the product is valid for timer type.
     *
     * @return bool
     */
    public function valid_product() {
        if ( ! $this->product || $this->product->is_type( 'grouped' ) ) {
            return false;
        }

        return true;
    }

    /**
     * Checks if timer is enabled globally.
     *
     * @return bool
     */
    public function is_timer_enabled_globally() {
        $settings = Settings::get( $this->key );

        return isset( $settings['enabled'] ) ? $settings['enabled'] : false;
    }

    /**
     * Check if timer is active for a product.
     *
     * @since 1.0.0
     *
     * @return bool
     */
    public function is_timer_enabled_for_product() {
        return 'yes' === $this->product->get_meta( "_boostimer_show_{$this->key}", true );
    }

    /**
     * Renders template file.
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
