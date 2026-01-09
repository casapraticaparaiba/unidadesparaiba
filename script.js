const botoes = document.querySelectorAll('.unidade-btn');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const opcoes = botao.nextElementSibling;
    opcoes.style.display = opcoes.style.display === 'block' ? 'none' : 'block';
  });
});
