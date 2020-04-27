<!DOCTYPE html>
<html>
    <head>
        <title>Calculadora INSS-IRPF</title>
        <link rel="stylesheet" href="./css/main.css">
        <meta name="author" content="Kayky Belleboni Casagrande">
        <meta name="description" content="Aplicativo para calcular descontos referentes a INSS e IRPF">
        <meta name="keywords" content="imposto, inss, irpf">
        <meta name="viewport" content="widht=device-widht,initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="icon" href="./img/logos/logo32.png" sizes="32x32">
    </head>

    <body>
        <header></header>
        <form action="./php/tabelaGet.php" method="post">
            <div id="index">
                <input type="text" name="nome" id ="nomeInput" placeholder = "NOME COMPLETO" required class ="inputA">
            </div>
            <div id="index">
                <input type="number" min="0.00" step="0.01" placeholder = "SALÁRIO" name="salario"required class ="inputA">
            </div>
            <div id="index">
                <input type="number" min="0" step="1" placeholder = "DEPENDENTES" name="dependentes"required class ="inputA">
            </div>        
            <input type="submit" name="ENVIAR" id="inputB">
        </form>
        
        <script src="./scripts/main.js"></script>
    </body>

</html>
