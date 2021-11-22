<?php

namespace Boostimer\Frontend;

use Boostimer\Traits\Container;

/**
 * Frontend manager class.
 *
 * @since 1.0.0
 */
class Manager {

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
