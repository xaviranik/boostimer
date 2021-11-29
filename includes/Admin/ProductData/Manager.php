<?php

namespace Boostimer\Admin\ProductData;

use Boostimer\Abstracts\BaseManager;

/**
 * WooCommerce product data meta box handler class.
 *
 * @since 1.0.0
 */
class Manager extends BaseManager {

    /**
     * Manager constructor.
     *
     * @since 1.0.0
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Loads classmap for product data
     *
     * @return void
     */
    protected function load_classmap() {
        $this->classes = [
            'sale_product_data'  => Sale::class,
            'stock_product_data' => Stock::class,
        ];
    }
}
