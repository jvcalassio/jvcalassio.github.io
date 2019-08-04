<?php

$nome = $_POST["input_name"];
$email = $_POST["input_email"];
$tel = $_POST["input_tel"];

if(isset($nome) && isset($email) $$ isset($tel)){
    $server = "localhost";
    $user = "root";
    $pwd = "";
    $db = "make_youp";

    $conn;

    try {
        $conn = new PDO("mysql:host=$server;dbname=$db",$user,$pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $ex){
        echo "falha";
    }

    $smt = $conn->prepare("INSERT INTO formularios (nome, email, telefone, horario) VALUES (:nome, :email, :telefone, current_timestamp())");
    $smt->bindParam(':nome', $nome);
    $smt->bindParam(':email', $email);
    $smt->bindParam(':telefone', $tel);

    $smt->execute();

    $conn = null;
}

?>