<?php

$server = "localhost";
$user_db = "root";
$pwd_db = "";
$db = "airphone-form";

$conn = new PDO("mysql:host=$server;dbname=$db",$user_db,$pwd_db);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>