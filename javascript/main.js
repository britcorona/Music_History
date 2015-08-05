// requirejs(
// 	["dom-access", "populate-songs", "get-more-songs"],
// 	function(access, populate, more){

// 		populate.querySongs();
// 		songs = populate.getSongs();
// 		for (var i = 0; i <songs.length; i++) {
// 		   var songName = songs[i].name;
// 		   var songArtist = songs[i].artist;
// 		   var songAlbum = songs[i].album;
// 		   var songsText = '<div class="song-name">' + "<h3>" + songName + '</h3>' + '<p>' + songArtist + " | " + songAlbum + "</p>" + '<button id="deleteButton">Delete</button>' + "</div>";
// 		   $("#more").before(songsText);
//  			}

		// access.getMoreButton().click(function(){
		// 	more.querySongs();
		// 	songs = more.getSongs();
		// 		for (var i = 0; i <songs.length; i++) {
		// 	   var songName = songs[i].name;
		// 	   var songArtist = songs[i].artist;
		// 	   var songAlbum = songs[i].album;
		// 	   var songsText = '<div class="song-name">' + "<h3>" + songName + '</h3>' + '<p>' + songArtist + " | " + songAlbum + "</p>" + '<button id="deleteButton">Delete</button>' + "</div>";
		// 	   $("#more").before(songsText);
	 // 		}
		// });
// 		$(document).on('click', '#deleteButton', function(){
// 			$(this).parent().remove();
// 		});
// });

//Trying to change to callback
requirejs(
		["dom-access", "populate-songs", "get-more-songs"],
		function(access, populate, more) {

			var displaySongs = function(data) {
				for (var i = 0; i < data.length; i++) {
				   var songName = data[i].name;
				   var songArtist = data[i].artist;
				   var songAlbum = data[i].album;
				   var songsText = '<div class="song-name">' + "<h3>" + songName + '</h3>' + '<p>' + songArtist + " | " + songAlbum + "</p>" + '<button id="deleteButton">Delete</button>' + "</div>";
				   $("#more").before(songsText);
		 			}
			}

		populate.querySongs(displaySongs);

		access.getMoreButton().click(function(){

		more.querySongs(displaySongs);

	});

		$(document).on('click', '#deleteButton', function(){
			$(this).parent().remove();
		});
});



