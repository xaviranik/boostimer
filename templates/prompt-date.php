<?php
/**
 * Dependency notice
 *
 * @since 1.1.0
 *
 * @package boostimer
 */

$prompt_date = isset( $prompt_date ) ? $prompt_date : '';
?>

<div class="boostimer-prompt-date-wrapper">

    <?php
    /**
     * @since 1.1.0
     */
    do_action( 'boostimer_before_prompt_date_label' );
    ?>

    <span><?php echo esc_html( apply_filters( 'boostimer_prompt_date_label', $prompt_date ) ); ?></span>
</div>
