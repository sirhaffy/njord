<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'njord' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'I&O$:nX8vnA.#Z,n!Z3{4Ymc~AdL?M(4C]2p Dcc!`C[Of9X^6n}b.i>s3T%Uwve' );
define( 'SECURE_AUTH_KEY',  'r1$arV[d,f_;,odS^*#.zngI?z#^2uqVM/;mJ}3xLfkT$/S6isIV5)]dnPs&am;I' );
define( 'LOGGED_IN_KEY',    'N}(t*v <d[0Se zy[jI5SA:czAFK%rV4{[mJTnmF!.~[0-UP?blBnm&7*<3>2*kQ' );
define( 'NONCE_KEY',        'e*:55RHZd8<0*d9i^*o.6MgaQqH0LxJTeEB1wM7Y+!m!%&/*w2H:^|.sIR5oOM8(' );
define( 'AUTH_SALT',        'z Iib/I>|q*XzD#<*tdiU9yd{|9TpCBQG3*vN9`2EhikPx_y6/i;>ck/]7O%%EmZ' );
define( 'SECURE_AUTH_SALT', '*p3J !yE9Ub`0@nXK>mc0Uw4|u8iGvQDdPD7.SYl|>L=`/?r~gil_k(#g6(tp*J1' );
define( 'LOGGED_IN_SALT',   'qRDLK$,C)b[[?ASq$aDZW(BWSc{V_aTk3e+VR@3I@j 3<{^4=Ip~rFkOBhy:z?+U' );
define( 'NONCE_SALT',       'IPm{=(ct)fCsqrNXfHBMIcBJnsy^^*:i(F87@0_vli-VXo[z#pK,k_,E !M[!Kr/' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
