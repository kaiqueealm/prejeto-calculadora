function insert (num){
  var numero = document.getElementById('resultado').innerHTML;  //para clicar no botao
  document.getElementById('resultado').innerHTML = numero + num;
 }
 function clean (){
     document.getElementById('resultado').innerHTML = "" ;//para apagar
 }
 function back(){
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) 
   // vai pegar todos os caracteres e ele vai diminuir um lengt comnando para ver todos os numero
 }
 function calcular(){
   var resultado = document.getElementById('resultado').innerHTML;
   if(resultado){
     document.getElementById('resultado').innerHTML = eval(resultado); 
     // eval pra calcular
   }
   else{
     document.getElementById('resultado').innerHTML = "nada para calcular"
   }
   
 }