/**
 * SEVEN PAY LANDING PAGE - JAVASCRIPT
 * Funcionalidades: FAQ accordion, Form validation, WhatsApp mask, Smooth scroll
 */

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 600,
        once: true,
        offset: 50,
        easing: 'ease-out'
    });

    // Initialize all features
    initFAQ();
    initForm();
    initSmoothScroll();
    initCheckoutAnimation();
});

// ==========================================
// FAQ ACCORDION
// ==========================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ==========================================
// FORM HANDLING
// ==========================================

function initForm() {
    const form = document.getElementById('contactForm');
    const whatsappInput = document.getElementById('whatsapp');
    
    // WhatsApp mask
    if (whatsappInput) {
        whatsappInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else {
                value = value.substring(0, 11).replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            }
            
            e.target.value = value;
        });
    }
    
    // Form submission
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const formMessage = document.getElementById('formMessage');
            
            // Get form data
            const formData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                whatsapp: document.getElementById('whatsapp').value,
                empresa: document.getElementById('empresa').value,
                servico: document.getElementById('servico').value,
                faturamento: document.getElementById('faturamento').value,
                mensagem: document.getElementById('mensagem').value
            };
            
            // Validate required fields
            if (!formData.nome || !formData.email || !formData.whatsapp || !formData.servico || !formData.faturamento) {
                showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Validate email
            if (!isValidEmail(formData.email)) {
                showFormMessage('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            // Disable button and show loading
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            try {
                // Send to webhook
                const response = await fetch('https://n8n.7sevenpay.com.br/webhook/5aac5701-1dac-4d5b-9563-abeba840e777', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    showFormMessage('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                    form.reset();
                } else {
                    throw new Error('Erro ao enviar');
                }
            } catch (error) {
                showFormMessage('❌ Erro ao enviar mensagem. Por favor, tente novamente.', 'error');
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = 'Quero Minha Proposta Gratuita Agora';
            }
        });
    }
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = type === 'success' ? 'flex' : 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore empty anchors
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const offsetTop = target.offsetTop - 80; // 80px offset for fixed header if any
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

// Add scroll-based animations for elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    // Parallax effect for hero blobs
    const heroBlobs = document.querySelectorAll('.hero-blob');
    heroBlobs.forEach((blob, index) => {
        const speed = index === 0 ? 0.5 : -0.5;
        blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Format phone number
function formatPhoneNumber(value) {
    const numbers = value.replace(/\D/g, '');
    
    if (numbers.length <= 10) {
        return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// ANALYTICS (Optional)
// ==========================================

// Track CTA clicks
function trackCTAClick(ctaName) {
    // Add your analytics tracking here
    console.log('CTA Clicked:', ctaName);
    
    // Example: Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'cta_click', {
    //         'event_category': 'engagement',
    //         'event_label': ctaName
    //     });
    // }
}

// Track form submissions
function trackFormSubmission() {
    console.log('Form Submitted');
    
    // Example: Facebook Pixel
    // if (typeof fbq !== 'undefined') {
    //     fbq('track', 'Lead');
    // }
}

// Add click tracking to CTAs
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackCTAClick(buttonText);
        });
    });
});

// ==========================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================

// Lazy load images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Preload critical resources
function preloadResources() {
    const criticalResources = [
        // Add paths to critical CSS, fonts, etc.
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        if (link.as === 'font') {
            link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
    });
}

// ==========================================
// ERROR HANDLING
// ==========================================

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // You can send errors to your logging service here
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You can send errors to your logging service here
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c🚀 Seven Pay Landing Page', 'color: #0066FF; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvido com ❤️ para transformar pagamentos digitais', 'color: #999; font-size: 12px;');

// ==========================================
// CHECKOUT ANIMATION
// ==========================================

function initCheckoutAnimation() {
    let currentStep = 1;
    let animationTimeout;
    
    const stepData = {
        1: {
            title: 'E-mail',
            subtitle: 'Digite seu e-mail para continuar',
            value: 'cliente@exemplo.com',
            input: 'emailInput'
        },
        2: {
            title: 'Dados Pessoais',
            subtitle: 'Preencha seus dados',
            values: {
                nameInput: 'João Silva Santos',
                cpfInput: '123.456.789-00',
                whatsappInput: '(11) 98765-4321'
            }
        },
        3: {
            title: 'Pagamento',
            subtitle: 'Escolha uma forma de pagamento',
            payment: 'pix'
        }
    };
    
    function typeText(element, text, callback) {
        element.classList.add('typing');
        let index = 0;
        element.value = '';
        
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                element.value += text[index];
                index++;
            } else {
                clearInterval(typeInterval);
                element.classList.remove('typing');
                if (callback) setTimeout(callback, 800);
            }
        }, 50);
    }
    
    function updateStep(step) {
        const stepNumber = document.getElementById('stepNumber');
        const stepTitle = document.getElementById('stepTitle');
        const stepSubtitle = document.getElementById('stepSubtitle');
        const checkoutButton = document.getElementById('checkoutButton');
        
        // Update header
        stepNumber.textContent = step;
        stepTitle.textContent = stepData[step].title;
        stepSubtitle.textContent = stepData[step].subtitle;
        
        // Hide all steps
        document.querySelectorAll('.checkout-step-content').forEach(el => {
            el.classList.add('hidden');
        });
        
        // Show current step
        const currentStepEl = document.getElementById(`step${step}`);
        if (currentStepEl) {
            currentStepEl.classList.remove('hidden');
        }
        
        // Animate step
        if (step === 1) {
            const emailInput = document.getElementById('emailInput');
            setTimeout(() => {
                typeText(emailInput, stepData[1].value, () => {
                    setTimeout(() => nextStep(), 1000);
                });
            }, 500);
        } else if (step === 2) {
            const nameInput = document.getElementById('nameInput');
            const cpfInput = document.getElementById('cpfInput');
            const whatsappInput = document.getElementById('whatsappInput');
            
            setTimeout(() => {
                typeText(nameInput, stepData[2].values.nameInput, () => {
                    typeText(cpfInput, stepData[2].values.cpfInput, () => {
                        typeText(whatsappInput, stepData[2].values.whatsappInput, () => {
                            setTimeout(() => nextStep(), 1000);
                        });
                    });
                });
            }, 500);
        } else if (step === 3) {
            setTimeout(() => {
                // Animate payment selection
                const paymentOptions = document.querySelectorAll('.payment-option');
                let selectedIndex = 0;
                
                const selectInterval = setInterval(() => {
                    // Remove active from all
                    paymentOptions.forEach(opt => {
                        opt.classList.remove('active');
                        opt.querySelector('.payment-radio').classList.remove('active');
                    });
                    
                    // Add active to current
                    if (selectedIndex < paymentOptions.length) {
                        const current = paymentOptions[selectedIndex];
                        current.classList.add('active');
                        current.querySelector('.payment-radio').classList.add('active');
                        selectedIndex++;
                    } else {
                        clearInterval(selectInterval);
                        // Keep PIX selected
                        const pixOption = document.querySelector('[data-payment="pix"]');
                        if (pixOption) {
                            pixOption.classList.add('active');
                            pixOption.querySelector('.payment-radio').classList.add('active');
                        }
                        setTimeout(() => {
                            checkoutButton.textContent = 'Finalizar Compra';
                            setTimeout(() => showSuccess(), 1000);
                        }, 800);
                    }
                }, 600);
            }, 500);
        }
    }
    
    function nextStep() {
        if (currentStep < 3) {
            currentStep++;
            updateStep(currentStep);
        }
    }
    
    function showSuccess() {
        const checkoutButton = document.getElementById('checkoutButton');
        
        // Hide all steps
        document.querySelectorAll('.checkout-step-content').forEach(el => {
            el.classList.add('hidden');
        });
        
        // Show success
        const successStep = document.getElementById('stepSuccess');
        successStep.classList.remove('hidden');
        
        // Update header
        document.getElementById('stepNumber').textContent = '✓';
        document.getElementById('stepTitle').textContent = 'Concluído';
        document.getElementById('stepSubtitle').textContent = 'Processamento finalizado';
        
        checkoutButton.textContent = 'Novo Pedido';
        
        // Restart after 3 seconds
        setTimeout(() => {
            restart();
        }, 3000);
    }
    
    function restart() {
        currentStep = 1;
        
        // Clear inputs
        document.getElementById('emailInput').value = '';
        document.getElementById('nameInput').value = '';
        document.getElementById('cpfInput').value = '';
        document.getElementById('whatsappInput').value = '';
        
        // Remove active from payments
        document.querySelectorAll('.payment-option').forEach(opt => {
            opt.classList.remove('active');
            opt.querySelector('.payment-radio').classList.remove('active');
        });
        
        // Reset button
        document.getElementById('checkoutButton').textContent = 'Continuar';
        
        // Start again
        updateStep(1);
    }
    
    // Start animation after page load
    setTimeout(() => {
        updateStep(1);
    }, 1500);
}
