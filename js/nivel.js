// Função para copiar código
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Copiado!';
        button.classList.add('copied');

        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    });
}

// Função para mostrar/esconder solução - REMOVIDA
// Substituída por modais do Squeleton (data-modal-show/hide)
// function toggleSolution(button) {
//     const solution = button.closest('.challenge-box').querySelector('.solution');
//     if (solution.style.display === 'none') {
//         solution.style.display = 'block';
//         button.textContent = 'Esconder Solução';
//     } else {
//         solution.style.display = 'none';
//         button.textContent = 'Ver Solução';
//     }
// }

// Função para atualizar progresso
function updateProgress() {
    const checkboxes = document.querySelectorAll('.complete-check input[type="checkbox"]');
    const total = checkboxes.length;
    const checked = document.querySelectorAll('.complete-check input[type="checkbox"]:checked').length;

    const percentage = Math.round((checked / total) * 100);

    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');

    if (progressBar && progressPercent) {
        progressBar.style.width = percentage + '%';
        progressPercent.textContent = percentage + '%';
    }

    // Salvar progresso no localStorage
    const pageName = window.location.pathname.split('/').pop();
    localStorage.setItem(pageName + '-progress', JSON.stringify({
        total: total,
        checked: checked,
        checkboxes: Array.from(checkboxes).map(cb => cb.checked)
    }));

    // Celebrar conclusão
    if (percentage === 100) {
        celebrateCompletion();
    }
}

// Carregar progresso salvo
function loadProgress() {
    const pageName = window.location.pathname.split('/').pop();
    const saved = localStorage.getItem(pageName + '-progress');

    if (saved) {
        const progress = JSON.parse(saved);
        const checkboxes = document.querySelectorAll('.complete-check input[type="checkbox"]');

        checkboxes.forEach((checkbox, index) => {
            if (progress.checkboxes[index]) {
                checkbox.checked = true;
            }
        });

        updateProgress();
    }
}

// Celebrar conclusão do nível
function celebrateCompletion() {
    // Criar confete
    const colors = ['#2563EB', '#3B82F6', '#60A5FA', '#1E40AF', '#0EA5E9'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 30);
    }

    // Mostrar mensagem
    showCongratulations();
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.background = color;
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.zIndex = '9999';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';

    document.body.appendChild(confetti);

    const duration = Math.random() * 2000 + 1000;
    const drift = (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 360;

    confetti.animate([
        {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
            opacity: 1
        },
        {
            transform: `translateY(${window.innerHeight}px) translateX(${drift}px) rotate(${rotation}deg)`,
            opacity: 0
        }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => confetti.remove();
}

function showCongratulations() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
        padding: 3rem;
        border-radius: 1rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        z-index: 10000;
        text-align: center;
        max-width: 500px;
        animation: slideIn 0.5s ease-out;
    `;

    modal.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
        <h2 style="font-size: 2rem; margin-bottom: 1rem;">Parabéns!</h2>
        <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">
            Você completou 100% deste nível!
        </p>
        <button onclick="this.parentElement.remove()" style="
            padding: 1rem 2rem;
            background: white;
            color: #2563EB;
            border: none;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
        ">
            Continuar Aprendendo! 🚀
        </button>
    `;

    document.body.appendChild(modal);

    // Adicionar animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translate(-50%, -60%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, -50%);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// Scroll suave para links da sidebar
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            // Remover active de todos
            document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
            // Adicionar active no clicado
            this.classList.add('active');

            // Scroll suave
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Observador para atualizar link ativo baseado no scroll
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            document.querySelectorAll('.sidebar-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '-100px 0px -50% 0px'
});

// Observar todas as seções
document.querySelectorAll('.aula-section').forEach(section => {
    sectionObserver.observe(section);
});

// Carregar progresso quando a página carregar
window.addEventListener('DOMContentLoaded', loadProgress);

console.log('📚 Página de nível carregada! Bons estudos!');
