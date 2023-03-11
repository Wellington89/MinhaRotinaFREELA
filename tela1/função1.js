//Fórmula de calculo=dias da semana x horas por dia=resultado1 multiplica por 4
//Divide-se o total de horas por mês pelo valor que deseja ganhar.
//var mes = 5000;
 //var one= 8;
// var two= 5;
// var three= 4;
 //var resultado1 = (one * two * three) / mes;
 //console.log(resultado1 * 100 )/ 100;
  
 function calcularHorasTrabalhadas() {
    const horasDia = document.getElementById("horasDia").value;
    const diasSemana = document.getElementById("diasSemana").value;
    const horasMensais = horasDia * diasSemana * 4;
  
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "Você trabalha " + horasMensais + " horas por mês";
  }
  
  function calcularValorHora() {
    const salarioMensal = document.getElementById("salarioMensal").value;
    const horasMensais = document.getElementById("horasMensais").value;
    const valorHora = salarioMensal / horasMensais;
  
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "O valor da sua hora de trabalho é de R$" + valorHora.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }


  
  

 