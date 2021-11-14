<?php

/**
 * Get template part implementation.
 *
 * @since 1.0.0
 *
 * @return void
 */
function wavly_get_template_part( $slug, $name = '', $args = [] ) {
    if ( $args && is_array( $args ) ) {
        extract( $args );
    }

    $template = '';

    /**
     * Change template directory path filter.
     *
     * @since 1.0.0
     */
    $template_path = apply_filters( 'wavbly_set_template_path', BOOSTIMER_DIR . '/templates', $template, $args );

    // Get default slug-name.php
    if ( $name && file_exists( $template_path . "/{$slug}-{$name}.php" ) ) {
        $template = $template_path . "/{$slug}-{$name}.php";
    }

    if ( ! $template && ! $name && file_exists( $template_path . "/{$slug}.php" ) ) {
        $template = $template_path . "/{$slug}.php";
    }

    /**
     * Allow third party plugin to filter template.
     *
     * @since 1.0.0
     */
    $template = apply_filters( 'wavbly_get_template_part', $template, $slug, $name );

    if ( $template ) {
        include $template;
    }
}

/**
 * Gets current date time with respect to current timezone.
 *
 * @since 1.0.0
 *
 * @return DateTimeImmutable
 */
function wavly_current_datetime() {
    if ( function_exists( 'current_datetime' ) ) {
        return current_datetime();
    }

    try {
        return new DateTimeImmutable( 'now', wavly_wp_timezone() );
    } catch ( Exception $e ) {}
}

/**
 * Function wp_timezone() compatibility for wp version < 5.3.
 *
 * @since 1.0.0
 *
 * @return DateTimeZone
 */
function wavly_wp_timezone() {
    if ( function_exists( 'wp_timezone' ) ) {
        return wp_timezone();
    }

    return new DateTimeZone( wavly_wp_timezone_string() );
}

/**
 * Function wp_timezone_string() compatibility for wp version < 5.3
 *
 * @since 1.0.0
 *
 * @return string
 */
function wavly_wp_timezone_string() {
    if ( function_exists( 'wp_timezone_string' ) ) {
        return wp_timezone_string();
    }

    $timezone_string = get_option( 'timezone_string' );

    if ( $timezone_string ) {
        return $timezone_string;
    }

    $offset  = (float) get_option( 'gmt_offset' );
    $hours   = (int) $offset;
    $minutes = ( $offset - $hours );

    $sign        = ( $offset < 0 ) ? '-' : '+';
    $abs_hour    = abs( $hours );
    $abs_minutes = abs( $minutes * 60 );

    return sprintf( '%s%02d:%02d', $sign, $abs_hour, $abs_minutes );
}

/**
 * Get a formatted date, time from WordPress format
 *
 * @param string|timestamp $date the date string or timestamp
 * @param string|bool $format date format string or false for default WordPress date
 *
 * @since 1.0.0
 *
 * @return string|false The date, translated if locale specifies it. False on invalid timestamp input.
 */
function wavly_format_datetime( $date = '', $format = false ) {
    // if date is empty, get current datetime timestamp
    if ( empty( $date ) ) {
        $date = wavly_current_datetime()->getTimestamp();
    }

    // if no format is specified, get default WordPress date format
    if ( ! $format ) {
        $format = wc_date_format() . ' ' . wc_time_format();
    }

    // if date is not timestamp, convert it to timestamp
    if ( ! is_numeric( $date ) && strtotime( $date ) ) {
        $date = wavly_current_datetime()->modify( $date )->getTimestamp();
    }

    if ( function_exists( 'wp_date' ) ) {
        return wp_date( $format, $date );
    }

    return date_i18n( $format, $date );
}
