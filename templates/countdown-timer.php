<?php
/**
 * Sale count-down timer template
 *
 * @since 1.0.0
 *
 * @package WooAvailability
 */

$date_from = isset( $date_from ) ? $date_from : '';
$date_to   = isset( $date_to ) ? $date_to : '';
$title     = isset( $title ) ? $title : '';

wp_add_inline_script(
    'woo-availability-frontend-script',
    'let wavly_dates =' . wp_json_encode(
        [
            'date_from' => $date_from,
            'date_to'   => $date_to,
            'timezone'  => wavly_wp_timezone_string(),
        ]
    ),
    'before'
);
?>

<div id="wavly-countdown-timer">
    <p><?php echo esc_html( $title ); ?></p>
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
