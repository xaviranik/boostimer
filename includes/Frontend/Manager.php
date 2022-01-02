<?php

namespace Boostimer\Frontend;

use Boostimer\Abstracts\BaseManager;

/**
 * Frontend manager class.
 *
 * @since 1.0.0
 *
 * @since BOOSTIMER_SINCE classmap loader.
 */
class Manager extends BaseManager {

    /**
     * Loads classmap for the manager.
     *
     * @return void
     */
    protected function load_classmap() {
        $this->classes = [
            'frontend_assets' => FrontendAssets::class,
            'saletimer'       => Timer\Sale::class,
            'stocktimer'      => Timer\Stock::class,
            'prompt_date'     => PromptDate\Manager::class,
        ];
    }
}
