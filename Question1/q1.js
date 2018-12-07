'use strict';

$("#message-box").on('input', function() {
    var scroll_height = $("#message-box").get(0).scrollHeight;

    $("#message-box").css('height', scroll_height + 'px');
});

$(function () {
    $('#codearea').submit(function (submitEvent) {
        $.post('assets/Login.php', $(this).serialize(), function (data) {
            if (data === 'ok') {
                window.location.href = 'MainPage/main.html';
            } else {
                alert('Wrong password');
            }
        });
        submitEvent.preventDefault();
    });
});