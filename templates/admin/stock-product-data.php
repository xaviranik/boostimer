<?php
/**
 * Stock product data template
 *
 * @since 1.0.0
 *
 * @package WooAvailability
 */

$show_stock_timer = isset( $show_stock_timer ) ? $show_stock_timer : '';
$restock_date     = isset( $restock_date ) ? $restock_date : '';
?>


<div id="wavly-stock-product-data">
    <?php
    woocommerce_wp_checkbox(
        [
            'id'            => '_woo_availability_show_stock_timer',
            'label'         => __( 'Show restock timer?', 'woo-availability' ),
            'wrapper_class' => 'hide_if_grouped show_if_variable show_if_simple',
            'desc_tip'      => false,
            'description'   => __( 'Show restock countdown timer', 'woo-availability' ),
            'value'         => $show_stock_timer,
        ]
    );

    woocommerce_wp_text_input(
        [
            'id'            => '_woo_availability_restock_date',
            'label'         => __( 'Restock date', 'woo-availability' ),
            'wrapper_class' => 'hide_if_grouped show_if_variable show_if_simple short',
            'class'         => 'stock_timer',
            'desc_tip'      => true,
            'description'   => __( 'Sets probable restock date', 'woo-availability' ),
            'value'         => $restock_date,
        ]
    );
    ?>
</div>
