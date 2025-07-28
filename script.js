document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');
    const btnHighContrast = document.getElementById('btn-high-contrast');
    const btnResetStyles = document.getElementById('btn-reset-styles');

    // Função para ajustar o tamanho da fonte
    function adjustFontSize(factor) {
        let currentSize = parseFloat(window.getComputedStyle(body).fontSize);
        body.style.fontSize = `${currentSize * factor}px`;
    }

    // Função para alternar o alto contraste
    function toggleHighContrast() {
        body.classList.toggle('high-contrast');
        // Salva a preferência do usuário
        if (body.classList.contains('high-contrast')) {
            localStorage.setItem('highContrast', 'enabled');
        } else {
            localStorage.removeItem('highContrast');
        }
    }

    // Função para restaurar os estilos padrão
    function resetStyles() {
        body.style.fontSize = ''; // Remove o estilo de fonte embutido
        body.classList.remove('font-large', 'font-small', 'high-contrast'); // Remove classes
        localStorage.removeItem('highContrast'); // Limpa a preferência de alto contraste
    }

    // Event Listeners para os botões
    btnIncreaseFont.addEventListener('click', () => {
        adjustFontSize(1.1); // Aumenta em 10%
    });

    btnDecreaseFont.addEventListener('click', () => {
        adjustFontSize(0.9); // Diminui em 10%
    });

    btnHighContrast.addEventListener('click', toggleHighContrast);

    btnResetStyles.addEventListener('click', resetStyles);

    // Verifica se o alto contraste estava ativado na última visita
    if (localStorage.getItem('highContrast') === 'enabled') {
        body.classList.add('high-contrast');
    }
});