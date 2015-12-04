jQuery(function($) {

	var showText = function (target, message, index, interval) {
	  if (index < message.length) {
	    $(target).append(message[index++]);
	    setTimeout(function () { showText(target, message, index, interval); }, interval);
	  }
	}

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
					if(input == "darker")
					{
						$('#content').css('background', '#000000');
					}
					else if(input == "lighter")
					{
						$('#content').css('background', '#606060');
					}
					else if(input == "neutral")
					{
						$('#content').css('background', '#1C1F1F');
					}
					else if(input == "about")
					{
						$('#output').html('');
						showText("#output", "DATAG.HOST is a visual and musical project by Tommy Poirier-Morissette, bringing code, generative visuals and electronic music into public space and back on the web.", 0, 10);
					}
					else if(input == "help")
					{
						$('#output').html('');
						showText("#output", "You are on your own here, no documentation is yet accessible, feel free to explore this uncharted territory.", 0, 10);
					}
					else if(input == "more help")
					{
						$('#output').html('');
						showText("#output", "Okay, I lied, here is commands to get you started: 'about' 'help' 'darker' 'lighter' 'neutral' 'void'", 0, 10);
					}
					else if(input == "void")
					{
						$('body').html('');
					}
					else if(input == "batman")
					{
						$('#output').html('');
						showText("#output", "NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN", 0, 10);
					}
					else
					{
						$('#output').html('');
						showText("#output", "That's not a registered expression, try 'help' to get some insight.", 0, 10);
					}
		    }
		});

  });
});
