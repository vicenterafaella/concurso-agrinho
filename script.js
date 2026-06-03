// Função para o botão de Curtir das notícias
function toggleLike(button) {
    const icon = button.querySelector('i');
    const likesCountSpan = button.querySelector('.likes-count');
    let currentLikes = parseInt(likesCountSpan.textContent);

    // Verifica se o botão já foi clicado (contém a classe 'liked')
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        icon.classList.replace('fas', 'far'); // Torna o coração vazio novamente
        currentLikes--;
    } else {
        button.classList.add('liked');
        icon.classList.replace('far', 'fas'); // Preenche o coração
        currentLikes++;
    }

    // Atualiza o texto na tela
    likesCountSpan.textContent = currentLikes;
}
