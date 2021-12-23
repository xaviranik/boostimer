<?php
/**
 * Dependency notice
 *
 * @since 1.0.0
 *
 * @package boostimer
 */

$prompt_sale_date = isset( $prompt_sale_date ) ? $prompt_sale_date : '';
?>

<div class="boostimer-prompt-sale-date-wrapper">
    <span><?php echo esc_html( $prompt_sale_date ); ?></span>
</div>
