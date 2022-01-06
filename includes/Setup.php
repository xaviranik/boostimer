<?php

namespace Boostimer;

/**
 * Class Setup
 *
 * @package Boostimer
 *
 * @since 1.1.0
 */
class Setup {

    /**
     * Setup constructor.
     */
    public function __construct() {
        // Handles the activation hook
        new Activate();

        // Handles the deactivation hook
        new Deactivate();

        // Loads the plugin text domain for translation
        new TextDomain();

        // Initialize the plugin
        add_action( 'plugins_loaded', [ $this, 'init_plugin' ] );

        // Plugin row meta docs link
        add_filter( 'plugin_row_meta', [ $this, 'plugin_row_meta' ], 10, 2 );
    }

    /**
     * Initialize the plugin.
     *
     * @return void
     */
    public function init_plugin() {
        $checker = new \Boostimer\DependencyChecker();

        if ( ! $checker->has_woocommerce() ) {
            return;
        }

        $this->load_classes();
    }

    /**
     * Loads all the classes.
     *
     * @return void
     */
    protected function load_classes() {
        // Load admin manager
        if ( is_admin() ) {
            new Admin\Manager();
        }

        // Load frontend manager
        if ( ! is_admin() ) {
            new Frontend\Manager();
        }

        // Load API manager
        new Api\Manager();
    }

    /**
     * Show row meta on the plugin screen.
     *
     * @since 1.0.0
     *
     * @param array $links Plugin Row Meta.
     * @param mixed $file  Plugin Base file.
     *
     * @return array
     */
    public function plugin_row_meta( $links, $file ) {
        if ( BOOSTIMER_PLUGIN_BASENAME !== $file ) {
            return $links;
        }

        $row_meta = [
            'docs'    => '<a href="' . esc_url( apply_filters( 'boostimer_docs_url', 'https://boostimer.netlify.app/' ) ) . '" aria-label="' . esc_attr__( 'View Boostimer documentation', 'boostimer' ) . '">' . esc_html__( 'Docs', 'boostimer' ) . '</a>',
            'support' => '<a href="' . esc_url( apply_filters( 'boostimer_community_support_url', 'https://wordpress.org/support/plugin/boostimer/' ) ) . '" aria-label="' . esc_attr__( 'Visit Boostimer forums', 'boostimer' ) . '">' . esc_html__( 'Community support', 'boostimer' ) . '</a>',
        ];

        return array_merge( $links, $row_meta );
    }
}
