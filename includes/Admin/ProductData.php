<?php

namespace Boostimer\Admin;

use Boostimer\Admin\ProductData\Sale;
use Boostimer\Admin\ProductData\Stock;

/**
 * WooCommerce product data meta box handler class.
 *
 * @since 1.0.0
 */
class ProductData {

    /**
     * ProductData constructor.
     *
     * @since 1.0.0
     */
    public function __construct() {
        // Sale product data
        new Sale();

        // Stock product data
        new Stock();
    }
}
