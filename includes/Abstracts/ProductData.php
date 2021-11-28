<?php

namespace Boostimer\Abstracts;

/**
 * ProductData abstract class
 *
 * @since BOOSTIMER_SINCE
 */
abstract class ProductData {

    /**
     * @var string
     */
    protected $key;

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
