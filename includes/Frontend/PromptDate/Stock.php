<?php

namespace Boostimer\Frontend\PromptDate;

/**
 * This class handles the stock prompt date.
 *
 * @since BOOSTIMER_SINCE
 */
class Stock extends PromptDate {

    /**
     * Stock prompt Constructor.
     */
    public function __construct() {
        parent::__construct();

        $this->key = 'prompt_stock_date';
    }

    /**
     * Determine if the prompt date can be rendered.
     *
     * @return void
     * @throws \Exception
     */
    public function can_be_rendered() {
        global $product;

        if ( ! $product ) {
            throw new \Exception( 'Product is not defined.' );
        }

        if ( $product->is_in_stock() ) {
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

        $prompt_stock_settings = $this->get_prompt_date_settings();

        $restock_date_timestamp = $product->get_meta( '_boostimer_restock_date', true );

        if ( empty( $restock_date_timestamp ) ) {
            throw new \Exception( 'Restock date is not defined.' );
        }

        $date_to = boostimer_current_datetime()->setTimestamp( $restock_date_timestamp );

        $formatted_date_to = $date_to->format( wc_date_format() );

        return $this->get_formatted_date_string( $prompt_stock_settings['title'], $formatted_date_to );
    }
}
