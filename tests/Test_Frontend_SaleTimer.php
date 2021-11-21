<?php

use Boostimer\Frontend\SaleTimer;

/**
 * Test class for Frontend_SaleTimer.
 */
class Test_Frontend_SaleTimer extends WP_UnitTestCase {

    /**
     * A single example test.
     */
    public function test_setup_hook() {
        $sale_timer = new SaleTimer();

        $is_hooked = 10 === has_action('woocommerce_before_add_to_cart_form', [ $sale_timer, 'build' ] );

        $this->assertTrue( $is_hooked );
    }
}
