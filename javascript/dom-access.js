define(["jquery"], function($) {
  var $outputEl = $("#box2");

  // var $submitSongButton = $('#submitSong');

  return {
    getOutputElement: function() {
      return $outputEl;
    }
    // getsubmitSongButton: function() {
    // 	return $submitSongButton;
    // }
  };
});