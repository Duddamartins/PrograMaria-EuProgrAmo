document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario (){
    if  (document.getElementById("nome").value != "" && 
        document.getElementById("email").value != ""){
    alert("Prontinho! :) você receberá as novidades por email.")
  }else{
    alert("Por Favor, preencha os campos de nome e email e tente novamente.")
  }
}