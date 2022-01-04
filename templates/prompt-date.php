<?php
/**
 * Dependency notice
 *
 * @since BOOSTIMER_SINCE
 *
 * @package boostimer
 */

$prompt_date = isset( $prompt_date ) ? $prompt_date : '';
?>

<div class="boostimer-prompt-date-wrapper">

    <?php
    /**
     * @since BOOSTIMER_SINCE
     */
    do_action( 'boostimer_before_prompt_date_label' );
    ?>

    <span><?php echo esc_html( apply_filters( 'boostimer_prompt_date_label', $prompt_date ) ); ?></span>
</div>
