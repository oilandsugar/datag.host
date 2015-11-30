jQuery(function($) {

  function open(id){
    console.log(id);
  }

  function open_old(id){
    var element = $('#' + id);
    var type = element.attr('class');
    if(type == "img") {
      var link = element.find("img").attr('src');
    }
    $('#gallery').find('.content').html('<img src="' + link + '">');
    $('#gallery').delay(500).fadeIn(800);
  }

	$(document).ready(function() {

    $('#gallery').click(function(){
      $('#gallery').fadeOut(800).find('.content').html('');
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
