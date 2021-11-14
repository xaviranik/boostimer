<?php

namespace Boostimer;

use Boostimer\Frontend\FrontendAssets;
use Boostimer\Frontend\SaleTimer;
use Boostimer\Frontend\StockTimer;

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
