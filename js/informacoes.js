const setas = document.querySelectorAll("#seta_informacao");
const descricoes = document.querySelectorAll(".resposta");
const frases = [
  '<div class="resposta_informacoes"><p class="mensagem">Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!</p></div>',
  '<div class="resposta_informacoes"><p class="mensagem">A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.</p></div>',
  '<div class="resposta_informacoes"><p class="mensagem">As opções de ingressos disponíveis são:<br>Pista Premium<br>Pista Comum<br>Cadeiras térreo<br>Cadeiras superiores<br>Rampas</p></div>',
  '<div class="resposta_informacoes"><p class="mensagem">Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.</p></div>'
];

setas.forEach((seta, index) => {
  let mensagemVisivel = false;
  
  seta.addEventListener('click', () => {
    if (mensagemVisivel) {
      descricoes[index].innerHTML = '';
      mensagemVisivel = false;
    } else {
      descricoes.forEach((descricao) => (descricao.innerHTML = ''));
      descricoes[index].innerHTML = frases[index];
      mensagemVisivel = true;
    }
  });
});