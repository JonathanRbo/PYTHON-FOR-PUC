/* ============================================
   EFEITOS INTERATIVOS - Python for PUC
   ============================================ */

// 1. EFEITO RIPPLE NOS BOTÕES
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');

    const existingRipple = button.getElementsByClassName('ripple')[0];
    if (existingRipple) {
        existingRipple.remove();
    }

    button.appendChild(ripple);
}

// Adicionar ripple a todos os botões
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-large').forEach(button => {
    button.classList.add('btn-ripple');
    button.addEventListener('click', createRipple);
});

// 2. SCROLL REVEAL - Revelar elementos ao scrollar
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealElements);
revealElements(); // Executar na carga

// 3. PARALLAX SUAVE
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// 4. EFEITO DE DIGITAÇÃO NO CÓDIGO
function typeCode(element, code, speed = 50) {
    let i = 0;
    element.textContent = '';

    const typing = setInterval(() => {
        if (i < code.length) {
            element.textContent += code.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            // Remover cursor depois de digitar
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 500);
        }
    }, speed);
}

// 5. CHUVA DE CÓDIGO (MATRIX EFFECT)
function createMatrixRain() {
    const chars = '01{}[]()<>=+-*/pythondefclassifelse';
    const container = document.body;

    setInterval(() => {
        const char = document.createElement('div');
        char.classList.add('matrix-char');
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * window.innerWidth + 'px';
        char.style.animationDuration = (Math.random() * 3 + 2) + 's';
        char.style.animationDelay = Math.random() * 2 + 's';

        container.appendChild(char);

        // Remover depois da animação
        setTimeout(() => char.remove(), 7000);
    }, 500);
}

// Iniciar matrix rain (comentado por padrão, descomente para ativar)
// createMatrixRain();

// 6. HOVER 3D NOS CARDS - DESABILITADO
// Removido para melhorar performance e simplificar interação
// const cards3D = document.querySelectorAll('.level-card, .about-card, .feature-card');
// cards3D.forEach(card => {
//     card.addEventListener('mousemove', (e) => { ... });
//     card.addEventListener('mouseleave', () => { ... });
// });

// 7. EFEITO DE CÓDIGO COMPILANDO
function showCompileEffect(button) {
    const bar = document.createElement('div');
    bar.classList.add('compile-bar');
    button.appendChild(bar);

    setTimeout(() => bar.remove(), 2000);
}

// 8. PARTÍCULAS INTERATIVAS NO MOUSE - DESABILITADO
// let particles = [];
//
// document.addEventListener('mousemove', (e) => {
//     // Criar partícula ocasionalmente
//     if (Math.random() > 0.95) {
//         const particle = document.createElement('div');
//         particle.style.cssText = `
//             position: fixed;
//             width: 4px;
//             height: 4px;
//             background: #3B82F6;
//             border-radius: 50%;
//             pointer-events: none;
//             z-index: 9999;
//             left: ${e.clientX}px;
//             top: ${e.clientY}px;
//         `;
//
//         document.body.appendChild(particle);
//
//         particle.animate([
//             { opacity: 1, transform: 'scale(1)' },
//             { opacity: 0, transform: 'scale(0) translateY(-50px)' }
//         ], {
//             duration: 1000,
//             easing: 'ease-out'
//         }).onfinish = () => particle.remove();
//     }
// });

// 9. EASTER EGG - Konami Code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Ativar efeito matrix
    createMatrixRain();

    // Mostrar mensagem
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
        z-index: 10001;
        text-align: center;
        color: white;
    `;

    modal.innerHTML = `
        <h2 style="font-size: 2rem; margin-bottom: 1rem;">🎉 Easter Egg Descoberto!</h2>
        <p style="font-size: 1.25rem; margin-bottom: 2rem;">
            Você encontrou o código secreto!<br>
            Matrix mode ativado! 🐍💻
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
            Continuar Programando! 🚀
        </button>
    `;

    document.body.appendChild(modal);

    // Remover depois de 10 segundos
    setTimeout(() => modal.remove(), 10000);
}

// 10. CURSOR TRAIL - DESABILITADO
// const trail = [];
// const trailLength = 10;
//
// document.addEventListener('mousemove', (e) => {
//     const dot = document.createElement('div');
//     dot.style.cssText = `
//         position: fixed;
//         width: 8px;
//         height: 8px;
//         background: linear-gradient(135deg, #3B82F6, #2563EB);
//         border-radius: 50%;
//         pointer-events: none;
//         z-index: 9998;
//         left: ${e.clientX - 4}px;
//         top: ${e.clientY - 4}px;
//         opacity: 0.6;
//     `;
//
//     document.body.appendChild(dot);
//     trail.push(dot);
//
//     if (trail.length > trailLength) {
//         const oldDot = trail.shift();
//         oldDot.remove();
//     }
//
//     // Fade out
//     dot.animate([
//         { opacity: 0.6, transform: 'scale(1)' },
//         { opacity: 0, transform: 'scale(0)' }
//     ], {
//         duration: 500,
//         easing: 'ease-out'
//     }).onfinish = () => {
//         if (dot.parentElement) dot.remove();
//     };
// });

// 11. EFEITO DE TERMINAL TYPING
function terminalTyping(element, commands, speed = 80) {
    let commandIndex = 0;
    let charIndex = 0;

    element.textContent = '$ ';

    const type = () => {
        if (commandIndex < commands.length) {
            const currentCommand = commands[commandIndex];

            if (charIndex < currentCommand.length) {
                element.textContent += currentCommand.charAt(charIndex);
                charIndex++;
                setTimeout(type, speed);
            } else {
                element.textContent += '\n$ ';
                commandIndex++;
                charIndex = 0;
                setTimeout(type, speed * 10);
            }
        }
    };

    type();
}

// 12. SMOOTH SCROLL COM EFEITO
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            // Efeito de flash antes de scrollar
            target.style.transition = 'background 0.3s';
            target.style.background = 'rgba(37, 99, 235, 0.1)';

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            setTimeout(() => {
                target.style.background = '';
            }, 1000);
        }
    });
});

// 13. CONTADOR ANIMADO APRIMORADO
function animateCounter(element, start, end, duration, suffix = '') {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Easing function para movimento mais suave
        const easeOutQuad = progress * (2 - progress);
        const value = Math.floor(easeOutQuad * (end - start) + start);

        element.textContent = value + suffix;

        // Efeito de brilho ao atualizar
        element.style.textShadow = `0 0 ${20 * (1 - progress)}px rgba(37, 99, 235, ${progress})`;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

// 14. ADICIONAR EFEITOS AOS CARDS
document.querySelectorAll('.level-card, .about-card, .feature-card').forEach(card => {
    // Adicionar classe reveal
    card.classList.add('reveal');

    // Adicionar efeito glow no hover
    card.classList.add('glow-on-hover');

    // Adicionar efeito de soft bounce
    card.classList.add('soft-bounce');
});

// 15. LOADING ANIMATION PARA CÓDIGOS
function showCodeLoading(codeBlock) {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, transparent, #3B82F6, transparent);
        background-size: 200% 100%;
        animation: loading-bar 1.5s infinite;
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes loading-bar {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
    `;
    document.head.appendChild(style);

    codeBlock.style.position = 'relative';
    codeBlock.appendChild(loader);

    setTimeout(() => loader.remove(), 1500);
}

// 16. ADICIONAR EFEITOS DE HOVER NOS BOTÕES
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.classList.add('btn-special'); // Removido 'btn-progress' para evitar linha verde
});

// 17. EFEITO DE BADGE PULSANTE
document.querySelectorAll('.badge, .nivel-badge, .featured-badge').forEach(badge => {
    badge.classList.add('badge-animated');
});

// 18. INICIALIZAR EFEITOS AO CARREGAR
window.addEventListener('DOMContentLoaded', () => {
    console.log('🐍 Python for PUC - Efeitos carregados!');
    console.log('💡 Dica: Tente o Konami Code (↑↑↓↓←→←→BA) para um easter egg!');

    // Adicionar efeito de entrada suave
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 19. EFEITO DE CÓDIGO SENDO EXECUTADO
function simulateCodeExecution(button) {
    const originalText = button.textContent;

    button.textContent = 'Executando...';
    button.style.background = '#F59E0B';

    setTimeout(() => {
        button.textContent = '✓ Executado!';
        button.style.background = '#10B981';
    }, 1500);

    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 3000);
}

// 20. FPS COUNTER (para debug - comentado)
/*
let fps = 0;
let lastTime = performance.now();

function updateFPS() {
    const currentTime = performance.now();
    fps = Math.round(1000 / (currentTime - lastTime));
    lastTime = currentTime;

    console.log('FPS:', fps);
    requestAnimationFrame(updateFPS);
}

requestAnimationFrame(updateFPS);
*/

console.log('✨ Efeitos especiais ativados!');
