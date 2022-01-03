<?php

namespace Boostimer\Frontend\PromptDate;

use Boostimer\Admin\Settings;

/**
 * Interface PromptDate
 *
 * @since BOOSTIMER_SINCE
 */
abstract class PromptDate {

    /**
     * @var string
     */
    protected $key;

    /**
     * The constructor.
     *
     * @since BOOSTIMER_SINCE
     */
    public function __construct() {
        add_action( 'woocommerce_after_shop_loop_item_title', [ $this, 'render' ] );
    }

    /**
     * Gets formatted prompt date.
     *
     * @return string
     * @throws \Exception
     */
    abstract public function get_formatted_prompt_date();

    /**
     * Determine if the prompt date can be rendered.
     *
     * @return bool
     */
    abstract public function can_be_rendered();

    /**
     * Render the prompt date.
     *
     * @return void
     */
    public function render() {
        try {
            $this->can_be_rendered();

            $prompt_date = $this->get_formatted_prompt_date();

            boostimer_get_template_part(
                'prompt-date',
                '',
                [
                    'prompt_date' => $prompt_date,
                ]
            );
        } catch ( \Exception $e ) {}
    }

    /**
     * Gets formatted date string.
     *
     * @param $title
     * @param $formatted_date
     *
     * @return string
     */
    public function get_formatted_date_string( $title, $formatted_date ) {
        return sprintf( '%s %s', $title, $formatted_date );
    }


    /**
     * Get the prompt date settings.
     *
     * @return array
     */
    protected function get_prompt_date_settings() {
        return Settings::get( $this->key );
    }
}
