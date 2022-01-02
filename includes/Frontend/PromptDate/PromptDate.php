<?php

namespace Boostimer\Frontend\PromptDate;

/**
 * Interface PromptDate
 *
 * @since BOOSTIMER_SINCE
 */
abstract class PromptDate {

    /**
     * @var \DateTimeImmutable
     */
    protected $sale_date_to;

    /**
     * The constructor.
     *
     * @since BOOSTIMER_SINCE
     */
    public function __construct() {
        add_action( 'woocommerce_after_shop_loop_item_title', [ $this, 'render' ] );
    }

    /**
     * Render the prompt date.
     *
     * @return void
     */
    public function render() {
        if ( ! $this->can_be_rendered() ) {
            return;
        }

        $prompt_date = $this->get_formatted_prompt_date();

        boostimer_get_template_part(
            'prompt-date',
            '',
            [
                'prompt_date' => $prompt_date,
            ]
        );
    }

    /**
     * Determine if the prompt date can be rendered.
     *
     * @return bool
     */
    abstract public function can_be_rendered();

    /**
     * Gets the formatted prompt date.
     *
     * @return string
     */
    abstract public function get_formatted_prompt_date();
}
