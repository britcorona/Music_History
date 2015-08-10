define(function() {
  return {
    querySongs: function(fevvfeveffe) {
      $.ajax({
        url: "https://torrid-heat-9915.firebaseio.com/.json"
      }).done(function(data){
        fevvfeveffe.call(this, data);
      });
			}
  }
		
});
