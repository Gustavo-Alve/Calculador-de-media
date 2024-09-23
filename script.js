function send() {
    let name = document.getElementById("name");
    let outputName = document.getElementById("output-name");
    outputName.innerHTML = name.value;

    // pegar os valores dos inputs e calcular a media

   let nota1 = document.getElementById ("nota1");
   let nota2 = document.getElementById ("nota2");
   let nota3 = document.getElementById ("nota3");
   let nota4 = document.getElementById ("nota4");

   let media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value))/4;
   let outputNota = document.getElementById("output-nota");
   outputNota.innerHTML = media.toFixed(2);

   if(media <6){
    let outputAprovacao = document.getElementById("output-aprovado");
    outputAprovacao.innerHTML = "Voce foi Reprovado";
   } else {
    let outputAprovacao = document.getElementById("output-aprovado");
    outputAprovacao.innerHTML = "Voce foi aprovado!!!";
   }
}