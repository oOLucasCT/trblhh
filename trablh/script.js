function verificar(){
  let  usuario = [
{login:"Ana",   senha: "123"},
{login: "Bruna", senha: "456"},
{login: "Carol", senha: "789"}  
];

//puxando os dados do html e definindo nos scrypt
  let input = document.getElementById("login").value;
  let input2 = document.getElementById("senha").value;
  const frase = document.getElementById("frase");
  const mensagem = document.getElementById("mensagem");
  let encontrado = false

//percorre o código e verifica se os inputs digitados estão corretos
  for (let i = 0; i < usuario.length; i++){
    if(input == usuario[i].login && input2 == usuario[i].senha){
    encontrado = true
    frase.innerHTML= "Bem-vindo(a)"
    mensagem.innerHTML= "Entrando..."
    
//alterando as cores usando classes e css
    frase.classList.remove("text1")
    mensagem.classList.remove("text2")
    frase.classList.add("text3")

//redirecioando a outro site
    window.location.href = "https://www.wikipedia.com"
}
    
}
//se a entrada não for encontrada exibe mensagem de erro
  if(!encontrado){
  mensagem.innerHTML= "Login ou senha incorretos, tente novamente"

//alterando as cores usando classes e css
  mensagem.classList.remove("text1")
  mensagem.classList.remove("text3")
  mensagem.classList.add("text2")
  
}

//aguarda um tempo e volta uma mensagem
  setTimeout(() =>{
    mensagem.innerHTML = "Digite suas credenciais embaixo";
  },3000);




//limpa os campos apos execução
document.getElementById('login').value=''
document.getElementById('senha').value=''
}

//deixa a senha invisivel a não ser que clique para mostrar
function mostraSenha() {
  var x = document.getElementById("senha");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}