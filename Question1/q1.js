$("#message-box").on('input', function() {
    var scroll_height = $("#message-box").get(0).scrollHeight;

    $("#message-box").css('height', scroll_height + 'px');
});

$(function () {
    $('#login-form').submit(function (submitEvent) {
        $.post('assets/Login.php', $(this).serialize(), function (data) {
            if (data === 'ok') {
                window.location.href = 'index.php';
            } else {
                alert('Wrong password');
            }
        });
        submitEvent.preventDefault();
    });
});