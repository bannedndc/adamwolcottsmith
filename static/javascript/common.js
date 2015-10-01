if($(document).ready()) {
  $('[id^=glitch-]').click(function() {
    var id = this.id.split('-')[1];
    $('#section-'+id).show();
    $('#overlay').show();
    $('#close-'+id).click(function() {
      $('#section-'+id).hide();
    });
  });

  // $('[id^=glitch-]').click(function(event) {
  //   debugger;
  //   var id = this.id.split('-')[1];
  //   var section = $('#section-'+id);
  //   var glitchUrl = section.data('url') 
  //   $.ajax({
  //     type: 'GET',
  //     url: glitchUrl,
  //     success: function(data) {
  //       bootbox.dialog({
  //         message: data,
  //         closeButton: true
  //       });
  //     }
  // });


  // $('[id^=glitch-]').click(function() {
  //   debugger;
  //   bootbox.alert("Hello world!", function() {
  //     console.log("Alert Callback");
  //   });
  // });


}
