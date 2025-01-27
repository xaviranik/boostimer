import {
    loginUser,
} from '@wordpress/e2e-test-utils';

import {
    scrollToBottom,
    isElementExists,
} from '../utils/helpers'

import { URLS } from '../utils/urls';

describe( 'Sale timer test cases', () => {
    it( 'should set sale timer', async () => {
        await page.goto( URLS.wp_login );
        await page.waitForSelector( '#user_login', { visible: true } );
        await loginUser();
        await page.setViewport({ width: 1366, height: 768});
        await page.waitForSelector( '#menu-posts-product', { visible: true } );
        await page.click( "#menu-posts-product" );
        await page.waitForSelector( '#wpbody-content > div.wrap > a:nth-child(2)', { visible: true } );
        await page.click( "#wpbody-content > div.wrap > a:nth-child(2)" );
        await page.waitForSelector( "#title", { visible: true } );
        await page.type( '#title', 'MacBook Pro' );
        await page.waitForSelector( '#_regular_price',{ visible: true }  )
        scrollToBottom();
        await page.type( '#_regular_price', '1200' );
        await page.type( '#_sale_price', '1000' );
        await page.waitForSelector( "p.form-field._sale_price_field > span > a", { visible: true } )
        await page.click( "p.form-field._sale_price_field > span > a" );
        await page.type( '#_sale_price_dates_from','2022-02-11');
        await page.type( '#_sale_price_dates_to', '2022-02-30' );
        await page.click( "#general_product_data > p > label" );
        await page.click( "#publish" );
        await page.waitForSelector( "#sample-permalink", { visible: true } );
        await page.click( "#sample-permalink > a" );
        await page.waitForSelector( '#boostimer-countdown-timer', { visible: true } );
        let exists = await isElementExists( "#boostimer-countdown-timer" );
        expect( exists ).toBe( true );

    });
});