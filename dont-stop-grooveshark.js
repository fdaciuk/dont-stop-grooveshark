;(function( doc ) {
    'use strict';

    console.log( "Don't stop Grooveshark! ;)" );
    var $resumePlaybackButton;

    window.setInterval(function() {
        var $resumePlaybackButton = doc.querySelector( '[data-translate-text="LB_INTERACTION_TIME_RESUME"]' );
        if( ! $resumePlaybackButton ) {
            return;
        }

        $resumePlaybackButton.click();
    }, 3000);

})( document );