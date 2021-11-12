<?php 
/**
 * Functions 
 */

/**
 * Theme enqueue scripts 
 * 
 */
function cfw_enqueue_scripts() {
  $parenthandle = 'chaplin-style';
  $theme = wp_get_theme(); 

  wp_enqueue_style('chaplinforwoo', get_stylesheet_directory_uri() . '/dist/css/main.chaplinforwoo.css', false, $theme->get('Version'));

  wp_enqueue_script('chaplinforwoo', get_stylesheet_directory_uri() . '/dist/main.chaplinforwoo.bundle.js', ['jquery'], $theme->get('Version'), true);

  wp_localize_script('chaplinforwoo', 'PHP_DATA', [
    'ajax_url' => admin_url('admin-ajax.php'),
    'lang' => [],
  ]);
}

add_action('wp_enqueue_scripts', 'cfw_enqueue_scripts');