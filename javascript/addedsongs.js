define(function(){
   
   return {
    addSong: function(songs) { 
       $.ajax({
         url: "https://torrid-heat-9915.firebaseio.com/songs.json",
         method: "POST",
         data: songs
      }).done(function(addSong) {
       console.log("addSong:", addSong);
      });
     }
   };
  
});

