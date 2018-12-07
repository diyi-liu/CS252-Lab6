'use strict';

$("#message-box").on('input', function() {
    var scroll_height = $("#message-box").get(0).scrollHeight;

    $("#message-box").css('height', scroll_height + 'px');
});