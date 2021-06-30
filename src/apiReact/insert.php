<?php
include 'conexao.php';
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$name_user = $obj['name_user'];
$email_user = $obj['email_user'];
$username_user = $obj['username_user'];
$cpf_user= $obj['cpf_user'];
$password_user = $obj['password_user'];
if(mysqli_query
($link, "INSERT INTO users
 (name_user,username_user,email_user,password_user,cpf_user) VALUES 
 ('$name_user','$username_user','$email_user','$password_user','$cpf_user')")){
     echo json_encode('Inserido com sucesso');
 }else{
     echo json_encode('Não inserido');
 }
 mysqli_close($link);

?>