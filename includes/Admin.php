<?php

namespace WooAvailability;

use WooAvailability\Admin\Assets;
use WooAvailability\Admin\Menu;
use WooAvailability\Admin\ProductData;

/**
 * Admin Manager Class.
 */
class Admin {

    /**
     * Admin manager constructor.
     * Handles admin initializations.
     *
     * @since 1.0.0
     */
    public function __construct() {
        // Asset Loader
        new Assets();
        // Admin menu manager
        new Menu();
        // Product data manager
        new ProductData();
    }
}
