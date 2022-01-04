<?php

namespace Boostimer\Frontend\PromptDate;

use Boostimer\Abstracts\BaseManager;

/**
 * Class PromptDate Manager.
 *
 * @since BOOSTIMER_SINCE
 */
class Manager extends BaseManager {

    /**
     * Loads classmap.
     *
     * @return void
     */
    protected function load_classmap() {
        $this->classes = [
            'sale_prompt_date'  => Sale::class,
            'stock_prompt_date' => Stock::class,
        ];
    }
}
