<?php
    $pastaStr = "../dados/";
    $pasta = scandir($pastaStr);
    $contArq = count($pasta)-2;
    $modelo = array(
        'id' => $contArq,
        'data' => date('d/m/Y'),
        'nome' => $_POST['nome'],
        'salario' => $_POST['salario'],
        'dependentes' => $_POST['dependentes']
    );
    $clientInfo = fopen($pastaStr."idClient".$contArq.".json", "a");
    fwrite($clientInfo, json_encode($modelo));
    fclose($clientInfo);
    header('Location: ../');
?>