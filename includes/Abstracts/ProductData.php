<?php

namespace Boostimer\Abstracts;

/**
 * ProductData abstract class
 *
 * @since BOOSTIMER_SINCE
 */
abstract class ProductData {

    /**
     * ProductData constructor.
     */
    public function __construct() {
        $this->set_hook_for_template_render();

        add_action( 'woocommerce_process_product_meta', [ $this, 'save_meta' ], 20, 1 );
    }

    /**
     * Set hooks.
     *
     * @since 1.0.0
     */
    abstract public function set_hook_for_template_render();

    /**
     * Renders template on product data tab.
     *
     * @return void
     */
    abstract public function render_template();

    /**
     * Saving product data meta.
     *
     * @param $post_id
     *
     * @return void
     */
    abstract public function save_meta( $post_id );
}
