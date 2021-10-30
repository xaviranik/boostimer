<?php

namespace WooAvailability\Admin;

use WooAvailability\Admin\ProductData\Sale;
use WooAvailability\Admin\ProductData\Stock;

/**
 * WooCommerce product data meta box handler class.
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
