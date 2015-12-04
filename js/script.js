jQuery(function($) {
	$(document).ready(function() {

    $('#gallery').click(function(){
      $('#gallery').fadeOut(800)
      $('#gallery').delay(1000).find('.content').html('');
    });

    $('.img').click(function(){
      var link = $(this).find("img").attr('src');
      if($(this).find('.caption').length) {
        var caption = $(this).find('.caption').html();
      }
      $('#gallery').find('.content').html('<img src="' + link + '">');
      if(caption) {
        $('#gallery').find('.caption').html(caption).show();
      } else {
        $('#gallery').find('.caption').hide();
      }
      $('#gallery').delay(500).fadeIn(800);
    });

		$('.sound').click(function(e){
			e.preventDefault();
			var link = $(this).find("a").attr('href');
			$('#gallery').find('.content').html('<iframe width="100%" height="450" scrolling="no" frameborder="no" src="' + link + '"></iframe>');
			$('#gallery').find('.caption').hide();
			$('#gallery').delay(500).fadeIn(800);
		});

		$('#open-terminal').click(function(e){
			e.preventDefault();
			$('#head').toggleClass('terminal');
			$('#content').toggleClass('terminal');
			if($('#head').hasClass('terminal')) {
				$(this).html('close terminal');
			} else {
				$(this).html('open terminal');
				$('#terminal').find('textarea').val("");
			}
		});

		$('#terminal').find('textarea').keypress(function(e) {
		    if(e.which == 13) {
					var lines = $('#terminal').find('textarea').val().split('\n');
					var input = lines[lines.length-1];
					console.log(input);
					if(input == "darker") {
						$('#content').css('background', '#000000');
					} else if(input == "lighter") {
						$('#content').css('background', '#606060');
					} else if(input == "neutral") {
						$('#content').css('background', '#1C1F1F');
					}
		    }
		});

  });
});
