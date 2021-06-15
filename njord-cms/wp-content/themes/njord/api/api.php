<?php
  add_action( 'rest_api_init', function () {
      set_time_limit(0);
      remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
      add_filter( 'rest_pre_serve_request', function( $value ) {
          header( 'Access-Control-Allow-Origin: *' );
          header( 'Access-Control-Allow-Methods: POST' );
          header( 'Access-Control-Allow-Credentials: true' );
          return $value;
      });

      // Custom End Point for REST API.
      register_rest_route( 'custom-ends', '/content-blocks-custom', array(
          'methods' => 'GET',
          'callback' => 'get_content_blocks_content',
      ) );
  });

  if (!function_exists('getallheaders')) {
      function getallheaders() {
      $headers = [];
      foreach ($_SERVER as $name => $value) {
          if (substr($name, 0, 5) == 'HTTP_') {
              $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
          }
      }
      return $headers;
      }
  }

  // Get ID by Slug
  function get_id_by_slug($page_slug) {
    $page = get_page_by_path($page_slug);
    if ($page) {
        return $page->ID;
    } else {
        return null;
    }
  } 

  function get_content_blocks_content() {
      $creds = array();
      $headers = getallheaders();

      //GET REQUEST HEADERS
      if ( array_key_exists( 'Authorization', $headers ) ) {
          $authorization = $headers['Authorization'];

          //IF REQUEST HEADERS DON'T USE BASIC AUTHENTICATION
          if (strpos($authorization, 'Basic') !== 0 && strpos($authorization, 'Basic') === false) {
              return new WP_Error( 'invalid-method', 'Forbidden.', array( 'status' => 403 ) );
          }

          //DECODE AUTHENTICATION INFO AND ASSIGN IT TO A USER OBJECT
          $auth = explode(":", base64_decode(str_replace("Basic ", "", $authorization)));
          $creds = array();
          $creds['user_login'] = $auth[0];
          $creds['user_password'] =  $auth[1];

          //VERIFY THE CREDENTIALS VS WP
          $user = wp_signon( $creds, false );

          //VALIDATE IF USER EXISTS IN WP
          // return $request->get_json_params();
          if ( is_wp_error($user) ) {
              return new WP_Error( 'invalid-method', 'Unauthorized.', array( 'status' => 401 ) );
          }else{
            // Här
            $page_id = get_id_by_slug($_GET['slug']);

            if (!empty($page_id)) {

              $wp_page_data = array (
                'titel' => get_the_title( $page_id ),
                'content' => get_the_content( $page_id ),
                'featured_image' => wp_get_attachment_image_src( get_post_thumbnail_id( $page_id )),
              );
              
              $response = json_encode($wp_page_data);

            } else {
              return new WP_Error( 'invalid-method', 'Unauthorized.', array( 'status' => 404 ) );
            }
          }

          //LOG CURRENT USER OUT
          wp_logout();
          return $response;
      }
      else {
          return new WP_Error( 'invalid-method', 'Unauthorized.', array( 'status' => 401 ) );
      }
  }
?>