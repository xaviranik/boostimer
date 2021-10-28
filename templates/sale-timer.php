<?php
/**
 * Sale count-down timer template
 *
 * @since 1.0.0
 *
 * @package WooAvailability
 */

$sale_date_from = isset( $sale_date_from ) ? $sale_date_from : '';
$sale_date_to   = isset( $sale_date_to ) ? $sale_date_to : '';

wp_add_inline_script(
    'woo-availability-frontend-script',
    'let wavly_sale_dates =' . wp_json_encode(
        [
            'sale_date_from' => $sale_date_from,
            'sale_date_to'   => $sale_date_to,
            'timezone'       => wavly_wp_timezone_string(),
        ]
    ),
    'before'
);
?>

<div id="wavly-sale-timer">
    <p><?php esc_html_e( 'Sale ends in:', 'woo-availability' ); ?></p>
    <div class="wavly-flip-timer">
        <div id="wavly-timer">
            <div class="number-list">
                <div class="item">
                    <span data-wavly-days="">--</span>
                    <span class="title"><?php esc_html_e( 'Days', 'woo-availability' ); ?></span>
                </div>
                <div class="item">
                    <span data-wavly-hours="">--</span>
                    <span class="title"><?php esc_html_e( 'Hours', 'woo-availability' ); ?></span>
                </div>
                <div class="item">
                    <span data-wavly-minutes="">--</span>
                    <span class="title"><?php esc_html_e( 'Minutes', 'woo-availability' ); ?></span>
                </div>
                <div class="item">
                    <span data-wavly-seconds="">--</span>
                    <span class="title"><?php esc_html_e( 'Seconds', 'woo-availability' ); ?></span>
                </div>
            </div>
        </div>
    </div>
</div>
