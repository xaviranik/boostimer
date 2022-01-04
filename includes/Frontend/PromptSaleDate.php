<?php

namespace Boostimer\Frontend;

use Boostimer\Admin\Settings;

/**
 * Class ShortSaleDate.
 *
 * @since BOOSTIMER_SINCE
 */
class PromptSaleDate {

    /**
     * @var \DateTimeImmutable
     */
    private $sale_date_to;

    /**
     * @var \WC_Product
     */
    private $product;

    /**
     * ShortSaleDate constructor.
     */
    public function __construct() {
        add_action( 'woocommerce_after_shop_loop_item_title', [ $this, 'render_prompt_sale_date' ] );
    }

    /**
     * Renders the short sale date.
     *
     * @return void
     */
    public function render_prompt_sale_date() {
        if ( ! $this->can_be_rendered() ) {
            return;
        }

        $prompt_sale_date = $this->get_prompt_sale_date_string();

        boostimer_get_template_part(
            'short-sale-date',
            '',
            [
                'prompt_sale_date' => $prompt_sale_date,
            ]
        );
    }

    /**
     * Checks if the prompt sale date can be rendered.
     *
     * @return bool
     */
    private function can_be_rendered() {
        global $product;

        if ( ! $product ) {
            return false;
        }

        $this->product      = $product;
        $this->sale_date_to = $product->get_date_on_sale_to();

        if ( ! $this->product->is_on_sale() || empty( $this->sale_date_to ) ) {
            return false;
        }

        return true;
    }

    private function get_prompt_sale_date_string() {
        $formatted_date = boostimer_current_datetime()
            ->setTimestamp( $this->sale_date_to->getTimestamp() )
            ->format( wc_date_format() );

        $prompt_sale_settings = Settings::get( 'prompt_sale_date' );

        return sprintf('%s %s', $prompt_sale_settings['title'], $formatted_date);
    }
}
