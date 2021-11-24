<?php
/**
 * Dependency notice
 *
 * @since 1.0.0
 *
 * @package boostimer
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * @var bool   $has_woocommerce
 * @var bool   $woocommerce_installed
 * @var string $plugin_file
 */
?>

<div id="boostimer-dependency-notice" class="error boostimer-dependency-notice" style="position: relative;">
    <a href="<?php echo wp_nonce_url( 'plugins.php?action=deactivate&amp;plugin=' . $plugin_file . '&amp;plugin_status=all&amp;paged=1&amp;s=', 'deactivate-plugin_' . $plugin_file ); ?>" class="notice-dismiss" style="text-decoration: none;" title="<?php _e( 'Dismiss this notice', 'dokan' ); ?>"></a>
    <div class="content">
        <div class="main">
            <h3><?php esc_html_e( 'Boostimer is inactive', 'boostimer' ); ?>   🥺</h3>
            <p>
                <?php
                $install_url = wp_nonce_url( add_query_arg( [
                    'action' => 'install-plugin',
                    'plugin' => 'woocommerce'
                ], admin_url( 'update.php' ) ), 'install-plugin_woocommerce' );

                // translators: 1$-2$: opening and closing <strong> tags, 3$-4$: link tags, takes to woocommerce plugin on wp.org, 5$-6$: opening and closing link tags, leads to plugins.php in admin
                $text = sprintf( esc_html__( '%1$sLooks like, WooCommerce is not installed.%2$s The %3$sWooCommerce plugin%4$s must be activated for Boostimer to rock. Please %5$sinstall WooCommerce &raquo;%6$s', 'boostimer' ), '<strong>', '</strong>', '<a href="https://wordpress.org/plugins/woocommerce/">', '</a>', '<a href="' . esc_url( $install_url ) . '">', '</a>' );

                if ( $woocommerce_installed ) {
                    $install_url = wp_nonce_url( add_query_arg( [
                        'action' => 'activate',
                        'plugin' => urlencode( 'woocommerce/woocommerce.php' )
                    ], admin_url( 'plugins.php' ) ), 'activate-plugin_woocommerce/woocommerce.php' );

                    // translators: 1$-2$: opening and closing <strong> tags, 3$-4$: link tags, takes to woocommerce plugin on wp.org, 5$-6$: opening and closing link tags, leads to plugins.php in admin
                    $text = sprintf( esc_html__( '%1$sLooks like, WooCommerce is deactivated.%2$s The %3$sWooCommerce plugin%4$s must be activated for Boostimer to rock. Please %5$sactivate WooCommerce%6$s', 'boostimer' ), '<strong>', '</strong>', '<a href="https://wordpress.org/plugins/woocommerce/">', '</a>', '<a href="' . esc_url( $install_url ) . '">', '</a>' );
                }
                echo $text;
                ?>
            </p>
        </div>
    </div>
</div>

<style>
    .boostimer-dependency-notice {
        border: transparent !important;
        padding: 8px 20px !important;
        border-radius: 8px;
    }

    .boostimer-dependency-notice .content {
        display: flex;
        align-items: center;
        border: 6px solid transparent;
        border-left-color: #EF4444 !important;
        border-radius: 6px;
        padding-left: 15px;
    }

    .boostimer-dependency-notice .content .main {
        padding-left: 10px;
    }
</style>
