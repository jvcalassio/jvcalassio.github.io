<?php
if(isset($_POST["nomeInput"]) && isset( $_POST["emailInput"]) && isset($_POST["telInput"])){
    $nome = $_POST["nomeInput"];
    $email = $_POST["emailInput"];
    $tel = $_POST["telInput"];

    require("db_conn.php");

    try {
        $smt = $conn->prepare("INSERT INTO formularios (nome, email, telefone, horario) VALUES (:nome, :email, :telefone, NOW())");
        $smt->bindParam(':nome', $nome);
        $smt->bindParam(':email', $email);
        $smt->bindParam(':telefone', $tel);

        $smt->execute();

        $conn = null;
        echo "sucesso";
    } catch(PDOException $ex){
        echo "falha";
    }
}

?>