
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Alternar Modo Claro/Escuro
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
        // Adiciona ou remove a classe 'dark-mode' do elemento <body>
        document.body.classList.toggle('dark-mode');
        
        // Muda o texto do botão
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Modo Claro';
        } else {
            themeToggleBtn.textContent = '🌙 Modo Escuro';
        }
    });

    // 2. Mudar a cor de fundo do Card
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            
            // Verifica se o modo escuro está ativo para gerar cores adequadas
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            // Gera uma matiz aleatória (0 a 360)
            const randomHue = Math.floor(Math.random() * 360);
            
            // Se for modo escuro, usa cores mais escuras (luminosidade 20%). 
            // Se for modo claro, usa cores pastéis claras (luminosidade 90%).
            const lightness = isDarkMode ? '20%' : '90%';
            
            // Aplica a cor usando HSL (Hue, Saturation, Lightness)
            card.style.backgroundColor = `hsl(${randomHue}, 50%, ${lightness})`;
        });
    });

    // 3. Expandir/Ocultar Biografia
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const bioContainer = card.querySelector('.bio-container');
            const bioText = card.querySelector('.bio');
            
            if (bioContainer.style.maxHeight) {
                bioContainer.style.maxHeight = null;
                this.textContent = 'Ler Bio';
            } else {
                bioContainer.style.maxHeight = bioText.scrollHeight + 15 + "px";
                this.textContent = 'Ocultar Bio';
            }
        });
    });

    // 4. Lógica do Botão de Seguir
    const followButtons = document.querySelectorAll('.follow-btn');
    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const followerSpan = card.querySelector('.follower-count');
            
            let currentFollowers = parseInt(followerSpan.getAttribute('data-count'));

            if (this.classList.contains('following')) {
                currentFollowers -= 1;
                this.classList.remove('following');
                this.textContent = 'Seguir';
            } else {
                currentFollowers += 1;
                this.classList.add('following');
                this.textContent = 'Seguindo';
            }

            followerSpan.setAttribute('data-count', currentFollowers);
            followerSpan.textContent = currentFollowers;
        });
    });

});