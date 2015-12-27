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

	function secondsToTime(secs){
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
		if(minutes < 10) {
			if(seconds < 10) {
				return '0' + minutes + ":" + '0' + seconds;
			} else {
				return '0' + minutes + ":" + seconds;
			}
		} else {
			if(seconds < 10) {
				return minutes + ":" + '0' + seconds;
			} else {
				return minutes + ":" + seconds;
			}
		}

}

	$(document).ready(function() {

		if($('body').hasClass('sounds')) {
			// waves
			var wavesurfer = Object.create(WaveSurfer);
	    // Load audio from URL
			wavesurfer.init({
	        container: document.querySelector('#waveform'),
	        waveColor: '#606060',
	        progressColor: '#787A7A',
	        backend: 'MediaElement',
					barWidth: 3,
					cursorColor: '#ffffff',
					height: 160
	    });
	    // Load audio from URL
	    wavesurfer.load('http://dev.datag.host/datag.host/audio/orb-crs-3.mp3');

			// set duration
			wavesurfer.on('ready', function(){
				var raw_duration = wavesurfer.getDuration();
				var duration = secondsToTime(raw_duration);
				$('.time').find('.left').html(duration);
			});

			// update current time
			wavesurfer.on('audioprocess', function(){
				var elapsed = secondsToTime(wavesurfer.getCurrentTime());
				$('.time').find('.elapsed').html(elapsed);
			});

			// play pause
			$('#play-sound').click(function(e){
				e.preventDefault();
				$(this).find('i').toggleClass('fa-play');
				$(this).find('i').toggleClass('fa-pause');
				if(wavesurfer.isPlaying()){
					wavesurfer.pause();
				} else {
					wavesurfer.play();
				}
			});
		}

		// terminal

		$('#toggle-terminal').click(function(e) {
			e.preventDefault();
			$('#terminal').toggleClass('show');
			$('#toggle-terminal').toggleClass('active');
		});

		$('#close-terminal').click(function(e) {
			e.preventDefault();
			$('#terminal').toggleClass('show');
			$('#toggle-terminal').toggleClass('active');
		});

		$('#terminal').draggable();

		// rotator

		var $rotator = $("#back-visuals");
		var $navrotator = $("#dots");
		$rotator.find('img').each(function(){
			$navrotator.append('<a class="dot"><i class="fa fa-circle-o"></i></a>');
		});
		$rotator.find("img:gt(0)").hide();
		$navrotator.find("a.dot:eq(0)").addClass('selected');
		$navrotator.find("a.dot:eq(0)").html('<i class="fa fa-circle"></i>');

		$('a.dot').click(function(){
			var dotClicked = $('a.dot').index(this);
			console.log(dotClicked);
			changeSlide(dotClicked);
		});

		setTimeout(Rotate, 5000);

		function changeSlide(dotClicked){
			var index = dotClicked;
			var $otherImg = $rotator.find("img:visible");
			var $otherdots = $navrotator.find("a.dot:not(:eq(" + index + "))");
			var $actualImg = $rotator.find("img").eq(index);
			var $actualDot = $navrotator.find("a.dot").eq(index);
			if($actualImg !== $otherImg){
				$otherImg.fadeOut(500);
			}
			$otherdots.removeClass('selected');
			$otherdots.html('<i class="fa fa-circle-o"></i>');
			$actualImg.fadeIn(500);
			$actualDot.addClass('selected');
			$actualDot.html('<i class="fa fa-circle"></i>');
		}

		function Rotate() {
			var $current = $rotator.find("img:visible");
			var $currentdot = $navrotator.find("a.selected");
			var $next = $current.next();
			var $nextdot = $currentdot.next();
			if ($next.length === 0) $next = $rotator.find("img:eq(0)");
			if ($nextdot.length === 0) $nextdot = $navrotator.find("a.dot:eq(0)");
			$current.fadeOut(500);
			$currentdot.removeClass('selected');
			$currentdot.html('<i class="fa fa-circle-o"></i>');
			$next.fadeIn(500);
			$nextdot.addClass('selected');
			$nextdot.html('<i class="fa fa-circle"></i>');
			setTimeout(Rotate, 5000);
		}

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
						showText("#terminal-textarea", "DATAG.HOST is a visual and musical project by Tommy Poirier-Morissette, bringing code, generative visuals and electronic music into public space and back on the web.", 0, 10);
					}
					else if(input == "help")
					{
						showText("#terminal-textarea", "You are on your own here, no documentation is yet accessible, feel free to explore this uncharted territory.", 0, 10);
					}
					else if(input == "more help")
					{
						showText("#terminal-textarea", "Okay, I lied, here are commands to get you started: 'about' 'help' 'darker' 'lighter' 'neutral' 'void' 'see more' 'see less' 'visuals' 'sounds' 'echoes' 'all content'", 0, 10);
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
						showText("#terminal-textarea", "NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN", 0, 10);
					}
					else
					{
						showText("#terminal-textarea", "That's not a registered expression, try 'help' to get some insight.", 0, 10);
					}
		    }
		});

  });
});
