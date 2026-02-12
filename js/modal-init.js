/* ============================================
   INICIALIZAÇÃO DOS MODAIS - Python for PUC
   ============================================ */

// Aguardar carregamento completo
window.addEventListener('DOMContentLoaded', () => {
    console.log('🪟 Inicializando modais...');

    // Selecionar todos os modais
    const modals = document.querySelectorAll('[data-modal]');

    if (modals.length === 0) {
        console.warn('⚠️ Nenhum modal encontrado na página');
        return;
    }

    console.log(`✅ ${modals.length} modais encontrados`);

    // Inicializar cada modal individualmente
    modals.forEach((modal, index) => {
        const modalId = modal.getAttribute('data-modal');

        // Garantir que o modal está oculto inicialmente
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';

        // Encontrar triggers (botões que abrem o modal)
        const triggers = document.querySelectorAll(`[data-modal-show="${modalId}"]`);

        if (triggers.length === 0) {
            console.warn(`⚠️ Nenhum trigger encontrado para modal: ${modalId}`);
        } else {
            console.log(`✓ Modal "${modalId}" configurado (${triggers.length} triggers)`);
        }

        // Adicionar event listeners manualmente caso o Squeleton não funcione
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(modalId);
            });
        });

        // Botões de fechar
        const closeButtons = modal.querySelectorAll('[data-modal-hide]');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeModal(modalId);
            });
        });

        // Fechar ao clicar no backdrop
        const backdrop = modal.querySelector('.dialog-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', () => {
                closeModal(modalId);
            });
        }

        // Fechar com tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
                closeModal(modalId);
            }
        });
    });

    console.log('✅ Modais inicializados com sucesso!');
});

// Função para abrir modal
function openModal(modalId) {
    const modal = document.querySelector(`[data-modal="${modalId}"]`);

    if (!modal) {
        console.error(`❌ Modal não encontrado: ${modalId}`);
        return;
    }

    console.log(`🔓 Abrindo modal: ${modalId}`);

    // Mostrar modal
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';

    // Bloquear scroll do body
    document.body.style.overflow = 'hidden';

    // Adicionar animação
    setTimeout(() => {
        modal.classList.add('modal-open');
    }, 10);

    // Focar no modal (acessibilidade)
    const focusableElement = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElement) {
        focusableElement.focus();
    }
}

// Função para fechar modal
function closeModal(modalId) {
    const modal = document.querySelector(`[data-modal="${modalId}"]`);

    if (!modal) {
        console.error(`❌ Modal não encontrado: ${modalId}`);
        return;
    }

    console.log(`🔒 Fechando modal: ${modalId}`);

    // Remover animação
    modal.classList.remove('modal-open');

    // Ocultar modal após animação
    setTimeout(() => {
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';

        // Desbloquear scroll do body
        document.body.style.overflow = '';
    }, 300);
}

// Expor funções globalmente para uso inline
window.openModal = openModal;
window.closeModal = closeModal;

console.log('📜 modal-init.js carregado');
