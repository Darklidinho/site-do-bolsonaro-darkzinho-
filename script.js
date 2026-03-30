function ativarSite() {
    // 1. Mostrar o conteúdo secreto e esconder o botão inicial
    const setupInicial = document.getElementById('setup-inicial');
    const conteudoPatriota = document.getElementById('conteudo-patriota');
    
    setupInicial.style.display = 'none';
    conteudoPatriota.style.display = 'block';

    // 2. Inserir o player do YouTube
    // Adicionamos "mute=0" e garantimos que o iframe tenha ao menos 1px para o navegador não bloquear
    const musicDiv = document.getElementById('musica-container');
    musicDiv.innerHTML = `
        <iframe 
            width="1" height="1" 
            src="https://www.youtube.com/embed/_qUi5-M8WPE?autoplay=1&mute=0&controls=0" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            style="position: absolute; opacity: 0;">
        </iframe>`;
        
    console.log("Comando de ativação executado com sucesso!");
}