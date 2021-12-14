<?php

namespace Boostimer\Frontend;

use Boostimer\Abstracts\BaseManager;

/**
 * Frontend manager class.
 *
 * @since 1.0.0
 */
class Manager extends BaseManager {

    /**
     * Frontend manager constructor.
     * Handles frontend initializations.
     *
     * @since 1.0.0
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Loads classmap for the manager
     *
     * @return void
     */
    protected function load_classmap() {
        $this->classes = [
            'frontend_assets' => FrontendAssets::class,
            'saletimer'       => Timer\Sale::class,
            'stocktimer'      => Timer\Stock::class,
        ];
    }
}
