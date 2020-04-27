<?php
    $pastaStr = "../dados/";
    $pasta = scandir($pastaStr);
    $contArq = count($pasta)-2;
    $arrayP =array();
    $arrayP[0] = new stdClass();
    $arrayP[0]->nome = "";
    $arrayP[0]->salario = "";
    $arrayP[0]->data = ""; 

    if ($contArq!=0) {
        for ($i=0; $i < $contArq; $i++) { 
            $arquivoStr = json_decode(file_get_contents($pastaStr.'idClient'.$i.'.json'));
            $arrayP[$i] = new stdClass();
            $arrayP[$i]->nome = $arquivoStr->nome; 
            $arrayP[$i]->salario = $arquivoStr->salario; 
            $arrayP[$i]->data = $arquivoStr->data; 
            $arrayP[$i]->dependentes = $arquivoStr->dependentes; 
        }
    }
    echo json_encode($arrayP);
?>