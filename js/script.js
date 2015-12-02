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
        if($(this).find('.caption').length) {
          var caption = $(this).find('.caption').html();
        }
      }
      $('#gallery').find('.content').html('<img src="' + link + '">');
      if(caption) {
        $('#gallery').find('.caption').html(caption).show();
      } else {
        $('#gallery').find('.caption').hide();
      }
      $('#gallery').delay(500).fadeIn(800);
    });

		$('.sound').click(function(){
			console.log('sound clicked');
		});

  });
});
