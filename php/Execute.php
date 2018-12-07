<?php
//session_start();
//if (!isset($_SESSION['id'])) {
//    die('Unauthorized');
//}
//$_POST['program'] = 'print(\'Hello World!\')';
//$_POST['question'] = 1;
$filename = 'tmp' . time() . '.py';
$file = fopen($filename, 'w');
fwrite($file, $_POST['program']);
fclose($file);

$output = array();
$return_val = 0;
$start = microtime(true);
exec("python3 $filename > " . $filename . '.output 2>&1 < ../Question' . $_POST['question'] . '/input.txt');
$end = microtime(true);
unlink($filename);
exec('diff ../Question' . $_POST['question'] . '/expected_output.txt ' . $filename . '.output', $output, $return_val);
unlink($filename . '.output');
if ($return_val === 0) {
    $db = new mysqli('localhost', 'phpmyadmin', 'CS252', 'henry_code');
    $db->query('insert into score_board_' . $_POST['question'] . ' (`sid`, `uid`, `time`) values ( NULL, ' . $_SESSION['id'] . ', ' . ($end - $start) * 1000 . ')');
}
echo json_encode($output);
?>