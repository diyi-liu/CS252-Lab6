<?php
$db = new mysqli('localhost', 'phpmyadmin', 'CS252', 'henry_code');
$result_arr_big = Array();
for ($j = 1; $j <= 3; $j++) {
    $result = $db->query('select username, time from score_board_' . $j . ' join users where score_board_1.uid = users.uid order by time limit 5');
    $num_rows = $result->num_rows;
    $result_arr = Array();
    for ($i = 0; $i < $num_rows; $i++) {
        $result_arr[$i] = $result->fetch_assoc();
    }
    $result_arr_big[$j - 1] = $result_arr;
}
$db->close();
echo json_encode($result_arr_big);
?>