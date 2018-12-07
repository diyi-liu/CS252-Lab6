'use strict';

$(function () {
    $('#login-form').submit(function (submitEvent) {
        $.post('php/Login.php', $(this).serialize(), function (data) {
            if (data === 'ok') {
                window.location.href = 'index.php';
            } else {
                alert('Wrong password');
            }
        });
        submitEvent.preventDefault();
    });
});