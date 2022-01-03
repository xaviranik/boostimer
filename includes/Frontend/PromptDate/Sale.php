<?php

namespace Boostimer\Frontend\PromptDate;

use Boostimer\Admin\Settings;

/**
 * This class handles the sale prompt date.
 *
 * @since BOOSTIMER_SINCE
 */
class Sale extends PromptDate {

    /**
     * Sale prompt Constructor.
     */
    public function __construct() {
        parent::__construct();

        $this->key = 'prompt_sale_date';
    }

    /**
     * Determines if the prompt date can be rendered.
     *
     * @return void
     * @throws \Exception
     */
    public function can_be_rendered() {
        global $product;

        if ( ! $product ) {
            throw new \Exception( 'Product is not defined.' );
        }

        if ( ! $product->is_on_sale() || ! $product->is_in_stock() || empty( $product->get_date_on_sale_to() ) ) {
            throw new \Exception( 'Product is not not available for prompt.' );
        }
    }

    /**
     * Gets formatted prompt date.
     *
     * @return string
     * @throws \Exception
     */
    public function get_formatted_prompt_date() {
        global $product;

        $prompt_sale_settings = $this->get_prompt_date_settings();

        if ( empty( $product->get_date_on_sale_to() ) ) {
            throw new \Exception( 'Date to is empty.' );
        }

        $date_to = boostimer_current_datetime()->setTimestamp( $product->get_date_on_sale_to()->getTimestamp() );

        $formatted_date = $date_to->format( wc_date_format() );

        return $this->get_formatted_date_string( $prompt_sale_settings['title'], $formatted_date );
    }
}
