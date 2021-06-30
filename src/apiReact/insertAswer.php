<?php
include 'conexao.php';
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$email = ['email_question'];
$question = ['question'];
if(mysqli_query
($link, "INSERT INTO questions
 (email_question,question) VALUES 
 ('$email','$question')")){
     echo json_encode('Inserido com sucesso');
 }else{
     echo json_encode('Não inserido');
 }
 mysqli_close($link);
?>