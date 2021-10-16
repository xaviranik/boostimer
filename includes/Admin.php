<?php

namespace WooAvailability;

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
        new Menu();
        new ProductData();
    }
}
