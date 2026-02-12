/**
 * MELHORIAS INTERATIVAS - Python for PUC
 * Sistema de notificações, hints, conquistas e feedback visual
 * Usando bibliotecas do Squeleton Framework
 */

// ============================================
// 1. SISTEMA DE TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'success') {
    const config = {
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: type === 'success' ? "linear-gradient(135deg, #10B981 0%, #059669 100%)" :
                       type === 'error' ? "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)" :
                       type === 'info' ? "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)" :
                       "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600"
        }
    };

    Toastify(config).showToast();
}

// Notificação ao salvar progresso
function onProgressSaved() {
    showToast("✅ Progresso salvo com sucesso!", 'success');
}

// Notificação ao completar aula
function onAulaCompleted(aulaNumber) {
    showToast(`🎉 Aula ${aulaNumber} concluída! Continue assim!`, 'success');
}

// Notificação ao desbloquear conquista
function onAchievementUnlocked(achievementName) {
    showToast(`🏆 Conquista desbloqueada: ${achievementName}!`, 'info');
}

// ============================================
// 2. SISTEMA DE HINTS PROGRESSIVOS
// ============================================

class HintSystem {
    constructor() {
        this.initHints();
    }

    initHints() {
        document.querySelectorAll('.hint-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const level = e.target.dataset.level;
                const challenge = e.target.closest('.challenge');
                const hint = challenge.querySelector(`.hint[data-level="${level}"]`);

                if (hint) {
                    // Mostrar hint com animação
                    hint.classList.remove('d-none');
                    hint.classList.add('animated', 'fadeInUp');

                    // Desabilitar botão
                    e.target.disabled = true;
                    e.target.style.opacity = '0.5';

                    // Toast feedback
                    showToast(`💡 Dica ${level} revelada!`, 'info');
                }
            });
        });
    }
}

// ============================================
// 3. SISTEMA DE CONQUISTAS (ACHIEVEMENTS)
// ============================================

class AchievementSystem {
    constructor() {
        this.achievements = {
            first_print: {
                id: 'first_print',
                name: 'Primeiro Código',
                icon: '🏆',
                description: 'Executou seu primeiro print()',
                unlocked: false
            },
            aula_1_complete: {
                id: 'aula_1_complete',
                name: 'Primeira Aula',
                icon: '📚',
                description: 'Completou a Aula 1',
                unlocked: false
            },
            nivel_1_complete: {
                id: 'nivel_1_complete',
                name: 'Iniciante Completo',
                icon: '🎓',
                description: 'Completou todo o Nível 1',
                unlocked: false
            },
            speedrunner: {
                id: 'speedrunner',
                name: 'Speedrunner',
                icon: '⚡',
                description: 'Completou uma aula em menos de 30 minutos',
                unlocked: false
            },
            perfeccionista: {
                id: 'perfeccionista',
                name: 'Perfeccionista',
                icon: '💯',
                description: '100% em todos os exercícios de uma aula',
                unlocked: false
            },
            streak_3: {
                id: 'streak_3',
                name: 'Consistente',
                icon: '🔥',
                description: 'Estudou 3 dias seguidos',
                unlocked: false
            },
            streak_7: {
                id: 'streak_7',
                name: 'Dedicado',
                icon: '🔥🔥',
                description: 'Estudou 7 dias seguidos',
                unlocked: false
            }
        };

        this.loadAchievements();
    }

    loadAchievements() {
        const saved = localStorage.getItem('pythonpuc_achievements');
        if (saved) {
            this.achievements = JSON.parse(saved);
        }
    }

    saveAchievements() {
        localStorage.setItem('pythonpuc_achievements', JSON.stringify(this.achievements));
    }

    unlock(achievementId) {
        const achievement = this.achievements[achievementId];

        if (achievement && !achievement.unlocked) {
            achievement.unlocked = true;
            this.saveAchievements();

            // Mostrar modal de conquista
            this.showAchievementModal(achievement);

            // Toast notification
            showToast(`🏆 Conquista: ${achievement.name}!`, 'success');

            return true;
        }
        return false;
    }

    showAchievementModal(achievement) {
        // Criar modal dinamicamente
        const modalHTML = `
            <div data-modal="achievement-modal" class="modal-dialog" aria-hidden="false">
                <div class="dialog-content">
                    <div class="dialog-backdrop" data-modal-hide></div>
                    <div class="dialog-inline w-400px xs-w-90">
                        <div class="modal-popup border-rd-10 p-30-all text-center">
                            <div class="fs-16 m-20-b animated bounceIn">${achievement.icon}</div>
                            <h3 class="fs-11 fw-700 m-10-b animated fadeInUp" data-wow-delay="0.2s">
                                Conquista Desbloqueada!
                            </h3>
                            <h4 class="fs-9 fw-600 m-10-b animated fadeInUp" data-wow-delay="0.3s">
                                ${achievement.name}
                            </h4>
                            <p class="fs-7 opacity-8 m-20-b animated fadeInUp" data-wow-delay="0.4s">
                                ${achievement.description}
                            </p>
                            <button data-modal-hide class="cursor-pointer p-10-lr p-5-tb border-rd-6 animated fadeInUp" data-wow-delay="0.5s">
                                Continuar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Inserir no body se não existir
        if (!document.querySelector('[data-modal="achievement-modal"]')) {
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        // Abrir modal após pequeno delay
        setTimeout(() => {
            const modal = document.querySelector('[data-modal="achievement-modal"]');
            modal.setAttribute('aria-hidden', 'false');
            modal.classList.add('modal-show');
        }, 100);

        // Confetes
        this.triggerConfetti();
    }

    triggerConfetti() {
        // Implementação simples de confetes (pode ser melhorada)
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${['#3B82F6', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 4)]};
                    left: ${Math.random() * 100}%;
                    top: -10px;
                    z-index: 9999;
                    border-radius: 50%;
                    pointer-events: none;
                `;
                document.body.appendChild(confetti);

                const duration = Math.random() * 2000 + 1000;
                const xDrift = (Math.random() - 0.5) * 200;

                confetti.animate([
                    { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight}px) translateX(${xDrift}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: duration,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => confetti.remove();
            }, i * 30);
        }
    }

    getUnlockedCount() {
        return Object.values(this.achievements).filter(a => a.unlocked).length;
    }

    getTotalCount() {
        return Object.keys(this.achievements).length;
    }

    showAllAchievements() {
        const unlocked = this.getUnlockedCount();
        const total = this.getTotalCount();

        let html = `
            <div class="achievements-list">
                <h3 class="fs-11 fw-700 m-20-b text-center">
                    🏆 Conquistas (${unlocked}/${total})
                </h3>
                <div class="row gap-10">
        `;

        Object.values(this.achievements).forEach(achievement => {
            const opacity = achievement.unlocked ? '1' : '0.3';
            const filter = achievement.unlocked ? '' : 'grayscale(100%)';

            html += `
                <div class="c-xs-12 c-sm-6">
                    <div class="border-all border-rd-8 p-15-all" style="opacity: ${opacity}; filter: ${filter}">
                        <div class="d-flex f-items-center f-gap-15">
                            <div class="fs-13">${achievement.icon}</div>
                            <div class="f-grow-1">
                                <h4 class="fs-7 fw-600">${achievement.name}</h4>
                                <p class="fs-4 opacity-7">${achievement.description}</p>
                            </div>
                            ${achievement.unlocked ? '<span class="fs-9">✓</span>' : '<span class="fs-9">🔒</span>'}
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        return html;
    }
}

// ============================================
// 4. SISTEMA DE BUSCA RÁPIDA
// ============================================

class SearchSystem {
    constructor() {
        this.createSearchBar();
        this.initSearch();
    }

    createSearchBar() {
        const searchHTML = `
            <div class="search-container ps-fixed top-80px right-20px z-index-111 xs-top-70px xs-right-10px xs-left-10px">
                <div class="search-bar border-all border-rd-8 p-10-all" style="background: var(--bg-secondary, #1E293B); box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="🔍 Buscar: variáveis, loops, funções..."
                        class="w-100 p-10-all border-rd-6 border-all fs-7"
                        style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1);"
                    >
                    <div id="search-results" class="search-results m-10-t d-none"></div>
                </div>
                <button id="toggle-search" class="cursor-pointer border-rd-8 p-10-all border-all m-10-t w-100 text-center">
                    🔍 Buscar Conteúdo
                </button>
            </div>
        `;

        // Inserir apenas se não existir
        if (!document.querySelector('.search-container')) {
            document.body.insertAdjacentHTML('beforeend', searchHTML);
        }
    }

    initSearch() {
        const toggleBtn = document.getElementById('toggle-search');
        const searchBar = document.querySelector('.search-bar');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        if (searchBar) {
            searchBar.style.display = 'none';
        }

        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                if (searchBar.style.display === 'none') {
                    searchBar.style.display = 'block';
                    searchBar.classList.add('animated', 'fadeInDown');
                    searchInput.focus();
                } else {
                    searchBar.style.display = 'none';
                    searchResults.classList.add('d-none');
                }
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.performSearch(e.target.value);
            });
        }
    }

    performSearch(query) {
        const searchResults = document.getElementById('search-results');

        if (query.length < 2) {
            searchResults.classList.add('d-none');
            return;
        }

        // Buscar no conteúdo da página
        const allText = document.querySelectorAll('.aula-content h2, .aula-content h3, .aula-content h4, .aula-content p, .aula-content code');
        const results = [];

        allText.forEach(element => {
            const text = element.textContent.toLowerCase();
            if (text.includes(query.toLowerCase())) {
                results.push({
                    text: element.textContent.substring(0, 100) + '...',
                    element: element
                });
            }
        });

        // Mostrar resultados
        if (results.length > 0) {
            let html = '<div class="p-10-all border-rd-6" style="max-height: 300px; overflow-y: auto;">';

            results.slice(0, 5).forEach(result => {
                html += `
                    <div class="search-result-item p-10-all m-5-b cursor-pointer border-rd-4"
                         style="background: rgba(255,255,255,0.05);">
                        <p class="fs-6">${result.text}</p>
                    </div>
                `;
            });

            html += `<p class="fs-5 opacity-6 text-center m-10-t">Encontrados ${results.length} resultado(s)</p>`;
            html += '</div>';

            searchResults.innerHTML = html;
            searchResults.classList.remove('d-none');

            // Scroll até o primeiro resultado ao clicar
            document.querySelectorAll('.search-result-item').forEach((item, index) => {
                item.addEventListener('click', () => {
                    results[index].element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    results[index].element.classList.add('animated', 'flash');
                });
            });
        } else {
            searchResults.innerHTML = '<p class="fs-6 opacity-6 text-center p-20-all">Nenhum resultado encontrado</p>';
            searchResults.classList.remove('d-none');
        }
    }
}

// ============================================
// 5. MELHORIAS NO SISTEMA DE PROGRESSO
// ============================================

class ProgressSystem {
    constructor() {
        this.initProgressTracking();
        this.checkStreak();
    }

    initProgressTracking() {
        // Marcar checkboxes ao clicar
        document.querySelectorAll('.lesson-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.updateProgress();

                if (e.target.checked) {
                    showToast('✅ Marcado como concluído!', 'success');

                    // Animação no checkbox
                    e.target.parentElement.classList.add('animated', 'pulse');
                }
            });
        });
    }

    updateProgress() {
        const checkboxes = document.querySelectorAll('.lesson-checkbox');
        const checked = document.querySelectorAll('.lesson-checkbox:checked').length;
        const total = checkboxes.length;
        const percentage = Math.round((checked / total) * 100);

        // Atualizar barra de progresso
        const progressBar = document.getElementById('progress-bar');
        const progressPercent = document.getElementById('progress-percent');

        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }

        if (progressPercent) {
            progressPercent.textContent = percentage + '%';
        }

        // Salvar no localStorage
        this.saveProgress(checked, total);

        // Verificar conquistas
        if (percentage === 100) {
            achievements.unlock('nivel_1_complete');
            this.triggerCelebration();
        }
    }

    saveProgress(checked, total) {
        const progress = {
            checked: checked,
            total: total,
            percentage: Math.round((checked / total) * 100),
            lastUpdate: new Date().toISOString()
        };

        localStorage.setItem('pythonpuc_progress', JSON.stringify(progress));
        onProgressSaved();
    }

    checkStreak() {
        const lastVisit = localStorage.getItem('pythonpuc_last_visit');
        const today = new Date().toDateString();

        if (lastVisit) {
            const lastDate = new Date(lastVisit);
            const todayDate = new Date(today);
            const diffTime = Math.abs(todayDate - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                // Incrementar streak
                let streak = parseInt(localStorage.getItem('pythonpuc_streak') || '0');
                streak++;
                localStorage.setItem('pythonpuc_streak', streak.toString());

                showToast(`🔥 Streak de ${streak} dias!`, 'success');

                // Verificar conquistas de streak
                if (streak === 3) achievements.unlock('streak_3');
                if (streak === 7) achievements.unlock('streak_7');
            } else if (diffDays > 1) {
                // Resetar streak
                localStorage.setItem('pythonpuc_streak', '0');
            }
        }

        localStorage.setItem('pythonpuc_last_visit', today);
    }

    triggerCelebration() {
        // Confetes + modal
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: ${Math.random() * 10 + 5}px;
                    height: ${Math.random() * 10 + 5}px;
                    background: ${['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][Math.floor(Math.random() * 5)]};
                    left: ${Math.random() * 100}%;
                    top: -20px;
                    z-index: 9999;
                    border-radius: 50%;
                    pointer-events: none;
                `;
                document.body.appendChild(confetti);

                confetti.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 20}px) translateX(${(Math.random() - 0.5) * 300}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 3000 + 2000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => confetti.remove();
            }, i * 20);
        }

        // Modal de parabéns
        showToast('🎉 Parabéns! Você completou 100% desta lição!', 'success');
    }
}

// ============================================
// 6. BOTÃO VOLTAR AO TOPO
// ============================================

function createBackToTop() {
    const buttonHTML = `
        <button id="back-to-top" class="ps-fixed bottom-20px right-20px z-index-111 cursor-pointer border-rd-50 p-15-all border-all d-none animated fadeIn"
                style="background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%); color: white; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);">
            <span class="iccon-chevron-up-1 fs-9"></span>
        </button>
    `;

    if (!document.getElementById('back-to-top')) {
        document.body.insertAdjacentHTML('beforeend', buttonHTML);

        const btn = document.getElementById('back-to-top');

        // Mostrar/ocultar baseado no scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btn.classList.remove('d-none');
            } else {
                btn.classList.add('d-none');
            }
        });

        // Scroll suave ao topo
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

// Instâncias globais
let achievements;
let hintSystem;
let searchSystem;
let progressSystem;

// Inicializar quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMelhorias);
} else {
    initMelhorias();
}

function initMelhorias() {
    console.log('🚀 Inicializando melhorias interativas...');

    // Inicializar sistemas
    achievements = new AchievementSystem();
    hintSystem = new HintSystem();
    searchSystem = new SearchSystem();
    progressSystem = new ProgressSystem();

    // Criar botão voltar ao topo
    createBackToTop();

    // Exemplo de uso: desbloquear conquista ao executar primeiro código
    // (você pode conectar isso ao editor de código quando implementá-lo)
    setTimeout(() => {
        achievements.unlock('first_print');
    }, 2000);

    console.log('✅ Melhorias carregadas com sucesso!');
    showToast('🎉 Bem-vindo ao Python for PUC!', 'success');
}

// Exportar para uso global
window.pythonPUC = {
    achievements,
    showToast,
    onAulaCompleted,
    onProgressSaved
};
