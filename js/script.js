/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// Place your code here.

$(window).load(function() {
   function update_header_position() {
      if ($('#admin-menu').length > 0) {
        $('#wrap').css('margin-top', ($('#admin-menu').height()));
      }
    }
   $( window ).resize(function() {
     update_header_position();
   });
   // Fixes an issue in flexslider and Chrome.
   $(window).trigger('resize');
});

})(jQuery, Drupal, this, this.document);