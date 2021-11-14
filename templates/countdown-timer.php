<?php
/**
 * Sale count-down timer template
 *
 * @since 1.0.0
 *
 * @package Boostimer
 */

$date_from = isset( $date_from ) ? $date_from : '';
$date_to   = isset( $date_to ) ? $date_to : '';
$title     = isset( $title ) ? $title : '';

wp_add_inline_script(
    'boostimer-frontend-script',
    'let boostimer_dates =' . wp_json_encode(
        [
            'date_from' => $date_from,
            'date_to'   => $date_to,
            'timezone'  => boostimer_wp_timezone_string(),
        ]
    ),
    'before'
);
?>

<div id="boostimer-countdown-timer">
    <p><?php echo esc_html( $title ); ?></p>
    <div class="boostimer-flip-timer">
        <div id="boostimer-timer">
            <div class="number-list">
                <div class="item">
                    <span data-boostimer-days="">--</span>
                    <span class="title"><?php esc_html_e( 'Days', 'boostimer' ); ?></span>
                </div>
                <div class="item">
                    <span data-boostimer-hours="">--</span>
                    <span class="title"><?php esc_html_e( 'Hours', 'boostimer' ); ?></span>
                </div>
                <div class="item">
                    <span data-boostimer-minutes="">--</span>
                    <span class="title"><?php esc_html_e( 'Minutes', 'boostimer' ); ?></span>
                </div>
                <div class="item">
                    <span data-boostimer-seconds="">--</span>
                    <span class="title"><?php esc_html_e( 'Seconds', 'boostimer' ); ?></span>
                </div>
            </div>
        </div>
    </div>
</div>
