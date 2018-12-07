$(function () {
    $('#btn-submit').click(function () {
        $.post('/php/Execute.php', {
            program: $('#codearea').val(),
            question: question
        }, function (data) {
            if(data !== 'ok') {
                let json = $.parseJSON(data);
                let len = json.length;
                let text = '';
                for (let i = 0; i < len; i++) {
                    text += json[i] + "<br/>";
                }
                $('#output').html(text);
                // console.log(text);
            } else {
                $('#output').text('Passed!');
            }
        });
    });
});