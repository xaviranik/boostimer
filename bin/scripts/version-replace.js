const fs = require( 'fs-extra' );
const replace = require( 'replace-in-file' );

const pluginFiles = [
  'assets/**/*',
  'includes/**/*',
  'templates/**/*',
  'boostimer.php',
];

const { version } = JSON.parse( fs.readFileSync( 'package.json' ) );

replace( {
  files: pluginFiles,
  from: /BOOSTIMER_SINCE/g,
  to: version,
} );
