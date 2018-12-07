'use strict';
$(function () {
    $.get('/php/GetScoreBoard.php', {}, function (data) {
        data = $.parseJSON(data);
        for (let i = 0; i < 3; i++) {
            let len = data[i].length;
            console.log(len);
            for (let j = 0; j < len; j++) {
                $('#container-' + (i + 1)).append('<div class="row"><div class="name">' + data[i][j]['username'] + '</div><div class="score">' + data[i][j]['time'] + ' ms</div></div>');
            }
        }
    });
});