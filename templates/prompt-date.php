<?php
/**
 * Dependency notice
 *
 * @since 1.0.0
 *
 * @package boostimer
 */

$prompt_date = isset( $prompt_date ) ? $prompt_date : '';
?>

<div class="boostimer-prompt-date-wrapper">
    <span><?php echo esc_html( $prompt_date ); ?></span>
</div>
