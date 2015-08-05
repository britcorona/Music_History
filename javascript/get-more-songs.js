// define(function() {
//   var songs = [];

//   return {
//     querySongs: function() {

// 			$.ajax({
// 				url: "secondsongs.json",
// 				async: false
// 				}).done(function(data) {
// 					songs = data.songs;
// 			});

//     },
//     getSongs: function() {
//       return songs;
//     }
//   };
// });

//Trying to change to callback

define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "secondsongs.json"
      }).done(function(data){
        callback.call(this, data.songs);
      });
    }
  };
});

