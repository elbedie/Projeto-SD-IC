let modoNoturnoAtivo = false;

function alterarModoNoturno() {
  const corBody = document.body;
  
  if (!modoNoturnoAtivo) {
    corBody.style.backgroundImage =
      'linear-gradient(to right top, #16161a, #1c1c1f, #222225, #29292a, #2f2f30)';
    corBody.style.color = '#fffffe';

    const links = document.querySelectorAll('a');
    links.forEach(link => link.style.color = '#FAF7F0');

    document.getElementById("section1").style.backgroundImage =
      'linear-gradient(to right top, #16161a, #1c1c1f, #222225, #29292a, #2f2f30), url(./assets/imagens/background.png)';
    
    document.getElementById("navbar").style.backgroundColor = "#3b3b3b";
    document.getElementById("navbar").style.border = "none";
    document.getElementById("footer").style.backgroundColor = "#3b3b3b";

    modoNoturnoAtivo = true;
  } else {
    corBody.style.backgroundImage = '';  
    corBody.style.color = '';  

    const links = document.querySelectorAll('a');
    links.forEach(link => link.style.color = '');  

    document.getElementById("section1").style.backgroundImage = '';  
    document.getElementById("navbar").style.backgroundColor = '';  
    document.getElementById("navbar").style.border = '';  
    document.getElementById("footer").style.backgroundColor = '';  

    modoNoturnoAtivo = false;
  }
}


function exibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
}

 function mensagemInicial() {
 exibirTextoTela('h1', 'SIMC')
 }

function telaInicial() {
  // A função precisa acessar a primeira div com a classe 'texto-pagina-inicial'
  let textoInicial = document.getElementsByClassName('texto-pagina-inicial')[0]
  textoInicial.innerHTML =
    `
    <p>
    <b>Sistema inteligente de monitoramento cardíaco</b>
    <br>
    Sistema de monitoramento cardíaco com alarme sonoro, ativado quando a frequência cardíaca ultrapassar 100 bpm, e opção de desativação pelo cuidador.
    </p>
    `
}

function textoSobreProjeto() {
  let descricao = document.getElementsByClassName('descricao-o-projeto')[0]
  descricao.innerHTML = `
    <p>
    <b>01.</b> O projeto tem como objetivo monitorar a saúde do idoso em tempo real, detectando alterações críticas na frequência cardíaca e gerando alertas para os responsáveis.
    <br>
    <b>02.</b> Para isso, o idoso será monitorado por um sensor de frequência cardíaca integrado ao seu smartwatch. Caso a frequência ultrapasse o limite estabelecido, o sistema acionará um alarme sonoro, alertando imediatamente o cuidador responsável.
    <br>
    <b>03. Palavras-chave:</b> Monitoramento cardíaco, alerta sonoro, assistência geriátrica, Arduino. <br><br>
    <b>Lições e problemas enfrentados:</b> No início, planejamos integrar o ESP32 para enviar mensagens via WhatsApp quando a frequência cardíaca ultrapassasse o limite. No entanto, devido à complexidade da integração e à limitação de tempo, não conseguimos implementar essa funcionalidade. Como solução, optamos por utilizar um alarme sonoro como método de notificação. A principal lição aprendida foi a importância de planejar as funcionalidades com mais realismo, considerando o tempo disponível para o desenvolvimento.
</p>

    `
}

function componentesProjeto(){
  let itens = document.getElementsByClassName('descricao-comp-supri')[0]
  itens.innerHTML = `
    <p>
      <b>01. Arduíno Uno R3:</b> controlador principal para processar os dados do sensor de frequência cardíaca;
      <br>
      <b>02. Sensor de pulso e LEDs;</b>
      <br>
      <b>03. Buzzer:</b> responsável por emitir o alarme sonoro;
      <br>
      <b>04. Botão:</b> utilizado para desligar o alarme;
      <br>
      <b>05.Aplicativos e plataforma:</b> O esquema conceitual foi desenvolvido no Tinkercad, enquanto o código foi programado utilizando uma IDE C++ compatível com o Arduino.
</p>

  `
}

document.addEventListener('DOMContentLoaded', () => {
  mensagemInicial()
  telaInicial()
  textoSobreProjeto()
  componentesProjeto()
})

const links = document.querySelectorAll('.nav-link'); // Seleciona todos os links

links.forEach(link => {
  link.addEventListener('click', function() {
    // Remove a classe de todos os links
    links.forEach(link => link.classList.remove('active-link'));

    // Adiciona a classe ao link clicado
    this.classList.add('active-link');
  });
});

function confirmarDownload(event) {
  // Previne o link de ser seguido imediatamente
  event.preventDefault();

  // Exibe a caixa de confirmação
  const confirmar = window.confirm("Você tem certeza que deseja baixar o arquivo?");

  // Se o usuário confirmar, segue o link
  if (confirmar) {
    window.location.href = "/assets/downloads/SIMC.zip";  // Redireciona para o download
  }
}

function applyBlur(clickedCard) {
  // Seleciona todos os cards
  const cards = document.querySelectorAll('.card');
  
  // Adiciona a classe blur nos cards não clicados e remove de outros
  cards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.add('card-blur');
    } else {
      card.classList.remove('card-blur');
    }
  });
}