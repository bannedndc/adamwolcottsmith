if($(document).ready()) {
  // handle section opening and closing
  $('[id^=glitch-]').click(function() {
    var id = this.id.split('-')[1];
    $('#section-'+id).css('visibility', 'visible');
    $('#overlay').show();
    $('#close-'+id).click(function() {
      $('#section-'+id).css('visibility', 'hidden');
    });
  });

  $('#overlay').click(function() {
    $('[id^=section-]').css('visibility', 'hidden');
  });
}
