<?php

/**
 * Get template part implementation
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
     * Change template directory path filter
     *
     * @since 2.5.3
     */
    $template_path = apply_filters( 'wavbly_set_template_path', WOO_AVAILABILITY_DIR . '/templates', $template, $args );

    // Get default slug-name.php
    if ( $name && file_exists( $template_path . "/{$slug}-{$name}.php" ) ) {
        $template = $template_path . "/{$slug}-{$name}.php";
    }

    if ( ! $template && ! $name && file_exists( $template_path . "/{$slug}.php" ) ) {
        $template = $template_path . "/{$slug}.php";
    }

    // Allow 3rd party plugin filter template file from their plugin
    $template = apply_filters( 'wavbly_get_template_part', $template, $slug, $name );

    if ( $template ) {
        include $template;
    }
}
