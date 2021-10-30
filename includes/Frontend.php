<?php

namespace WooAvailability;

use WooAvailability\Frontend\FrontendAssets;
use WooAvailability\Frontend\SaleTimer;
use WooAvailability\Frontend\StockTimer;

/**
 * Frontend manager class.
 */
class Frontend {

    /**
     * Frontend manager constructor.
     * Handles frontend initializations.
     *
     * @since 1.0.0
     */
    public function __construct() {
        // Frontend assets
        new FrontendAssets();

        // Sale timer
        new SaleTimer();

        // Stock timer
        new StockTimer();
    }
}
