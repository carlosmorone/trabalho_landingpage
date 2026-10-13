// JavaScript básico - Carlos Picimilio

// 1. Menu hambúrguer (celular)
var botaoMenu = document.getElementById("btn-menu");
var menu = document.getElementById("menu");
botaoMenu.onclick = function () {
  menu.classList.toggle("aberto");
};

// 2. Atualizar o ano do rodapé
document.getElementById("ano").innerHTML = new Date().getFullYear();

// 3. Botão voltar ao topo
var botaoTopo = document.getElementById("btn-topo");
window.onscroll = function () {
  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
};
botaoTopo.onclick = function () {
  window.scrollTo(0, 0);
};

// 4. Formulário (só existe na página de contato)
var form = document.getElementById("formulario");
if (form) {
  // Mostra o valor do range
  var range = document.getElementById("urgencia");
  range.oninput = function () {
    document.getElementById("valor").innerHTML = range.value;
  };

  form.onsubmit = function (evento) {
    evento.preventDefault(); // não envia de verdade
    var erros = [];

    var nome = document.getElementById("nome").value.trim();
    var tel = document.getElementById("tel").value.trim();
    var email = document.getElementById("email").value.trim();
    var descricao = document.getElementById("descricao").value.trim();

    if (nome.length < 3) erros.push("Digite seu nome completo.");
    if (tel.replace(/\D/g, "").length < 10) erros.push("Digite um telefone válido com DDD.");
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) erros.push("Digite um e-mail válido.");
    if (document.getElementById("cliente").value == "") erros.push("Escolha o tipo de cliente.");
    if (document.getElementById("horario").value == "") erros.push("Escolha o melhor horário.");
    if (document.getElementById("servico").value == "") erros.push("Escolha o tipo de serviço.");
    if (!document.querySelector('input[name="projeto"]:checked')) erros.push("Escolha o tipo de projeto.");
    if (document.getElementById("orcamento").value == "") erros.push("Escolha o orçamento.");
    if (document.getElementById("data").value == "") erros.push("Escolha a data de entrega.");
    if (descricao.length < 10) erros.push("Escreva uma descrição com pelo menos 10 letras.");
    if (!document.getElementById("termos").checked) erros.push("Aceite os termos.");

    var divErros = document.getElementById("erros");
    var sucesso = document.getElementById("sucesso");

    if (erros.length > 0) {
      divErros.innerHTML = "<ul><li>" + erros.join("</li><li>") + "</li></ul>";
      sucesso.hidden = true;
    } else {
      divErros.innerHTML = "";
      sucesso.hidden = false; // mostra a mensagem de sucesso
      form.reset(); // limpa o formulário
      document.getElementById("valor").innerHTML = "3";
      sucesso.scrollIntoView();
    }
  };
}
