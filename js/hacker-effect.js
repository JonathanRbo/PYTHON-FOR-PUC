/* ============================================
   EFEITO HACKER NO HERO - Python for PUC
   ============================================ */

// Criar efeito de código hacker no background do hero
function createHackerEffect() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    // Criar container para o efeito
    const hackerContainer = document.createElement('div');
    hackerContainer.className = 'hacker-bg';
    hackerContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
        opacity: 0.15;
        pointer-events: none;
    `;

    heroSection.style.position = 'relative';
    heroSection.insertBefore(hackerContainer, heroSection.firstChild);

    // Códigos Python para exibir
    const pythonCodes = [
        'def calculate_grade(score):',
        '    if score >= 90:',
        '        return "A"',
        'import numpy as np',
        'class Student:',
        '    def __init__(self, name):',
        'for i in range(10):',
        '    print(f"Loop {i}")',
        'data = pd.read_csv("data.csv")',
        'plt.plot(x, y)',
        'lambda x: x ** 2',
        'with open("file.txt") as f:',
        'result = [x for x in range(100)]',
        'async def fetch_data():',
        'try:',
        '    api.get_data()',
        'except Exception as e:',
        '    logger.error(e)',
        'from flask import Flask',
        'app = Flask(__name__)',
        '@app.route("/")',
        'def home():',
        '    return "Hello"',
        'import tensorflow as tf',
        'model.fit(X_train, y_train)',
        'df.groupby("category").sum()',
        'sorted(items, key=lambda x: x[1])',
        'while True:',
        '    process_data()',
        'pip install python-for-puc'
    ];

    // Criar linhas de código que caem
    function createCodeLine() {
        const line = document.createElement('div');
        const randomCode = pythonCodes[Math.floor(Math.random() * pythonCodes.length)];

        line.textContent = randomCode;
        line.style.cssText = `
            position: absolute;
            top: -50px;
            left: ${Math.random() * 100}%;
            color: #3B82F6;
            font-family: 'Fira Code', monospace;
            font-size: ${Math.random() * 8 + 10}px;
            white-space: nowrap;
            opacity: ${Math.random() * 0.5 + 0.3};
            transform: rotate(${Math.random() * 20 - 10}deg);
        `;

        hackerContainer.appendChild(line);

        // Animação de queda - mais rápida
        const duration = Math.random() * 5000 + 3000;
        const drift = (Math.random() - 0.5) * 200;

        line.animate([
            {
                transform: `translateY(0px) translateX(0px) rotate(${Math.random() * 20 - 10}deg)`,
                opacity: line.style.opacity
            },
            {
                transform: `translateY(${window.innerHeight + 100}px) translateX(${drift}px) rotate(${Math.random() * 40 - 20}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'linear'
        }).onfinish = () => line.remove();
    }

    // Criar linhas continuamente - mais rápido
    setInterval(createCodeLine, 150);

    // Criar algumas linhas iniciais
    for (let i = 0; i < 10; i++) {
        setTimeout(createCodeLine, i * 200);
    }
}

// Terminal hacker no code window - DESABILITADO (quebrava em mobile)
function createTerminalHacker() {
    const codeWindow = document.querySelector('.code-window .window-body pre code');
    if (!codeWindow) return;

    // Mostrar código estático sem animação de digitação
    const staticCode = `# Iniciando Python for PUC...
import puc_python_lib

def aprender_python():
    nivel = "iniciante"
    while nivel != "ninja":
        estudar()
        praticar()
        nivel = avaliar()
    return "🎉 Você é um ninja Python!"

>>> aprender_python()
Carregando módulos...
✓ Variáveis carregadas
✓ Funções importadas
✓ Classes inicializadas

Iniciando jornada de aprendizado...
⚡ Sistema pronto!`;

    codeWindow.textContent = staticCode;
}

// Efeito de matrix simplificado no hero
function createMatrixColumns() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-bg';
    matrixContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
        opacity: 0.08;
        pointer-events: none;
    `;

    heroSection.insertBefore(matrixContainer, heroSection.firstChild);

    const chars = '01python{}[]def class if else for while import';
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.style.cssText = `
            position: absolute;
            top: -100%;
            left: ${i * 20}px;
            font-family: 'Fira Code', monospace;
            font-size: 14px;
            color: #3B82F6;
            writing-mode: vertical-lr;
            animation: matrix-fall ${Math.random() * 5 + 5}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;

        let text = '';
        for (let j = 0; j < 50; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + ' ';
        }
        column.textContent = text;

        matrixContainer.appendChild(column);
    }

    // Adicionar animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes matrix-fall {
            0% {
                top: -100%;
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                top: 100%;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Glitch effect no título
function createTitleGlitch() {
    const title = document.querySelector('.hero-title');
    if (!title) return;

    setInterval(() => {
        // Efeito glitch ocasional
        if (Math.random() > 0.95) {
            title.style.textShadow = `
                2px 2px #3B82F6,
                -2px -2px #2563EB,
                2px -2px #60A5FA
            `;

            setTimeout(() => {
                title.style.textShadow = '';
            }, 100);
        }
    }, 2000);
}

// Scan line effect - DESABILITADO (causava linha aleatória)
function createScanLine() {
    // Comentado para remover linha scan indesejada
    // const heroSection = document.querySelector('.hero');
    // if (!heroSection) return;
    // ... resto do código comentado
}

// Inicializar todos os efeitos quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
    console.log('🔥 Efeito hacker ativado!');

    // Ativar efeitos
    createHackerEffect();
    createTerminalHacker();
    createMatrixColumns();
    createTitleGlitch();
    // createScanLine(); // DESABILITADO - causava linha indesejada
});

console.log('💻 Hacker mode loaded!');
