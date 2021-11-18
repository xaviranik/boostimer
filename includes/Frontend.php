<?php

namespace Boostimer;

use Boostimer\traits\Container;
use Boostimer\Frontend\SaleTimer;
use Boostimer\Frontend\StockTimer;
use Boostimer\Frontend\FrontendAssets;

/**
 * Frontend manager class.
 */
class Frontend {

    use Container;

    /**
     * Frontend manager constructor.
     * Handles frontend initializations.
     *
     * @since 1.0.0
     */
    public function __construct() {
        // Frontend assets
        $this->container['frontend_assets'] = new FrontendAssets();

        // Sale timer
        $this->container['saletimer'] = new SaleTimer();

        // Stock timer
        $this->container['stocktimer'] = new StockTimer();
    }
}
