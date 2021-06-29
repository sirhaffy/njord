<?php

  /**
  * Hide admin bar
  */

  add_filter('show_admin_bar', '__return_false');

  /**
  * Echo Debug
  */

  function echo_debug($data){
    if(current_user_can('administrator')){
      echo '<pre>' . print_r($data,1) . '</pre>';
    }
  }

  /**
   * Featured image support
   */

  add_theme_support('post-thumbnails');

  /**
  * ACF
  */

  if( function_exists('acf_add_options_page') ) {
    acf_add_options_page();
    acf_add_options_sub_page('Företagsinfo');
    acf_add_options_sub_page('Innehåll för alla sidor');
  }

  if( function_exists('acf_set_options_page_title') )
  {
      acf_set_options_page_title( __('Extra fält') );
  }

  /**
  * SVG Upload
  */

  function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }
  add_filter('upload_mimes', 'cc_mime_types');


  /**
  * Menu
  */

  register_nav_menus( 
    array(
      'primary' => __( 'Primary Menu' )
    ) 
  );

  /**
  * API
  */
  // require('api/api.php');

  /**
  * Remove all CSS and stuff, to improve speed.
  */

  function remove_cssjs_ver( $src ) {
    if( strpos( $src, '?ver=' ) )
    $src = remove_query_arg( 'ver', $src );
    return $src;
    }

  function stop_heartbeat() {
  wp_deregister_script('heartbeat');
  }

  remove_action( 'wp_head', 'wlwmanifest_link' ) ;
  remove_action( 'wp_head', 'rsd_link' ) ;
  remove_action('wp_head', 'print_emoji_detection_script', 7);
  remove_action('wp_print_styles', 'print_emoji_styles');
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_action( 'wp_head', 'wp_generator' ) ;

  function deregister_qjuery() {
  if ( !is_admin() ) {
    wp_deregister_script('jquery');
    wp_deregister_style('dashicons');
  }
  }
  add_action('wp_enqueue_scripts', 'deregister_qjuery');

  function disable_embed(){
  wp_dequeue_script( 'wp-embed' );
  }
  add_action( 'wp_footer', 'disable_embed' );

  function disable_pingback( &$links ) {
    foreach ( $links as $l => $link )
    if ( 0 === strpos( $link, get_option( 'home' ) ) )
    unset($links[$l]);
  }
  add_action( 'pre_ping', 'disable_pingback' );
  add_filter('use_block_editor_for_post_type', '__return_false', 10);
  add_action( 'wp_enqueue_scripts', 'remove_block_css', 100 );

  function remove_block_css() {
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-block-style' );
  }
?>