jQuery(function($) {

	var showText = function (target, message, index, interval) {
	  if (index < message.length) {
	    $(target).append(message[index++]);
	    setTimeout(function () { showText(target, message, index, interval); }, interval);
	  }
	}

	function toggleSections(contentType){
		if(contentType == "all") {
			$('.content-type:visible').fadeOut(800, 'easeInOutCubic', function(){
				$('.content-type').find('h1').find('span').remove();
				$('.content-type:nth-child(1)').removeClass('full').fadeIn(800, 'easeInOutCubic');
				$('.content-type:nth-child(2)').delay(200).removeClass('full').fadeIn(800, 'easeInOutCubic');
				$('.content-type:nth-child(3)').delay(400).removeClass('full').fadeIn(800, 'easeInOutCubic');
			});
		} else {
			$('.content-type:visible').fadeOut(800, 'easeInOutCubic', function(){
				$('.content-type').find('h1').find('span').remove();
				$('.content-type').removeClass('full');
				$('#' + contentType).find('h1').prepend('<span>ONLY </span>');
				$('#' + contentType).toggleClass('full').fadeIn(800, 'easeInOutCubic');
			});
		}
	}

	$(document).ready(function() {

    $('#gallery').click(function(){
      $('#gallery').fadeOut(800, 'easeInOutCubic', function(){
				$(this).find('.content').html('');
			});

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
      $('#gallery').delay(500).fadeIn(800, 'easeInOutCubic');
    });

		$('.sound').click(function(e){
			e.preventDefault();
			var link = $(this).find("a").attr('href');
			$('#gallery').find('.content').html('<iframe width="100%" height="450" scrolling="no" frameborder="no" src="' + link + '"></iframe>');
			$('#gallery').find('.caption').hide();
			$('#gallery').delay(500).fadeIn(800, 'easeInOutCubic');
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
					var commands =["darker", "lighter", "neutral", "about", "help", "more help", "void", "visuals", "sounds", "echoes", "all content", "see more", "see less"];
					// clear output first
					$('#output').html('');
					// process input
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
						showText("#output", "DATAG.HOST is a visual and musical project by Tommy Poirier-Morissette, bringing code, generative visuals and electronic music into public space and back on the web.", 0, 10);
					}
					else if(input == "help")
					{
						showText("#output", "You are on your own here, no documentation is yet accessible, feel free to explore this uncharted territory.", 0, 10);
					}
					else if(input == "more help")
					{
						showText("#output", "Okay, I lied, here are commands to get you started: 'about' 'help' 'darker' 'lighter' 'neutral' 'void' 'see more' 'see less' 'visuals' 'sounds' 'echoes' 'all content'", 0, 10);
					}
					else if(input == "void")
					{
						$('body').html('');
					}
					else if(input == "visuals")
					{
						toggleSections("visuals");
					}
					else if(input == "sounds")
					{
						toggleSections("sounds");
					}
					else if(input == "echoes")
					{
						toggleSections("echoes");
					}
					else if(input == "all content")
					{
						toggleSections("all");
					}
					else if(input == "see more")
					{
						$('#head').addClass('more-terminal');
						$('#content').addClass('more-terminal');
					}
					else if(input == "see less")
					{
						$('#head').removeClass('more-terminal');
						$('#content').removeClass('more-terminal');
					}
					else if(input == "batman")
					{
						showText("#output", "NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN", 0, 10);
					}
					else
					{
						showText("#output", "That's not a registered expression, try 'help' to get some insight.", 0, 10);
					}
		    }
		});

  });
});
