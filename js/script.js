jQuery(function($) {
	$(document).ready(function() {

    $('#gallery').click(function(){
      $('#gallery').fadeOut(800)
      $('#gallery').delay(1000).find('.content').html('');
    });

    $('.img').click(function(){
      var type = $(this).attr('class');
      if(type == "img") {
        var link = $(this).find("img").attr('src');
      }
      $('#gallery').find('.content').html('<img src="' + link + '">');
      $('#gallery').delay(500).fadeIn(800);
    });

  });
});
