requirejs.config({
  baseUrl: './javascript',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'lodash': '../bower_components/lodash/lodash.min',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
    	exports: 'Firebase'
    }
  }
});

requirejs(
		["jquery", "hbs", "firebase", "lodash", "bootstrap", "dom-access", "populate-songs", "addedsongs"],
		function($, Handlebars, _firebase, _lodash, bootstrap, access, populate, addSong) {

		// populate.querySongs(function(data) {
		// });

		var myFirebaseRef = new Firebase("https://torrid-heat-9915.firebaseio.com/");
			myFirebaseRef.child("songs").on("value", function(snapshot) {
				var songObjectFromFirebase = snapshot.val();
  			console.log( snapshot.val() );

	  		var songObjectForTemplates = {
	     		songs: songObjectFromFirebase
	   		};
	   		console.log("songObjectForTemplates",songObjectForTemplates);

	   		require(['hbs!../templates/songs', 'hbs!../templates/artist', 'hbs!../templates/album'], function(songTemplate, artistTemplate, albumTemplate){
					$("#box2").before(songTemplate(songObjectForTemplates));
					$("#artistDropDown").append(artistTemplate(songObjectForTemplates));
					$("#albumDropDown").append(albumTemplate(songObjectForTemplates));
				});

			});


		$("#submitSong").click(function(){

   			var newSong = {
		     "name": $("#name").val(),
		     "artist": $("#artist").val(),
		     "album": $("#album").val()
		   	};
		   		newSong = JSON.stringify(newSong);
		   		addSong.addSong(newSong);
		 	})

		$('#filter').click(function(){
			var newArtist = $("#artistDropDown").val();
			console.log(newArtist);
			$(".filterArtist").hide();
			$("[artist='"+newArtist+"']").show();

			var newAlbum = $("#albumDropDown").val();
			$("[artist='"+newAlbum+"']").show();
			console.log(newAlbum);
		});
	
		$(document).on('click', '#deleteButton', function(){
			$(this).parent().remove();
		});
});



