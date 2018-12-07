'use strict';

$(function () {
    $('#login_form').submit(function (submitEvent) {
        submitEvent.preventDefault();
        $.post('/php/Login.php', $(this).serialize(), function (data) {
            if (data === 'Passed') {
                window.location.href = '/MainPage/main.html';
            } else {
                alert('Wrong password');
            }
        });
    });
});