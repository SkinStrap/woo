// Install:
// npm install --save woocommerce-api

// Setup:
var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: 'http://swepps.com/sohp/woo/', // Your store URL
  consumerKey: 'ck_66f4bc4c2ea1575b50db9a66c327bdae6f4ebc94', // Your consumer key
  consumerSecret: 'cs_df6457faadaeb9e39a0477b66d52210adac9f39b', // Your consumer secret
  version: 'v3' // WooCommerce API version
});