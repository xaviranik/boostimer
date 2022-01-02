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
     * Determines if the prompt date can be rendered.
     *
     * @return bool
     */
    public function can_be_rendered() {
        global $product;

        if ( ! $product ) {
            return false;
        }

        $this->sale_date_to = $product->get_date_on_sale_to();

        if ( ! $product->is_on_sale() || empty( $this->sale_date_to ) ) {
            return false;
        }

        return true;
    }

    /**
     * Gets formatted prompt date.
     *
     * @return string
     */
    public function get_formatted_prompt_date() {
        $formatted_date = boostimer_current_datetime()
            ->setTimestamp( $this->sale_date_to->getTimestamp() )
            ->format( wc_date_format() );

        $prompt_sale_settings = Settings::get( 'prompt_sale_date' );

        return sprintf( '%s %s', $prompt_sale_settings['title'], $formatted_date );
    }
}
