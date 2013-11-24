

var socket = io.connect('/');

socket.on('connect', function() {
  console.log('Realtime connected', arguments);
});

socket.on('notification', function (message) {

  $('#realtime-notification').show().animate({width : '350px'});

  $('#realtime-notification pre').html(JSON.stringify(message, null, 4));

  setTimeout(function() {
    $('#realtime-notification').animate({width : '0px'}, function() {
      $(this).hide();
    });
  }, 4000);
});
