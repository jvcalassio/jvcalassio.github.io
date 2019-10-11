<?php

use PhpOffice\PhpSpreadsheet\Helper\Sample;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

require_once __DIR__ . '/../vendor/phpoffice/phpspreadsheet/src/Bootstrap.php';

require("../assets/db/db_conn.php");

$false_pwd = false;
$error_pg = false;

if(isset($_POST["input_name"]) && isset($_POST["input_pwd"])){
    $user = $_POST["input_name"];
    $pwd = $_POST["input_pwd"];
    $right_user = "spartasn";
    $right_pwd = "@NovoRico8";

    if(($right_user == $user) && ($right_pwd == $pwd)){
        try {
            $spreadsheet = new Spreadsheet();

            $spreadsheet->getProperties()->setCreator('AirPhone Brasil')
                        ->setLastModifiedBy('AirPhone Brasil')
                        ->setTitle('Cadastros no site')
                        ->setSubject('')
                        ->setDescription('Cadastros realizados para acesso ao site')
                        ->setKeywords('')
                        ->setCategory('');
            
            $smt = $conn->query("SELECT * FROM formularios");
            $result = $smt->fetchAll();
            $i = 1;
            foreach($result as $row){
                $spreadsheet->setActiveSheetIndex(0)
                            ->setCellValue('A'.$i, $row["nome"])
                            ->setCellValue('B'.$i, $row["email"])
                            ->setCellValue('C'.$i, $row["telefone"])
                            ->setCellValue('D'.$i, $row["horario"]);
                $i++;
            }

            header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            header('Content-Disposition: attachment;filename="cadastros.xlsx"');
            header('Cache-Control: max-age=0');
            header('Cache-Control: max-age=1'); // ie9
            // ie SSL
            header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
            header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
            header('Cache-Control: cache, must-revalidate'); // HTTP/1.1
            header('Pragma: public'); // HTTP/1.0

            $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
            $writer->save('php://output');
            exit;
        } catch(Exception $e){
            $error_pg = true;
        }
    } else {
        $false_pwd = true;
    }
}
?>
<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/css/styles.css" type="text/css" charset="utf-8" />
    <!---<link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,900&display=swap" rel="stylesheet">-->
    <link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900&display=swap" rel="stylesheet">

    <title>Administração</title>
    <style>
      html,body{
        height:100%;
      }
      body {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;  
      }
      .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
      }
      .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
      }
      .form-signin .form-control:focus {
        z-index: 2;
      }
      .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
      .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      .erro-pwd {
          position:absolute;
          margin:auto;
          left:0;
          right:0;
          top:20%;
          max-width:300px;
      }
    </style>
    <link rel="shortcut icon" type="image/x-icon" href="../assets/img/airphone_logo_sq.ico" />
  </head>
  <body class="text-center">
      <div class="d-flex justify-content-center">
        <?php
            if($false_pwd == true){
                echo '<div class="alert erro-pwd alert-danger" role="alert">';
                echo 'Senha incorreta.';
                echo '</div>';
            }
            if($error_pg == true){
                echo '<div class="alert erro-pwd alert-danger" role="alert">';
                echo 'Erro.';
                echo '</div>';
            }
        ?>
    </div>
    <form class="form-signin" method="post" action="#">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <input type="text" id="input_name" class="form-control" placeholder="Usuário" required autofocus name="input_name">
      <input type="password" id="input_pwd" class="form-control" placeholder="Senha" required name="input_pwd">
      <button class="btn btn-dark btn-lg btn-block" type="submit">Entrar</button>
    </form>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="../assets/js/jquery.min.js"></script>
    <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>