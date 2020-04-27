function imprimirTabela(arrayPessoas) {
    document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML+'<table><thead><tr><th>NOME</th><th>DATA</th><th>DEPENDENTES</th><th>SALÁRIO BRUTO</th><th>INSS</th><th>IRPF</th><th>SALÁRIO FINAL</th></tr></thead><tbody id ="tabelaB"></tbody></table>'
    for (let index = 0; index < arrayPessoas.length; index++) {
        var salario = parseFloat(arrayPessoas[index].salario);

        

        var inss = 0;
        if (salario<=1045) 
            inss = salario*7.5/100; 
        else if (salario <= 2089.60) 
            inss = (1045*0.075) + ((salario-1045)*0.09);
        else if (salario <= 3134.40) 
            inss = (1045*0.075) + ((2089.60-1045)*0.09) + ((salario-2089.60)*0.12);
        else if (salario <= 6101.06)
            inss = (1045*0.075) + ((2089.60-1045)*0.09) + ((3134.40-2089.60)*0.12) + ((salario-3134.40)*0.14);
        else 
            inss = (1045*0.075) + ((2089.60-1045)*0.09) + ((3134.40-2089.60)*0.12) + ((6101.06-3134.40)*0.14);
        
        salarioL = salario-inss-(arrayPessoas[index].dependentes*189.59);

        var irpf = 0;
        if (salarioL<=1903.99 )
            irpf = 0;
        else if (salarioL<=2826.65)
            irpf = (salarioL*7.5/100)-142.80;
        else if (salarioL<=3751.05)
            irpf = (salarioL*15/100)-354.80;
        else if (salarioL<=4664.68)
            irpf = (salarioL*22.5/100)-636.13;
        else
            irpf = (salarioL*27.5/100)-869.36;

        var total = salario - inss - irpf;
 
        var linhaTab = "<tr><td>"+arrayPessoas[index].nome+"</td><td>"+arrayPessoas[index].data+"</td><td>"+arrayPessoas[index].dependentes+"</td><td>R$ "+salario+"</td><td>R$ "+inss.toFixed(2)+"</td><td>R$ "+irpf.toFixed(2)+"</td><td>R$ "+total.toFixed(2)+"</td></tr>";
        document.getElementById('tabelaB').innerHTML = document.getElementById('tabelaB').innerHTML + linhaTab;
    }
}

function pegarPessoas() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var pessoas = JSON.parse(this.responseText);
            console.log(pessoas)
            if (pessoas[0].nome!="") {
                imprimirTabela(pessoas);
                
            }
        }
    }
    xhttp.open("GET", "./php/tabelaPost.php", true);
    xhttp.send();
}


document.getElementById('nomeInput').pattern = "[A-Z][a-záàãâéèêíìóòÔõúùû]+( [A-Z][a-záàãâéèêíìóòÔõúùû]+)+";
pegarPessoas();  



